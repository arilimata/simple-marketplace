"use client";
import React from "react";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./itemCarouselButton";

import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  links: string[];
  width?: number;
  height?: number;
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { links, width, height, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {links.map((link, index) => (
            <div
              className="embla__slide flex items-center justify-center"
              key={index}
            > 
              <Image
              src={link}
              alt={`Slide ${index + 1}`}
              width={width}
              height={height}
              className="rounded-2xl object-cover"
              style={{
                width: width ? `${width}px` : "100%",
                height: height ? `${height}px` : "100%",
              }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
