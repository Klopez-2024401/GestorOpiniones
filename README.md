****Gestor de Opiniones****

Este es un sistema de gestor de opiniones desarrollado con Node.js,
Express y MongoDB para la gestion de opiniones tipo publicaciones con autenticacion y control de acceso mediante JWT.

****Tecnologías utilizadas****

*Node.js*
*Express*
*MongoDB + Mongoose*
*JWT (jsonwebtoken)*
*bcryptjs*
*Helmet*
*Express Rate Limit*
*Cors*
*Dotenv*
*Morgan*

****Configuración inicial****

Instalacion de dependencais
        pnpm install

Ejecutar el servidor
        pnpm run dev

Servidor activo en 
    https://localhost:3006

---------------------------------------

Registro de usuario

**Post**
http://localhost:3006/api/users/register

{
  "username": "kevin",
  "email": "kevin@gmail.com",
  "password": "123456"
}

Login

**Post**
http://localhost:3006/api/users/login

{
  "login": "kevin@gmail.com",
  "password": "123456"
}

---------------------------------------

Toke

Key: x-token
Value: Tu token

---------------------------------------

Publicaciones

**Post**
http://localhost:3006/api/posts

Headers:
Poner tu token despues

{
  "title": "Mi primera opinión",
  "category": "General",
  "content": "Este es mi primer post"
}

**Put**
http://localhost:3006/api/posts/:id

Headers:
Poner tu token despues

{
  "title": "Opinión editada",
  "category": "Actualizada",
  "content": "Contenido modificado"
}

**Delete**
http://localhost:3006/api/posts/:id

Headers:
Poner tu token despues eleminar

---------------------------------------

Comentario

**Post**
http://localhost:3006/api/comments

Headers:
Poner tu token despues

{
  "post": "69940164340b454890fa04cb",
  "content": "Estoy de acuerdo con esta opinión"
}

**Put**
http://localhost:3006/api/comments/:id

Headers:
Poner tu token despues

{
  "content": "Comentario editado"
}

**Delete**
http://localhost:3006/api/comments/:id

Headers:
Poner tu token despues eleminar
