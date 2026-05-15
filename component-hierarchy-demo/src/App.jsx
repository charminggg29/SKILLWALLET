import Header from './components/Header.jsx'
import MainContainer from './components/MainContainer.jsx'

const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
  { id: 2, name: 'T-Shirt', price: 25, category: 'Clothing' },
  { id: 3, name: 'Book: JS Advanced', price: 55, category: 'Books' },
]

export default function App() {
  // Parent component holds data and passes it down via props.
  return (
    <div className="app">
      <Header title="Component Hierarchy Demo" />
      <MainContainer products={PRODUCTS} />
    </div>
  )
}

