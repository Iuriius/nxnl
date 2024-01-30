"use client";
import styles from "./carousel.module.css";
import Image from "next/image";
import { register } from "swiper/element/bundle";
import { React, useRef, useEffect } from "react";
register();
/*
/**|======================================
/**| pics
/**|======================================
*/
import Testpic from "@/public/whitebg.png";

export default function Carousel() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);
  return (
    <swiper-container
      ref={swiperElRef}
      speed="500"
      loop="true"
      css-mode="true"
      navigation="true"
      pagination="true"
      scrollbar="true"
      autoplay="true"
    >
      <swiper-slide>
        <Image src={Testpic} />
      </swiper-slide>
      <swiper-slide>
        <Image src={Testpic} />
      </swiper-slide>
      <swiper-slide>
        <Image src={Testpic} />
      </swiper-slide>
    </swiper-container>
  );
}
