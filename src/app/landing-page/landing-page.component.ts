import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  title = 'Bones of the Tarrasque';
  subtitle = 'One-roll Town Generator';
  credits = 'u/SidecarStories (reddit)';

}
