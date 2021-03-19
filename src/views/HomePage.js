import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class HomePage extends Component {
    state= {
  films: [],
  }

  componentDidMount() {
      this.fetchFilms()
      }
    

  fetchFilms = () => {
      axios.get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=73aee633aaf5c834566a91020ffc342e')
        .then(response => {
          console.log(response.data.results)
          this.setState({films: [...response.data.results]})
                  })
       
    }
    
    render() {
        return (
        <>
              <h1>Страница Home</h1>
             {this.state.films.length>0 && <ul>
            {this.state.films.map((film) => (
            <li key={film.id}>
            <Link to={`${this.props.match.url}${film.id}`}>{film.title} {film.name}</Link>
             </li>))}
                </ul>} 
         </>
        );

    }
   
};

export default HomePage