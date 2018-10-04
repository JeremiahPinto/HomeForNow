<template>
  <b-container class="p-0">
    <b-row no-gutters>
      <b-col cols="12">
        <h3 class="mt-5 mb-4">OUR BED COUNT</h3>
      </b-col>
      <b-col cols="12">
        <servicebeds :type="Bed.type" :name="Bed.name">
          <div slot="process">
            <b-row>
              <b-col cols="12" md="4" v-for="process in processOptions" :key="process.value">
                <b-row no-gutters class="text-md-center">
                  <b-col cols="8" md="12" order="last" order-md="first">
                    <label class="mb-1 m-md-0"> {{ process.text }} </label>
                  </b-col>

                  <b-col offset="2" cols="2" offset-md="0" md="12" class="text-center">
                    <input type="radio" :value="process.value" v-model="Bed.process">
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </servicebeds>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <h3 class="mt-5 mb-4">OUR OPEN REQUESTS</h3>
      </b-col>

      <b-col cols="12">
        <requests :Request="RequestOpen">
          <b-form-checkbox-group  v-model="RequestOpen.contacted"
                                  :options="contact"
                                  slot="contacted"
                                  class="text-center"
          >
          </b-form-checkbox-group>

          <div slot="notes">
            <b-form-group label="Notes:" class="text-left">
              <b-form-textarea  v-model.trim="RequestOpen.notes"
                                :rows="8"
                                spellcheck
                                no-resize>
              </b-form-textarea>
            </b-form-group>
            <b-button class="float-right"
                      type="submit"
                      variant="pink"
                      :style="{ color: 'var(--white)' }"
            >
              Save Note
            </b-button>
          </div>
        </requests>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <h3 class="mt-5 mb-4">OUR CLOSED REQUESTS</h3>
      </b-col>

      <b-col cols="12">
        <requests :Request="RequestClosed">
          <p slot="contacted" class="m-0">Closed on {{ RequestClosed.closed }}</p>

          <div slot="notes">
            <b-form-group label="Notes:" class="text-left">
              <b-form-textarea  v-model.trim="RequestClosed.notes"
                                :rows="8"
                                spellcheck
                                no-resize>
              </b-form-textarea>
            </b-form-group>
            <b-button class="float-right"
                      type="submit"
                      variant="pink"
                      :style="{ color: 'var(--white)' }"
            >
              Save Note
            </b-button>
          </div>
        </requests>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ServiceBeds from './SubModules/ServiceBeds';
import Requests from './SubModules/Requests';

export default {
  components: {
    servicebeds: ServiceBeds,
    requests: Requests,
  },
  data() {
    return {
      Bed: {
        type: '',
        name: 'ParentChild',
        process: 'Available',
      },
      RequestOpen: {
        gender: 'Male',
        contact: {
          number: '0412345678',
          email: 'example@example.com',
        },
        name: 'John Doe',
        age: '22',
        contacted: false,
        notes: '',
      },
      RequestClosed: {
        gender: 'Male',
        contact: {
          number: '0412345678',
          email: 'example@example.com',
        },
        name: 'John Doe',
        age: '22',
        closed: '21/07/18',
        notes: '',
      },
      contact: [{ value: false, text: 'Contacted' }],
      processOptions: [
        { value: 'Available', text: 'AVAILABLE' },
        { value: 'Pending', text: 'PENDING' },
        { value: 'Unavailable', text: 'OCCUPIED' },
      ],
    };
  },
};
</script>

<style scoped>
* {
  color: #676767;
}
</style>
