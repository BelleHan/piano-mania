<template>
    <header class="p-3 text-bg-dark">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><router-link to="/" class="nav-link px-2 text-white">Home</router-link></li>
                    <li><router-link to="/wishlist" class="nav-link px-2 text-white">Wishlist</router-link></li>
                    <li><router-link to="/wishForm" class="nav-link px-2 text-white">Create</router-link></li>
                </ul>

                <div class="text-end">
                    <button type="button" class="btn btn-outline-light me-2">Login</button>
                    <button type="button" class="btn btn-warning">Sign-up</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>

<style scoped>
ul.horizontal {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

ul.horizontal li {
    float: left;
}

ul.horizontal li a {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

ul.horizontal li a:hover:not(.active) {
    background-color: #000;
}

ul.horizontal li a.active {
    background-color: #04AA6D;
}
</style>