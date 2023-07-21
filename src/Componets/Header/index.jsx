function HeaderApp({ children }) {
    return(
        <div className="div__header">
            <header className="header">
                {children}
            </header>
        </div>
    )
}

export default HeaderApp;