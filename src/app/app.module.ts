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
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogConfig, DynamicDialogModule } from 'primeng/dynamicdialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { FooterComponent } from './home/footer/footer.component';
import { ChipsModule } from 'primeng/chips';
import { ManageTeamComponent } from './home/manage-team/manage-team.component';
import { ManageProjectsComponent } from './home/manage-projects/manage-projects.component';
import { ManageCtegoriesComponent } from './home/manage-ctegories/manage-ctegories.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ManageProjectBugsComponent } from './home/manage-project-bugs/manage-project-bugs.component';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BugsListComponent,
    ManageBugsComponent,
    NotFoundComponent,
    FooterComponent,
    ManageTeamComponent,
    ManageProjectsComponent,
    ManageCtegoriesComponent,
    ManageProjectBugsComponent
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
    InputTextareaModule,
    DialogModule,
    DynamicDialogModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ChipsModule,
    CheckboxModule,
    AutoCompleteModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    AuthGuardService,
    DynamicDialogConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
