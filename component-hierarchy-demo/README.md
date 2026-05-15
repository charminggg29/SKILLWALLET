# Component Hierarchy Demo (React)

This demo shows a simple parent/child React component hierarchy with props flow and minimal styling.

## Structure
- `src/App.jsx` (Parent)
- `src/components/Header.jsx` (Child)
- `src/components/MainContainer.jsx` (Child that renders more children)
- `src/components/ProductCard.jsx` (Grandchild)
- `src/components/ProductList.jsx` (Grandchild)

## Setup (Vite)
```bash
cd "c:/Users/windows/Downloads/Info Man/SKILL.WALLET.ACTIVITIES/component-hierarchy-demo"
npm install
npm run dev
```

## Verify hierarchy
1. Open the browser at the Vite URL shown in terminal.
2. Confirm:
   - `App` renders `Header` + `MainContainer`
   - `MainContainer` renders `ProductList`
   - `ProductList` renders multiple `ProductCard`s
   - Props (static product data) flow from `App` → children.

