export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos y Arquitectura de IoT',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Título tema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Subtítulo tema',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Subtítulo tema',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Título tema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Subtítulo tema',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Subtítulo tema',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Subtítulo tema',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Título tema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Subtítulo tema',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Subtítulo tema',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Protocolos clave (MQTT, CoAP)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'MQTT: Características y usos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'CoAP: Características y ventajas',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'HTTP/HTTPS para IoT',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'BLE (Bluetooth Low Energy) y Zigbee',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Riesgos de seguridad en IoT',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo:
              'Amenazas comunes: piratería informática, software malicioso',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Vulnerabilidades de dispositivos IoT',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Brechas de seguridad en redes IoT',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Impacto de los ataques en sistemas IoT',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ardaraz, M. (2002). Teoría de las tres dimensiones de desarrollo sostenible: . Ecosistemas, 11(2)',
      link:
        'https://www.revistaecosistemas.net/index.php/ecosistemas/article/view/614',
    },
    {
      referencia:
        'Beltrán, D. J. (2002). La estrategia de desarrollo sostenible de la Unión Europea en el contexto global: de Río a Johannesburgo. ICE. Revista de Economía, (800).',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Actuador',
      significado:
        'dispositivo electromecánico que convierte señales eléctricas en acciones físicas como movimiento, calor, sonido o luz, permitiendo que los sistemas IoT interactúen activamente con su entorno físico.',
    },
    {
      termino: '<em>APM (Application Performance Monitoring)</em>',
      significado:
        'monitoreo de rendimiento de aplicaciones. metodología y conjunto de herramientas especializadas para monitorear, analizar y optimizar el rendimiento de aplicaciones de software en tiempo real, incluyendo métricas de latencia, <em>throughput</em> y disponibilidad.',
    },
    {
      termino: 'Arduino',
      significado:
        'plataforma de desarrollo de hardware y software de código abierto que facilita la creación de prototipos electrónicos mediante microcontroladores programables, especialmente popular en proyectos IoT por su simplicidad y versatilidad.',
    },
    {
      termino: 'Bus de integración',
      significado:
        'infraestructura de software que facilita la comunicación entre múltiples aplicaciones y servicios heterogéneos mediante patrones estandarizados de intercambio de mensajes y datos.',
    },
    {
      termino: '<em>CI/CD (Continuous Integration/Continuous Deployment)</em>',
      significado:
        'integración continua/despliegue continuo. metodología de desarrollo de software que automatiza la integración frecuente de código y el despliegue continuo de aplicaciones mediante pipelines automatizados que incluyen testing, validación y deployment.',
    },
    {
      termino: '<em>Cloud computing</em>',
      significado:
        'computación en la nube. Modelo de computación que proporciona acceso bajo demanda a recursos computacionales compartidos como servidores, almacenamiento y aplicaciones a través de internet, ofreciendo escalabilidad y flexibilidad operacional.',
    },
    {
      termino: '<em>CoAP (Constrained Application Protocol)</em>',
      significado:
        'protocolo de aplicación restringida. Protocolo de comunicación especializado diseñado para dispositivos IoT con recursos limitados, optimizado para transmisión eficiente de datos en redes con restricciones de ancho de banda y energía.',
    },
    {
      termino: '<em>Dashboard</em>',
      significado:
        'panel de control. interfaz visual que presenta información compleja de manera organizada y comprensible mediante gráficos, métricas e indicadores que facilitan la toma de decisiones basada en datos en tiempo real.',
    },
    {
      termino: '<em>Deployment</em>',
      significado:
        'despliegue. proceso de instalación, configuración y puesta en funcionamiento de aplicaciones de software en entornos de producción, incluyendo aspectos como distribución de archivos, configuración de servicios y validación de funcionalidad.',
    },
    {
      termino: '<em>DevOps</em>',
      significado:
        'desarrollo y operaciones. metodología que integra desarrollo de software y operaciones de infraestructura mediante prácticas colaborativas, automatización de procesos y cultura organizacional orientada a mejorar la velocidad y calidad de entrega de software.',
    },
    {
      termino: 'DHT22',
      significado:
        'sensor digital de temperatura y humedad ampliamente utilizado en proyectos IoT que proporciona mediciones precisas con salida digital calibrada, facilitando la integración con microcontroladores y sistemas de monitoreo ambiental.',
    },
    {
      termino: '<em>Docker</em>',
      significado:
        'plataforma que permite empaquetar aplicaciones junto con sus dependencias en contenedores ligeros y portables, facilitando el <em>deployment</em> consistente across diferentes entornos de ejecución.',
    },
    {
      termino: '<em>DSL (Domain Specific Language)</em>',
      significado:
        'lenguaje específico de dominio. lenguaje de programación especializado diseñado para resolver problemas específicos de un dominio particular, proporcionando abstracciones y sintaxis optimizadas para tareas específicas.',
    },
    {
      termino: '<em>Edge computing</em>',
      significado:
        'computación perimetral. paradigma de computación distribuida que procesa datos cerca de su fuente de origen en lugar de enviarlos a centros de datos centralizados, reduciendo latencia y optimizando el uso de ancho de banda.',
    },
    {
      termino: '<em>ELK stack:</em>',
      significado:
        'pila ELK. Conjunto integrado de herramientas de código abierto compuesto por <em>Elasticsearch, Logstash y Kibana</em>, utilizado para búsqueda, análisis y visualización de datos de log en tiempo real.',
    },
    {
      termino: 'ESP32',
      significado:
        'microcontrolador de bajo costo y bajo consumo energético que integra conectividad Wi-Fi y Bluetooth, ampliamente utilizado en proyectos IoT por su versatilidad y capacidades de procesamiento.',
    },
    {
      termino: '<em>Flask</em>',
      significado:
        '<em>framework web</em> ligero para Python que facilita el desarrollo rápido de aplicaciones web mediante una arquitectura minimalista pero extensible, popular para crear APIs e interfaces web en proyectos IoT.',
    },
    {
      termino: '<em>Fog computing</em>',
      significado:
        'computación en la niebla. extensión del <em>cloud computing</em> que distribuye recursos computacionales más cerca de los dispositivos IoT, proporcionando procesamiento de baja latencia mientras mantiene conectividad con servicios <em>cloud</em> centralizados.',
    },
    {
      termino: '<em>Gateway</em>',
      significado:
        'puerta de enlace. dispositivo o software que actúa como puente de comunicación entre diferentes redes o protocolos, facilitando la interoperabilidad y traducción de datos entre sistemas heterogéneos en ecosistemas IoT.',
    },
    {
      termino: '<em>GitOps</em>',
      significado:
        'metodología operacional que utiliza repositorios <em>Git</em> como fuente única de verdad para configuraciones de infraestructura y aplicaciones, automatizando <em>deployments</em> mediante <em>workflows</em> declarativos basados en control de versiones.',
    },
    {
      termino: '<em>Hardware</em>',
      significado:
        'equipos físicos. componentes físicos y tangibles de un sistema computacional, incluyendo procesadores, memoria, sensores, actuadores y circuitos electrónicos que forman la base material de los dispositivos IoT.',
    },
    {
      termino: '<em>IoT (Internet of Things):</em>',
      significado:
        'internet de las cosas. paradigma tecnológico que conecta objetos físicos cotidianos a internet mediante sensores, <em>software</em> y conectividad de red, permitiendo la recopilación e intercambio de datos para crear sistemas inteligentes y automatizados.',
    },
    {
      termino: '<em>Jaeger</em>',
      significado:
        'sistema de <em>tracing</em> distribuido de código abierto que monitorea y soluciona problemas en arquitecturas de microservicios complejas mediante el seguimiento de transacciones across múltiples servicios.',
    },
    {
      termino: '<em>Jenkins</em>',
      significado:
        'plataforma de automatización de código abierto que facilita la integración y entrega continuas mediante la orquestación de pipelines de <em>build</em>, <em>test</em> y <em>deployment</em> de aplicaciones de <em>software</em>.',
    },
    {
      termino: '<em>Jira</em>',
      significado:
        'herramienta de gestión de proyectos y seguimiento de <em>issues</em> desarrollada por <em>Atlassian</em>, ampliamente utilizada para planificación ágil, tracking de bugs y coordinación de equipos de desarrollo de <em>software</em>.',
    },
    {
      termino: '<em>Kubernetes</em>',
      significado:
        'plataforma de orquestación de contenedores que automatiza el <em>deployment</em>, escalado y gestión de aplicaciones containerizadas, proporcionando abstracciones de alto nivel para infraestructura distribuida.',
    },
    {
      termino: 'LM35',
      significado:
        'sensor de temperatura analógico de precisión que proporciona salida de voltaje linealmente proporcional a la temperatura en grados Celsius, comúnmente utilizado en sistemas de monitoreo ambiental IoT.',
    },
    {
      termino: '<em>LoRa (Long Range)</em>',
      significado:
        'largo alcance. tecnología de comunicación inalámbrica de largo alcance y bajo consumo energético, optimizada para aplicaciones IoT que requieren transmisión de pequeñas cantidades de datos <em>across</em> distancias extensas.',
    },
    {
      termino: '<em>Machine learning</em>',
      significado:
        'aprendizaje automático. subdisciplina de la inteligencia artificial que desarrolla algoritmos y modelos estadísticos que permiten a los sistemas aprender y mejorar automáticamente a partir de datos sin programación explícita.',
    },
    {
      termino: '<em>Mesh networking</em>',
      significado:
        'red de malla. Topología de red donde cada nodo se conecta directamente con múltiples otros nodos, creando redundancia y auto-organización que mejora la confiabilidad y cobertura de la red.',
    },
    {
      termino: 'Microservicio',
      significado:
        'arquitectura de <em>software</em> que estructura aplicaciones como colección de servicios pequeños, independientes y <em>loosely coupled</em> que se comunican mediante <em>APIs</em> bien definidas.',
    },
    {
      termino: '<em>Middleware</em>',
      significado:
        '<em>software</em> intermedio. capa de <em>software</em> que proporciona servicios comunes y abstracciones entre aplicaciones y el sistema operativo, facilitando la comunicación, gestión de datos e integración de componentes distribuidos.',
    },
    {
      termino: '<em>MQTT (Message Queuing Telemetry Transport)</em>',
      significado:
        'transporte de telemetría de cola de mensajes. Protocolo de comunicación ligero diseñado para dispositivos IoT con ancho de banda limitado, basado en el patrón <em>publish-subscribe</em> para intercambio eficiente de mensajes.',
    },
    {
      termino: '<em>OCF (Open Connectivity Foundation)</em>',
      significado:
        'fundación de conectividad abierta. Organización que desarrolla estándares abiertos para dispositivos IoT, promoviendo interoperabilidad y comunicación segura entre dispositivos de diferentes fabricantes y plataformas.',
    },
    {
      termino: '<em>oneM2M</em>',
      significado:
        'estándar global para comunicaciones <em>machine-to-machine</em> que define arquitecturas técnicas comunes para plataformas IoT, facilitando la interoperabilidad entre diferentes sistemas y servicios.',
    },
    {
      termino: '<em>OSI (Open Systems Interconnection)</em>',
      significado:
        'interconexión de sistemas abiertos. Modelo de referencia conceptual que estandariza las funciones de comunicación de redes mediante siete capas abstractas, proporcionando <em>framework</em> para el desarrollo de protocolos de red.',
    },
    {
      termino: '<em>Papaparse</em>',
      significado:
        'biblioteca JavaScript de alto rendimiento para <em>parsing</em> de archivos CSV que proporciona capacidades robustas de análisis de datos tabulares con soporte para múltiples formatos y opciones de configuración.',
    },
    {
      termino: '<em>Prometheus</em>',
      significado:
        'sistema de monitoreo y alertas de código abierto diseñado para <em>reliability</em> y escalabilidad, especializado en recopilación de métricas de series temporales y generación de alertas basadas en reglas.',
    },
    {
      termino: '<em>Pub/sub (Publish-Subscribe)</em>',
      significado:
        'publicar-suscribir. patrón de comunicación asíncrona donde los <em>publishers</em> envían mensajes sin conocimiento directo de los <em>subscribers</em>, facilitando el desacoplamiento y escalabilidad en sistemas distribuidos.',
    },
    {
      termino: '<em>Raspberry Pi</em>',
      significado:
        'computadora de placa única de bajo costo que ejecuta sistemas operativos completos, ampliamente utilizada en educación y proyectos IoT por su versatilidad y capacidades de procesamiento.',
    },
    {
      termino: '<em>Request-response</em>',
      significado:
        'solicitud-respuesta. patrón de comunicación síncrona donde un cliente envía una solicitud a un servidor y espera una respuesta específica, común en <em>APIs REST</em> y servicios <em>web</em> tradicionales.',
    },
    {
      termino: '<em>Rollback</em>',
      significado:
        'reversión. proceso de revertir un sistema o aplicación a un estado anterior funcional conocido, típicamente utilizado para recuperarse de <em>deployments</em> fallidos o problemas de configuración.',
    },
    {
      termino: 'Sensor',
      significado:
        'dispositivo que detecta y mide propiedades físicas del entorno como temperatura, humedad, movimiento o luz, convirtiendo estas magnitudes en señales eléctricas procesables por sistemas digitales.',
    },
    {
      termino: '<em>Serverless</em>',
      significado:
        'sin servidor. Modelo de computación <em>cloud</em> donde el proveedor gestiona automáticamente la infraestructura de servidores, permitiendo a los desarrolladores enfocarse en código de aplicación sin preocuparse por gestión de recursos.',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'programas informáticos. Conjunto de programas, instrucciones y reglas informáticas que permiten ejecutar tareas específicas en dispositivos computacionales, incluyendo sistemas operativos, aplicaciones y <em>firmware</em> en dispositivos IoT.',
    },
    {
      termino: '<em>Splunk</em>',
      significado:
        'plataforma de análisis de datos que recopila, indexa y analiza datos de máquinas generados por aplicaciones, servidores y dispositivos de red para proporcionar <em>insights</em> operacionales en tiempo real.',
    },
    {
      termino: '<em>SQLite</em>',
      significado:
        'sistema de gestión de bases de datos relacionales embebido que almacena datos en un único archivo, popular en aplicaciones móviles y proyectos IoT por su simplicidad y bajo <em>overhead</em>.',
    },
    {
      termino: '<em>Streaming</em>',
      significado:
        'transmisión continua. Método de transmisión continua de datos en tiempo real donde la información se procesa incrementalmente conforme llega, sin necesidad de almacenar el <em>dataset</em> completo antes del procesamiento.',
    },
    {
      termino: '<em>Throughput</em>',
      significado:
        'rendimiento de transferencia. métrica que mide la cantidad de datos procesados o transmitidos exitosamente por un sistema en un período específico de tiempo, típicamente expresada en transacciones por segundo o bits por segundo.',
    },
    {
      termino: '<em>Wi-Fi</em>',
      significado:
        'tecnología de red inalámbrica basada en estándares IEEE 802.11 que permite conectividad de alta velocidad a internet y redes locales, ampliamente utilizada en dispositivos IoT que requieren ancho de banda considerable.',
    },
    {
      termino: '<em>Zigbee</em>',
      significado:
        'protocolo de comunicación inalámbrica de corto alcance y bajo consumo energético basado en el estándar IEEE 802.15.4, optimizado para redes <em>mesh</em> de dispositivos IoT en aplicaciones domóticas e industriales.',
    },
  ],
}
