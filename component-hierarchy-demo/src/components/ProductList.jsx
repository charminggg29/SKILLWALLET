import ProductCard from './ProductCard.jsx'

export default function ProductList({ products }) {
  return (
    <section className="productGrid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  )
}

