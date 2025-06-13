const urls = {
  main: "/",
  catalog: "/catalogo",
  about: "/sobre-nosotros",
  contact: "/contacto",
};

export const siteConfig = {
  name: "Traupan",
  description: "Herramientas y máquinas para industrias.",
  urls,
  navItems: [
    {
      label: "Catálogo",
      href: urls.catalog,
    },
    {
      label: "Sobre Nosotros",
      href: urls.about,
    },
  ],
  navMenuItems: [
    {
      label: "Catálogo",
      href: urls.catalog,
    },
    {
      label: "Sobre Nosotros",
      href: urls.about,
    },
    {
      label: "Contacto",
      href: urls.contact,
    },
  ],
};

export type SiteConfig = typeof siteConfig;
