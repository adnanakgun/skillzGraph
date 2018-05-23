import { SkillzGraphSettings } from './models/skillz-graph-settings';
import { Component, OnChanges, Input, ViewChild, OnInit } from '@angular/core';
import { saveSvgAsPng } from 'save-svg-as-png';

@Component({
  selector: 'app-skillz-graph',
  templateUrl: './skillz-graph.component.html',
  styleUrls: ['./skillz-graph.component.scss']
})
export class SkillzGraphComponent implements OnChanges, OnInit {

  @Input() settings: SkillzGraphSettings;
  @ViewChild('skillzgraph') rootEl;
  @ViewChild('righttxt') rightTxt;

  public localSettings: SkillzGraphSettings;
  public rightTxtPos: number;
  public years: number[];
  public boxWidth: number;
  public compWidth: number;
  public barHeight: number;
  public compHeight: string;

  constructor() {
    this.localSettings = new SkillzGraphSettings;
    this.years = [];
  }

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    this.init();
  }

  init() {
    this.localSettings = new SkillzGraphSettings;
    this.barHeight = 15;

    for (const key in this.settings) {
      if (this.settings.hasOwnProperty(key)) {
        this.localSettings[key] = this.settings[key];
      }
    }

    setTimeout(() => {
      this.compWidth = this.rootEl.nativeElement.clientWidth;
      this.rightTxtPos = this.compWidth - this.rightTxt.nativeElement.clientWidth || 0;

      for (let i = this.localSettings.startYear; i < this.localSettings.endYear; i++) {
        this.years.push(i);
      }

      this.boxWidth = this.compWidth / (this.localSettings.endYear - this.localSettings.startYear);
      this.compHeight = (2 * this.localSettings.baseHeight + 10)
                        + (this.localSettings.skillz.length * (this.localSettings.baseHeight + 30)) + 'px';
    }, 300);
  }

  public save() {
    saveSvgAsPng(this.rootEl.nativeElement, 'skillzGraph.png');
  }

  public getBoxColour(year, skillOccurences, skillColour) {
    return skillOccurences.indexOf(year) > -1 ? skillColour : 'transparent';
  }


}
