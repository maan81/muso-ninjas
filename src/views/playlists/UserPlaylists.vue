<template>
  <div class="user-playlist">
    <h2>My Playlist</h2>
  </div>
</template>

<script>
// import AddSong from '@/components/AddSong';
// import useStorage from '@/composables/useStorage';
// import useDocument from '@/composables/useDocument';
// import getDocument from '@/composables/getDocument';
// import getUser from '@/composables/getUser';
// import { computed } from 'vue';
// import { useRouter } from 'vue-router';

export default {
  // props: ['id'],
  // components: {AddSong},
  // setup(props){
  //   // here renaming document to playlist !!
  //   const { error, document: playlist } = getDocument('playlists', props.id);
  //   const { user } = getUser();
  //   const { deleteDoc, updateDoc } = useDocument('playlists', props.id);
  //   const { deleteImage } = useStorage();
  //   const router = useRouter();

  //   const ownership = computed(() => {
  //     return playlist.value && user.value && user.value.uid == playlist.value.userId;
  //   });

  //   const handleDelete = async () => {
  //     await deleteImage(playlist.value.filePath);
  //     await deleteDoc();
  //     router.push({ name: 'Home' });
  //   };

  //   const handleClick = async (id) => {
  //     const songs = playlist.value.songs.filter((song) => {
  //       return song.id != id
  //     });
  //     await updateDoc({ songs });
  //   };

  //   return  { error, playlist, ownership, handleDelete, handleClick };
  // }
};
</script>

<style>
  .playlist-details {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 80px;
  }
  .cover {
    overflow: hidden;
    border-radius: 20px;
    position: relative;
    padding: 160px;
  }
  .cover img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    max-width: 200%;
    max-height: 200%;
  }
  .playlist-info {
    text-align: center;
  }
  .playlist-info h2 {
    text-transform: capitalize;
    font-size: 28px;
    margin-top: 20px;
  }
  .playlist-info p {
    margin-bottom: 20px;
  }
  .username {
    color: #999;
  }
  .description {
    text-align: left;
  }
  .single-song {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed var(--secondary);
    margin-bottom: 20px;
  }
</style>
