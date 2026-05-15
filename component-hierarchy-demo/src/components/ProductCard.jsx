export default function ProductCard({ product }) {
  const { name, price, category } = product

  return (
    <article className="card">
      <h3>{name}</h3>
      <p className="meta">Category: {category}</p>
      <p className="price">Price: ₱{price}</p>
    </article>
  )
}

