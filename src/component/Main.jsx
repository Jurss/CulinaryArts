import React from 'react'
import './CSS/main.css'

const Main = () => {
    return (
        <div className="mainContainer">
            <form>
                <input type="text" id="search" placeholder="search"/>
                <button type="submit"></button>
            </form>
        </div>
    )
}

export default Main
