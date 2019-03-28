import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InbuildDirectivesComponent } from './directives/inbuild-directives/inbuild-directives.component';
import { CustomDirectivesComponent } from './directives/custom-directives/custom-directives.component';
import { ServiceHomeComponent } from './services/service-home.component';

const routes: Routes = [
  { path: 'inbuild-directives', component: InbuildDirectivesComponent },
  { path: 'custom-directives', component: CustomDirectivesComponent },
  { path: 'services', component: ServiceHomeComponent },

  { path: '', redirectTo: 'services', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
