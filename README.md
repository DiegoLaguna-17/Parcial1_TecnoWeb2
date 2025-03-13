Proyecto Backend con Node.js, Express y MongoDB
Descripción
Este proyecto es un backend desarrollado en Node.js utilizando Express.js y MongoDB Atlas como base de datos. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre las colecciones Usuarios y Productos en la base de datos Sample.
Requisitos Previos
Antes de ejecutar este proyecto, asegúrate de tener instalados:
Node.js (versión 14 o superior)
MongoDB Atlas (base de datos en la nube)
Instalación y Configuración


2. Instalar dependencias
Ejecuta el siguiente comando para instalar las dependencias necesarias:
npm init -y
npm install express mongoose dotenv cors nodemon

3. Configuración de MongoDB Atlas
Crear una cuenta en MongoDB Atlas en https://www.mongodb.com/atlas/database


Crear un nuevo proyecto y cluster en MongoDB Atlas.


Agregar un usuario con permisos adecuados y configurar la base de datos.


Generar la cadena de conexión y configurar el archivo .env con la siguiente variable:

 MONGO_URI=tu_url_de_conexion_a_mongodb_atlas
PORT=5000


4. Estructura del Proyecto
proyecto
│── config
│   └── db.js      # Archivo de conexión a MongoDB Atlas
│── models
│   ├── Producto.js  # Esquema del modelo Producto
│   ├── Usuario.js # Modelo de usuario
│── routes
│   ├── contadores.js  # Rutas para contar documentos y operaciones
│   ├── productos.js   # Rutas CRUD para Productos
│   ├── usuarios.js # Rutas CRUD para Usuarios
|     |------operaciones.js   #middleware para las operaciones
│── .env              # Variables de entorno
│── app.js             # Configuración del servidor Express
│── server.js          # Archivo de arranque del servidor
│── package.json       # Configuración de dependencias y scripts de npm
│── README.md          # Documentación del proyecto


3. Uso de MongoDB Atlas
Para utilizar MongoDB Atlas:
Crear un nuevo proyecto en MongoDB Atlas.


Crear un nuevo cluster en la nube.


Agregar un usuario y contraseña para la base de datos.


Obtener la cadena de conexión de MongoDB Atlas y agregarla al archivo .env de este proyecto.

 MONGO_URI=mongodb+srv://usuario:contraseña@tu-cluster.mongodb.net/sample


5. Arranque del Servidor
Asegúrate de tener MongoDB Atlas configurado y tu cadena de conexión en .env


Ejecuta el siguiente comando en la terminal:

 npm start


