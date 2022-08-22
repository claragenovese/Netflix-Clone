Este proyecto es una mejora de netflix-clone, y nace como respuesta a dos problemas centrales:

  1. El tiempo de carga de la página era excesivamente grande
  
Para resolver esto modifiqué la cantidad de solicitudes iniciales que el programa hacía a la API. Inicialmente, previo a mostrar la información, se cargaba un arreglo con los datos de todas las imagenes de todas las categorías de todas las páginas, lo que generaba un tiempo de carga enorme con información que no se requería en ese instante. Para solucionarlo reduje las peticiones iniciales de la API, solo cargando el contenido que desee mostrarse inicialmente, y luego el resto. Estas modificaciones fueron llevadas de la mano de la integracion de lazy loading para todas las páginas, y lazy image para la carga de imágenes.

  2. La página web no guardaba las peliculas seleccionadas luego de refrescar.
 
Para solucionar esto integré Firestore a la aplicación, de modo tal que al loguearse un usuario, se setea en la base de datos un arreglo con las peliculas guardadas, que se va actualizando a medida que se agregan o eliminan películas. De este modo ahora es posible que los usuarios tengan la posibilidad de guardar películas específicas para su cuenta.

