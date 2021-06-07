import { forwardRef, useContext } from 'react';
import { AuthContext } from './AuthProvider';

export { default as AuthProvider } from './AuthProvider';

export const useAuth = () => useContext(AuthContext);

export const withAuth = (Component) => {
    const WrappedComponent = forwardRef((props, ref) => (
        <AuthContext.Consumer>
            {(context) => <Component {...props} ref={ref} {...context} />}
        </AuthContext.Consumer>
    ));
    return WrappedComponent;
};
