import { Skill } from './../models/skill';
import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnChanges {

  @Input() settings: Skill;
  public localSettings: Skill;

  constructor() {
    this.localSettings = new Skill;
  }

  ngOnChanges() {
    this.localSettings = this.settings ||  new Skill;
  }

}
