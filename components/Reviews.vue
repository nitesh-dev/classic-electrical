<script setup lang='ts'>

import profile from '../public/images/profile.jpg'

const slideCount = ref(3)

const reviews = Array<{
    name: string,
    image: string,
    message: string
}>()


reviews.push({
    name: 'Cooper Kenter',
    image: profile,
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s.'
})

reviews.push({
    name: 'Mira Culhane',
    image: profile,
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s.'
})

reviews.push({
    name: 'Desirae Botosh',
    image: profile,
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s.'
})

reviews.push({
    name: 'Cooper Kenter',
    image: profile,
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s.'
})

reviews.push({
    name: 'Cooper Kenter',
    image: profile,
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s.'
})






function onResize(event: any) {
    console.log(window.innerWidth)
    if (window.innerWidth > 1100) {
        if (slideCount.value != 3) slideCount.value = 3
    } else {
        if (slideCount.value != 1) slideCount.value = 1
    }
}

onMounted(function () {
    window.addEventListener('resize', onResize);
})


onUnmounted(function () {
    window.removeEventListener('resize', onResize)
})




const autoPlay = {
    delay: 3000,
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
        translate: ['100%', 0, 1],
    },
}

</script>
<template>
    <section class="reviews">
        <div class="page">
            <h2>Our Reviews</h2>
            <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]" :slides-per-view="slideCount"
                :centered-slides="true" :loop="true" :spaceBetween="0" :autoplay="autoPlay" :navigation="navigation"
                :creative-effect="effect">


                <SwiperSlide v-for="slide, index in reviews" :key="index">
                    <div class="card">
                        <p>{{ slide.message }}</p>
                        <div class="profile">
                            <img :src="slide.image">
                            <div>
                                <span class="name">{{ slide.name }}</span>
                                <span class="role">CEO</span>
                            </div>
                            <div class="stars">
                                <img v-for="item in 5" src="../public/images/star.png">
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
            </Swiper>

            <div class="button-holder">
                <div class="button swiper-button-prev">
                    <WidgetsArrowButton />
                </div>
                <div class="button swiper-button-next">
                    <WidgetsArrowButton :right="true" />
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.reviews h2 {
    text-align: center;
    margin: 0;
    margin-bottom: 1em;
}




/* change swiper behaviour */
.reviews .swiper {
    position: relative;
}

.reviews .swiper-slide {
    transform: scale(90%, 90%);
    transition: all 200ms;
}

.reviews .swiper-slide-active {
    transform: scale(100%, 100%) !important;
}


.reviews .swiper::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 300px;
    z-index: 10;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), var(--color-surface))
}

.reviews .swiper::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 200px;
    z-index: 10;
    background-image: linear-gradient(to right, var(--color-surface), rgba(0, 0, 0, 0))
}


.button-holder {
    display: flex;
    width: max-content;
    gap: 20px;
    margin: 30px auto;
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


















.card {
    padding: 30px;
    border-radius: 15px;
    border: 1px solid #515151;
}


.card .profile {
    display: grid;
    grid-template-columns: max-content max-content 1fr;
    gap: 20px;
    align-items: center;
    margin-top: 30px;
}

.card p {
    margin: 0;
}

.card .profile>img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
}

.card .profile span {
    display: block;
}

.card span.role {
    color: var(--color-on-surface-700);
    font-size: calc(var(--font-medium) - 2px);
}

.card .stars {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 6px;
}





@media only screen and (max-width: 1100px) {
    .card {
        margin-left: 30px;
        margin-right: 30px;
    }

    .reviews .swiper::before, .reviews .swiper::after{
        content: none;
    }
}
</style>