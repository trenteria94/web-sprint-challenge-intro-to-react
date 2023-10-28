import React, { useState } from 'react'

function Character(props) { // ❗ Add the props
  const { person, planet} = props

  const [homeWorld, setHomeWorld] = useState(false)

  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeWorld = () => {
    setHomeWorld(!homeWorld)
  }
  return (
    <div className='character-card' onClick={toggleHomeWorld}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>{person.name}</h3>
      {homeWorld && <p>{"Planet: "} <span className="character-planet">{planet.name}</span></p>}
    </div>
  )
}

export default Character
