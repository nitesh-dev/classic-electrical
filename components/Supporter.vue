<script setup lang='ts'>
import image1 from '../public/images/brands/Mask group.png'
import image2 from '../public/images/brands/Mask group-1.png'
import image3 from '../public/images/brands/Mask group-2.png'
import image4 from '../public/images/brands/Mask group-3.png'
import image5 from '../public/images/brands/Mask group-4.png'

const brands = Array<string>()
for (let index = 0; index < 3; index++) {
    brands.push(image1)
    brands.push(image2)
    brands.push(image3)
    brands.push(image4)
    brands.push(image5)
}


defineProps<{
    isLeft: boolean
}>()

</script>
<template>
    <div class="supporter">
        <hr>
        <div class="scroll">
            <div :class="{ 'animationLeft': isLeft, 'animationRight': !isLeft }">
                <img v-for="item in brands" :src="item">
            </div>
        </div>
        <hr>
    </div>
</template>
<style scoped>
.supporter {
    position: relative;
}


.supporter::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 300px;
    z-index: 10;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), var(--color-surface))
}

.supporter::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 200px;
    z-index: 10;
    background-image: linear-gradient(to right, var(--color-surface), rgba(0, 0, 0, 0))
}

.supporter .scroll {
    margin: 50px 0;
    position: relative;
    overflow: hidden;
    height: 90px;
}

.supporter .scroll div {
    display: flex;
    align-items: center;
    gap: 40px;
    position: absolute;
    left: 0;
    top: 0;
}


.supporter .scroll div.animationRight {
    animation-name: rightAnim;
    animation-duration: 60s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.supporter .scroll div.animationLeft {
    animation-name: leftAnim;
    animation-duration: 60s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}


@keyframes leftAnim {
    0% {
        left: 0;
    }

    100% {
        left: -200%;
    }
}

@keyframes rightAnim {
    0% {
        left: -200%;
    }

    100% {
        left: 0%;
    }
}



@media only screen and (max-width: 700px) {
    .supporter .scroll {
        margin: 30px 0;
    }

}
</style>