import { Component, OnInit } from '@angular/core';
import { Developer } from 'src/app/common/developer.model';
import { Skill } from 'src/app/common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
developer!: Developer;

  constructor() { }

  ngOnInit(): void {

    
    const skills = [new Skill("PHP", "logo", "website.com"), 
    new Skill("JavaScript", "logo2", "website2.com"), 
    new Skill("Angular", "logo3", "website3.com") ]
   
    this.developer = new Developer (
      "John",
      "Smith",
      33,
      "Male",
      "Here is my bio",
      skills
      
    )
  }

}
