import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DirectiveHomeComponent } from './directives/directive-home.component';
import { InbuildDirectivesComponent } from './directives/inbuild-directives/inbuild-directives.component';
import { CustomDirectivesComponent } from './directives/custom-directives/custom-directives.component';
import { HighlightDirective } from './directives/custom-directives/highlight.directive';
import { HighlightHoverDirective } from './directives/custom-directives/highlight-hover.directive';
import { Renderer2HighlightDirective } from './directives/custom-directives/renderer2-highlight.directive';
import { HostBasedHighlightDirective } from './directives/custom-directives/host-based-highlight.directive';
import { AeIfDirective } from './directives/custom-directives/ae-if.directive';
import { ServiceHomeComponent } from './services/service-home.component';
import { YellowServComponent } from './services/components/yellow-serv.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveHomeComponent,
    InbuildDirectivesComponent,
    CustomDirectivesComponent,
    HighlightDirective,
    HighlightHoverDirective,
    Renderer2HighlightDirective,
    HostBasedHighlightDirective,
    AeIfDirective,
    ServiceHomeComponent,
    YellowServComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
