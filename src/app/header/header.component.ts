import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
  }

  home(){
    this.scrollService.scrollToElement('homeSection', 60);
  }

  aboutMe(){
    this.scrollService.scrollToElement('aboutMeSection', 60);
  };

  experience(){
    this.scrollService.scrollToElement('experienceSection', 60);
  };
}
