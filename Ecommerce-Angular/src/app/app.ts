import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Product } from './components/product/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Product, Navbar, Footer , CommonModule],
})
export class App {
  protected readonly title = signal('firstProject');
}
