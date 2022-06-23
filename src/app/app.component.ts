import { Component } from '@angular/core';
import { Directive } from '@angular/core';
import { Developer } from './common/developer.model';
import { Skill } from './common/skill.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Developer profile';
  public stringChindComponent = "Again some string";
}

@Directive ({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  constructor () { }
}