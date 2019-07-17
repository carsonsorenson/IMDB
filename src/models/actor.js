export class Actor {
    constructor(id, image, personName, characterName) {
        this.id = id;
        this.image = image;
        this.personName = personName;
        this.characterName = characterName;
    }

    getId() {
        return this.id;
    }

    getImage() {
        return "https://image.tmdb.org/t/p/w500" + this.image;
    }

    getPersonName() {
        return this.personName;
    }

    getCharacterName() {
        return this.characterName;
    }
}