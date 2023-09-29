<script setup lang='ts'>
defineProps({
    right: Boolean
})
</script>
<template>
    <button>
        <svg :class="{'right': right}" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5.10215 23.3963C4.21904 24.2794 4.21904 25.7208 5.10215 26.6039L22.4002 43.9014C23.2847 44.7858 24.7234 44.7858 25.6078 43.9014L26.5754 42.9338C27.4606 42.0485 27.4608 40.6105 26.5755 39.7251L13.4534 26.6043C12.568 25.719 12.568 24.2808 13.4534 23.3955L26.5754 10.2746C27.4608 9.38925 27.4607 7.95136 26.5753 7.06601L25.6077 6.09843C24.7246 5.21533 23.2832 5.21533 22.4001 6.09843L5.10215 23.3963ZM40.7215 6.09824C41.6055 5.21415 43.0456 5.21425 43.9296 6.09824L44.8972 7.06581C45.7808 7.94941 45.7809 9.39081 44.8972 10.2745L31.7758 23.3955C30.8904 24.2808 30.8904 25.7189 31.7758 26.6043L44.8973 39.7252C45.7813 40.6091 45.7812 42.05 44.8973 42.9339L43.9297 43.9015C43.0453 44.7858 41.606 44.7859 40.7216 43.9015L24.9601 28.1394C20.5388 32.5563 21.6571 31.4362 24.9568 28.1362L23.4246 26.6039C22.5409 25.7202 22.541 24.2799 23.4246 23.3962L40.7215 6.09824Z"
                fill="url(#paint0_linear_30_469)" />
            <defs>
                <linearGradient id="paint0_linear_30_469" x1="-15.3509" y1="19.7368" x2="73.2456" y2="19.7368"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="0.739533" stop-color="white" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </button>
</template>
<style scoped>

button{
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
    outline: none;
}

button svg{
    width: 50px;
    height: 50px;
}
.right{
    transform: rotateZ(180deg);
}
</style>