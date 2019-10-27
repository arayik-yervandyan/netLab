import { FormActionTypes, FormAction } from '../actions/form.actions';
import { FormState, AppState } from '../models';

const initialFormState: FormState = {
  formData: null
};

export function formReducer(state: FormState = initialFormState, action: FormAction): FormState {
  switch (action.type) {
    case FormActionTypes.setFormData:
      return {
        formData: action.payload
      };
    default:
      return state;
  }
}

export const selectFormData = (state: AppState) => state.form.formData;
