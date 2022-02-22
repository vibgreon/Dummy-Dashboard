<template>
  <div>
    <Header />
    <Stats />
    <Chart />
    <Description />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Stats from "./Stats.vue";
import Description from "./Description.vue";
import Chart from "./Chart.vue";

export default {
  name: 'Main',
  components:{
    Header,
    Stats,
    Description,
    Chart
  }
}
</script>

