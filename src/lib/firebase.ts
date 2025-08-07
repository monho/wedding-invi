import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbtIvDQceE_4O9bj9Bz6vpHfXu8U_WvFU",
  authDomain: "heejin-d6d79.firebaseapp.com",
  projectId: "heejin-d6d79",
  storageBucket: "heejin-d6d79.firebasestorage.app",
  messagingSenderId: "751438703089",
  appId: "1:751438703089:web:4bb85ff3051a336a817c50",   
  measurementId: "G-EB5WKKX21D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ 브라우저 환경에서만 Analytics 초기화
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { db, analytics };