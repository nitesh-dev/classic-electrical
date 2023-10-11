<script setup lang='ts'>
</script>
<template>
    <OtherLanding title="Reviews" />

    <section class="reviews">
        <div class="page">
            <h2>Our Reviews</h2>
            <div>
                <div class="card" v-for="item in 6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum nisl sit amet sp.</p>
                    <div class="profile">
                        <img src="../public/images/profile.jpg">
                        <div>
                            <span class="name">Cooper Kenter</span>
                            <span class="role">CEO</span>
                        </div>
                        <div class="stars">
                            <img v-for="item in 5" src="../public/images/star.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <GetInTouch />
    <Footer></Footer>
</template>
<style scoped>
.reviews h2 {
    margin-top: 0;
}

.reviews .page>div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
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



@media only screen and (max-width: 1200px) {
    .reviews .page>div {
        grid-template-columns: 1fr 1fr;
    }
}


@media only screen and (max-width: 800px) {
    .reviews .page>div {
        grid-template-columns: 100%;

    }
}
</style>