function Main(props) {
    const mainStyle = {
        border: "1px solid lightgray",
        borderRadius: "5px",
        padding: "20px"
    };
    
    return (
        <main style={mainStyle}>
            <h1>Hello, {props.userName}</h1>
            <h2>You are in position no. {props.num}</h2>
        </main>
    );
}

export default Main;