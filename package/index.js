import Config from './config'
import Components from './components'
import Review from './review'
import formDesign from "./formDesign"
import formReview from './formReview'

const components = [
  formDesign,
  formReview
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
