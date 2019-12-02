export function singInRequest(id) {
  return {
    type: '@persist/SING_IN_REQUEST',
    payload: {id},
  };
}

export function singInSuccess(student) {
  return {
    type: '@persist/SING_IN_SUCCESS',
    payload: {student},
  };
}

export function singFailure() {
  return {
    type: '@persist/SING_FAILURE',
  };
}

export function singOut() {
  return {
    type: '@persist/SING_OUT',
  };
}
