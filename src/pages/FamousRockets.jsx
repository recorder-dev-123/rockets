import { Rocket } from 'lucide-react'
import { Page, PageHero, mount } from '../components/Layout.jsx'

const rockets = [
  { name: 'V-2', country: 'Germany', firstFlight: '1942', height: '14 m', payload: 'Suborbital', text: 'The first long-range guided ballistic missile and the first object to cross into space. Its engineers went on to shape both the US and Soviet programs.' },
  { name: 'Soyuz', country: 'USSR / Russia', firstFlight: '1966', height: '46 m', payload: '~7 t', text: 'Descended from the R-7 that launched Sputnik, the Soyuz family has flown more times than any other rocket in history.' },
  { name: 'Saturn V', country: 'USA', firstFlight: '1967', height: '111 m', payload: '~140 t', text: 'The Moon rocket. It launched every Apollo lunar crew and the Skylab space station, and never lost a payload.' },
  { name: 'Space Shuttle', country: 'USA', firstFlight: '1981', height: '56 m', payload: '27.5 t', text: 'A winged, partly reusable orbiter that flew 135 missions, deployed Hubble and built much of the ISS.' },
  { name: 'Ariane 5', country: 'Europe', firstFlight: '1996', height: '52 m', payload: '~20 t', text: 'Europe’s heavy workhorse for nearly three decades, and the rocket that launched the James Webb Space Telescope.' },
  { name: 'Falcon 9', country: 'USA', firstFlight: '2010', height: '70 m', payload: '22.8 t', text: 'The first orbital-class rocket with a booster that routinely lands and reflies, often within weeks.' },
  { name: 'SLS', country: 'USA', firstFlight: '2022', height: '98 m', payload: '95 t', text: 'NASA’s Space Launch System, built to send Orion crews to the Moon under the Artemis program.' },
  { name: 'Starship', country: 'USA', firstFlight: '2023', height: '~121 m', payload: '100+ t (design)', text: 'The largest rocket ever flown, designed so both stages can be caught and reused.' },
]

function FamousRockets() {
  return (
    <Page active="/famous-rockets">
      <PageHero
        icon={Rocket}
        title="Famous rockets"
        lead="Eight vehicles that changed what was possible, from the first rocket to touch space to the largest ever built."
      />

      <section className="section">
        <div className="container">
          <div className="rocket-list">
            {rockets.map(({ name, country, firstFlight, height, payload, text }) => (
              <article key={name} className="card rocket-card">
                <header>
                  <h3>{name}</h3>
                  <span className="tag">{country}</span>
                </header>
                <p>{text}</p>
                <dl className="specs">
                  <div>
                    <dt>First flight</dt>
                    <dd>{firstFlight}</dd>
                  </div>
                  <div>
                    <dt>Height</dt>
                    <dd>{height}</dd>
                  </div>
                  <div>
                    <dt>Payload to LEO</dt>
                    <dd>{payload}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="footnote">
            Payload figures are approximate maximums to low Earth orbit and vary by version and configuration.
          </p>
        </div>
      </section>
    </Page>
  )
}

mount(FamousRockets)
