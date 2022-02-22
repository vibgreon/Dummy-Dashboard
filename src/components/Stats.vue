<template>
    <div class="container">
        <div class="row">
            <div class="col cards">
                <p class="small text-muted">Total Revenue <span class="badge text-success">+12.5%</span></p>
                <h3>$32,62.72</h3>
                <small class="text-muted">433 Orders</small>
            </div>

            <div class="col cards">
                <p class="small text-muted">Subscribers <span class="badge text-success">+32.5%</span></p>
                <h3>484,205</h3>
                <small class="text-muted">$56 Average Orders</small>
            </div>

            <div class="col cards">
                <p class="small text-muted">Conversations <span class="badge text-danger">-3.4%</span></p>
                <h3>552,553</h3>
                <small class="text-muted">5min Average Response Time</small>
            </div>

            <div class="col cards">
                <p class="small text-muted">Popup Conversion Rate <span class="badge text-success">+12.5%</span></p>
                <h3>25%</h3>
                <small class="text-muted">5% Sales Conversion Rate</small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Stats'
}
</script>

<style scoped>
.cards{
    box-shadow: 1px 1px 5px #a7a6a6;
    /* border-right: 0.5px solid #a7a6a6; */
    margin: 20px;
    border-radius: 15px;
    padding: 12px;
}
.cards:nth-child(4){
    /* border: none; */
}
</style>