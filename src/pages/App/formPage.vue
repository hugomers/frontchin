<template>
  <q-page padding>
    <q-form class="q-gutter-md">
      <div class="row">
        <div class="col flex justify-center">
          <q-uploader ref="uploaderRef" :url="getUrl" color="primary" :style="sizes" label="Inserte Imagen"
            @added="insertimage">
          </q-uploader>
        </div>

        <div class="col flex justify-center" v-if="!ismobile">
          <q-card class="my-card" :style="sizes">

            <q-card-section>
              <div :class="ismobile ? 'text-subtitle1 q-mt-xs' : 'text-subtitle1 q-mt-md'">Codigo : {{
                articule.code.toUpperCase() }}</div>
              <div :class="ismobile ? 'text-subtitle1 q-mt-xs' : 'text-subtitle1 q-mt-md'">Descripcion : {{
                articule.description.toUpperCase() }}</div>
              <div :class="ismobile ? 'text-subtitle1 q-mt-xs' : 'text-subtitle1 q-mt-md'">Proveedor : {{
                articule.provider }}</div>
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
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" :error="validart"
          error-message="El articulo ya existe con el proveedor" />

        <q-input filled v-model="articule.description" type="text" label="Descripcion" :style="sizesinp"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" />

        <q-select filled v-model="articule.provider" use-input use-chips miltiple input-debounce="0"
          @new-value="createValue" :options="provfil" @filter="filterFn" :style="sizesinp"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" label="Proveedor/Fabricante" />

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

        <q-input filled v-model="costmex" type="number" label="Costo Mexicano $" :style="sizesinp"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" :disable="true" />

        <q-input filled v-model="costchin" type="number" label="Costo Chino MXM" :style="sizesinp"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" :disable="true" />

        <q-btn :style="sizesinp" color="primary" icon="list" label="Enviar Formulario" @click="envform"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" :disable="!formvalid" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup >
import axios from 'axios'
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar'
import { api } from 'src/boot/axios'

const $q = useQuasar()

const articule = ref({
  picture: null,
  code: '',
  description: '',
  provider: null,
  yuanes: 0,
  pxc: 0,
  qubic: 0,
  taxes: 0,
  freight: 0,
  tpcusd: 0,
  tpcrmb: 0,
  mcont: 68,
})

const articulos = ref([]);
const provfil = ref([]);
const expenses = ref([]);


const uploaderRef = ref(null);

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
    return costo.toFixed(6)
  } else {
    return 0
  }
})

const costchin = computed(() => {
  if (articule.value.yuanes > 0 && articule.value.pxc > 0 && articule.value.taxes > 0 && articule.value.qubic > 0 && articule.value.freight > 0 && articule.value.tpcusd > 0 && articule.value.tpcrmb > 0) {
    let costo = (articule.value.yuanes * (articule.value.tpcusd / articule.value.tpcrmb))
    return costo.toFixed(6)
  } else {
    return 0
  }
})

const validart = computed(() => {
  let igual = articulos.value.filter((e) => {
    return (e.code + e.provider).toUpperCase() === (articule.value.code + articule.value.provider).toUpperCase()
  })
  return igual.length >= 1
})

const providrs = computed(() => {
  return articulos.value.map(e => e.provider).filter((value, index, self) => {
    return self.indexOf(value) === index
  });
})

const insertimage = () => {
  articule.value.picture = '';
}

const getUrl = (files) => {
  console.log(files)
  const formData = new FormData();
  formData.append('files', files[0]);

  formData.append('__key', articule.value.code + '.jpg');

  console.log(formData);

  axios.post('http://mx100-cedis-mkrqpwcczk.dynamic-m.com:5150/appchin/public/api/addFile', formData)
    .then(response => {
      console.log('Archivos subidos exitosamente:', response.data);
      uploaderRef.value.reset();
    })
    .catch(error => {
      console.error('Error al subir archivos:', error);
    });

  return 'http://mx100-cedis-mkrqpwcczk.dynamic-m.com:5150/appchin/public/api/addFile';
}

const uploadFile = () => {
  uploaderRef.value.upload();
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
  let data = {
    code: articule.value.code,
    picture: articule.value.picture != null ? '/' + articule.value.code + '.jpg' : null,
    description: articule.value.description,
    provider: articule.value.provider.toUpperCase(),
    chinesse_cost: costchin.value,
    taxes: articule.value.taxes,
    freight: articule.value.freight,
    measures: articule.value.qubic,
    mexican_cost: costmex.value,
    pieces: articule.value.pxc
  }
  console.log(data)
  api.post('/insProduct', data)
    .then(r => {
      console.log(r.data);
      uploadFile();
      articule.value.code = '';
      articule.value.description = '';
      articule.value.provider = null;
      articule.value.yuanes = 0;
      articule.value.pxc = 0;
      articule.value.qubic = 0;
    })
    .catch(r => {
      console.error(r)
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
