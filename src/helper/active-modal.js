import { ref } from 'vue'


let activeModal = ref(0)
const addModal = ref(false)
const seeModal = ref(false)
const editModal = ref(false)
const deleteModal = ref(false)


function changeActive(id){
  activeModal.value = id
}

function closeModal(){
  activeModal.value = 0
}

function nextModal(id) {
  activeModal.value = id +1
}


function submitAdd() {
  console.log('Added');
  
}

function submitEdit() {
  console.log('Edited')
}

function submitDelete() {
  console.log('deleted');
}

export {activeModal, changeActive, closeModal, nextModal, submitAdd, submitEdit, submitDelete }