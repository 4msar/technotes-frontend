import Header from './Header';

function AppContainer({ children, ...props }) {
    return (
        <div className="App">
            <Header />
            <main {...props}>{children}</main>
        </div>
    );
}

export default AppContainer;
