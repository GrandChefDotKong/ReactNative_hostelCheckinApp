import Firebase from 'firebase'; 

// Test config Firebase
const testFirebaseConfig = {
  apiKey: "AIzaSyANjgSUjtut_UUjyUvgzF0dKQ1FRF3efZU",
  authDomain: "tentenapp-3d4fe.firebaseapp.com",
  databaseURL: "https://tentenapp-3d4fe.firebaseio.com",
  projectId: "tentenapp-3d4fe",
  storageBucket: "tentenapp-3d4fe.appspot.com",
  messagingSenderId: "8557071050",
  appId: "1:8557071050:web:f1ba0f541977476ae1c233",
  measurementId: "G-EEVPDJWNHF"
}

export default class FirebaseDB {

  constructor() {
      console.log('starting Firebase ...');
      this.firebase = Firebase.initializeApp(testFirebaseConfig);
      console.log('Firebase ON!');
  }

  closeConnection() {
    console.log("closing Firebase ...")
    this.firebase.delete();
    this.firebase = null;
    console.log("Firebase OFF!")
  }

  saveFormData = async (formData, savedSignature, picture) => {
    try {
      const currentDay = new Date();
      const folderPath = currentDay.getFullYear() + '/' + parseInt(currentDay.getMonth()+1) + '/' + 
        formData.lastName+'-'+formData.firstName+'_'+formData.arrivalDate ;

      await this.firebase.database().ref(folderPath).set({
        firstName : formData.firstName,
        lastName : formData.lastName,
        age : formData.age,
        sex: formData.sex,
        nationality : formData.nationality,
        occupation: formData.occupation,
        passportNumber: formData.passportNumber,
        arrivalDate : formData.arrivalDate,
        departureDate : formData.departureDate,
        signature : savedSignature,
        //idPicture : picture
      })
      console.log('Data : OK!')
      return true;
    } catch(error) {
        //error callback
        console.log('error ' , error);
        return false;
    }
  }

  uploadPicture = async (uri, pictureName) => {
    try {
      const currentDay = new Date();
      const folderPath = currentDay.getFullYear() + '/' + parseInt(currentDay.getMonth()+1) + '/' ;

      const response = await fetch(uri);
      const blob = await response.blob();

      await this.firebase.storage().ref(folderPath).child(pictureName).put(blob)
      console.log('Picture : OK!')
      return true;
    } catch(error) {
        //error callback
        console.log('error ' , error);
        return false;
    }
  }
/*
  uploadPicture = async (uri, pictureName) => {

    const currentDay = new Date();
    const folderPath = currentDay.getFullYear() + '/' + parseInt(currentDay.getMonth()+1) + '/' ;

    const response = await fetch(uri).then(function(reponse) {
      if(!reponse.ok) {
        throw Error(reponse.statusText)
      }  
      return reponse;
    }).then(response => console.log("ok")).catch(error => console.log(error));

    const blob = await response.blob();

    var uploadTask = this.firebase.storage().ref(folderPath).child(pictureName).put(blob);

    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function(error) {
      // Handle unsuccessful uploads
      console.log('Picture : Failed!');
      console.log('error ' , error);
      return false;
    }, function() {
      // Handle successful uploads on complete*
      console.log('Picture : OK!');
      return true;
    });
  }
*/
  uploadSignature = async (savedSignature, signatureName) => {

    const currentDay = new Date();
  
    const folderPath = currentDay.getFullYear() + '/' + parseInt(currentDay.getMonth()+1) + '/' ;
  
    this.firebase.storage().ref(folderPath).child(signatureName).putString(savedSignature, 'data_url').then(()=>{
      //success callback
      console.log('Signature : SUCCESS')
    }).catch((error)=>{
      //error callback
      console.log('error ' , error)
    })
  }
}
