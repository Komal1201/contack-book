<template>
  <form @submit.prevent="handleSubmit" class="form-container">
    <div class="form-field">
      <label for="firstName">First Name:</label>
      <input type="text" v-model="contact.firstName" required />
    </div>
    <div class="form-field">
      <label for="lastName">Last Name:</label>
      <input type="text" v-model="contact.lastName" required />
    </div>
    <div class="form-field">
      <label for="email">Email:</label>
      <input type="email" v-model="contact.email" required />
    </div>
    <div class="form-field">
      <label for="phone">Phone Number:</label>
      <input type="tel" v-model="contact.phone" required />
    </div>
    <button type="submit" class="btn-save">Save</button>
  </form>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const contact = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });

    const loadContact = () => {
      if (route.params.id) {
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        contact.value = contacts.find(c => c.id === route.params.id);
      }
    };

    const handleSubmit = () => {
      let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');

      if (contact.value.id) {
        const index = contacts.findIndex(c => c.id === contact.value.id);
        contacts[index] = contact.value;
      } else {
        contact.value.id = Date.now().toString();
        contacts.push(contact.value);
      }

      localStorage.setItem('contacts', JSON.stringify(contacts));
      router.push('/contacts');
    };

    onMounted(loadContact);

    return { contact, handleSubmit };
  }
};
</script>

<style scoped>
.form-container {
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  margin: 0 auto;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-field label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #4caf50;
}

.form-field input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-save {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
}

.btn-save:hover {
  background-color: #45a049;
}
</style>
