export class DetailMovie {
    constructor(id, poster, backdrop, title, popularity, releaseDate, overview, genres, budget, revenue, status) {
        this.id = id;
        this.poster = poster;
        this.backdrop = backdrop;
        this.title = title;
        this.popularity = popularity;
        this.releaseDate = releaseDate;
        this.overview = overview;
        this.genres = genres;
        this.budget = budget;
        this.revenue = revenue;
        this.status = status;
    }

    //thanks stackoverflow: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    withCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    getId() {
        return this.id;
    }

    getPoster() {
        return "https://image.tmdb.org/t/p/w500" + this.poster;
    }

    getBackdrop() {
        return "https://image.tmdb.org/t/p/w500" + this.backdrop;
    }

    getTitle() {
        return this.title;
    }

    getPopularity() {
        return this.popularity;
    }

    getReleaseDate() {
        if (this.releaseDate) {
            var month = this.releaseDate.slice(5, 7);
            var day = this.releaseDate.slice(8, 10);
            var year = this.releaseDate.slice(0, 4);
            return `${month}/${day}/${year}`;
        }
        return this.releaseDate;
    }

    getOverview() {
        return this.overview;
    }

    getGenres() {
        return this.genres.join(", ");
    }

    getBudget() {
        return "$" + this.withCommas(this.budget);
    }

    getRevenue() {
        return "$" + this.withCommas(this.revenue);
    }

    getStatus() {
        return this.status;
    }
}