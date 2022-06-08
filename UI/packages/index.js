import Button from "./button";
import Badge from './badge';

const components = {
  Button,
  Badge
}

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

const API = {
  install
}

export default API;
