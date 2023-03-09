import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";

const Destinos = ({ page, navigation, settings }) => {
  return (
    <Layout
      withHeaderDivider={true}
      withProfile={true}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>
          {prismicH.asText(page.data.title)} |{" "}
          {prismicH.asText(settings.data.name)}
        </title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Destinos;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const page = await client.getByUID("page", "destinos");

  return {
    props: {
      navigation,
      settings,
      page,
    },
  };
}
