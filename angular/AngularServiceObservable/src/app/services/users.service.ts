import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {

    //http.get- returns an observable
    //observable does not start unless you subscribe to it
    
    let myGetObservable: Observable<any> = this.http.get("https://jsonplaceholder.typicode.com/users");

    return myGetObservable;
  }



  /*
   
    person1:string="sima";
    person2:string="avi";
  
   
  
  public People:Observable<any>= new Observable(observer=>
   
    {
      setTimeout(()=>
      {
        if(this.person1 ==null )
        {
          observer.error(" error in data ");
        }
        else{
          observer.next({name: this.person1 } );
        } 
  
      }  , 1000 );
  
   
  
      setTimeout(()=>
      {
        if(this.person2 ==null )
        {
          observer.error(" error in data ");
        }
        else{
          observer.next( {name: this.person2} );
        } 
  
      }, 2000 ); 
   
  
      setTimeout(()=>
      {
        observer.complete(); 
      }, 3000 );
   
    });
   
    */

}
