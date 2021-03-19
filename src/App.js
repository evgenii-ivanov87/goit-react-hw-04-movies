import React, {Component} from 'react'
import axios from 'axios'



class App extends Component {

  state= {
  films: [],
  }

   componentDidMount() {
    this.fetchFilms()
   
  }
    

  fetchFilms = () => {
      axios.get(
        'https://api.themoviedb.org/3/trending/all/day?api_key=73aee633aaf5c834566a91020ffc342e')
        .then(response => {
          console.log(response.data.results)
          this.setState({films: [...response.data.results]})
                  })
       
    }
  
  
  
  render() {
    
    
    
    
    return (
      <>
      <h1>Ues</h1>
      {this.state.films.length>0 && <ul>
          {this.state.films.map((film) => (<li key={film.id}>
            
            {film.title} {film.name}</li>))}
        </ul>}
        
      </>
     
  );
  }
}



export default App;

// 73aee633aaf5c834566a91020ffc342e
