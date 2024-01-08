<template>
    <nav class="bg-[#0096D1] px-6">
        <div class="flex justify-between">
            <ul class="flex items-center justify-end gap-5 font-sans">
                <li class="mr-auto">
                    <router-link :to="{ name: 'home' }" class="pb-5">
                        <div class="bg-[url(../assets/img/logo_kulakoding.png)] w-16 h-16 bg-center bg-contain bg-no-repeat">
                        </div>
                    </router-link>
                </li>
                <li class="mr-auto">
                    <router-link :to="{ name: 'about'}" class="font-medium hover:underline">Member</router-link>
                </li>
                <li class="mr-auto">
                    <router-link :to="{ name: 'about'}" class="font-medium hover:underline">Project</router-link>
                </li>
                <li class="mr-auto">
                    <router-link :to="{ name: 'about'}" class="font-medium hover:underline">Kontak</router-link>
                </li>
            </ul>
            <ul class="flex items-center justify-end gap-5 font-sans">
                <li class="mr-auto">
                    <router-link :to="{ name: 'about'}" class="font-medium bg-white py-2 px-5 rounded-full shadow">Login</router-link>
                </li>
                <li class="mr-auto">
                    <router-link :to="{ name: 'about'}" class="font-medium bg-white py-2 px-5 rounded-full shadow">Log out</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>