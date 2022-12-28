import Cookies from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'

const protectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default protectedRoute
