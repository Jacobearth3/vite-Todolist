import React from 'react'
import reactLogo from "../assets/react.svg"
import viteLogo from "/vite.svg"

function Header() {
    return (
        <div className='Header'>
            <header>
                <div className="name">
                    Created by
                </div>
                <div className="image">
                    <a href="https://www.react.dev">
                        <img src={reactLogo} alt="React" className='logo' />
                    </a>
                </div>
                <div className="image">
                    <a href="http://www.vitejs.dev/">
                    <img src={viteLogo} alt="vite" className='logo' />
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Header