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
import website from "../images/website.png";
import battleship from "../images/battleship.png";
import library from '../images/library.png';
import todolist from '../images/todolist.png';

const items = [
  {
    src: `${library}`,
    header: 'My Library',
    altText: 'My Library',
    caption: "Keep your books organized with this easy-to-use web library.",
    href: 'https://kasweigart.github.io/Library/'
  },
  {
    src: `${weather}`,
    header: 'Weather Search',
    altText: 'Weather Search',
    caption: "Input any city arould the world and return the current weather. Created using OpenWeatherMap's Weather API.",
    href: 'https://kasweigart.github.io/Weather-App/'
  },
  {
    src: `${calc}`,
    header: 'Calculator',
    altText: 'Calculator',
    caption: 'A simple fully functioning calculator application.',
    href: 'https://kasweigart.github.io/Calculator/'
  },
  {
    src: `${etch}`,
    header: 'Etch-A-Sketch',
    altText: 'Etch-A-Sketch',
    caption: 'Choose the board size and draw a picture with your cursor.',
    href: 'https://kasweigart.github.io/Etch-A-Sketch/'
  },
  {
    src: `${todolist}`,
    header: 'To-Do List',
    altText: 'To-Do List',
    caption: 'Add and delete tasks and stay on top of your agenda.',
    href: ''
  },
  {
    src: `${tictactoe}`,
    header: 'Tic-Tac-Toe',
    altText: 'Tic-Tac-Toe',
    caption: 'The all-time classic game of Tic-Tac-Toe.',
    href: 'https://kasweigart.github.io/Tic-Tac-Toe/'
  },
  {
    src: `${battleship}`,
    header: 'Battleship',
    altText: 'Battleship',
    caption: `My first project in JavaScript from the book "Head First JavaScript."`,
    href: 'https://kasweigart.github.io/Battleship/'
  },
  {
    src: `${website}`,
    header: 'My Personal Website',
    altText: 'My Personal Website',
    caption: 'A clean and elegant webpage built from scratch using ReactJS and ExpressJS.',
    href: 'https://kylesweigart.com/'
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
        <img src={item.src} alt={item.altText} width="80%" />
        <a href={item.href}>
        <CarouselCaption captionText={item.caption} captionHeader={item.header} id='caption'/>
        </a>
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