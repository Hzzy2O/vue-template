import type { App } from 'vue';
import {
  // Need
  create ,
  NButton
} from 'naive-ui';

// const compList = [NButton];

const naive = create({
  components: [NButton]
})

export function registerGlobComp(app: App) {
  // compList.forEach((comp) => {
  //   app.use(comp)
  //   app.component(comp.name || comp.displayName, comp);
  // });

  app.use(naive)
}
