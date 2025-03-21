import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import "./Hero.css";

const Hero = ({ movies }) => {
  return (
    <div className="movie-carousel-container">
      <Carousel>
        {movies.map((movie) => {
          return (
            <Paper key={movie.imdbId}>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  style={{
                    backgroundImage: movie.backdrops[0]
                      ? `url(${movie.backdrops[0]})`
                      : "none",
                  }}
                >
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster}></img>
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
