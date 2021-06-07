import { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useAuth } from '../../store';
import Login from './Login';

const PrivateRoute = ({ children, ...rest }) => {
    const [open, setOpen] = useState(false);
    const { loading, loggedIn } = useAuth();
    const history = useHistory();

    const handleClose = () => {
        setOpen(false);
        history.push('/');
    };

    useEffect(() => {
        if (!loggedIn) {
            setOpen(true);
        }
    }, [loggedIn]);

    return (
        <Route
            {...rest}
            render={() =>
                loggedIn
                    ? children
                    : open && <Login loading={loading} show={open} onClose={handleClose} />
            }
        />
    );
};

export default PrivateRoute;
