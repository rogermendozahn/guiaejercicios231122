import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimerapantallaComponent } from './primerapantalla/primerapantalla.component';
import { SegundapantallaComponent } from './segundapantalla/segundapantalla.component';


const routes: Routes = [
  { path: 'primerapantalla', component: PrimerapantallaComponent },
  { path: 'segundapantalla', component: SegundapantallaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
