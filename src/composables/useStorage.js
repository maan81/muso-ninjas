import {ref} from 'vue';
import {projectStorage} from '../firebase/config';

const { user } = getUser();

const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);

  const uploadImage = async (file) => {
    // template strings useaaaa backticks 
    filePath.value = `covers/${user.value.uid}/${file.name}`;
    const storageRef = projectStorage.ref(filePath.value);

    try{
      const res = await storageRef.put(file);
      // in firebase getDownloadURL returns the link
      url.value = res.ref.getDownloadURL();
    }catch(err){
      console.log(err.message);
      error.value = err.message;
    };
  };

  return { url, filepath, error, uploadImage };
};

export default userStorage;
