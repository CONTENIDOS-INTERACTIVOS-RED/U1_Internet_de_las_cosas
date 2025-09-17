<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fundamentos y Arquitectura de IoT'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 El Internet de las Cosas ha emergido como una de las tecnologías más transformadoras del siglo XXI, redefiniendo la manera en que los dispositivos físicos interactúan con el mundo digital. Esta revolución tecnológica permite que objetos cotidianos, desde electrodomésticos hasta sensores industriales, se conecten a internet y compartan información de manera autónoma.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Como ingeniero de software, comprenderá que esta interconexión masiva de dispositivos genera oportunidades sin precedentes para crear aplicaciones inteligentes que optimicen procesos, mejoren la calidad de vida y generen valor agregado en múltiples sectores económicos. La base fundamental de esta tecnología reside en la convergencia de sensores, procesamiento de datos, conectividad de red y análisis inteligente de información.
    

    .titulo-figura.mb-4
      h5 Figura 1.
      span Arquitectura de la Plataforma <em>Watson</em> IoT
    
    .row.justify-content-center.align-items-center.mb-5.bg-color-4.p-5
      .col-lg-10
        figure
          img(src="@/assets/curso/tema1/3.svg", data-aos="zoom-in")
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-5 La arquitectura del Internet de las Cosas representa un ecosistema complejo que requiere una comprensión profunda de múltiples componentes tecnológicos que trabajan de manera coordinada. Estos sistemas integran:
    
        .bg-color-5.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <em>Hardware</em> especializado
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Protocolos de comunicación
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Plataformas de <em>software</em>
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Servicios en la nube
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 El dominio de estos fundamentos le permitirá diseñar e implementar soluciones IoT que respondan a necesidades específicas del mercado, considerando aspectos críticos como:
    
        .bg-color-6.p-4(data-aos="fade-left").mb-5
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Eficiencia energética.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Latencia de comunicación.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Seguridad de datos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Interoperabilidad entre diferentes dispositivos y plataformas.
        
        p La comprensión de estos elementos es esencial para desarrollar aplicaciones que puedan adaptarse a los constantes cambios tecnológicos y requerimientos del mercado.
        p El estudio de los fundamentos y arquitectura de IoT le proporcionará las herramientas conceptuales y prácticas necesarias para abordar los desafíos técnicos que presenta esta tecnología emergente. A través de esta unidad, desarrollará competencias en:

    .bg-full-width.bg-color-7
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/6.svg" alt="" style="width: 90px")
              h5.text-center 01
              p.mb-0.text-center Selección de componentes apropiados.

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/7.svg" alt="" style="width: 90px")
              h5.text-center 02
              p.mb-0.text-center Diseño de arquitecturas eficientes.

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/8.svg" alt="" style="width: 90px")
              h5.text-center 03
              p.mb-0.text-center Implementación de <em>middleware</em> que facilite la integración de sistemas heterogéneos.


        .row.align-items-center.mb-5
          .col-lg-auto
            img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Esta base sólida de conocimientos le permitirá no solo comprender cómo funcionan los sistemas IoT existentes, sino también innovar y crear nuevas soluciones que aprovechen al máximo las capacidades de esta tecnología. El enfoque integral de esta unidad garantiza que adquiera tanto la perspectiva técnica como la visión estratégica necesarias para liderar proyectos de IoT en su futura carrera profesional.
        
        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 ¿Qué Es el Internet de las Cosas?
                      p.mb-0 Para conocer más sobre IoT, le invitamos a ver el siguiente vídeo. 
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/kOadebr8Ydc" target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
