import { createApp } from 'vue';
import { Notify, Quasar } from 'quasar';

import iconSet from 'quasar/icon-set/mdi-v7';
import '@quasar/extras/mdi-v7/mdi-v7.css';
import 'quasar/dist/quasar.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(Quasar, {
  config: {
    brand: {
      primary: '#86bc25',
      secondary: '#bbdf4c',
      accent: '#86bc25',
      positive: '#21ba45',
      negative: '#c10015',
      info: '#31ccec',
      warning: '#f2c037'
    }
  },
  iconSet: iconSet,
  plugins: {
    Notify
  }
});
app.use(router);

app.mount('#app');
