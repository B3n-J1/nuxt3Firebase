<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
    <div
      class="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto"
    >
      <div class="flex items-center flex-shrink-0 px-4">
        <img class="h-10 w-auto" src="/logo.png" alt="Oiko" />
      </div>
      <div class="mt-5 flex-grow flex flex-col">
        <nav class="mt-1 flex-1 px-2 bg-white space-y-1" aria-label="Sidebar">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.to"
            @click="itemSelected(item)"
            :class="[
              item.current ? 'bg-gray-100 text-black' : 'text-gray-400',
              ' hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-lg font-medium rounded-md',
            ]"
          >
            <component
              :is="item.icon"
              :class="[
                item.current
                  ? 'text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6'
                  : 'text-gray-400 group-hover:text-gray-500',
                'mr-3 flex-shrink-0 h-6 w-6',
              ]"
              aria-hidden="true"
            />
            <span class="flex-1">
              {{ item.name }}
            </span>
            <span
              v-if="item.count"
              :class="[
                item.current
                  ? 'bg-white'
                  : 'bg-gray-100 group-hover:bg-gray-200',
                'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full',
              ]"
            >
              {{ item.count }}
            </span>
          </NuxtLink>
        </nav>
      </div>
      <div class="flex border-t border-gray-200 p-4 w-full hover:bg-gray-50">
        <div class="flex items-center">
          <img
            class="flex-none inline-block rounded-full h-14 w-auto mr-6"
            src="/defaultUserPicture.png"
            alt="avatar"
          />
          <div>
            <p
              class="text-base font-medium text-gray-700 group-hover:text-gray-900"
            >
              John Doe
            </p>
            <p
              class="text-xs font-medium text-gray-500 group-hover:text-blue-700"
            >
              <a href="#"> Mon compte </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { OfficeBuildingIcon, HomeIcon } from "@heroicons/vue/outline";

export default {
  data() {
    return {
      navigation: [
        {
          name: "Immeubles",
          icon: OfficeBuildingIcon,
          to: "/",
          current: true,
        },
        {
          name: "Home",
          icon: HomeIcon,
          to: "/features",
          current: false,
        },
      ],
    };
  },

  methods: {
    itemSelected(i) {
      this.navigation.forEach((item) =>
        item.name === i.name ? (item.current = true) : (item.current = false)
      );
    },
  },
};
</script>
