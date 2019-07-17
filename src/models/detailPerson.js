export class DetailPerson {
    constructor(id, name, popularity, image, birthDate, deathDate, placeOfBirth, biography) {
        this.id = id;
        this.name = name;
        this.popularity = popularity;
        this.image = image;
        this.birthDate = birthDate;
        this.deathDate = deathDate;
        this.placeOfBirth = placeOfBirth;
        this.biography = biography;
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
        return "https://image.tmdb.org/t/p/w500" + this.image;
    }

    getBirthDate() {
        if (this.birthDate) {
            var month = this.birthDate.slice(5, 7);
            var day = this.birthDate.slice(8, 10);
            var year = this.birthDate.slice(0, 4);
            return `${month}/${day}/${year}`;
        }
        return "n/a"
    }

    getDeathDate() {
        if (this.deathDate) {
            var month = this.deathDate.slice(5, 7);
            var day = this.deathDate.slice(8, 10);
            var year = this.deathDate.slice(0, 4);
            return `${month}/${day}/${year}`;
        }
        return this.deathDate
    }

    getPlaceOfBirth() {
        if (!this.placeOfBirth) {
            return 'n/a';
        }
        return this.placeOfBirth;
    }

    getBiography() {
        if (!this.biography) {
            return "Couldn't find biography"
        }
        return this.biography;
    }
}