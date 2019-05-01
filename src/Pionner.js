import React, { Component } from 'react';
import './Pionner.css';

    


class Pionner extends Component {
    render(){
        console.log(this.props)
        return(
  
                <li>
                    <a href={this.props.url} className="block1 block">
                        {this.props.title}
                    </a>
                </li>
            

        )//return
    }//Component
}//Pionner

export default Pionner;