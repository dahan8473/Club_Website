import "./Home.css";
import logo from "../assets/images/TSI_Logo.svg";

export default function Home() {
  return (
    <>
      {/* Insert logo here*/}

      <div class="frombottom">
        <img
          class="center"
          style={{ width: "300px", height: "300px" }}
          src={logo}
        />
        <h1 class="kanit-medium">Welcome to TSI at Western!</h1>
        <h2 class="kanit-light">
          Providing technological solutions to nonprofit organizations
        </h2>
      </div>

      {/*<div class="graphics animated-element" >
        <img class="central-graphic" style={{width: "328px", height: "400px"}} src={other_street} />
        <img class="central-graphic" style={{width: "400px", height: "400px"}} src={hospital} />
        <img class="central-graphic" style={{width: "400px", height: "400px"}} src={city} />
        <img class="central-graphic" style={{width: "400px", height: "400px"}} src={street} />
      </div>*/}
    </>
  );
}
