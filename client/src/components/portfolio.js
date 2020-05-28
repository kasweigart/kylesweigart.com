import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import weather from "../images/weatherApp.png";
import calc from "../images/calculatorApp.png";
import etch from "../images/etchasketchApp.png";
import tictactoe from "../images/tictactoeApp.png";

const items = [
  {
    src: `${weather}`,
    header: 'Weather Search',
    altText: 'Weather Search',
    caption: "Input any city arould the world and return the current weather. Created using OpenWeatherMap's Weather API."
  },
  {
    src: `${calc}`,
    header: 'Calculator',
    altText: 'Calculator',
    caption: 'A simple fully functioning calculator application.'
  },
  {
    src: `${etch}`,
    header: 'Etch-A-Sketch',
    altText: 'Etch-A-Sketch',
    caption: 'Choose the board size and draw a picture with your cursor.'
  },
  {
    src: `${tictactoe}`,
    header: 'Tic-Tac-Toe',
    altText: 'Tic-Tac-Toe',
    caption: 'The all-time classic game of Tic-Tac-Toe.'
  }
];

const Portfolio = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%"/>
        <CarouselCaption captionText={item.caption} captionHeader={item.header} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Portfolio;