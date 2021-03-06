import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterialModule } from './MaterialModule.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GameService } from './services/game.service';
import { UserService } from './services/user.service';
import { GameServerService } from './services/gameServer.service';
import { ConnectService } from './services/connect.service';
import { ConfigService } from './services/config.service';
import { JwtInterceptor } from './shared/auth/jwt.interceptor';
import { AuthGuard } from './shared/auth/auth.guard';
import { AuthenticationService } from './shared/auth/authentication.service';
import { AuthService } from './shared/auth/authJWT.service';
import { HttpErrorInterceptor } from './shared/apiResponse.interceptor';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    GameService,
    UserService,
    GameServerService,
    ConnectService,
    ConfigService,
    // AuthGuard,
    // AuthService,
        AuthenticationService,
        // UserService,
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: JwtInterceptor,
        //     multi: true
        // },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptor,
          multi: true
        }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
