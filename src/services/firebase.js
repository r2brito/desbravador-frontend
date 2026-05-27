import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)

let analyticsInstance

async function initFirebaseAnalytics() {
  if (typeof window === 'undefined') {
    return null
  }

  if (!firebaseConfig.measurementId) {
    return null
  }

  const analyticsSupported = await isSupported()
  if (!analyticsSupported) {
    return null
  }

  analyticsInstance = getAnalytics(app)
  return analyticsInstance
}

function getFirebaseApp() {
  return app
}

function getFirebaseAnalytics() {
  return analyticsInstance ?? null
}

export { getFirebaseApp, getFirebaseAnalytics, initFirebaseAnalytics }
