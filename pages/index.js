import Head from "next/head";
import Navbar from "../components/sections/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Cards from "../components/Cards";
import Events from "../components/Events";
import Releases from "../components/Releases";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div>
      <div className="parent">
        <Head title="Haokah">
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Haokah Official Website, Madalin Voicu, Alexandru Paicu"
          />
          <meta
            name="keywords"
            content="rominimal, techno, minimal, music, underground"
          />
          <meta
            name="author"
            content="Haokah, Madalin Voicu, Alexandru Paicu"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Julius+Sans+One|Roboto+Condensed:300,400,700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
        </Head>
        <Navbar />
        {/* <Home /> */}
        <About />
        <Cards />
        <Events />
        <Releases />
        <Contact />
        <div className="social-media-container">
          <a href="https://www.facebook.com/Haokahlive/" target="_blank">
            <img src="../static/social_media_logo/facebook_512x512.png" />
          </a>
          <a href="https://www.instagram.com/haokah__live/" target="_blank">
            <img src="../static/social_media_logo/instagram2_512x512.png" />
          </a>
          <a href="https://soundcloud.com/haokah" target="_blank">
            <img src="../static/social_media_logo/soundcloud_512x512.png" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=tlpGGU-yOqo&t=1875s"
            target="_blank"
          >
            <img src="../static/social_media_logo/youtube_512x512.png" />
          </a>
          <a href="https://haokah.bandcamp.com/" target="_blank">
            <img src="../static/social_media_logo/bandcamp_512x512.png" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .parent {
          width: 1024px;
          margin: auto;
          position: relative;
        }

        .social-media-container {
          position: fixed;
          right: calc((100vw - 1024px) / 2 - 35px);
          top: 35vh;
          display: grid;
        }

        img {
          height: 1.8rem;
          object-fit: contain;
          margin-top: 1rem;
          opacity: 0.6;
        }
        img:hover {
          opacity: 1;
          transition: 0.3s;
        }

        @media only screen and (max-width: 1110px) {
          .social-media-container {
            display: none;
          }
        }

        @media only screen and (max-width: 1023px) {
          .parent {
            width: 100%;
          }
        }
      `}</style>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          background-color: #f7f7f2;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

export default Index;
