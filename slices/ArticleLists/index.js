import React from "react";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { Layout } from "../../components/Layout";
import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const findFirstImage = (slices) => {
  const imageSlice = slices.find((slice) => slice.slice_type === "image");

  if (imageSlice && prismicH.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image;
  }
};

const getExcerpt = (slices) => {
  const text = slices
    .filter((slice) => slice.slice_type === "text")
    .map((slice) => prismicH.asText(slice.primary.text))
    .join(" ");

  const excerpt = text.substring(0, 300);

  if (text.length > 300) {
    return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
  } else {
    return excerpt;
  }
};

const Article = ({ article }) => {
  const featuredImage =
    (prismicH.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );
  const excerpt = getExcerpt(article.data.slices);

  return (
    <li className="flex flex-row items-start space-x-4 rounded-lg border border-x-white border-t-white border-b-gray-200 bg-white hover:cursor-pointer hover:border hover:border-gray-200 hover:bg-gray-50 hover:text-primary-dark sm:p-4  md:grid-cols-3 ">
      <PrismicLink document={article} tabIndex="-1">
        <div className="aspect-h-3 relative w-64 bg-gray-300">
          {prismicH.isFilled.image(featuredImage) && (
            <PrismicNextImage
              field={featuredImage}
              fill={false}
              width={250}
              height={200}
              className="object-cover"
            />
          )}
        </div>
      </PrismicLink>
      <div className="grid grid-cols-1 gap-3 md:col-span-2">
        <p className="text-slate-500 font-sans italic tracking-tighter">
          {dateFormatter.format(date)}
        </p>
        <Heading as="h2">
          <PrismicLink document={article}>
            <PrismicText field={article.data.title} />
          </PrismicLink>
        </Heading>
        {excerpt && (
          <p className="text-black-500 font-sans leading-relaxed md:text-lg md:leading-relaxed">
            {excerpt}
          </p>
        )}
      </div>
    </li>
  );
};

const ArticleLists = ({ context }) => {
  return (
    <Bounded size="widest">
      <ul className="grid grid-cols-1 gap-8">
        {context.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ul>
    </Bounded>
  );
};

export default ArticleLists;
