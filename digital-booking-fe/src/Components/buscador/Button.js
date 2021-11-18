function Button({name, classN, cambiarCiudad, ciudad}) {
    return ( 
        <button className={classN} onClick={() => cambiarCiudad(ciudad)} >{name}</button>
     );
}

export default Button;