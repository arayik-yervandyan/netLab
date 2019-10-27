import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './components/form/form.component';
import {FormContainerComponent} from './components/form-container/form-container.component';

export const routes: Routes = [
    {
        path: '',
        component: FormContainerComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule {

}

export const FORM_COMPONENTS = [
    FormContainerComponent,
    FormComponent,
    
];
