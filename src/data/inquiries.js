export const inquiryStatuses = ["Neu", "Rückruf geplant", "Gute Passung"]

export const initialInquiries = [
  {
    id: "inq-1001",
    createdAt: "2026-05-01",
    name: "Lea Hoffmann",
    email: "lea.hoffmann@example.de",
    animalId: "mara",
    animalName: "Mara",
    participationType: "Pflege vor Ort",
    availability: "Dienstagabend oder Samstagvormittag",
    message:
      "Ich habe früher Pferde gepflegt und suche bewusst eine ruhige Aufgabe ohne Reitfokus.",
    status: "Neu",
  },
  {
    id: "inq-1002",
    createdAt: "2026-04-30",
    name: "Jonas Reuter",
    email: "jonas.reuter@example.de",
    animalId: "oskar",
    animalName: "Oskar",
    participationType: "Spaziergang & Training",
    availability: "Sonntags, gelegentlich Mittwoch",
    message:
      "Ich wohne im Nachbarort und möchte regelmäßig draußen helfen. Esel finde ich großartig.",
    status: "Rückruf geplant",
  },
  {
    id: "inq-1003",
    createdAt: "2026-04-28",
    name: "Miriam Keller",
    email: "miriam.keller@example.de",
    animalId: "lotte",
    animalName: "Lotte",
    participationType: "Versorgungspatenschaft",
    availability: "Vor Ort selten, Unterstützung monatlich möglich",
    message:
      "Ich möchte den Hof langfristig unterstützen und freue mich über Updates zu Lotte.",
    status: "Gute Passung",
  },
  {
    id: "inq-1004",
    createdAt: "2026-05-02",
    name: "Tobias Krämer",
    email: "tobias.kraemer@example.de",
    animalId: "nala",
    animalName: "Nala",
    participationType: "Spaziergang & Training",
    availability: "Alle zwei Wochen am Freitagnachmittag",
    message:
      "Ich habe Erfahrung mit ruhiger Bodenarbeit und möchte lernen, wie Lamas sicher geführt werden.",
    status: "Neu",
  },
]
