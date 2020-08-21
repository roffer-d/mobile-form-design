import Vue from 'vue'

import Config from './config'
import Components from './components'
import Review from './review'
import formDesign from "./formDesign"
import formReview from './formReview'
import Vant from 'vant'
import "vant/lib/index.css";

const components = [
  formDesign,
  formReview
]

export default {
  install (Vue) {
    Vue.use(Vant)
    Vue.use(Config)
    Vue.use(Components)
    Vue.use(Review)

    components.map(component => {
      Vue.component(component.name, component);
    })

    Vue.component('otherFields',{
      render(h) {
        let vnode = null, _this = this, slotName = 'other-fields'

        function getVNode(list = _this.$root.$children) {
          list.forEach(item => {
            if (item.$slots[slotName]) {
              vnode = item.$slots[slotName][0]
              return
            } else {
              getVNode(item.$children)
            }
          })
          return vnode
        }

        if (this.$root.$slots[slotName]) {
          vnode = this.$root.$slots[slotName][0]
        } else {
          getVNode()
        }

        if (vnode) {
          return h(vnode.tag, vnode.data.attrs, vnode.children)
        }

        return '';
      }
    });
  }
}
