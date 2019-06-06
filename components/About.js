import Slide from "react-reveal/Slide";

const About = () => (
  <div id="about">
    <h1>About</h1>
    <div className="grid">
      <Slide bottom>
        <img src="../static/usTwo.jpg" />
      </Slide>
      <Slide bottom>
        <div className="content">
          <p>
            <b>Haokah</b> is a representation of the soul, love and energies
            that are used through music as a medicine that reach the core of the
            human being.
          </p>
          <p>
            The project is based on the originality of live performances that
            create a new and unique experience that connect live audiences to
            the music and to each other. The project itself emerged from the
            desire to express feelings through warm sounds and groovy rhythms
            when expression through words is not possible, favorable, nor
            adequate enough to communicate one’s feelings of positivity,
            connection, and bliss.
          </p>
          <p>
            The minimalistic techno music produced by Haokah encourages a
            continuous gentle but dynamic dance mood. As a result of their
            passion for music and the desire to be understood, creatives and
            friends Madalin Voicu and Alexandru Paicu birthed Haokah.
          </p>
        </div>
      </Slide>
    </div>
    <style jsx>{`
      #about {
        background-color: #1d1d1d;
        min-height: calc(100vh - 15rem);
        padding-top: 12rem;
      }
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        padding-top: 0;
      }
      .content {
        margin-right: 6rem;
      }
      img {
        width: 30rem;
      }
      h1 {
        font-family: "Julius Sans One";
        font-size: 2rem;
        color: #fa5f1a;
        padding-bottom: 5rem;
        padding-left: 10rem;
      }
      p {
        font-family: "Roboto Condensed";
        color: #f7f7f2;
        font-size: 0.9rem;
        font-weight: 300;
        letter-spacing: 1.5px;
      }

      @media only screen and (max-width: 1023px) {
        .grid {
          grid-template-columns: 1fr;
        }
        img {
          width: 15rem;
        }
        h1 {
          padding: 0;
          margin-left: 1rem;
          margin-bottom: 3rem;
        }
        #about {
          margin: auto;
        }
        .content {
          margin: 1rem;
        }
      }
    `}</style>
  </div>
);

export default About;
