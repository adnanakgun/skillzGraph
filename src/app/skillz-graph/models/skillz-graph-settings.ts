import { Skill } from './skill';

export class SkillzGraphSettings {
    width: string;
    skillz: Skill[];
    startYear: number;
    endYear: number;
    fontSize: number;
    fontFamily: string;
    fontColour: string;

    constructor() {
        this.width = '100%';
        this.skillz = [];
        this.startYear = 2005;
        this.endYear = 2010;
        this.fontSize = 11;
        this.fontFamily = 'Times New Roman';
        this.fontColour = 'blue';
    }
}
