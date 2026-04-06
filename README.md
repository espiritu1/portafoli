# Portafolio CV

Un sitio web de portafolio personal construido con React, TypeScript, tailwind y Vite. Este proyecto presenta un currículum vitae interactivo con secciones para información personal, experiencia laboral, estudios, tecnologías y más.

## Características

- **Acerca de mí**: Sección con avatar y descripción personal.
- **Experiencia**: Lista de experiencias laborales con detalles.
- **Estudios**: Información sobre educación y formación.
- **Tecnologías**: Iconos y lista de tecnologías dominadas.
- **Contacto**: Información de contacto con tooltips.
- **Modo oscuro**: Alternancia entre temas claro y oscuro.
- **Responsive**: Diseño adaptativo para diferentes dispositivos.

## Tecnologías Utilizadas

- **React 19**: Biblioteca para la construcción de interfaces de usuario.
- **TypeScript**: Superset de JavaScript con tipado estático.
- **Vite**: Herramienta de construcción rápida para desarrollo web.
- **Tailwind CSS**: Framework de CSS utilitario.
- **React Icons**: Biblioteca de iconos para React.
- **ESLint**: Herramienta de linting para mantener la calidad del código.

## Estructura del Proyecto

```
cv/
├── eslint.config.js
├── index.html
├── package.json
├── portafolio.code-workspace
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── robots.txt
└── src/
    ├── App.css
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── assets/
    │   └── img/
    └── Componets/
        ├── About/
        │   ├── About.tsx
        │   └── Avatar.tsx
        ├── Buttons/
        │   ├── ButtonCv.tsx
        │   └── ButtonDarkMode/
        │       ├── ButtonDarkMode.tsx
        │       └── index.ts
        ├── Card/
        │   ├── CardContacto.tsx
        │   └── ContactoItem/
        │       └── ContactoItem.tsx
        │   └── ToolTip/
        │       └── ToolTip.tsx
        ├── CV/
        ├── Descripcion/
        │   └── Descripcion.tsx
        ├── Disponible/
        │   └── Disponible.tsx
        ├── Estudios/
        │   └── Estudios.tsx
        ├── Experiencia/
        │   ├── Experiencia.tsx
        │   └── ExperienciaItem.tsx
        ├── Hooks/
        │   ├── elimiar.tsx
        │   ├── ThemeProvider.tsx
        │   ├── useTemeOriginal.ts
        │   └── useTheme.ts
        ├── Navbat/
        │   ├── index.ts
        │   └── Navbar.tsx
        └── Tecologias/
            ├── index.ts
            ├── Tecnologias.tsx
            └── iconos/
                ├── Bun.tsx
                ├── Css.tsx
                ├── GitHub.tsx
                ├── Html.tsx
                ├── Javascript.tsx
                ├── Npm.tsx
                ├── React.tsx
                ├── Tailwind.tsx
                └── Typescript.tsx
```

## Instalación

### Con npm

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd cv
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

### Con bun

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd cv
   ```

2. Instala las dependencias:
   ```bash
   bun install
   ```

## Uso

### Con npm

Para ejecutar el proyecto en modo desarrollo:
```bash
npm run dev
```

Para construir el proyecto para producción:
```bash
npm run build
```

Para previsualizar la construcción:
```bash
npm run preview
```

Para ejecutar el linter:
```bash
npm run lint
```

### Con bun

Para ejecutar el proyecto en modo desarrollo:
```bash
bun run dev
```

Para construir el proyecto para producción:
```bash
bun run build
```

Para previsualizar la construcción:
```bash
bun run preview
```

Para ejecutar el linter:
```bash
bun run lint
```

El servidor de desarrollo se iniciará en `http://localhost:5173`.


## Licencia

Este proyecto es privado y no tiene una licencia pública.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
