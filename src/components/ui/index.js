import Button from './button'

const components = {
  Button
}

const install = (Vue) => {
  Object.keys(components).map((key) => {
    const component = components[key]
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const ui = {
  install
}

Object.keys(components).map((key) => {
  const component = components[key]
  ui[component.name] = component
})

export default ui