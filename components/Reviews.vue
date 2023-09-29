<script setup lang='ts'>

import profile from '../public/images/profile.jpg'


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
        translate: ['100%', 0, 1],
    },
}

</script>
<template>
    <section class="reviews">
        <div class="page">
            <h2>Our Reviews</h2>
            <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]" :slides-per-view="3" :loop="true" :spaceBetween="30"
                :effect="'creative'" :autoplay="autoPlay" :navigation="navigation" :creative-effect="effect">


                <SwiperSlide v-for="slide, index in reviews" :key="index">
                    <!-- <div class="card">
                        <p>{{ slide.message }}</p>
                        <div class="profile">
                            <img :src="slide.image">
                            <div>
                                <h4>{{ slide.name }}</h4>
                                <span>CEO</span>
                            </div>
                            <div class="stars">
                                <img v-for="item in 5" src="../public/images/star.png">
                            </div>
                        </div>
                    </div> -->
                    <h1>kjadfj sdflkjsadkfjaksfasj fjsadfkjas dflkajdsfkadf</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>
<style scoped>
.reviews h2 {
    text-align: center;
    margin: 0;
}


.card{
    padding: 30px;
    border-radius: 15px;
    border: 1px solid #515151;
}


.card .profile{
    display: grid;
    grid-template-columns: max-content max-content 1fr;

}
</style>