import Event from "../components/sections/Event";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      showAll: false
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
    let events = this.state.events
      .slice(0, this.state.showAll ? undefined : 4)
      .map((event, index) => {
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
        {!!this.state.events &&
          this.state.events.length > 4 &&
          !this.state.showAll && (
            <div className="button-container">
              <button onClick={() => this.setState({ showAll: true })}>
                Show more
              </button>
            </div>
          )}

        <style jsx>{`
          #events {
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

          .button-container {
            text-align: center;
          }
          button {
            border-radius: 6px;
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
