// // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCBwKVBci49vuVTyugxBTImBxpeswxX2ds",
//     authDomain: "trainscheduler-ba3c2.firebaseapp.com",
//     databaseURL: "https://trainscheduler-ba3c2.firebaseio.com",
//     projectId: "trainscheduler-ba3c2",
//     storageBucket: "trainscheduler-ba3c2.appspot.com",
//     messagingSenderId: "606412614658"
//   };
  
//   firebase.initializeApp(config);

//   var database = firebase.database();

//   console.log(database);





// #Main Process
// =====================================================================================================

  $("#submit").on("click", function(event){

    console.log("clicked");
      
      event.preventDefault();

      var trainName = $("#train-name").val().trim();
      console.log(trainName);
      var trainDestination = $("#destination").val().trim();
      var firstTrainTime = $("#first-train-time").val().trim();
      var trainFrequency = $("#frequency").val().trim();

  

      var newTrain = {
            name: trainName,
            destination: trainDestination,
            firsttrain: firstTrainTime,
            frequency: trainFrequency,
      };

      database.ref().push(newTrain);

      console.log(newTrain.name);
      console.log(newTrain.destination);
      console.log(newTrain.firsttrain);
      console.log(newTrain.trainFrequency);

    })



// 2. Create button for adding train schedule - then update the html + update the database
// 3. Create a way to retrieve train schedules from the train database.
// 4. Create a way to calculate when the next train will arrive using the difference between current time and scheduled train arrival time
//    use moment.js formatting to set difference in minutes/change times to regular time AM PM, etc. 

    
