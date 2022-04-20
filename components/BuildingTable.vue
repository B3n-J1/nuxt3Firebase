<template>
  <div class="mt-8 flex flex-col bg-white">
    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div
          class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
        >
          <table class="relative w-full min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right sticky top-0"
                >
                  # Groupe
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right sticky top-0"
                >
                  # Lot
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right sticky top-0"
                >
                  Diag. E/G/P/A/PE
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right sticky top-0"
                >
                  Surface
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right sticky top-0"
                >
                  Loyer
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right sticky top-0"
                >
                  Étage
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right sticky top-0"
                >
                  Type
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right sticky top-0"
                >
                  # Porte
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right sticky top-0"
                >
                  Locataire
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(asset, index) in sortedAssets"
                :key="index"
                class="hover:bg-gray-50 font-mono"
              >
                <td
                  class="flex justify-end px-6 py-4 text-secondary-700 whitespace-nowrap text-sm font-medium"
                >
                  {{ asset.CODGRPLOT }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-tertiary-700 hover:bg-tertiary-50 border-x-transparent hover:border-x hover:border-x-gray-200 text-right"
                >
                  {{ asset.CODLOT }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right"
                >
                  <span title="Électicité">
                    <CheckCircleIcon
                      class="h-4 w-4 text-green-500 inline-block"
                    />
                  </span>
                  <span title="Gaz">
                    <CheckCircleIcon
                      class="h-4 w-4 text-green-500 inline-block"
                    />
                  </span>
                  <span title="Plomb">
                    <CheckCircleIcon
                      class="h-4 w-4 text-green-500 inline-block"
                    />
                  </span>
                  <span title="Amiante">
                    <CheckCircleIcon
                      class="h-4 w-4 text-green-500 inline-block"
                    />
                  </span>
                  <span title="Perfomance Énergétique">
                    <CheckCircleIcon
                      class="h-4 w-4 text-green-500 inline-block"
                    />
                  </span>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right"
                >
                  xx m²
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right"
                >
                  xxx.xx €
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right"
                >
                  {{ asset.ETG }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right"
                >
                  {{ asset.CODTYPLGT }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right"
                >
                  {{ asset.PORT }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-primary-700 hover-primary-50 text-right"
                >
                  <UserIcon class="h-4 w-4 inline-block" /> HUBERT
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { UserIcon, CheckCircleIcon } from "@heroicons/vue/outline";
export default {
  props: {
    building: { type: Array, require: true },
  },
  components: { UserIcon, CheckCircleIcon },
  data() {
    return {
      currentSort: "CODGRPLOT",
      currentSortDir: "asc",
    };
  },
  computed: {
    sortedAssets: function () {
      let buildingFiltered = this.building.filter((g) => g.principal === true);

      return buildingFiltered.sort((a, b) => {
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
