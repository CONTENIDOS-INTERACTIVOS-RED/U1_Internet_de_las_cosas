<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Protocolos clave (MQTT, CoAP)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Los protocolos de comunicación especializados para IoT han revolucionado la forma en que los dispositivos inteligentes intercambian información en redes distribuidas. Diseñados para operar eficientemente en entornos con limitaciones de ancho de banda, procesamiento y energía, estos protocolos permiten mantener comunicaciones confiables optimizando los recursos del sistema. Cada protocolo ha sido desarrollado para resolver desafíos específicos en la comunicación máquina a máquina (M2M). Por ejemplo:
    
        .bg-color-5.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>MQTT</b> se destaca por su arquitectura publicar-suscribir, ideal para comunicación asíncrona.

            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>CoAP</b> emplea un modelo RESTful optimizado para dispositivos con recursos limitados.

            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>HTTP/HTTPS</b> ofrece compatibilidad con infraestructuras web existentes.

            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>BLE</b> (Bluetooth Low Energy) y Zigbee están diseñados para comunicaciones de corto alcance con muy bajo consumo energético.

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Subtítulo tema

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
  name: 'Tema4',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
