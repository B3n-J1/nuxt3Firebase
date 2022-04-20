<template>
  <div class="h-screen bg-gray-100">
    <TheSideBar />
    <div class="flex flex-col flex-grow pl-64">
      <div class="md:px-8 xl:px-0">
        <main class="flex-1 py-3">
          <NuxtPage />
        </main>
      </div>
    </div>
  </div>
</template>
