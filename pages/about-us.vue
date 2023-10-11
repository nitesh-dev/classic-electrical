<script setup lang='ts'>
</script>
<template>
    <OtherLanding title="About Us" />

    <section class="about">
        <div class="page">
            <h2>About Us</h2>
            <p>We are one of the leading Supplier & Service provider of South Gujarat region.</p>
            <div class="image-holder">
                <img class="round" src="../public/images/about/Rectangle 1212.jpg">
                <img class="round" src="../public/images/about/Rectangle 1213.jpg">
            </div>

            <div class="list">
                <p>We are one of the leading Supplier & Service provider of South Gujarat region the field Electrical Power
                    Distribution & Transmission located at Surat since last two decades</p>
                <p>We serve customer with all kind Complete Solution for electrical work from LT to HT with products
                    includes Transformer, LBS (Load Break Switch),GOAB
                    ( Gang Operated Air Break), Electrical Panels, VCB (Vacuum Circuit Breaker), DGSet, Servo Stabilizer
                    etc.</p>
                <p>We have large customer base with high net worth in different segments like Textile, Diamond, Medical
                    Equipment's, Chemical Manufactures,Construction
                    Companies, Engineering Companies, Educational Institutes etc. </p>
                <p>Our strengths are our vast knowledge bank and experience generated from decades of practices in
                    electrical projects of industrial, commercial as well as residential entities.</p>
                <p>We have extensive range of Outdoor & indoor Transformers for LT, HT and Heavy Duty Purpose as we are
                    authorized dealer of Powerkraft Transformer,
                    Vadodara</p>
                <p>With more implementation in extending our boundaries, we develop MV/LV Switch board manufacturing
                    includes PCC Power Control Centers , MCC (Motor
                    Control Centers), iMCC (Intelligent Motor Control Centers), Power Distribution Panel, VFD Panel, Flame
                    Proof Panel, Automatic Power Factor Control Panel
                    (APFC) and Test Bench Panel</p>
                <p>In this fast growing industrial era need of power backup is must which includes DG Set and Stabilizer
                    requirement in various sectors as provision for backup
                    at times of existing power supply failure or disconnection due to various reason like maintenance,
                    accidental issues. For that we provide dg set and stabilizer
                    with prompt service availability by our excellent team</p>
            </div>

            <div class="content top">
                <img class="round" src="../public/images/about/Rectangle 1215.jpg">
                <div>
                    <h2>Our Vision</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. to
                        Lorem Ipsum has been the industry's standard dummy text ever since the will
                        1500s, when an unknown printer took a galley of type and scrambled it to see
                        make a type specimen book.</p>
                    <p>It has survived not only five centuries, but alsothe leap into electronic type can
                        remaining essentially unchanged. It was popularised in the 1960s with the will
                        release of Letraset sheets containing Lorem Ipsum passages.</p>
                </div>
            </div>

            <div class="content">
                <div>
                    <h2>Our Mission</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. to
                        Lorem Ipsum has been the industry's standard dummy text ever since the will
                        1500s, when an unknown printer took a galley of type and scrambled it to see
                        make a type specimen book.</p>
                    <p>It has survived not only five centuries, but alsothe leap into electronic type can
                        remaining essentially unchanged. It was popularised in the 1960s with the will
                        release of Letraset sheets containing Lorem Ipsum passages.</p>
                </div>
                <img class="round" src="../public/images/about/Rectangle 1216.jpg">

            </div>
        </div>
    </section>

    <Reviews />
    <GetInTouch />
    <Footer></Footer>
</template>
<style scoped>
.about h2 {
    margin-bottom: 0;
}

.about .page>p {
    color: var(--color-on-surface-700);
    margin-top: 0;
    margin-bottom: 50px;
}

.about .image-holder {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 50px;
}

.about .image-holder img {
    width: 100%;
}




/* list */

.about .list p {
    position: relative;
    margin-left: 28px;
}

.about .list p::before {
    content: url('../public/images/arrow.png');
    position: absolute;
    left: -30px;
    top: 4px;
}

.about .list {
    margin-bottom: 100px;
}



.about .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    margin-bottom: 80px;
}

.about .content img {
    width: 100%;
}

.about .content h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-family: 'Heebo';
}

.about .content p {
    margin: 0;
    margin-bottom: 8px;
    color: var(--color-on-surface-700);
}



@media only screen and (max-width: 700px) {

    .about .image-holder {

        gap: 10px;

    }

    .about .content {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-bottom: 60px;
    }

    .about .content * {
        text-align: center;
    }

    .about .content.top {
        flex-direction: column-reverse;
    }
}
</style>