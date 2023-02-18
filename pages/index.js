import Feature from "../indexModule/components/Feature";
import Pricing from "../indexModule/components/Pricing";
import Hero from "../indexModule/components/Hero";
import Layout from "../indexModule/components/Layout/Layout";
import SeoHead from "../indexModule/components/SeoHead";

export default function Home() {
  return (
    <>
      {/*<SeoHead title='LaslesVPN Landing Page' />*/}
      {/*<Layout>*/}
        <Hero />
        <Feature />
        <Pricing />
      {/*</Layout>*/}
    </>
  );
}
