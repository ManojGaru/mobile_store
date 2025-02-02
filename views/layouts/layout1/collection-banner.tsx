import React, { useEffect, useLayoutEffect, useState } from "react";
import { NextPage } from "next";
import { Row, Col, Media } from "reactstrap";
import Link from "next/link";
import BrandCard from "components/BrandCard";
import { brands } from "../../../data/data";
import Slider from "react-slick";

interface CollectionBannerProps {
  img: string;
  title: string;
  subTitle: string;
  btn: string;
  category: string;
}

interface Banners {
  banner: CollectionBannerProps;
}

const banners = [
  {
    img: "/images/layout-2/collection-banner/1.jpg",
    title: "Newest",
    subTitle: "fashion",
    category: "FASHION",
    btn: "shop now",
  },
  {
    img: "/images/layout-2/collection-banner/2.jpg",
    title: "camera",
    subTitle: "lenses",
    category: "ELECTRONICS",
    btn: "shop now",
  },
  {
    img: "/images/layout-2/collection-banner/3.jpg",
    title: "smart mini",
    subTitle: "lg mini",
    category: "ELECTRONICS",
    btn: "shop now",
  },
];

const CollectionBannerList: React.FC<Banners> = ({ banner }) => {
  return (
    <Col md="4">
      <div className="collection-banner-main banner-1  p-right">
        <div className="collection-img">
          <Media src={banner.img} alt="dsfds" style={{ height: 540 }} />
        </div>
        <div className="collection-banner-contain">
          <div>
            <h3>{banner.title}</h3>
            <h4>{banner.subTitle}</h4>
            <div className="shop">
              <Link
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

const CollectionBanner: NextPage = () => {
  const initsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 700 ? 9 : 2,

    slidesToScroll: 3,
  };
  const [settings, setSettings] = useState<any>(initsettings);

  useEffect(() => {
    console.log(window.innerWidth);
  });

  return (
    <>
      <section className="collection-banner section-pt-space b-g-white ">
        <div className="custom-container">
          <Row className="collection2">
            <Slider {...settings} autoplay>
              {brands?.map((banner, i) => (
                <BrandCard brand={banner} key={i} />
              ))}
            </Slider>
          </Row>
        </div>
      </section>
    </>
  );
};

export default CollectionBanner;
