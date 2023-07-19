<template>
    <div>
        <ul class="horizontal">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/wishlist">Wishlist</router-link></li>
            <li><router-link to="/wishCreate">Create</router-link></li>
        </ul>
    </div>
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