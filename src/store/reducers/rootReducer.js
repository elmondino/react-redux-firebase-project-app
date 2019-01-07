import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  auth: authReducer,
  project: projectReducer,
  firebase: firebaseReducer
});

export default rootReducer

// the key name will be the data property on the state object