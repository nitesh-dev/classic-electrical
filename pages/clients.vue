<script setup lang='ts'>
</script>
<template>
    <OtherLanding title="Clients" />

    <section class="about">
        <div class="page">
            <h2>Our Valuable Customer</h2>
            <p>We Value Our Clients and Hope for Longlastling relationship with them.Here are our Some of Clients</p>
            <div class="col">
                <img class="round" src="../public/images/clients/Rectangle 1214.jpg">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum nisl sit amet sapien luctus, eget
                    egestas ligula efficitur. Vestibulum vestibulum neque nec nibh maximus facilisis. Sed pellentesque, enim
                    auctor bibendum ultricies, mi dolor blandit erat, non consectetur quam odio quis risus. Nunc consectetur
                    enim id tortor interdum faucibus. Mauris convallis ligula ac mi porta pharetra eu ultrices lorem. Morbi
                    ipsum justo, tempus non congue vitae, viverra at ex. Fusce eu feugiat tellus, nec dictum dui. Cras id
                    tincidunt felis, vitae porttitor lorem. Donec id dui eu orci pharetra sollicitudin nec quis quam. Proin
                    luctus porta mollis. Sed lobortis ex sed nisl vestibulum pellentesque.</p>
            </div>

            <Supporter :isLeft="false"/>
            <Supporter :isLeft="true"/>
        </div>
    </section>


    <section class="products">
        <div class="page">
            <div class="left">
                <h2>Our Projects</h2>
                <p>We Value Our Clients and Hope for Longlastling relationship with them.Here are our Some of Clients</p>
                <hr>
            </div>
            <div class="right">
                <div>
                    <img class="round" src="../public/images/clients/Rectangle 1228.jpg">
                </div>
                <div>
                    <img class="round" src="../public/images/clients/Rectangle 1229.jpg">
                </div>
                <div>
                    <img class="round" src="../public/images/clients/Rectangle 1230.jpg">
                </div>
            </div>

        </div>
    </section>
    <FAQ />
    <Footer></Footer>
</template>
<style scoped>


/* ------------------------------------ product section --------------------- */


.products{

}


.products .page{
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: end;
}


.products h2{
    margin-bottom: 0;
}

.products p{
    color: var(--color-on-surface-700);
    margin-bottom: 2em;
}

.products hr{
    width: calc(100% + 80px);
    margin: 0;
    margin-bottom: 4px;
}


.products .right{
    display: flex;
    gap: 30px;
    align-items: end;
    overflow-x: auto;
}
.products img{
    width: 290px;
    height: auto;
}











/* ---------------------------------- about section ----------------------------- */
.about h2{
    margin-top: 0;
    margin-bottom: 0;
}


.about .page .col{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 80px;
}

.about .col p{
    line-height: 34px;
}

.about .page>p{
    color: var(--color-on-surface-700);
}

.about .col img{
    width: 100%;
}




</style>