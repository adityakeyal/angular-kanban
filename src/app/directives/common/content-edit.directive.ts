import { Directive, HostListener, ElementRef, Renderer, Input, EventEmitter, Output, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appContentEdit]'
})
export class ContentEditDirective implements OnInit {



  @Input() appContentEdit: string;
  @Output() appContentEditChange: EventEmitter<string> = new EventEmitter<string>();

  private ignoreChange = false;

  constructor(private el: ElementRef, private renderer2: Renderer2) {
  }


  ngOnInit(): void {
    this.makeContentEditable();
  }

  // if you press enter then move out of editable mode

  @HostListener('keydown.enter', [] )
  exitContentEditable($event) {
    this.el.nativeElement.blur();
    return false;
  }

  @HostListener('keydown.escape', [] )
  exitContentEditableWithoutChanges($event) {
    this.ignoreChange = true;
    this.el.nativeElement.blur();
    return false;
  }


  @HostListener('blur', [])
  propagateChange() {
    if (!this.ignoreChange) {
      this.appContentEditChange.emit(this.el.nativeElement.innerText);
    } else {
      this.el.nativeElement.innerText = this.appContentEdit;
    }
    this.ignoreChange = false;
    this.exitChange();
  }

  exitChange() {
    this.renderer2.setAttribute(this.el.nativeElement, 'contenteditable', 'false');
    this.renderer2.removeClass(this.el.nativeElement, 'inline-edit');
  }




  makeContentEditable() {
      this.renderer2.appendChild( this.el.nativeElement, this.renderer2.createText(this.appContentEdit));
      this.renderer2.listen(this.el.nativeElement, 'dblclick', () => {
        this.renderer2.setAttribute(this.el.nativeElement, 'contenteditable', 'true');
        this.renderer2.addClass(this.el.nativeElement, 'inline-edit');
        this.el.nativeElement.focus();
      });

  }


}
