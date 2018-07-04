import Vue from 'vue'
import App from './index.vue'


const app = new Vue(App)
app.$mount()

export default {
  config:
    {
      'navigationBarTitleText': '首页',
      'usingComponents': {
        'i-card': '/mpvue-iview/iview/card/index',
        'i-steps':'/mpvue-iview/iview/steps/index',
        'i-step': '/mpvue-iview/iview/step/index',
        'i-button': '/mpvue-iview/iview/button/index',
        'rater':'/mpvue-iview/iview/rate/index',
        'wu-gallery':'/wux-weapp/dist/gallery/index',
        'wu-input-number':'/wux-weapp/dist/input-number/index',
        'wux-vcode': '/wux-weapp/dist/vcode/index',
        'wux-floating-button': '/wux-weapp/dist/floating-button/index'
      }
    }

}
