import { Skill } from './skill';

export class SkillzGraphSettings {
    width?: string;
    skillz?: Skill[];
    startYear?: number;
    endYear?: number;
    baseHeight?: number;
    fontColour?: string;

    constructor() {
        this.width = '100%';
        this.skillz = [];
        this.skillz.push(new Skill);
        this.startYear = 2005;
        this.endYear = 2010;
        this.baseHeight = 11;
        this.fontColour = 'blue';
    }
}
