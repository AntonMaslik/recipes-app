import "@components/pages/styles/index.scss";
import { Helmet } from "react-helmet";

export const IndexPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Welcome</title>
      </Helmet>
      <div className="container-index">
        <h1 className="title-content">
          Welcome to the world of delicious recipes!
        </h1>
        <p className="description-content">
          Discover new culinary masterpieces and share your favorites recipes!
        </p>
      </div>
    </>
  );
};
