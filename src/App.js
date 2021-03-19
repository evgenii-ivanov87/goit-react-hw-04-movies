import React, {Component} from 'react'
import axios from 'axios'
import { Route,  Switch, NavLink } from 'react-router-dom'
import HomePage from './views/HomePage'
import MoviesPage from './views/MoviesPage'
import MovieDetailsPage from './views/MovieDetailsPage'

class App extends Component {

  state= {
  films: [],
  }

 
       
  
  
 

  hendlerClick = (e) => {
     e.preventDefault()
    console.log(e.currentTarget)
  }
  
  
  
  render() {     
    
    return (
      <>
        <ul>
          <li> <NavLink exact to="/">Home</NavLink> </li>
          <li> <NavLink to="/movies">Movies </NavLink> </li>
        </ul>
        

        <Switch>
          <Route exact path="/" component={HomePage} />
           <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
        </Switch>
        
      </>
     
  );
  }
}



export default App;

// 73aee633aaf5c834566a91020ffc342e

