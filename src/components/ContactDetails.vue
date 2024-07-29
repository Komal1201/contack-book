<template>
  <div v-if="contact" class="details-card">
    <router-link to="/contacts" class="btn-back">Back</router-link>
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    <p>Email: {{ contact.email }}</p>
    <p>Phone: {{ contact.phone }}</p>
    <div class="actions">
      <router-link :to="{ name: 'EditContact', params: { id: contact.id } }">
        <button class="btn-edit">Edit</button>
      </router-link>
      <button @click="handleDelete" class="btn-delete">Delete</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const contact = ref(null);

    const loadContact = () => {
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      contact.value = contacts.find(c => c.id === route.params.id);
    };

    const handleDelete = () => {
      let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      contacts = contacts.filter(c => c.id !== contact.value.id);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      router.push('/contacts');
    };

    onMounted(loadContact);

    return { contact, handleDelete };
  }
};
</script>

<style scoped>
.details-card {
  background: #fefefe;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.details-card h2 {
  margin-bottom: 10px;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.btn-back {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  margin-bottom: 20px;
}

.btn-back:hover {
  background-color: #0056b3;
}

.btn-edit {
  padding: 10px 20px;
  background-color: #ffa500;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-edit:hover {
  background-color: #ff8c00;
}

.btn-delete {
  padding: 10px 20px;
  background-color: #ff4c4c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-delete:hover {
  background-color: #ff1a1a;
}
</style>
