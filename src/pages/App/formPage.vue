<template>
  <q-page padding>
    <q-form class="q-gutter-md">
      <q-card class="my-card row">
        <q-card-section class="col">
          <div class="text-grey-7 text-center text-overline">COSTO CHINO MXM</div>
          <div class="text-center text-bold text-italic"> $ {{ costchin }}</div>
        </q-card-section>
        <q-separator vertical />
        <q-card-section class="col">
          <div class="text-grey-7 text-center text-overline">COSTO MEXICANO</div>
          <div class="text-center text-bold text-italic"> $ {{ costmex }}</div>
        </q-card-section>
        <q-separator vertical />
        <q-card-section class="col">
          <div class="text-grey-7 text-center text-overline ">IMPUESTO</div>
          <div class="text-center text-bold text-italic"> $ {{ (costmex - costchin).toFixed(2) }}</div>
        </q-card-section>
      </q-card>



      <div class="row">
        <div class="col flex justify-center">
          <q-uploader :hide-upload-btn="true" ref="uploaderRef" :url="getUrl" color="primary" :style="sizes"
            label="Imagen Articulo" @added="insertimage">
          </q-uploader>
        </div>
        <div class="col flex justify-center">
          <q-uploader :hide-upload-btn="true" ref="uploaderRefprov" :url="getUrlprov" color="primary" :style="sizes"
            label="Imagen Proveedor" @added="insertprovider">
          </q-uploader>
        </div>

        <div class="col flex justify-center" v-if="!ismobile">
          <q-card class="my-card" :style="sizes">

            <q-card-section>
              <div :class="ismobile ? 'text-subtitle1 q-mt-xs' : 'text-subtitle1 q-mt-md'">Codigo : {{
                articule.code.toUpperCase() }}</div>
              <div :class="ismobile ? 'text-subtitle1 q-mt-xs' : 'text-subtitle1 q-mt-md'">Descripcion : {{
                articule.description.toUpperCase() }}</div>
              <!-- <div :class="ismobile ? 'text-subtitle1 q-mt-xs' : 'text-subtitle1 q-mt-md'">Proveedor : {{
                articule.provider }}</div> -->
              <div :class="ismobile ? 'text-subtitle1 q-mt-xs' : 'text-subtitle1 q-mt-md'">Costo Chino : $ {{
                costchin }}</div>
              <div :class="ismobile ? 'text-subtitle1 q-mt-xs' : 'text-subtitle1 q-mt-md'">Costo Mexicano : $ {{ costmex
                }}
              </div>
              <div :class="ismobile ? 'text-subtitle1 q-mt-xs' : 'text-subtitle1 q-mt-md'">Gato X articulo: $ {{ costmex
                - costchin
                }}
              </div>

            </q-card-section>
          </q-card>
        </div>

      </div>

      <div class="flex justify-center">
        <q-input filled v-model="articule.code" type="text" label="Codigo" :style="sizesinp"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" mask="XXXXXXXXXXXX" />

        <q-input filled v-model="articule.description" type="text" label="Descripcion" :style="sizesinp"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" />

        <q-input filled v-model="articule.notes" type="text" label="Notas" :style="sizesinp"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" />

        <!-- <q-select filled v-model="articule.provider" use-input use-chips miltiple input-debounce="0"
          @new-value="createValue" :options="provfil" @filter="filterFn" :style="sizesinp"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" label="Proveedor/Fabricante" /> -->

        <q-input filled v-model="articule.yuanes" type="number" label="Yuanes 	¥" :style="sizesinp"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" />
        <q-input filled v-model="articule.pxc" type="number" label="Piezas Por Caja" :style="sizesinp"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" />
        <q-input filled v-model="articule.qubic" type="number" label="Cubicaje" :style="sizesinp"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" />
        <q-input filled v-model="articule.taxes" type="number" label="Impuestos" :style="sizesinp"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" />
        <q-input filled v-model="articule.freight" type="number" label="Flete" :style="sizesinp"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" />
        <q-input filled v-model="articule.tpcusd" type="number" label="Tipo Cambio USD" :style="sizesinp"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" />
        <q-input filled v-model="articule.tpcrmb" type="number" label="Tipo Cambio RMB" :style="sizesinp"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" />



        <q-btn :style="sizesinp" color="primary" icon="list" label="Enviar Formulario" @click="envform"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" :disable="!formvalid" />

      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import axios from 'axios'
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar'
import { api } from 'src/boot/axios'

const $q = useQuasar()

const articule = ref({
  picture: null,
  provider: null,
  code: '',
  description: '',
  yuanes: 0,
  pxc: 0,
  qubic: 0,
  taxes: 0,
  freight: 0,
  tpcusd: 0,
  tpcrmb: 0,
  mcont: 68,
  notes: '',
})

const articulos = ref([]);
const provfil = ref([]);


const uploaderRef = ref(null);
const uploaderRefprov = ref(null);

const formvalid = computed(() => articule.value.code.length > 0 && articule.value.description.length > 0)

const ismobile = computed(() => {
  return $q.platform.is.mobile
})


const sizes = computed(() => {
  if ($q.platform.is.mobile) {
    return "width: 90%; height:270px"
  } else {
    return "width: 350px; height:285px"
  }
})

const sizesinp = computed(() => {
  if ($q.platform.is.mobile) {
    return "width: 370px;"
  } else {
    return "width: 90%;"
  }
})

