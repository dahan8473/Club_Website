import './Home.css'
import city from '../assets/images/city.png'
import street from '../assets/images/Street.png'
import other_street from '../assets/images/street2.png'
import hospital from '../assets/images/Hospital.png'

export default function Home() {
   return (
    <>
      {/* Insert logo here*/}
      <h1 class="kanit-medium">Welcome to TSI at Western!</h1>
      <h2 class="kanit-light">Providing technological solutions to nonprofit organizations</h2>
      <div class="graphics">
        <img class="central-graphic" style={{width: "328px", height: "400px"}} src={other_street} />
        <img class="central-graphic" style={{width: "400px", height: "400px"}} src={hospital} />
        <img class="central-graphic" style={{width: "400px", height: "400px"}} src={city} />
        <img class="central-graphic" style={{width: "400px", height: "400px"}} src={street} />
      </div>
    </>
   )
}