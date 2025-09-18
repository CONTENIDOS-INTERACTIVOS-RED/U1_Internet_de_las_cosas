<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Modelos de arquitectura en IoT'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Los modelos de arquitectura en IoT ofrecen marcos conceptuales que guían el diseño e implementación de sistemas complejos, estableciendo principios organizativos que determinan cómo interactúan los componentes para alcanzar objetivos funcionales. Estos modelos definen capas de abstracción, patrones de comunicación, roles funcionales y interfaces de integración, lo cual permite diseñar soluciones escalables, mantenibles y adaptables. Abordan retos clave como:
    
        .bg-color-5.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Interoperabilidad entre dispositivos de distintos fabricantes.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Flujo eficiente de datos entre capas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Distribución de carga entre edge y cloud.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Seguridad e integridad del sistema completo.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Con el tiempo, se ha pasado de modelos simples (como el de tres capas) a arquitecturas más sofisticadas que incorporan edge computing, fog computing y arquitecturas orientadas a servicios. La elección del modelo adecuado debe considerar factores como latencia, ancho de banda, recursos disponibles, seguridad y escalabilidad.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Modelos de referencia de IoT (OSI, 3 capas)
    
    p.mb-5 Los modelos de referencia son esenciales para estructurar arquitecturas IoT. Permiten separar responsabilidades y facilitar el diseño modular.

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Modelo OSI adaptado para IoT
              p Mantiene la separación por capas e incorpora gestión energética, procesamiento distribuido, identidad de dispositivos, enlaces intermitentes y tolerancia a fallos.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Modelo de tres capas
              p Divide el sistema en: capa de percepción (sensores/actuadores), capa de red (transmisión de datos) y capa de aplicación (procesamiento, visualización y control). Ha evolucionado para integrar subcapas como edge computing y orquestación de servicios.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 En sistemas de monitoreo, la capa de percepción incluye agentes que recopilan métricas, la capa de red se encarga de la agregación y envío seguro de datos, y la capa de aplicación procesa, analiza y visualiza información. Un caso típico es un sistema de Application Performance Monitoring (APM) que usa sensores de código para capturar trazas, redes que agregan datos, y aplicaciones que detectan cuellos de botella y recomiendan optimizaciones.
    
    h2(data-aos="fade-left") Ejercicio práctico
    p.mb-5  Diseñe un sistema APM siguiendo el modelo de referencia de tres capas para una aplicación de microservicios. 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p <b>Capa de percepción</b>: Instrumentar el código con bibliotecas de rastreo distribuido y configurar agentes que recojan métricas de latencia, rendimiento y errores en cada microservicio.
    
          .div(titulo="Paso 2")
            p <b>Capa de red</b>: Establecer colectores de telemetría que agreguen datos, implementen buffering ante picos de tráfico y usen protocolos eficientes para transmisión a los servicios analíticos.
    
          .div(titulo="Paso 3")
            p <b>Capa de aplicación</b>: Desarrollar servicios que correlacionen trazas, detecten anomalías, generen alertas y presenten métricas técnicas y de negocio mediante dashboards interactivos.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 <b>Resultado esperado</b>. Un sistema APM robusto que garantice visibilidad completa de aplicaciones distribuidas, mantenga separación funcional clara entre capas, facilite el desarrollo modular y permita escalar horizontalmente cada componente según la demanda.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Arquitectura de dispositivos IoT: Edge vs. Cloud
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-6.p-5(data-aos="fade-left").mb-3
          p.mb-0 La elección entre procesamiento en dispositivos edge o servicios cloud es una decisión arquitectónica crucial en IoT. Esta determina factores clave como latencia, consumo de ancho de banda, privacidad de datos, confiabilidad y costos operativos.
        p(data-aos="fade-left") Las arquitecturas actuales tienden a ser híbridas, combinando ambos enfoques. Se implementan sistemas inteligentes que deciden dinámicamente dónde procesar los datos según criterios como urgencia, sensibilidad o volumen. Esto mejora el rendimiento, reduce costos de transmisión y asegura privacidad cuando es necesaria. A continuación, se detallan las características distintivas de cada enfoque:

    .bg-full-width.bg-color-11
      .p-4.p-md-5
        TabsC.color-primario.mb-5
          .tabs-content.border.px-4.p-md-5.py-3(titulo="<em>Edge computing</em>" :icon="require('@/assets/bullets/4.svg')")
            .row.justify-content-center.align-items-center
              .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
                h4 <em>Edge computing</em>
                p Procesamiento local cercano a la fuente de datos. Ideal para datos críticos en tiempo real, operaciones que requieren baja latencia y filtrado inicial. Reduce la dependencia de la conectividad.
        
              .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema3/7.png', alt='')
        
          .tabs-content.border.px-4.p-md-5.py-3(titulo="<em>Cloud computing</em>" :icon="require('@/assets/bullets/4.svg')")
            .row.justify-content-center.align-items-center
              .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
                h4 <em>Cloud computing</em>
                p Procesamiento centralizado con recursos prácticamente ilimitados. Se utiliza para análisis complejos, <em>machine learning</em> a gran escala, almacenamiento y correlación entre fuentes múltiples.
        
              .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema3/8.png', alt='')
        
        .row.align-items-center.mb-5
          .col-lg-auto
            img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En proyectos de ingeniería de software, estas arquitecturas se aplican a sistemas de CI/CD. El procesamiento edge ejecuta validaciones de código y pruebas básicas inmediatas, mientras que el procesamiento en la nube realiza tareas más intensivas como testing de integración y análisis de seguridad, consolidando reportes y gestionando los lanzamientos (releases).
        
        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 Método y herramientas para el diseño y construcción de dispositivos IoT.
                      p.mb-0 Para conocer más sobre diseño y construcción de dispositivos IoT, le invitamos a ver el siguiente vídeo.  
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/dzMq4h3JT2g " target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right
        
        h2(data-aos="fade-left") Ejercicio práctico
        p.mb-5  Implemente un sistema híbrido edge-cloud para CI/CD automatizado de aplicaciones web.
        
        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/10.png", alt="").mb-4.mb-lg-0
          .col-lg-8
        
            AcordionA(tipo="b")
              .div(titulo="Paso 1")
                p <b>Validación local en edge</b>: Configurar dispositivos edge (como Raspberry Pi) para ejecutar validaciones de código en tiempo real, pruebas unitarias y builds incrementales, con caché local de dependencias para reducir el tiempo de compilación.
        
              .div(titulo="Paso 2")
                p <b>Procesamiento en cloud</b>: Establecer servicios en la nube que reciban notificaciones desde los dispositivos edge, ejecuten testing de integración completo, análisis de seguridad automatizado y generen artefactos para múltiples entornos.
        
              .div(titulo="Paso 3")
                p <b>Orquestación distribuida</b>: Desarrollar lógica de coordinación entre edge y cloud, implementar rollback automático basado en métricas de salud de las aplicaciones y mantener la sincronización de estado entre distintas ubicaciones.
        
        .row.align-items-center.mb-5
          .col-lg-auto
            img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 <b>Resultado esperado</b>. Un sistema CI/CD que reduzca significativamente los tiempos de feedback para desarrolladores mediante procesamiento edge inmediato, mantenga capacidades avanzadas de análisis e implementación global en la nube, optimice uso de ancho de banda mediante procesamiento distribuido inteligente, y garantice alta disponibilidad mediante redundancia geográfica y recuperación automática ante fallos.
        
        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 Interoperabilidad en IoT.
                      p.mb-0 Para conocer más sobre interoperabilidad en IoT, le invitamos a ver el siguiente vídeo. 
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/6P442GGIJuw  " target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Integración de sistemas IoT
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La integración de sistemas IoT es uno de los desafíos más complejos en el desarrollo de soluciones empresariales. Involucra la coordinación de múltiples subsistemas heterogéneos que pueden operar con diferentes:
    
        .bg-color-2.p-5(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Protocolos de comunicación
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Formatos de datos
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Modelos de seguridad
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Patrones operativos

    .bg-full-width.bg-color-12
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/13.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-1.p-5(data-aos="fade-left").mb-3
              p.mb-0 Esta integración va desde la conectividad física hasta la interoperabilidad semántica de los datos, incluyendo sincronización de procesos de negocio y gestión unificada de identidades y permisos. El objetivo es construir ecosistemas cohesionados que funcionen como un sistema único a pesar de estar compuestos por componentes de distintos fabricantes.
            p(data-aos="fade-left") Los enfoques actuales priorizan arquitecturas orientadas a servicios, patrones pub/sub y APIs estandarizadas que permiten acoplamiento débil y evolución independiente de los componentes. Las plataformas de integración modernas incluyen herramientas para:

        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-13.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema3/14.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 01
                  p.mb-0 Mapeo y transformación de datos

          .col-lg-4.mb-3.mb-lg-0
            .bg-color-13.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema3/15.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 02
                  p.mb-0 Organización de <em>workflows</em>
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-13.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema3/16.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 03
                  p.mb-0 Gestión de eventos

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/17.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Además, la investigación reciente se enfoca en integración semántica mediante el uso de ontologías y modelos de datos estandarizados. Esto facilita el intercambio de información entre sistemas con vocabularios y estructuras distintas, mejorando la interoperabilidad y reduciendo los costos de desarrollo.
        .bg-color-2.p-5(data-aos="fade-left")
          p.mb-0 En ingeniería de software, la integración se usa para consolidar datos de herramientas como Prometheus (métricas), ELK Stack (logs) y Jaeger (trazas) junto con sistemas de monitoreo de infraestructura. Esta consolidación permite crear dashboards unificados con análisis de causa raíz contextualizado.

    h2(data-aos="fade-left") Ejercicio práctico
    p.mb-5   Desarrolle un sistema de integración para correlacionar datos de múltiples herramientas de seguimiento en un entorno de microservicios. 
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/18.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p <b>Extracción y normalización</b>: Implementar conectores para herramientas como Prometheus, Elasticsearch y Jaeger. Usar sus APIs nativas para extraer datos, normalizar timestamps y metadatos, y publicar eventos en un bus de integración común.
          .div(titulo="Paso 2")
            p <b>Correlación de eventos</b>: Configurar reglas que identifiquen relaciones temporales y causales entre eventos, utilizando ventanas de tiempo y coincidencia de identificadores de transacción para vincular métricas, logs y trazas.
          .div(titulo="Paso 3")
            p <b>Análisis consolidado</b>: Desarrollar un motor de análisis que genere eventos de alto nivel, detecte patrones de degradación en múltiples componentes, y recomiende acciones de investigación priorizadas según su impacto.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 <b>Resultado esperado</b>. Un sistema de integración que reduzca significativamente el tiempo medio de detección y resolución de problemas al proporcionar visibilidad correlacionada de aplicaciones distribuidas, genere insights accionables combinando datos de múltiples fuentes especializadas, facilite la automatización de respuestas a incidentes mediante workflows inteligentes, y proporcione métricas consolidadas que reflejen el impacto real de problemas técnicos en objetivos de negocio.

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Middleware en IoT

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/19.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El middleware en IoT es una capa de software intermedia esencial que facilita la comunicación, integración y gestión entre dispositivos heterogéneos y aplicaciones empresariales. Su función principal es abstraer la complejidad técnica de protocolos de bajo nivel, ofreciendo interfaces uniformes que permiten a los desarrolladores enfocarse en la lógica de negocio.
    
        .bg-color-5.p-4(data-aos="fade-left").mb-4
          h5 Sus funciones clave incluyen:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Traducción de protocolos
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Enrutamiento inteligente de mensajes
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Gestión de identidades de dispositivos
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 <em>Buffering</em> de datos para conectividad intermitente
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Aplicación de políticas de seguridad y calidad de servicio
        p Con la evolución tecnológica, el middleware ha incorporado capacidades como:

    .bg-full-width.bg-color-12
      .p-4.p-md-5
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/20-1.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Procesamiento de eventos complejos
                p.text-center Análisis en tiempo real para detectar patrones relevantes en flujos de datos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/20-1.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Distribución de flujos de trabajo
                p.text-center Orquestación dinámica de tareas y servicios en sistemas distribuidos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/20-1.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Gestión del ciclo de vida de dispositivos
                p.text-center Registro, actualización, monitoreo y retiro de dispositivos IoT.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/20-1.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Analítica en tiempo real
                p.text-center Transformación de datos raw en información accionable instantánea.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/20-1.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Arquitectura de microservicios
                p.text-center Escalabilidad horizontal, tolerancia a fallos y autorrecuperación.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/20-1.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Middleware cognitivo
                p.text-center Uso de inteligencia artificial para predicción de fallos, optimización dinámica y adaptabilidad contextual.
    
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema3/20.png', alt='')
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 En software empresarial, el middleware se utiliza para correlacionar métricas técnicas (CPU, memoria, red) con indicadores de usuario (tiempo de respuesta, conversión) y métricas de negocio (ingresos, transacciones). Esto permite generar alertas inteligentes priorizadas según su impacto empresarial, mejorando la visibilidad del rendimiento de forma integral.
    
    h2(data-aos="fade-left") Ejercicio práctico 
    p.mb-5 Desarrolle un <em>middleware</em> IoT para correlacionar métricas técnicas con KPIs de negocio en una plataforma de <em>e-commerce</em>. 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/21.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p <b>Adaptación de fuentes</b>: Crear adaptadores que conecten con monitores de infraestructura, analítica web, sistemas de pagos y CRM. Normalizar los datos y establecer mappings semánticos entre métricas técnicas y de negocio.
          .div(titulo="Paso 2")
            p <b>Reglas de correlación</b>: Configurar un motor que relacione eventos técnicos con impactos de negocio. Calcular métricas derivadas como “pérdida de ingresos por latencia de API” o “impacto en conversión por errores de checkout”, basadas en modelos matemáticos.
          .div(titulo="Paso 3")
            p <b>Alertas inteligentes y visualización</b>: Desarrollar servicios que generen alertas contextualizadas con recomendaciones priorizadas y dashboards ejecutivos que traduzcan métricas técnicas a indicadores comprensibles por áreas de negocio.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 <b>Resultado esperado</b>. Un middleware que transforme el monitoreo técnico tradicional en una herramienta de gestión de negocio, proporcione visibilidad del impacto real de problemas de infraestructura en objetivos empresariales, facilite la toma de decisiones informadas sobre inversiones en tecnología, y mejore la comunicación entre equipos técnicos y de negocio mediante un lenguaje común basado en métricas compartidas.


    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Modelos de comunicación en la arquitectura de IoT

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/22.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Los modelos de comunicación en arquitecturas IoT establecen los patrones y protocolos mediante los cuales dispositivos, servicios y aplicaciones intercambian información. Estos modelos son fundamentales para aspectos como:
    
        .bg-color-2.p-4(data-aos="fade-left").mb-5
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Latencia
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Rendimiento (<em>throughput</em>)
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Confiabilidad de entrega
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Escalabilidad
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Eficiencia en el uso de red
        p La elección del modelo de comunicación tiene un impacto directo en el rendimiento global del sistema y su capacidad para adaptarse a cargas variables y crecimiento futuro.

    .bg-full-width.bg-color-9
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/23.svg" alt="" style="width: 90px")
              h5.text-center Solicitud - respuesta
              p.mb-0.text-center Modelo síncrono. Ideal para validaciones o consultas puntuales.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/24.svg" alt="" style="width: 90px")
              h5.text-center Publicación - suscripción
              p.mb-0.text-center Modelo asincrónico. Útil para notificaciones y actualizaciones automáticas.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/25.svg" alt="" style="width: 90px")
              h5.text-center <em>Streaming</em> de datos
              p.mb-0.text-center Flujo continuo de datos. Ideal para monitoreo en tiempo real y logs.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/26.svg" alt="" style="width: 90px")
              h5.text-center Comunicación basada en eventos
              p.mb-0.text-center Reacciona a cambios de estado. Soporta arquitecturas reactivas y automatización.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/27.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Modelos modernos incluyen arquitecturas reactivas, modos push/pull, y protocolos adaptativos que ajustan frecuencia y compresión según el contexto de red. Además, la investigación reciente se centra en modelos inteligentes impulsados por machine learning que predicen tráfico, optimizan rutas de datos y detectan anomalías, mejorando la calidad del servicio y la seguridad.
    
        .bg-color-10.p-5(data-aos="fade-left")
          p.mb-0 En software, estos modelos se emplean en entornos GitOps para desplegar microservicios. Se usan múltiples patrones según la tarea: pub-sub para configuración, streaming para logs, request-response para verificaciones, y eventos para coordinar releases.
    
    h2(data-aos="fade-left") Ejercicio práctico
    p.mb-5  Implemente un sistema GitOps distribuido que utilice múltiples modelos de comunicación para gestionar despliegue de microservicios. 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/28.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p <b>Modelo publish-subscribe</b>: Configurar eventos desde repositorios Git que sean consumidos por agentes distribuidos en múltiples clusters, usando filtros de suscripción para que cada agente reciba solo lo relevante a su entorno.
          .div(titulo="Paso 2")
            p <b><em>Streaming</em> de datos</b>: Implementar recolección continua de métricas, logs y eventos de infraestructura con técnicas de backpressure y buffering para evitar pérdidas de información durante picos de carga.
          .div(titulo="Paso 3")
            p <b>Modelo <em>request-response</em></b>: Desarrollar validaciones de controles de salud y precondiciones antes de implementar, asegurando consistencia de estado entre componentes.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 <b>Resultado esperado</b>. Un sistema GitOps robusto que optimice el uso de ancho de banda mediante modelos de comunicación apropiados para cada tipo de interacción, proporcione visibilidad en tiempo real del estado de la implementación asignada, facilite reversión (rollback) automática ante fallos detectados, mantenga sincronización consistente de configuraciones entre múltiples entornos y regiones geográficas.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Rol del middleware en IoT
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Rol del middleware en IoT, donde se aborda la importancia del middleware como capa intermedia clave en ecosistemas de Internet de las Cosas (IoT).
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Rol del middleware en IoT
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/29.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/280029?page=1" target="_blank" rel="noopener noreferrer") Domínguez Mínguez, T. (2020). Desarrollo de aplicaciones IoT en la nube para Arduino y ESP8266: (1 ed.). Marcombo. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/281469?page=1" target="_blank" rel="noopener noreferrer") Domínguez Mínguez, T. (2021). Google Assistant: desarrollo de aplicaciones IoT para Arduino y ESP8266: (1 ed.). Marcombo. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/58379?page=1" target="_blank" rel="noopener noreferrer") Llaneza González, P. (2018). Seguridad y responsabilidad en la internet de las cosas (IoT): ( ed.). LA LEY Soluciones Legales S.A. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/233414" target="_blank" rel="noopener noreferrer") Rosa, J. M. D. L. (2021). De la micro a la nanoelectrónica: impulsando la transformación digital: (1 ed.). Los libros de la Catarata. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/280532?page=1" target="_blank" rel="noopener noreferrer") Ruiz-Velasco Sánchez, E. & Bárcenas López, J. (2025). Educatrónica tecnología de inteligencia artificial (robótica, programación e internet de las cosas): (1 ed.). Newton Edición y Tecnología Educativa. 


            


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/5eu5o1BlQiE " target="_blank" rel="noopener noreferrer") Gunnar Wolf. (2025, 13 de mayo). Aspectos de sistemas operativos en los dispositivos IoT. [Vídeo] YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/vqloa1THqng " target="_blank" rel="noopener noreferrer") LACNIC RIR. (2018, 27 de septiembre). Panel: Despliegue de IoT, Conectividad y Soluciones – el caso Argentina. [Vídeo] YouTube. 





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
