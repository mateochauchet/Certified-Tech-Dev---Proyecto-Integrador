
export async function getReservationsByIdUsuario(contextLoginRegistro, contextUser) {

     let codificado = btoa(contextLoginRegistro.password)
    const response = await fetch(
      `https://digitalbooking.ga/api/reserva/${codificado}/${contextLoginRegistro.id}`,{
          method: 'GET',
          headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer ${contextUser}`
          }
      }
    );
    const resJson = await response.json();
    return Array.isArray(resJson) ? resJson : [resJson];
  }


