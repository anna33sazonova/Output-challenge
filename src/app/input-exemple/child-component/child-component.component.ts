import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
@Input() childButtonColor: string = '';
 @Input() title: string = 'Click here';

  constructor() { }

  ngOnInit(): void {
  }

}
