import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/benjamin.roux/Documents/GitHub/nuxt3-tailwind3-starter/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}