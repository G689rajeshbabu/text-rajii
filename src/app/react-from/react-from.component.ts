import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-react-from',
  templateUrl: './react-from.component.html',
  styleUrls: ['./react-from.component.scss']
})
export class ReactFromComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name=new FormControl('');
  updateName(){
    this.name.setValue("rajeshbabu");
  }
}
