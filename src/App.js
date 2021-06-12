import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/others/PrivateRoute';
import Landing from './containers/Landing';
import Home from './containers/Home';
import Error404 from './containers/Error404';
import SharedNotes from './containers/SharedNotes';
import SharedUsers from './containers/SharedUsers';

function App() {
    return (
        <Switch>
            <Route path="/" exact component={Landing} />

            <PrivateRoute path="/home" exact>
                <Home />
            </PrivateRoute>
            <PrivateRoute path="/shared" exact>
                <SharedNotes />
            </PrivateRoute>
            <PrivateRoute path="/shared/users" exact>
                <SharedUsers />
            </PrivateRoute>

            <Route path="*" exact component={Error404} />
        </Switch>
    );
}

export default App;
