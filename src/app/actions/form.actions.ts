import { Action } from '@ngrx/store';
import { FormData } from '../models';

export enum FormActionTypes {
  setFormData = 'SET_FORM_DATA',
}

export class FormAction implements Action {
  type: string;
  payload: FormData;
}

export class SetFormData implements Action {
	readonly type = FormActionTypes.setFormData;

	constructor(readonly payload: FormData) {

	}
}

export type ActionsUnion = SetFormData;