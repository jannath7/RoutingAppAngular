import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[scroll]'
})
export class ScrollDirective {
@Input()  scroll:any;
  constructor(private e1:ElementRef) { }
@HostListener("click")
onClick():void{
  let temp=this.e1.nativeElement.parentNode;
  console.log(temp);
  temp=temp.children[3];
  temp.scrollTo({left:(temp.scrollLeft+this.scroll),behaviour:'smooth'});
  console.log(temp);
}
}
