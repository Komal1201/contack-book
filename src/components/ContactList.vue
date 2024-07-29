<template>
  <div class="list-container">
    <h1>Contact List</h1>
    <div class="search-bar">
      <input v-model="searchTerm" placeholder="Search contacts" />
      <router-link to="/add-contact" class="btn-add">Add Contact</router-link>
    </div>
    <ol class="contact-list">
      <li class="contact-card" v-for="contact in filteredContacts" :key="contact.id">
        <router-link :to="{ name: 'ContactDetails', params: { id: contact.id } }">
          <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [],
      searchTerm: ''
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts
        .filter(contact =>
          `${contact.firstName} ${contact.lastName}`
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        )
        .sort((a, b) => a.lastName.localeCompare(b.lastName));
    }
  },
  created() {
    const storedContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    this.contacts = storedContacts;
  }
};
</script>

<style scoped>
.list-container {
  padding: 20px;
  text-align: center;
}

.search-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.search-bar input {
  padding: 10px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-add {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  text-decoration: none;
}

.btn-add:hover {
  background-color: #0056b3;
}

.contact-list {
  list-style-type: decimal;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-card {
  background: #e0f7fa;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, background-color 0.2s;
}

.contact-card:hover {
  background-color: #b2ebf2;
  transform: scale(1.02);
}

.contact-card h2 {
  margin: 0;
  font-size: 1.2rem;
  color: #00796b;
}
</style>
