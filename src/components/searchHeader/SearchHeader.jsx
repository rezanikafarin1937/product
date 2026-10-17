import { useState } from "react";
import SearchInput from "../searchInput/SearchInput"
import { useNavigate } from "react-router-dom";
import styles from "./search.module.scss"

const Search = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const onEnterHandleSearch = (e) => {
    if (e.key !== "Enter") return;
    const title = text.trim();
    if (!title) return;
    navigate(`/search?title=${encodeURIComponent(title)}`);
    setText("")
  };

  const onClickHandleSearch = (e) =>{
    const title = text.trim();
    if (!title) return;
    navigate(`/search?title=${encodeURIComponent(title)}`);
    setText("")
  }

  return (
    <div className={styles.search}>
      <SearchInput
        type="text"
        value={text}
        onChange={handleOnChange}
        onKeyDown={onEnterHandleSearch}
        onClickSearch={onClickHandleSearch}
        placeholder="جستجوی محصول"
      />
    </div>
  );
};

export default Search;

