import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const BodyPortal = ({ show, children }) => {
    const element = useRef();
    useEffect(() => {
        if (!element.current) {
            element.current = document.createElement('div');
        }
        element.current.style.display = 'contents'; // The <div> is a necessary container for our content, but it should not affect our layout. Only works in some browsers, but generally doesn't matter since this is at the end anyway. Feel free to delete this line.
        if (show === false) {
            element.current.style.opacity = 0;
            element.current.style.visibility = 'hidden';
        } else {
            element.current.style.removeProperty('opacity');
            element.current.style.removeProperty('visibility');
        }

        document.body.appendChild(element.current);
        return () => document.body.removeChild(element.current);
    }, [show]);

    if (!element.current) {
        element.current = document.createElement('div');
    }
    return ReactDOM.createPortal(children, element.current);
};
export default BodyPortal;
