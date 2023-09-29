<script setup lang='ts'>

</script>
<template>
    <button>
        <slot></slot>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path d="M17.7734 12.5L7.22656 1.95312L11.5104 12.5L7.22656 23.0469L17.7734 12.5Z" fill="white" />
        </svg>

    </button>
</template>
<style scoped>
button {
    background-color: transparent;
    border: 1px solid white;
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 12px 24px;
    border-radius: 40px;
}


button span{
    color: var(--color-on-surface);
    font-weight: 700;
}
</style>