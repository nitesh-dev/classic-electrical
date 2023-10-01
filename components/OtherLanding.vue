<script setup lang='ts'>
</script>
<template>
    <section class="landing">
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


            <div class="image-holder">
                <div>
                    <img src="../public/images/circles.png">
                    <h4>About Us</h4>
                </div>
            </div>


        </div>
    </section>
</template>
<style scoped>
.landing {
    background-color: var(--color-surface-variant);
}


.landing .image-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.landing .image-holder div{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.landing .image-holder h4{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    margin: 0;
    text-align: center;
}

.landing h4 {
    font-family: 'Hanuman';
    font-weight: normal;
    color: transparent;
    -webkit-text-stroke: 1px var(--color-on-surface);
    text-transform: 1px var(--color-on-surface);
}

.landing .page {
    margin-top: 15px;
    min-height: 400px;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav img {
    width: 65px;
    height: 65px;
}

.nav .menu {
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1E1E1E;
    border-radius: 50%;
}
</style>