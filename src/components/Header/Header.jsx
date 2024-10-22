import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__box">
                        <h1>Lorem ipsum dolor sit amet <span>consectetur.</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestias facilis aspernatur dolore, tenetur expedita iure.</p>
                        <button>ДВИГАТЬСЯ К МЕЧТЕ</button>

                    </div>
                    <img src="https://abbos29.github.io/dream/img/main.png" alt="" className="header__img" />
                </div>
            </div>
        </header>
    </>
  )
}

export default Header