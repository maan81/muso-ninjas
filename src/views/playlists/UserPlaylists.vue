<template>
  <div class="user-playlist">
    <h2>My Playlist</h2>
    <div v-if="playlists">
      <ListView :playlists="playlists" />
    </div>
    <router-link :to="{ name: 'CreatePlaylist' }" class="btn">Create a new Playlist</router-link>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection';
import getUser from '@/composables/getUser';
import ListView from '@/components/ListView.vue';

export default {
  components: { ListView },
  setup(){
    const { user } = getUser();
    const { documents: playlists } = getCollection(
      'playlists',
      ['userId', '==', user.value.uid]
    );

    console.log(playlists)

    return  { playlists };
  }
};
</script>

<style>
  h2 {
    padding-bottom: 10px;
    margin-bottom: 30px;
    border-bottom: 1px solid var(--secondary)
  }
  .btn {
    margin-top: 20px;
  }
</style>
