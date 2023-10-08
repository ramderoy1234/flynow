import React from "react";
import './Navbar.scss'
// import type { NavbarProps } from "@material-tailwind/react";
import {MdTravelExplore} from 'react-icons/md'








const Navbar=()=>{

  




    return (
        <section className="NavbarSection">
            <header className="header flex">
                <div className="logodiv">
                    <a href="#" className="logo">
                        <h1><MdTravelExplore className="icon"/>Travel.</h1>
                    </a>
                </div>

                <div className="Navbar">
                <ul>
                   <li> <a href="#" >Home</a></li>
                   <li> <a href="#" >Shop</a></li>
                   <li> <a href="#" >About</a></li>
                   <li> <a href="#" >Pages</a></li>
                   <li> <a href="#" >News</a></li>
                   <li> <a href="#">Contact-us</a></li>
                 </ul>
                </div>


          <div className="typing">
         <h2 className="text-uppercase">FlywithUs...</h2>
        </div>
        
        <div class="padding">
        <div class="">  <button class="btn" >Book Now </button> </div>
        </div>
  
            </header>
        </section>
    )
}

export default Navbar;


