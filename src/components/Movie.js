import React, { Component } from 'react';
import "../css/Movie.css";

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,
            name: this.props.name,
            rating: 0,
            trialRating: 0
        }
    }

    hoverStar = (x) => {
        this.setState({trialRating: x})
    }

    blurStar = () => {
        this.setState({trialRating: this.state.rating})
    }

    setRating = (x) => {
        this.setState({rating: x})
    }

    render() {
        var stars = [];
        for (let i=0; i<5; i++) {
            stars.push(<div key={i} onClick={() => {this.setRating(i+1)}} onMouseOut={this.blurStar} onMouseOver={() => {this.hoverStar(i+1)}} style={{backgroundImage: "url('./gfx/"+(i>=this.state.trialRating?"empty_":"")+"star.png')"}} className="star"></div>)
        }
        return (
            <div className="movie">
                <div className="nameContainer">
                    <h1>{this.state.name}</h1>
                </div>
                <div className="imgContainer">
                    <img className="previewImg" src={this.state.image} />
                </div>
                <div className="starContainer">
                    {stars}
                </div>
            </div>
        );
    }
}

export default Movie;