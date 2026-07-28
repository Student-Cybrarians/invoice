# InvoiceIQ

Convert invoice images into structured digital data using OCR, entirely in the browser — no backend, no database.

## Tech Stack
- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS
- Tesseract.js (OCR)
- Browser `localStorage` for persistence

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> First OCR run may take a few seconds — Tesseract.js downloads its language model on demand.

## Pages
- `/` — Dashboard (totals + recent uploads)
- `/upload` — Drag & drop upload with image preview and OCR trigger
- `/ocr` — Extracted text + confidence score review
- `/invoice/new` — Editable invoice details for a freshly-scanned invoice
- `/invoice/[id]` — View/edit a saved invoice, export as JSON or CSV
- `/library` — Searchable grid of all saved invoices

## Notes
- Sample invoices are seeded automatically on first load (Dashboard/Library).
- All data lives in `localStorage`; clearing site data resets the app.
- Dark mode toggle is in the top navigation bar.
