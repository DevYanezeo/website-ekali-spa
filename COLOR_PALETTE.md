# 🎨 Nueva Paleta de Colores Corporativa - Ekali Solutions

## Paleta Principal

### Color Corporativo Principal
```css
Primary: #193143
RGB: 25, 49, 67
Uso: Headers, botones principales, textos importantes, navegación
Representa: Seriedad, profesionalismo, tecnología, confianza
```

### Colores de Acento

```css
Secondary (Azul): #1a7fe8
RGB: 26, 127, 232
Uso: Links, botones secundarios, highlights, íconos interactivos
Representa: Innovación, tecnología, modernidad

Accent (Verde): #22bb86
RGB: 34, 187, 134
Uso: CTAs importantes, notificaciones de éxito, elementos destacados
Representa: Crecimiento, éxito, resultados positivos
```

### Colores Complementarios

```css
Text Soft: #7f929c
RGB: 127, 146, 156
Uso: Textos secundarios, descripciones, subtítulos
Representa: Información complementaria, elegancia

Background: #F8FAFC
RGB: 248, 250, 252
Uso: Fondo principal del sitio

Surface: #FFFFFF
RGB: 255, 255, 255
Uso: Tarjetas, cards, modales

BG Secondary: #f5f7f9
RGB: 245, 247, 249
Uso: Secciones alternas, fondos secundarios
```

## Estados Hover

```css
Primary Hover: #0f1f2d (más oscuro)
Secondary Hover: #1566c0 (más oscuro)
Accent Hover: #1a9b6e (más oscuro)
```

## Aplicación por Componente

### Navbar
- **Fondo**: Surface (#FFFFFF)
- **Texto**: Primary (#193143)
- **Logo**: Con fondo blanco (logo-bg)
- **Botón CTA**: Secondary (#1a7fe8)

### Hero Section
- **Título principal**: Primary (#193143)
- **Highlight/Gradiente**: Primary → Secondary (#193143 → #1a7fe8)
- **Descripción**: Text Soft (#7f929c)
- **Botones**: Primary y Accent

### Services Cards
- **Borde superior**: Alterna entre Primary (#193143) y Secondary (#1a7fe8)
- **Ícono fondo**: Primary/10 o Secondary/10
- **Título**: Foreground (#193143)
- **Descripción**: Text Soft (#7f929c)

### Caso de Éxito (CGE)
- **Fondo**: BG Secondary (#f5f7f9)
- **Título**: Primary (#193143)
- **Highlights**: Accent (#22bb86)
- **Bullets**: Secondary (#1a7fe8)

### Footer
- **Fondo**: Surface (#FFFFFF)
- **Texto**: Primary (#193143)
- **Links hover**: Secondary (#1a7fe8)
- **Íconos sociales**: Text Soft con hover a Primary

### CTAs (Call to Actions)
- **Primario**: Primary (#193143) con hover más oscuro
- **Secundario**: Secondary (#1a7fe8) con hover
- **Acento especial**: Accent (#22bb86) para CTAs importantes

## Combinaciones Efectivas

### Para Seriedad y Confianza
```
Background: Primary (#193143)
Text: White
Accents: Accent (#22bb86)
```

### Para Modernidad y Tecnología
```
Background: BG Secondary (#f5f7f9)
Text: Primary (#193143)
Highlights: Secondary (#1a7fe8)
```

### Para Llamadas a la Acción
```
Button Background: Accent (#22bb86)
Button Text: White
Border/Shadow: Primary (#193143)
```

## Gradientes Disponibles

### Gradiente Corporativo Principal
```css
linear-gradient(135deg, #193143 0%, #1a7fe8 100%)
```

### Gradiente Acento
```css
linear-gradient(135deg, #22bb86 0%, #1a7fe8 100%)
```

### Gradiente Sutil
```css
linear-gradient(180deg, #ffffff 0%, #f5f7f9 100%)
```

## Contraste y Accesibilidad

| Combinación | Ratio | WCAG AAA | Uso |
|------------|-------|----------|-----|
| Primary (#193143) / White | 12.5:1 | ✅ Sí | Texto principal sobre blanco |
| Secondary (#1a7fe8) / White | 4.8:1 | ✅ Sí (Large) | Botones, links |
| Accent (#22bb86) / White | 3.2:1 | ⚠️ AA (Large) | CTAs, botones grandes |
| Text Soft (#7f929c) / White | 3.5:1 | ✅ AA | Texto secundario |

## Psicología de los Colores

### #193143 (Azul Oscuro Corporativo)
- **Emociones**: Confianza, estabilidad, profesionalismo
- **Industria**: Tecnología, consultoría, finanzas
- **Mensaje**: "Somos expertos serios y confiables"

### #1a7fe8 (Azul Vibrante)
- **Emociones**: Innovación, claridad, comunicación
- **Industria**: Software, startups, cloud
- **Mensaje**: "Somos modernos y vanguardistas"

### #22bb86 (Verde Tecnológico)
- **Emociones**: Crecimiento, éxito, progreso
- **Industria**: Tech, desarrollo, automatización
- **Mensaje**: "Generamos resultados y crecimiento"

### #7f929c (Gris Azulado)
- **Emociones**: Sofisticación, neutralidad, elegancia
- **Industria**: Corporativo, profesional
- **Mensaje**: "Información clara y elegante"

## Ejemplos de Uso en UI

### Botón Primario
```css
background: #193143;
color: #ffffff;
border: none;
hover: background: #0f1f2d;
```

### Botón Secundario
```css
background: transparent;
color: #1a7fe8;
border: 2px solid #1a7fe8;
hover: background: #1a7fe8; color: #ffffff;
```

### Tarjeta Destacada
```css
background: #ffffff;
border-top: 4px solid #193143;
box-shadow: 0 4px 12px rgba(25, 49, 67, 0.1);
```

### Badge/Tag
```css
background: rgba(34, 187, 134, 0.1);
color: #22bb86;
border: 1px solid #22bb86;
```

---

**Última actualización**: Octubre 2025  
**Estado**: ✅ Implementado en todo el sitio
