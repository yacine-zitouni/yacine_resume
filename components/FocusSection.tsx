import { FocusArea } from "@/data/resumeData";

interface FocusSectionProps {
  areas: FocusArea[];
}

export function FocusSection({ areas }: FocusSectionProps) {
  return (
    <>
      <div className="cell s12 label-cell" id="focus">
        <h2>What I work on</h2>
        <span className="mono">Focus</span>
      </div>

      {areas.map((area) => (
        <article key={area.id} className="cell s4 card">
          <div className="card-top">
            <span className="mono">Area</span>
          </div>
          <div>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </div>
          <div className="tags">
            {area.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </>
  );
}
