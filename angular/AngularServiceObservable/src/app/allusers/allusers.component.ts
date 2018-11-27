import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  allUsers: any[] = new Array();

  constructor(private userService: UsersService) { }

  ngOnInit() {


    this.userService.getAllUsers().subscribe((data) => {
      this.allUsers = data;
      //debugger;
    })

    /*
        //  
        this.userService.People.subscribe((data) => {
       //   debugger;
          console.log(data);
        });
        */

  }

}
