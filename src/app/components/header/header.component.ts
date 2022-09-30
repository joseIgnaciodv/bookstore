import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  img_url: string = "night-mode-dark.png"
  theme: string = "Dark"
  light_clicked: boolean = true
  dark_clicked: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
