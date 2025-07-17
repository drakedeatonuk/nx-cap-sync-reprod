import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication, BrowserModule, HammerModule } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter, RouteReuseStrategy, withComponentInputBinding, withRouterConfig } from "@angular/router";
import { IonicRouteStrategy } from "@ionic/angular/common";
import { provideIonicAngular } from "@ionic/angular/standalone";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { AppComponent } from "apps/app/src/app/app.component";

bootstrapApplication(
  AppComponent,
  {
    providers: [
      provideHttpClient(withInterceptorsFromDi()),
      importProvidersFrom(
        [
          BrowserModule,
          HammerModule,
        ]
      ),
      provideAnimations(),
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      provideIonicAngular({
        mode: "ios",
        innerHTMLTemplatesEnabled: true,
        useSetInputAPI: true,
        hideCaretOnScroll: true,
        animated: true,
        scrollAssist: false,
        scrollPadding: false,
        swipeBackEnabled: true,
        sanitizerEnabled: true,
        hardwareBackButton: false,
      }),
      provideBrowserGlobalErrorListeners(),
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(
        [],
        withRouterConfig({
          onSameUrlNavigation: "reload",
          paramsInheritanceStrategy: "always",
        }),
        withComponentInputBinding(),
      ),
    ],
  }
)
  .then(() => defineCustomElements(window));


