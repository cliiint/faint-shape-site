import * as React from 'react'
import { Link } from 'gatsby'

function ShowDetail({ show }) {
  return (
    <div>
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <h1>{show.title}</h1>
      <div>welcome to show view</div>
    </div>
  )
}

export default ShowDetail
