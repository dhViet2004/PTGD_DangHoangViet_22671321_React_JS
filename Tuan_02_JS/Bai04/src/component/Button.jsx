function Button({icon, text, color}) {
    return ( 
        <>
        <button style={{ backgroundColor: color }}>
        {icon} {text}
        </button>
        </>
     );
}

export default Button;