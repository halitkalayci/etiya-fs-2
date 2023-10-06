import { createAction, props } from '@ngrx/store';

// unique (benzersiz) isim
// [DepoIsmi] MethodIsmi
export const login = createAction(
  '[Auth] Login',
  props<{ id: number; username: string }>()
);
export const logout = createAction('[Auth] Logout');
