import { X } from "lucide-react"
import { useState } from "react"

const participationOptions = [
  "Pflege vor Ort",
  "Spaziergang & Training",
  "Versorgungspatenschaft",
]

export function InquiryForm({ animal, onClose, onSubmit }) {
  const [formError, setFormError] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get("name").trim()
    const email = formData.get("email").trim()
    const availability = formData.get("availability").trim()
    const message = formData.get("message").trim()

    if (!name || !email || !availability || !message) {
      setFormError("Bitte fülle alle Pflichtfelder mit sinnvollen Angaben aus.")
      return
    }

    onSubmit({
      name,
      email,
      animalId: animal.id,
      animalName: animal.name,
      participationType: formData.get("participationType"),
      availability,
      message,
    })
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="inquiry-title">
        <div className="modal-header">
          <div>
            <p className="eyebrow">Unverbindliche Anfrage</p>
            <h2 id="inquiry-title">Interesse an {animal.name}</h2>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="Formular schließen">
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <form className="inquiry-form" onSubmit={handleSubmit}>
          {formError && (
            <p className="form-error full-span" role="alert">
              {formError}
            </p>
          )}

          <label>
            Name
            <input name="name" placeholder="Vor- und Nachname" autoComplete="name" required />
          </label>

          <label>
            E-Mail
            <input
              name="email"
              type="email"
              placeholder="name@example.de"
              autoComplete="email"
              required
            />
          </label>

          <label>
            Gewünschtes Tier
            <input value={`${animal.name} · ${animal.species}`} readOnly />
          </label>

          <label>
            Beteiligungsform
            <select name="participationType" defaultValue={animal.participationType}>
              {participationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="full-span">
            Verfügbarkeit
            <input
              name="availability"
              placeholder="z. B. samstags, alle zwei Wochen"
              autoComplete="off"
              required
            />
          </label>

          <label className="full-span">
            Nachricht / Motivation
            <textarea
              name="message"
              placeholder="Warum möchtest du dieses Tier unterstützen?"
              maxLength="700"
              rows="5"
              required
            />
            <span className="field-help">Kurz reicht: Erfahrung, Motivation und was zeitlich möglich ist.</span>
          </label>

          <button className="primary-button full-span" type="submit">
            Anfrage an den Hof senden
          </button>
        </form>
      </section>
    </div>
  )
}
