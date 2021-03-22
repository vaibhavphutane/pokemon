import React from "react";
import Slider from "react-slick";
import Pokecard from "./pokecard";

const Pokemon = ({ pokemons }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          vertical: true,
          dots: false,
          arrows: false,
          verticalSwiping: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
          dots: false,
          arrows: false,
          verticalSwiping: true,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {pokemons.map((pokemon, index) => (
          <Pokecard
            imageUrl={pokemon.imageUrl}
            name={pokemon.name}
            key={pokemon.name + index}
            ability={pokemon.ability}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Pokemon;
