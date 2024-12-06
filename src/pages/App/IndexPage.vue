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
        <q-tr :props="props">
          <q-td key="Imagen" :props="props" @click="mosrow(props.row)">
            <q-table :rows="props.row.fileProduct" grid hide-bottom :pagination="{ rowsPerPage: 3 }">
              <template v-slot:item="pro">
                <div style="position: relative; border: 1px solid #EEEEEE;
                       border-radius: 15px;
                       width: 45px;
                       height: 45px;
                       margin: 5px
                       ">
                  <q-avatar size="50px" square>
                    <q-img :src="`${media}/${pro.row}`" style="height: 25px; width: 25px">
                    </q-img>
                  </q-avatar>
                </div>
              </template>
            </q-table>

          </q-td>

          <q-td key="Provider" :props="props" @click="mospro(props.row)">
            <q-table :rows="props.row.fileProvider" hide-bottom grid :pagination="{ rowsPerPage: 3 }">
              <template v-slot:item="pro">
                <div style="position: relative; border: 1px solid #EEEEEE;
                       border-radius: 15px;
                       width: 50px;
                       height: 50px;
                       margin: 5px
                       ">
                  <q-avatar size="50px" square>
                    <q-img :src="`${media}/${pro.row}`" style="height: 25px; width: 25px">
                    </q-img>
                  </q-avatar>
                </div>
              </template>
            </q-table>
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

          <q-td key="Costchin" :props="props">
            <div class="text-pre-wrap"> ¥ {{ props.row.chinesse_cost }}</div>
          </q-td>
          <q-td key="Costmex" :props="props">
            <div class="text-pre-wrap"> $ {{ props.row.mexican_cost }}</div>
          </q-td>
          <q-td key="Impuestos" :props="props">
            <div class="text-pre-wrap"> $ {{ Number(Number(props.row.mexican_cost) -
              Number(props.row.chinesse_cost)).toFixed(2)
              }}</div>
          </q-td>
          <q-td key="Makers" :props="props">
            <div class="text-pre-wrap">{{ props.row.maker }}</div>
          </q-td>
          <q-td key="Notes" :props="props">
            <div class="text-pre-wrap">{{ props.row.notes }}</div>
          </q-td>

        </q-tr>
      </template>
    </q-table>

    <q-dialog v-model="mosImage.state">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="q-pa-md">
            <q-carousel swipeable animated v-model="slide" thumbnails infinite>
              <q-carousel-slide :name="index" :img-src="`${media}/${file}`"
                v-for="(file, index) in mosImage.body.fileProduct" :key="index" />
            </q-carousel>
          </div>
        </q-card-section>
        <q-card-section class="text-center">
          <div class="text-h6">{{ mosImage.body.code.toUpperCase() }}</div>
          <div class="text-subtitle2">{{ mosImage.body.description.toUpperCase() }}</div>
        </q-card-section>
        <q-card-section class="row">
          <div class="col">
            <div>Costo Chino : {{ mosImage.body.chinesse_cost }}</div>
            <div>Costo Mexicano : {{ mosImage.body.mexican_cost }}</div>
          </div>
          <div class="col">
            <div>Fabricante : {{ mosImage.body.maker }}</div>
            <div>Notas : {{ mosImage.body.notes }}</div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>


    <q-dialog v-model="mosProv.state">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="q-pa-md">
            <!-- {{ `${media}/${mos.body.fileProduct}` }} -->
            <q-carousel swipeable animated v-model="slide" thumbnails infinite>
              <q-carousel-slide :name="index" :img-src="`${media}/${file}`"
                v-for="(file, index) in mosProv.body.fileProvider" :key="index" />
            </q-carousel>
          </div>
        </q-card-section>
        <q-card-section class="text-center">
          <div class="text-h6">{{ mosProv.body.code.toUpperCase() }}</div>
          <div class="text-subtitle2">{{ mosProv.body.description.toUpperCase() }}</div>
        </q-card-section>
        <q-card-section class="row">
          <div class="col">
            <div>Costo Chino : {{ mosProv.body.chinesse_cost }}</div>
            <div>Costo Mexicano : {{ mosProv.body.mexican_cost }}</div>
          </div>
          <div class="col">
            <div>Fabricante : {{ mosProv.body.maker }}</div>
            <div>Notas : {{ mosProv.body.notes }}</div>
          </div>


        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { exportFile, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import { media } from 'src/boot/axios'
import ExcelJS from 'exceljs'

const $q = useQuasar()



const articulos = ref([]);
const mosImage = ref({
  state: false,
  body: null
})
const mosProv = ref({
  state: false,
  body: null
})
const filtro = ref('');
const slide = ref(0);

const columns = ref([
  { name: 'Imagen', label: 'Imagen Producto', field: articulo => articulo.picture, align: 'left' },
  { name: 'Provider', label: "Proveedor", field: articulo => articulo.provider, align: 'left' },
  { name: 'Codigo', label: "Codigo", field: articulo => articulo.code, align: 'left' },
  { name: 'Description', label: "Description", field: articulo => articulo.description, align: 'left' },
  { name: 'pxc', label: "Piezas x Caja", field: articulo => articulo.pieces, align: 'left' },
  { name: 'Costchin', label: "Costo Chino", field: articulo => articulo.chinesse_cost, align: 'left' },
  { name: 'Costmex', label: "Costo Mexicano", field: articulo => articulo.mexican_cost, align: 'left' },
  { name: 'Impuestos', label: "Impuestos", field: articulo => articulo.taxes, align: 'left' },
  { name: 'Makers', label: "Fabricante", field: articulo => articulo.maker, align: 'left' },
  { name: 'Notes', label: "Notas", field: articulo => articulo.notes, align: 'left' },
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
  mosImage.value.body = a
  mosImage.value.state = true
}

const mospro = (a) => {
  mosProv.value.body = a
  mosProv.value.state = true
}
const convertirUrlABase64 = async (url) => {
  try {
    try {
      const response = await api.get(`imagen/${url}`, { responseType: 'blob' });
      // console.log(response)
      const base64 = await blobToBase64(response.data);
      // console.log(base64)
      return base64; // Retorna el Base64 de la imagen
    } catch (error) {
      console.error("Error al convertir la URL a Base64:", error);
    }
  } catch (error) {
    console.error("Error al convertir la URL a Base64:", error);
    throw error; // Lanza el error para manejarlo adecuadamente
  }
}

const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(blob); // Leer el blob como Data URL (Base64)
  });
}
const exportTable = async () => {
  $q.loading.show({ message: 'Descargando excel' });
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(`Productos`);
  worksheet.addRow(['Codigo', 'Descripcion', 'PXC', 'Costo Chino', 'Costo Mexicano', 'Impuestos', 'Fabrica', 'Notas']);
  for (const [rowIndex, row] of basket.value.entries()) {
    // console.log(rowIndex)
    worksheet.addRow([
      row.code,
      row.description,
      row.pieces,
      row.chinesse_cost,
      row.mexican_cost,
      (Number(row.mexican_cost) - Number(row.chinesse_cost)).toFixed(2),
      row.maker,
      row.notes
    ]);
  }
  const filas = ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY', 'AZ'];
  for (const [rowIndex, row] of basket.value.entries()) {
    let currentColumnIndex = 0;
    for (const [imageIndex, imagePath] of row.fileProduct.entries()) {
      try {
        const base64Image = await convertirUrlABase64(imagePath);
        const extension = imagePath.split('.').pop().toLowerCase();
        const imageId = workbook.addImage({
          base64: base64Image, // Base64 de la imagen
          extension: extension, // Extensión de la imagen
        });
        worksheet.addImage(imageId, `${filas[currentColumnIndex]}${rowIndex + 2}:${filas[currentColumnIndex]}${rowIndex + 2}`);
        currentColumnIndex++
      } catch (error) {
        console.error(`Error al agregar la imagen: ${imagePath}`, error);
      }
    }
    for (const [imageIndex, imagePath] of row.fileProvider.entries()) {
      try {
        const base64Image = await convertirUrlABase64(imagePath);
        const extension = imagePath.split('.').pop().toLowerCase();
        const imageId = workbook.addImage({
          base64: base64Image, // Base64 de la imagen
          extension: extension, // Extensión de la imagen
        });
        worksheet.addImage(imageId, `${filas[currentColumnIndex]}${rowIndex + 2}:${filas[currentColumnIndex]}${rowIndex + 2}`);
        currentColumnIndex++
      } catch (error) {
        console.error(`Error al agregar la imagen: ${imagePath}`, error);
      }
    }
  }
  worksheet.columns.forEach(column => {
    let maxLength = 0;
    column.eachCell({ includeEmpty: true }, (cell) => {
      const columnLength = cell.value ? cell.value.toString().length : 10;
      if (columnLength > maxLength) {
        maxLength = columnLength;
      }
    });
    column.width = maxLength < 10 ? 10 : maxLength; // Ajusta el ancho mínimo y máximo
  });
  worksheet.eachRow((row, rowIndex) => {
    if (rowIndex >= 2) {  // Comienza desde la fila 2 (index 1)
      row.height = 50;  // Establecer la altura en 15 puntos (aproximadamente 20 píxeles)
    }
  });


  const downloadExcel = async () => {
    try {
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: 'application/octet-stream' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `Productos.xlsx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error al descargar el archivo Excel:', error);
    }
  };
  downloadExcel();
  updateProducts();
  $q.loading.hide()
}

const updateProducts = async () => {
  try {
    const resp = await api.post('/updateProduct', { products: basket.value });
    articulos.value = resp.data.products
    console.log(resp)
  } catch (error) {
    // Verifica si el error tiene una respuesta del servidor
    if (error.response) {
      console.error('Error del servidor:', error.response.status); // Código de estado
      console.error('Detalles del error:', error.response.data);   // Mensaje del error
    } else if (error.request) {
      console.error('No se recibió respuesta del servidor:', error.request);
    } else {
      console.error('Error al configurar la solicitud:', error.message);
    }
  }
}
init()
</script>
