import { Component, HostListener, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Book } from 'src/app/models/book';
import { BookstoreApiService } from 'src/app/services/bookstore-api.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  query: string = ""
  empty: boolean = true
  grid_layout: boolean = true
  dark_theme: boolean = false
  book_list: Book[] = []
  data: Book[] = []
  loading: boolean = true

  constructor(public app: AppComponent, public api: BookstoreApiService) { 
  }

  @HostListener("document:click")
  clicked(){
    this.dark_theme = this.app.dark_theme
  }

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
    this.book_list = this.data
  }

  setGridView(){
    this.grid_layout = true
  }

  setListView(){
    this.grid_layout = false
  }

  search(){
    this.book_list = this.data.filter(book => {
      return book.title.includes(this.query.toUpperCase())
    })
  }

  ngOnInit(): void {
    this.loading = true
    this.api.getBooks().subscribe(res =>{
      let rand = Math.floor(Math.random() * res.results.lists.length)
      this.data = res.results.lists[rand].books
      this.book_list = this.data
      this.loading = false
    })

  }

}
