const Header = ({ darkMode, setDarkMode }) => {
    return (
        <header className="header">
            <h2>Mini Task Manager</h2>

            <button
                className="dark-button"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? " Light" : " Dark"}
            </button>
        </header>
    );
};

export default Header;