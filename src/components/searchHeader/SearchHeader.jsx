import { useState } from "react";
import SearchInput from "../searchInput/SearchInput";
import { useNavigate } from "react-router-dom";
import styles from "./search.module.scss";

const Search = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const title = text.trim();
    if (!title) return;

    navigate(`/search?title=${encodeURIComponent(title)}`);
    setText("");
  };

  return (
    <form
      className={styles.search}
      onSubmit={handleSearch}
      role="search"
      aria-label="جستجوی محصولات"
    >
      <SearchInput
        type="search"
        value={text}
        onChange={handleOnChange}
        placeholder="جستجوی محصول"
      />
    </form>
  );
};

export default Search;

