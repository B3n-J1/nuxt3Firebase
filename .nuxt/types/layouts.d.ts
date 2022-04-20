import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/benjamin.roux/Documents/GitHub/nuxt3-tailwind3-starter/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}