let ApiService = class ApiService {
    constructor() {
        this.apiProtocol = 'https:';
        this.apiHost = 'api.themoviedb.org/3/'
        this.apikey = 'db36659c02732aa630bb57db4694c4bc'
        this.adult = 'include_adult=false'
    }

    get apiLocation() {
        return `${this.apiProtocol}//${this.apiHost}`;
    }

    get apiKey() {
        return `api_key=${this.apikey}`
    }

    search(type, query, page) {
        let formattedQuery = query.split(' ').join('%20');
        let request = `${this.apiLocation}search/${type}?${this.apiKey}&language=en-US&query=${formattedQuery}&page=${page}&${this.adult}`
        return request;
    }

    getMovieGenres() {
        let request = `${this.apiLocation}genre/movie/list?${this.apiKey}`;
        return request;
    }

    browse(id, page) {
        let request = `${this.apiLocation}discover/movie?${this.apiKey}&language=en-US&sort_by=popularity.desc&${this.adult}&include_video=false&page=${page}&with_genres=${id}`
        return request;
    }

    getDetail(type, id) {
        let request = `${this.apiLocation}${type}/${id}?${this.apiKey}&language=en-US`;
        return request;
    }

    getActors(id) {
        let request = `${this.apiLocation}movie/${id}/credits?${this.apiKey}`;
        return request;
    }

    getPersonCredits(id) {
        let request = `${this.apiLocation}person/${id}/movie_credits?${this.apiKey}&language=en-US`;
        return request;
    }
}

const apiService = new ApiService();
export default apiService;