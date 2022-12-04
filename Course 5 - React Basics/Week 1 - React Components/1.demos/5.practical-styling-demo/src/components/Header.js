function Header() {
    const headerStyle = {
        border: "1px solid lightgray",
        borderRadius: "5px",
        padding: "20px"
    };
    
    return (
        <header style={headerStyle}>
            <h1>Header content here</h1>
        </header>
    );
}

export default Header;