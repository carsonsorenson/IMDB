export class PersonCredits {
    constructor(id, image, title, releaseDate, characterName) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.releaseDate = releaseDate;
        this.characterName = characterName;
    }

    getId() {
        return this.id;
    }

    getImage() {
        return "https://image.tmdb.org/t/p/w500" + this.image;
    }

    getTitle() {
        return this.title;
    }

    getYear() {
        if (!this.releaseDate) {
            return 'n/a';
        }
        return this.releaseDate.slice(0, 4);
    }

    getCharacterName() {
        return this.characterName;
    }
}