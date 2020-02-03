import React from 'react';
import logo from './logo.svg';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './App.css';
import user from './reducers/user'

import ListComponent from './components/ListComponent';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import UpdateEmp from './components/UpdateEmp';


const store = createStore(user,applyMiddleware(thunk));




function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <title>EMP</title>
    <h2> Employee Management System </h2>
    
    <Route exact path="/addEmp" component={AddEmployee}/>
    <Route exact path ="/" component={ListComponent} />
    <Route path ="/updateEmp/:id" component={UpdateEmp} />
    
    
      
    </div>
    </Router>
    </Provider>
  );
}

export default App;
