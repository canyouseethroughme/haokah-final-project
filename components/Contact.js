import Zoom from "react-reveal/Zoom";

const Contact = () => (
  <div className="parent" id="destination6">
    <h1>Contact</h1>
    <Zoom left>
      <p>
        For bookings, please contact{" "}
        <a href="mailto:selin@fakesociety.net">selin@fakesociety.net</a> or
        <a href="mailto:dubla.agency@gmail.com">dubla.agency@gmail.com</a>
      </p>
    </Zoom>
    <Zoom right>
      {" "}
      <p>
        For other inquiries, please contact{" "}
        <a href="mailto:haokahlive@gmail.com">haokahlive@gmail.com</a> or find
        us on social media.
      </p>
    </Zoom>
    <Zoom top>
      <div className="div1">
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
    </Zoom>
    <style jsx>{`
      .parent {
        padding-top: 12rem;
        background-color: #1d1d1d;
        height: 100vh;
      }
      .div1 {
        display: flex;
        justify-content: center;
        align-items: flex-end;
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
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
        padding-left: 5rem;
      }
      a {
        margin-top: 9rem;
        padding: 0.7rem;
        color: #fa5f1a;
      }
      img {
        height: 1.8rem;
        object-fit: contain;
      }

      @media only screen and (max-width: 1023px) {
        h1 {
          padding: 0;
          margin-left: 1rem;
          margin-bottom: 3rem;
        }
        p {
          padding-left: 0;
          margin-left: 1rem;
        }
        .div1 {
          height: 30vh;
        }
        .parent {
          height: 80vh;
        }
      }
    `}</style>
  </div>
);

export default Contact;
