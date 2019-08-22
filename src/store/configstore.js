import {createStore, applyMiddleware,combineReducers} from "redux";
import offlineReducer from  './reducers/offlineReducer';
import { persistStore ,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import ReduxThunk from "redux-thunk"
const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ["offlineReducer"],
    timeout: 0,
  };
  
  const  persistedReducer=persistReducer  (rootPersistConfig,combineReducers({offlineReducer:offlineReducer}));
const configuareStore =()=>{ 
  const store = createStore(
    persistedReducer ,
    applyMiddleware(ReduxThunk)
      );
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configuareStore();