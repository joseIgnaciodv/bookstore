import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  query: string = ""
  empty: boolean = true

  constructor() { }

  checkText(){
    if (this.query == ""){
      this.empty = true
    }else{
      this.empty = false
    }
  }

  emptyText(){
    this.query = ""
    this.empty = true
  }

  ngOnInit(): void {
  }

}
