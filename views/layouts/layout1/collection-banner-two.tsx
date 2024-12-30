import React from "react";
import { NextPage } from "next";
import { Row, Col, Media } from "reactstrap";
import Link from "next/link";

interface CollectionBannerProps {
  img1: string;
  img: string;
  title: string;
  subTitle: string;
  btn: string;
  category: string;
}

interface Banners {
  banner: CollectionBannerProps;
  first: boolean;
}

const banners = [
  {
    img1: "/images/layout-2/collection-banner/7.jpg",
    img: "https://static.vecteezy.com/system/resources/previews/010/930/988/non_2x/shopping-online-on-phone-with-podium-paper-art-modern-background-gifts-box-vector.jpg",
    title: "save up to 30% off",
    subTitle: `new<span>smart world</span>`,
    btn: "shop now",
    category: "FASHION",
  },
];

const CollectionBannerList: React.FC<Banners> = ({ banner, first }) => {
  return (
    <Col>
      <div className="collection-banner-main banner-5 p-center">
        <div className="collection-img">
          <Media
            src={first ? banner.img1 : banner.img}
            className="bg-img  "
            alt="banner"
          />
        </div>
        <div className="collection-banner-contain ">
          <div className="sub-contain">
            <h3>{banner.title}</h3>
            <h4 dangerouslySetInnerHTML={{ __html: banner.subTitle }}></h4>
            <div className="shop">
              <Link
                className="btn btn-normal"
                href={{
                  pathname: "/collections/leftsidebar/",
                  query: {
                    category: banner.category,
                  },
                }}
              >
                {banner.btn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

const CollectionBannerTwo = ({ first }: any) => {
  return (
    <section className="collection-banner section-pb-space ">
      <div className="custom-container">
        <Row>
          {banners.map((banner, i) => (
            <CollectionBannerList banner={banner} key={i} first={first} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default CollectionBannerTwo;
