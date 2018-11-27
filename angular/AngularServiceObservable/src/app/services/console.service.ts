import { Injectable } from '@angular/core';

 
export class ConsoleService {

  myIndex: number = 0;
  myResult: number = 0;

  constructor() {
  }

  writeStuffInConsole(msg: string): void {
    this.myIndex++;
    console.log(msg + " " + this.myIndex);
  }

  calcResult(): number {
    return this.myResult
  }


  sendNum(a: number): void {
    this.myResult = this.myResult + a;  
  }


}







 /*


 
    let b: Bank = Bank.getInstance();
    let b2: Bank = Bank.getInstance();
    let b3: Bank = Bank.getInstance(); 

class Bank {
  static myTitle: string = "bank leumi";
  private static myInstance: Bank = null;

  balance: number;

  private constructor() {

  }


  public static getInstance(): Bank {
    if (this.myInstance == null) {
      this.myInstance = new Bank();
    }

    return this.myInstance;

  }
}


*/



