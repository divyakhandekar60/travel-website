import { Component, signal } from '@angular/core';
import { Home } from '../component/home/home';
import { Contact } from '../component/contact/contact';
import { Destinations } from '../component/destinations/destinations';
import { Gallery } from '../component/gallery/gallery';
import { Packages } from '../component/packages/packages';

@Component({
  selector: 'app-root',
  imports: [Home,Contact,Destinations,Gallery,Packages],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
