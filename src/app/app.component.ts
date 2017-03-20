import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Westlund';

 /* This is for making the side bar open and close 
  const openNav: () => void =
    function (): void
    {
      document.getElementById('main_sidebar').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
    };

  const closeNav: () => void =
    function (): void
    {
    document.getElementById('main_sidebar').style.width = '0';
    document.getElementById('main').style.marginLeft= '0';
  }; */
}
