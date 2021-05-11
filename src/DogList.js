import React from 'react'
import { Link } from "react-router-dom";
import './DogList.css'

function DogList ({dogs}) {
    return (
        <div>
            <h1>Here's all the pups!</h1>
            <div className="DogList-div">
                {dogs.map(d => (
                    <div className="DogList-dog-div" key={d.name}>
                        <img src={d.src} alt={d.name} />
                        <h2 className="DogList-dog-name">
                            <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                        </h2>
                        <hr className="DogList-hr" />
                    </div>
                ))}
            </div>
        </div>
    )
    
}

export default DogList
