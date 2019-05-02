import React, { Component } from 'react';
import './Pionner.css';
import PropTypes from 'prop-types';

    
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
export default Pionner;