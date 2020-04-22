import React, { Component } from 'react';
import './App.css';

class Flashcards extends Component{
    constructor() {
        super();

        this.state = {
            cardNumber: 0,
        };
        this.nextCard = this.nextCard.bind(this);
        this.previousCard = this.previousCard.bind(this);
    }

    nextCard(){
        this.setState({
            cardNumber: this.state.cardNumber + 1,
        })
    }

    previousCard(){
        this.setState({
            cardNumber: this.state.cardNumber - 1,
        })
    }


  render(){
    let button
    if(this.state.cardNumber + 1 === this.props.subject.length){
        button = <button onClick={() => this.previousCard()} className="btn btn-primary">Previous card</button>
    }else{
        button = <button onClick={() => this.nextCard()} className="btn btn-primary">Next card</button>
    }
    return (
        <div className='App'>  
            <h1 className="d-flex justify-content-center">Revision Flashcards</h1>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 d-flex">
                        <span className="previousbtn"  onClick={() => this.props.back()}><i className="fas fa-arrow-left"></i></span>
                        <div className="ml-2 card" style={{width: 18 + 'rem'}}>
                            <img src={this.props.subject[this.state.cardNumber].image} className="card-img-top py-4 px-3" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.subject[this.state.cardNumber].topic}</h5>
                                <p className="card-text">{this.props.subject[this.state.cardNumber].description}</p>
                                {button}
                            </div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>

        </div>
    );
  }
}

export default Flashcards;