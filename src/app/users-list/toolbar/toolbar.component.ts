import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() nameChanged = new EventEmitter<string>();
  searchTerm = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSearchTermChanged(){
    this.nameChanged.emit(this.searchTerm);
  }
}
