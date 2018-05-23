import { SkillzGraphSettings } from './skillz-graph/models/skillz-graph-settings';
import { Skill } from './skillz-graph/models/skill';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public graphSettings: SkillzGraphSettings;
  private skillz: Skill[];

  ngOnInit() {
    this.skillz = new Array<Skill>();
    // tslint:disable-next-line:max-line-length
    this.skillz.push({label: 'HTML', colour: 'red', occurences: [2005, 2006, 2009, 2010, 2011]});
    // tslint:disable-next-line:max-line-length
    this.skillz.push({label: 'JavaScript', colour: 'yellow', occurences: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]});

    this.graphSettings = {
      startYear: 2005,
      endYear: 2018,
      width: '400px',
      skillz: this.skillz,
      baseHeight: 11,
      fontColour: 'black'
    };
  }
}
