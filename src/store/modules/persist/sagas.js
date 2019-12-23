import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';

import {singInSuccess, singFailure} from './actions';

// eslint-disable-next-line consistent-return
export function* singIn({payload}) {
  try {
    const {id} = payload;

    if (!id && !Number.isInteger(id)) {
      yield put(singFailure());
      return Alert.alert('Informe seu ID de cadastro');
    }

    if (!Number.isInteger(Number(id))) {
      yield put(singFailure());
      return Alert.alert('ID inválido');
    }

    const response = yield call(api.get, `students/${id}`);

    const student = response.data;

    yield put(singInSuccess(student));
  } catch (err) {
    console.tron.log(err);
    Alert.alert('Estudante não encontrado');
    yield put(singFailure());
  }
}

export function singOut() {}

export default all([
  takeLatest('@persist/SING_IN_REQUEST', singIn),
  takeLatest('@persist/SING_OUT', singOut),
]);
