import React from 'react';
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
    <li className="bg-white border border-x-white border-t-white border-b-zinc-200 sm:p-4 rounded-lg flex flex-row space-x-4 items-start md:grid-cols-3 hover:text-primary-700 hover:cursor-pointer hover:bg-zinc-50 hover:border  hover:border-zinc-200 ">
      <PrismicLink document={article} tabIndex="-1">
        <div className="w-64 aspect-h-3 relative bg-gray-300">
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
        <p className="font-sans italic tracking-tighter text-slate-500">
          {dateFormatter.format(date)}
        </p>
        <Heading as="h2">
          <PrismicLink document={article}>
            <PrismicText field={article.data.title} />
          </PrismicLink>
        </Heading>
        {excerpt && (
          <p className="font-sans leading-relaxed md:text-lg md:leading-relaxed text-black-500">
            {excerpt}
          </p>
        )}
      </div>
    </li>
  );
};

const ArticleLists = ({ context}) => {

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
