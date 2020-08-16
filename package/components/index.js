import Input from './input.vue'
import Password from './password.vue'
import Text from './text.vue'
import Textarea from './textarea.vue'
import Switch from './switch.vue'
import Radio from './radio.vue'
import Checkbox from './checkbox.vue'
import Select from './select.vue'
import Date from './date.vue'
import Upload from './upload.vue'
import Map from './map.vue'

const components = [
  Input,
  Password,
  Text,
  Textarea,
  Switch,
  Radio,
  Checkbox,
  Select,
  Date,
  Upload,
  Map
]

const Component = {
  install (Vue) {
    if (this.installed) return
    this.installed = true

    components.map(component => {
      Vue.component(component.name, component);
    })
  }
}

export default Component
