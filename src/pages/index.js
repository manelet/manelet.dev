import React from "react"
// import { useRecoilState } from 'recoil'
// import { themeSelector } from '../state/theme'
import '../styles/main.scss'

export default function Home() {
  // const [theme, toggleTheme] = useRecoilState(themeSelector)

  // console.log('render', theme)

  return (
    <div>
      <nav className='home cont bg-red dark:bg-purple'>
        <div className='cont-inner'>
          <div className="left">
            left
          </div>
          <div className="right">
            <b>right</b>
          </div>
        </div>
      </nav>

      <div className="splash cont border border-blue-500">
        <div className="cont-inner border border-red-500">
          <div>
            <h1>Manel Escuer</h1>
            <button className='bg-purple-500 dark:bg-orange-500'>
              button
            </button>
          </div>
        </div>

        <div className="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#111" fill-opacity="1" d="M0,128L48,128C96,128,192,128,288,138.7C384,149,480,171,576,165.3C672,160,768,128,864,122.7C960,117,1056,139,1152,122.7C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>              
        </div>
      </div>

      <div className="cont">
        <div className="cont-inner">
          <h2>contingut</h2>
        </div>
      </div>
    </div>
  )
}
