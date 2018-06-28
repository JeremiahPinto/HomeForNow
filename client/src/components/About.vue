<template>
  <b-container>

    <b-row>
      <b-col>
        <h1 class="bang sec-color">
          Home For Now
        </h1>
        <h5 class="bold">
          A Web App that allows young people to search for vacant places 
          in the Crisis and Transitional Accommodation sectors, and allows
          Services to manage requests for housing.
        </h5>
        <hr>
      </b-col>      
    </b-row>

    <b-row>
      <b-col cols="12" md="6">
        <h2 class="bang">
          About Us
        </h2>
        <p>
          About half of the 100,000 people who are homeless on any night in 
          Australia are under 25. The experience of homelessness is 
          confusing and isolating. We think that the way our system works 
          shouldn’t make that feeling worse. This web application was 
          developed to solve one small part of the problem – the search for 
          a vacancy in an accommodation service: a HomeForNow.
        </p>
      </b-col>
      <b-col cols="12" md="6">
        <h2 class="bang">
          For You
        </h2>
        <p>
          HomeForNow works by making a listing of the live vacancies 
          possible and connecting young people experiencing homelessness 
          with the services who are best placed to provide support and 
          warmth. Above all, it puts live information directly in the hands 
          of young people and allows them to make their own choices in 
          their journey out of homelessness.
        </p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h2 class="bang">
          Who We Are
        </h2>
        <p>
          HomeForNow was developed by a partnership between Anglicare WA, 
          Coders for Causes and UWA’s Innovation Quarter. The tough work 
          of development was taken on by a group of volunteers from Coders 
          for Causes alongside emerging designers who volunteered from the 
          community. These volunteers worked closely with Anglicare WA 
          so that HomeForNow would closely meet the needs of young people 
          and the sector. The team continues to oversee HomeForNow’s 
          development, while Anglicare WA works to integrate the 
          technology into the youth accommodation sector.
        </p>
      </b-col>
    </b-row>

    <b-row no-gutters align-v="center" align-h="center">
      <b-col cols="12" sm="6" lg="3">
        <b-img-lazy src="../assets/CFC_Logo.png" fluid class="logo"/>
      </b-col>

      <b-col cols="12" sm="6" lg="3">
        <b-img-lazy src="../assets/Luke_Logo.png" fluid class="logo"/>
      </b-col>
      
      <b-col cols="12" sm="6" lg="3">
        <b-img-lazy src="../assets/AWA_Horizontal.png" fluid class="logo"/>
      </b-col>

      <b-col cols="12" sm="6" lg="3">
        <b-img-lazy src="../assets/UWA_Horizontal.png" fluid class="logo"/>
      </b-col>
    </b-row>

    <b-row style="margin-top: 16px;">
      <b-col>
        <h3 class="bold">
          Entry Point
        </h3>
        <h5 class="bold sec-color">
          6496 0001 <br>
          1800 124 684
        </h5>
      </b-col>

      <b-col>
        <h3 class="bold">
          Crisis Care
        </h3>
        <h5 class="bold sec-color">
          9223 1111 <br>
          1800 199 008
        </h5>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {
};
</script>

<style scoped>
hr {
  height: 2px;
  width: 52.3437vw;
  background-color: #616161;
  margin-top: 0px;
  float: left;
}

h2 {
  margin-top: 20px;
}

.logo {
  padding: 10px;
}
</style>