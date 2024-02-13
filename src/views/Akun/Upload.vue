<template>
  <div class="w-full h-full">
    <Navbar class="hidden lg:block" />
    <NavSidebar class="lg:hidden" />
    <div class="flex justify-between p-2">
      <router-link
        :to="{ name: 'user' }"
        class="flex items-center gap-1 font-semibold"
      >
        <ArrowLeftIcon class="w-5" />
        Back
      </router-link>
      <nav class="flex" aria-label="Breadcrumb">
        <ol
          class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
        >
          <li class="inline-flex items-center">
            <a
              href="/dashboard"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <HomeIcon class="text-gray-700 dark:text-gray-400 w-4 mr-1" />
              Home
            </a>
          </li>
          <li aria-current="page">
            <a href="/user">
              <div class="flex items-center">
                <ChevronRightIcon
                  class="text-gray-700 dark:text-gray-400 w-[18px]"
                />
                <span
                  class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
                  >user</span
                >
              </div>
            </a>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <ChevronRightIcon
                class="text-gray-700 dark:text-gray-400 w-[18px]"
              />
              <span
                class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
                >upload</span
              >
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <h2 class="text-center font-bold text-2xl mb-10">Upload Project</h2>
    <div class="flex flex-col gap-5 mx-auto max-w-2xl items-start">
      <form
        @submit.prevent="Upload"
        class="flex flex-col gap-5"
        enctype="multipart/form-data"
      >
        <!-- Project Picture -->
        <div class="flex gap-20">
          <label for="picture">Project Picture :</label>
          <div
            class="relative flex flex-col border border-gray-300 focus:outline-none rounded-md items-center p-2 gap-5"
          >
            <input
              type="file"
              @change="previewProjectPicture"
              name="my-input"
              id="picture"
              class="text-gray-500 bg-gray-300 rounded-md"
              accept=".png, .jpg, .jpeg"
            />
            <div class="w-64 h-64 rounded-md">
              <img
                v-if="projectPicturePreview"
                :src="projectPicturePreview"
                alt="Project Preview"
                class="w-full h-full object-contain p-5"
              />
            </div>
          </div>
        </div>

        <!-- Description Creator -->
        <div class="flex gap-10">
          <label for="deskripsi">Nama Project :</label>
          <div class="relative flex flex-col gap-5">
            <input
              v-model="payload.nama_project"
              type="text"
              id="tools"
              class="py-2 w-[365px] bg-transparent bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nama Project"
            />
          </div>
        </div>
        <div class="flex gap-10">
          <label for="deskripsi">Description Project :</label>
          <div class="relative flex flex-col gap-5">
            <textarea
              v-model="payload.deskripsi"
              name="my-input"
              id="deskripsi"
              class="h-24 py-2 w-[365px] bg-transparent bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Deskripsi "
            />
          </div>
        </div>

        <!-- Tools -->
        <div class="flex gap-36">
          <label for="tools">Tools :</label>
          <div class="flex flex-col gap-2">
            <ul
              class="flex flex-wrap w-[350px] gap-5"
              v-if="selected.length > 0"
            >
              <li
                class="bg-secondary p-1 dark:bg-primary rounded-full text-primary dark:text-secondary w-20 flex justify-start items-center"
                v-for="tools in selected"
                :key="tools.id"
              >
                <h3 @click="destroy(tools.id)" class="text-center w-full">
                  {{ tools.name }}
                </h3>
              </li>
            </ul>
            <Combobox v-model="selected" multiple>
              <div class="relative mt-1">
                <div class="">
                  <ComboboxInput
                    class="py-2 w-[365px] bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :displayValue="(tool) => tool.name"
                    @change="query = $event.target.value"
                  />
                  <ComboboxButton
                    class="absolute inset-y-0 right-0 flex items-center pr-2"
                  >
                    <ChevronUpDownIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </ComboboxButton>
                </div>
                <TransitionRoot
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  @after-leave="query = ''"
                >
                  <ComboboxOptions
                    class="py-2 w-[365px] bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <div
                      v-if="filter.length === 0 && query !== ''"
                      class="relative cursor-default select-none px-4 py-2 text-gray-700"
                    >
                      Nothing found.
                    </div>

                    <ComboboxOption
                      v-for="tool in filter"
                      as="template"
                      :key="tool.id"
                      :value="tool"
                      v-slot="{ selected, active }"
                    >
                      <li
                        class="relative cursor-default select-none py-2 pl-10 pr-4"
                        :class="{
                          'bg-primary text-secondary': active,
                          'text-blue-400': !active,
                        }"
                      >
                        <span
                          class="block truncate"
                          :class="{
                            'font-medium': selected,
                            'font-normal': !selected,
                          }"
                        >
                          {{ tool.name }}
                        </span>
                        <span
                          v-if="selected"
                          class="absolute inset-y-0 left-0 flex items-center pl-3"
                          :class="{
                            'text-green-600': active,
                            'text-neutral-300 font-bold': !active,
                          }"
                        >
                          <CheckIcon class="h-6 w-6" aria-hidden="true" />
                        </span>
                      </li>
                    </ComboboxOption>
                  </ComboboxOptions>
                </TransitionRoot>
              </div>
            </Combobox>
          </div>
        </div>

        <div class="flex justify-end my-5">
          <button
            type="submit"
            class="inline-flex items-center gap-1 font-semibold rounded-md bg-transparent focus:bg-slate-300 border border-gray-300 hover:border-gray-400 dark:bg-transparent dark:focus:bg-slate-900 dark:border-gray-600 hover:dark:border-gray-400 shadow p-2"
          >
            <PencilSquareIcon class="h-4 w-4" aria-hidden="false" />
            Simpan
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, computed } from "vue";
import {
  PencilSquareIcon,
  ArrowLeftIcon,
  HomeIcon,
  ChevronRightIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from "@heroicons/vue/24/solid";
import useProject from "../../services/project/index";
import Navbar from "../../components/Navbar.vue";
import NavSidebar from "../../components/NavSidebar.vue";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from "@headlessui/vue";

const Tools = [
  { id: 1, name: "HTML" },
  { id: 2, name: "Laptop" },
  { id: 3, name: "figma" },
  { id: 4, name: "css" },
  { id: 5, name: "php" },
  { id: 6, name: "laravel" },
  { id: 7, name: "javascript" },
  { id: 8, name: "f" },
];

const selected = ref([]);
const query = ref("");

function destroy(id) {
  console.log(id);
  console.log(selected.value);
  selected.value.splice(selected.value.indexOf(id), 1);
}

const projectPicturePreview = ref(null);

const payload = reactive({
  nama_project: "",
  deskripsi: "",
  image: "",
});

const previewProjectPicture = (event) => {
  const allowedExtensions = ["png", "jpg", "jpeg"];
  const file = event.target.files[0];
  payload.image = file;

  // Validasi ekstensi file
  const extension = file.name.split(".").pop().toLowerCase();
  if (!allowedExtensions.includes(extension)) {
    alert("File harus berupa gambar dengan ekstensi PNG, JPG, atau JPEG.");
    event.target.value = "";
    return;
  }
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      projectPicturePreview.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const getImage = ($event) => {
  const target = $event.target;
  form.image = target.files[0];
  form.preview = URL.createObjectURL($event.target.files[0]);
};

let filter = computed(() =>
  query.value === ""
    ? Tools
    : Tools.filter((tool) =>
        tool.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

const { StoreProject } = useProject();

async function Upload() {
  payload;
  const formData = new FormData();
  formData.append("nama_project", payload.nama_project);
  formData.append("deskripsi", payload.deskripsi);
  formData.append("image", payload.image);
  await StoreProject(formData);
}
</script>
