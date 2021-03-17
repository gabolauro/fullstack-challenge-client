import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
	{ path: 'list', component: ListComponent },
	{ path: 'add', component: AddComponent },
	{ path: 'edit/:id', component: EditComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
