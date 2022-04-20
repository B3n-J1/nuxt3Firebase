<template>
  <div class="rounded-lg bg-white overflow-hidden shadow mb-6">
    <div class="bg-white p-6">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="sm:flex sm:space-x-5">
          <div class="flex-shrink-0">
            <img
              class="flex-none inline-block rounded-full h-20 w-20"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="BuildingAvatar"
            />
          </div>
          <div
            class="flex flex-col justify-center sm:mt-0 sm:pt-1 sm:text-left"
          >
            <p class="text-lg font-bold text-gray-900">Nom du gestionaire</p>
            <p class="text-sm font-medium text-gray-600"></p>
          </div>
        </div>
        <div class="mt-5 flex justify-center sm:mt-0">
          <button
            @click="test"
            class="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white bg-green-50 hover:bg-gray-50"
          >
            <DocumentTextIcon
              class="h-4 w-4 inline-block mr-2 text-green-600"
            />
            Documents
            <ChevronDownIcon class="h-4 w-4 text-gray-400 inline-block ml-2" />
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row border-t border-gray-200 bg-gray-50 divide-gray-200 divide-x"
    >
      <div
        class="flex-1 p-3 text-sm font-medium text-center group hover:bg-gray-100 cursor-pointer select-none"
        v-for="(item, index) in editableItems"
        :key="index"
      >
        <span
          on:click|stopPropagation="{reset}"
          class="float-left"
          class:opacity-0="{isOriginal}"
        >
          <XIcon class="h-4 w-4 text-gray-400 hover:text-gray-800" />
        </span>
        <!-- {#if isOriginal} -->
        <PencilIcon
          class="h-4 w-4 float-right opacity-0 group-hover:opacity-80"
        />
        <!-- {:else} -->
        <span on:click|stopPropagation="{save}"
          ><CheckIcon
            class="h-4 w-4 float-right text-green-600 hover:text-green-800 active:text-green-600"
        /></span>
        <!-- {/if} -->
        <div class="text-gray-900">{{ item.name }}</div>
        <input type="text" bind:value bind:this="{input}" />
      </div>
    </div>
  </div>
</template>

<script>
import {
  ChevronDownIcon,
  DocumentTextIcon,
  XIcon,
  PencilIcon,
  CheckIcon,
} from "@heroicons/vue/outline";

export default {
  components: {
    ChevronDownIcon,
    DocumentTextIcon,
    XIcon,
    PencilIcon,
    CheckIcon,
  },
  data() {
    return {
      editableItems: [
        {
          name: "Codes",
          field: "codes",
        },
        {
          name: "Gardien",
          field: "gardien",
        },
        {
          name: "Clés",
          field: "cles",
        },
        {
          name: "Chauffage",
          field: "chauffage",
        },
        {
          name: "Ascenseur",
          field: "ascenseur",
        },
      ],
    };
  },
  computed: {},

  methods: {
    test() {
      this.$emit("showGEDFunction");
    },
  },
};
</script>
