# ISPD Asia Pacific Chapter — website

Static website for the Asia Pacific Chapter of the International Society for
Peritoneal Dialysis. Plain HTML, CSS and JavaScript — no build step, no
framework, no dependencies.

**Live site:** https://USERNAME.github.io/ispd-asia-pacific/
*(replace USERNAME after GitHub Pages is switched on)*

## Layout

```
index.html          Home
about.html          About the chapter, mission, PD uptake figure
activities.html     Activities & events
support.html        Support & grants
newsletter.html     Newsletter archive  → files/newsletter/*.pdf
education.html      Learning Center, guidelines  → files/guidelines/*.pdf
membership.html     Membership benefits + application form
css/style.css       The single stylesheet
js/main.js          Mobile menu, tabs, accordions, video posters
images/             Photos, maps, card icons (images/icons/)
files/              PDFs: newsletters and ISPD guidelines
```

## Updating the site

1. Edit the files in this folder on your computer, or drop a new PDF into
   `files/newsletter/` and add a link to it in `newsletter.html`.
2. Open **GitHub Desktop**. The changed files appear in the left-hand list.
3. Type a short summary (e.g. `Add April 2027 newsletter`) and click
   **Commit to main**.
4. Click **Push origin**.
5. The live site updates itself about one minute later. Press Ctrl+F5 in the
   browser if you still see the old version.

### ภาษาไทย — ขั้นตอนอัปเดตเว็บ

1. แก้ไฟล์ในโฟลเดอร์นี้ หรือวาง PDF ใหม่ลง `files/newsletter/` แล้วเพิ่มลิงก์ใน `newsletter.html`
2. เปิด **GitHub Desktop** จะเห็นรายการไฟล์ที่แก้ทางซ้าย
3. พิมพ์สรุปสั้น ๆ ในช่อง Summary แล้วกด **Commit to main**
4. กด **Push origin**
5. เว็บจริงจะอัปเดตเองในราว 1 นาที ถ้ายังเห็นของเก่าให้กด Ctrl+F5

## Notes for whoever maintains this

- **File names are case-sensitive once published.** `Asia.png` and `asia.png`
  are two different files on the server even though Windows treats them as one.
  Link to files exactly as they are named.
- Links are all relative (`images/…`, `files/…`), so the site works both from a
  local folder and from a GitHub Pages sub-path. Do not change a link to start
  with `/`.
- `.nojekyll` tells GitHub Pages to serve the folder as-is rather than running
  it through Jekyll. Leave it in place.
- The membership form is a front-end demo: it shows a confirmation dialog and
  does not send anything anywhere. Wiring it to a real inbox needs a form
  service (Formspree, Netlify Forms) or a backend.
