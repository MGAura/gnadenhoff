# Natur Live Ranch - Pflegebeteiligungs-Portal V1

Mobile-first React-Prototyp für einen einzelnen Gnadenhof als Pilotprojekt. Interessierte können Tiere entdecken, nach Tierart und Beteiligungsform filtern und eine unverbindliche Anfrage senden. Das Hofteam kann eingehende Anfragen in einem einfachen Admin-Dashboard prüfen und den Status ändern.

## Zweck

Das V1 soll intern und mit ersten Interessierten validieren, ob Pflegebeteiligungen am Gnadenhof als Modell verständlich, attraktiv und für das Hofteam handhabbar sind. Der Hof steht im Zentrum, nicht eine Plattform für viele Höfe.

## Scope von V1

- Öffentliche Discover-Ansicht mit vier Mock-Tieren.
- Filter nach Tierart und Beteiligungsform.
- Anfrageformular mit Name, E-Mail, Tier, Beteiligungsform, Verfügbarkeit und Nachricht.
- Lokaler React-State für eingehende Anfragen.
- Admin-Dashboard mit Anfrageübersicht, KPIs und Statuswechsel.
- Statuswerte: `Neu`, `Rückruf geplant`, `Gute Passung`.

## Bewusst noch nicht enthalten

- Kein echtes Backend.
- Keine Authentifizierung oder Admin-Login.
- Kein Payment.
- Keine Terminlogik.
- Keine Nutzerkonten.
- Keine Mehr-Hof-Architektur.
- Keine digitale Vereinbarung, Waiver oder Hofregeln.

## Tech-Stack

- Vite
- React
- JavaScript
- CSS
- lucide-react für UI-Icons

## Lokal starten

```bash
npm install
npm run dev
```

Danach die lokale Vite-URL öffnen, üblicherweise `http://localhost:5173`.

## Ansichten

- Nutzeransicht: `http://localhost:5173/#discover` oder `http://localhost:5173`
- Admin-Dashboard: `http://localhost:5173/#admin`

## Projektstruktur

```text
src/
  components/
    AdminDashboard.jsx
    AnimalCard.jsx
    EmptyState.jsx
    FilterBar.jsx
    InquiryForm.jsx
  data/
    animals.js
    inquiries.js
  utils/
    inquiryMetrics.js
    navigation.js
  App.jsx
  App.css
  index.css
  main.jsx
```

## Mock-Daten

- Tiere: `src/data/animals.js`
- Start-Anfragen und Statuswerte: `src/data/inquiries.js`

Anfragen referenzieren Tiere über `animalId` und enthalten zusätzlich `animalName` als Anzeige-Snapshot für das Dashboard. Das macht die Datenstruktur später leicht auf ein Backend übertragbar.

## V1-Abnahme

Die manuelle Abnahme ist in `QA_CHECKLIST.md` beschrieben. Der finale Browser-Release-Check steht in `MANUAL_QA.md`. Für den technischen Abschluss sollten mindestens diese Checks laufen:

```bash
npm run lint
npm run build
```

## V1 Release-Stand

V1 kann zuverlässig Tiere anzeigen, Filter anwenden, eine Anfrage im lokalen State anlegen, ins Admin-Dashboard wechseln und Statusänderungen an Anfragen im UI abbilden.

Bewusst eingeschränkt bleibt der Pilot: Neue Anfragen und Statusänderungen werden nicht dauerhaft gespeichert. Nach einem Browser-Reload startet die App wieder mit den Mock-Daten aus `src/data/inquiries.js`. Es gibt außerdem kein Backend, kein Admin-Login, keine Zahlungen und keine Terminlogik.
