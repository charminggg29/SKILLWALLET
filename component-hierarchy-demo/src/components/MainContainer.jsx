import ProductList from './ProductList.jsx'

export default function MainContainer({ products }) {
  return (
    <main className="main">
      <h2>Products</h2>
      <ProductList products={products} />
    </main>
  )
}

