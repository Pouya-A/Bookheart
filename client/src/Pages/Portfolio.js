import React from "react";
import PortfolioImg from "../Components/PortfolioImg";
import TabItems from "../Components/TabItems";
import TitleMenu from "../Components/TitleMenu";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-name">
        <h6>Portfolio</h6>
      </div>

      <div className="portfolio-title">
        <div className="portfolio-title-info">Book Shelf</div>
      </div>

      <div>
        <TabItems />
      </div>

      <div>
        <PortfolioImg />
      </div>

      <TitleMenu />
    </div>
  );
};

export default Portfolio;
