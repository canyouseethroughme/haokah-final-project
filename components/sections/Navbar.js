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
        <div
          style={{
            display: active === 0 ? "block" : "none"
          }}
        >
          <img src="static/haokah_logo_white.png" alt="logo" />
          <nav>
            <ul>
              <Link href="#destination1">
                <a style={{ color: "#f7f7f2" }}>Home</a>
              </Link>
              <Link href="#destination2">
                <a style={{ color: "#f7f7f2" }}>About</a>
              </Link>
              <Link href="#destination3">
                <a style={{ color: "#f7f7f2" }}>Gallery</a>
              </Link>
              <Link href="#destination4">
                <a style={{ color: "#f7f7f2" }}>Events</a>
              </Link>
              <Link href="#destination5">
                <a style={{ color: "#f7f7f2" }}>Releases</a>
              </Link>
              <Link href="#destination6">
                <a style={{ color: "#f7f7f2" }}>Contact</a>
              </Link>
            </ul>
          </nav>
        </div>
        <div
          className={hasAnimation && "changeColor"}
          style={{
            display: active === 1 ? "block" : "none"
          }}
        >
          <img src="static/haokah_logo.png" alt="logo" />
          <nav>
            <ul>
              <Link href="#destination1">
                <a style={{ color: "#040404" }}>Home</a>
              </Link>
              <Link href="#destination2">
                <a style={{ color: "#040404" }}>About</a>
              </Link>
              <Link href="#destination3">
                <a style={{ color: "#040404" }}>Gallery</a>
              </Link>
              <Link href="#destination4">
                <a style={{ color: "#040404" }}>Events</a>
              </Link>
              <Link href="#destination5">
                <a style={{ color: "#040404" }}>Releases</a>
              </Link>
              <Link href="#destination6">
                <a style={{ color: "#040404" }}>Contact</a>
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
