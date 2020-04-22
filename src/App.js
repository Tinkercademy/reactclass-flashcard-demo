import React, { Component } from 'react';
import './App.css';
import Flashcards from './Flashcards';

class App extends Component{
  constructor() {
    super();

    this.state = {
      viewingCard: false,
      subject: "",
      chemistry: [{image: "ionic.png", topic: "Ionic compound", question: "Describe what is an ionic compound.", description: "An ionic compound is a giant structure of ions. The ions have a regular, repeating arrangement called an ionic lattice."}, 
      {image: "metallic.jpg", topic: "Metallic bonding", question: "Describe what is a metallic structure.", description: "A metallic structure is held together by the strong forces of attraction between the delocalised electrons and the positive ions." }],
      math: [{image: "straightline.jpg", topic: "Equation of a straight line", question: "What is the equation of a straight line?", description: "The equation of a straight line is y = mx + c"}, 
      {image: "trigonometry.svg", topic: "Trigonometry", question: "What are the 3 formulas for calculating sinθ,cosθ and tanθ?", description: "sinθ = opp/hyp, cosθ = adj/hyp, tanθ = opp/adj"}],
      geography: [{image: "oxbow.jpg", topic: "Oxbow lake", question: "What is an oxbow lake?", description: "An oxbow lake is a U-shaped lake that forms when a wide meander of a river is cut off, creating a free-standing body of water."}, 
      {image: "waterfall.png", topic: "Waterfalls", question: "How do waterfalls form?", description: "Waterfalls often form in the upper stages of a river where it flows over different bands of rock. It erodes soft rock more quickly than hard rock and this may lead to the creation of a waterfall."}],
    };
    this.viewCards = this.viewCards.bind(this);
    this.back = this.back.bind(this);
  }

  viewCards(subject) {
    this.setState({
      viewingCard: true,
      subject: subject,
    })
  }

  back(){
    this.setState({
      viewingCard: false,
    })
  }

  renderSubjects(){
    return (
      <div>
        <h1 className="d-flex justify-content-center">Revision Flashcards</h1>

        <div className="container mt-3 d-flex justify-content-around">
          <div className="card" style={{width: 18 + 'rem'}}>
            <img src="chemistry.png" className="card-img-top py-4 px-3" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Chemistry</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button onClick={() => this.viewCards("chemistry")} className="btn btn-primary">See cards</button>
            </div>
          </div>

          <div className="card" style={{width: 18 + 'rem'}}>
            <img src="calculus.png" className="card-img-top py-4 px-3" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Math</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button onClick={() => this.viewCards("math")} className="btn btn-primary">See cards</button>
            </div>
          </div>

          <div className="card" style={{width: 18 + 'rem'}}>
            <img src="world.png" className="card-img-top py-4 px-3" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Geography</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button onClick={() => this.viewCards("geography")} className="btn btn-primary">See cards</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render(){
    let subjectCards
    let subject
    if(!this.state.viewingCard){
      subjectCards = this.renderSubjects() 
    }
    if(this.state.subject === "chemistry"){
      subject = this.state.chemistry
    }else if(this.state.subject === "math"){
      subject = this.state.math
    }else{
      subject = this.state.geography
    }
      return (
          <div className='App pt-4'>  
              {subjectCards}

              {this.state.viewingCard ?  
                <Flashcards
                    subject = {subject}
                    back ={this.back}
                />  
                : null  
              }
          </div>
      );
  }
}

export default App;