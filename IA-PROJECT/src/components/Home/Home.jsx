import { Link } from "react-router-dom"
export function Home() {
  return (
    <>
<p>Home</p>
<Link to="/Article">Article</Link>
<Link to="/Brand">Brand</Link>
<Link to="/Cta">Cta</Link>
<Link to="/Feature">Feature</Link>
    </>
  )
}

