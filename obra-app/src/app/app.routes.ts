import { Routes } from '@angular/router';
import { ObraTableComponent } from './obra-table/obra-table.component';
import { ObraPageComponent } from './obra-page/obra-page.component';

export const routes: Routes = [

   {path: 'obra-page',component: ObraPageComponent,children:[
      {path:'obra-tables', component: ObraTableComponent}
   ]},

   


];
