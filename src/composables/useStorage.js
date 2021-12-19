import {ref} from 'vue';
import {projectStorage} from '../firebase/config';
import getUser from './getUser';

const { user } = getUser();

const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);

  const uploadImage = async (file) => {
    // template strings use backticks
    filePath.value = `covers/${user.value.uid}/${file.name}`;
    const storageRef = projectStorage.ref(filePath.value);

    console.log(filePath.value);
    // console.log(storageRef);
    try{
      const res = await storageRef.put(file);
      // in firebase getDownloadURL returns the link
      url.value = await res.ref.getDownloadURL();
    }catch(err){
      console.log(err.message);
      error.value = err.message;
    };
  };

  return { url, filePath, error, uploadImage };
};

export default useStorage;
