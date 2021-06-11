import UrlParser from '../../routes/url-parser'
import TheMovieDbSource from '../../data/themoviedb-source'
import { createMovieDetailTemplate } from '../templates/template-creator'

const Detail = {
  async render () {
    return `
      <div id="movie" class="movie"></div>
    `
  },
  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const movies = await TheMovieDbSource.detailMovie(url.id)
    const moviesContainer = document.querySelector('#movies')
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieDetailTemplate(movie)
    })
  }
}
export default Detail
