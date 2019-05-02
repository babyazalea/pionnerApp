import React, { Component } from 'react';
import './Pionner.css';
import propTypes from 'prop-types';

    
function Pionner ({title, url}){
    return(
        
        
  
                <li>
                    <a href={url} className="block">
                        <p>{title}</p>
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
    url:propTypes.string.isRequired
}

export default Pionner;