import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { history } from '../history/history'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

/** Admin Pages */
import LoginPage from '../components/admin/LoginPage/LoginPage'
import BlogDashboardPage from '../components/admin/BlogDashboardPage/BlogDashboardPage'
import AddNotePageContainer from '../components/admin/AddNotePage/AddNotePage.container'
import EditNotePageContainer from '../components/admin/EditNotePage/EditNotePage.container'

/** Public Pages */
import PublicDashboardPage from '../components/public/PublicDashboardPage/PublicDashboardPage'

/** Shared Pages */
import NotFoundPage from '../components/shared/NFP'


const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact path='/' component={PublicDashboardPage} />
        <PublicRoute path='/login' component={LoginPage} />
        <PrivateRoute path='/dashboard' component={BlogDashboardPage} />
        <PrivateRoute path='/create' component={AddNotePageContainer} />
        <PrivateRoute path='/edit/:id' component={EditNotePageContainer} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
