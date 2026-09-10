import { useState } from "react";
import Input from "../input/Input";

const Search = () => {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

//   const handleSearch = (e) => {
//     if(e.key === "Enter"){
//     console.log("Text = ",text)}
//     else{
//         console.log("no")
//     }
    
//   }


const handleSearch = async (e) => {
  if (e.key !== "Enter") return;

  const text = e.target.value.trim();

  if (!text) return;

  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/products/search?text=${encodeURIComponent(text)}`
    );

    const result = await response.json();

    console.log("Search Result =", result);

  } catch (error) {
    console.log("Search Error =", error);
  }
};


  return (
    <>
      <Input type="text" onChange={handleOnChange}   onKeyDown={handleSearch} placeholder="جستجو" />
    </>
  );
};

export default Search;
