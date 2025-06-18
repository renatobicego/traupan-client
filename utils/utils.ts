import catalogItems from "../data/catalog.json";

export const getCatalogById = (id: string) => {
  const catalog = catalogItems.catalog.find(
    (item: { id: string }) => item.id === id
  );
  if (!catalog) {
    throw new Error(`Catalog with id ${id} not found`);
  }
  return catalog;
};
