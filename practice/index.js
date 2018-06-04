import Vue from "vue";

const a = document.createElement('div')
document.body.appendChild(a);

new Vue({
  el: a,
  template: '<div id="root"></div>'
})
