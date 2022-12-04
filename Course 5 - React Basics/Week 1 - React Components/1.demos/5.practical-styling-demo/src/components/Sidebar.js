function Sidebar() {
    const asideStyle = {
        background: "azure",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
    };

    return (
        <aside style={asideStyle} className="sidebar-component">
            <h2>Sidebar content here</h2>
        </aside>
    );
}

export default Sidebar;