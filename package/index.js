import Config from './config'
import Components from './components'
import Review from './review'

const components = [

]

export default {
  install (Vue) {
    Vue.use(Config)
    Vue.use(Components)
    Vue.use(Review)

    components.map(component => {
      Vue.component(component.name, component);
    })
  }
}
