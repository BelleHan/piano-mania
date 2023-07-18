<template>
    <h1>Wishlist</h1><br />
    <div class="links">
        <router-link to="/wishCreate">등록</router-link>
        <router-link to="/wishEdit">수정</router-link>
    </div>
</template>

<script>
export default {}
</script>

<style>
.links {
    display: flex;
}

.links a {
    flex: 1;
    font-size: 20px;
    text-align: center;
    line-height: 2;
}
</style>