export class ListPerson {
    constructor(id, name, popularity, imgPath) {
        this.id = id;
        this.name = name;
        this.popularity = popularity;
        this.imgPath = imgPath;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getPopularity() {
        return this.popularity;
    }

    getImage() {
        return "https://image.tmdb.org/t/p/w500" + this.imgPath;
    }
}