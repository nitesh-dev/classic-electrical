<script setup lang='ts'>
</script>
<template>
    <OtherLanding title="Products" />

    <section class="products">
        <div class="page">
            <h2>Electrical Control Panel</h2>
            <p>We Value Our Clients and Hope for Longlastling relationship with them.Here are our Some of Clients</p>
            <div class="info">
                <img class="round" src="../../../public/images/products/Rectangle 1209.jpg">
                <div>
                    <h4>What's in an Electrical Control Panel?</h4>
                    <p>A control panel is a box that contains electrical components required to run a factory machine or
                        process. A typical industrial control panel component list includes:</p>
                    <div class="list">
                        <p>Breakers, suppressors, & fuses</p>
                        <p>Power distribution</p>
                        <p>Power supply</p>
                        <p>Communications</p>
                        <p>Motor drives</p>
                        <p>Terminal blocks</p>
                        <p>Relays & contactors</p>
                        <p>HMI</p>
                        <p>Transformer</p>
                        <p>Enclosure, backplate, & grounding panels</p>
                        <p>Wire duct & DIN rail</p>
                    </div>
                </div>
            </div>

            <p>The control panel also goes by the name of PLC panel, with PLC short for programmable logic
                        controller. This means the PLC is basically an industrial-grade computer, and that high voltage and
                        high stakes are at play with many of these components.</p>
                    <p>No two applications and environments are identical, but here's what you can expect to see in an
                        electrical control panel.</p>

        </div>
    </section>

    <Footer></Footer>
</template>
<style scoped>

.products h2{
    margin-top: 0;
    margin-bottom: 0;
}

.products p{
    color: var(--color-on-surface-700);
}


.products .info {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    margin-bottom: 50px;
}


.products h4{
    margin: 0;
}

.products img{
    width: 100%;
}


.products .list p{
    margin: 8px 0;
    display: flex;
    gap: 10px;
}

.products .list p::before{
    content: url('../../../public/images/arrow-gray.png');
    margin-top: 4px;
}

.products .info>div>p{
    color: var(--color-on-surface);

}

</style>