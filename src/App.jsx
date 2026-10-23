import {
  Rocket,
  Flame,
  Gauge,
  Layers,
  Orbit,
  Satellite,
  Globe,
  Moon,
  RotateCcw,
  History,
  ArrowRight,
} from 'lucide-react'

const facts = [
  {
    icon: Flame,
    title: 'Propulsion',
    text: 'Rockets burn fuel with an oxidizer and expel hot gas out of a nozzle. By Newton’s third law, pushing mass backward pushes the rocket forward.',
  },
  {
    icon: Gauge,
    title: 'Escape Velocity',
    text: 'To reach low Earth orbit, a rocket must travel about 7.8 km/s sideways. Leaving Earth entirely takes roughly 11.2 km/s.',
  },
  {
    icon: Layers,
    title: 'Staging',
    text: 'Multi-stage rockets drop empty tanks and engines as they climb, shedding dead weight so the remaining stages can go faster.',
  },
  {
    icon: RotateCcw,
    title: 'Reusability',
    text: 'Modern boosters can land themselves and fly again, dramatically lowering the cost of reaching space.',
  },
]

const missions = [
  { icon: Satellite, title: 'Satellites', text: 'Communications, weather, GPS and Earth observation all depend on rockets to reach orbit.' },
  { icon: Moon, title: 'The Moon', text: 'From Apollo to Artemis, rockets carry crews and landers across 384,000 km of space.' },
  { icon: Globe, title: 'Space Stations', text: 'Regular launches supply crews, food and experiments to stations orbiting Earth.' },
  { icon: Orbit, title: 'Deep Space', text: 'Probes launched by rockets have visited every planet and left the solar system.' },
]

const timeline = [
  { year: '1926', text: 'Robert Goddard launches the first liquid-fueled rocket.' },
  { year: '1957', text: 'Sputnik 1 becomes the first artificial satellite in orbit.' },
  { year: '1961', text: 'Yuri Gagarin becomes the first human in space.' },
  { year: '1969', text: 'Saturn V sends Apollo 11 to the Moon.' },
  { year: '2015', text: 'An orbital-class booster lands vertically for the first time.' },
]

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <span className="logo">
            <Rocket size={22} /> Rockets
          </span>
          <nav>
            <a href="#how">How they work</a>
            <a href="#missions">Missions</a>
            <a href="#history">History</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-icon">
              <Rocket size={56} strokeWidth={1.5} />
            </div>
            <h1>Reach for orbit</h1>
            <p className="lead">
              A short guide to the machines that carry us beyond the sky — how they fly,
              where they go, and how we got here.
            </p>
            <a className="button" href="#how">
              Start exploring <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section id="how" className="section">
          <div className="container">
            <h2>How rockets work</h2>
            <div className="grid">
              {facts.map(({ icon: Icon, title, text }) => (
                <article key={title} className="card">
                  <Icon className="card-icon" size={28} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="missions" className="section alt">
          <div className="container">
            <h2>Where they take us</h2>
            <div className="grid">
              {missions.map(({ icon: Icon, title, text }) => (
                <article key={title} className="card">
                  <Icon className="card-icon" size={28} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="history" className="section">
          <div className="container">
            <h2>
              <History size={26} /> A brief history
            </h2>
            <ol className="timeline">
              {timeline.map(({ year, text }) => (
                <li key={year}>
                  <span className="year">{year}</span>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <Rocket size={16} /> Rockets — keep looking up.
        </div>
      </footer>
    </>
  )
}
