import { SkillzGraphSettings } from './models/skillz-graph-settings';
import { Component, OnChanges, Input, ViewChild } from '@angular/core';
import { saveSvgAsPng } from 'save-svg-as-png';

@Component({
  selector: 'app-skillz-graph',
  templateUrl: './skillz-graph.component.html',
  styleUrls: ['./skillz-graph.component.scss']
})
export class SkillzGraphComponent implements OnChanges {

  @Input() settings: SkillzGraphSettings;
  @ViewChild('skillzgraph') rootEl;
  @ViewChild('righttxt') rightTxt;

  public localSettings: SkillzGraphSettings;
  public rightTxtPos: number;

  constructor() {
    this.localSettings = new SkillzGraphSettings;
  }

  ngOnChanges() {
    this.localSettings = this.settings ||  new SkillzGraphSettings;
    setTimeout(() => {
      this.rightTxtPos = this.rootEl.nativeElement.clientWidth - this.rightTxt.nativeElement.clientWidth || 0;
    }, 300);
  }

  public save() {
    saveSvgAsPng(this.rootEl.nativeElement, 'skillzGraph.png');
  }

}
