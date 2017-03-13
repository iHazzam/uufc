import VueRouter from 'vue-router';


let routes = [
    {
        path: '/',

        component: require('./pages/Home')
    },
    {
        path: '/about',

        component: require('./pages/About')
    },
    {
        path: '/:wc',

        component: require('./components/Ranking')
    },
    {
        path: '/history/fighter/:fighter',

        component: require('./components/FighterGraph')
    },
    {
        path: '/history/division/:wc',

        component: require('./components/WCGraph')
    }
];

export default new VueRouter({
   routes
});