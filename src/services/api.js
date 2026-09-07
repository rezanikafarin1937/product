import axios from "axios";


const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export async function getProducts() {
  const data = await client("/api/products");
  return data;
}

export async function getProduct(id) {
  const data = await client(`/api/products/${id}`);
  return data;
}

export async function auth(username, password, mobile, mode) {
  const data =
    mode === "login"
      ? {
          mobile,
          password,
        }
      : {
          name: username,
          mobile,
          password,
        };

  const url =
    mode === "login"
      ? `${process.env.REACT_APP_API_URL}/api/users/login`
      : `${process.env.REACT_APP_API_URL}/api/users`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if(result){
        return result
      }

      if (!response.ok) {
        return;
      }

    } catch (error) {
      console.log("خطا در ارتباط با سرور:", error);
    }

}
