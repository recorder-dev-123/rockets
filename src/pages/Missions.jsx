import { Satellite, Moon, Globe, Orbit, CloudSun, Navigation, Telescope, Users, Map } from 'lucide-react'
import { Page, PageHero, CardGrid, mount } from '../components/Layout.jsx'

const types = [
  { icon: CloudSun, title: 'Weather & Climate', text: 'Satellites watch storms form, track sea ice and measure greenhouse gases from orbit.' },
  { icon: Navigation, title: 'Navigation', text: 'GPS, Galileo, GLONASS and BeiDou constellations orbit about 20,000 km up, timing signals to the nanosecond.' },
  { icon: Satellite, title: 'Communications', text: 'From geostationary TV satellites to low-orbit internet constellations, rockets build the network in the sky.' },
  { icon: Telescope, title: 'Science', text: 'Space telescopes see above the blurring atmosphere — Hubble from low orbit, JWST from 1.5 million km away.' },
  { icon: Users, title: 'Human Spaceflight', text: 'Crew vehicles carry astronauts to orbiting stations and, again, toward the Moon.' },
  { icon: Orbit, title: 'Planetary Exploration', text: 'Orbiters, landers and rovers have studied every planet, plus moons, asteroids and comets.' },
]

const destinations = [
  { icon: Globe, place: 'Low Earth orbit', distance: '160–2,000 km', time: '~10 minutes', note: 'Home of the ISS and most satellites.' },
  { icon: Satellite, place: 'Geostationary orbit', distance: '35,786 km', time: '~6 hours', note: 'Satellites here match Earth’s rotation and appear fixed in the sky.' },
  { icon: Moon, place: 'The Moon', distance: '384,400 km', time: '~3 days', note: 'Apollo crews made the trip in about 3 days.' },
  { icon: Map, place: 'Mars', distance: '55–400 million km', time: '~7 months', note: 'Launch windows open roughly every 26 months.' },
  { icon: Orbit, place: 'Outer planets', distance: '600 million km +', time: 'Years', note: 'Probes use gravity assists from other planets to pick up speed.' },
]

function Missions() {
  return (
    <Page active="/missions">
      <PageHero
        icon={Orbit}
        title="Where they take us"
        lead="Every satellite overhead and every probe beyond the Moon got there on top of a rocket. Here’s what they carry and how far they go."
      />

      <section className="section">
        <div className="container">
          <h2>What rockets carry</h2>
          <CardGrid items={types} />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Destinations</h2>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Destination</th>
                  <th>Distance from Earth</th>
                  <th>Typical travel time</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {destinations.map(({ icon: Icon, place, distance, time, note }) => (
                  <tr key={place}>
                    <td className="cell-title">
                      <Icon size={18} /> {place}
                    </td>
                    <td>{distance}</td>
                    <td>{time}</td>
                    <td className="muted">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Page>
  )
}

mount(Missions)
