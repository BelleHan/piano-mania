<template>
    <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
                <img src="@/assets/icon/new_grandpiano.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"
                    width="500" height="300" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Piano Mania</h1>
                <p class="lead">The piano is a keyboard instrument that produces sound when pressed on the keys. Most modern
                    pianos have a row of 88 black and white keys: 52 white keys for the notes of the C major scale (C, D, E,
                    F, G, A and B) and 36 shorter black keys raised above the white keys and set further back, for sharps
                    and flats.</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <router-link to="/wishlist" class="btn btn-primary btn-lg px-4 me-md-2">Wishlist</router-link>
                    <router-link to="/wishForm" class="btn btn-outline-secondary btn-lg px-4">Create</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>