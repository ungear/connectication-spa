import { Component, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements AfterViewInit, OnDestroy {
  @Output() nameChanged = new EventEmitter<string>();
  @ViewChild('search') searchTermInput!: ElementRef;
  subscription = new Subscription();

  constructor() { }

  ngAfterViewInit(): void {
    const s = fromEvent<{target: HTMLInputElement}>(this.searchTermInput.nativeElement, 'input').pipe(
      map(event => event.target.value),
      debounceTime(500)
    )
    .subscribe((value) => {
      this.nameChanged.emit(value);
    });

    this.subscription.add(s);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
