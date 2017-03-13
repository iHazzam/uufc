import './bootstrap'
import router from './routes';
Vue.component('FighterGraph', require('./components/FighterGraph.vue'));
Vue.component('Ranking', require('./components/Ranking.vue'));
const app = new Vue({
    el: '#app',
    data:{
        wcs: ['wsw','flw','wbw','bw','fw','wfw','lw','ww','mw','lhw','hw']
    },
    computed: {
        capwcs: function(){
            return this.wcs.map(function (x) {
                return x.toUpperCase()
            })
        }
    },
    router
}).$mount('#app');
