import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {ListInterface} from '../../../model/list/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})




export class ListComponent implements OnInit {

  @Input() list: ListInterface;

  headingEditMode = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    this.headingEditMode = false;
  }

  clickedInside($event: Event) {

    this.headingEditMode = true;
    $event.preventDefault();
    $event.stopPropagation();  // <- that will stop propagation on lower layers

  }

  @HostListener('document:click', ['$event']) clickedOutside($event) {
    const targetElement = $event.target as HTMLElement;

    if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
      this.headingEditMode = false;
      $event.preventDefault();
      $event.stopPropagation();  // <- that will stop propagation on lower layers
    }

  }


}
