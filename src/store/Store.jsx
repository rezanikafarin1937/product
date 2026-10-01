import InfiniteLoading from "../utils/infiniteLoading/InfiniteLoading";
import Card from "../components/card/Card";
import Frame from "../components/frame/Frame";

const Store = () => {
  return (
    <div className="wrapper">
      <div className="margin-top" style={{marginTop : "200px"}}></div>
      <div style={{ width: "15%" }} className="margin-top">
        <Frame />
      </div>
      <InfiniteLoading
        url={`${process.env.REACT_APP_API_URL}/api/products`}
        limit="10"
      >
        <Card />
      </InfiniteLoading>
    </div>
  );
};

export default Store;
