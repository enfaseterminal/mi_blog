---
layout: post
title: Como crear un sitemap con Jekyll
subtitle: Si utilizas el CMS Jekyll podrás generar un sitemap para agilizar la indexación de tus páginas en los principales rastreadores
cover-img: /imagenes/sitemaps.jpg
thumbnail-img: /imagenes/sitemaps.jpg
share-img: /imagenes/sitemaps.jpg
tags: [CMS, MD, Jekyll, sitemap, SEO, Markdown, XML,YAML]
categorias: Sistema de Gestión de Contenidos
author: David P.
---

##### En la raíz de tu proyecto Jekyll crea un archivo llamado sitemap.xml. Añade el siguiente contenido al archivo:

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  {% for page in site.pages %}
    {% if page.sitemap != false %}
      <url>
        <loc>{{ site.url }}{{ page.url }}</loc>
        <lastmod>{{ page.date | date_to_xmlschema }}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
      </url>
    {% endif %}
  {% endfor %}
  {% for post in site.posts %}
    <url>
      <loc>{{ site.url }}{{ post.url }}</loc>
      <lastmod>{{ post.date | date_to_xmlschema }}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.5</priority>
    </url>
  {% endfor %}
</urlset>
```

Esto automatizará la creación de un mapa del sitio con los archivos que se encuentren las paginas estáticas definidas en las variables: 

- page
- post

Que en la configuración de Jekyll deberían ser donde se encuentran alojados las paginas estáticas y las publicaciones o post.

Si es requerido que alguna dirección sea incluida y no es generada en la automatización, se puede incluir entre el código para se añada al sitemap generado.

```

---

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
  <loc>https://www.enfaseterminal.com/404.html</loc>
  <lastmod/>
  <changefreq>weekly</changefreq>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://www.enfaseterminal.com/aboutme</loc>
  <lastmod/>
  <changefreq>weekly</changefreq>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://www.enfaseterminal.com/feed.xml</loc>
  <lastmod/>
  <changefreq>weekly</changefreq>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://www.enfaseterminal.com/index.html</loc>
  <lastmod/>
  <changefreq>weekly</changefreq>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://www.enfaseterminal.com/sitemap.xml</loc>
  <lastmod/>
  <changefreq>weekly</changefreq>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://www.enfaseterminal.com/tags.html</loc>
  <lastmod/>
  <changefreq>weekly</changefreq>
  <priority>0.5</priority>
</url>
{% for page in site.pages %}

```

Os dejo un ejemplo, estas url han de ser incluidas entre:

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
```
y

```
{% for page in site.pages %}
```

El formato ha de ser 

```
<loc>Direción web que quieres incluir</loc>
  <lastmod/>
  <changefreq>Con que frecuencia se actualiza</changefreq>
  <priority>la prioridad</priority>
</url>
<url>

```

 

[Formato XML de Sitemaps]: https://www.sitemaps.org/es/protocol.html	"Formato XML de Sitemaps"

##### Asegúrate de que tu archivo `_config.yml` tenga la URL de tu sitio configurada correctamente. Si no es así deberás incluir la siguiente linea:

```

url: "https://www.tusitio.com"

```

##### Para que al generar el archivo sitemap.xml quieres excluir ciertas páginas que no quieres que sean rastreadas, has de incluir `sitemap: false` en la cabecera (front matter) de esas páginas:

```
---
sitemap: false
---

```

