import React from 'react'
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"

import AddUser from './pages/AddUser.jsx'
import AllUser from './pages/AllUser.jsx'
import EditUser from './pages/EditUser.jsx'
import Page404 from './pages/Page404.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Пользователи</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/addUser" className="nav-link">Добавить пользователя</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <Switch>
              <Route exact path="/" component={AllUser} />
              <Route exact path="/addUser" component={AddUser} />
              <Route exact path="/editUser" component={EditUser} />
              <Route component={Page404} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App

