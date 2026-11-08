import { Fact } from "@/data/resumeData";

interface AboutSectionProps {
  paragraphs: string[];
  facts: Fact[];
}

export function AboutSection({ paragraphs, facts }: AboutSectionProps) {
  return (
    <>
      <div className="cell s12 label-cell" id="about">
        <h2>About</h2>
        <span className="mono">Who I am</span>
      </div>

      <section className="cell s8">
        {paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </section>

      <aside className="cell s4">
        <dl className="facts">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </>
  );
}
