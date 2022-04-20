<template>
  <div class="md:pt-2 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h2 class="text-3xl font-bold leading-7 text-gray-900">
          Immeubles
          <span
            class="text-secondary-600 text-mono font-normal bg-white rounded-lg px-3 py-1 ml-2 shadow"
            >{{ buildings.length }}</span
          >
        </h2>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    @click="sort('CODIMM')"
                    class="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-primary-600 active:text-primary-300"
                  >
                    # Immeuble
                  </th>
                  <th
                    scope="col"
                    @click="sort('ADRRED')"
                    class="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-primary-600 active:text-primary-300"
                  >
                    Nom
                  </th>
                  <th
                    scope="col"
                    @click="sort('CODPOS')"
                    class="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-primary-600 active:text-primary-300"
                  >
                    Commune
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white cursor-pointer">
                <tr
                  v-for="(building, index) in sortedBuildings"
                  :key="index"
                  class="hover:bg-gray-50 font-mono"
                  @click="
                    () => {
                      this.$router.push('/' + building.CODIMM);
                    }
                  "
                >
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-secondary-700"
                  >
                    <OfficeBuildingIcon class="h-6 w-6 inline-block" />
                    {{ building.CODIMM }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ building.ADRRED }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ building.CODPOS }} {{ building.BURDIS }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { OfficeBuildingIcon } from "@heroicons/vue/outline";

export default {
  props: {
    buildings: { type: Array, require: true },
  },
  components: { OfficeBuildingIcon },
  data() {
    return {
      currentSort: "CODIMM",
      currentSortDir: "asc",
    };
  },
  computed: {
    sortedBuildings: function () {
      return this.buildings.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === "desc") modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    },
  },

  methods: {
    sort: function (s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },
  },
};
</script>
