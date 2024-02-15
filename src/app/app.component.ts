import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterOutlet } from '@angular/router';
import { PRODUCTS } from '../database';
import { Product } from './module/klasa';
import { HomeComponent } from './home/home.component';
import { ProteinComponent } from './protein/protein.component';
import { KreatinComponent } from './kreatin/kreatin.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AminoComponent } from './amino/amino.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HomeComponent,ProteinComponent,KreatinComponent,KontaktComponent,AminoComponent,FeedbackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
  title = 'Proektna';
  produkti=PRODUCTS;
 
}
