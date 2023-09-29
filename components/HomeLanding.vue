<script setup lang='ts'>

import landingImage from '../public/images/home-landing.jpg'


const swipeImages = [landingImage, landingImage]




const autoPlay = {
    delay: 10000,
    disableOnInteraction: false,
}


const navigation = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
}


const effect = {
    prev: {
        shadow: false,
        translate: ['-100%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}

</script>
<template>
    <section class="landing">
        <div class="page">
            <div class="content">
                <img class="logo" src="../public/images/logo.png" alt="logo">
                <div class="list">
                    <NuxtLink class="active" to="/">Home</NuxtLink>
                    <NuxtLink to="/">About Us</NuxtLink>
                    <NuxtLink to="/">Products</NuxtLink>
                    <NuxtLink to="/">Clients</NuxtLink>
                    <NuxtLink to="/">Services</NuxtLink>
                    <NuxtLink to="/">Reviews</NuxtLink>
                    <NuxtLink to="/">Contact Us</NuxtLink>
                </div>

                <h1>Electrical Products</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since</p>
            </div>


            <div style="display: flex; justify-content: space-between;">
                <WidgetsArrowTextButton>
                    <span>Contact Us</span>
                </WidgetsArrowTextButton>
                <div class="button-holder">
                    <div class="button swiper-button-prev">
                        <WidgetsArrowButton />
                    </div>
                    <div class="button swiper-button-next">
                        <WidgetsArrowButton :right="true" />
                    </div>
                </div>
            </div>

            <div class="projects">
                <div>
                    <div class="count">
                        <h3>999</h3>
                        <h4>Sales/Year</h4>
                    </div>
                    <hr>
                    <div class="count">
                        <h3>2340</h3>
                        <h4>Projects</h4>
                    </div>
                    <hr>
                    <div class="count">
                        <h3>2285</h3>
                        <h4>Happy Clients</h4>
                    </div>
                </div>
            </div>

        </div>
        <div class="background">

            <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]" :slides-per-view="1" :loop="true"
                :effect="'creative'" :autoplay="autoPlay" :navigation="navigation" :creative-effect="effect">
                <SwiperSlide v-for="slide, index in swipeImages" :key="index">
                    <div class="image-holder">
                        <img :src="slide">
                        <div class="grad"></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>
<style scoped>
.landing {
    min-height: 1000px;
    position: relative;
    background-color: transparent;
}

.landing .page{
    margin-top: 0;
    margin-bottom: 0;
}

.landing .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: var(--color-surface);
}

.landing .background .image-holder{
    position: relative;
}
.landing .background .grad{
    background: linear-gradient(rgba(0, 0, 0, 0), var(--color-surface));
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
}


.landing .logo {
    margin: 30px 0;
    width: 120px;
}

.landing .list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.landing .list a {
    display: block;
    color: var(--color-on-surface-700);
    margin: 0;
    transition: all 200ms;
    position: relative;
}

.landing .list a.active {
    color: var(--color-on-surface);
}

.landing .list a.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30px;
    border-bottom: 1px solid var(--color-on-surface);
}



.landing h1 {
    margin: 0;
    margin-top: 150px;
    color: transparent;
    font-weight: normal;
    -webkit-text-stroke: 1px var(--color-on-surface);
    text-transform: 1px var(--color-on-surface);
}

.landing p {
    margin: 0;
    max-width: 533px;
    color: var(--color-on-surface-700);
    margin-bottom: 40px;
}




.landing .projects>div {
    margin-top: 50px;
    display: flex;
    gap: 100px;
    align-items: center;
    width: max-content;
    margin-left: auto;
    border-image: linear-gradient(#3E3E3E00, white, #46464600) 20;
    border-width: 1px;
    border-style: solid;
    border-left: none;
    border-right: none;
    padding: 50px 0;


}

.landing .projects hr {
    width: 1px;
    height: 60px;
    border-right: var(--color-on-surface-700);
    display: block;
}

.landing .projects>div div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.landing .projects h3,
.landing .projects h4 {
    font-weight: normal;
    margin: 0;
    font-family: 'heebo';
}

.landing .projects h4 {
    color: var(--color-on-surface-700);
}










/* disable default swiper  buttons */

.button-holder {
    display: flex;
    width: max-content;
    gap: 44px;
    margin-left: auto;
}

.swiper-button-prev,
.swiper-button-next {
    position: static;
    width: unset;
    height: unset;
    margin: unset;
}

.swiper-button-prev::after,
.swiper-button-next::after {
    content: '';
}</style>