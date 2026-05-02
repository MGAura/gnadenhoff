# QA Checkliste für V1-Abnahme

## Technische Checks

- [ ] `npm install` läuft ohne Fehler.
- [ ] `npm run dev` startet die App lokal.
- [ ] `npm run lint` läuft erfolgreich.
- [ ] `npm run build` läuft erfolgreich.

## Nutzeransicht

- [ ] `http://localhost:5173/#discover` öffnet die Discover-Ansicht.
- [ ] Vier Tiere werden angezeigt: Mara, Oskar, Nala, Lotte.
- [ ] Jede Tierkarte zeigt Name, Tierart, Kurzbeschreibung, Beteiligungsform, Zeitbedarf, Ort und Monatsbeitrag.
- [ ] Filter nach Tierart funktionieren.
- [ ] Filter nach Beteiligungsform funktionieren.
- [ ] Wenn keine Tiere passen, erscheint ein verständlicher leerer Zustand.
- [ ] Die Ansicht ist auf einem kleinen Smartphone-Screen lesbar und bedienbar.

## Anfrageformular

- [ ] Klick auf `Anfrage senden` in einer Tierkarte öffnet das Formular.
- [ ] Das gewünschte Tier ist korrekt vorausgefüllt.
- [ ] Pflichtfelder verhindern leeres Absenden.
- [ ] Nach dem Absenden wird die Anfrage im Admin-Dashboard angezeigt.
- [ ] Die neue Anfrage startet mit Status `Neu`.

## Admin-Dashboard

- [ ] `http://localhost:5173/#admin` öffnet das Admin-Dashboard.
- [ ] KPIs zeigen Tiere im Pilot, neue Anfragen und gute Passungen.
- [ ] Alle Start-Anfragen werden angezeigt.
- [ ] Jede Anfrage zeigt Name, E-Mail, Tier, Beteiligungsform, Verfügbarkeit, Nachricht und Status.
- [ ] Status kann auf `Neu`, `Rückruf geplant` und `Gute Passung` geändert werden.
- [ ] KPI `Gute Passungen` reagiert auf Statuswechsel.
- [ ] Dashboard ist auf Desktop sauber scanbar und auf Mobile weiterhin bedienbar.

## V1 gilt als bestanden, wenn

- [ ] Interessierte in unter einer Minute verstehen, welche Beteiligungen möglich sind.
- [ ] Eine Anfrage vollständig abgeschickt und im Admin-Dashboard gesehen werden kann.
- [ ] Das Hofteam eine Anfrage intern auf einen Status setzen kann.
- [ ] Keine Backend-, Auth-, Payment- oder Mehr-Hof-Funktionalität erwartet wird.
