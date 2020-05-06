const firebaseConfig = {
  apiKey: 'AIzaSyBbRMq-s9vIhJLw_mzQZMQN6nLGGzjO-oU',
  authDomain: 'famanagement09.firebaseapp.com',
  databaseURL: 'https://famanagement09.firebaseio.com',
  projectId: 'famanagement09',
  storageBucket: 'famanagement09.appspot.com',
  messagingSenderId: '259314462694',
  appId: '1:259314462694:web:7200ee31dd33d92f64f027',
  measurementId: 'G-T4NF6VVTF9',
};

// Cloud Functions
// const backendUrl = `http://localhost:5000/${
//   firebaseConfig.projectId
// }/us-central1/api/api`;

// App Engine / Debug
const backendUrl = `http://localhost:8080/api`;

export default {
  firebaseConfig,
  backendUrl,
};
