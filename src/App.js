  import React, { Component } from 'react'
  import './App.css'
  import SearchAppBar from './pages/navbar';
  
  class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        item:[],
        isLoded: false,         
        
       
      }
    }
  
    componentDidMount(){
      fetch('https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=IN')
  
      .then(res=>res.json())
      .then(json=>{
        this.setState({
          isLoded: true,
          items: json,
        })
      });
    }
  
   
    render() {
      
     var {isLoded,items} = this.state;
     
  
        if (!isLoded){
          return<div>Loading....</div>;
        }
  
      else{
      return (
        
          <div className = "App">
           
            <SearchAppBar/> 
                
          <div className="contary">  
            Corona Live Update Of India</div>
                
              <div className = "box">
                <div className="card">
                  <div className="container">
                    
                      {items.map(item=>(
                      <h3 key = {item.id}>
                      {item.totalConfirmed}
                        </h3>
                      ))}
                    TotalConfirmed
                    
                  </div>
                </div>        
                <div className="card">
                  <div className="container">
                  
                    {items.map(item=>(
                      <h3 key = {item.id}>
                    {item.totalRecovered}
                      </h3>
                      ))}
                       TotalRecovered
                  </div>
                </div>
                <div className="card">
                  <div className="container">                  
                    {items.map(item=>(
                      <h3 key = {item.id}>
                  
                        {item.totalDeaths}
                      </h3>
                      ))}
                          TotalDeaths
                  </div>
                </div>
             
            
          


             
                  <div className="card">
                    <div className="container">
                    
                      {items.map(item=>(
                        <h3 key = {item.id}>
                      {item.dailyConfirmed}
                        </h3>
                      ))}
                       dailyConfirmed 

                        
                    </div>
                  </div>        
                  <div className="card">
                    <div className="container">
                      {items.map(item=>(
                        <h3 key = {item.id}>
                        {item.activeCases}
                        </h3>
                        ))}
                      activeCases
                    </div>
                  </div>
                  <div className="card">
                    <div className="container">
                    
                      {items.map(item=>(
                        <h3 key = {item.id}>                     
                          {item.dailyDeaths}
                        </h3>
                        ))}
                         dailyDeaths
                    </div>
                  </div>
                </div>
                <a className="update"> {items.map(item=>(
                      <p key = {item.id}>
                      {item.lastUpdated}
                        </p>
                      ))}</a>


          </div>
          
      )
      }
    }
  }
 
  
  
 

export default App;
