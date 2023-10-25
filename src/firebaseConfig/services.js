import { getDoc, getDocs, doc, collection, query, where } from 'firebase/firestore';
import { db } from './config';


// aislo estructura de codigo para el caso de querer cambiar la base de datos
export const getItem = (id) => {

   const item = doc(db, "items", id)
   return getDoc(item)
}


export const getItems = (category) => {
   const items = query(collection(db, 'items'),
      category && where('category', '==', category)
   )
   return getDocs(items)
}
