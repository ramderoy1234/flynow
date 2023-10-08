import React from "react";
import './Main.scss';

const Main = () => {
    return (
        <div>
            <section class="login">
                <h2>Register Here</h2>
                
                <div className="form">
                    <input type="text" placeholder="Name" /> Name<br/>
                    <input type="password" placeholder="Password" />Password<br/>
                    <input type="password" placeholder="Confirm Password" />Confirm<br/>
                    <input type="email" placeholder="Email" />Emali<br/>
                    <input type="date" placeholder="Date" />Date<br/>
                    <input type="text" placeholder="Image URL" />Image URL<br/>
                    <input type="file" />DOB Image<br/>
                    <input type="time" placeholder="Time" />Time<br/>
                    <input type="submit" />Submit<br/>
                    
                </div>
            </section>
        </div>
    );
}

export default Main;
