interface HeroProps {
  year: string;
  role: string;
  headline: string;
  lede: string;
}

export function Hero({ year, role, headline, lede }: HeroProps) {
  return (
    <section className="cell s8 hero cross">
      <div className="hero-meta">
        <span className="mono">{year}</span>
        <span className="mono">{role}</span>
      </div>
      <div>
        <h1>
          {headline.split("\n").map((line, idx, arr) => (
            <span key={idx}>
              {line}
              {idx < arr.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="lede">{lede}</p>
        <div className="actions">
          <a className="btn" href="#projects">
            See projects <span aria-hidden="true">→</span>
          </a>
          <a className="link" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
