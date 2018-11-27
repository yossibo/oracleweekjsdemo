import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
 
  el: ElementRef= null;

  constructor(el: ElementRef) { 
    el.nativeElement.style.backgroundColor="yellow";
    this.el= el; 
  }


  ngOnInit(): void {
    console.log("my HTML: "+ this.el.nativeElement.innerHTML);
    this.el.nativeElement.innerHTML+=`  <img style="width:40px" src="https://cdn1.vectorstock.com/i/1000x1000/63/95/coffee-flat-icon-vector-19356395.jpg" />`;
  }
 
}




















/*
export class Dog
{
  name:string= null;

  constructor(name:string)
  {
    this.name= name;
  }


  bark()
  {
    console.log(this.name);
  }
}*/