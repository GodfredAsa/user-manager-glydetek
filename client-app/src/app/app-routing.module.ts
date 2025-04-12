import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "sign-up", component: SignUpComponent},
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      { path: "", redirectTo: "", pathMatch: "full" },
      { path: '**', component: LoginComponent }
    ]
  },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
