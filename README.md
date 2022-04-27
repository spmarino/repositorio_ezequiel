WorkShop React Js.
Desarrollo.
A lo largo del proyecto se emplearon diversas herramientas provistas por react, react-rooter-dom y firebase entre otras, como por ejemplo:

React

useEffect para poder detectar cambios en las propiedades o estados de un componente.
useState para poder efectyuar cambios en los distintos estados repartidos por la aplicacion.
useContext para poder envolver mi aplicacion en contextos que facilitan el llamado a funciones relacionadas con ciertos componentes.
React-router-dom

useParams para obtener la ruta en la que estamos parados y asi poder filtrar.
useNavigate para poder redireccionar luego de ciertas acciones.
Routes para envolver las rutas con las que voy a trabajar.
Route para definir cada ruta con la propiedad path, en caso de tener :category o :productId quiere decir que lo que va despues de los : va a variar y element es el componente que se va a renderizar. (dichas rutas se encuentran en el archivo app)
Link para poder acceder a ciertas rutas establecidas (suplantando a la etiqueta a ).
NavLink para las rutas del nav.

Firebase

collection.
getDocs.
query.
where.
getFirestore.
doc.
getDoc.

Para poder gestionar todo lo que tiene que ver con la base de datos y gestion de usuarios en Firebase.

Descripcion.
Ecommerce desarrollado con ReactJs que permite visualizar un listado total de productos, filtrar por categorias a dichos productos con la posibilidad de ver en detalle las caracteristicas del producto, en donde podremos agregar al carrito de compra la cantidad deseada de productos. Ya en el carrito permite hacer modificaciones de las cantidades de los items sumados, vaciar el carro por completo, seguir comprando o confirmar la compra.

Funcionamiento.
git a

¿Cómo usar?
Requisito fundamental: Tener instalado Node.
Clonar repositorio.
git clone https://github.com/LacoPrats/EzequielPrats_HoopsWorldfinal
Creamos la carpeta donde queremos que se clone el proyecto y desde la terminal nos paramos en ella, introducimos el comando git clone https://github.com/Telayna-I/e-commerce-telayna.git

Inicializar NPM.
npm init -y
Introducimos el comando npm init -y ,se activara la inicializacion del proyecto donde se agregaran los archivos package.json los cuales permitiran instalar todas las dependencias del proyecto.

Instalar librerias y dependencias.
npm install
Introducimos el comando npm install, al ejecutar este comando se instalaran todas las dependencias para que el proyecto funcione correctamente.

Correr en local.
npm start
Si ejecutamos el comando npm start se abrira automaticamente nuestro navegador en la url de http://localhost:3000/ que sera la que nos permitira visualizar la aplicacion.

Librerias Instaladas.
React.
Libreria de JavaScript con la que se desarrollo la aplicacion.

React-router-dom.
Esta libreria la utilice para poder establecer rutas dentro de la aplicacion.


Firebase.
Utilizado como base de datos y procesos de autenticacion de usuarios para el logueo y registro de usuarios.

Configuracion de Firebase para utilizar el proyecto.

Agrega una app para comenzar.
Al momento de tener que agregar una app, seleccionamos el icono de </>

agregar-app.png

Introducimos el nombre desado pero desactivamos la opcion de Firebase Hosting

firebase-Hosting.png

Y por ultimo damos click en registrar app.

Luego de registrarnos podremos visualizar esta pantalla que nos proporciona los datos para la conexion con firebase, donde tendremos que presionar [Ir a la consola] para finalizar.

Configurar variables de entorno.


Esto permitira que se pueda establecer la conexion con firebase.

En el caso de que no funcione cancelar la ejecucion y volver a utilizar el comando

npm start
Estructura de archivos.
Dentro de Firebase acceder a Cloud Firestore, una vez dentro presionar en [+ iniciar coleccion].

En el campo ID de la coleccion tendremos que introducir la palabra [products] como ID.

Luego, dentro de la coleccion products tendremos que agregar nuestros productos clickeando en [+ Agregar documento]

Dentro, para nuestros productos, eligiremos un id aleatorio proporcionado por Firebase.

Y luego debemos respetar esta estructura de producto.

estructura-producto-1.png

Una vez cargado el producto clickeamos en la opcion guardar.

Por ultimo, deberiamos crear una coleccion llamada categories y dentro de ella crear cada categoria de producto que podamos llegar a tener en nuestra base de datos de productos.

categorias.png

Al finalizar, deberia quedarnos asi:

fianalizar.png

Una vez terminada la carga de productos y generadas las categorias recien ahi podremos visualizarlos en nuestra aplicacion.

Orders.
Luego de que se efectue una compra, dentro de la base de datos de firebase, se creara una coleccion llamada orders donde se van a encontrar todas las ordenes de compra generadas por los distintos usuarios.

En caso de querer programar un componente que permita renderizar la lista de ordenes de compras tener en cuenta que trabaja con estos parametros:

Hasta este paso la aplicacion ya deberia estar funcionando con normalidad.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
