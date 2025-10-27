# Advanced Filtering — React + Vite

This repository is a small e-commerce-style demo built with React + Vite. It demonstrates:
- A responsive product grid with card UI
- Sidebar filters (Category, Price, Color) implemented with accessible custom radio controls
- Search input (live filtering)
- Modular component structure and modern CSS styling

The goal is to be a lightweight starting point for learning how to implement client-side filtering and a polished UI with React.

## Features
- Product data stored in `src/Db/data.js` (serializable JS data)
- Live text search (navigation input) that filters products as you type
- Sidebar filters for Category, Price, and Color using a shared `Input` component
- Modern, card-based product list with hover and visual affordances
- Small, focused components (Navigation, Sidebar, Category, Price, Colors, Product, Card, Footer)

## Project structure (important files)
- `src/App.jsx` — application entry and main filter logic
- `src/Db/data.js` — product data (plain JS values; no JSX inside)
- `src/Navigation/Nav.jsx` + `Nav.css` — top navigation and search input
- `src/Sidebar/*` — sidebar sections and CSS (`Category`, `Price`, `Colors`)
- `src/Products/Product.jsx` + `Product.css` — product list and grid styles
- `src/Components/Input.jsx` — reusable radio input / label markup
- `src/Components/Card.jsx` — product card renderer
- `src/Footer/*` — footer component and styles

## Setup & development

Make sure you have Node.js installed (recommended v16+). From the project root:

1. Install dependencies

```powershell
npm install
```

2. Run the dev server (Vite)

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

4. Preview the production build

```powershell
npm run preview
```

## How the search & filters work
- The `Navigation` component receives `query` and `handleInputChange` props from `App` and updates the `query` state.
- `App` computes `filteredItems` from the original products using the `query` (case-insensitive substring match on `title`).
- Radio filters are wired through `handleChange` (passed from `App` into sidebar components). The selected filter (`selectCategory`) is used together with `query` to narrow results.
- Product `star` values are numeric in `data.js`. The `Card` component converts the numeric rating into rendered star icons at render time — this avoids putting JSX inside data files.

## Styling notes
- Styling is plain CSS files colocated with components (e.g., `Category.css`, `Price.css`, `Colors.css`).
- Custom radio visuals are implemented by hiding the native input (but keeping it accessible) and using a sibling `.checkmark` element that changes when the input is `:checked`.
- The product grid uses CSS Grid with responsive `minmax()` to create a neat card layout.

## Common issues & tips
- If you see a parser error complaining about `<` in `data.js`, that means JSX was left in the data file. Data files must contain only serializable JS (strings, numbers). Move icons/JSX rendering into components (e.g., `Card`).
- If styles don't appear, ensure the component imports the corresponding CSS file (e.g., `import './Category.css'` in `Category.jsx`). Vite automatically bundles imported CSS.
- If the sidebar or footer overlap content, check any `position: fixed` rules. The project uses a static footer by default so it appears after content; the sidebar is fixed to the left.

## Extending the project
- Add more filter dimensions (brand, size). Create new sidebar components that reuse `Input.jsx`.
- Persist filter state to URL query params for shareable links.
- Replace local data with an API and add server-side search or pagination.

## Contributing
1. Fork the repo
2. Create a feature branch
3. Open a PR with a clear description of changes

## License
This project is provided as-is for learning and demo purposes.

---

