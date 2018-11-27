import { ConsoleService } from './../services/console.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'] 
})
export class Comp1Component implements OnInit {

  constructor(private myTitleService:Title , private myConsoleSer:ConsoleService     ) { }

  ngOnInit() {

    
  }

  change1()
  {
    this.myTitleService.setTitle("change 1");
    this.myConsoleSer.writeStuffInConsole("change 1");
    this.myConsoleSer.sendNum(5);
  }

}
