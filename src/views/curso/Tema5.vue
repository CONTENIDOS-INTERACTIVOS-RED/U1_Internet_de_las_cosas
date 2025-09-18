<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'5. Riesgos de seguridad en IoT'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p Los riesgos de seguridad en IoT constituyen una preocupación crítica que trasciende las vulnerabilidades tradicionales de sistemas informáticos debido a la naturaleza distribuida, heterogénea y omnipresente de los dispositivos conectados. Estos riesgos se manifiestan en múltiples capas del ecosistema IoT, desde vulnerabilidades en el microcódigo de dispositivos hasta debilidades en los protocolos de comunicación y plataformas de gestión centralizadas. La complejidad de estos riesgos se amplifica por la longevidad operativa de los dispositivos IoT y la frecuente falta de mecanismos de actualización segura.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-5(data-aos="fade-left").mb-3
          p.mb-0 La superficie de ataque en sistemas IoT se caracteriza por su amplitud y diversidad, abarcando desde vulnerabilidades físicas hasta ataques sofisticados de ingeniería social y software malicioso especializado. Los dispositivos IoT frecuentemente operan en entornos no controlados donde el acceso físico por parte de atacantes es posible, lo que introduce vectores de ataque únicos como manipulación de hardware, extracción de claves criptográficas e inyección de microcódigo malicioso. Además, la interconexión masiva de dispositivos crea efectos de cascada donde comprometer un solo dispositivo puede facilitar ataques laterales a toda la infraestructura conectada, amplificando exponencialmente el impacto potencial de las vulnerabilidades individuales.
        p(data-aos="fade-left") En esta sección se analizarán las amenazas más comunes que afectan los ecosistemas IoT, incluyendo técnicas avanzadas de piratería informática y la proliferación de software malicioso especializado en dispositivos conectados. Posteriormente, se examinarán las vulnerabilidades inherentes a los dispositivos IoT, comprendiendo cómo las limitaciones de recursos y diseño impactan la seguridad. También se estudiarán las brechas de seguridad específicas que emergen en redes IoT y su propagación. Finalmente, se evaluarán los riesgos asociados con la exposición de datos sensibles y se analizará el impacto multidimensional que los ataques exitosos pueden tener en sistemas IoT críticos.

    #t_5_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.1] Amenazas comunes: piratería informática, software malicioso
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/2.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Las amenazas de piratería informática en ecosistemas IoT han evolucionado hacia técnicas sofisticadas que explotan las características únicas de los dispositivos conectados, como su distribución geográfica, diversidad de plataformas y la frecuente falta de supervisión activa. Los atacantes utilizan reconocimiento automatizado para identificar dispositivos vulnerables mediante:
    
    .bg-full-width.bg-color-11
      .p-4.p-md-5
        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-13.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema5/3.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 01
                  p.mb-0 Escaneo masivo de puertos

          .col-lg-4.mb-3.mb-lg-0
            .bg-color-13.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema5/4.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 02
                  p.mb-0 Análisis de huella digital de servicios
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-13.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema5/5.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 03
                  p.mb-0 Explotación de configuraciones predeterminadas débiles

        p.mb-5 Las técnicas más frecuentes incluyen:

        div.row.justify-content-center.align-items-stretch
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema5/6.svg" alt="" style="width: 90px")
              h5.text-center Relleno de credenciales
              p.mb-0.text-center Uso de combinaciones por defecto de usuario/contraseña
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema5/7.svg" alt="" style="width: 90px")
              h5.text-center Explotación de microcódigo
              p.mb-0.text-center Ataques a firmware desactualizado con vulnerabilidades conocidas
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema5/8.svg" alt="" style="width: 90px")
              h5.text-center Ataques de intermediario
              p.mb-0.text-center Intercepción de comunicaciones no cifradas o débiles
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/9.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El software malicioso específicamente diseñado para IoT representa una amenaza creciente. Este tipo de malware aprovecha las limitaciones computacionales y de seguridad inherentes a los dispositivos, como señala Llaneza González (2018). Ejemplos conocidos incluyen Mirai, Hajime y sus variantes, que han demostrado la capacidad de formar redes de robots (botnets) masivas. Estas amenazas se propagan a través de:
    
        .bg-color-5.mb-5.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Credenciales débiles
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Vulnerabilidades de inyección de comandos
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Movimiento lateral en redes locales de confianza
        p Los estudios revelan que un dispositivo comprometido puede infectar hasta 2.5 dispositivos adicionales en las primeras 24 horas.
    
    h2(data-aos="fade-left").mb-5 Impacto en ingeniería de software

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/10.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 Estas amenazas afectan significativamente el diseño de arquitecturas seguras en sistemas IoT empresariales. Un ejemplo crítico se encuentra en sistemas de control industrial, donde sensores comprometidos permiten manipular lecturas de proceso, causar paradas de producción o incluso daños físicos.
    
        .bg-color-2.p-4(data-aos="fade-left")
          h5 Caso específico:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Atacantes explotan vulnerabilidades en sensores de presión en una planta química.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Falsifican lecturas críticas, evadiendo sistemas de seguridad automatizados.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Esto puede generar condiciones peligrosas que requieren intervención manual para evitar incidentes catastróficos.

    h2(data-aos="fade-left") Aplicación práctica
    p.mb-5 Para demostrar técnicas de detección de amenazas IoT, se implementa un sistema de monitoreo de tráfico de red:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/11.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Configuración del análisis
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Uso de Python y scapy 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Filtro de captura: "tcp port 23 or tcp port 80 or tcp port 443"
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/12.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Detección de comportamientos anómalos
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Conexiones con frecuencia inusual.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 IPs geográficamente improbables.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/13.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Detección de fuerza bruta en Telnet
              p Condición: si intentos_conexion > 10 en 60 segundos, se activa una alerta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/14.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Monitoreo de comunicación con servidores C2
              p Comparación del tráfico con fuentes de inteligencia de amenazas para detectar infraestructura de comando y control

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema5/15.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 <b>Resultado esperado</b>: identificación de dispositivos comprometidos antes de que participen en ataques coordinados, detectando patrones típicos de comunicación hacia infraestructura de comando y control con intervalos regulares (latidos de red de botnets).

    #t_5_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.2] Vulnerabilidades de dispositivos IoT

    .bg-full-width.bg-color-11
      .p-4.p-md-5
        p.mb-5 Las vulnerabilidades inherentes a dispositivos IoT surgen de una combinación de factores técnicos y económicos que priorizan funcionalidad y bajo costo por encima de la seguridad. Esto da lugar a un panorama de amenazas únicas y complejas. Entre las fallas más comunes se encuentran:
    
        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-13.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema5/16.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 01
                  p.mb-0 Autenticación débil o ausente

          .col-lg-3.mb-3.mb-lg-0
            .bg-color-13.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema5/17.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 02
                  p.mb-0 Cifrado inadecuado o inexistente
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-13.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema5/18.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 03
                  p.mb-0 Interfaces de depuración accesibles en producción
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-13.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema5/19.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 03
                  p.mb-0 Microcódigo vulnerable y rara vez actualizado
        
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema5/20.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .bg-color-5.mb-5.p-5(data-aos="fade-left")
              h5 Estas debilidades son agravadas por:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Ciclos de desarrollo acelerados que descuidan pruebas de seguridad
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Reutilización de componentes de software con historial de vulnerabilidades
            p(data-aos="fade-left") A continuación, se presenta un recurso educativo que ilustra, mediante elementos visuales, las limitaciones energéticas y computacionales de los dispositivos IoT y su impacto en la implementación de medidas de seguridad, así como las vulnerabilidades específicas en entornos críticos como el monitoreo médico remoto.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    h2(data-aos="fade-left") Aplicación práctica 
    p.mb-5 Para identificar vulnerabilidades en dispositivos IoT, se sigue un proceso de análisis sistemático:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/21.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Reconocimiento pasivo")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-17
                p.mb-0 Herramientas: Shodan y Censys 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-17
                p.mb-0 Objetivo: identificar dispositivos expuestos
          .div(titulo="Análisis de microcódigo")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-17
                p.mb-0 Herramienta: binwalk -e microcódigo.bin
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-17
                p.mb-0 Revisión de archivos con: `grep -r "contraseña
          .div(titulo="Análisis de protocolos de comunicación")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-17
                p.mb-0 Herramienta: Wireshark 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-17
                p.mb-0 Detección de transmisiones no cifradas o con protección débil
          .div(titulo="Pruebas de interfaces web")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-17
                p.mb-0 Herramienta: Burp Suite 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-17
                p.mb-0 Búsqueda de vulnerabilidades de inyección
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema5/15.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 <b>Resultado esperado</b>: detección de credenciales codificadas de forma permanente, uso de protocolos inseguros, e interfaces de administración sin protección. Esto proporciona una línea base clara de vulnerabilidades prioritarias para su corrección.
    
    #t_5_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.3] Brechas de seguridad en redes IoT
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/22.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Las brechas de seguridad en redes IoT surgen de la complejidad inherente a ecosistemas que integran múltiples protocolos de comunicación, topologías de red heterogéneas, y dispositivos con diferentes capacidades de seguridad. 
    
        .bg-color-5.p-5(data-aos="fade-left")
          h5 Estas brechas se manifiestan en:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Segmentación inadecuada de redes (dispositivos IoT comparten espacio con sistemas críticos).
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Ausencia de monitoreo especializado para protocolos IoT.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Configuraciones de red sin contemplar patrones únicos de comunicación autónoma.
          h5 La propagación lateral de amenazas se ve facilitada por:
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Confianza excesiva entre dispositivos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Ausencia de controles de acceso segmentados.
    
    .bg-full-width.bg-color-11
      .p-4.p-md-5
        h2(data-aos="fade-left") Complejidad técnica de redes IoT
        p.mb-5 La diversidad de tecnologías en redes IoT —celulares, WiFi, Bluetooth, Zigbee, y protocolos propietarios— introduce vacíos de seguridad en los puntos de transición y entre capas de protocolos. Según Llaneza González (2018), esta heterogeneidad:

        div.row.justify-content-center.align-items-stretch
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema5/23.svg" alt="" style="width: 90px")
              h5.text-center Políticas de seguridad inconsistente
              p.mb-0.text-center Protecciones aplicadas a un protocolo no se extienden a otros
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema5/24.svg" alt="" style="width: 90px")
              h5.text-center Configuraciones dispares
              p.mb-0.text-center Vulnerabilidades específicas no gestionadas de forma centralizada
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema5/25.svg" alt="" style="width: 90px")
              h5.text-center Transición entre tecnologías
              p.mb-0.text-center 60% de brechas ocurren en estos puntos

        p.mb-5 Estas discontinuidades permiten que atacantes aprovechen vectores de ataque interprotocolarios, generando rutas de acceso no previstas dentro de la red.

        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 Seguridad en IoT
                      p.mb-0 Para ampliar el concepto sobre seguridad en IoT, le invitamos a ver el siguiente vídeo. 
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/live/68vVHQllTYA " target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/26.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Las brechas de red impactan el diseño de arquitecturas robustas para sistemas distribuidos críticos. Un ejemplo se observa en sistemas de ciudad inteligente, donde sensores de tráfico, cámaras de seguridad y sistemas de iluminación inteligente comparten una infraestructura común sin segmentación adecuada.
    
        .bg-color-1.p-5(data-aos="fade-left")
          h5 Caso específico:
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Un sensor de estacionamiento es comprometido.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 El atacante utiliza acceso lateral para alcanzar el sistema de gestión de tráfico.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Resultados posibles: congestión, accidentes, interrupciones en servicios de emergencia.
    
    h2(data-aos="fade-left") Aplicación práctica
    p.mb-5 Para identificar y mitigar brechas de seguridad en redes IoT, se sigue este procedimiento:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/27.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Análisis de topología
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Herramientas: Nmap y Nessus 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Comandos: nmap -sn 192.168.1.0/24 → descubrimiento de dispositivos nmap -sV -p- anfitriones_descubiertos.txt → escaneo de servicios
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/28.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Monitoreo de tráfico
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Herramienta: ntopng 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Objetivo: analizar patrones de comunicación e identificar anomalías
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/29.png")
            .col-lg-7.mb-3.mb-lg-0.order-1
              h5 Microsegmentación de red
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Uso de VLANs por tipo de dispositivo 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Configuración de cortafuegos aplicando el principio de menor privilegio

    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema5/15.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 <b>Resultado esperado</b>: Identificación de comunicaciones no autorizadas, uso de protocolos inseguros y dispositivos fuera de las políticas de seguridad. Esto permite una corrección proactiva antes de que se produzca una explotación maliciosa.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Riesgos de exposición de datos en IoT
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Riesgos de exposición de datos en IoT, donde se aborda la problemática de seguridad en los ecosistemas de Internet de las Cosas (IoT), enfocándose en los riesgos relacionados con la exposición de datos personales y operacionales.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Riesgos de exposición de datos en IoT.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/30.png', alt='')


    #t_5_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.4] Impacto de los ataques en sistemas IoT
    
    .bg-full-width.bg-color-11
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/31.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left").mb-5 El impacto de ataques exitosos en sistemas IoT va más allá de las consecuencias tradicionales de incidentes de ciberseguridad. Debido a su integración en infraestructuras críticas y procesos esenciales de negocio, los ataques pueden provocar:
        
            .bg-color-5.p-5(data-aos="fade-left").mb-5
              ul.lista-ul--color.mb-0
                li.mb-.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Interrupciones operacionales.
                li.mb-.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Afectación de servicios públicos.
                li.mb-.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Daños físicos o lesiones personales.
                li.mb-.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Pérdidas económicas masivas.
            p La interconectividad típica de los ecosistemas IoT amplifica los efectos de cascada, donde el compromiso de un componente menor puede desencadenar fallas sistémicas de gran escala.

        h2(data-aos="fade-left") Impactos financieros y operacionales
        p.mb-5 Además de los costos directos de recuperación, los ataques a sistemas IoT generan:

        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema5/32.svg" alt="" style="width: 90px")
              h5.text-center Pérdida de productividad
              p.mb-0.text-center Paralización de líneas de producción
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema5/33.svg" alt="" style="width: 90px")
              h5.text-center Daño reputacional
              p.mb-0.text-center Pérdida de confianza de clientes e inversores
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema5/34.svg" alt="" style="width: 90px")
              h5.text-center Responsabilidad legal
              p.mb-0.text-center Demandas por incumplimiento de protección de datos
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema5/35.svg" alt="" style="width: 90px")
              h5.text-center Costos regulatorios
              p.mb-0.text-center Multas y exigencias post-incidente

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/36.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left").mb-5 Según Rosa (2021), la naturaleza distribuida y autónoma de los sistemas IoT dificulta los procesos de respuesta a incidentes. Requiere frecuentemente:
        
            .bg-color-6.p-4(data-aos="fade-left").mb-5
              ul.lista-ul--color.mb-0
                li.mb-.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Intervención física en múltiples ubicaciones
                li.mb-.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Reemplazo de hardware afectado
                li.mb-.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Reconfiguración compleja de sistemas interconectados

            p La longevidad operativa de los dispositivos implica que las consecuencias pueden durar años si no se corrigen adecuadamente. Estudios recientes muestran que el costo promedio de un incidente de seguridad IoT puede superar los $4.2 millones al considerar todos los factores.

    h2(data-aos="fade-left").mb-5 Relevancia en ingeniería de software

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/37.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 El impacto de los ataques debe considerarse desde el diseño de sistemas, implementando mecanismos de:
    
        .bg-color-2.p-5(data-aos="fade-left").mb-5
          ul.lista-ul--color.mb-0
            li.mb-.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Resistencia
            li.mb-.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Recuperación
            li.mb-.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Continuidad operativa


    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/38.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Un ejemplo clave se encuentra en sistemas de gestión energética inteligente:
    
        .bg-color-5.p-4(data-aos="fade-left").mb-3
          ul.lista-ul--color.mb-0
            li.mb-.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Si se comprometen medidores inteligentes, los atacantes pueden manipular lecturas de consumo
            li.mb-.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Esto puede causar facturación incorrecta, desbalances en la red, e incluso apagones regionales
            li.mb-.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Las consecuencias se extienden a servicios esenciales:
          ul.lista-ul--color.mb-0.ms-4
            li.mb-.d-flex
              i.fas.fa-circle.fa-xs.bg-color-17
              p.mb-0 Refrigeración médica.
            li.mb-.d-flex
              i.fas.fa-circle.fa-xs.bg-color-17
              p.mb-0 Telecomunicaciones.
            li.mb-.d-flex
              i.fas.fa-circle.fa-xs.bg-color-17
              p.mb-0 Transporte público.

        p Este ejemplo ilustra cómo un ataque aparentemente focalizado puede tener repercusiones societales amplias.
    
    h2(data-aos="fade-left") Aplicación práctica
    p.mb-5 Para evaluar el impacto potencial de ataques en sistemas IoT, se sigue este enfoque:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/39.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Interdependencias sistémicas")
            p El análisis considera cómo los dispositivos y servicios están conectados y cómo una falla puede propagarse en cascada.
    
          .div(titulo="Simulación de fallas (MATLAB/Simulink)")
            p Se usa una herramienta de simulación para modelar dinámicas de fallo complejas en sistemas interconectados.
    
          .div(titulo="Definición de nodos críticos")
            p Identificación de componentes clave cuya falla impacta significativamente el sistema.
    
          .div(titulo="Matriz de dependencias")
            p matriz_dependencias[i][j] = peso_impacto representa la relación de dependencia entre nodos.
          .div(titulo="Simulación de escenarios")
            p Uso de Monte Carlo para evaluar escenarios múltiples:
            p python<br>for iteracion in range(10000):<br>&nbsp;&nbsp;&nbsp;&nbsp;simular_escenario_ataque(nodo_objetivo_aleatorio)<br> 
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/40.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Métricas de impacto")
            p Tiempo de recuperación objetivo (Recovery Time Objective, RTO)- Pérdida máxima de datos aceptable- Costos financieros por hora de inactividad
    
          .div(titulo="Análisis de criticidad de activos")
            p Evaluación cuantitativa del riesgo asociado a cada activo.
    
          .div(titulo="Fórmula de criticidad")
            p python<br>puntuacion_criticidad = (impacto_confidencialidad + impacto_integridad + impacto_disponibilidad) * valor_activo<br>
    
          .div(titulo="Resultado esperado")
            p Matriz de riesgo priorizada que identifica los activos con mayor impacto potencial, orientando las decisiones de inversión en seguridad.

    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema5/15.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 El resultado esperado es una matriz de riesgo que identifica dispositivos y sistemas cuyo compromiso tendría el mayor impacto operacional, permitiendo priorización de inversiones en seguridad basada en análisis cuantitativo de riesgo.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Técnicas de cifrado para dispositivos IoT
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Técnicas de cifrado para dispositivos IoT, donde se aborda el diseño e implementación de soluciones criptográficas adaptadas a las limitaciones de hardware, energía y conectividad de los dispositivos IoT.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Técnicas de cifrado para dispositivos IoT.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/41.png', alt='')





    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/58379?page=1" target="_blank" rel="noopener noreferrer") Llaneza González, P. (2018). Seguridad y responsabilidad en la internet de las cosas (IoT): ( ed.). LA LEY Soluciones Legales S.A. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/233414" target="_blank" rel="noopener noreferrer") Rosa, J. M. D. L. (2021). De la micro a la nanoelectrónica: impulsando la transformación digital: (1 ed.). Los libros de la Catarata. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/live/68vVHQllTYA" target="_blank" rel="noopener noreferrer") Internet Society Colombia Chapter. (2019, 4 de junio). Seguridad en IoT: Construyendo Confianza Digital. Internet Society Colombia Chapter y CEA-IoT. [Vídeo] YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema5',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Fundamentos y Arquitectura de IoT',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué componente de IoT se encarga de captar información del entorno físico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Middleware',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Actuador',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Sensor',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Gateway',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es la principal función del middleware en una arquitectura IoT?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Enviar correos automáticos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Capturar imágenes',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Facilitar la comunicación entre dispositivos y servicios',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Diseñar interfaces gráficas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'Ordena las capas de una arquitectura IoT típica (de menor a mayor nivel):',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicación - Percepción - Red',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Percepción - Red - Aplicación',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Red - Aplicación - Percepción',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Aplicación - Red - Percepción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de los siguientes NO es un componente básico del IoT?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Sensores',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Actuadores',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Procesador de texto',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Plataforma en la nube',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué problema resuelve principalmente el middleware en una red IoT?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Elimina sensores obsoletos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Mejora la calidad de imagen',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Gestiona la interoperabilidad de múltiples dispositivos',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Elimina virus',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
