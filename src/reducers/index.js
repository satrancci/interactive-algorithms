
import { combineReducers } from 'redux';
import dsReducer from './dsReducer';
import algoReducer from './algoReducer';
import idxReducer from './idxReducer';
import msgReducer from './msgReducer';
import valsReducer from './valsReducer';
import paramReducer from './paramReducer';

export default combineReducers({
  dataStructure: dsReducer,
  values: valsReducer,
  algorithm: algoReducer,
  indices: idxReducer,
  message: msgReducer,
  params: paramReducer,
});