<template>
  <div class="grow bg-white shadow overflow-hidden rounded-lg font-mono">
    <ul class="divide-y divide-gray-200">
      <template v-for="subfolder of parameters" :key="subfolder.id">
        <li
          class="py-4 flex justify-between cursor-pointer select-none text-{color}-500g {color === 'orange' ? 'text-orange-500 active:bg-orange-100 hover:text-orange-700 hover:bg-orange-50 ' : ''} {color === 'red' ? 'text-red-600 active:bg-red-100 hover:text-red-700 hover:bg-red-50 ' : ''} {color === 'green' ? 'active:bg-green-100 hover:text-green-900 hover:bg-green-50' : ''}"
          style="padding-left: 1.5rem"
          @click="select(subfolder, level)"
        >
          <div class="ml-3 flex-1">
            <p class="text-sm font-medium text-{color}-800 mr-6">
              <FolderOpenIcon
                class="h-5 w-5 inline-block"
                v-if="subfolder.folders && subfolder.folders.length > 0"
              />
              <FolderIcon class="h-5 w-5 inline-block" v-else />
              {{ subfolder.id ? subfolder.id : subfolder }}
            </p>
          </div>

          <div class="float-right mr-6">
            <span
              class="inline-block items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800"
              v-if="subfolder.folders && subfolder.folders.length > 0"
            >
              {{ subfolder.folders.length }}
            </span>
          </div>

          <div class="float-right mr-6">
            <ChevronUpIcon
              class="h-5 w-5 tsext-gray-400 inline-block"
              v-if="showSubFolder"
            />
            <ChevronDownIcon
              class="h-5 w-5 tsext-gray-400 inline-block"
              v-else
            />
          </div>
          <div class="float-right mr-6"></div>
          <button class="btn-primary" @click="test">Test</button>

          <template v-if="isSelected(subfolder)">
            <Teleport to="#ged">
              <RecursiveComponent
                v-if="subfolder.folders"
                :parameters="subfolder['folders']"
                :selected="selected"
                :level="level + 1"
                @selected="select"
              />
            </Teleport>
          </template>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import {
  FolderIcon,
  FolderOpenIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/vue/outline";

const components = defineComponent({
  FolderIcon,
  FolderOpenIcon,
  ChevronUpIcon,
  ChevronDownIcon,
});

const props = defineProps({
  parameters: {
    type: Array,
    required: true,
  },
  selected: {
    type: Array,
    required: false,
    default: [],
  },
  level: {
    type: Number,
    required: false,
    default: 0,
  },
});
const { data: showSubFolder } = false;
const emit = defineEmits(["selected"]);

const select = (route, level) => {
  console.log(route, level);
  emit("selected", route, level);
};

const isSelected = (subfolder) => {
  if (
    !props.selected ||
    !props.selected.length ||
    !props.selected.some((fold) => fold.id === subfolder.id)
  ) {
    return false;
  }
  return props.selected[props.level]?.id === subfolder.id;
};
</script>
