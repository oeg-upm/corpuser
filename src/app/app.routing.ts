import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { UploadComponent } from './upload/upload.component';
import { StatsComponent } from './stats/stats.component';

const appRoutes = [
    { path: '', component: MenuComponent, data: {animation: 'MenuPage'} },
    { path: 'upload', component: UploadComponent, data: {animation: 'UploadPage'} },
    { path: 'stats', component: StatsComponent, data: {animation: 'StatsPage'} }
   // { path: 'stats/:id', component: IndexDataComponent }
]


export const routing = RouterModule.forRoot(appRoutes);