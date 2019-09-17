import { Component, OnInit } from '@angular/core';
import { MyDetailsService } from '../my-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
profileImagesUrl:string="../../assets/images/rajesh.jpeg";
public fristname;
public rajesh=[];
  constructor(private _obes:MyDetailsService) { }

  ngOnInit() {
    this.fristname=this._obes.getMyDetails().subscribe(demo=>this.rajesh=demo);
  }

}
