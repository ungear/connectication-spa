import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import { StoreModule } from '@ngrx/store';
import {authReducer} from './store/auth.reducers';
import {environment} from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './store/auth.effects';
import {NgxsModule} from '@ngxs/store';
import {AuthStateEngine} from './store-xs/auth.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedModule,
    // StoreModule.forRoot({auth: authReducer}, {}),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
    // EffectsModule.forRoot([AuthEffects])
    NgxsModule.forRoot([AuthStateEngine], {
      developmentMode: !environment.production
    }),
    !environment.production ?  NgxsReduxDevtoolsPluginModule.forRoot() :[]
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
