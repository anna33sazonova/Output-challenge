import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/common/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
   @Input() skill: Skill = new Skill (
      "PHP",
      "image", 
      "mysite.com",
    )
  constructor() { }

  ngOnInit(): void {
  }

}
