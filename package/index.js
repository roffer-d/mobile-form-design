import Config from './config'
import Components from './components'
import mobileView from './mobileView'

const components = [
  mobileView,
]

export default {
  install (Vue) {
    Vue.use(Config)
    Vue.use(Components)

    components.map(component => {
      Vue.component(component.name, component);
    })
  }
}
