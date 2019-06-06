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
        <Home />
        <About />
        <Cards />
        <Events />
        <Releases />
        <Contact />
      </div>
      <style jsx>{`
        .parent {
          width: 1024px;
          margin: auto;
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
