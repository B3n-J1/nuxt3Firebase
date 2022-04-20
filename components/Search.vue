<template>
  <div
    class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"
    role="dialog"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"
      aria-hidden="true"
    />
    <div
      on:click|stopPropagation
      class="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
    >
      <div class="flex">
        <input
          bind:this="{searchInput}"
          bind:value="{q}"
          type="text"
          class="h-12 flex-1 border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
          placeholder="{`Parmi"
          role="combobox"
          aria-expanded="false"
          aria-controls="options"
        />
      </div>

      <div class="flex divide-x divide-gray-100">
        <!-- Preview Visible: "sm:h-96" -->
        <div
          class="max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4 sm:h-96"
        >
          <h2 class="mt-2 mb-4 text-xs font-semibold text-gray-500">
            Résultats
          </h2>
        </div>
      </div>

      <div class="bg-gray-100 py-14 px-6 text-center text-sm sm:px-14">
        <p class="text-6xl">🧐</p>
        <p class="mt-4 text-lg font-semibold text-gray-900">
          Aucun résultat trouvé
        </p>
        <p class="mt-2 text-gray-500">
          Désolé, nous n'avons pas trouvé ce que vous cherchez. <br />Veuillez
          modifier vôtre recherche.
        </p>
      </div>
    </div>
  </div>
</template>
