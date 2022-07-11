import React from 'react'
import Header from '../../comps/Header'

const Design = () => {
  const description = "Migrate from concept to product through the design step. On this page you will learn the principles of graphics design starting with a pencil and paper."
  const name = "Design | DT-EQUIP"
  const url = "design"
  return (
    <div>
      <Header name={name} description={description} url={url} />
      Design
    </div>
  )
}

export default Design
