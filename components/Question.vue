<script setup lang='ts'>

const isOpened = ref(false)
function toggle(){
    if(isOpened.value == false){
        isOpened.value = true
    }else{
        isOpened.value = false
    }
}

</script>
<template>
    <div class="question-holder" :class="{'active': isOpened}">
        <div @click="toggle">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
                <path
                    d="M12.9365 14.5927L23.6166 3.23054C23.8638 2.96774 24 2.61694 24 2.24288C24 1.86882 23.8638 1.51802 23.6166 1.25522L22.8303 0.418477C22.3179 -0.126 21.4851 -0.126 20.9735 0.418477L12.005 9.95959L3.02651 0.40789C2.77929 0.145096 2.44974 -9.41992e-07 2.09832 -9.57353e-07C1.74652 -9.7273e-07 1.41696 0.145096 1.16955 0.40789L0.383411 1.24464C0.136194 1.50764 -8.12262e-08 1.85824 -9.75767e-08 2.23229C-1.13927e-07 2.60635 0.136194 2.95715 0.383411 3.21995L11.0733 14.5927C11.3213 14.8561 11.6524 15.0008 12.0044 15C12.3578 15.0008 12.6887 14.8561 12.9365 14.5927Z"
                    fill="url(#paint0_linear_44_81)" />
                <defs>
                    <linearGradient id="paint0_linear_44_81" x1="11.0769" y1="22.0312" x2="11.0769" y2="-3.75"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="0.938028" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum nisl sit amet sapien luctus.</p>
    </div>
</template>
<style scoped>
.active {
    color: var(--color-on-surface);
}

.question-holder.active>p{
    display: block;
}

.question-holder {
    border: 1px solid #222;
    height: max-content;
}

.question-holder p{
    color: var(--color-on-surface-700);
    margin: 0;
}

.question-holder>p{
    display: none;
    padding: 20px;
}

.question-holder div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 20px;
}

.question-holder.active svg{
    transform: rotateZ(180deg);
}

.question-holder.active div{
    border-bottom: 1px solid #222;
    background-color: #121212;
}

</style>