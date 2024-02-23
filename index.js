  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  import { getDatabase, ref, child, get, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDTbPn94ofiCo9LvutQ7EskZR4Ety2B1Jw",
    authDomain: "http5214-217de.firebaseapp.com",
    databaseURL: "https://http5214-217de-default-rtdb.firebaseio.com",
    projectId: "http5214-217de",
    storageBucket: "http5214-217de.appspot.com",
    messagingSenderId: "1031138496547",
    appId: "1:1031138496547:web:45a6f3e58a06ca49e02196",
    measurementId: "G-NNRBQ1HTSS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = getDatabase(app);

  const messages = ref(database, "messages");


  onValue(messages, snapshot => {
    const childKey = snapshot.key;
    const childData = snapshot.val();


    console.log(childKey);
    console.log(childData);


    const ul = document.querySelector("#messages");

    childData.forEach(e => {
      console.log(e);

      const text  = document.createTextNode(e.message);
      const li = document.createElement("li");


      li.appendChild(text);
      ul.appendChild(li);
    });


  }, {
    onlyOnce: false,
  });
