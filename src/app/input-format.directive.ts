import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'util';

@Directive({
  selector: '[InputFormat]'
})

export class InputFormatDirective {

  @Input('format') format;

  constructor(private ref: ElementRef) { }

  @HostListener('focus') onFocus(){
    console.log("Focus");
  }

  @HostListener('blur') onblur(){
    let val : string= this.ref.nativeElement.value;
    if(this.format == 'toUpperCase')
      this.ref.nativeElement.value = val.toUpperCase();
    else if(this.format == 'toLowerCase')
      this.ref.nativeElement.value = val.toLowerCase();
    
  }

}
