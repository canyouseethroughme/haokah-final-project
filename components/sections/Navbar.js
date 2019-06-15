import Link from "next/link";

class Navbar extends React.Component {
  state = {
    hasAnimation: false,
    active: 0
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { pageYOffset } = window;
    const { active } = this.state;

    if (pageYOffset >= 10 && active === 0) {
      this.setState({ active: 1 }), this.setState({ hasAnimation: true });
    } else if (pageYOffset < 10 && active === 1) {
      this.setState({ active: 0 }), this.setState({ hasAnimation: false });
    }
  };
  render() {
    const { active } = this.state;
    const { hasAnimation } = this.state;

    return (
      <div>
        <div className={hasAnimation && "changeColor"}>
          <img
            src={`static/${
              active ? "haokah_logo.png" : "haokah_logo_white.png"
            }`}
            alt="logo"
          />
          <nav>
            <ul className={active && "scrolled"}>
              <Link href="#home">
                <a className="underline">Home</a>
              </Link>
              <Link href="#about">
                <a className="underline">About</a>
              </Link>
              <Link href="#gallery">
                <a className="underline">Gallery</a>
              </Link>
              <Link href="#events">
                <a className="underline">Events</a>
              </Link>
              <Link href="#releases">
                <a className="underline">Releases</a>
              </Link>
              <Link href="#contact">
                <a className="underline">Contact</a>
              </Link>
            </ul>
          </nav>
        </div>

        <style jsx>{`
          div {
            width: 1024px;
            background-color: transparent;
            position: fixed;
            z-index: 10;
          }
          div > img {
            width: 6rem;
            padding-top: 1.5rem;
            margin: auto;
            display: flex;
          }

          nav > ul {
            display: flex;
            justify-content: center;
            padding: 0;
            margin-bottom: 0;
          }

          ul > a {
            padding: 1rem;
            font-family: "Roboto Condensed";
            font-weight: 300;
            font-size: 1rem;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            text-decoration: none;
            color: #f7f7f2;
          }

          ul.scrolled > a {
            color: #040404;
          }

          ul > a:hover {
            color: #fa5f1a;
            transition: 0.5s;
          }

          .changeColor {
            animation: colorChange 0.4s linear forwards;
          }

          @keyframes colorChange {
            to {
              background-color: #f7f7f2;
            }
          }

          @media only screen and (max-width: 1023px) {
            div {
              width: 100%;
            }
            ul > a {
              padding: 0.7rem 0.4rem;
              font-size: 0.7rem;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Navbar;
