import SeoHead from "../indexModule/components/SeoHead";

import Head from "next/head";
import { Layout } from "../components/Layout";
import { createClient } from "../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

const Home = ({ navigation, settings, page }) => {
  return (
    <>
      <SeoHead title="Agencia de Viajes Tamec" />
      <Layout
        withHeaderDivider={false}
        withProfile={false}
        navigation={navigation}
        settings={settings}
      >
        <Head>
          <title>TAMEC | Agencia de Viajes Online</title>
        </Head>

        <SliceZone
          slices={page.data.slices}
          components={components}
          className="mt-16"
        />
        {/*<Pricing />*/}
        {/*<Footer />*/}
      </Layout>
    </>
  );
};

export default Home;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const page = await client.getByUID("page", "home");

  return {
    props: {
      navigation,
      settings,
      page,
    },
  };
}
