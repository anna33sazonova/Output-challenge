import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-child',
  templateUrl: './form-child.component.html',
  styleUrls: ['./form-child.component.css']
})
export class FormChildComponent implements OnInit {

  public newOnomatopia: string = "";

  @Output() sendOnomatopiaToParent:EventEmitter<string> = new EventEmitter<string>(); 
  
  constructor() { }

  ngOnInit(): void {
  }

  createOnomatopia() {

    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }

}
