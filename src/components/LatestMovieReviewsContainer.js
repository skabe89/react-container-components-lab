import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

  state = {
    movies: []
  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({ 
      movies: data.results
      })
    )
  }

  render(){
    console.log(this.state.movies)
    return(
      <div class="latest-movie-reviews">
          { this.state.movies.map(movie => <MovieReviews index={ this.state.movies.indexOf(movie) } title={ movie.display_title } headline={ movie.headline } imageSource={ movie.multimedia.src }/>) }
      </div>
    )
  }


}

export default LatestMovieReviewsContainer
