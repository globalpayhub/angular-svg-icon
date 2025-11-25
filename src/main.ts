import 'zone.js';
import { provideHttpClient } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { DemoAppComponent } from './app/demo-app.component';

enableProdMode();

bootstrapApplication(DemoAppComponent, {
    providers: [
        provideAngularSvgIcon(),
        provideHttpClient()
    ]
});
