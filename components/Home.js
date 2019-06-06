import Particles from "react-particles-js";
import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="parent" id="home">
        <div className="child1">
          <img src="static/black_white_lunar.jpg" />
        </div>
        <div className="child2">
          <Particles
            params={{
              particles: {
                number: {
                  value: 60
                },
                size: {
                  value: 3
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  }
                }
              }
            }}
          />
        </div>

        <style jsx>{`
          div {
            background-color: #141414;
            height: 100vh;
          }
          .parent {
            position: relative;
          }
          .child1 {
            display: flex;
            justify-content: center;
            position: absolute;
          }
          .child2 {
            padding-top: 5rem;
            background-color: transparent;
            width: 1024px;
            position: absolute;
          }
           
          }
          img {
            width: 100%;
            object-fit: contain;
          }
          @media only screen and (max-width: 1023px){
            .child2{
             display: none;
            }
            
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
