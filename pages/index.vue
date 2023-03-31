<template>
    <div>
        <kines/>
        <AboutCompany/>
        <Product/>
        <Info/>
    </div>
</template>

<script setup>
definePageMeta({
  middleware: ["redirect-www"]
})
</script>