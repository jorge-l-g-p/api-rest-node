# API REST con node.js y firebase

## Descripción

API REST para gestion de productos desarrollada en node.js y express.

## Instalación

1. Clonar el repositorio.
2. Instalar dependecias:

```bash
npm install

```

3. configurar variables de entorno:

```bash
#copiar el archivo de example y completar losdatos requeridos
cp .env-example .env
```

Luego editar el archivo ".env" con los valores correspondientes par tu entorno. 4. Ejecutar en modo desarrrollo:

```bash
 npm run dev
```

## Documentación de la API

### obtener todos los productos

- **GET** "/products"
- **Descripcion :** Devuelve la lista de todos los productos.
- **Respuesta/ejemplo:**

```json
[
  { "id": 1, "name": "Camiseta Deportiva", "price": 150 },
  { "id": 2, "name": "Zapato Running", "price": 1200 },
  { "id": 3, "name": "Mochila Escolar", "price": 350 }
]
```

### Buscar productos por nombre

- **GET** ' /products/search?name=palabra'
- **Descripcion:** Devuelve los productos cuyo nombre contiene la palabra indicada.
  **Parametros:**
- 'name' (query, requerido): texto a buscar = nombre del producto.
  **Ejemplo de uso:** ' /products/search?name=camiseta'
  **Respuesta ejemplo:**

```json
[{ "id": 1, "name": "camiseta deportiva", "price": 150 }]
```
