import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import { ButtonComponent } from "./button/button.component";
import { CheckboxComponent } from './checkbox/checkbox.component';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        CheckboxComponent,
    ],
    providers: [
        { provide: NZ_I18N, useValue: en_US }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NzButtonModule,
        NzLayoutModule,
        NzBreadCrumbModule,
        NzMenuModule,
        NzCheckboxModule,
        ButtonComponent
    ]
})
export class AppModule { }
