import { Clock, Euro, HeartHandshake, MapPin } from "lucide-react"

export function AnimalCard({ animal, onInquire }) {
  return (
    <article className="animal-card">
      <img src={animal.image} alt={`${animal.name}, ${animal.species}`} className="animal-photo" />
      <div className="animal-card-body">
        <div className="animal-title-row">
          <div>
            <p className="eyebrow">{animal.species}</p>
            <h3>{animal.name}</h3>
          </div>
          <span className="age-pill">{animal.age} J.</span>
        </div>
        <p className="muted">{animal.shortDescription}</p>
        <div className="fact-list">
          <span>
            <HeartHandshake size={16} aria-hidden="true" />
            {animal.participationType}
          </span>
          <span>
            <Clock size={16} aria-hidden="true" />
            {animal.timeNeed}
          </span>
          <span>
            <MapPin size={16} aria-hidden="true" />
            {animal.location}
          </span>
          <span>
            <Euro size={16} aria-hidden="true" />
            {animal.contribution}
          </span>
        </div>
        <button className="primary-button card-cta" onClick={() => onInquire(animal)}>
          Anfrage senden
        </button>
      </div>
    </article>
  )
}
