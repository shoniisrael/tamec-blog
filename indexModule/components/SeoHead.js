import Head from "next/head";
import { useRouter } from "next/router";

// Default value for some meta data
const defaultMeta = {
  title: "Agencia de Viajes Tamec",
  siteName: "Tamec Viajes",
  description:
    "Experiencias de viaje inolvidables con Tamec: destinos personalizados, alta calidad y atención excepcional. ¡Descubre más!",
  // change base url of your web (without '/' at the end)
  url: "https://tamecviajes.com",
  type: "website",
  robots: "follow, index",
  // change with url of your image (recommended dimension = 1.91:1)
  // used in twitter, facebook, etc. card when link copied in tweet/status
  image: "https://images.prismic.io/tamecblog/133e0bb7-d6f9-43b8-966d-8a43d85155ee_WhatsApp+Image+2023-02-03+at+10.06.51.jpeg?auto=compress%2Cformat&rect=0%2C6%2C569%2C427&w=256&fit=max",
  author: "ArteCodigoYCafe",
};

/**
 * Next Head component populated with necessary SEO tags and title
 * props field used:
 * - title
 * - siteName
 * - description
 * - url
 * - type
 * - robots
 * - image
 * - date
 * - author
 * - templateTitle
 * all field are optional (default value defined on defaultMeta)
 * @example
 * <SeoHead title="Page's Title" />
 */
const SeoHead = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  // Use siteName if there is templateTitle
  // but show full title if there is none
  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@F2aldi" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta name="author" property="article:author" content={meta.author} />
        </>
      )}
      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={"/favicon/favicon.ico"} />
      ))}
      {/* Windows 8 app icon */}
      <meta name="msapplication-TileColor" content="#51b2b6" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/ms-icon-144x144.png"
      />
      {/* Accent color on supported browser */}
      <meta name="theme-color" content="#51b2b6" />
    </Head>
  );
};

// Favicons, other icons, and manifest definition
const favicons = [
  {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "mask-icon",
    href: "/favicon/favicon.ico",
    color: "#F59A9A",
  },
  {
    rel: "icon",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },
];

export default SeoHead;
