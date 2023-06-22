import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


// Tailwind Cs
import './style/tailwind.css'

const app = createApp(App)

app.component('VueDatePicker', VueDatePicker);

app.component("font-awesome-icon", FontAwesomeIcon)

app.use(router)
app.mount('#app')


