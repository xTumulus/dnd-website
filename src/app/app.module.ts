import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DmComponent } from './dmaster/dm-component.component';
import { LoreComponent } from './lore/lore-component.component';
import { PlayerComponent } from './player/player-component.component';
import { RulesComponent } from './rules/rules-component.component';
import { HomeComponent } from './home/home.component';

import { ROUTING } from './app.routing';
import { HpBarComponent } from './hp-bar/hp-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DmComponent,
    LoreComponent,
    PlayerComponent,
    RulesComponent,
    HomeComponent,
    HpBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
