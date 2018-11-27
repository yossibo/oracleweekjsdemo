import { ConsoleService } from './../services/console.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private titleService: Title, private myservice:ConsoleService) {  
  }

  ngOnInit() {
  }

  
  change2()
  {
    this.titleService.setTitle("chnage 2!");
    this.myservice.writeStuffInConsole("chnage 2");
    console.log("result is "+this.myservice.calcResult());
  }
}
