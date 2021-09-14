

function Header(prop) {
    return (
        <header className="header">
            <h1>{prop.children}</h1>
        </header>
    );
}

export default Header;