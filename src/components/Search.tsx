import React from 'react'

type Props = {}

const Search = (props: Props) => {
  return (
    <form className="d-flex">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  )
}

export default Search 