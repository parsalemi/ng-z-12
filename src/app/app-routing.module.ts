import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'button', loadComponent: () => import('./button/button.component').then(a => a.ButtonComponent), data:{title :'Button',breadcrumb:'button'}},
  {path:'checkbox', loadComponent: () => import('./checkbox/checkbox.component').then(a => a.CheckboxComponent),data:{title: 'Checkbox',breadcrumb:'checkbox'}},
  {path:'select', loadComponent:() => import('./select/select.component').then(a => a.SelectComponent),data:{title:'Select',breadcrumb:'select'}},
  {path:'radio',loadComponent:() => import('./radio/radio.component').then(a => a.RadioComponent),data:{title:'Radio',breadcrumb:'radio'}},
  {path:'card',loadComponent:() => import('./card/card.component').then(a => a.CardComponent),data:{title:'Card',breadcrumb:'card'}},
  {path:'form',loadComponent:() => import('./form/form.component').then(a => a.FormComponent),data:{title:'Form',breadcrumb:'form'}},
  {path:'collapse',loadComponent:() => import('./collapse/collapse.component').then(a => a.CollapseComponent),data:{title:'Collapse',breadcrumb:'collapse'}},
  {path:'modal',loadComponent:() => import('./modal/modal.component').then(a => a.ModalComponent),data:{title:'Modal',breadcrumb:'modal'}},
  {path:'skeleton',loadComponent:() => import('./skeleton/skeleton.component').then(a => a.SkeletonComponent),data:{title:'Skeleton',breadcrumb:'skeleton'}},
  {path:'tabs',loadComponent:() => import('./tabs/tabs.component').then(a => a.TabsComponent),data:{title:'Tabs',breadcrumb:'tabs'}},
  { path: '', redirectTo: '/button', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
