import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', component:IndexpageComponent},

//this lazy loading routing for Homapege
  {path:'', loadChildren:()=>import('./homepage/homepage.module').then(mod=>mod.HomepageModule)},


  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
