<template>
  <RouterView/>
  
</template>


<script>
let brand = " | RD Vue"
export default {   
   watch: {
      $route(to) {
         document.title = to.meta.title + brand
      }
   }
}



</script>

<style>

</style>