import Zoom from "react-reveal/Zoom";

const Contact = () => (
  <div className="parent" id="contact">
    <h1>Contact</h1>

    <div className="contact-row">
      <div className="form-container">
        <form
          method="POST"
          action="https://formspree.io/stefandrei123@gmail.com"
        >
          <div className="input-container">
            <input type="email" name="email" placeholder="Your email" />
          </div>
          <div className="textarea-container">
            <textarea name="message" placeholder="Text Message" />
          </div>
          <div className="button-container">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
      <div>
        <Zoom left>
          <p>
            For bookings, please contact
            <a href="mailto:selin@fakesociety.net">selin@fakesociety.net</a> or
            <a href="mailto:dubla.agency@gmail.com">dubla.agency@gmail.com</a>
          </p>
        </Zoom>
        <Zoom right>
          {" "}
          <p>
            For other inquiries, please write us a message or find us on social
            media.
          </p>
        </Zoom>
      </div>
    </div>

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

      .contact-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      .form-container {
        margin-right: 10px;
      }

      .div1 {
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }

      form {
        display: grid;
        margin-bottom: 1rem;
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
        padding-right: 3rem;
      }
      a {
        margin-top: 9rem;
        padding: 0.7rem;
        color: #fa5f1a;
      }

      input {
        width: 18rem;
        background-color: transparent;
        border: 1px solid #fa5f1a;
        color: #f7f7f2;
        margin-bottom: 1rem;
      }

      textarea {
        width: 18rem;
        height: 7rem;
        background-color: transparent;
        border: 1px solid #fa5f1a;
        color: #f7f7f2;
        margin-bottom: 1rem;
      }
      input,
      textarea,
      button {
        outline: none;
        border-radius: 6px;
      }

      .button-container,
      .input-container,
      .textarea-container {
        text-align: center;
      }
      button {
        border: 0.5px solid #fa5f1a;
        color: #fa5f1a;
        background-color: transparent;
        padding: 0.5rem 2rem;
      }
      button:hover {
        background-color: #fa5f1a;
        color: #f7f7f2;
        transition: 0.5s;
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

        .contact-row {
          grid-template-columns: 1fr;
        }
      }

      @media only screen and (min-width: 1110px) {
        .div1 {
          display: none;
        }
      }
    `}</style>
  </div>
);

export default Contact;
