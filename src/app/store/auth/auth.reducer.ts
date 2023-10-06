// actionların içerisinin doldurulduğu noktalar.
// initialState'in tanımlandığı noktalar

import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';

const initialState = { isAuthenticated: false, user: {} };

// ons
// element.on('click')
// element.on('dblclick')
export const authReducer = createReducer(
  initialState,
  // login aksiyonu fırladığında
  // state,action alan şu fonksiyonu kullan..
  // state => deponun o anki durumu
  // action => login aksiyonu fırlatıldığında verilen propsların değerleri
  on(login, (state, action) => {
    // State is immutable => read-only
    // state.isAuthenticated = true;
    // state.user = { id: action.id, username: action.username };
    // return state;

    // state.cartItems []
    // quantity += 1

    return {
      isAuthenticated: true,
      user: { id: action.id, username: action.username },
    };
  }),
  on(logout, (state) => {
    return { isAuthenticated: false, user: {} };
  })
);
