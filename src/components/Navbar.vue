<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/ninja.png" alt="Ninja" />
      <h1><router-link :to="{ name: 'Home' }">Muso Ninja</router-link></h1>
      <div class="links">
        <div v-if="user">
          <span>{{ user.displayName }}</span>
          <router-link :to="{ name: 'CreatePlaylist' }">Create Playlist</router-link>
          <router-link :to="{ name: 'UserPlaylists' }">My Playlist</router-link>
          <button @click="handleClick">Logout</button>
        </div>
        <div v-else >
          <router-link class="btn" :to="{ name: 'Signup' }">Signup</router-link>
          <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '@/composables/useLogout';
import { useRouter } from 'vue-router';
import getUser from '@/composables/getUser';
import UserPlaylists from '../views/playlists/UserPlaylists.vue'


export default {
  setup(){
    const { logout, error, isPending } = useLogout();
    const router = useRouter();
    const { user } = getUser();

    const handleClick = async () => {
      await logout();
      if(!error.value){
        console.log('user logged out');
        router.push({ name: 'Login' });
      }
    };

    return { handleClick, user };
  }
}
</script>

<style scoped>
  .navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav img {
    max-height: 60px;
  }
  nav h1 {
    margin-left: 20px;
  }
  nav .links {
    margin-left: auto;
  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }
  span {
    font-size: 14px;
    display: inline-block;
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
  }
</style>
