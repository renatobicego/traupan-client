const urls = {
  main: "/",
  catalog: "/catalogo",
  about: "/sobre-nosotros",
  contact: "/#contacto",
};

export const siteConfig = {
  name: "Traupan",
  description: "Herramientas y máquinas para industrias.",
  urls,
  email: "administracion@traupan.com.ar",
  phone: {
    number: "1143045151",
    label: "11 4304 5151",
  },
  whatsapp: {
    number: "+5491134411970",
    label: "+54 9 11 3441 1970",
  },
  direction: {
    label: "Ciudad Autónoma de Buenos Aires, Argentina",
    url: "https://g.co/kgs/uApZJtG",
  },
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
      label: "Inicio",
      href: urls.main,
    },
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
