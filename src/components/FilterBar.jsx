export function FilterBar({
  species,
  participation,
  animalTypes,
  participationTypes,
  onSpeciesChange,
  onParticipationChange,
}) {
  return (
    <section className="filters" aria-label="Tierliste filtern">
      <label>
        Tierart
        <select value={species} onChange={(event) => onSpeciesChange(event.target.value)}>
          <option value="Alle">Alle Tiere</option>
          {animalTypes.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label>
        Beteiligung
        <select value={participation} onChange={(event) => onParticipationChange(event.target.value)}>
          <option value="Alle">Alle Formen</option>
          {participationTypes.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
    </section>
  )
}
