import { Orbit, ArrowRight } from 'lucide-react'
import { Page, mount } from '../components/Layout.jsx'

function NotFound() {
  return (
    <Page>
      <section className="hero">
        <div className="container">
          <div className="hero-icon">
            <Orbit size={56} strokeWidth={1.5} />
          </div>
          <h1>Lost in space</h1>
          <p className="lead">This page drifted out of orbit. Let’s get you back to the launch pad.</p>
          <a className="button" href="/">
            Back home <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </Page>
  )
}

mount(NotFound)
