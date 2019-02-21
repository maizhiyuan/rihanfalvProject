import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserComponent } from './components/user/user.component';
  import { CollectionComponent } from './components/user/collection/collection.component';
import { ThesisComponent } from './components/thesis/thesis.component';
import { CaseComponent } from './components/case/case.component';

const routes: Routes = [
  {
    path:'user',component:UserComponent,
    children:[
      {
        path:'collection',component:CollectionComponent,
      }
    ]
  },
  {
    path:'thesis',component:ThesisComponent,
  },
  {
    path:'case',component:CaseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
