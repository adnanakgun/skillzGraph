export class Skill {
    label?: string;
    labelColour?: string;
    colour?: string;
    occurences?: number[];

    constructor() {
        this.label = 'Skill';
        this.labelColour = 'black';
        this.colour = 'blue';
        this.occurences = [2005, 2006, 2008];
    }
}
