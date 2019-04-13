import React from 'react';
import {Provider} from 'react-redux';
import AppNavigation from '../src/navigation/navigator'
import reducerStore from './reducers/index'
import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {persistStore,persistReducer}from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import Drawernavigation from './navigation/drawernavigator'
const persistConfig = {
    key:'root',
    storage,
}
const persistreducer=persistReducer(persistConfig,reducerStore)
const store= createStore(persistreducer , applyMiddleware(thunk));
let persist=persistStore(store);
const ReduxStore = () =>(
     <Provider store={store}>
         <PersistGate persistor={persist} >
         <AppNavigation/>
         </PersistGate>
     </Provider>
 )
export default ReduxStore;
