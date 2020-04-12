  import React, { Component } from 'react'
  import './App.css'
  
  
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

            <div className = "box">
              <div className="card">
                <div className="container">
                  
                    {items.map(item=>(
                     <h3 key = {item.id}>
                      totalConfirmed<br/>{item.totalConfirmed}
                      </h3>
                    ))}
                  
                </div>
              </div>        
              <div className="card">
                <div className="container">
                  
                    {items.map(item=>(
                     <h3 key = {item.id}>
                      totalRecovered <br/>
                    {item.totalRecovered}
                      </h3>
                      ))}
                    
                  </div>
                </div>
                <div className="card">
                <div className="container">
                  
                    {items.map(item=>(
                      <h3 key = {item.id}>
                        totalDeaths<br/>{item.totalDeaths}
                      </h3>
                      ))}
                    
                  </div>
                </div>
            </div>
        

          </div>
          
      )
      }
    }
  }
 
  
  
 

export default App;
