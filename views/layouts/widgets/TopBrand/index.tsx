import React, { Fragment } from "react";

type TopBrandProps = {};

const TopBrand: React.FC<TopBrandProps> = () => {
  return (
    <Fragment>
      <div className="brand-panel-contain ">
        <ul>
          <li>
            <a href="#">top brand</a>
          </li>
          <li>
            <a>:</a>
          </li>
          <li>
            <a href="collections/leftsidebar">apple</a>
          </li>
          <li>
            <a href="collections/leftsidebar">samsung</a>
          </li>
          <li>
            <a href="collections/leftsidebar">moto</a>
          </li>
          <li>
            <a href="collections/leftsidebar">mi</a>
          </li>
          <li>
            <a href="collections/leftsidebar">nokia</a>
          </li>
          <li>
            <a href="collections/leftsidebar">oppo</a>
          </li>
          <li>
            <a href="collections/leftsidebar">vivo </a>
          </li>
          <li>
            <a href="collections/leftsidebar">poco</a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
export default TopBrand;
