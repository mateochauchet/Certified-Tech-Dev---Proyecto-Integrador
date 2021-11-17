function Button({name, classN, cambiarCiudad, ciudad}) {
    return ( 
        <button className={classN} >{name}</button>
     );
}

export default Button;