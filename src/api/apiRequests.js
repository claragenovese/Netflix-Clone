
const API_KEY = "20ee4e0b472407ed4efbeccff9aca29c"
const BASE_URL = "https://api.themoviedb.org/3"

//object who has the url requests from movies and series
const request = {
    movies:[
        {
            category: "Top 10 Popular Movies Today",
            type: "Popular",
            url: `${BASE_URL}/movie/popular?api_key=${API_KEY}`
        },
        {
            category: "Trending Now",
            type: "trending",
            url: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
        },
        {
            category: "Upcoming Movies",
            type: "upcoming",
            url: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`
        },
        {
            category: "Critically Acclaimed Films",
            type: "topRated",
            url: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
        },
        {
            category: "Documentary Films",
            type: "documentary",
            url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
        },
        {
            category: "Comedies",
            type: "comedy",
            url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
        },
        {
            category: "Action & Adventure",
            type: "action",
            url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
        },
        {
            category: "Horror Movies",
            type: "horror",
            url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
        },
        {
            category: "Romance Movies",
            type: "romance",
            url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        }
    ],

    tvShows: [
        {
            category: "Top 10 Popular Tv Shows Today",
            type: "Popular",
            url: `${BASE_URL}/tv/popular?api_key=${API_KEY}`
        },
        {
            category: "Trending Now",
            type: "trending",
            url: `${BASE_URL}/trending/tv/day?api_key=${API_KEY}`
        },
        {
            category: "Critically Acclaimed TV Shows",
            type: "topRated",
            url: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}`
        },
        {
            category: "Documentary",
            type: "documentary",
            url: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=99`
        },
        {
            category: "Comedies",
            type: "comedy",
            url: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=35`
        },
        {
            category: "Romance",
            type: "romance",
            url: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10749`
        }
    ],

    home:[]
}

export default request
