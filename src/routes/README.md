# Routes Configuration

Este archivo centraliza todas las rutas de la aplicación usando React Router v6.

## Estructura

```
src/
├── routes/
│   └── index.tsx          # Configuración de rutas
├── pages/
│   ├── Home/
│   │   └── index.tsx
│   ├── About/
│   │   └── index.tsx
│   └── NotFound/
│       └── index.tsx
└── components/
    └── Layout/
        └── index.tsx      # Layout principal con Outlet
```

## Agregar una nueva ruta

1. Crear la página en `src/pages/NombrePagina/index.tsx`
2. Importarla en `src/routes/index.tsx`
3. Agregarla al array de rutas:

```tsx
{
  path: 'nueva-ruta',
  element: <NuevaPagina />,
}
```

## Ejemplo de ruta con parámetros

```tsx
{
  path: 'users/:id',
  element: <UserDetailPage />,
}
```

## Rutas anidadas

Las rutas hijas se definen en el array `children` del layout:

```tsx
{
  path: '/',
  element: <Layout />,
  children: [
    { index: true, element: <HomePage /> },
    { path: 'about', element: <AboutPage /> },
  ],
}
```
