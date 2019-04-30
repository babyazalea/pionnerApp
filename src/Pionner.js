import React, { Component } from 'react';
import logo from './img/pionner_logo.jpg';
import './Pionner.css';

class Pionner extends Component {
    render(){
        return(
        <div className="Pionner">
            <header>
                <div className="headerWrap">
                <div className="headerLeft">
                    <a href="#" className="title">
                    <h1><img src={logo} alt="pionner logo"></img></h1>
                    </a>
                </div>{/* headerLeft */}
                <div className="headerRight">
                    <div className="toggle">
                    <form>
                        <input type="range"></input>
                    </form>
                    </div>    
                </div>{/* headerRight */}
                </div>{/* headerWrap */}
            </header>
            <div className="mainVisual">
                <ul>
                <li><a href="#" className="block1 block"></a></li>
                <li><a href="#" className="block2 block"></a></li>
                <li><a href="#" className="block3 block"></a></li>
                <li><a href="#" className="block4 block"></a></li>
                <li><a href="#" className="block5 block"></a></li>
                <li><a href="#" className="block6 block"></a></li>
                <li><a href="#" className="block7 block"></a></li>
                <li><a href="#" className="block8 block"></a></li>
                <li><a href="#" className="block9 block"></a></li>
                <li><a href="#" className="block10 block"></a></li>
                <li><a href="#" className="block11 block"></a></li>
                <li><a href="#" className="block12 block"></a></li>
                <li><a href="#" className="block13 block"></a></li>
                <li><a href="#" className="block14 block"></a></li>
                <li><a href="#" className="block15 block"></a></li>
                </ul>
            </div>
        </div>
        )//return
    }//Component
}//Pionner

export default Pionner;