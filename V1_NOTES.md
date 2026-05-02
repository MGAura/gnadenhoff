# V1 Notes / Handoff

## Aktueller Umsetzungsstand

Das Projekt ist ein lokal startbarer React/Vite-Prototyp für den einzelnen Gnadenhof Sonnenweide. Es gibt eine öffentliche Discover-Ansicht, ein Anfrageformular und ein Admin-Dashboard. Daten kommen aus Mock-Dateien und werden zur Laufzeit im lokalen React-State verwaltet.

## Was funktioniert

- Tiere werden aus `src/data/animals.js` geladen.
- Filter nach Tierart und Beteiligungsform funktionieren clientseitig.
- Tierkarten zeigen Kurzbeschreibung, Beteiligungsform, Zeitbedarf, Ort und Beitrag.
- Das Anfrageformular öffnet aus einer Tierkarte heraus.
- Neue Formularanfragen werden in den lokalen `inquiries`-State übernommen.
- Nach dem Absenden springt die App ins Admin-Dashboard.
- Das Admin-Dashboard zeigt KPIs und alle Anfragen.
- Statuswechsel zwischen `Neu`, `Rückruf geplant` und `Gute Passung` funktionieren im UI.
- Das Anfrageformular prüft Pflichtfelder und blockt Eingaben, die nur aus Leerzeichen bestehen.
- Nach einer gültigen Anfrage zeigt das Admin-Dashboard einen kurzen Erfolgshinweis.

## Bekannte Einschränkungen

- Statusänderungen und neue Anfragen sind nach einem Reload wieder weg, weil es kein Backend und keine Persistenz gibt.
- Es gibt keine Admin-Authentifizierung.
- E-Mail-Adressen sind Dummy-Daten.
- Bilder werden über externe Unsplash-URLs geladen.
- Es gibt keine automatisierten UI-Tests.
- Hash-Navigation (`#discover`, `#admin`) ersetzt bewusst noch kein echtes Routing.
- Der finale Browser-Flow muss manuell anhand von `MANUAL_QA.md` freigegeben werden.

## Architekturentscheidungen

- Vite + React, weil der Pilot schnell startbar und später erweiterbar bleiben soll.
- Keine Router-Bibliothek, weil zwei Hash-Views für V1 ausreichen.
- Mock-Daten liegen zentral unter `src/data`.
- KPI-Berechnung liegt in `src/utils/inquiryMetrics.js`.
- Hash-Navigation liegt in `src/utils/navigation.js`.
- Styling bleibt in `src/App.css`, weil der Prototyp klein ist und kein Designsystem braucht.

## Relevante Dateien

- `src/App.jsx`: App-State, View-Auswahl, Filter, Anfrageanlage.
- `src/components/AnimalCard.jsx`: Darstellung einzelner Tiere und Einstieg ins Anfrageformular.
- `src/components/InquiryForm.jsx`: Unverbindliches Anfrageformular.
- `src/components/AdminDashboard.jsx`: KPIs, Anfrageübersicht und Statuswechsel.
- `src/data/animals.js`: Seed-Daten der Tiere.
- `src/data/inquiries.js`: Seed-Daten der Anfragen und erlaubte Statuswerte.
- `src/utils/inquiryMetrics.js`: KPI-Berechnung.
- `src/utils/navigation.js`: Hash-View-Handling.

## Nächste sinnvolle V2-Schritte

- Persistenz für Anfragen und Statuswechsel einführen.
- Echte Hofbilder und finale Texte einsetzen.
- Admin-Login ergänzen.
- Einfaches Backend/API für Tiere und Anfragen bauen.
- Formulare serverseitig validieren.
- Erste Nutzertests mit Hofteam und Interessierten durchführen.
- Danach entscheiden, ob Terminabstimmung, Vereinbarungen oder Payments wirklich gebraucht werden.
