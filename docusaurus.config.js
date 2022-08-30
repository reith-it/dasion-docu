// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Dasion Docs",
  tagline:
    "Das Backup mit einzigartigem Schutz. Software für Windows, Mac, Server und alle Ihre Applikationen.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          postsPerPage: "ALL",
          blogSidebarTitle: "Recent blog entries",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "release-notes",
        path: "release-notes",
        routeBasePath: "release-notes",
        include: ["**/*.{md,mdx}"],
        showReadingTime: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",

        logo: {
          alt: "Logo",
          srcDark: "img/logo-dark.svg",
          src: "img/logo.svg",
          href: "https://dasion.de/",
        },
        items: [
          { to: "/", label: "Home", position: "left" },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            to: "/release-notes",
            label: "Release Notes",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://console.dasion.de/",
            label: "My Account",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Dasion Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs/intro",
              },
              {
                label: "Release Notes",
                to: "/release-notes",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },

          {
            title: "Services",

            items: [
              {
                label: "Cloud Backup",
                href: "https://dasion.de/cloud-backup/",
              },
              {
                label: "Hybrid Backup",
                href: "https://dasion.de/hybrid-backup/",
              },
              {
                label: "Einsatzgebiete",
                href: "https://dasion.de/einsatzgebiete-fuer-cloudbackup/",
              },
              {
                label: "Preise",
                href: "https://dasion.de/preise/",
              },
              {
                label: "Reseller",
                href: "https://dasion.de/reseller-werden/",
              },
              {
                label: "Kontakt",
                href: "https://dasion.de/kontakt/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Facebook",
                href: "https://www.facebook.com/dasion.gmbh/",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/dasion.gmbh/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Dasion_GmbH",
              },
              {
                label: "LinkedIn",
                href: "http://linkedin.com/company/dasion-gmbh",
              },
            ],
          },
          {
            title: "Contact Us",
            items: [
              {
                label: "E-Mail",
                href: "mailto:info@dasion.de",
              },
              {
                label: "Am Telefon",
                href: "tel:+49 6224 98 703 98",
              },
            ],
          },
          {
            title: "For More",
            items: [
              {
                label: "FAQ",
                href: "https://dasion.de/faq/",
              },
              {
                label: "Support",
                href: "https://support.dasion.de/help/de-de",
              },
              {
                label: "Fernwartung",
                href: "https://dasion.de/fernwartung/",
              },
              {
                label: "AGB",
                href: "https://dasion.de/agb/",
              },
              {
                label: "Impressum",
                href: "https://dasion.de/impressum/",
              },
              {
                label: "Datenschutzichtlinien",
                href: "https://dasion.de/datenschutzrichtlinien/",
              },
            ],
          },
        ],
        logo: {
          alt: "Dasion Logo",
          src: "/img/logo.svg",
          href: "https://dasion.de/",
          width: "200px",
          target: "_blank",
        },
        copyright: `<span style="opacity:0.75">Wir glauben an den Datenstandort Deutschland als optimale Basis für die Sicherheit Ihrer Daten</span>
        </br>
        </br> Made with ❤️ in Leimen, Deutschland
        </br> Copyright © ${new Date().getFullYear()} Dasion Docs, Inc. Dasion.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
