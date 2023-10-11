<script setup lang='ts'>
</script>
<template>
    <section class="faq">
        <div class="page">
            <h2>Faq's</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since</p>

            <div class="questions">
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
            </div>
        </div>
    </section>
</template>
<style scoped>
.faq h2 {
    margin: 0;
    text-align: center;
}

.faq .page>p {
    color: var(--color-on-surface-700);
    max-width: 850px;
    margin: 1em auto;
    text-align: center;
}

.faq .questions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 50px;
}



@media only screen and (max-width: 700px) {
    .faq .questions {
        grid-template-columns: 100%;
        gap: 10px;
    }

    .faq .page>p {
        max-width: 850px;
        margin: 1em var(--page-gap);
        text-align: center;
    }

}
</style>