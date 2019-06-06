import Event from "../components/sections/Event";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    fetch(
      "http://canyouseethrough.me/kea2/theme7/wordpress/wp-json/wp/v2/haokah"
    )
      .then(result => result.json())
      .then(result => {
        console.log(result);
        this.setState({
          events: result
        });
      });
  }
  render() {
    let events = this.state.events.map((event, index) => {
      return (
        <Event
          key={index}
          picture={event.acf.haokah_events}
          date={event.acf.haokah_date_event}
          event={event.title.rendered}
          location={event.acf.haokah_location_event}
          link={event.acf.haokah_url_event}
        />
      );
    });

    return (
      <div id="events">
        <h1>Events</h1>

        <div className="grid">{events}</div>

        <style jsx>{`
          div {
            min-height: calc(100vh - 15rem);
            background-color: #1d1d1d;
            padding-top: 12rem;
          }
          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-items: center;
            grid-gap: 1rem;
            padding-top: 0;
          }
          h1 {
            font-family: "Julius Sans One";
            font-size: 2rem;
            color: #fa5f1a;
            padding-bottom: 5rem;
            padding-left: 10rem;
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
          }
        `}</style>
      </div>
    );
  }
}

export default Events;
