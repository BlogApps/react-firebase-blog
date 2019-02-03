import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { history } from '../history/history'
import LoginPage from '../components/Admin/LoginPage/LoginPage'
import BlogDashboardPage from '../components/Admin/BlogDashboardPage/BlogDashboardPage'
import AddNotePageContainer from '../components/Admin/AddNotePage/AddNotePage.container'
import EditNotePageContainer from '../components/Admin/EditNotePage/EditNotePage.container'
import NotFoundPage from '../components/shared/NFP'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact path='/' component={LoginPage} />
        <PublicRoute exact path='/login' component={LoginPage} />
        <PrivateRoute path='/dashboard' component={BlogDashboardPage} />
        <PrivateRoute path='/create' component={AddNotePageContainer} />
        <PrivateRoute path='/edit/:id' component={EditNotePageContainer} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
