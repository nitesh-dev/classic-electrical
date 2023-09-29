<script setup lang='ts'>

// about section images
import about1 from '../public/images/home/about/Rectangle 6.jpg'
import about2 from '../public/images/home/about/Rectangle 7.jpg'
import about3 from '../public/images/home/about/Rectangle 8.jpg'
import about4 from '../public/images/home/about/Rectangle 9.jpg'
import about5 from '../public/images/home/about/Rectangle 10.jpg'
import about6 from '../public/images/home/about/Rectangle 11.jpg'
import about7 from '../public/images/home/about/Rectangle 13.jpg'

const aboutImages = [about1, about2, about3, about4, about5, about6, about7, about1, about2, about3, about4, about5, about6, about7]


</script>
<template>
    <HomeLanding />
    <section class="about">
        <div class="page">
            <div class="first">
                <div class="left">
                    <h2>About Us</h2>
                    <p>We are one of the leading Supplier & Service provider of South Gujarat region.</p>
                    <WidgetsArrowTextButton><span>View More</span></WidgetsArrowTextButton>
                </div>
                <div>
                    <p>We serve customer with all kind of Complete Solution for electrical work from LT to HT with products
                        includes
                        Transformer, LBS ( Load Break Switch), GOAB ( Gang Operated Air Break), Electrical Panels, VCB
                        (Vacuum
                        Circuit Breaker), DG Set, Servo Stabilizer etc.
                    </p>
                    <p>We have large customer base with high net worth in different segments like Textile, Diamond, Medical
                        Equipment's, Chemical Manufactures, Construction Companies, Engineering Companies, Educational
                        Institutes
                        etc. and still counting….</p>
                </div>
            </div>
        </div>
        <div class="image-holder hide-scroll">
            <div>
                <img class="round" v-for="item in aboutImages" :src="item">
            </div>
        </div>
    </section>
</template>
<style scoped>
/* --------------------------- about section ------------------ */
.about .page .first {
    display: grid;
    grid-template-columns: 1fr 1fr;
}


.about h2 {
    margin: 0;
}

.about .left p {
    color: var(--color-on-surface-700);
    max-width: 480px;
    margin-top: 0;
    margin-bottom: 50px;
}


.about p {
    margin-top: 0;
    margin-bottom: 12px;
}


.about .image-holder {
    margin-top: 110px;
    overflow-x: auto;
    margin: 0;
}

.about .image-holder div {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 calc(max(var(--page-gap), ((100% - var(--max-page-width)) * 0.5) - var(--page-gap)));

}

.about .image-holder img {
    width: 227px;
    height: 300px;
    object-fit: cover;
}
</style>