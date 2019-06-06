import Carousel from "react-bootstrap/Carousel";

const Card = props => (
  <Carousel.Item>
    <img className="d-block w-100" src={props.picture} />
  </Carousel.Item>
);

export default Card;
