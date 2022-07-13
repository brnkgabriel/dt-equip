import React from 'react'
import Header from '../../comps/Header'

const Design = () => {
  const description = "Migrate from concept to product through the design step."
  const name = "Design - DTE"
  const url = "design"
  return (
    <div>
      <Header name={name} description={description} url={url} />
      Design
    </div>
  )
}

export default Design
