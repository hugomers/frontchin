<template>
  <q-page padding>
    <q-table title="Articulos" :rows="basket" row-key="id" :columns="columns" rows-per-page-label="Articulos Mostrados"
      :rows-per-page-options="[0]" @row-click="mosrow" separator="cell" :filter="filtro">
      <template v-slot:top-right>

        <q-input borderless dense debounce="300" v-model="filtro" placeholder="Buscar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>

        </q-input>
        <q-btn flat color="primary" icon-right="ios_share" no-caps @click="exportTable"
          :disable="basket?.length > 0 ? false : true" />
      </template>
      <template v-slot:body="props">
        <q-tr :props="props" @click="mosrow(props.row)">
          <q-td key="Imagen" :props="props">
            <q-img v-if="props.row.picture != null"
              :src="`https://apichin.grupovizcarra.net/storage/${props.row.picture}`" :ratio="1" spinner-color="primary"
              spinner-size="50px" style="width: 100px" />
            <q-avatar v-else rounded size="100px" font-size="52px" color="teal" text-color="white" icon="inventory_2" />
          </q-td>
          <q-td key="Codigo" :props="props">
            <div class="text-pre-wrap">{{ props.row.code }}</div>
          </q-td>
          <q-td key="Description" :props="props">
            <div class="text-pre-wrap">{{ props.row.description }}</div>
          </q-td>
          <q-td key="pxc" :props="props">
            <div class="text-pre-wrap">{{ props.row.pieces }} Pzs</div>
          </q-td>
          <q-td key="Provider" :props="props">
            <!-- <div class="text-pre-wrap">{{ props.row.provider }}</div> -->
            <q-img v-if="props.row.provider != null"
              :src="`https://apichin.grupovizcarra.net/storage/${props.row.provider}`" :ratio="1"
              spinner-color="primary" spinner-size="50px" style="width: 100px" />
            <q-avatar v-else rounded size="100px" font-size="52px" color="teal" text-color="white" icon="inventory_2" />
          </q-td>
          <q-td key="Costchin" :props="props">
            <div class="text-pre-wrap"> ¥ {{ props.row.chinesse_cost }}</div>
          </q-td>
          <q-td key="Costmex" :props="props">
            <div class="text-pre-wrap"> $ {{ props.row.mexican_cost }}</div>
          </q-td>
          <q-td key="Notes" :props="props">
            <div class="text-pre-wrap">{{ props.row.notes }}</div>
          </q-td>
          <q-td key="Impuestos" :props="props">
            <div class="text-pre-wrap"> $ {{ props.row.mexican_cost - props.row.chinesse_cost }}</div>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <q-dialog v-model="mos.state">
      <q-card class="my-card">
        <q-card-section>
          <div class="flex justify-center">
            <q-img v-if="mos.body.picture != null"
              :src="`https://apichin.grupovizcarra.net/storage/${mos.body.picture}`" :ratio="1" spinner-color="primary"
              spinner-size="50px" style="width: 200px" />
            <q-avatar v-else rounded size="100px" font-size="80px" color="teal" text-color="white" icon="inventory_2" />
          </div>
        </q-card-section>
        <q-card-section class="text-center">
          <div class="text-h6">{{ mos.body.code.toUpperCase() }}</div>
          <div class="text-subtitle2">{{ mos.body.description.toUpperCase() }}</div>
        </q-card-section>
        <q-card-section>
          <div>Costo Chino : {{ mos.body.chinesse_cost }}</div>
          <div>Costo Mexicano : {{ mos.body.mexican_cost }}</div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { exportFile, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'

const $q = useQuasar()



const articulos = ref([]);
const mos = ref({
  state: false,
  body: null
})
const filtro = ref('');



const columns = ref([
  { name: 'Imagen', label: 'Imagen', field: articulo => articulo.picture, align: 'left' },
  { name: 'Codigo', label: "Codigo", field: articulo => articulo.code, align: 'left' },
  { name: 'Description', label: "Description", field: articulo => articulo.description, align: 'left' },
  { name: 'pxc', label: "Piezas x Caja", field: articulo => articulo.pieces, align: 'left' },
  { name: 'Provider', label: "Proveedor", field: articulo => articulo.provider, align: 'left' },
  { name: 'Costchin', label: "Costo Chino", field: articulo => articulo.chinesse_cost, align: 'left' },
  { name: 'Costmex', label: "Costo Mexicano", field: articulo => articulo.mexican_cost, align: 'left' },
  { name: 'Notes', label: "Notas", field: articulo => articulo.notes, align: 'left' },
  { name: 'Impuestos', label: "Impuestos", field: articulo => articulo.taxes, align: 'left' },


])

const basket = computed(() => articulos.value ? articulos.value.filter(e => e._download == 0) : [])

const init = async () => {
  $q.loading.show({
    message: "Mostrando Articulos"
  })
  console.log('Obteniendo Articulos');
  api.get('/getProducts')
    .then(r => {
      console.log(r.data);
      articulos.value = r.data.products
      $q.loading.hide()
    })
    .catch(r => {
      console.error(r)
    })
}

const mosrow = (a) => {
  mos.value.body = a
  mos.value.state = true
}

const exportTable = async () => {
  console.log("Descargando Archivo");
  const fecha = new Date();
  const fechaact = fecha.getDate() + "-" + (fecha.getMonth() + 1)
  $q.loading.show({
    message: 'Descargando Reporte...',
  })
  api.get('/export', { responseType: 'blob' })
    .then(r => {
      const url = window.URL.createObjectURL(new Blob([r.data]))
      const a = document.createElement('a');
      a.href = url;
      a.download = 'reporte del' + fechaact + '.xlsx';
      a.click();
      init()
      $q.loading.hide()
    })
    .catch(r => {
      console.log(r);;
    })
}
init()



</script>
