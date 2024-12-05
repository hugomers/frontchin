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



      <div :class="ismobile ? '' : 'row'">
        <div class="col flex justify-center">
          <q-uploader hide-upload-btn label="Imagen Articulo" accept=".jpg, image/*" @added="insertimageProd" multiple
            :style="sizes" @removed="removeImageProd" ref="artfil">
          </q-uploader>
        </div>
        <q-separator spaced inset vertical dark />
        <div class="col flex justify-center">
          <q-uploader :hide-upload-btn="true" :style="sizes" accept=".jpg, image/*" label="Imagen Proveedor"
            @added="insertimageProv" @removed="insertimageProv" multiple ref="providerfile">
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
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" mask="XXXXXXXXXXXX" />

        <q-input filled v-model="articule.description" type="text" label="Descripcion" :style="sizesinp"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" />

        <q-input filled v-model="articule.notes" type="text" label="Notas" :style="sizesinp"
          :class="ismobile ? 'q-mt-xs' : 'q-mt-md'" />

        <q-select filled v-model="articule.provider" use-input input-debounce="0" @new-value="createValue"
          :options="provfil" @filter="filterFn" :style="sizesinp" :class="ismobile ? 'q-mt-xs' : 'q-mt-md'"
          label="Proveedor/Fabricante" />

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
import { media } from 'src/boot/axios'


const $q = useQuasar()

const articule = ref({
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
  img_provider: [],
  img_product: []
})

const articulos = ref([]);
const provfil = ref([]);
const providerfile = ref(null)
const artfil = ref(null)
const hoveredItem = ref(null)

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
const providrs = computed(() => {
  return articulos.value.map(e => e.maker).filter((value, index, self) => {
    return self.indexOf(value) === index
  });
})



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

  const formData = new FormData();
  formData.append('code', articule.value.code)
  // formData.append('picture', articule.value.img_product)
  articule.value.img_product.forEach((file, index) => {
    formData.append(`picture[${index}]`, file);
  });
  formData.append('description', articule.value.description)
  // formData.append('provider', articule.value.img_provider)
  articule.value.img_provider.forEach((file, index) => {
    formData.append(`provider[${index}]`, file);
  });
  formData.append('chinesse_cost', costchin.value)
  formData.append('taxes', articule.value.taxes)
  formData.append('freight', articule.value.freight)
  formData.append('measures', articule.value.qubic)
  formData.append('mexican_cost', costmex.value)
  formData.append('pieces', articule.value.pxc)
  formData.append('_download', 0)
  formData.append('notes', articule.value.notes)
  formData.append('maker', articule.value.provider)
  console.log(formData)
  api.post('/insProduct', formData)
    .then(r => {
      console.log(r.data);
      init()
      $q.loading.hide();
      $q.notify({
        type: 'positive',
        message: 'Formulario Enviado',
        position: 'center'
      })

      articule.value = {
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
        img_provider: [],
        img_product: []
      }
      artfil.value.reset();
      providerfile.value.reset()


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

const removeImageProd = (files) => {
  console.log(files);
  articule.value.img_product = articule.value.img_product.filter(
    (file) => !files.some((removed) => removed.name === file.name)
  );
}
const removeImageProv = (files) => {
  console.log(files);
  articule.value.img_product = articule.value.img_product.filter(
    (file) => !files.some((removed) => removed.name === file.name)
  );
}

const insertimageProd = (files) => {
  // articule.value.img_product.push(files)
  articule.value.img_product = [...articule.value.img_product, ...files];
}

const insertimageProv = (files) => {
  // articule.value.img_provider = files
  articule.value.img_provider = [...articule.value.img_provider, ...files];
}


init()

</script>
