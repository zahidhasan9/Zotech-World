import React from 'react'

const SearchIcon=({className})=> {
  return (
    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={className}><circle cx="11" cy="11" r="8" id="id_125" style={{stroke: "rgb(255, 255, 255)"}}></circle><line x1="21" y1="21" x2="16.65" y2="16.65" id="id_126" style={{fill:" rgb(255, 255, 255)"}}></line></svg>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    
  >
    <circle
      cx={11}
      cy={11}
      r={8}
      id="id_125"
      style={{
        stroke: "rgb(255, 255, 255)",
      }}
    />
    <line
      x1={21}
      y1={21}
      x2={16.65}
      y2={16.65}
      id="id_126"
      style={{
        stroke: "rgb(255, 255, 255)",
      }}
    />
  </svg>
  )
}



export default SearchIcon
    

