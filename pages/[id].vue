<script setup>
const { data } = await useFetch("/api/assets");
const { data: params } = await useFetch("/api/parameters");

import RecursiveComponent from "../components/GED/RecursiveComponent.vue";

import { ref } from "vue";

const selected = ref([]);

const select = (folder, level) => {
  selected.value[level] = folder;
  selected.value.splice(level + 1);
};
const folders = [
  { id: "Gandalf" },
  {
    id: "Thranduil",
    folders: [{ id: "Legolas" }],
  },
  {
    id: "Groin son of Farin",
    folders: [
      {
        id: "Gloin son of Groin",
        folders: [{ id: "Gimli son of Gloin" }],
      },
    ],
  },
];
</script>

<template>
  <div class="md:pt-2 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h2 class="text-3xl font-bold leading-7 text-gray-900">
          Lots par immeubles
          <span
            class="text-secondary-600 text-mono font-normal bg-white rounded-lg px-3 py-1 ml-2 shadow"
            >{{ data.length }}</span
          >
        </h2>
      </div>
    </div>
    <BuildingCard @showGEDFunction="this.showGED = !this.showGED" />
    <div class="flex flex-col xxl:flex-row-reverse">
      <div id="ged" v-if="showGED === true">
        <RecursiveComponent
          :parameters="params"
          :selected="selected"
          :level="0"
          @selected="select"
        />
      </div>
      <BuildingTable :building="data" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showGED: false,
    };
  },
  methods: {},
};
</script>
