import React from "react";
import { NextPage } from "next";
import { Row, Col, Container, Media } from "reactstrap";
import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const CategoryList = [
  { img: "/images/common/717JX3femML._SX679_.jpg", category: "Smart" },
  { img: "/images/common/717JX3femML._SX679_.jpg", category: "Gadget" },
  { img: "/images/common/717JX3femML._SX679_.jpg", category: "Apple" },
  { img: "/images/common/717JX3femML._SX679_.jpg", category: "Pixel" },
  { img: "/images/common/717JX3femML._SX679_.jpg", category: "Moto" },
  { img: "/images/common/717JX3femML._SX679_.jpg", category: "Sony" },
  { img: "/images/common/717JX3femML._SX679_.jpg", category: "Samsung" },
];
const Category: NextPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="slide-6 no-arrow">
              <Slider {...settings}>
                {CategoryList.map((data, i) => (
                  <div key={i}>
                    <div className="category-contain">
                      <a href="#">
                        <div className="img-wrapper">
                          <Media
                            src={data.img}
                            alt="category"
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <div className="btn-rounded">{data.category}</div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Category;
