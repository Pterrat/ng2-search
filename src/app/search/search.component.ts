import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
declare var classie: any;
import '../../assets/js/classie.js';

@Component({
  selector: 'ng2-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    public _data: Array<any> = [];
    public _dataSaved: Array<any> = [];
    public _columns: Array<any> = [];

	public searchTitle(newValue:any){
      this._data =  this._dataSaved.filter(v => v.title.indexOf(newValue) != -1);
	}

    @Input()
    public set columns(columns: any) {
      this._columns = columns;
      console.log(this._columns);
    }

    @Input()
    public set data(data: any) {
		this._data = data;
		this._dataSaved = data;
    }

    @Output() public itemClicked: EventEmitter<any> = new EventEmitter();

    public itemClick(item: any): void {
    	console.log(item);
        this.itemClicked.emit({ item });
    }
  constructor() { }

  ngOnInit() {
  }

}
