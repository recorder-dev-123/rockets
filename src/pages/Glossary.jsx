import { BookOpen } from 'lucide-react'
import { Page, PageHero, mount } from '../components/Layout.jsx'

const terms = [
  { term: 'Apogee', text: 'The highest point of an orbit around Earth.' },
  { term: 'Delta-v (Δv)', text: 'The total change in velocity a vehicle can achieve. Mission planners budget it like money.' },
  { term: 'Escape velocity', text: 'The speed needed to break free of a body’s gravity without further thrust — about 11.2 km/s from Earth’s surface.' },
  { term: 'Fairing', text: 'The nose cone that shields the payload from air pressure and heat during ascent, discarded once in thin air.' },
  { term: 'Geostationary orbit (GEO)', text: 'A circular orbit 35,786 km above the equator where a satellite circles once per day and appears to hover in place.' },
  { term: 'Gimbal', text: 'A pivoting engine mount that lets the rocket steer by angling its thrust.' },
  { term: 'Gravity assist', text: 'Flying close to a planet to borrow some of its orbital momentum and change speed or direction without fuel.' },
  { term: 'Low Earth orbit (LEO)', text: 'Orbits roughly 160–2,000 km up. Most satellites and every crewed station live here.' },
  { term: 'Max-Q', text: 'The moment of maximum aerodynamic pressure on the vehicle during ascent.' },
  { term: 'Oxidizer', text: 'The substance that lets fuel burn without air — most often liquid oxygen (LOX).' },
  { term: 'Payload', text: 'Whatever the rocket is carrying to space: satellites, cargo, crew or probes.' },
  { term: 'Perigee', text: 'The lowest point of an orbit around Earth.' },
  { term: 'Reentry', text: 'Returning through the atmosphere, where friction and compression heat a vehicle to thousands of degrees.' },
  { term: 'Specific impulse (Isp)', text: 'A measure of engine efficiency: how long a unit of propellant can produce thrust equal to its own weight, in seconds.' },
  { term: 'Stage', text: 'A section of a rocket with its own engines and tanks, discarded when its propellant runs out.' },
  { term: 'Thrust', text: 'The force an engine produces by expelling exhaust, measured in newtons or pounds-force.' },
  { term: 'Thrust-to-weight ratio', text: 'Thrust divided by weight. It must exceed 1 for a rocket to leave the pad.' },
]

function Glossary() {
  return (
    <Page active="/glossary">
      <PageHero
        icon={BookOpen}
        title="Glossary"
        lead="The words you’ll hear on every launch broadcast, explained in plain language."
      />

      <section className="section">
        <div className="container">
          <dl className="glossary">
            {terms.map(({ term, text }) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </Page>
  )
}

mount(Glossary)
