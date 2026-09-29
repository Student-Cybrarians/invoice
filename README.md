# InvoiceIQ

**Browser-only invoice OCR that turns invoice images into structured digital records.**

InvoiceIQ runs OCR entirely in the browser, with no backend and no database.

## Features

- Drag-and-drop invoice image upload
- Browser OCR powered by Tesseract.js
- OCR text and confidence review
- Editable structured invoice records
- Searchable invoice library
- JSON and CSV export
- Dashboard totals and recent uploads
- Dark mode

## Tech stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Tesseract.js
- Browser `localStorage`

## Data model

All application data stays in browser `localStorage`. Clearing site data resets the application.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Focus

**OCR • Browser AI • Next.js • TypeScript • Privacy-conscious Data Processing**
