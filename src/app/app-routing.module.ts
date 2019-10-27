import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';

export const routes: Routes = [
 	{
        path: '',
        component: MainComponent,
    },
    {
        path: 'form',
        loadChildren: () => import('./form.module').then(m => m.FormModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}