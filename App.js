/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

import DwareNavigator from './navigation/MealsNavigator';
import MealReducer from './store/Reducer/MealReducer';

const rootReducer = combineReducers({
   MealReducer: MealReducer
})

const store = createStore(rootReducer)

function App() {

   return (

      <Provider store={store}>
         <DwareNavigator />
      </Provider>



   );
}

export default App;
