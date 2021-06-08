import { useEffect } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { useAuth } from '../../store';

const PrivateRoute = ({ children, ...rest }) => {
    const { loggedIn } = useAuth();
    const history = useHistory();

    useEffect(() => {
        if (!loggedIn) {
            history.push('/');
        }
    }, [history, loggedIn]);

    return <Route {...rest} render={() => (loggedIn ? children : <Redirect to="/" />)} />;
};

export default PrivateRoute;
