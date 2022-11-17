---
theme: default
background: assets/warroom.jpg
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Author: Aaron Bach
  Learn more at [tabya.de](https://tabya.de)
# persist drawings in exports and build
drawings:
  persist: false
---

# Warroom - Wenn Bugs den Produktivbetrieb erreichen 🤯💣
> Aaron Bach - tabya GmbH - a.bach@tabya.de

---
layout: center
class: text-center
---

# Let's <font color="#f7a600">**DU**</font> it
> Wir "dutzen" uns in diesem Termin, auch wenn das im Alltag sonst nicht der Fall ist


# Let's <font color="#f7a600">**eat**</font>!
> Esst gerne während des Termins, es ist Mittagszeit (-:

---
layout: default
---

# Who is who?
> kurze Vorstellungsrunde
> - Wie lautet dein Name?
> - Sommer ☀️ oder Winter ❄️?
> - Was machst du beruflich?

---
layout: center
class: text-center
---

# Orga
> Inhalt: https://github.com/aaronbach/web-dev-coffee-talk

---
layout: default
---

# Warum sollten Bugs im Produktivbetrieb verhindert werden? 
> * Bugs sind häufig negative Nutzererlebnisse
> * Zur schnellen Behebung, muss die aktuelle Arbeit oft unterbrochen werden, und geplante Vorgänge bleiben stehen
> * Je nach Schweregrad ist die Software nicht mehr benutzbar

---
layout: center
class: text-center
---

# Welche Erfahrungen habt ihr zum heutigen Thema? Was interessiert euch?

---
layout: center
class: text-center
---

# Bugtracking / Klassifizierung von Bugs
> Wie werden Bugs gemeldet?
> * Analysieren des Nutzerverhaltens; Z.B. Nutzer brechen Prozesse verfrüht ab
> * Analyse des Ladeverhaltens / Interaktionsverhaltens
> * POs/Entwickler finden selbst Probleme

> Wer entscheidet, über deren Priorität / Wichtigkeit?
> * ProductOwner

---
layout: center
class: text-center
---

# Wie lassen sich Bugs im Produktivbetrieb verhindern?
> Was sind entscheidende Quality-Gates?
> * Abbildung der Testpyramide
> * Blockieren von Merge-/Pull-Requests, wenn tests failen
> * Fuzzy testing

---
layout: center
---

# Klare Definition des Notfall-Ablaufs
> Wer hat welche Verantwortung, wenn ein schwerwiegender Fehler ausgerollt ist?
> * Team zur Behebung definieren.
> * Rückmeldungsweg an den Anwender definieren
> * Ist ein Rollback möglich -> Taggen der Version?
>
> Wie wird der Nutzer über den Vorfall informiert?
> * Am einfachsten über eine Integration in der Software selbst, über ein Banner / Meldung

---
layout: center
---

# Feedback
> Offenes / konstruktives Feedback

> Gerne an a.bach@tabya.de
