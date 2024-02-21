<template>
  <nav
    class="px-4 py-3 flex flex-col gap-2 items-center justify-between rounded-b-md sm:px-6"
    aria-label="Pagination"
  >
    <div class="flex-1 flex justify-between sm:justify-end">
      <button
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-xs font-medium rounded-md text-gray-400 bg-white hover:bg-gray-400 hover:text-white"
        :class="{ 'cursor-not-allowed': isInFirstPage }"
      >
        <ChevronLeftIcon
          class="text-center h-4 w-4 font-bold text-black"
          aria-hidden="false"
        />
      </button>
      <button
        type="button"
        @click="onClickNextPage"
        :disabled="isInLastPage"
        class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-xs font-medium rounded-md text-gray-400 bg-white hover:bg-gray-400 hover:text-white"
        :class="{ 'cursor-not-allowed': isInLastPage }"
      >
        <ChevronRightIcon
          class="text-center h-4 w-4 font-bold text-black"
          aria-hidden="false"
        />
      </button>
    </div>
  </nav>
</template>
<script setup>
import { computed } from "vue";
import { usePages } from "../services/project/page";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  maxVisibleButtons: Number,
  totalPages: Number,
  from: Number,
  to: Number,
  total: Number,
  perPage: Number,
  currentPage: Number,
  nextPage: String,
  prevPage: String,
  id: Number,
});
const page = usePages();

const emit = defineEmits(["pagechanged"]);

const startPage = computed(() => {
  if (props.currentPage === 1) {
    return 1;
  }

  if (props.currentPage === props.totalPages) {
    return props.totalPages - props.maxVisibleButtons + 1;
  }

  return props.currentPage - 1;
});

const endPage = computed(() => {
  return Math.min(
    props.startPage + props.maxVisibleButtons - 1,
    props.totalPages
  );
});

const pages = computed(() => {
  const range = [];

  for (let i = props.startPage; i <= props.endPage; i += 1) {
    range.push({
      name: i,
      isDisabled: i === props.currentPage,
    });
  }

  return range;
});

const isInFirstPage = computed(() => {
  return props.currentPage === 1;
});

const isInLastPage = computed(() => {
  return props.currentPage === props.totalPages;
});

const onClickPreviousPage = () => {
  if (!props.id) {
    emit("pagechanged", props.currentPage - 1);
    page.page -= 1;
  } else {
    emit("pagechanged", props.id, props.currentPage - 1);
    page.page -= 1;
  }
};
const onClickPage = (page) => {
  emit("pagechanged", page);
};

const onClickNextPage = () => {
  console.log("a");
  if (!props.id) {
    emit("pagechanged", props.currentPage + 1);
    page.page += 1;
  } else {
    emit("pagechanged", props.id, props.currentPage + 1);
  }
};
const isPageActive = (page) => {
  return props.currentPage === page;
};
</script>
