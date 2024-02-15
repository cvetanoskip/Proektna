import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProteinComponent } from './protein/protein.component';
import { KreatinComponent } from './kreatin/kreatin.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AminoComponent } from './amino/amino.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to /home by default
    
    {path: 'home', component:HomeComponent},
    {path: 'protein', component:ProteinComponent},
    {path: 'kreatin', component:KreatinComponent},
    {path: 'amino',component:AminoComponent},
    {path: 'feedback',component:FeedbackComponent},
    {path: 'kontakt',component:KontaktComponent}
];
