function AppContainer({ children, ...props }) {
    return (
        <div className="App">
            <main {...props}>{children}</main>
        </div>
    );
}

export default AppContainer;
