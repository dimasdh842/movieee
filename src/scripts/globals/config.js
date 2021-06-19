const CONFIG = {
  KEY: 'dbbfa260eeb7ab41ce646f18d0e6d9db',
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
  DEFAULT_LANGUAGE: 'en-us',
  DATABASE_NAME: 'movies-db',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'movies',
  WEB_SOCKET_SERVER: 'wss://stormy-badlands-06326.herokuapp.com'
}

export default CONFIG
