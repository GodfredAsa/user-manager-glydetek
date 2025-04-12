import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NotificationComponent } from './components/notification/notification.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavElComponent } from './components/nav-el/nav-el.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { AuthenticationGuard } from './guard/authentication.guard';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { UtilsService } from './services/utils.service';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NotificationComponent,
    RedirectComponent,
    PageLoaderComponent,
    DashboardComponent,
    SidebarComponent,
    NavElComponent,
    ProfileComponent,
    LogoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AuthenticationGuard,
    AuthenticationService,
    UtilsService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