const costmex = computed(() => {
  if (articule.value.yuanes > 0 && articule.value.pxc > 0 && articule.value.taxes > 0 && articule.value.qubic > 0 && articule.value.freight > 0 && articule.value.tpcusd > 0 && articule.value.tpcrmb > 0) {
    let costo = (parseFloat(articule.value.taxes) + parseFloat(articule.value.freight)) / (articule.value.mcont / articule.value.qubic * articule.value.pxc) + (articule.value.yuanes * (articule.value.tpcusd / articule.value.tpcrmb))
    return costo.toFixed(2)
  } else {
    return 0
  }
})

const costchin = computed(() => {
  if (articule.value.yuanes > 0 && articule.value.pxc > 0 && articule.value.taxes > 0 && articule.value.qubic > 0 && articule.value.freight > 0 && articule.value.tpcusd > 0 && articule.value.tpcrmb > 0) {
    let costo = (articule.value.yuanes * (articule.value.tpcusd / articule.value.tpcrmb))
    return costo.toFixed(2)
  } else {
    return 0
  }
})



const insertimage = (a) => {
  let string = a[0].type.split('/')
  console.log(string[1])
  articule.value.picture = string[1];
}

const insertprovider = (files) => {
  articule.value.provider = files[0].name;
}

const getUrl = (files) => {
  console.log(files)
  const formData = new FormData();
  formData.append('files', files[0]);

  formData.append('__key', articule.value.code + `.${articule.value.picture}`);

  console.log(formData);

  axios.post('https://apimport.grupovizcarra.mx/api/addFile', formData)
    // axios.post('http://192.168.10.112:1920/appchin/public/api/addFile', formData)

    .then(response => {
      console.log('Archivos subidos exitosamente:', response.data);
      uploaderRef.value.reset();
      $q.notify({
        type: 'positive',
        message: 'Imagen Producto se subio con exito :' + response.data,
        position: 'center'
      })
    })
    .catch(error => {
      console.error('Error al subir archivos:', error);
      $q.notify({
        type: 'negative',
        message: '(I)Error al subir archivo:' + response.data,
        position: 'center'
      })
    });

  return 'https://apimport.grupovizcarra.mx/api/addFile';
  // return 'http://192.168.10.112:1920/appchin/public/api/addFile';

}

const getUrlprov = (files) => {
  console.log(files)
  const formData = new FormData();
  formData.append('files', files[0]);

  formData.append('__key', articule.value.code + '_' + articule.value.provider);

  console.log(formData);
  axios.post('https://apimport.grupovizcarra.mx/api/addFile', formData)
    // axios.post('http://192.168.10.112:1920/appchin/public/api/addFile', formData)

    .then(response => {
      console.log('Archivos subidos exitosamente:', response.data);
      uploaderRefprov.value.reset();
      $q.notify({
        type: 'positive',
        message: 'Imagen Proveedor se subio con exito :' + response.data,
        position: 'center'
      })
    })
    .catch(error => {
      console.error('Error al subir archivos:', error);
      $q.notify({
        type: 'negative',
        message: '(P)Error al subir archivo:' + response.data,
        position: 'center'
      })
    });


  return 'https://apimport.grupovizcarra.mx/api/addFile';
  // return 'http://192.168.10.112:1920/appchin/public/api/addFile';

}

const uploadFile = () => {
  uploaderRef.value.upload();
}

const uploadFileprov = () => {
  uploaderRefprov.value.upload();
}

const init = async () => {
  $q.loading.show({
    message: 'Cargando Formulario'
  })
  console.log('Obteniendo Articulos');
  api.get('/getProducts')
    .then(r => {
      console.log(r.data);
      articulos.value = r.data.products
      articule.value.taxes = r.data.expenses.find(e => e.id === 1)._value;
      articule.value.freight = r.data.expenses.find(e => e.id === 2)._value;
      articule.value.tpcusd = r.data.expenses.find(e => e.id === 3)._value;
      articule.value.tpcrmb = r.data.expenses.find(e => e.id === 4)._value;
      $q.loading.hide()

    })
    .catch(r => {
      console.error(r)

    })
}

const envform = async () => {
  $q.loading.show({ message: "Subiendo Info" })
  let data = {
    code: articule.value.code,
    picture: articule.value.picture != null ? '/' + articule.value.code + `.${articule.value.picture}` : '/vacio.jpg',
    description: articule.value.description,
    provider: articule.value.provider != null ? '/' + articule.value.code + '_' + articule.value.provider : '/vacio.jpg',
    chinesse_cost: costchin.value,
    taxes: articule.value.taxes,
    freight: articule.value.freight,
    measures: articule.value.qubic,
    mexican_cost: costmex.value,
    pieces: articule.value.pxc,
    _download: 0,
    notes: articule.value.notes
  }
  console.log(data)
  api.post('/insProduct', data)
    .then(r => {
      console.log(r.data);
      uploadFile();
      uploadFileprov();
      articule.value.code = '';
      articule.value.description = '';
      articule.value.provider = null;
      articule.value.yuanes = 0;
      articule.value.pxc = 0;
      articule.value.qubic = 0;
      $q.loading.hide();
      $q.notify({
        type: 'positive',
        message: 'Formulario Enviado',
        position: 'center'
      })

    })
    .catch(r => {
      console.error(r)
      $q.loading.hide()
      $q.notify({
        type: 'negative',
        message: 'Hubo Algun problema',
        position: 'center'
      })
    })

}

const createValue = (val, done) => {
  if (val.length > 0) {
    if (!providrs.value.includes(val.toUpperCase())) {
      providrs.value.push(val.toUpperCase())
    }
    done(val, 'add-unique')
  }
}

const filterFn = (val, update) => {
  update(() => {
    if (val === '') {
      provfil.value = providrs.value
    } else {
      const needle = val.toLowerCase()
      provfil.value = providrs.value.filter(
        v => v.toLowerCase().indexOf(needle) > -1
      )
    }
  })
}



init()

</script>
