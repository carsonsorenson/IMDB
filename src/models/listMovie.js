export class ListMovie {
    constructor(id, posterImage, title, popularity, releaseDate, overview) {
        this.id = id;
        this.posterImage = posterImage;
        this.title = title;
        this.popularity = popularity;
        this.releaseDate = releaseDate;
        this.overview = overview;
    }

    getId() {
        return this.id;
    }

    getImage() {
        return "https://image.tmdb.org/t/p/w500" + this.posterImage;
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
        return 'n/a';
    }

    getOverview() {
        return this.overview;
    }
}