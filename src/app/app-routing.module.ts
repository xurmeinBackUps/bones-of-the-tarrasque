import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CanvasComponent } from './components/canvas/canvas.component';

const routes: Routes = [
  { path: 'splash', component: LandingPageComponent },
  { path: 'canvas', component: CanvasComponent },
  { path: '' , redirectTo: '/splash', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
