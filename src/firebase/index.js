import {firebase} from '@react-native-firebase/database';

const database = firebase
  .app()
  .database(
    'https://diaryschool-default-rtdb.asia-southeast1.firebasedatabase.app/',
  );

export {firebase, database};
