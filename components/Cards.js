import Carousel from "react-bootstrap/Carousel";

import Zoom from "react-reveal/Zoom";

const Cards = () => {
  return (
    <div width="100%" id="destination3">
      <h1>Gallery</h1>
      <Zoom bottom>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../static/haokah_slide/lunar1.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../static/haokah_slide/lunar.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../static/haokah_slide/dubla.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../static/haokah_slide/dubla1.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Zoom>

      <style jsx>{`
        div {
          padding-top: 12rem;
          background-color: #1d1d1d;
          min-height: 100vh;
        }
        h1 {
          font-family: "Julius Sans One";
          font-size: 2rem;
          color: #fa5f1a;
          padding-bottom: 5rem;
          padding-left: 10rem;
        }

        img {
          height: 30rem;
          width: 100%;
          object-fit: contain;
        }

        @media only screen and (max-width: 1023px) {
          img {
            width: 100%;
            height: 10rem;
          }
          h1 {
            padding: 0;
            margin-bottom: 3rem;
            margin-left: 1rem;
          }
          div {
            min-height: auto;
            padding-bottom: 10rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Cards;
