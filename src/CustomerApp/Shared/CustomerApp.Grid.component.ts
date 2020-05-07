import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: "grid-ui",
  templateUrl: './CustomerApp.Grid.view.html'
})
export class GridComponent {
  gridColumns: Array<object> = new Array<object>();
  gridData: Array<object> = new Array<object>();
  
  @Input("grid-columns")
  set setGridColumns(_gridcolumns: Array<object>) {
    this.gridColumns = _gridcolumns;
  }

  @Input("grid-data")
  set setGridData(_gridData: Array<object>) {
    this.gridData = _gridData;
  }

  @Output("grid-delete")
  eventEmitter: EventEmitter<object> = new EventEmitter<object>();
  Delete(item: object) {
    this.eventEmitter.emit(item);
  }
  
  }
