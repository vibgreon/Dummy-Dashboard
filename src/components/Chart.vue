<template>
    <div class="container my-5">
        <canvas height="100" id="myChart-diagram"></canvas>
    </div>
</template>

<script>
import Charts from 'chart.js';
import myChart from '../myChart-data.js'

export default {
    name:'Chart',
    data() {
        return {
            myChart: myChart
        }
    },
    mounted() {
        const ctx = document.getElementById('myChart-diagram').getContext("2d");
        var gradientFill = ctx.createLinearGradient(0,0,0,520);
        gradientFill.addColorStop(0, 'blue');   
        gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0)');
        this.myChart.data.datasets[0].backgroundColor = gradientFill;
        new Charts(ctx, this.myChart);
        console.log(ctx);
        console.log(this.myChart.data.datasets[0].backgroundColor);
    }
}
</script>