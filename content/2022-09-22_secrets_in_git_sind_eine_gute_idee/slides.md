---
theme: default
background: assets/background.jpg
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

# web-developer coffee table - Secrets in Git sind eine gute Idee 🤯💣
> Sebastian Weiß - Bitrebels GmbH - s.weiss@bitrebels.de

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
> - Ananas 🍍 oder Apfel 🍎?
> - Wie machst du beruflich?

---
layout: center
class: text-center
---

# Orga
> Inhalt: https://github.com/aaronbach/web-dev-coffee-talk

---
layout: center
---

# Was ist das Problem? Was ist ein secret?
> - Secrets: API-Keys / Passwörter / etc
> - Git vergisst nicht / Git ist dezentral

---
layout: center
---

# Wie tauscht ihr aktuell Keys/Secrets aus?
> - Einbindung von Secrets im Code als Umgebungsvariable
> - Passwörter / Secrets in Passwortmanager speichern. Teilen in Messenger als Link zu diesem Secret
> - Neue Variablen werden in einem env-default-file gespeichert

---
layout: center
---

# Demo - Verschlüsselte Secrets im git projekt
> - Disclaimer: Kein Vorgehen für einen Produktivbetrieb - mehr ein proof of concept
> - Vorteile:
>   - Platform-unabhängig (Gitlab / Github / etc)
>   - Jeder hat direkten Zugriff auf alle Secrets

---
layout: center
---

# Was für ähnliche Projekte gibt es mit der gleichen Idee?
* Für ios/android: https://docs.fastlane.tools/actions/match/
* https://git-secrets.io
* https://www.passwordstore.org/

# Wie integriere ich Secrets in Pipelines?

---
layout: center
---

# Feedback
> Offenes / konstruktives Feedback

> Gerne an a.bach@tabya.de / s.weiss@bitrebels.de
