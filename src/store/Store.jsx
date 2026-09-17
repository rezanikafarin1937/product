import InfiniteLoading from "../utils/infiniteLoading/InfiniteLoading";
import Card from "../components/card/Card";

const Store = () => {
  return (
    <div className="wrapper">
      <InfiniteLoading   url={`${process.env.REACT_APP_API_URL}/api/products`} limit="10">
        <Card />
      </InfiniteLoading>
    </div>
  );
};

export default Store;
