export const getCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  if (!res.ok) {
    throw new Error("failed to fetch categories");
  }
  return res.json();
};

export const getNewsByCategory = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
  );
  if (!res.ok) {
    throw new Error("failed to fetch categories");
  }
  return res.json();
};

export const getNewsDetails = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
  );
  if (!res.ok) {
    throw new Error("failed to fetch categories");
  }
  return res.json();
};
