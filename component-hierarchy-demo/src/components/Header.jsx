export default function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p className="subtitle">App (Parent) → Children (props flow)</p>
    </header>
  )
}

