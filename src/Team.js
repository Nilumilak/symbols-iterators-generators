import charData from "./character.js";

export default class Team {
    constructor(size) {
        this.size = size;
    }

    [Symbol.iterator]() {
        const maxSize = this.size;
        let currentSize = 0;
        return {
            next() {
                if (currentSize++ >= maxSize) {
                    return {
                        value: undefined,
                        done: true,
                    };
                }
                return {
                    value: charData,
                    done: false,
                };
            },
        };
    }

    * [Symbol.iterator]() {
        const maxSize = this.size;
        for (let i = 0; i < maxSize; i += 1) {
            yield charData;
        }
    }
}

const team = new Team(3);
const generator = team[Symbol.iterator]();

for (const character of team) {
    console.log(character);
}

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
