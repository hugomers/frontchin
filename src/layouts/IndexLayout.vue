<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header>
      <q-tabs>
        <q-route-tab icon="list" to="/" replace label="Listado" />
        <q-route-tab icon="receipt_long" to="/form" replace label="Formulario" />
      </q-tabs>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'


</script>
