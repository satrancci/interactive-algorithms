import { combineReducers } from 'redux';
import dsReducer from './dsReducer';
import algoReducer from './algoReducer';
import idxReducer from './idxReducer';
import msgReducer from './msgReducer';
import paramReducer from './paramReducer';
import treeReducer from './treeReducer';
import nodeIDReducer from './nodeIDReducer';
import speedReducer from './speedReducer';
import inputObjReducer from './inputObjReducer';
import visValuesReducer from './visValuesReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  dataStructure: dsReducer,
  algorithm: algoReducer,
  indices: idxReducer,
  message: msgReducer,
  params: paramReducer,
  treeValues: treeReducer,
  nodeID: nodeIDReducer,
  visualizationSpeed: speedReducer,
  inputObj: inputObjReducer,
  visValues: visValuesReducer,
  errors: errorReducer
});