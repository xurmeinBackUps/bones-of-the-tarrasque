import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  title = 'Bones of the Tarrasque';
  subtitle = 'One-roll Town Generator';
  credits = 'u/SidecarStories (reddit)';

  constructor() { }

  ngOnInit() {
  }

  enter(event) {
    
  }

}
