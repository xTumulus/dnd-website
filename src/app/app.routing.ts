import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DmComponent } from './dmaster/dm-component.component';
import { LoreComponent } from './lore/lore-component.component';
import { PlayerComponent } from './player/player-component.component';
import { RulesComponent } from './rules/rules-component.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent },
    {path: 'player', component: PlayerComponent},
    {path: 'rules', component: RulesComponent},
    {path: 'lore', component: LoreComponent},
    {path: 'dm', component: DmComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
