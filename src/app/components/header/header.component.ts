import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  img_url:string = ""
  theme:string = ""
  dark_theme:boolean = false
  burger_menu: boolean = false

  constructor(public app: AppComponent) { }

  changeTheme(){
    this.app.dark_theme = !this.app.dark_theme
    if(this.app.dark_theme == true){
      this.img_url = "brightness.png"
      this.theme = "Light"
    }else{
      this.img_url = "night-mode-dark.png"
      this.theme = "Dark"
    }
    this.dark_theme = this.app.dark_theme
  }

  openSideNav(){
    this.burger_menu = true
  }

  closeSideNav(){
    this.burger_menu = false
  }

  ngOnInit(): void {
    this.img_url = "night-mode-dark.png"
    this.theme = "Dark"
  }

}
