import construction from '../assets/images/construction.png'
import logo from '../assets/images/logo.png'
import './Projects.css'

export default function Projects() {
    return (
        <>
            <div className="projects-container">
                <img className="graphics" style={{width: "520px", height: "500px"}} src={construction}/>
                <div className="text-body">
                    <h1 className="kanit-medium">This page is under construction...</h1>
                    <h2 className="kanit-light">Keep posted to see what we will work on next!</h2>
                    <img id="logo" style={{width: "400px", height: "300px"}}   src={logo}/>
                </div>
            </div>
        </>
    )
}