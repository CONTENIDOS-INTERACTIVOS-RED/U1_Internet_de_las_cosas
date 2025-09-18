<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Protocolos clave (MQTT, CoAP)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 Los protocolos de comunicación especializados para IoT han revolucionado la forma en que los dispositivos inteligentes intercambian información en redes distribuidas. Diseñados para operar eficientemente en entornos con limitaciones de ancho de banda, procesamiento y energía, estos protocolos permiten mantener comunicaciones confiables optimizando los recursos del sistema. Cada protocolo ha sido desarrollado para resolver desafíos específicos en la comunicación máquina a máquina (M2M). Por ejemplo:
    
        .bg-color-5.p-4(data-aos="fade-left").mb-5
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 <b>MQTT</b> se destaca por su arquitectura publicar-suscribir, ideal para comunicación asíncrona.

            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 <b>CoAP</b> emplea un modelo RESTful optimizado para dispositivos con recursos limitados.

            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 <b>HTTP/HTTPS</b> ofrece compatibilidad con infraestructuras web existentes.

            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 <b>BLE</b> (Bluetooth Low Energy) y Zigbee están diseñados para comunicaciones de corto alcance con muy bajo consumo energético.
        p La elección adecuada del protocolo impacta directamente en el rendimiento, la escalabilidad y la eficiencia energética de una solución IoT. A continuación, se presentan las características fundamentales de los protocolos MQTT y CoAP, seguidas de un análisis comparativo:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/2.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 MQTT (<em>Message Queuing Telemetry Transport</em>)
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Basado en el modelo publicar-suscribir.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Usa TCP como protocolo de transporte.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Ideal para redes inestables y sistemas con bajo ancho de banda.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Muy utilizado en aplicaciones empresariales y sistemas con muchos sensores.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/3.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 CoAP (<em>Constrained Application Protocol</em>)
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Basado en el modelo RESTful.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Usa UDP como protocolo de transporte.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Diseñado para dispositivos con recursos limitados.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Eficiente en comunicaciones de tipo request/response.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/4.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 En las secciones siguientes se analizarán más a fondo las aplicaciones prácticas de MQTT en sistemas empresariales IoT, las ventajas de CoAP en dispositivos restringidos, y la implementación de otros protocolos como HTTP/HTTPS, BLE y Zigbee. Finalmente, se presentará una comparación detallada entre MQTT y CoAP para apoyar decisiones fundamentadas en proyectos de ingeniería de software.


    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] MQTT: Características y usos
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/5.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Message Queuing Telemetry Transport (MQTT) es un protocolo de mensajería ligero, diseñado para comunicaciones en redes con limitaciones de ancho de banda y dispositivos con recursos computacionales restringidos. Opera bajo una arquitectura publicar-suscribir, donde los productores de datos y los consumidores están completamente desacoplados. Un agente (broker) intermedia la distribución de mensajes.
        p La eficiencia de MQTT radica en su capacidad para mantener conexiones persistentes con mínima sobrecarga de protocolo, lo cual reduce significativamente el consumo energético en comparación con protocolos tradicionales como HTTP.
    
        .bg-color-1.p-4(data-aos="fade-left").mb-5
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Según Domínguez Mínguez (2020), en aplicaciones IoT con dispositivos embebidos, MQTT ha demostrado ser eficaz en escenarios donde la confiabilidad y la eficiencia energética son críticas. Su estructura admite múltiples niveles de Calidad de Servicio (QoS), que van desde la entrega sin confirmación hasta la entrega garantizada con duplicación controlada. Esto permite adaptar su comportamiento según los requisitos de cada aplicación, optimizando el equilibrio entre confiabilidad y eficiencia.
        p Estudios muestran que MQTT puede reducir el consumo de ancho de banda hasta en un 90% respecto a HTTP en aplicaciones de telemetría.
    
    .bg-full-width.bg-color-12
      .p-4.p-md-5
        .titulo-figura.mb-4
          h5 Tabla 1.
          span Características de MQTT
        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr
                th.bg-color-14.text-center.text-white Aspecto
                th.bg-color-14.text-center.text-white Características de MQTT
            tbody.bg-color-4
              tr
                td Arquitectura
                td Publicar-suscribir con intermediario (broker)
              tr
                td Consumo energético
                td Muy bajo, ideal para dispositivos IoT
              tr
                td Calidad de Servicio (QoS)
                td 0: sin confirmación, 1: al menos una vez, 2: exactamente una vez
              tr
                td Eficiencia en ancho de banda
                td Hasta 90% de ahorro comparado con HTTP
              tr
                td Persistencia de conexión
                td Conexiones duraderas con mínima sobrecarga
              tr
                td Aplicaciones típicas
                td IoT, monitoreo industrial, sistemas distribuidos

        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 MQTT
                      p.mb-0 Para ampliar el concepto de MQTT, le invitamos a ver el siguiente webinar. 
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/ZMnSWYk0aSo " target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right
    
    h2(data-aos="fade-left").mb-5 Aplicaciones en Ingeniería de software

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/7.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En contextos como el monitoreo industrial, MQTT facilita la transmisión eficiente de datos desde sensores distribuidos hacia plataformas centralizadas. Por ejemplo, un sistema de gestión de calidad del aire en un campus universitario puede usar sensores IoT para publicar datos sobre dióxido de carbono, temperatura y humedad a través de un agente MQTT.
    
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 Sistemas específicos pueden suscribirse a los temas que les conciernen: el sistema de climatización accedería solo a datos de temperatura, mientras que el de alertas se enfocaría en niveles de contaminación críticos.
    
    h2(data-aos="fade-left") Aplicación práctica

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/8.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 Para implementar una solución básica con MQTT:
        ol.lista-ol
          li 
            span.text-bold 1. 
            | <b>Instalar el agente MQTT</b>, como Mosquitto, en el servidor de desarrollo.
          li 
            span.text-bold 2. 
            | <b>Simular un sensor</b> que publique datos de temperatura cada 30 segundos:
            p.ms-4.mt-3 mosquitto_pub -h localhost -t campus/edificioA/aula101/temperatura -m "22.5"
          li 
            span.text-bold 3.
            | <b>Implementar un suscriptor</b> que procese estos datos en tiempo real: bash
            p.ms-4.mt-3 mosquitto_sub -h localhost -t campus/edificioA/+/+/temperatura -v
          li 
            span.text-bold 4.
            | El uso del comodín (+) permite suscribirse a múltiples sensores simultáneamente, lo cual resalta la flexibilidad del sistema jerárquico de temas en MQTT.
    
    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2]  CoAP: Características y ventajas

    .bg-full-width.bg-color-12
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/9.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Constrained Application Protocol (CoAP) es un protocolo diseñado específicamente para dispositivos con grandes limitaciones de memoria, procesamiento y energía, comúnmente denominados dispositivos restringidos. Implementa un modelo RESTful similar a HTTP, pero optimizado para operar eficientemente sobre UDP, reduciendo significativamente la sobrecarga de comunicación y el consumo energético.
        
            .bg-color-5.p-4(data-aos="fade-left").mb-5
              p.mb-0 Entre sus características avanzadas se encuentran el descubrimiento automático de recursos, la observación de recursos para notificaciones asíncronas y el soporte nativo para multidifusión. Estas cualidades lo convierten en una opción ideal para redes de sensores densas y aplicaciones máquina a máquina de gran escala.
            p La arquitectura de CoAP ofrece ventajas distintivas en escenarios donde la eficiencia energética es prioritaria. Domínguez Mínguez (2021) documenta en sus investigaciones sobre sistemas IoT de ultra bajo consumo que el protocolo emplea un esquema de confirmación opcional, lo que permite balancear confiabilidad con eficiencia energética. Su modo no confirmado reduce drásticamente el tráfico de red, mientras que mecanismos como el bloqueo inteligente para transferencia de datos grandes y el soporte para almacenamiento temporal intermediario optimizan el rendimiento en redes con latencia variable y conectividad intermitente, típicas de entornos IoT. Según estos estudios, CoAP puede reducir el consumo energético hasta en un 70 % comparado con HTTP tradicional.

        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 CoAP
                      p.mb-0 Para ampliar el concepto sobre CoAP, le invitamos a ver el siguiente vídeo.  
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/0llAm_uzR0Q " target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right
    
    h2(data-aos="fade-left").mb-5 Aplicaciones en ingeniería de software

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema4/10.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") CoAP resulta útil en sistemas de automatización doméstica donde múltiples dispositivos de bajo consumo requieren comunicación eficiente y confiable. Por ejemplo, en un sistema inteligente de iluminación, cada luminaria con conectividad WiFi limitada puede exponer recursos REST como "/luz/estado" y "/luz/intensidad". Un controlador central utiliza peticiones CoAP GET y PUT, y puede observar el estado de las luces mediante CoAP observe, recibiendo notificaciones automáticas al cambiar el estado, sin necesidad de sondeo continuo. Esto se traduce en un ahorro energético significativo frente a soluciones basadas en HTTP.
    
    h2(data-aos="fade-left").mb-5 Aplicación práctica

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/11.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-5.p-4(data-aos="fade-left")
          h5.mb-0 Para experimentar con CoAP:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Instale la librería libcoap y configure un servidor básico que exponga un recurso de temperatura.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Ejecute coap-server en el puerto 5683 y defina el recurso "/temperatura" con valores simulados.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p Desde un cliente, realice una petición GET con:
            p.ms-4.bg-color-white.p-2 coap-client -m get coap://localhost/temperatura
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p Para implementar observación, use:
            p.ms-4.bg-color-white.p-2.mb-0 coap-client -m get -s 10 coap://localhost/temperatura -o observe.log
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/4.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 El servidor enviará actualizaciones automáticas cada vez que cambie el valor de temperatura, y el cliente registrará todas las notificaciones en el archivo de registro. Este ejemplo demuestra la eficiencia del mecanismo de observación para monitoreo continuo sin sondeo.
    
    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3]  HTTP/HTTPS para IoT
    
    .bg-full-width.bg-color-15
      .p-4.p-md-5
        p.mb-5 La implementación de HTTP/HTTPS en contextos IoT presenta características únicas que difieren significativamente de su uso en aplicaciones web tradicionales, principalmente debido a las restricciones computacionales y energéticas de los dispositivos conectados. HTTP en IoT requiere optimizaciones específicas, como:

        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-13.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema4/12.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 01
                  p.mb-0 Conexiones persistentes.

          .col-lg-4.mb-3.mb-lg-0
            .bg-color-13.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema4/13.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 02
                  p.mb-0 Compresión de cabeceras.
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-13.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema4/14.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 03
                  p.mb-0 Técnicas de almacenamiento temporal agresivo.

        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/15.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") Estas medidas buscan minimizar la sobrecarga de comunicación. Por su parte, HTTPS añade una capa adicional de complejidad debido a los requerimientos criptográficos del protocolo de enlace TLS, lo que puede representar un desafío significativo para dispositivos con procesadores de baja potencia y memoria limitada. Las ventajas principales del uso de HTTP/HTTPS en IoT son:
        
            .bg-color-3.p-4.mb-5(data-aos="fade-left")
              ul.lista-ul--color.text-white.mb-0
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-16
                  p.mb-0 Interoperabilidad con infraestructuras web existentes.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-16
                  p.mb-0 Facilidad de integración con APIs REST convencionales.
            p Esto permite el desarrollo de aplicaciones híbridas que combinan dispositivos IoT con servicios web tradicionales. Según Domínguez Mínguez (2020), los avances recientes han resaltado la necesidad de técnicas de optimización específicas, como:

        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/16.svg" alt="" style="width: 90px")
              h5.text-center HTTP/2 con compresión HPACK
              p.mb-0.text-center Reduce latencia y consumo de ancho de banda
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/17.svg" alt="" style="width: 90px")
              h5.text-center Multiplexación de flujos
              p.mb-0.text-center Permite múltiples transmisiones simultáneas por una sola conexión
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/18.svg" alt="" style="width: 90px")
              h5.text-center Certificados cliente embebidos
              p.mb-0.text-center Evitan renegociaciones frecuentes del protocolo TLS
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/19.svg" alt="" style="width: 90px")
              h5.text-center Fichas de autenticación de larga duración
              p.mb-0.text-center Disminuyen el costo de autenticación frecuente

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/4.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Las implementaciones optimizadas pueden lograr reducciones de hasta un 40% en el tráfico de red mediante estas técnicas.

    h2(data-aos="fade-left").mb-5 Aplicaciones prácticas

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/20.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En el desarrollo de software para IoT, HTTP/HTTPS se emplea en sistemas como la telemetría industrial. En estos sistemas, dispositivos pasarela recolectan datos de sensores y los transmiten a plataformas en la nube mediante APIs REST. Un ejemplo típico es un sistema de monitoreo de maquinaria: controladores embebidos recopilan datos (vibración, temperatura, presión), los estructuran en formato JSON, y los envían por medio de peticiones HTTPS POST a puntos finales de análisis predictivo.
    
        .bg-color-1.p-4(data-aos="fade-left")
          h5 Estas implementaciones suelen incluir:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Lógica de reintento con retroceso exponencial para manejar conectividad intermitente.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Compresión gzip para minimizar el tamaño de las cargas útiles.
    
    h2(data-aos="fade-left") Aplicación específica
    p.mb-5 Para implementar una solución HTTP optimizada para IoT, se puede usar un cliente HTTP embebido con libcurl, configurado así:

    .titulo-figura.mb-4
      h5 Tabla 2.
      span Parámetros de Configuración HTTP/2 para Optimización en IoT
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-14.text-center.text-white  Configuración
            th.bg-color-14.text-center.text-white  Valor
        tbody.bg-color-4
          tr
            td CURLOPT_HTTP_VERSION
            td CURL_HTTP_VERSION_2_0 (conexiones persistentes)
          tr
            td CURLOPT_ACCEPT_ENCODING
            td "gzip" (compresión habilitada)
          tr
            td CURLOPT_TIMEOUT_MS
            td Tiempos límite apropiados
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/21.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 En el bucle de envío, se agrupan múltiples lecturas de sensores en una sola carga útil JSON, como en el siguiente ejemplo:
    
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 {"marca_tiempo":"2024-01-15T10:30:00Z","sensores":[{"id":"temp01","valor":23.5},{"id":"humid01","valor":45.2}]}

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/4.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 <b>Resultado esperado</b>: reducción del 60-70% en el número de conexiones TCP, lo que se traduce en ahorro energético y mayor eficiencia de red.
    
    #t_4_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.4] BLE (Bluetooth Low Energy) y Zigbee
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/22.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Bluetooth Low Energy (BLE) y Zigbee son tecnologías de comunicación inalámbrica diseñadas específicamente para aplicaciones IoT que requieren ultra bajo consumo energético y comunicación de corto a medio alcance. Ambas tecnologías están adaptadas a contextos con restricciones energéticas y de procesamiento.
    
    .bg-full-width.bg-color-15
      .p-4.p-md-5
        .titulo-figura.mb-4
          h5 Tabla 3.
          span Características técnicas principales
        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr
                th.bg-color-14.text-center.text-white Característica
                th.bg-color-14.text-center.text-white BLE
                th.bg-color-14.text-center.text-white Zigbee
            tbody.bg-color-4
              tr
                td Frecuencia
                td 2.4 GHz
                td 2.4 GHz (también 868/915 MHz)
              tr
                td Topología
                td Estrella (central y periféricos)
                td Malla auto-organizada
              tr
                td Estándar
                td Propietario de Bluetooth SIG
                td IEEE 802.15.4
              tr
                td Optimización energética
                td Eventos de anuncio/conexión
                td Enrutamiento multi-salto eficiente
              tr
                td Alcance máximo (BLE 5.0)
                td Hasta 240 m en línea de vista
                td Variable según la red de malla
              tr
                td Seguridad
                td Mejoras en BLE 5.0
                td Avanzada (Zigbee 3.0)
              tr
                td Interoperabilidad
                td Limitada a dispositivos BLE
                td Universal entre fabricantes (Zigbee 3.0)

    
        p.mb-5 Según Rosa (2021), BLE 5.0 ha mejorado notablemente al ofrecer:

        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-13.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema4/23.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 01
                  p.mb-0 Mayor alcance (hasta 240 metros en línea de vista).

          .col-lg-4.mb-3.mb-lg-0
            .bg-color-13.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema4/23.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 02
                  p.mb-0 Velocidad de transferencia de hasta 2 Mbps.
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-13.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema4/23.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 03
                  p.mb-0 Anuncios extendidos de hasta 255 bytes sin necesidad de conexión previa.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/4.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Por su parte, Zigbee 3.0 ha unificado perfiles anteriores y mejorado la interoperabilidad y seguridad entre dispositivos de distintos fabricantes. Ambas tecnologías permiten operar sensores básicos durante años con una sola batería.
    
    h2(data-aos="fade-left").mb-5 Aplicaciones en ingeniería de software

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/24.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") BLE se utiliza ampliamente en sistemas de seguimiento de activos, donde dispositivos baliza (beacons) transmiten identificadores únicos detectados por pasarelas (como teléfonos inteligentes o dispositivos fijos). Un ejemplo práctico sería:
    
        .bg-color-5.p-4.mb-5(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 En un hospital, cada equipo médico lleva una baliza BLE.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Estas balizas transmiten su identificador cada segundo.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 El personal sanitario, usando sus teléfonos, actúa como pasarela.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Los datos de localización se envían a un sistema central de gestión.
        p Zigbee, en cambio, se emplea en sistemas de automatización de edificios, formando redes de sensores y actuadores distribuidos por todo el edificio. Su capacidad de formar redes de malla auto-reparables lo hace ideal para entornos extensos sin infraestructura de red cableada.

    h2(data-aos="fade-left") Aplicación práctica: Red Zigbee básica
    p.mb-5 Para implementar una red Zigbee básica, se siguen estos pasos:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/25.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="1. Configuración del coordinador")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-17
                p.mb-0 Uso de un módulo XBee conectado a un microcontrolador Arduino - Comandos AT: 
              p.ms-4.mb-0 • ATID5555 (ID de red PAN)    
              p.ms-4.mb-0 • ATCE1 (habilitar como coordinador)   
              p.ms-4.mb-0 • ATWR (guardar configuración)

          .div(titulo="2. Configuración de terminales")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-17
                p.mb-0 Comandos AT:    
              p.ms-4.mb-0 • ATID5555 (unirse a la misma red PAN)     
              p.ms-4.mb-0 • ATCE0 (modo terminal)     
              p.ms-4.mb-0 • ATJV1 (verificación de unión)
          .div(titulo="3. Comunicación de sensores")
            p Formato del mensaje: "ID_SENSOR:VALOR:MARCA_TIEMPO"
          .div(titulo="4. Recolección de datos")
            p El coordinador recibe los datos y los transmite por puerto serie al sistema anfitrión

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/4.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Resultado esperado: una red autoformada y bidireccional, con capacidad de auto reparación si falla algún nodo intermedio.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Comparación entre MQTT y CoAP
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Comparación entre MQTT y CoAP, donde se aborda el análisis técnico de dos protocolos clave en el desarrollo de aplicaciones IoT: MQTT y CoAP. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Comparación entre MQTT y CoAP.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/26.png', alt='')







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
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/280039?page=1" target="_blank" rel="noopener noreferrer") Domínguez Mínguez, T. (2021). Alexa. Desarrollo de aplicaciones IoT para Arduino y ESP8266: (1 ed.). Marcombo. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/233414" target="_blank" rel="noopener noreferrer") Rosa, J. M. D. L. (2021). De la micro a la nanoelectrónica: impulsando la transformación digital: (1 ed.). Los libros de la Catarata. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/ZMnSWYk0aSo " target="_blank" rel="noopener noreferrer") Domótica DaVinci. (2020, 24 de abril). 20200422 Webinar Introducción a MQTT. [Vídeo] YouTube.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/0llAm_uzR0Q" target="_blank" rel="noopener noreferrer") thethings.iO. (2016, 21 de enero). How to learn CoAP in 5 minutes. [Vídeo] YouTube. 





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema4',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
