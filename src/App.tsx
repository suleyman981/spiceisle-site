import './App.css'

const arsenalLogo =
  'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg'

function App() {
  return (
    <main className="page-shell">
      <section className="hero-section" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Arsenal page navigation">
          <a className="brand" href="#hero-title">
            <img src={arsenalLogo} alt="Arsenal crest" />
            <span>Arsenal</span>
          </a>
          <a className="nav-link" href="#message">
            For the haters
          </a>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">North London. Red and white.</p>
            <h1 id="hero-title">I LOVE THIS GAME :)</h1>
            <p className="hero-text">
              This page is for every Arsenal fan enjoying the football, the
              noise, the pressure, and the beautiful chaos of a season that
              keeps giving us reasons to believe.
            </p>
            <p className="swahili-message">MWAKA WETU HUU!!</p>
          </div>

          <div className="crest-stage" aria-label="Arsenal crest showcase">
            <img src={arsenalLogo} alt="Arsenal crest" />
          </div>
        </div>
      </section>

      <section className="moment-section" id="message">
        <div className="moment-copy">
          <p className="eyebrow">A message from the red side</p>
          <h2>To the haters: enjoy the moment.</h2>
          <p>
            Talk all you want, but Arsenal are giving the people drama, goals,
            belief, and nights worth remembering. Smile through it. We are
            loving every second.
          </p>
        </div>

        <div className="chant-panel">
          <span>COYG</span>
          <strong>Come on you Gunners</strong>
        </div>
      </section>

      <section className="season-update" id="season-update">
        <div className="section-heading">
          <p className="eyebrow">Latest update: 10 May 2026</p>
          <h2>Premier League and Champions League</h2>
          <p>
            Arsenal are chasing the big moments at home and in Europe. The
            pressure is loud, the stakes are massive, and the story is still
            moving.
          </p>
        </div>

        <div className="update-grid">
          <article className="update-card">
            <span>Premier League</span>
            <h3>Title race alive</h3>
            <p>
              Arsenal beat West Ham 1-0 and are five points clear of Manchester
              City, who still have a game in hand. Two league matches remain.
            </p>
            <a
              href="https://www.theguardian.com/football/live/2026/may/10/west-ham-united-v-arsenal-premier-league-live"
              target="_blank"
              rel="noreferrer"
            >
              Read match update
            </a>
          </article>

          <article className="update-card">
            <span>Champions League</span>
            <h3>Final in Budapest</h3>
            <p>
              Arsenal are through to the Champions League final against Paris
              Saint-Germain at the Puskas Arena on Saturday 30 May.
            </p>
            <a
              href="https://www.uefa.com/uefachampionsleague/news/029a-1df98e9a78ca-1acaca3c53b0-1000--2026-uefa-champions-league-final-where-is-it-who-is-involv/"
              target="_blank"
              rel="noreferrer"
            >
              View UEFA final guide
            </a>
          </article>
        </div>
      </section>

      <section className="arsenal-grid" aria-label="Arsenal highlights">
        <article>
          <span>Identity</span>
          <h2>Class, fight, and style</h2>
          <p>
            Arsenal football is about brave passing, sharp movement, and a
            team that plays with feeling.
          </p>
        </article>

        <article>
          <span>Atmosphere</span>
          <h2>The Emirates is loud</h2>
          <p>
            Every matchday feels bigger when the red shirts are flying and the
            crowd is fully behind the team.
          </p>
        </article>

        <article>
          <span>Energy</span>
          <h2>Let them watch</h2>
          <p>
            If the haters are still tuned in, that means the football is doing
            exactly what it should.
          </p>
        </article>
      </section>
    </main>
  )
}

export default App
