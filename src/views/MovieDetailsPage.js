import React, { Component } from 'react'
import Axios from 'axios'

class MovieDetailsPage extends Component  {
    state ={
    movie: [],
    }
    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=73aee633aaf5c834566a91020ffc342e&language=en-US`);
         console.log(response)
  }
   
  

render(){
    return (<h1>Страница MovieDetailsPage</h1>);
}
    
};

export default MovieDetailsPage