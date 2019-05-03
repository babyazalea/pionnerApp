import React, { Component } from 'react';
import './Pionner.css';
import propTypes from 'prop-types';
import { __generator } from 'tslib';




function Pionner ({title, url, name}){
    return(
        
        
  
                <li>
                    <a href={url} className="block">
                        <p className={name}>{title}</p>
                    </a>
                </li>
            

       
    )//retrun
}//Pionner


/*
class Pionner extends Component {
     render(){
         console.log(this.props)
         return(
  
                 <li>
                     <a href={this.props.url} className="block">
                         <p>{this.props.title}</p>
                     </a>
                 </li>
            

         )
     }
 }
*/

Pionner.propTypes={
    title:propTypes.string.isRequired,
    url:propTypes.string.isRequired,
    name:propTypes.string.isRequired
}

export default Pionner;