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
    <section class="mobile-nav phone">
        <div class="page">
            <div class="nav">
                <img src="../public/images/logo.png">
                <div class="menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M28.5051 8.83174C28.5051 8.39694 28.3324 7.97995 28.025 7.6725C27.7175 7.36505 27.3005 7.19232 26.8657 7.19232H7.19263C6.75782 7.19232 6.34083 7.36505 6.03338 7.6725C5.72593 7.97995 5.5532 8.39694 5.5532 8.83174C5.5532 9.26655 5.72593 9.68354 6.03338 9.99099C6.34083 10.2984 6.75782 10.4712 7.19263 10.4712H26.8657C27.3005 10.4712 27.7175 10.2984 28.025 9.99099C28.3324 9.68354 28.5051 9.26655 28.5051 8.83174ZM28.5051 17.0289C28.5051 16.5941 28.3324 16.1771 28.025 15.8696C27.7175 15.5622 27.3005 15.3894 26.8657 15.3894H17.0292C16.5944 15.3894 16.1774 15.5622 15.8699 15.8696C15.5625 16.1771 15.3897 16.5941 15.3897 17.0289C15.3897 17.4637 15.5625 17.8807 15.8699 18.1881C16.1774 18.4956 16.5944 18.6683 17.0292 18.6683H26.8657C27.3005 18.6683 27.7175 18.4956 28.025 18.1881C28.3324 17.8807 28.5051 17.4637 28.5051 17.0289ZM28.5051 25.226C28.5051 24.7912 28.3324 24.3742 28.025 24.0667C27.7175 23.7593 27.3005 23.5866 26.8657 23.5866H7.19263C6.75782 23.5866 6.34083 23.7593 6.03338 24.0667C5.72593 24.3742 5.5532 24.7912 5.5532 25.226C5.5532 25.6608 5.72593 26.0778 6.03338 26.3852C6.34083 26.6927 6.75782 26.8654 7.19263 26.8654H26.8657C27.3005 26.8654 27.7175 26.6927 28.025 26.3852C28.3324 26.0778 28.5051 25.6608 28.5051 25.226Z"
                            fill="#6C6C6C" />
                    </svg>
                </div>
            </div>
        </div>
    </section>
    <section class="landing">
        <div class="page">
            <div class="content">
                <img class="logo desktop" src="../public/images/logo.png" alt="logo">
                <div class="list desktop">
                    <NuxtLink class="active" to="/">Home</NuxtLink>
                    <NuxtLink to="/about-us">About Us</NuxtLink>
                    <NuxtLink to="/products">Products</NuxtLink>
                    <NuxtLink to="/clients">Clients</NuxtLink>
                    <NuxtLink to="/services">Services</NuxtLink>
                    <NuxtLink to="/reviews">Reviews</NuxtLink>
                    <NuxtLink to="/contact-us">Contact Us</NuxtLink>
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
.desktop {
    display: block;
}

.phone {
    display: none;
}


/* ------------------- mobile nav ------------------- */

.mobile-nav .page {
    margin-top: 0;
    min-height: 0;
    height: 80px;
    margin-bottom: 0;
}

.mobile-nav .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.mobile-nav .nav img {
    width: 46px;
    height: 46px;
}

.mobile-nav .nav .menu {
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1E1E1E;
    border-radius: 50%;
}












/* -------------------------- */
.landing {
    min-height: 1000px;
    position: relative;
    background-color: transparent;
}

.landing .page {
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

.landing .background .image-holder {
    position: relative;
}

.landing .background .image-holder img {
    width: 100%;
}

.landing .background .grad {
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
    margin-top: 150px;
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
}



@media only screen and (max-width: 900px) {
    .landing .projects>div {
        justify-content: space-between;
        gap: 20px;
    }

    .landing .projects>div {
        margin-top: 40px;
        padding: 14px 0;
    }

}



@media only screen and (max-width: 700px) {
    .desktop {
        display: none !important;
    }

    .phone {
        display: block;
    }

    .button-holder {
        gap: 20px;
    }

    .landing {
        min-height: max-content;

    }

    .landing p {

        margin-bottom: 24px;
    }


}
</style>