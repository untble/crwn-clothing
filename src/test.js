import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('c9jDzfHP5rdhn63z4Rdr')
    .collection('cartItem').doc('YDaCTJdFvItWtQIaGAgb');

//firestore.doc('/users/c9jDzfHP5rdhn63z4Rdr/cartItem/YDaCTJdFvItWtQIaGAgb');
//firestore.collection('/users/c9jDzfHP5rdhn63z4Rdr/cartItem')