import React from 'react'
import LoginForm from './login/loginForm'
import SimplePage from './login/protectedRoute'
import {  Route, Switch} from "react-router-dom";
function App() {
  return (
    <div>

      <Switch>
      <Route exact path="/" component={LoginForm} />

       <Route exact path="/simplepage" component={SimplePage} />

        /**Protected Login Router */
        {/* <ProtectedRoute exact path="/adminpanel" component={HomeAdminPanel}/> */}
  

    </Switch>

    </div>
  )
}

export default App
