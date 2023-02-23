import * as React from "react"
import { Link } from "gatsby"

function ShowCatchAll({ params }) {
  console.log('params on catchall ',params)
  return (
    <div className="wrapper">
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
        <h1>Couldn't find show</h1>
        <p>We couldn't locate the show "{params.id}"</p>
      </main>
    </div>
  )
}

export default ShowCatchAll
