import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenubarModule } from 'primeng/menubar';
import { BugsListComponent } from './home/bugs-list/bugs-list.component';
import { ManageBugsComponent } from './home/manage-bugs/manage-bugs.component';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ToastModule } from 'primeng/toast';
import { NavbarComponent } from './home/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/fileupload';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {DataViewModule} from 'primeng/dataview';
import { JwtInterceptorService } from './auth/Services/jwt-interceptor.service';
import { TreeTableModule } from 'primeng/treetable';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AuthGuardService } from './auth/Services/auth-guard.service';
import { NotFoundComponent } from './home/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BugsListComponent,
    ManageBugsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    PanelModule,InputTextModule,ButtonModule, CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    ToastModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule,
    DataViewModule,
    TreeTableModule,
    CardModule,
    InputTextareaModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
