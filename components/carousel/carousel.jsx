"use client";
import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/whitebg.png",
    originalAlt: "Descriptions for image 1",
  },
  {
    original: "/whitebg.png",
    originalAlt: "Descriptions for image 2",
  },
  {
    original: "/whitebg.png",
    originalAlt: "Descriptions for image 3",
  },
];

export default class Carousel extends Component {
  render() {
    return (
      <ImageGallery
        items={images}
        autoPlay
        showThumbnails={false}
        showFullscreenButton={false}
        showNav={false}
        slideInterval={5000}
        showBullets={true}
      />
    );
  }
}
