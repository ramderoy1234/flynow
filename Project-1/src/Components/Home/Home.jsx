import React from "react";
import './Home.scss'


import {MdOutlineFlightTakeoff} from 'react-icons/md'



const Home=()=>{
    return (

        <div>

        <div>
            <h1 className="hero"><MdOutlineFlightTakeoff className="flight"/>Here Some Famous Places</h1>
        </div>


    <div class="row">
  <div class="column">
    <div class="card">
      <h3>Lucknow</h3>
      <img src="./public/images/city.jpg"></img>
      <p>Charansing Chowdary Airport</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Hyderabad</h3>
      <img src="./public/images/night.jpg"></img>
      <p>Rajugandhi Airport</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Bhopal</h3>
      <img src="./public/images/city.jpg"></img>
      <p>Bhopal Fly Station</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Pune</h3>
      <img src="./public/images/houses.jpg"></img>
      <p>Charansing Airport</p>
    </div>
  </div>
</div>


{/* --------------------------------------------- */}


<div class="row">
  <div class="column">
    <div class="card">
      <h3>Khammam</h3>
      <img src="./public/images/night.jpg"></img>
      <p>Mamatha Airport</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Vijayawada</h3>
      <img src="./public/images/city.jpg"></img>
      <p>Restcity Airport</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Kurnool</h3>
      <img src="./public/images/houses.jpg"></img>
      <p>Kurnool Port</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Kadapa</h3>
      <img src="./public/images/airport.jpg"></img>
      <p>Kadapa Aiport</p>
    </div>
  </div>
</div>


{/* ----------------------------------- */}


<div class="row">
  <div class="column">
    <div class="card">
      <h3>Goa</h3>
      <img src="./public/images/city.jpg"></img>
      <p>Panaji Airport</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Gujarat</h3>
      <img src="./public/images/night.jpg"></img>
      <p>Surat Airport</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Mumbai</h3>
      <img src="./public/images/houses.jpg"></img>
      <p>High Aport</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Bhadrachalam</h3>
      <img src="./public/images/night.jpg"></img>
      <p>Bhadrachalam Road</p>
    </div>
  </div>
</div>

{/* ---------------------------------------------------- */}






{/* ----------------- images ------------ */}









        </div>

    )
}

export default Home;

