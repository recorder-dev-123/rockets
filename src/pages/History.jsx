import { History as HistoryIcon } from 'lucide-react'
import { Page, PageHero, mount } from '../components/Layout.jsx'

const eras = [
  {
    title: 'Early ideas',
    events: [
      { year: '~1200s', text: 'Gunpowder rockets are used in China, first as fire arrows and fireworks.' },
      { year: '1903', text: 'Konstantin Tsiolkovsky publishes the rocket equation and argues for liquid propellants.' },
      { year: '1926', text: 'Robert Goddard launches the first liquid-fueled rocket in Auburn, Massachusetts.' },
      { year: '1944', text: 'A V-2 becomes the first human-made object to cross into space.' },
    ],
  },
  {
    title: 'The Space Race',
    events: [
      { year: '1957', text: 'Sputnik 1 becomes the first artificial satellite in orbit.' },
      { year: '1961', text: 'Yuri Gagarin becomes the first human in space aboard Vostok 1.' },
      { year: '1963', text: 'Valentina Tereshkova becomes the first woman in space.' },
      { year: '1965', text: 'Alexei Leonov performs the first spacewalk.' },
      { year: '1969', text: 'Saturn V sends Apollo 11 to the Moon; Armstrong and Aldrin walk on the surface.' },
    ],
  },
  {
    title: 'Stations and probes',
    events: [
      { year: '1971', text: 'Salyut 1, the first space station, is launched.' },
      { year: '1977', text: 'Voyager 1 and 2 launch on a grand tour of the outer planets.' },
      { year: '1981', text: 'The Space Shuttle Columbia makes the first Shuttle flight.' },
      { year: '1990', text: 'The Hubble Space Telescope is deployed from the Shuttle.' },
      { year: '1998', text: 'The first module of the International Space Station reaches orbit.' },
    ],
  },
  {
    title: 'The reusable era',
    events: [
      { year: '2012', text: 'Voyager 1 becomes the first spacecraft to enter interstellar space.' },
      { year: '2015', text: 'An orbital-class booster lands vertically for the first time.' },
      { year: '2020', text: 'The first commercially built crew vehicle carries astronauts to the ISS.' },
      { year: '2021', text: 'The James Webb Space Telescope launches on Ariane 5.' },
      { year: '2022', text: 'Artemis I sends an uncrewed Orion capsule around the Moon on SLS.' },
    ],
  },
]

function History() {
  return (
    <Page active="/history">
      <PageHero
        icon={HistoryIcon}
        title="A history of rocketry"
        lead="Eight centuries from fire arrows to reusable boosters — the milestones that got us off the ground."
      />

      {eras.map(({ title, events }, i) => (
        <section key={title} className={i % 2 ? 'section alt' : 'section'}>
          <div className="container">
            <h2>{title}</h2>
            <ol className="timeline">
              {events.map(({ year, text }) => (
                <li key={year}>
                  <span className="year">{year}</span>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ))}
    </Page>
  )
}

mount(History)
