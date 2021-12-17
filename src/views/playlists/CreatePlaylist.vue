<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create New Playlist</h4>
    <input type="text" required placeholder="Playlist Title" v-model="title">
    <textarea required placeholder="Playlist Description" v-model="description">
    </textarea>
    
    <label>Upload playlist cover image</label>
    <input type="file" @change="handleChange">
    
    <div class="error">{{ fileError }}</div>
    <button>Create</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const title = ref('');
    const description = ref('');
    const file = ref(null);
    const fileError = ref(null);

    const handleSubmit = () => {
      if(file.value){
        console.log(title.value, description.value, file.value);
      }
    };

    // allowed file types
    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e) => {
      const selected = e.target.files[0];
      console.log(selected);

      if(selected && types.includes(selected.type)){
        file.value = selected;
        fileError.value = null;
      }else{
        file.value = null;
        fileError.value = 'Please select an image file (png or JPEG)';
      }
    };

    return { title, description, handleSubmit, fileError, handleChange };
  }
};
</script>

<style>
  input[type="file"] {
    border: 0;
    padding: 0;
  }
  label {
    font-size: 12px;
    display: block;
    margin-top: 30px;
  }
  button {
    margin-top: 20px;
  }
</style>
