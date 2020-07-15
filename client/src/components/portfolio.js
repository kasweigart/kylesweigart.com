import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import website from "../images/website.png";
import marketExamine from "../images/marketExamine.png";
import algoArea from "../images/algoArea.png";
import spaceFollow from "../images/spaceFollow.png";

const items = [
  {
    src: `${marketExamine}`,
    header: 'MarketExamine',
    altText: 'MarketExamine',
    caption: 'A stock-market analysis platform for organizing real-time stock data.',
    href: 'https://marketexamine.com/'
  },
  {
    src: `${algoArea}`,
    header: 'AlgoArea',
    altText: 'AlgoArea',
    caption: 'A collection of computer science concepts to help users practice and think like a programmer.',
    href: 'https://algoarea.com/'
  },
  {
    src: `${spaceFollow}`,
    header: 'SpaceFollow',
    altText: 'SpaceFollow',
    caption: 'A site crafted specifically for astronomy and space-exploration enthusiasts.',
    href: 'https://spacefollow.com/'
  },
  {
    src: `${website}`,
    header: 'My Personal Website',
    altText: 'My Personal Website',
    caption: 'A simple one page website showcasing the work I have completed.',
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