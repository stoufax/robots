import React from 'react'

import Card from '../Card/Card'

const CardList = ({ robots = [] }) => {
  const CardList = robots.map((robot) => {
    return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
  })
  return <div>{CardList}</div>
}

export default CardList
