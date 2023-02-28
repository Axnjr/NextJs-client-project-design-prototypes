import { useState } from 'react'
import './assets/App.css'

function App() {
  
  return (
    <div className="App">

        <header>
            <p className="logo">Exponential©</p>
            <nav className="nav">
                <p><a href="/">Home</a></p>
                <p><a href="/job">Jobs</a></p>
                <p><a href="/waitList">WaitList</a></p>
            </nav>
        </header>
      
        <div className="hero-container">

            <video playsInline autoPlay muted loop>
                <source src="https://rejouice.com/videos/RJ-BALL-BLUE-ORANGE.webm" type="video/mp4"/>
            </video>

			<div>
			<h1 id='hero'>
				<br/>
				Exponential Design<br/>Studios.
				{/* <span>
					<p>
					<br/>
					<br/>
						A team of passionate Software engineer's willing to
						revolutionize e-commerce industry with Ar-Vr technolgies.
					</p>
				</span>	 */}
			</h1>
			</div>

		</div>

    </div>
  )
}

export default App
