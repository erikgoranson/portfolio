import '@/index.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

//global layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import EmptyLayout from '@/layouts/EmptyLayout.vue';

const app = createApp(App)

app.use(router)

app.component("DefaultLayout", DefaultLayout);
app.component("EmptyLayout", EmptyLayout);

app.mount('#app');
