<template xmlns="http://www.w3.org/1999/html">
  <div class="under-construction">
    <div class="content-container">
      <Title>Kontakt</Title>
      <p>
        Tel: 071 951 88 88<br>
        Fax: 071 951 88 89<br>
        E-Mail: info{at}bildhauer-stein.ch<br>
        <small>(um Spam zu vermeiden veröffentlichen wir die E-Mail Adresse nicht in Klartext. Ersetzen sie in der obigen Adresse {at} mit einem @ Zeichen.)</small>
      </p>
      <Title>Adresse</Title>
      <p>
        Rickenbacher<br>
        Bildhauerei & Restaurationen<br>
        Wilerstrasse 51<br>
        9536 Schwarzenbach
      </p>
      <Title>Lageplan</Title>
      <p>
        <a
          href="http://maps.google.ch/maps?f=q&source=s_q&hl=de&geocode=&q=Bildhauerei+%26+Restaurationen+Rickenbacher,+Andreas+Rickenbacher,+Schwarzenbach,+Jonschwil&sll=47.442471,9.076596&sspn=0.025803,0.024161&ie=UTF8&hq=Bildhauerei+%26+Restaurationen+Rickenbacher,+An"
          title="Lageplan Google Maps">Lageplan</a>
      </p>
    </div>
    <div class="image-container">
      <p>Die Website wird momentan umgebaut.</p>
      <img
        src="/misc/under-construction.jpg"
        title="under construction"
        alt="under construction" >
    </div>
  </div>
</template>

<script>
import Title from './Title'

export default {
  name: 'UnderConstruction',
  components: { Title }
}
</script>

<style scoped lang="scss">
  small {
    font-size: 0.8em;
  }
  .under-construction {
    display: flex;
    .image-container {
      margin-left: 20px;
    }
    @media screen and (max-width: 770px) {
      flex-direction: column-reverse;
      align-items: center;
      img {
        width: 100px;
      }
      .image-container {
        margin-left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .content-container {
        h3 {
          text-align: center;
        }
        p {
          max-width: 320px
        }
      }
    }
  }
</style>
