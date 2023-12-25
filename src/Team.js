export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        this.members.add(character);
    }

    *[Symbol.iterator]() {
        for (let member of this.members) {
            yield member;
        }
    }
}
