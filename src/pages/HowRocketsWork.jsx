import { Flame, Droplets, Box, Zap, Wind, Cog, Gauge, Compass, Layers, Package } from 'lucide-react'
import { Page, PageHero, CardGrid, mount } from '../components/Layout.jsx'

const anatomy = [
  { icon: Package, title: 'Payload', text: 'The satellite, crew capsule or probe the whole vehicle exists to deliver, protected by a fairing during ascent.' },
  { icon: Box, title: 'Propellant Tanks', text: 'Most of a rocket’s volume and roughly 90% of its launch mass is fuel and oxidizer.' },
  { icon: Cog, title: 'Engines', text: 'Turbopumps force propellant into a combustion chamber at enormous pressure, where it burns and accelerates out of the nozzle.' },
  { icon: Compass, title: 'Guidance', text: 'Flight computers and sensors steer the rocket by swiveling (gimbaling) the engines to keep it on course.' },
]

const propellants = [
  { icon: Droplets, title: 'Liquid', text: 'Fuel and oxidizer stored separately and pumped into the engine. Can be throttled, shut down and restarted. Examples: kerosene/LOX, hydrogen/LOX, methane/LOX.' },
  { icon: Flame, title: 'Solid', text: 'Fuel and oxidizer premixed into a rubbery solid. Simple and powerful, but once lit it burns until it is empty. Common in boosters.' },
  { icon: Wind, title: 'Hybrid', text: 'A solid fuel with a liquid or gaseous oxidizer. Safer to handle than solids and can be shut off by stopping the oxidizer flow.' },
  { icon: Zap, title: 'Electric', text: 'Ion and Hall-effect thrusters accelerate charged particles. Tiny thrust but extremely efficient — ideal for long missions once already in space.' },
]

const ascent = [
  { step: 'Liftoff', text: 'Engines must produce more thrust than the rocket’s weight. It rises slowly at first, then accelerates as it burns off propellant.' },
  { step: 'Gravity turn', text: 'Soon after clearing the tower, the rocket tilts gradually so gravity bends its path from vertical toward horizontal.' },
  { step: 'Max-Q', text: 'About a minute in, aerodynamic pressure peaks. Engines often throttle down briefly to reduce stress on the structure.' },
  { step: 'Staging', text: 'The first stage runs dry and separates. The upper stage ignites in thin air, where its engine is far more efficient.' },
  { step: 'Fairing separation', text: 'Once above most of the atmosphere, the protective nose cone splits away to save mass.' },
  { step: 'Orbit insertion', text: 'The upper stage burns until it reaches about 7.8 km/s horizontally, then cuts off. The payload is now falling around the Earth.' },
]

function HowRocketsWork() {
  return (
    <Page active="/how-rockets-work">
      <PageHero
        icon={Gauge}
        title="How rockets work"
        lead="Rockets don’t push against the air — they throw mass out the back as fast as possible. Everything else is engineering around that one idea."
      />

      <section className="section">
        <div className="container prose">
          <h2>The rocket equation</h2>
          <p>
            In 1903 Konstantin Tsiolkovsky worked out how much a rocket can change its speed
            (its <strong>delta-v</strong>) from two things: how fast its exhaust leaves the
            nozzle, and how much heavier it is full than empty.
          </p>
          <p className="equation">Δv = v<sub>e</sub> · ln(m<sub>full</sub> / m<sub>empty</sub>)</p>
          <p>
            The logarithm is the catch. Doubling your propellant doesn’t double your speed, so
            reaching orbit means a vehicle that is almost entirely fuel. That is why rockets
            are so tall, so thin-walled, and why they shed weight in stages.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>
            <Layers size={26} /> Anatomy of a rocket
          </h2>
          <CardGrid items={anatomy} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>
            <Flame size={26} /> Kinds of propellant
          </h2>
          <CardGrid items={propellants} />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Getting to orbit</h2>
          <ol className="steps">
            {ascent.map(({ step, text }) => (
              <li key={step}>
                <h3>{step}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </Page>
  )
}

mount(HowRocketsWork)
