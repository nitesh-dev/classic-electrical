<script setup lang='ts'>
</script>
<template>
    <OtherLanding title="Products" />

    <section class="products">
        <div class="page">
            <h2>Products</h2>
            <div>
                <div class="left">
                    <div class="content active">
                        <h4>Electrical Control Panel</h4>
                        <p>Required for fully automated plant and also to control the power factor near to unity as well as
                            for machine controlling and research & development purpose.</p>
                        <NuxtLink>
                            View More
                            <img src="../public/images/arrow.png">
                        </NuxtLink>
                    </div>

                    <div class="content">
                        <h4>Transformer</h4>
                        <p>To transfer and distribute the power for different circuits as well as to reduce the losses in power transmission.</p>
                        <NuxtLink>
                            View More
                            <img src="../public/images/arrow.png">
                        </NuxtLink>
                    </div>

                    <div class="content">
                        <h4>Load Break Switch (LBS)</h4>
                        <p>Updated version of GOAB. And having compact in size and to break the transformer inlet power from main incomer and also provide protection in case of faulty condition with emergency indication.</p>
                        <NuxtLink>
                            View More
                            <img src="../public/images/arrow.png">
                        </NuxtLink>
                    </div>

                    <div class="content">
                        <h4>Gang Operated Air-break Switch</h4>
                        <p>used to break the transformer inlet power from main incomer and also provide protection in case of faulty condition</p>
                        <NuxtLink>
                            View More
                            <img src="../public/images/arrow.png">
                        </NuxtLink>
                    </div>

                    <div class="content">
                        <h4>All types of Earthing</h4>
                        <p>Earthing is used to protect the human being from leakage current in the machines or any conductive places.</p>
                        <NuxtLink>
                            View More
                            <img src="../public/images/arrow.png">
                        </NuxtLink>
                    </div>

                    <div class="content">
                        <h4>Power Cables</h4>
                        <p>A power cable is an electrical cable, an assembly of one or more electrical conductors, usually held together with an overall sheath. The assembly is used for transmission of electrical power.</p>
                        <NuxtLink>
                            View More
                            <img src="../public/images/arrow.png">
                        </NuxtLink>
                    </div>

                    <div class="content">
                        <h4>Vaccum Circuit Breakers</h4>
                        <p>Provide the breaking in case of faulty condition and also reduce the spark in case of humidity.</p>
                        <NuxtLink>
                            View More
                            <img src="../public/images/arrow.png">
                        </NuxtLink>
                    </div>

                </div>
                <div class="right">
                    <img class="round" src="../public/images/products/Rectangle 1209.jpg">
                    <img class="round" src="../public/images/products/Rectangle 1210.jpg">
                    <img class="round" src="../public/images/products/Rectangle 1211.jpg">
                </div>
            </div>
        </div>
    </section>

    <Reviews />
    <Footer></Footer>
</template>
<style scoped>



.products .page>div{
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 100px;
}

.products .right{
    display: flex;
    flex-direction: column;
    gap: 20px;

}

.products .right img{
    width: 100%;
}



.products .left{
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 60px;
}

.products .left::before{
    content: "";
    border-left: 1px solid #444444;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
}


.products .content.active{
    border-left: 1px solid #EA560B;
}

.products .content{
    position: relative;
    padding-left: 50px;
}

.products .content::before{
    content: "";
    border-left: 1px solid transparent;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
}


.products .content h4{
    margin: 0;
}

.products .content p{
    color: var(--color-on-surface-700);
    margin: 0.5em 0;
}

.products .content a{
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 12px;
}


</style>