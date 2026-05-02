import { useEffect, useMemo, useState } from "react"
import { LayoutDashboard, Leaf, MapPin } from "lucide-react"
import { AdminDashboard } from "./components/AdminDashboard"
import { AnimalCard } from "./components/AnimalCard"
import { EmptyState } from "./components/EmptyState"
import { FilterBar } from "./components/FilterBar"
import { InquiryForm } from "./components/InquiryForm"
import { animals, animalTypes, participationTypes } from "./data/animals"
import { initialInquiries, inquiryStatuses } from "./data/inquiries"
import { getViewFromHash, setViewHash, views } from "./utils/navigation"
import "./App.css"

function App() {
  const [view, setView] = useState(getViewFromHash)
  const [speciesFilter, setSpeciesFilter] = useState("Alle")
  const [participationFilter, setParticipationFilter] = useState("Alle")
  const [inquiries, setInquiries] = useState(initialInquiries)
  const [selectedInquiryAnimal, setSelectedInquiryAnimal] = useState(null)
  const [lastSubmittedInquiryName, setLastSubmittedInquiryName] = useState("")

  useEffect(() => {
    function handleHashChange() {
      setView(getViewFromHash())
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const filteredAnimals = useMemo(() => {
    return animals.filter((animal) => {
      const matchesSpecies = speciesFilter === "Alle" || animal.species === speciesFilter
      const matchesParticipation =
        participationFilter === "Alle" || animal.participationType === participationFilter

      return matchesSpecies && matchesParticipation
    })
  }, [participationFilter, speciesFilter])

  function changeView(nextView) {
    setViewHash(nextView)
    setView(nextView)
  }

  function updateInquiryStatus(id, status) {
    if (!inquiryStatuses.includes(status)) return

    setInquiries((currentInquiries) =>
      currentInquiries.map((inquiry) => (inquiry.id === id ? { ...inquiry, status } : inquiry)),
    )
  }

  function addInquiry(inquiry) {
    setInquiries((currentInquiries) => [
      {
        ...inquiry,
        id: `inq-${Date.now()}`,
        createdAt: new Date().toISOString().slice(0, 10),
        status: "Neu",
      },
      ...currentInquiries,
    ])
    setLastSubmittedInquiryName(inquiry.name)
    setSelectedInquiryAnimal(null)
    changeView(views.admin)
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => changeView(views.discover)} aria-label="Zur Startansicht">
          <span className="brand-mark">S</span>
          <span>
            <strong>Sonnenweide</strong>
            <small>Gnadenhof Pflegebeteiligung</small>
          </span>
        </button>

        <nav className="topnav" aria-label="Hauptnavigation">
          <button className={view === views.discover ? "active" : ""} onClick={() => changeView(views.discover)}>
            Entdecken
          </button>
          <button className={view === views.admin ? "active" : ""} onClick={() => changeView(views.admin)}>
            <LayoutDashboard size={17} aria-hidden="true" />
            Admin
          </button>
        </nav>
      </header>

      <main>
        {view === views.discover && (
          <>
            <section className="hero">
              <div className="hero-copy">
                <p className="eyebrow">Pilotprojekt für einen Hof in der Region</p>
                <h1>Pflegebeteiligungen am Gnadenhof Sonnenweide</h1>
                <p>
                  Entdecke Tiere, die regelmäßige Zeit, Pflege oder Versorgungspatenschaften
                  brauchen. Schnell verständlich, ohne Login und bewusst schlank für den ersten
                  Pilottest.
                </p>
                <div className="hero-facts" aria-label="Kurzinfos zum Pilotprojekt">
                  <span>
                    <Leaf size={18} aria-hidden="true" />
                    4 Tiere im V1
                  </span>
                  <span>
                    <MapPin size={18} aria-hidden="true" />
                    Vor Ort am Hof
                  </span>
                </div>
              </div>
              <div className="hero-image">
                <img src={animals[0].image} alt="Pferd auf einer ruhigen Weide" />
              </div>
            </section>

            <section className="discover-section" id="animals">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">Aktuell möglich</p>
                  <h2>Tiere entdecken</h2>
                </div>
                <p>
                  {filteredAnimals.length} von {animals.length} Tieren sichtbar
                </p>
              </div>

              <FilterBar
                species={speciesFilter}
                participation={participationFilter}
                animalTypes={animalTypes}
                participationTypes={participationTypes}
                onSpeciesChange={setSpeciesFilter}
                onParticipationChange={setParticipationFilter}
              />

              <div className="animal-grid">
                {filteredAnimals.map((animal) => (
                  <AnimalCard
                    key={animal.id}
                    animal={animal}
                    onInquire={setSelectedInquiryAnimal}
                  />
                ))}
              </div>

              {filteredAnimals.length === 0 && (
                <EmptyState
                  title="Keine passende Beteiligung gefunden"
                  description="Passe einen Filter an, um wieder Tiere im Pilotprojekt zu sehen."
                />
              )}
            </section>
          </>
        )}

        {view === views.admin && (
          <AdminDashboard
            animalsCount={animals.length}
            inquiries={inquiries}
            lastSubmittedInquiryName={lastSubmittedInquiryName}
            onStatusChange={updateInquiryStatus}
          />
        )}
      </main>

      <nav className="mobile-nav" aria-label="Hauptnavigation mobil">
        <button className={view === views.discover ? "active" : ""} onClick={() => changeView(views.discover)}>
          Entdecken
        </button>
        <button className={view === views.admin ? "active" : ""} onClick={() => changeView(views.admin)}>
          <LayoutDashboard size={17} aria-hidden="true" />
          Admin
        </button>
      </nav>

      {selectedInquiryAnimal && (
        <InquiryForm
          animal={selectedInquiryAnimal}
          onClose={() => setSelectedInquiryAnimal(null)}
          onSubmit={addInquiry}
        />
      )}
    </div>
  )
}

export default App
