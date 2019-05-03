import React, { Component } from 'react';
import './App.css';
import logo from './img/pionner_logo.jpg';
import person from './img/the_expanding_circle.png';
import Pionner from './Pionner';


// _callApi = () => {
  //   fetch('https://newsapi.org/v2/top-headlines?country=kr&apiKey=30aba0364ea24b4ebce7366e8d20339d')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  //   .catch(err => console.log(err))
  // }
  
  class App extends Component {
 
  state={}
  
  componentDidMount(){
    setTimeout(() => {
      this._getArticles();

    },1000);

    
  }
  
  _renderMain= () => {
    const articles = this.state.articles.map((article, index) => {
      console.log(article);
      if(index < 15){
        return <Pionner title={article.title} url={article.url} name={article.source.name} key={index} />
      } else{
      };
    })

    const toggle=document.querySelector('.switch');
    
    toggle.oninput = handlingInput;

    function handlingInput(e){
      const currentValue = e.target.value;
      console.log(currentValue);
    }
  
    
    return articles
  }
  
  _getArticles = async () => {
    const articles = await this._callApi()
    this.setState({
      articles
    })
  }

  _callApi = () =>{
    return fetch('https://newsapi.org/v2/top-headlines?country=kr&apiKey=30aba0364ea24b4ebce7366e8d20339d')
    .then(response => response.json())
    .then(json => json.articles)
    .catch(err => console.log(err))
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
                        <input type="range" className="switch">
                        
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
        </div>
        </div>
    );
  }
}


export default App;
