import Fade from "react-reveal/Fade";
import Link from "next/link";

const Releases = () => (
  <div id="releases">
    <h1>Releases</h1>
    <div className="grid">
      <Fade left>
        <div id="imgContainer">
          <img src="../static/sacred_mirrors_cover.jpg" />
          <br />
          <br />
          <Link href="https://www.deejay.de/Haokah_Sacred_Mirror_EP_FS002_Vinyl__350113">
            <a>BUY Vinyl</a>
          </Link>
        </div>
      </Fade>
      <Fade right>
        <div className="content">
          <p>
            <b>Title</b>: Sacred Mirror EP
          </p>
          <p>
            <b>Label</b>: FS002 | Fake Society
          </p>
          <p>
            <b>Styles</b>: House, Minimal, Vinyl Only
          </p>
          <br />
          <p>
            Fake Society Records returns after it's first release with another
            immense 4-tracker. This time showcasing their second artists,
            Haokah, a duo on the rise in the Romanian scene. Haokah who gained
            respect and collected blissful vibes from those who listened to
            their live acts in the past year, is marking their name on
            collections with FS002, Sacred Mirror' EP, a melodical journey that
            takes one's mind to its subconscious edges
          </p>
        </div>
      </Fade>
    </div>

    <style jsx>{`
      #releases {
        padding-top: 12rem;
        background-color: #1d1d1d;
        min-height: 100vh;
      }

      img {
        width: 12rem;
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
      h1 {
        font-family: "Julius Sans One";
        font-size: 2rem;
        color: #fa5f1a;
        padding-bottom: 5rem;
        padding-left: 10rem;
      }
      #imgContainer {
        text-align: center;
      }
      a {
        border-radius: 6px;
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
        font-size: 0.9rem;
        font-weight: 300;
        letter-spacing: 1.5px;
      }

      @media only screen and (max-width: 1023px) {
        .grid {
          grid-template-columns: 1fr;
        }
        h1 {
          padding: 0;
          margin-left: 1rem;
          margin-bottom: 3rem;
        }
        .content {
          margin: 1rem;
        }
        #imgContainer {
          margin-bottom: 2rem;
        }
      }
    `}</style>
  </div>
);

export default Releases;
