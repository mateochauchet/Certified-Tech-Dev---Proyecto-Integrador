let baseUrl = "http://localhost:8080/productos";

export async function getProductos () {
    const  response = await fetch(baseUrl);
    const resJson = await response.json();
    return Array.isArray(resJson) ?  resJson :  [resJson]
} 

export async function getProductosByCategoria (q) {
    const  response = await fetch(`${baseUrl}/categoria/${q}`);
    const resJson = await response.json();
    return Array.isArray(resJson) ?  resJson :  [resJson]
}

export async function getProductosByCiudad (q) {
    const  response = await fetch(`${baseUrl}/ciudad/${q}`);
    const resJson = await response.json();
    return Array.isArray(resJson) ?  resJson :  [resJson]
}


export default {
    getProductos,
    getProductosByCategoria,
    getProductosByCiudad
}