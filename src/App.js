import axios from 'axios';
import React from 'react';
import {Component} from "react";
import logo from './img/pionner_logo.jpg';
import person from './img/the_expanding_circle.png';
import Pionner from './Pionner';



class App extends Component {

state={}

componentDidMount(){
setTimeout(() => {
  this._getNews();

},4000);


}

_renderMain= () => {
const articles = this.state.articles.map((article, index) => {
  if(index < 15){
    return <Pionner title={article.title} url={article.url} name={article.source.name} key={index} />
  } else{
  };
});



return articles
}

_getNews = async () =>{
  try{
    const {
      data:{articles}
    } = await axios.get('/news');
    this.setState({articles})
  } catch(error){
     console.log(error)
  }
}


_loading = () =>{
return (
  <div className="loading">
    <div className="circleBox">
      <img src={person} alt="loadingImage" className="loadingCircle" />
    </div>
  </div>
)
}

_handling = (event) => {
const titles=document.querySelectorAll('.block>p');
  const currentValue = event.target.value;
  console.log(titles);
  console.log(currentValue);
if(currentValue < 50 && currentValue > 30){
  titles.forEach(function (e){
    e.classList.replace('Chosun.com','hideLeft1');
  });
  titles.forEach(function(e){
      e.classList.replace('hideLeft2','Donga.com')
  });
  titles.forEach(function(e){
    e.classList.replace('hideLeft2','Sportschosun.com')
  });
  titles.forEach(function(e){
    e.classList.replace('hideLeft2','Mk.co.kr')
  });
} else if(currentValue <= 30 && currentValue >= 0){
  titles.forEach(function(e){
    e.classList.replace('Donga.com','hideLeft2')
  });
  titles.forEach(function(e){
    e.classList.replace('Sportschosun.com','hideLeft2')
  });
  titles.forEach(function(e){
    e.classList.replace('Mk.co.kr','hideLeft2')
  });
} else if(currentValue === 50){
  titles.forEach(function(e){
    e.classList.replace('hideLeft1','Chosun.com')
  });
  titles.forEach(function(e){
    e.classList.replace('hideRight1','Huffingtonpost.kr')
  })
} else if(currentValue > 50 && currentValue < 80){
  titles.forEach(function(e){
    e.classList.replace('Huffingtonpost.kr','hideRight1')
  });
  titles.forEach(function (e){
    e.classList.replace('hideRight2','Hani.co.kr')
  });
  titles.forEach(function (e){
    e.classList.replace('hideRight2','Sbs.co.kr')
  });
  titles.forEach(function (e){
    e.classList.replace('hideRight2','Mediatoday.co.kr')
  });
} else if(currentValue >= 80 && currentValue <= 100 ){
  titles.forEach(function(e){
    e.classList.replace('Hani.co.kr','hideRight2')
  });
  titles.forEach(function(e){
    e.classList.replace('Sbs.co.kr','hideRight2')
  });
  titles.forEach(function(e){
    e.classList.replace('Mediatoday.co.kr','hideRight2')
  });
}
}


render(){
  return (
    <div className="App">
          <div className="Pionner">
          <header>
              <div className="headerWrap">
              <div className="headerLeft">
                  <a href="#" className="title">
                  <h1><img src={logo} alt="pionner logo"/></h1>
                  </a>
              </div>{/* headerLeft */}
              <div className="headerRight">
                  <div className="toggle">
                  <form>
                      <input type="range" className="switch" onChange={this._handling}>
                      
                      </input>
                  </form>
                  </div>    
              </div>{/* headerRight */}
              </div>{/* headerWrap */}
          </header>
          <div className="mainVisual">
              <ul>
              {this.state.articles ? this._renderMain() : this._loading()}
              </ul>
          </div>
          <div className="copyright">
            <a href="https://github.com/babyazalea/pionnerApp">prod. babyazalea</a>
            <a href="https://www.instagram.com/sophieharristaylor/?hl=ko">Illustration inspiration Sophie Harris Taylor</a>
            <a href="https://newsapi.org/">Thanks to News API</a>
          </div>
      </div>
      </div>
  );
 }
}


export default App;
