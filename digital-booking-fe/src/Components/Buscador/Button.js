function Button({name, classN, cambiarCiudad, ciudad, dateIn, dateOut}) {
    return ( 
        <button className={classN} onClick={() => cambiarCiudad(ciudad, dateIn, dateOut) } >{name}</button>
     );
}

export default Button;