// modulo/accion
const INCREMENTAR = 'CONTADOR/INCREMENTAR';
const DECREMENTAR = 'CONTADOR/DECREMENTAR';
const SETEAR = 'CONTADOR/SETEAR';

export const setear = (payload) => ({
  type: SETEAR,
  payload,
});

export const incrementar = () => ({
  type: INCREMENTAR,
});

export const decrementar = () => ({
  type: DECREMENTAR,
});

const initialState = 0;

// reducer tienen que retornar estados inmutables
export default function (state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case SETEAR:
      return action.payload;

    case INCREMENTAR:
      return state + 1;

    case DECREMENTAR:
      return state - 1;

    default:
      return state;
  }
}
