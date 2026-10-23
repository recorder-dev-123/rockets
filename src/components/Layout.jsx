import React from 'react'
import ReactDOM from 'react-dom/client'
import { Rocket } from 'lucide-react'
import '../index.css'

const links = [
  { href: '/how-rockets-work', label: 'How they work' },
  { href: '/missions', label: 'Missions' },
  { href: '/famous-rockets', label: 'Rockets' },
  { href: '/history', label: 'History' },
  { href: '/glossary', label: 'Glossary' },
]

export function Header({ active }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="logo" href="/">
          <Rocket size={22} /> Rockets
        </a>
        <nav>
          {links.map(({ href, label }) => (
            <a key={href} href={href} className={href === active ? 'active' : undefined}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Rocket size={16} /> Rockets — keep looking up.
      </div>
    </footer>
  )
}

export function PageHero({ icon: Icon, title, lead }) {
  return (
    <section className="hero page-hero">
      <div className="container">
        <div className="hero-icon">
          <Icon size={40} strokeWidth={1.5} />
        </div>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  )
}

export function CardGrid({ items }) {
  return (
    <div className="grid">
      {items.map(({ icon: Icon, title, text }) => (
        <article key={title} className="card">
          <Icon className="card-icon" size={28} />
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  )
}

export function Page({ active, children }) {
  return (
    <>
      <Header active={active} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export function mount(Component) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  )
}
