import Fade from "react-reveal/Fade";
import Link from "next/link";

const Event = props => (
  <div>
    <Fade bottom>
      <figure>
        <img src={props.picture} />
        <p>Date: {props.date}</p>
        <p>Event: {props.event}</p>
        <p>Location: {props.location}</p>
        <br />
        <Link href={props.link}>
          <a target="_blank">Check Event</a>
        </Link>
      </figure>
    </Fade>
    <style jsx>{`
      div {
        margin-bottom: 4rem;
      }
      img {
        height: 12rem;
        width: 100%;
        object-fit: contain;
        filter: grayscale(100%);
        transition: 1s;
        margin-bottom: 1rem;
      }
      img:hover {
        filter: grayscale(0%);
        transform: scale(1.05);
      }
      figure {
        text-align: center;
      }

      a {
        border: 0.5px solid #fa5f1a;
        color: #fa5f1a;
        padding: 0.5rem 2rem;
        text-decoration: none;
      }
      a:hover {
        background-color: #fa5f1a;
        color: #f7f7f2;
        transition: 0.5s;
      }
      p {
        font-family: "Roboto Condensed";
        color: #f7f7f2;
        font-size: 1rem;
        font-weight: 300;
        margin-bottom: 0;
        letter-spacing: 1.5px;
      }
      p:last-child {
        padding-bottom: 1rem;
      }
    `}</style>
  </div>
);

export default Event;
