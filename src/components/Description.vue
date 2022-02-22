<template>
    <div class="container mt-4 mb-2">
        <div class="row">
            <!-- left container  -->
            <div class="col col-lg-6 col-12 mr-5">
                <!-- Headers  -->
                <div class="row">
                    <div class="col colHeaders small column-1"><b>Automations</b></div>
                    <div class="col colHeaders small"><b>Campaigns</b></div>
                    <div class="col colHeaders small text-muted"><b>Segments</b></div>
                    <div class="col colHeaders small">Last Month</div>
                </div>

                <!-- items list  -->
                <div class="row my-4 firstrow">
                    <div class="col col-lg-1 col-2"><img class="rounded-circle" height="40" src="https://i.pinimg.com/originals/bd/14/9c/bd149c5c05185de274f040d809f93354.png" alt="Cart"></div>
                    <div class="col col-lg-8">
                        <h2 class="small firsttext"><b>Abandoned Cart 7 Days</b></h2>
                        <small class="text-muted">4024 Sent | 124 Clicks</small>
                    </div>
                    <div class="col col-lg-3 col-4">
                        <h1 class="small aligns"><b>$5,231</b></h1>
                        <small class="text-muted aligns">41 Orders | $150 AOV</small>
                    </div>
                </div>
            
                <div class="row my-4">
                    <div class="col col-lg-1 col-2"><img class="rounded-circle" height="40" src="https://i.pinimg.com/originals/bd/14/9c/bd149c5c05185de274f040d809f93354.png" alt="Cart"></div>
                    <div class="col col-lg-8">
                        <h1 class="small"><b>Abandoned Cart 15 Min</b></h1>
                        <small class="text-muted">4024 Sent | 124 Clicks</small>
                    </div>
                    <div class="col col-lg-3 col-4">
                        <h1 class="small aligns"><b>$24,521</b></h1>
                        <small class="text-muted" aligns>41 Orders | $150 AOV</small>
                    </div>
                </div>
            
                <div class="row my-4">
                    <div class="col col-lg-1 col-2"><img class="rounded-circle" height="40" src="https://i.pinimg.com/originals/bd/14/9c/bd149c5c05185de274f040d809f93354.png" alt="Cart"></div>
                    <div class="col col-lg-8">
                        <h1 class="small"><b>Abandoned Cart 15 Min</b></h1>
                        <small class="text-muted">4024 Sent | 124 Clicks</small>
                    </div>
                    <div class="col col-lg-3 col-4">
                        <h1 class="small aligns"><b>$24,521</b></h1>
                        <small class="text-muted aligns">41 Orders | $150 AOV</small>
                    </div>
                </div>
                <br>
            </div>

            <!-- Speed meter -->
            <div class="col">
                <center class="mt-2">
                    <h3 class="firsttext"><b>Level 5 &nbsp;🡲</b></h3>
                    <p class="small text-muted">+$32,050 in the ast month</p>
                    <canvas id="myChart"></canvas>
                    <h3 class="mt-3"><b>$14,495</b></h3>
                </center>
            </div>
        </div>
    </div>
</template>

<script>
import Charts from 'chart.js';
export default {
    name:'Description',
    mounted(){
        var ctx = document.getElementById("myChart");
        var myChart = new Charts(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Completed","Pending"],
                datasets: [{
                    label: 'Task Completed',
                    data: [15,7],
                    backgroundColor: ['#1a53ff'],
                    borderColor: ['#1a53ff'],
                    borderWidth: 1
                }]
            },
            options: {
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI
            }
        });
        console.log(myChart);
    }
}
</script>

<style scoped>
    .colHeaders:nth-child(n){
        text-align: center;
        padding: 5px;
    }
    .column-1{
        border-bottom: 2.2px solid #1a53ff;
    }
    .firstrow{
        background: #e6e6e66d;
        padding: 10px;
        border-radius: 12px;
        border: 1px solid #e6e6e6f1;
    }
    .firsttext{
        color: #1a53ff;
    }
    .aligns{
        text-align: right;
    }
    #myChart{
        max-height: 300px;
        max-width: 300px;
    }
</style>