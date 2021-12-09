let baseUrl = "https://digitalbooking.ga/api/productos/";

export async function getProductos () {
    const  response = await fetch(`${baseUrl}`);
    const resJson = await response.json();
    return Array.isArray(resJson) ?  resJson :  [resJson]
} 

export async function getCategorias () {
    const  response = await fetch("https://digitalbooking.ga/api/categorias/");
    const resJson = await response.json();
    return Array.isArray(resJson) ?  resJson :  [resJson]
} 

export async function getCity () {
    const  response = await fetch("https://digitalbooking.ga/api/ciudad/");
    const resJson = await response.json();
    return Array.isArray(resJson) ?  resJson :  [resJson]
} 

export async function getProductosById (id) {
    const  response = await fetch(`https://digitalbooking.ga/api/productos/${id}`);
    const resJson = await response.json();
    return Array.isArray(resJson) ?  resJson :  [resJson]
}
export async function getReservasByIdProduct (id) {
    const  response = await fetch(`https://digitalbooking.ga/api/reserva/${id}`);
    const resJson = await response.json();
    return Array.isArray(resJson) ?  resJson :  [resJson]
}

export async function getProductosByCategoria (q) {
    const  response = await fetch(`${baseUrl}/categoria/${q}`);
    const resJson = await response.json();
    return Array.isArray(resJson) ?  resJson :  [resJson]
}

export async function getProductosByDate (dateInicio, dateFin) {
    const  response = await fetch(`${baseUrl}reserva/${dateInicio}/${dateFin}`);
    if (response.status === 404) {
        console.log('No hay productos reservados')
        return null
    } else {
        const resJson = await response.json();
        return Array.isArray(resJson) ?  resJson :  [resJson]
    }

}

export async function getProductosByCiudad (q) {
    const  response = await fetch(`${baseUrl}ciudad/${q}`);
    const resJson = await response.json();
    return Array.isArray(resJson) ?  resJson :  [resJson]
}

export async function getCaracteristicas () {
    const  response = await fetch("https://digitalbooking.ga/api/caracteristicas/");
    const resJson = await response.json();
    return Array.isArray(resJson) ?  resJson :  [resJson]
} 


export default {
    getProductos,
    getCategorias,
    getCity,
    getProductosById,
    getProductosByCategoria,
    getProductosByDate,
    getProductosByCiudad,
    getCaracteristicas,
    getReservasByIdProduct
}