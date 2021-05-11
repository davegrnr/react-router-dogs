import React from "react";
import { Link, Redirect } from "react-router-dom";
import './DogDetails.css'

function DogDetails({dog}) {

    if(!dog) return <Redirect to="/dogs" />

    return (
        <div className="DogDetails-div">
            <img src={dog.src} alt={dog.name} />
            <h3>{dog.name}</h3>
            <h3>{dog.age} years old</h3>
            <h4>Fun Facts:</h4>
            <ul className="DogDetails-facts-list">
            {dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
            </ul>
            <Link className="DogDetails-home-link" to="/dogs">Back to All Dogs</Link>
        </div>
    )
}

export default DogDetails