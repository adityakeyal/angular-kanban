import { Directive, HostListener, ElementRef, Renderer, Input, EventEmitter, Output, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appContentEdit]'
})
export class ContentEditDirective implements OnInit {
  


  @Input('appContentEdit') content: string;
  @Output('appContentEditChange') contentChange: EventEmitter<string> = new EventEmitter<string>();

  private ignoreChange =false;

  constructor(private el: ElementRef, private renderer: Renderer , private rendered2: Renderer2) { 
   
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

  @HostListener('keydown.escape', [] )
  exitContentEditableWithoutChanges($event){
    this.ignoreChange = true;
    this.renderer.invokeElementMethod(this.el.nativeElement,'blur');
    return false;
  }


  @HostListener('blur',[])
  propagateChange(){
    if(!this.ignoreChange){
      this.contentChange.emit(this.el.nativeElement.innerText);
    }else{
      this.el.nativeElement.innerText=this.content;
    }
    this.ignoreChange = false;
    this.exitChange();
  }

  exitChange(){
    this.renderer.setElementAttribute(this.el.nativeElement,'contenteditable','false');
    this.rendered2.removeClass(this.el.nativeElement,'inline-edit');
  }




  makeContentEditable(){
      this.renderer.createText(this.el.nativeElement,this.content);
      
      this.renderer.listen(this.el.nativeElement,'dblclick',() =>{
        this.renderer.setElementAttribute(this.el.nativeElement,'contenteditable','true');
        this.rendered2.addClass(this.el.nativeElement,'inline-edit');
        this.el.nativeElement.focus();
      })

  }


}
