// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBnrhBIeQ6e-i-wlxuwC0sQvllLrShLmI",
  authDomain: "e-commerce-5b873.firebaseapp.com",
  projectId: "e-commerce-5b873",
  storageBucket: "e-commerce-5b873.appspot.com",
  messagingSenderId: "336530219125",
  appId: "1:336530219125:web:1b97f4ce43547d6a7d983c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems() {
  const miColleccion = collection(firestore, "productos");
  let snapShotDB = await getDocs(miColleccion);

  let dataDocs = snapShotDB.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}
export async function getItemsSingle(idParams) {
  const docRef = doc(firestore, "productos", idParams);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
}

export async function getItemsByCategory(catParams) {
  const collectionRef = collection(firestore, "productos");
  const queryCategory = query(
    collectionRef,
    where("category", "==", catParams)
  );
  const snapShotDB = await getDocs(queryCategory);

  let dataDocs = snapShotDB.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}

export async function createBuyOrder(orderData) {
  const collectionRef = collection(firestore, "orders");
  let respuesta = await addDoc(collectionRef, orderData);

  return respuesta.id;
}


export default firestore;
