
const PRODUCTS_URL = `${process.env.PUBLIC_URL}/database/products.json`;

export async function getProducts() {
  const response = await fetch(PRODUCTS_URL);

  if (!response.ok) {
    throw new Error("خطا در دریافت محصولات");
  }

  const data = await response.json();

  return { data };
}

export async function getProduct(id) {
  const response = await getProducts();

  const product = response.data.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    throw new Error("محصول موردنظر پیدا نشد");
  }

  return { data: product };
}

// احراز هویت در نسخه استاتیک غیرفعال است.
export async function auth() {
  throw new Error("احراز هویت در نسخه استاتیک فعال نیست.");
}
