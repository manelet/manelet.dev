import React from "react"

import ThemeToggle from '../components/ThemeToggle'

import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/main.scss'

export default function Home() {

  return (
    <div>
      <nav className='home cont'>
        <div className='cont-inner'>
          <div className='flex w-full justify-between'>
            <div className="left">
              left
            </div>
            <div className="right">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <div className="splash cont">
        <div className="cont-inner">
          <div>
            <h1>Manel Escuer</h1>
            <p>Frontend developer for wefox focused on React</p>
          </div>
        </div>

        <div className="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,144C672,139,768,149,864,170.7C960,192,1056,224,1152,208C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>          
        </div>
      </div>

      <div className="cont">
        <div className="cont-inner items-center flex-col md:flex-row">
          <div className='flex w-full md:max-w-xs'>
            projects
          </div>
          <div className='flex w-full bg-gray-900 rounded p-5'>
            <div className='w-full'>
              <ul>
                <li>bocado</li>
                <li>nyora</li>
              </ul>
            </div>
            <div className='w-full'>
              <ul>
                <li>str</li>
                <li>dropdown</li>
              </ul>              
            </div>
          </div>
        </div>
      </div>

      <div className="cont">
        <div className="cont-inner flex-col">
          <h2>posts</h2>

          <div>
            <h3>title post</h3>
            <p>desc</p>
          </div>
        </div>
      </div>

      <footer>
        footer
      </footer>
    </div>
  )
}
