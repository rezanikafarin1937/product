
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./pagination.module.scss";

const Pagination = ({
  next = null,
  prev = null,
  pages = null,
  last = null,
  first = null,
  per_page = 2,
  path = "feminine",
  search = null,
  searchValue = null,
}) => {
  const [currentPage, setCurrentPage] = useState(null);

  const getPageUrl = (myPage) => {
    const params = new URLSearchParams();

    params.set("page", myPage);
    params.set("per_page", per_page);

    if (search && searchValue) {
      params.set(search, searchValue);
    }

    return `/${path}?${params.toString()}`;
  };

  function renderItems() {
    let items = [];

    if (currentPage !== null) {
      if (prev !== null) {
        items.push(
          <Link
            key="0"
            to={getPageUrl(prev)}
            className={styles.paginate__btn}
            aria-label="صفحه قبلی"
          >
            <span className={styles.paginate__text}>قبلی</span>
            <span className={styles.paginate__arrow}>»</span>
          </Link>
        );
      }

      if (first !== null && currentPage !== first) {
        items.push(
          <Link
            key="1"
            to={getPageUrl(first)}
            className={styles.paginate__btn}
          >
            {Number(first).toLocaleString("fa")}
          </Link>
        );
      }

      if (first !== null && currentPage > first + 2) {
        items.push(
          <span key="8" className={styles.paginate__dot} aria-hidden="true">
            ...
          </span>
        );
      }

      if (currentPage - 1 > first) {
        items.push(
          <Link
            key="2"
            to={getPageUrl(currentPage - 1)}
            className={styles.paginate__btn}
          >
            {Number(currentPage - 1).toLocaleString("fa")}
          </Link>
        );
      }

      items.push(
        <span
          key="3"
          className={styles.paginate__activeBtn}
          aria-current="page"
        >
          {Number(currentPage).toLocaleString("fa")}
        </span>
      );

      if (last !== null && currentPage + 1 < last) {
        items.push(
          <Link
            key="4"
            to={getPageUrl(currentPage + 1)}
            className={styles.paginate__btn}
          >
            {Number(currentPage + 1).toLocaleString("fa")}
          </Link>
        );
      }

      if (last !== null && currentPage < last - 2) {
        items.push(
          <span key="5" className={styles.paginate__dot} aria-hidden="true">
            ...
          </span>
        );
      }

      if (last !== null && currentPage !== last) {
        items.push(
          <Link
            key="6"
            to={getPageUrl(last)}
            className={styles.paginate__btn}
          >
            {Number(last).toLocaleString("fa")}
          </Link>
        );
      }

      if (next !== null) {
        items.push(
          <Link
            key="7"
            to={getPageUrl(next)}
            className={styles.paginate__btn}
            aria-label="صفحه بعدی"
          >
            <span className={styles.paginate__text}>بعدی</span>
            <span className={styles.paginate__arrow}>«</span>
          </Link>
        );
      }
    }

    return items;
  }

  useEffect(() => {
    if (prev !== null) {
      setCurrentPage(Number(prev) + 1);
    } else if (next !== null) {
      setCurrentPage(Number(next) - 1);
    } else {
      setCurrentPage(1);
    }
  }, [prev, next]);

  return (
    <nav
      className={styles.paginate}
      aria-label="صفحه‌بندی محصولات"
    >
      {renderItems()}
    </nav>
  );
};

export default Pagination;
