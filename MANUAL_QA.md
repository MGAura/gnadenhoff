# Manual QA für V1 Release-Check

Diese Checkliste ist für die finale Browser-Freigabe gedacht. Es wird keine neue Test-Infrastruktur benötigt.

## Vorbereitung

1. Im Projektordner ausführen: `npm install`
   Erwartung: Installation läuft ohne Fehler durch.
2. Danach ausführen: `npm run dev`
   Erwartung: Vite startet lokal, typischerweise unter `http://localhost:5173`.
3. In einem Browser öffnen: `http://localhost:5173/#discover`
   Erwartung: Die Nutzeransicht lädt ohne sichtbare Fehlermeldung.

## Desktop-Test

1. Öffne `http://localhost:5173/#discover` bei Desktop-Breite.
   Erwartung: Hero, Filter und vier Tierkarten sind gut lesbar.
2. Filtere nach Tierart `Pferd`.
   Erwartung: Nur Mara wird angezeigt, Zähler zeigt `1 von 4`.
3. Filtere zusätzlich nach einer nicht passenden Beteiligungsform.
   Erwartung: Es erscheint ein verständlicher leerer Zustand.
4. Setze Filter wieder auf `Alle`.
   Erwartung: Alle vier Tiere sind wieder sichtbar.
5. Klicke bei einem Tier auf `Anfrage senden`.
   Erwartung: Das Anfrageformular öffnet sich als Dialog, das Tier ist vorausgefüllt.
6. Sende das Formular mit gültigen Daten ab.
   Erwartung: Die App wechselt ins Admin-Dashboard und zeigt eine Erfolgsmeldung.
7. Prüfe die neue Anfrage oben in der Liste.
   Erwartung: Name, E-Mail, Tier, Beteiligungsform, Verfügbarkeit, Nachricht und Status `Neu` sind sichtbar.
8. Ändere den Status der neuen Anfrage auf `Gute Passung`.
   Erwartung: Der Status ändert sich sichtbar, KPI `Gute Passungen` erhöht sich.

## Mobile-Test

1. Öffne `http://localhost:5173/#discover` in einer kleinen Breite, z. B. Smartphone-Ansicht.
   Erwartung: Inhalte sind lesbar, nichts überlappt, mobile Navigation ist erreichbar.
2. Öffne das Anfrageformular aus einer Tierkarte.
   Erwartung: Dialog passt in die Bildschirmhöhe und kann gescrollt werden.
3. Öffne über die mobile Navigation `Admin`.
   Erwartung: KPIs und Anfragekarten bleiben bedienbar, Status-Select ist gut erreichbar.

## Ungültige Eingaben

1. Öffne das Anfrageformular und versuche, leer abzusenden.
   Erwartung: Browser-Pflichtfeldprüfung verhindert das Absenden.
2. Trage nur Leerzeichen in Name, Verfügbarkeit oder Nachricht ein.
   Erwartung: Eine klare Fehlermeldung erscheint: Pflichtfelder brauchen sinnvolle Angaben.
3. Trage eine ungültige E-Mail-Adresse ein.
   Erwartung: Browser-E-Mail-Validierung verhindert das Absenden.

## Release-Freigabe

V1 gilt als manuell freigegeben, wenn:

- Discover-Ansicht und Admin-Dashboard erreichbar sind.
- Filter zuverlässig funktionieren.
- Eine gültige Anfrage im Admin-Dashboard ankommt.
- Statuswechsel im Admin sichtbar und KPI-wirksam ist.
- Mobile und Desktop keine groben Layoutprobleme zeigen.
- Allen Testpersonen klar ist, dass Daten nach Reload nicht dauerhaft gespeichert werden.
