<template>
  <b-container>

    <b-row>
      <b-col>
        <h2 class="bang">
          Contact Us
        </h2>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <p>
          If you would like to get in touch with the team behind 
          HomeForNow, please contact us on 
          <span><a href="mailto:info@homefornow.org.au">info@homefornow.org.au</a></span>.
          The email address is monitored by Anglicare WA. If you have any 
          feedback (good or bad) we’d love to hear from you.
        </p>
      </b-col>

      <b-col cols="12">
        <p>
        <i>
          Note that the HomeForNow team is only responsible for this Web 
          Application and provides no accommodation services. HomeForNow 
          can not provide any advice on homelessness or provide one to one 
          support.
        </i>
        </p>
      </b-col>
    </b-row>

    <b-row :style="{ marginTop: '16px' }">
      <b-col cols="12">
        <h2 class="bang"> If you need urgent assistance please contact: </h2>
      </b-col>
    </b-row>

    <contact/>
  </b-container>
</template>

<script>
import ContactInfo from './Modules/SubModules/ContactInfo';

export default {
  components: {
    contact: ContactInfo,
  },
};
</script>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>