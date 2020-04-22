import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor() {
    super();

    this.state = {

    };
    
  }

  render(){
      return (
          <div className='App pt-4'>  
              <h1 className="d-flex justify-content-center">Revision Flashcards</h1>

              <div className="container mt-3 d-flex justify-content-around">
                <div className="card" style={{width: 18 + 'rem'}}>
                  <img src="chemistry.png" className="card-img-top py-4 px-3" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Chemistry</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-primary">See cards</button>
                  </div>
                </div>

                <div className="card" style={{width: 18 + 'rem'}}>
                  <img src="calculus.png" className="card-img-top py-4 px-3" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Math</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-primary">See cards</button>
                  </div>
                </div>

                <div className="card" style={{width: 18 + 'rem'}}>
                  <img src="world.png" className="card-img-top py-4 px-3" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Geography</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-primary">See cards</button>
                  </div>
                </div>
              </div>
          </div>
      );
  }
}

export default App;