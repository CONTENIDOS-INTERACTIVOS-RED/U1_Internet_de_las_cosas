<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Componentes básicos de IoT'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 Los componentes básicos del <em>Internet of Things</em> (IoT) son los pilares fundamentales sobre los que se construyen todas las soluciones modernas de este ecosistema. Su integración adecuada permite la captura, procesamiento y transmisión de datos desde el mundo físico hacia plataformas digitales. Comprender estos elementos es crucial para diseñar sistemas IoT eficientes, escalables y energéticamente sostenibles.
    
        .bg-color-5.p-4(data-aos="fade-left").mb-5
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estos componentes incluyen sensores y actuadores como interfaces físicas, dispositivos de procesamiento (como Arduino y Raspberry Pi), sistemas de conectividad (Wi-Fi, LoRa, Zigbee), componentes de hardware y software de soporte, y plataformas en la nube para almacenamiento y análisis. La correcta selección e integración de estos elementos depende de un análisis detallado de los requerimientos del proyecto, el entorno operativo, los recursos disponibles y los objetivos funcionales del sistema.
        p En esta sección se abordarán cinco aspectos clave del ecosistema IoT:
    
    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/3.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="79%" y="5.5%" numero="+")
                h5 Sensores y actuadores
                p Capturan datos físicos y ejecutan acciones físicas en el entorno.
    
              .bg-color-white.box-shadow.p-3(x="3%" y="10%" numero="+")
                h5 Dispositivos de desarrollo
                p Ejecutan la lógica del sistema y procesan datos de sensores (ej. Arduino, Raspberry Pi).
    
              .bg-color-white.box-shadow.p-3(x="71%" y="95%" numero="+")
                h5 Conectividad
                p Facilitan la comunicación entre dispositivos (Wi-Fi, LoRa, Zigbee).
    
              .bg-color-white.box-shadow.p-3(x="98%" y="59%" numero="+")
                h5 <em>Hardware</em> y <em>software</em> de soporte
                p Infraestructura técnica que integra y gestiona los dispositivos.
    
              .bg-color-white.box-shadow.p-3(x="1%" y="55%" numero="+")
                h5 Plataformas en la nube
                p Almacenan, procesan y visualizan datos en tiempo real, con servicios especializados para IoT.
     

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Sensores y actuadores en IoT
    
    p.mb-5 Los sensores y actuadores constituyen la interfaz esencial entre el mundo físico y los sistemas digitales en el contexto de la <em>Internet of Things</em> (IoT). Funcionan como los ojos, oídos y brazos de estos sistemas inteligentes: los sensores capturan datos del entorno, mientras que los actuadores permiten la intervención física en ese entorno.

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Sensores" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Sensores
            p Capturan información física como temperatura, humedad, movimiento, luz, presión o gases. Convierten estas magnitudes en señales eléctricas procesables por dispositivos digitales.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/4.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Actuadores" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Actuadores
            p Realizan acciones físicas (movimiento, calor, sonido, luz) a partir de señales eléctricas, permitiendo que el sistema IoT interactúe con su entorno.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/5.png', alt='')
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 La literatura especializada señala que la adecuada elección de sensores y actuadores es determinante para la eficacia de las soluciones IoT. Los sensores actuales suelen integrar capacidades como filtrado de señales, calibración automática y comunicación digital directa. Por su parte, los actuadores han evolucionado hacia modelos más eficientes en el uso de energía y con mayor precisión, incluyendo sistemas de retroalimentación que aseguran la ejecución correcta de las acciones físicas.
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Esta evolución ha ampliado considerablemente las aplicaciones de los sistemas IoT en sectores industriales y comerciales. En ingeniería de software, por ejemplo, es común su implementación en sistemas de monitoreo ambiental de centros de datos, donde sensores controlan parámetros críticos y los actuadores mantienen condiciones óptimas de operación.
    
    h2(data-aos="fade-left") Ejercicio práctico
    p.mb-5 Diseñe un sistema de monitoreo ambiental para una sala de servidores utilizando un sensor DHT22 (temperatura y humedad) y un actuador de ventilador. 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/7.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p <b>Configuración del sensor</b>. Conectar el sensor DHT22 al pin digital 2 de un Arduino y programar la lectura de datos cada 30 segundos.
    
          .div(titulo="Paso 2")
            p <b>Implementación de la lógica</b>. Establecer una condición para que, si la temperatura supera los 28 °C, el ventilador (conectado al pin 3) se active automáticamente.
    
          .div(titulo="Paso 3")
            p <b>Comunicación con la plataforma</b>. Programar el envío de datos a una plataforma IoT cuando el ventilador se active.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 <b>Resultado esperado</b>: El sistema mantiene la temperatura por debajo del umbral crítico, registra eventos de activación del ventilador y genera reportes de eficiencia térmica para optimizar el consumo energético del centro de datos.
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Dispositivos y plataformas IoT (Arduino, Raspberry Pi)
    
    p.mb-5 Las plataformas de desarrollo como Arduino y Raspberry Pi han democratizado el acceso a la tecnología IoT, facilitando el prototipado y la creación de soluciones completas. Su uso se ha extendido gracias a su accesibilidad, flexibilidad y comunidad de soporte.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Arduino
              p Simplicidad, bajo consumo energético, fácil programación. Ideal para control de sensores y actuadores en tiempo real.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Raspberry Pi
              p Mayor capacidad de procesamiento, sistema operativo completo, soporta lógica compleja, interfaces gráficas y conectividad avanzada.

    .bg-full-width.bg-color-8
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left").mb-5 La elección entre estas plataformas depende de factores como la complejidad computacional, el consumo energético, la necesidad de interfaces gráficas y los protocolos de comunicación.
        
            .bg-color-2.p-4(data-aos="fade-left").mb-4
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Arduino es preferido en entornos donde la eficiencia energética es prioritaria y las tareas son simples.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-17
                  p.mb-0 Raspberry Pi se emplea para tareas más intensivas como procesamiento de imágenes, manejo de bases de datos y servicios web.
            p Actualmente, es común el uso de plataformas híbridas que combinan microcontroladores como Arduino con sistemas embebidos como Raspberry Pi, optimizando el rendimiento y la funcionalidad.

        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 IOT ¿Qué es? aplicaciones geniales y plataformas que puedes usar para tus proyectos.
                      p.mb-0 Para conocer más sobre uso de IoT, le invitamos a ver el siguiente vídeo. 
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/Jfc4tRkQIp0" target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right
        
        p.mb-5 En proyectos de ingeniería de software, Arduino puede encargarse de los sensores físicos, mientras Raspberry Pi ejecuta servicios web, bases de datos y dashboards. Por ejemplo, en un sistema de monitoreo de rendimiento de aplicaciones web, Arduino mide la temperatura de CPU y el consumo eléctrico, mientras Raspberry Pi recolecta logs del sistema, corre scripts de diagnóstico y presenta la información en un panel visual accesible en red.
    
    h2(data-aos="fade-left") Ejercicio práctico
    p.mb-5 Implementar un sistema híbrido Arduino-Raspberry Pi para monitoreo de una aplicación web.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Configuración de Arduino. Conectar un sensor de temperatura LM35 y enviar datos por el puerto serie cada 15 segundos.
    
          .div(titulo="Paso 2")
            p Programación de Raspberry Pi. Usar Python para recibir datos del Arduino, ejecutar comandos del sistema que capturen el uso de CPU y memoria, y almacenar los datos en una base de datos SQLite.
    
          .div(titulo="Paso 3")
            p Desarrollo de interfaz web. Crear una aplicación con Flask que muestre los datos en tiempo real mediante gráficos interactivos.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 <b>Resultado esperado</b>. Un sistema completo que correlacione datos físicos (temperatura) con métricas de software (uso de CPU y memoria), genere alertas ante comportamientos anómalos y proporcione históricos para análisis de rendimiento.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Conectividad: Redes y protocolos (Wi-Fi, LoRa, Zigbee)
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La conectividad constituye el sistema nervioso del Internet of Things (IoT), ya que define cómo los dispositivos se comunican entre sí y con las plataformas de gestión. Las tecnologías como Wi-Fi, LoRa y Zigbee ofrecen diferentes características en cuanto a alcance, consumo energético, velocidad de transmisión y estructura de red, permitiendo una selección estratégica según los requerimientos específicos.
    
    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Wi-Fi" :icon="require('@/assets/bullets/3.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Wi-Fi
            p Alta velocidad de transmisión y compatibilidad con infraestructura existente. Ideal para transmisión intensiva de datos y acceso directo a internet.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/13.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="LoRa" :icon="require('@/assets/bullets/3.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 LoRa
            p Muy bajo consumo energético y gran alcance. Recomendado para sensores remotos alimentados por batería en áreas extensas.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/14.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Zigbee" :icon="require('@/assets/bullets/3.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Zigbee
            p Buen equilibrio entre consumo energético y capacidad de red. Sus redes mesh autoorganizadas son ideales para sensores locales de seguridad, acceso y energía con redundancia.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/15.png', alt='')
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La literatura especializada destaca la importancia creciente de la interoperabilidad entre protocolos, lo que ha impulsado el desarrollo de gateways y middleware que integran redes heterogéneas en sistemas IoT complejos.
    
        .bg-color-5.p-5(data-aos="fade-left")
          p.mb-0 En ingeniería de software, esta diversidad permite diseñar arquitecturas de monitoreo distribuido optimizadas. Por ejemplo, se puede usar Wi-Fi para los servidores centrales, LoRa para sensores remotos en ubicaciones geográficamente dispersas, y Zigbee para redes locales de seguridad que se autorreconfiguran ante fallos.

    h2(data-aos="fade-left") Ejercicio práctico
    p.mb-5  Diseñe una arquitectura de conectividad híbrida para monitoreo de múltiples centros de datos distribuidos. 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/17.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p <b>Configuración Wi-Fi</b>. Conectar los servidores principales mediante Wi-Fi para transmitir logs y métricas de rendimiento en tiempo real a una plataforma central.
    
          .div(titulo="Paso 2")
            p <b>Monitoreo remoto con LoRa</b>. Instalar sensores ambientales de largo alcance con LoRa, configurando gateways que agreguen datos y los envíen a internet.
    
          .div(titulo="Paso 3")
            p <b>Red local Zigbee</b>. Establecer redes Zigbee en cada centro de datos para sensores de seguridad, acceso y energía, con topología mesh para redundancia automática.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 <b>Resultado esperado</b>. Un sistema de conectividad robusto que optimiza el ancho de banda, minimiza latencia para datos críticos, proporciona cobertura de área extensa para sensores remotos, y mantiene operatividad local ante interrupciones de conectividad externa, generando alertas diferenciadas según el tipo de protocolo y prioridad de los datos.

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Componentes de hardware y software
    
    p.mb-5 Los componentes de hardware y software constituyen la base técnica esencial de los sistemas IoT, permitiendo su funcionamiento confiable y eficiente.

    .bg-full-width.bg-color-9
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/18.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Hardware
                p.mb-0 Incluye microcontroladores de bajo consumo, memorias especializadas, interfaces de comunicación, fuentes de alimentación eficientes y circuitos de protección. Estos elementos garantizan una operación estable en entornos variados.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/19.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Software
                p.mb-0 Comprende sistemas operativos embebidos, drivers de dispositivos, bibliotecas de comunicación, frameworks de desarrollo y herramientas de gestión. Facilitan la programación, instalación y mantenimiento de aplicaciones IoT.

        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") La investigación actual se centra en optimizar el balance entre rendimiento y eficiencia energética, desarrollando componentes que extienden la duración de las baterías sin sacrificar el poder de procesamiento. En hardware, los avances incluyen procesadores multinúcleo, memorias no volátiles de alta velocidad e interfaces multiprotocolo. En software, predomina el uso de sistemas operativos modulares, que solo incluyen los elementos necesarios para cada aplicación, reduciendo el uso de recursos y aumentando la seguridad al minimizar la superficie de ataque.
        
            .bg-color-10.p-5(data-aos="fade-left")
              p.mb-0 En ingeniería de software, elegir los componentes adecuados permite desarrollar sistemas de monitoreo y testing automatizado. Un sistema de testing continuo puede usar microcontroladores para generar tráfico simulado hacia aplicaciones web, mientras que software especializado analiza el rendimiento, identifica regresiones y genera reportes de optimización.

    h2(data-aos="fade-left") Ejercicio práctico
    p.mb-5   Desarrolle un sistema de testing automatizado de aplicaciones web utilizando componentes IoT especializados. 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/21.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Configuración del microcontrolador. Utilizar un ESP32 con suficiente memoria para ejecutar múltiples hilos concurrentes, implementando generadores de carga HTTP que simulen usuarios reales.
    
          .div(titulo="Paso 2")
            p Monitoreo y análisis de métricas. Implementar software que capture métricas como tiempo de respuesta, throughput y tasa de errores, empleando bibliotecas para análisis estadístico en tiempo real.
    
          .div(titulo="Paso 3")
            p Almacenamiento y conectividad. Integrar componentes de almacenamiento local y comunicación con la nube para guardar resultados históricos y generar alertas automáticas.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 <b>Resultado esperado</b>. Un sistema autónomo de testing que ejecute pruebas programadas o bajo demanda, genere reportes comparativos entre versiones de aplicaciones, identifique automáticamente degradaciones de rendimiento y proporcione métricas detalladas para optimización de código y infraestructura.

    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Plataformas en la nube para IoT

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/22.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Las plataformas en la nube para IoT son la columna vertebral de los sistemas modernos, ofreciendo servicios esenciales para la ingesta, procesamiento, almacenamiento y análisis de datos generados por dispositivos conectados. Estas plataformas permiten manejar de forma escalable miles o incluso millones de dispositivos, brindando funciones como:
    
        .bg-color-5.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Gestión de dispositivos
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Procesamiento de eventos en tiempo real
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Almacenamiento de series temporales
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Análisis predictivo
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-17
              p.mb-0 Interfaces de programación (APIs) para integración con aplicaciones empresariales
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/23.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          p.mb-o Además, han evolucionado hacia arquitecturas serverless (sin servidores), lo cual libera a los desarrolladores de la gestión de infraestructura y les permite enfocarse en la lógica de negocio. Incorporan funciones avanzadas como algoritmos de machine learning, procesamiento de eventos complejos, organización de flujos de trabajo (workflows) y APIs unificadas.
        p(data-aos="fade-left") A continuación, se resumen los elementos clave que definen su funcionalidad y valor estratégico:

    .bg-full-width.bg-color-9
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/24.svg" alt="" style="width: 90px")
              h5.text-center Arquitectura escalable
              p.mb-0.text-center Admite desde miles hasta millones de dispositivos conectados simultáneamente.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/25.svg" alt="" style="width: 90px")
              h5.text-center Modelo <em>serverless</em>
              p.mb-0.text-center Elimina la necesidad de gestionar infraestructura, permitiendo mayor enfoque en la aplicación.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/26.svg" alt="" style="width: 90px")
              h5.text-center Herramientas avanzadas
              p.mb-0.text-center Incluyen machine learning, flujos de trabajo, análisis en tiempo real y dashboards interactivos.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/27.svg" alt="" style="width: 90px")
              h5.text-center Factores críticos de adopción
              p.mb-0.text-center Seguridad, cumplimiento normativo, portabilidad, documentación robusta y ecosistemas de aliados.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 En ingeniería de software, estas plataformas permiten implementar sistemas de seguimiento para aplicaciones distribuidas. Se recopilan logs, métricas y trazas de aplicaciones microservicios, correlacionándolos con datos de infraestructura y sensores físicos, lo cual permite generar insights accionables para desarrollo y operaciones.
    
    h2(data-aos="fade-left") Ejercicio práctico
    p.mb-5  Implemente un sistema de seguimiento distribuido utilizando una plataforma IoT en la nube para monitorear una aplicación de microservicios. 

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/28.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p <b>Ingesta de datos</b>. Configurar la recolección desde múltiples fuentes: logs de aplicaciones, métricas de contenedores Docker y datos de sensores de infraestructura. Establecer pipelines que normalicen y enriquezcan la información.
    
          .div(titulo="Paso 2")
            p <b>Procesamiento inteligente</b>. Definir reglas que correlacionen métricas de distintas fuentes, detectar anomalías con algoritmos de machine learning y generar alertas contextualizadas según impacto en el negocio.
    
          .div(titulo="Paso 3")
            p <b>Visualización avanzada</b>. Crear dashboards interactivos con métricas en tiempo real, análisis históricos y capacidades predictivas, integrando funciones de drill-down para análisis detallado.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 <b>Resultado esperado</b>. Un sistema completo de seguimiento que proporcione visibilidad de extremo a extremo (end-to-end) de aplicaciones distribuidas, reduzca el tiempo de detección y resolución de problemas, genere insights proactivos para optimización de rendimiento, y facilite la toma de decisiones basada en datos para equipos de ingeniería y operaciones.




          
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
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/58379?page=1" target="_blank" rel="noopener noreferrer") Llaneza González, P. (2018). Seguridad y responsabilidad en la internet de las cosas (IoT): ( ed.). LA LEY Soluciones Legales S.A. 




            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/233414" target="_blank" rel="noopener noreferrer") Rosa, J. M. D. L. (2021). De la micro a la nanoelectrónica: impulsando la transformación digital: (1 ed.). Los libros de la Catarata. 




            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/280532?page=1" target="_blank" rel="noopener noreferrer") Ruiz-Velasco Sánchez, E. & Bárcenas López, J. (2025). Educatrónica tecnología de inteligencia artificial (robótica, programación e internet de las cosas): (1 ed.). Newton Edición y Tecnología Educativa. 




            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://arxiv.org/abs/1902.11039" target="_blank" rel="noopener noreferrer") Salman, T., & Jain, R. (2019). A survey of protocols and standards for Internet of Things. Advanced Computing and Communications.



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.1109/COMST.2015.2444095 " target="_blank" rel="noopener noreferrer") Al-Fuqaha, A., Guizani, M., Mohammadi, M., Aledhari, M., & Ayyash, M. (2015). Internet of Things: A Survey on Enabling Technologies, Protocols, and Applications. IEEE Communications Surveys & Tutorials, 17(4), 2347-2376.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.iot-lab.info/" target="_blank" rel="noopener noreferrer") IoT-LAB (FIT/IoT-LAB) Plataforma de investigación abierta que permite simular arquitecturas IoT de múltiples capas (sensores, gateways, red, nube). Es utilizada por universidades y centros de investigación.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/dzMq4h3JT2g" target="_blank" rel="noopener noreferrer") Software Guru. (2015, 12 de noviembre). Método y herramientas para el diseño y construcción de dispositivos IoT. [Vídeo] YouTube. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/6P442GGIJuw " target="_blank" rel="noopener noreferrer") LACNIC RIR. (2019, 8 de mayo). Interoperabilidad en IoT. [Vídeo] YouTube.  







          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
