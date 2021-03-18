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
        .then(res => {
          this.setState({ films: [...res.data.results] })
          
        })
    }
  
  
  
  render() {
    
    const filmIthems = this.state.films
    console.dir(filmIthems[0])
    
    
    
    return (
      <>
      <h1>Ues</h1>

        {/* {(filmIthems.length > 0) &&
        
          < ul >
        {filmIthems.map(({id,original_title}) =>
        { <li key={id}> <p>{original_title}</p></li> })}
      </ul>} */}
      </>
     
  );
  }
}



export default App;

// 73aee633aaf5c834566a91020ffc342e
