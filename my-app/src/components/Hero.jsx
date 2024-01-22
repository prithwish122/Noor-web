import React from "react";
import Maow from '../components/maow.png';
import HelloMaow from '../components/HelloMaow.png';
// import HelloMaow from '../my-app/public/pictures/HelloMaow.png';

import '../components/Hero.css';
function Hero() {
    return (
        <section>
            <img  class="maow" src={Maow}/>
            <img  class="hellomaow" src={HelloMaow}/>
            <div className="typewriter">
                <span></span>
            </div>
        </section>
    )
}
export default Hero;