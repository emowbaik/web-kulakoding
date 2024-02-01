<template>
    <div class="h-full">
      <form
        @submit.prevent="create"
        class="flex flex-col gap-5"
        enctype="multipart/form-data"
      >
        <div class="flex flex-col gap-3">
          <label for="">
            Nama Wisata <span class="text-primary text-xl font-bold">*</span>
          </label>
          <div class="relative flex">
            <input
              v-model="form.nama"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <BuildingStorefrontIcon class="w-5 h-5"></BuildingStorefrontIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for="">
            Deskripsi Wisata
            <span class="text-primary text-xl font-bold">*</span>
          </label>
          <div class="relative flex">
            <textarea
              v-model="form.deskripsi"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 h-24 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <PencilSquareIcon class="w-5 h-5"></PencilSquareIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for="">
            Alamat Wisata
            <span class="text-primary text-xl font-bold">*</span>
          </label>
          <div class="relative flex">
            <input
              v-model="form.alamat"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <MapPinIcon class="w-5 h-5"></MapPinIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for=""
            >Kota <span class="text-primary text-xl font-bold">*</span>
          </label>
          <div class="relative flex">
            <input
              v-model="form.kota"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <MapPinIcon class="w-5 h-5"></MapPinIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for=""
            >Provinsi <span class="text-primary text-xl font-bold">*</span>
          </label>
          <div class="relative flex">
            <input
              v-model="form.provinsi"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <MapPinIcon class="w-5 h-5"></MapPinIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for="">Fasilitas </label>
          <div class="relative flex">
            <input
              v-model="form.fasilitas"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <BuildingOffice2Icon class="w-5 h-5"></BuildingOffice2Icon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for="">Aktivitas </label>
          <div class="relative flex">
            <input
              v-model="form.aktivitas"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <LightBulbIcon class="w-5 h-5"></LightBulbIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for="">Aksebilitas </label>
          <div class="relative flex">
            <input
              v-model="form.aksebilitas"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <ChartPieIcon class="w-5 h-5"></ChartPieIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for=""
            >Harga <span class="text-primary text-xl font-bold">*</span>
          </label>
          <div class="relative flex">
            <input
              v-model="form.harga"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <CreditCardIcon class="w-5 h-5"></CreditCardIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for=""> Jam Operasional </label>
          <div class="relative flex">
            <input
              v-model="form.jam_operasional"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <ClockIcon class="w-5 h-5"></ClockIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for=""
            >Kontak <span class="text-primary text-xl font-bold">*</span>
          </label>
          <div class="relative flex">
            <input
              v-model="form.kontak"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <PhoneIcon class="w-5 h-5"></PhoneIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for="">Email </label>
          <div class="relative flex">
            <input
              v-model="form.email"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <EnvelopeIcon class="w-5 h-5"></EnvelopeIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for="">Website </label>
          <div class="relative flex">
            <input
              v-model="form.website"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <GlobeAltIcon class="w-5 h-5"></GlobeAltIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for="">Google Maps </label>
          <div class="relative flex">
            <input
              v-model="form.google_map"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <MapPinIcon class="w-5 h-5"></MapPinIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for="">latitude </label>
          <div class="relative flex">
            <input
              v-model="form.latitude"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <MapPinIcon class="w-5 h-5"></MapPinIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for="">Longtitude </label>
          <div class="relative flex">
            <input
              v-model="form.longtitude"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <MapPinIcon class="w-5 h-5"></MapPinIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for="">Kelebihan </label>
          <div class="relative flex">
            <input
              v-model="form.kelebihan"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <HandThumbUpIcon class="w-5 h-5"></HandThumbUpIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for="">kekurangan </label>
          <div class="relative flex">
            <input
              v-model="form.kekurangan"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <HandThumbDownIcon class="w-5 h-5"></HandThumbDownIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for=""> Jenis Wisata </label>
          <div class="relative flex">
            <input
              v-model="form.Jenis_wisata"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <SunIcon class="w-5 h-5"></SunIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for=""> Luas Area </label>
          <div class="relative flex">
            <input
              v-model="form.luas_area"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <ViewfinderCircleIcon class="w-5 h-5"></ViewfinderCircleIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for=""> Nomor NIB </label>
          <div class="relative flex">
            <input
              v-model="form.no_nib"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <NewspaperIcon class="w-5 h-5"></NewspaperIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for=""> Masa Berlaku </label>
          <div class="relative flex">
            <input
              v-model="form.masa_berlaku"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <ClockIcon class="w-5 h-5"></ClockIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for="">Himbauan </label>
          <div class="relative flex">
            <input
              v-model="form.himbauan"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <BellAlertIcon class="w-5 h-5"></BellAlertIcon>
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for="">Facebook </label>
          <div class="relative flex">
            <input
              v-model="form.facebook"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <img class="w-5" src="../../assets/facebook.svg" alt="Instagram">
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for="">Instagram </label>
          <div class="relative flex">
            <input
              v-model="form.instagram"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <img class="w-5" src="../../assets/instagram.svg" alt="Instagram">
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for="">WhatsApp </label>
          <div class="relative flex">
            <input
              v-model="form.whatsapp"
              type="text"
              id="my-input"
              name="my-input"
              class="border rounded-md px-12 py-2 w-full focus:outline-none text-gray-500 bg-gray-200"
            />
            <label
              for="my-input"
              class="absolute flex items-center gap-2 left-2 top-2.5 px-2 text-gray-500 text-sm transition-all"
            >
              <img class="w-5" src="../../assets/whatsapp.svg" alt="WhatsApp">
            </label>
          </div>
        </div>
        <div class="col-span-6 sm:col-span-6">
          <label for="photo" class="">Foto </label>
          <div class="mt-1">
            <div class="flex items-center">
              <div
                v-if="form.preview"
                class="mx-auto gap-7 flex flex-wrap w-full p-6 bg-slate-200 shadow-md"
              >
                <div class="" v-for="(item, index) in form.preview" :key="index">
                  <div
                    class="bg-primary relative top-2 right-5 w-7 font-bold h-7 rounded-full text-white flex justify-center items-center"
                    @click="click(item)"
                  >
                    X
                  </div>
                  <img
                    class="h-48 w-48 flex mx-auto"
                    :src="item"
                    alt=""
                    v-if="form.preview"
                  />
                </div>
              </div>
              <div v-else class="mx-auto w-full">
                <div v-if="form.image" class="">
                  <img
                    v-for="(index, item) in form.preview"
                    :key="index"
                    class="h-48 mx-auto rounded-md"
                    :src="item"
                    :alt="item"
                  />
                </div>
              </div>
            </div>
            <div
              class="flex px-4 py-4 my-2 rounded-md items-center text-sm bg-yellow-300 text-slate-900"
            >
              Ukuran gambar Maks. 940 x 788 px / 1 Mb Pastikan gambar menggunakan
              Warna dan informasi yang jelas.
            </div>
            <label
              for="image"
              class="flex justify-center border w-full border-gray-300 mt-3 px-2 py-2 bg-white text-xs rounded-md focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500"
            >
              <span>Upload Foto</span>
              <input
                id="image"
                name="image[]"
                type="file"
                class="sr-only"
                multiple
                @change="getImage($event)"
              />
            </label>
          </div>
        </div>
  
        <div class="mb-32">
          <button
            type="submit"
            class="inline-flex justify-center py-2 px-4 border border-gray-400 shadow-sm text-xs font-medium rounded-md text-gray-400 bg-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-2"
          >
            <PencilSquareIcon class="mr-2 h-4 w-4" aria-hidden="false" />
            Simpan
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import {
    BuildingStorefrontIcon,
    PhoneIcon,
    PencilSquareIcon,
    MapPinIcon,
    BuildingOffice2Icon,
    LightBulbIcon,
    ChartPieIcon,
    CreditCardIcon,
    ClockIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    SunIcon,
    ViewfinderCircleIcon,
    NewspaperIcon,
    BellAlertIcon,
    HandThumbDownIcon,
    HandThumbUpIcon,
  } from "@heroicons/vue/24/outline";
  import { onMounted, reactive, ref } from "vue";
  import useMerchant from "../../services/merchant/index";
  import useWisata from "../../services/merchant/wisata";
  import useAuth from "../../services/auth";
  const { getAuth, auth } = useAuth();
  
  const { store, merchant, getMerchant } = useMerchant();
  const { storeWisata } = useWisata();
  const baseUrl = import.meta.env.VITE_API_URL;
  
  const image = [];
  
  const getImage = ($event) => {
    const file = $event.target.files;
  
    form.image = Array.from(file);
    const gambar = Array.from(file);
    console.log(file);
    console.log(gambar);
  
    for (let i = 0; i < form.image.length; i++) {
      const files = form.image[i];
      const url = URL.createObjectURL(files);
      console.log(url);
  
      form.preview.push(url);
      console.log(files);
      console.log(form.preview);
    }
  };
  
  const props = defineProps(["kategori"]);
  
  const form = reactive({
    nama: "",
    kategori: "",
    preview: [],
    image: [],
    deskripsi: "",
    alamat: "",
    kota: "",
    provinsi: "",
    fasilitas: "",
    aktivitas: "",
    aksebilitas: "",
    harga: "",
    jam_operasional: "",
    kontak: "",
    email: "",
    website: "",
    latitude: "",
    longtitude: "",
    Jenis_wisata: "",
    luas_area: "",
    no_nib: "",
    masa_berlaku: "",
    himbauan: "",
    kelebihan: "",
    kekurangan: "",
    google_map: "",
    instagram: "",
    facebook: "",
    whatsapp: "",
  });
  
  async function create() {
    const formData = new FormData();
    formData.append("status", 0);
    formData.append("nama", form.nama);
    for (let i = 0; i < form.image.length; i++) {
      formData.append("image[]", form.image[i]);
    }
    formData.append("kategori", props.kategori);
    formData.append("deskripsi", form.deskripsi);
    formData.append("alamat", form.alamat);
    formData.append("kota", form.kota);
    formData.append("provinsi", form.provinsi);
    formData.append("fasilitas", form.fasilitas);
    formData.append("aktivitas", form.aktivitas);
    formData.append("aksebilitas", form.aksebilitas);
    formData.append("harga", form.harga);
    formData.append("jam_operasional", form.jam_operasional);
    formData.append("kontak", form.kontak);
    formData.append("email", form.email);
    formData.append("website", form.website);
    formData.append("latitude", form.latitude);
    formData.append("longtitude", form.longtitude);
    formData.append("Jenis_wisata", form.Jenis_wisata);
    formData.append("luas_area", form.luas_area);
    formData.append("no_nib", form.no_nib);
    formData.append("masa_berlaku", form.masa_berlaku);
    formData.append("himbauan", form.himbauan);
    formData.append("kelebihan", form.kelebihan);
    formData.append("kekurangan", form.kekurangan);
    formData.append("google_map", form.google_map);
    formData.append("instagram", form.instagram);
    formData.append("facebook", form.facebook);
    formData.append("whatsapp", form.whatsapp);
    console.log(formData.value);
    console.log({ ...form });
    await storeWisata(formData);
    console.log(props.kategori);
    console.log(form.image);
    // console.log(form.image[0]);
    // console.log(form.image[2]);
  }
  
  const click = (params) => {
    const index = form.preview.indexOf(params);
    console.log("clicked");
    console.log(index);
    console.log(form.preview);
    if (index !== -1) {
      form.preview.splice(index, 1);
      form.image.splice(index, 1);
      console.log(form.preview);
    }
    // form.preview.splice(params, 1);
    // form.image.splice(params, 1);
    console.log(params);
  };
  
  onMounted(() => {
    getAuth();
    getMerchant();
    console;
  });
  </script>
  
  <style></style>