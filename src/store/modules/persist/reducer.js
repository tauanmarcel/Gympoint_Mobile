import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  loading: false,
};

export default function persist(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@persist/SING_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@persist/SING_IN_SUCCESS': {
        draft.student = action.payload.student;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@persist/SING_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@persist/SING_OUT': {
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
