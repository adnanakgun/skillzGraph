export class Skill {
    label: string;
    colour: string;
    startYear: number;
    endYear: number;
    occurences: number[];

    constructor() {
        this.label = 'Skill';
        this.colour = 'blue';
        this.startYear = 2005;
        this.endYear = 2010;
        this.occurences = [2005, 2006, 2008];
    }
}
