<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const newBook = ref({
  title: '',
  author: '',
  year: null,
  image: '',
});

const books = ref([]);
const isModalOpen = ref(false);
const selectedBook = ref({});
const searchText = ref('');
 
onMounted(() => {
  loadBooksFromStorage();
});

onUnmounted(() => {
  saveBooksToStorage();
});

const addBook = () => {
  if (newBook.value.title && newBook.value.author && newBook.value.year && newBook.value.image) {
    books.value.push({ ...newBook.value });
    newBook.value = { title: '', author: '', year: null, image: '' };
    saveBooksToStorage();
  }
};

const removeBook = (index) => {
  books.value.splice(index, 1);
  saveBooksToStorage();
};

const openModal = (book) => {
  selectedBook.value = book;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const saveBooksToStorage = () => {
  localStorage.setItem('books', JSON.stringify(books.value));
};

const loadBooksFromStorage = () => {
  const savedBooks = localStorage.getItem('books');
  if (savedBooks) {
    books.value = JSON.parse(savedBooks);
  }
};

const filteredBooks = computed(() => {
  return books.value.filter(book =>
    book.title.toLowerCase().includes(searchText.value.toLowerCase())
  );
}); 
  </script>
  <template>
    <div class="app__cont__th">
      <span>Добавить книгу</span>
      <form  @submit.prevent="addBook">
        <input
          v-model="newBook.title"
          type="text"
          placeholder="Введите название книги"
          required
        />
        <input
          v-model="newBook.author"
          type="text"
          placeholder="Введите автора"
          required
        />
        <input
          v-model="newBook.year"
          type="number"
          placeholder="Введите год публикации"
          required
        />
        <input
        v-model="newBook.image"
        type="text"
        placeholder="Введите URL изображения"
        required
      />
        <button class="add__btn" type="submit">Добавить книгу</button>
      </form>
      <h1 class="title__bookl">Список книг</h1>
      <input v-model="searchText" type="text" placeholder="Поиск книг" />
      <ul class="content__list">
        <li v-for="(book, index) in filteredBooks" :key="index">
          <img  @click="openModal(book)" :src="book.image" alt="Картинка книги" v-if="book.image" />
          <strong>{{ book.title }}</strong>
          ({{ book.year }}) - {{ book.author }}
          <button class="remove" @click.stop="removeBook(index)">Удалить</button>
        </li>
      </ul>
  
      <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <img class="modal__img" :src="selectedBook.image" alt="Картинка книги" v-if="selectedBook.image" />
          <h2>{{ selectedBook.title }}</h2>
          <p>Автор: {{ selectedBook.author }}</p>
          <p>Год публикации: {{ selectedBook.year }}</p>
        </div>
      </div>
    </div>
  </template>
  <style scoped>
  .title__bookl {
    font-size: 40px;
  }

  .remove {
    border-radius: 20px;
    border: none;

  }
  
  form {
    margin: auto;
    gap: 10px;
    margin-bottom: 100px;
    max-width: 500px;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .add__btn {
    width: 100%;
    margin: auto;
    border-radius: 20px;
    border: none;

  }

  input {
    margin: auto;
    color: rgb(27, 27, 27);
    width: 100%;
    background-color: rgb(231, 230, 230);
    padding: 10px;
    border: none;
    border-radius: 20px;
  }
  .modal {
  display: flex;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-content {
  background-color: #fefefe;
  margin:  auto;
  padding: 50px; 
  width: 80%;
  max-width: 500px;
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

img {
  height: auto;
  margin-top: 10px;
}

li {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

.modal__img {
  max-width: 300px;
}

li img {
  width: 400px;
  height: 600px;
  object-fit: cover;
  margin-right: 10px;
}
 .content__list {
    gap: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  </style>