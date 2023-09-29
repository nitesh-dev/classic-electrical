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

    <section class="products">
        <div class="page">
            <h2>Our Products</h2>
            <div class="card-holder">
                <div class="card">
                    <h4>Electrical Control Panel</h4>
                    <hr class="active">
                    <p>Required for fully automated plant and also to control the power factor near to unity as well as for
                        machine controlling and research & development purpose.</p>
                    <a href="#">
                        <span>View More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M17.7734 12.5L7.22656 1.95312L11.5104 12.5L7.22656 23.0469L17.7734 12.5Z"
                                fill="white" />
                        </svg>
                    </a>
                </div>
                <div class="card right">
                    <h4>Transformer</h4>
                    <hr>
                    <p>To transfer and distribute the power for different circuits as well as to reduce the losses in power
                        transmission distribute the power for different circuits as well</p>
                    <a href="#">
                        <span>View More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M17.7734 12.5L7.22656 1.95312L11.5104 12.5L7.22656 23.0469L17.7734 12.5Z"
                                fill="white" />
                        </svg>
                    </a>
                </div>
                <div class="card right">
                    <h4>Load Break Switch (LBS)</h4>
                    <hr>
                    <p>Updated version of GOAB. And having compact in size and to break the transformer inlet power from
                        main incomer and also provide protection in case of faulty condition </p>
                    <a href="#">
                        <span>View More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M17.7734 12.5L7.22656 1.95312L11.5104 12.5L7.22656 23.0469L17.7734 12.5Z"
                                fill="white" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="image-holder">
                <div class="left">
                    <img class="round" src="../public/images/home/products/Rectangle 15.jpg">
                    <WidgetsArrowTextButton><span>View More</span></WidgetsArrowTextButton>
                </div>
                <div class="right">
                    <img class="round" src="../public/images/home/products/Rectangle 16.jpg">
                    <div class="price">
                        <div>
                            <span>Prize</span>
                            <h4>$2500</h4>
                        </div>
                        <WidgetsArrowTextButton><span>Order Now</span></WidgetsArrowTextButton>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="services">
        <div class="page">
            <div class="top">
                <h2>Our Service</h2>
                <div>
                    <h4>Panel Service</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                </div>
            </div>
            <hr>
            <div class="content">
                <div>
                    <h4>Intelligent Motor Control Centers (iMCC)</h4>
                    <p>The network communication challenges revealed a need to integrate the three major system components:
                        the communications, the hardware, and the software. These next generation, integrated, intelligent
                        MCCs are current technology. The design streamlines installation, set-up, and changes; delivers
                        real-time monitoring of the MCC and easily integrates into a facility-wide network.</p>
                    <WidgetsArrowTextButton><span>View More</span></WidgetsArrowTextButton>
                </div>
                <img class="round" src="../public/images/home/Rectangle 17.jpg">
            </div>
        </div>
    </section>


    <section class="clients">
        <div class="page">
            <div class="top">
                <h2>Our Clients</h2>
                <WidgetsArrowTextButton><span>View More</span></WidgetsArrowTextButton>
            </div>
            <p>We Value Our Clients and Hope for Longlastling relationship with them.Here are our Some of Clients</p>
            <Supporter :isLeft="false"/>
        </div>
    </section>
</template>
<style scoped>
/* -------------------------- our services section ------------------------- */

.clients h2{
    margin: 0;
}

.clients .top{
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    align-items: center;
}

.clients .page>p{
    max-width: 530px;
    color: var(--color-on-surface-700);
    margin-bottom: 50px;
}


















/* -------------------------- our services section ------------------------- */


.services h2 {
    margin: 0;
}

.services .page>.top {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
}

.services .page>.top h4 {
    margin: 0;
}

.services .page>.top p {
    color: var(--color-on-surface-700);
}

.services hr {
    margin: 50px 0;
}

.services .content h4 {
    margin-bottom: 0.5em;
}

.services .content p {
    color: var(--color-on-surface-700);
    margin-bottom: 2em;
}

.services .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 65px;
}

.services .content img {
    width: 100%;
    height: auto;
    object-fit: cover;
}








/* -------------------------- our products sections ------------------------- */


.products {}

.products h2 {
    margin-bottom: 0.8em;
}

.products .card-holder {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.products .card-holder .right>* {
    margin-left: 80px;
}

.products .card-holder .right hr {
    margin-left: 0;
}

.products .card-holder p {
    margin-top: 28px;
    margin-bottom: 20px;
    color: var(--color-on-surface-700);
}

.products .card-holder a {
    display: flex;
    align-items: center;
    gap: 12px;
}


.products hr {
    border: none;
    border-bottom: 1px solid #444;
}

.products hr.active {
    border-bottom: 1px solid #EA560B;
}


.products .image-holder {
    margin-top: 110px;
    display: grid;
    grid-template-columns: 2.1fr 1fr;
    gap: 8px;
}

.products .image-holder img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.products .image-holder .left img {
    margin-bottom: 50px;
}

.products .image-holder .price {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    margin-right: 0;
}

.products .price>div>span {
    color: var(--color-on-surface-700);
}

.products .price h4 {
    margin: 0;
}







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