import { db } from './firebase';
import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc, query, orderBy, limit } from 'firebase/firestore';

export const getGuestMessages = async () => {
    const q = query(collection(db, 'guestbook'), orderBy('date', 'desc'), limit(100));
    const querySnapshot = await getDocs(q);
    const messages: any[] = [];
    querySnapshot.forEach((doc) => {
        messages.push({ id: doc.id, ...doc.data() });
    });
    return messages;
};

export const addGuestMessage = async (name: string, message: string, password: string) => {
    const docRef = await addDoc(collection(db, 'guestbook'), {
        name,
        message,
        password,
        date: new Date(),
    });
    return docRef.id;
};

export const updateGuestMessage = async (id: string, message: string, password: string) => {
    const docRef = doc(db, 'guestbook', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists() && docSnap.data().password === password) {
        await updateDoc(docRef, {
            message,
        });
        return true;
    } else {
        return false;
    }
};

export const deleteGuestMessage = async (id: string, password: string) => {
    const docRef = doc(db, 'guestbook', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists() && docSnap.data().password === password) {
        await deleteDoc(docRef);
        return true;
    } else {
        return false;
    }
};
