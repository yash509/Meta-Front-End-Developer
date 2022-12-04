// function Btn() {
//     const clickHandler =
//         () => console.log('clicked')
//     return (
//         <button onClick={clickHandler}>
//             Click me
//         </button>
//     );
// }

// export default Btn;

function Btn() {
    const clickHandler =
        () => console.log('mouse over')
    return (
        <button onMouseOver={clickHandler}>
            Click me
        </button>
    );
}

export default Btn;