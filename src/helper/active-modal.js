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


async function submitAdd(url, formdata) {
  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  const res = await fetch(url, requestOptions)
  const req = await res.json()

  console.log(req);
  // close modal
  activeModal.value = 0
}

async function submitEdit(adminUrl, formdata) {
    await fetch(adminUrl,  {
    method: 'POST',
    body: formdata,
  }).then(res => res.json()).then(data => {
    console.log(data);
  })

  //close modal
  activeModal.value = 0
}


async function submitDelete(url) {
  const requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };

  const res = await fetch(url, requestOptions)
  const req = await res.json()

  // close modal
  activeModal.value = 0
}

export { activeModal, changeActive, closeModal, nextModal, submitAdd, submitEdit, submitDelete }