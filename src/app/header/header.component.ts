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
    this.scrollService.scrollToElement('homeSection');
  }

  aboutMe(){
    this.scrollService.scrollToElement('aboutMeSection');
  };

  experience(){
    this.scrollService.scrollToElement('experienceSection');
  };
}
