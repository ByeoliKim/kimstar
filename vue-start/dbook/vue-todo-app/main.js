import Vue from 'vue'
import App from './App.vue' //최상위 컴포넌트

new Vue({
    el: '#app',
    // render (createElement) {
    //    return createElement(App)
    // },
    render: h => h(App)
})