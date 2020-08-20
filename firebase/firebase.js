import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCWb0pid60YaFGGBMze7TAAlJXa_4vitIY',
  authDomain: 'grocery-b4349.firebaseapp.com',
  databaseURL: 'https://grocery-b4349.firebaseio.com',
  projectId: 'grocery-b4349',
  storageBucket: 'grocery-b4349.appspot.com',
  messagingSenderId: '173985885514',
  appId: '1:173985885514:web:d5d17ad1bb16c7eeeea5b3',
  measurementId: 'G-SKCZYKHQT9',
};
export const createUserProfileDocument = async (userAuth, otherprops) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherprops,
      });
    } catch (error) {
      console.log('error creating user ', error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
