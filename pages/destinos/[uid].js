import Head from "next/head";
import { PrismicLink, PrismicText, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const LatestDestinos = ({ destinos }) => {
  const date = prismicH.asDate(
    destinos.data.publishDate || destinos.first_publication_date
  );

  return (
    <li>
      <h1 className="text-slate-800 mb-3 text-3xl font-semibold tracking-tighter md:text-4xl">
        <PrismicLink document={destinos}>
          <PrismicText field={destinos.data.title} />
        </PrismicLink>
      </h1>
      <p className="text-slate-500 font-sans italic tracking-tighter">
        {dateFormatter.format(date)}
      </p>
    </li>
  );
};

const Destinos = ({ destinos, latestDestinos, navigation, settings }) => {
  const date = prismicH.asDate(
    destinos.data.publishDate || destinos.first_publication_date
  );

  return (
    <Layout
      withHeaderDivider={false}
      withProfile={false}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>
          {prismicH.asText(destinos.data.title)} |{" "}
          {prismicH.asText(settings.data.name)}
        </title>
      </Head>
      <div className=" container mx-auto p-4">
        <div>
          <PrismicLink
            href="/destinos"
            className=" text-primary font-semibold tracking-tight"
          >
            &larr; Volver a Destinos
          </PrismicLink>
        </div>
      </div>
      <destinos>
        <SliceZone slices={destinos.data.slices} components={components} />
      </destinos>
    </Layout>
  );
};

export default Destinos;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const destinos = await client.getByUID("destinos", params.uid);
  const latestDestinos = await client.getAllByType("destinos", {
    limit: 3,
    orderings: [
      { field: "my.destinos.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      destinos,
      latestDestinos,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const destinos = await client.getAllByType("destinos");

  return {
    paths: destinos.map((destinos) => prismicH.asLink(destinos)),
    fallback: false,
  };
}
