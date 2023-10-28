/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [people, setPeople] = useState()
  const [planets, setPlanets] = useState()
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    function fetchStarWarsData() {
      const peopleObj = axios.get(urlPeople)
      const planetObj = axios.get(urlPlanets)
      Promise.all([peopleObj, planetObj])
        .then((res) => {
          let peopleData = res[0].data
          const planetsData = res[1].data
          peopleData.forEach(person => {
            planetsData.forEach(planet => {
              if (person.homeworld === planet.id) 
              {person.homeworld = planet}
            })
          })
          setPeople(res[0].data)
          setPlanets(res[1].data)
          })
        .catch(err => {err.message})
        


    }
      fetchStarWarsData()
  }, [])
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      { people && people.map(char => {
        
        return <Character key={char.id} person={char} planet={char.homeworld}/>
      })
      
      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
