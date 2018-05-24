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
    this.skillz.push({label: 'CSS/CSS3', labelColour: 'rgb(128, 128, 128)', colour: 'rgb(0, 112, 198)', occurences: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]});
    // tslint:disable-next-line:max-line-length
    this.skillz.push({label: 'HTML/HTML5', labelColour: 'rgb(128, 128, 128)', colour: 'rgb(0, 112, 198)', occurences: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]});
    // tslint:disable-next-line:max-line-length
    this.skillz.push({label: 'Native JavaScript', labelColour: 'rgb(128, 128, 128)', colour: 'rgb(0, 112, 198)', occurences: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]});
    // tslint:disable-next-line:max-line-length
    this.skillz.push({label: 'Angular 2-5/TypeScript', labelColour: 'rgb(128, 128, 128)', colour: 'rgb(0, 112, 198)', occurences: [2017, 2018]});
    // tslint:disable-next-line:max-line-length
    this.skillz.push({label: 'AngularJS', labelColour: 'rgb(128, 128, 128)', colour: 'rgb(0, 112, 198)', occurences: [2014, 2015, 2016]});
    // tslint:disable-next-line:max-line-length
    this.skillz.push({label: 'JSON', labelColour: 'rgb(128, 128, 128)', colour: 'rgb(0, 112, 198)', occurences: [2013, 2014, 2015, 2016, 2017, 2018]});
    // tslint:disable-next-line:max-line-length
    this.skillz.push({label: 'jQuery', labelColour: 'rgb(128, 128, 128)', colour: 'rgb(0, 112, 198)', occurences: [2011, 2012, 2013, 2014, 2016]});
    // tslint:disable-next-line:max-line-length
    this.skillz.push({label: 'LESS/SASS', labelColour: 'rgb(128, 128, 128)', colour: 'rgb(0, 112, 198)', occurences: [2013, 2014, 2015, 2016, 2017, 2018]});
    // tslint:disable-next-line:max-line-length
    this.skillz.push({label: 'XML/XSLT', labelColour: 'rgb(128, 128, 128)', colour: 'rgb(0, 112, 198)', occurences: [2005, 2006, 2007, 2008, 2009, 2010, 2011]});
    
    this.graphSettings = {
      startYear: 2005,
      endYear: 2018,
      width: '462px',
      skillz: this.skillz,
      baseHeight: 11,
      fontColour: '#000000'
    };
  }
}
