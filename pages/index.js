import Feature from "../indexModule/components/Feature";
import Pricing from "../indexModule/components/Pricing";
import Hero from "../indexModule/components/Hero";

import SeoHead from "../indexModule/components/SeoHead";

import Head from "next/head";
import { Layout } from "../components/Layout";
import { createClient } from "../prismicio";

const Home = ({ navigation, settings }) => {
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
          <title>Agencia de Viajes Tamec</title>
        </Head>

        <Hero />
        <Feature />
        <Pricing />
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

  return {
    props: {
          navigation,
      settings,
    },
  };
}
