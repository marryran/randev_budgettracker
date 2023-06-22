<template>
  <section>
    <div class="container pt-40 pb-20 mx-auto bg-gradient-to-r from-purple-500 to-pink-500">
      <div class="flex flex-wrap items-center bg-white px-40">
        <div class="grid grid-cols-4 gap-2 my-5">
          <div class="col-span-3">
            <h6 class="font-medium text-indigo-600">A Front-End Developer</h6>
            <h2 class="mb-2 text-4xl font-semibold leading-tight text-gray-800 capitalize">
              Ranchana Prommanon
            </h2>
            <p>
              Mobile : +66 93-131-7520
              <br> E-mail : marryrcp@gmail.com
              <span class="text-gray-700">
                <br />
                I am a Front-End Developer located in Bangkok, Thailand. <br />
                Currently, I am looking to increase my skills as a Front-End Developer.
              </span>
            </p>
          </div>
          <div class="col-span-1">
            <img
              src="@/assets/img/myphoto1.jpg"
              alt=""
              class="rounded-xl hover:shadow-2xl hover:animate-pulse"
            />
          </div>
          <div class="col-span-4">
            <button @click="downloadFile" class="custom-btn btn-13 px-1">
              DOWNLOAD CV
            </button>
          </div>  
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  methods: {
    downloadFile() {
      // Create a dummy file URL or fetch the file URL from an API
      const fileUrl = 'public/pdf/resume.pdf'

      // Create a hidden anchor element
      const link = document.createElement('a')
      link.href = fileUrl
      link.target = '_blank' // Open the file in a new tab/window

      // Programmatically trigger the click event on the anchor element
      link.click()
    }
  }
}
</script>

<style lang="scss" scoped>

  .custom-btn {
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}

/* 13 */
.btn-13 {
  background-color: #89d8d3;
background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
  border: none;
  z-index: 1;
}
.btn-13:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
   background-color: #4dccc6;
background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001;
  transition: all 0.3s ease;
}
.btn-13:hover {
  color: #fff;
}
.btn-13:hover:after {
  top: 0;
  height: 100%;
}
.btn-13:active {
  top: 2px;
}


</style>
