import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/others/PrivateRoute';
import Landing from './containers/Landing';
import Home from './containers/Home';

function App() {
    return (
        <Switch>
            <Route path="/" exact component={Landing} />

            <PrivateRoute path="/home" exact>
                <Home />
            </PrivateRoute>
        </Switch>
    );
}

export default App;
