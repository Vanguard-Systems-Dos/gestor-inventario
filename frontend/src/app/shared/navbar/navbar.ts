import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [RouterModule, Header],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
