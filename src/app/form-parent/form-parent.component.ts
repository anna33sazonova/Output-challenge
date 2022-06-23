import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-parent',
  templateUrl: './form-parent.component.html',
  styleUrls: ['./form-parent.component.css']
})
export class FormParentComponent implements OnInit {
  
  public onomatopoeias: string[] = [];


  onReceiveNewOnomatopia(newOnomatopia: string) : void {
    console.log(newOnomatopia);
    this.onomatopoeias.push(newOnomatopia)

  };


  constructor() { }

  ngOnInit(): void {
  }

}
