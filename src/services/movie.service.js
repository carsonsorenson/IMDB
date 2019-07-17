import apiService from './api.service';
import { Genre } from '../models/genre';
import { ListMovie } from '../models/listMovie';
import { ListPerson } from '../models/listPerson';
import { DetailMovie } from '../models/detailMovie';
import { Actor } from '../models/actor';
import { DetailPerson } from '../models/detailPerson';
import { PersonCredits } from '../models/personCredits';

let MovieService = class MovieService {
    searchMovie(query, page) {
        return new Promise((resolve, reject) => {
            fetch(apiService.search('movie', query, page))
            .then((response) => response.json())
            .then((response) => {
                let items = [];
                response.results.forEach(element => {
                    items.push(new ListMovie(element.id, element.poster_path, element.title, element.popularity, element.release_date, element.overview))
                });
                resolve({totalItems: response.total_results, totalPages: response.total_pages, items});
            })
            .catch((error) => {
                console.log(error);
                resolve(error);
            });
        });
    }

    searchPerson(query, page) {
        return new Promise((resolve, reject) => {
            fetch(apiService.search('person', query, page))
            .then((response) => response.json())
            .then((response) => {
                let items = [];
                response.results.forEach(element => {
                    items.push(new ListPerson(element.id, element.name, element.popularity, element.profile_path))
                });
                resolve({totalItems: response.total_results, totalPages: response.total_pages, items});
            })
            .catch((error) => {
                console.log(error);
                resolve(error);
            });
        }); 
    }

    browseGenre(id, page) {
        return new Promise((resolve, reject) => {
            fetch(apiService.browse(id, page))
            .then((response) => response.json())
            .then((response) => {
                let items = [];
                response.results.forEach(element => {
                    items.push(new ListMovie(element.id, element.poster_path, element.title, element.popularity, element.release_date, element.overview))
                });
                resolve({totalItems: response.total_results, totalPages: response.total_pages, items});
            })
            .catch((error) => {
                console.log(error);
                resolve(error);
            });
        });
    }

    getMovieGenres() {
        return new Promise((resolve, reject) => {
            fetch(apiService.getMovieGenres())
            .then((response) => response.json())
            .then((response) => {
                let items = [];
                response.genres.forEach(element => {
                    items.push(new Genre(element.id, element.name));
                });
                resolve(items);
            })
            .catch((error) => {
                console.log(error);
                resolve(error);
            });
        }); 
    }

    getMovieDetail(id) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getDetail('movie', id))
            .then((response) => response.json())
            .then((response) => {
                let genres = []
                response.genres.forEach(element => {
                    genres.push(element.name);
                });
                let item = new DetailMovie(
                    response.id,
                    response.poster_path,
                    response.backdrop_path,
                    response.title,
                    response.popularity,
                    response.release_date,
                    response.overview,
                    genres,
                    response.budget,
                    response.revenue,
                    response.status,
                );
                resolve(item);
            })
            .catch((error) => {
                console.log(error);
                resolve(error);
            });
        });
    }

    getPersonDetail(id) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getDetail('person', id))
            .then((response) => response.json())
            .then((response) => {
                let item = new DetailPerson(
                    response.id,
                    response.name,
                    response.popularity,
                    response.profile_path,
                    response.birthday,
                    response.deathday,
                    response.place_of_birth,
                    response.biography
                );
                resolve(item);
            })
            .catch((error) => {
                console.log(error);
                resolve(error);
            });
        });
    }

    getActors(id) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getActors(id))
            .then((response) => response.json())
            .then((response) => {
                let items = []
                response.cast.forEach(element => {
                    items.push(new Actor(
                        element.id,
                        element.profile_path,
                        element.name,
                        element.character
                    ));
                });
                resolve(items);
            })
            .catch((error) => {
                console.log(error);
                resolve(error);
            });
        });
    }

    getPersonCredits(id) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getPersonCredits(id))
            .then((response) => response.json())
            .then((response) => {
                let items = []
                response.cast.forEach(element => {
                    items.push(new PersonCredits(
                        element.id,
                        element.poster_path,
                        element.title,
                        element.release_date,
                        element.character
                    ));
                });
                resolve(items);
            })
            .catch((error) => {
                console.log(error);
                resolve(error);
            });
        }); 
    }
};

const movieService = new MovieService();
export default movieService;