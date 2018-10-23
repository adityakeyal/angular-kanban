import { Directive, HostListener, ElementRef, Renderer, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Directive({
  selector: '[appContentEdit]'
})
export class ContentEditDirective implements OnInit {
  


  @Input('appContentEdit') content: string;
  @Output('appContentEditChange') contentChange: EventEmitter<string> = new EventEmitter<string>();


  constructor(private el: ElementRef, private renderer: Renderer) { 
   
  }


  ngOnInit(): void {
    this.makeContentEditable()
  }

  // if you press enter then move out of editable mode

  @HostListener('keydown.enter', [] )
  exitContentEditable($event){
    this.renderer.invokeElementMethod(this.el.nativeElement,'blur');
    return false;
  }


  @HostListener('blur',[])
  propagateChange(){
    this.contentChange.emit(this.el.nativeElement.innerText);
  }




  makeContentEditable(){
      this.renderer.createText(this.el.nativeElement,this.content);
      this.renderer.setElementAttribute(this.el.nativeElement,'contenteditable','true');
  }


}
