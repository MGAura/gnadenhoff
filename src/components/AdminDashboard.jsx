import { ClipboardList, Heart, Mail, PawPrint } from "lucide-react"
import { EmptyState } from "./EmptyState"
import { inquiryStatuses } from "../data/inquiries"
import { getInquiryMetrics } from "../utils/inquiryMetrics"

const statusClassNames = {
  Neu: "status-new",
  "Rückruf geplant": "status-call",
  "Gute Passung": "status-match",
}

export function AdminDashboard({ animalsCount, inquiries, lastSubmittedInquiryName, onStatusChange }) {
  const { newCount, goodMatchCount } = getInquiryMetrics(inquiries)

  return (
    <section className="admin-view" id="admin">
      <div className="admin-heading">
        <div>
          <p className="eyebrow">Hof-Dashboard</p>
          <h1>Anfragen verwalten</h1>
        </div>
        <p>
          Interne Übersicht für das Hofteam: neue Kontakte prüfen, Rückruf planen und passende
          Anfragen markieren.
        </p>
      </div>

      <div className="kpi-grid" aria-label="Kennzahlen">
        <Kpi icon={<PawPrint size={22} />} label="Tiere im Pilot" value={animalsCount} />
        <Kpi icon={<ClipboardList size={22} />} label="Neue Anfragen" value={newCount} />
        <Kpi icon={<Heart size={22} />} label="Gute Passungen" value={goodMatchCount} />
      </div>

      {lastSubmittedInquiryName && (
        <p className="success-note" role="status">
          Anfrage von {lastSubmittedInquiryName} wurde im Dashboard angelegt.
        </p>
      )}

      <div className="admin-list" aria-label="Eingegangene Anfragen">
        {inquiries.length === 0 && (
          <EmptyState
            title="Noch keine Anfragen"
            description="Sobald Interessierte das Formular absenden, erscheinen ihre Anfragen hier zur Bearbeitung."
          />
        )}

        {inquiries.map((inquiry) => (
          <article className="inquiry-row" key={inquiry.id}>
            <div className="inquiry-main">
              <div className="inquiry-title-row">
                <div>
                  <strong>{inquiry.name}</strong>
                  <a href={`mailto:${inquiry.email}`}>
                    <Mail size={15} aria-hidden="true" />
                    {inquiry.email}
                  </a>
                </div>
                <span className="date-pill">{inquiry.createdAt}</span>
              </div>

              <dl className="inquiry-facts">
                <div>
                  <dt>Tier</dt>
                  <dd>{inquiry.animalName}</dd>
                </div>
                <div>
                  <dt>Beteiligung</dt>
                  <dd>{inquiry.participationType}</dd>
                </div>
                <div>
                  <dt>Verfügbarkeit</dt>
                  <dd>{inquiry.availability}</dd>
                </div>
              </dl>

              <p className="message-text">{inquiry.message}</p>
            </div>

            <label className="status-field">
              Status
              <select
                className={`status-select ${statusClassNames[inquiry.status] ?? ""}`}
                value={inquiry.status}
                onChange={(event) => onStatusChange(inquiry.id, event.target.value)}
              >
                {inquiryStatuses.map((status) => (
                  <option value={status} key={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>
          </article>
        ))}
      </div>
    </section>
  )
}

function Kpi({ icon, label, value }) {
  return (
    <article className="kpi-card">
      <span className="kpi-icon" aria-hidden="true">
        {icon}
      </span>
      <div>
        <strong>{value}</strong>
        <p>{label}</p>
      </div>
    </article>
  )
}
