import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAVguu0Qy7u_0yFKX8Cu8OrWH5BNNh3FaQ',
  authDomain: 'bildhauer-ce38c.firebaseapp.com',
  databaseURL: 'https://bildhauer-ce38c.firebaseio.com',
  projectId: 'bildhauer-ce38c',
  storageBucket: 'bildhauer-ce38c.appspot.com',
  messagingSenderId: '164545109359'
}

export function getFirebaseInstance () {
  process.firebaseInstance =
    process.firebaseInstance || firebase.initializeApp(firebaseConfig)
  return process.firebaseInstance
}

export function convertFirebaseListIntoArray (list, fields) {
  const result = []
  Object.keys(list).forEach((key, index) => {
    const item = {key}
    fields.forEach(field => {
      item[field] = list[key][field]
    })
    result[index] = item
  })
  return result
}

export function bindContentFirebase (contentId, callback) {
  const firebase = getFirebaseInstance()
  firebase
    .database()
    .ref(`${contentId}/`)
    .on('value', function (snapshot) {
      callback(snapshot.val())
    })
}
