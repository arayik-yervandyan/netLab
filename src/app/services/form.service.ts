import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {FormData, AppState} from '../models';
import {selectFormData} from '../reducers/form.reducer';
import {SetFormData} from '../actions/form.actions';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private _store: Store<AppState>) {

  }

  public get formData(): Observable<FormData> {
  	return this._store.pipe(select(selectFormData));
  }

  public setFormData(formData: FormData) {
  	this._store.dispatch(new SetFormData(formData));
  }
}
