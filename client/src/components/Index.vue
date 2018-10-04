<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <youthlocation/>
      </b-col>
    </b-row>
    <b-row :style="{ marginTop: '7em' }">
      <b-col cols="12" class="d-inline-flex">
        <h1 class="bang black fluid-h1" :style="{ zIndex: '2' }">
          Where  <span class="alt-black"> to go </span> <br>
          Who <span class="alt-black"> to call </span>
        </h1>

        <h1 class="bang sec-color"
            :style="{ fontSize: 'calc(var(--fluid-h1) * 2.555)', margin: '-1.1rem 0 0 -1.2rem' }"
        >
          &
        </h1>
      </b-col>
    </b-row>

    <!-- <b-row :style="{ marginTop: '100px' }">
      <b-col>
        <h2 class="bang" :style="{ margin: '0' }"> Close To You. </h2>
        <h3> Nearest crisis accommodation services. </h3>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" md="6">

      </b-col>
      <b-col cols="12" md="6">
        
      </b-col>
    </b-row> -->

    <b-row>
      <b-col>
        <h2 class="bang black m-0">
          Who To Call.
        </h2>
        <h3 class="alt-black mb-4">
          Numbers to call if you need help.
        </h3>
      </b-col>
    </b-row>

    <contact/>
  </b-container>
</template>

<script>
import YouthLocation from './Modules/SubModules/YouthLocation';
import Contact from './Modules/SubModules/ContactInfo';

export default {
  components: {
    youthlocation: YouthLocation,
    contact: Contact,
  },
};
</script>
