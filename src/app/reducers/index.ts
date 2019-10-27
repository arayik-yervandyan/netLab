import { ActionReducerMap, MetaReducer, Action} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { formReducer } from './form.reducer';
import { AppState } from '../models';

export const reducers: ActionReducerMap<AppState> = {
  form: formReducer,
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];