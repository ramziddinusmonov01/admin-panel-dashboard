import { ref } from 'vue'
let adminUrl = "http://fazl.karimjonov.uz/api/admin"

let activeModal = ref(0)
const addModal = ref(false)
const seeModal = ref(false)
const editModal = ref(false)
const deleteModal = ref(false)


function changeActive(id) {
  activeModal.value = id
}

function closeModal() {
  activeModal.value = 0
}

function nextModal(id) {
  activeModal.value = id + 1
}


function submitAdd() {
  console.log('Added');

}
const token = localStorage.getItem('token')
async function submitEdit(formdata) {
  const res = await fetch(adminUrl + '/settings/1', {
    method: 'POST',
    headers: {
      "token": token
    },
    body: formdata,
  })
  const data = await res.json()

  console.log(data);
}
async function submitEditHeader(formdata) {
  const res = await fetch(adminUrl + '/header/content/1', {
    method: 'POST',
    headers: {
      "token": token
    },
    body: formdata,
  })
  const data = await res.json()

  console.log(data);
}
async function submitEditAmienities(formdata) {
  const res = await fetch(adminUrl + 'amenities', {
    method: 'POST',
    headers: {
      "token": token
    },
    body: formdata,
  })
  const data = await res.json()

  console.log(data);
}
function submitDelete() {
  console.log('deleted');
}

export { activeModal, changeActive, submitEditAmienities, submitEditHeader, closeModal, nextModal, submitAdd, submitEdit, submitDelete }