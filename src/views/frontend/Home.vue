<template>
  <section class="bg-white">
        <div class="container pt-20">
            <div class="grid grid-cols-4 px-10 py-5">
                <div class="col-span-3 hover:drop-shadow-md">
                        <h1 class="flex justify-center text-2xl md:text-3xl font-medium tracking-wider rounded-2xl text-gray-700 font-mono p-5 bg-[url('@/assets/img/banner.jpg')]">Expense Tracker</h1>
                </div>
                <div class="col-span-1">
                    <div class="flex justify-end grid grid-rows-2">
                    <VueDatePicker v-model="date" :start-date="startDate" focus-start-date placeholder="Select Date"/>
                    <span class="mt-2 text-xl text-center rounded-sm border border-gray-300">All transactions</span>
                    </div>
                </div>
            </div>
            <div class="px-10 text-lg">
                <span>Always keep track of your income and expenses.</span>
            </div>
            <div class="grid grid-cols-3 gap-4 px-10 py-3 mb-10">
                    <div class="rounded-lg text-left">
                        <img src="@/assets/img/graph1.png" class="object-cover w-full h-64 pb-3 rounded-lg"/>
                        <router-link to="/income">
                            <button class="px-3 text-lg rounded-xl bg-green-500 hover:bg-green-300">More</button>
                        </router-link>
                        <span class="ml-2">รอใส่กราฟ Income</span>
                    </div>
                    <div class="rounded-lg text-left">
                        <img src="@/assets/img/graph2.png" class="object-cover w-full h-64 pb-3 rounded-lg"/>
                        <router-link to="/expense">
                            <button class="px-3 text-lg rounded-xl bg-red-500 hover:bg-red-300">More</button>
                        </router-link>
                        <span class="ml-2">รอใส่กราฟ Expense</span>                        
                    </div>
                    <div class="rounded-lg text-left">
                        <img src="@/assets/img/graph3.png" class="object-cover w-full h-64 pb-3 rounded-lg"/>
                        <router-link to="/savings">
                        <button class="px-3 text-lg rounded-xl bg-yellow-500 hover:bg-yellow-300">More</button>
                        </router-link> 
                        <span class="ml-2">รอใส่กราฟ Savings</span>
                    </div>
            </div>
            
        </div>

  </section>
</template>

<script>

    export default {
      name: 'Home',
      data() {
          return {

                date: new Date(),
                startDate: new Date(2020, 1),

                url: import.meta.env.VITE_APP_URL,
                urlapi: import.meta.env.VITE_APP_URL_API,
                title: import.meta.env.VITE_APP_TITLE
          }
      }
  }
</script>

<style lang="css" scoped>

</style>