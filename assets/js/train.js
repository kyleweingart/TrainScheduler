$(document).ready(function () {


  // // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCBwKVBci49vuVTyugxBTImBxpeswxX2ds",
    authDomain: "trainscheduler-ba3c2.firebaseapp.com",
    databaseURL: "https://trainscheduler-ba3c2.firebaseio.com",
    projectId: "trainscheduler-ba3c2",
    storageBucket: "trainscheduler-ba3c2.appspot.com",
    messagingSenderId: "606412614658"
  };

  firebase.initializeApp(config);

  var database = firebase.database();







  // #Main Process
  // =====================================================================================================

  // button for adding trains

  $("#submit").on("click", function (event) {



    event.preventDefault();

    // grabs user input

    var trainName = $("#train-name").val().trim();
    var trainDestination = $("#destination").val().trim();
    var firstTrainTime = $("#first-train-time").val().trim();
    console.log(firstTrainTime);

    var trainFrequency = $("#frequency").val().trim();

    // creates object for holding train data
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      firsttrain: firstTrainTime,
      frequency: trainFrequency,
    };

    // upload data to firebase database
    database.ref().push(newTrain);

    // console log
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firsttrain);
    console.log(newTrain.frequency);



    // Clear text boxes

    $("#train-name").val("");
    $("#destination").val("");
    $("#first-train-time").val("");
    $("#frequency").val("");

  })






  // update the html + update the database
  database.ref().on("child_added", function (childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());

    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().firsttrain;
    var trainFrequency = childSnapshot.val().frequency;

    // Train Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(firstTrainTime);
    console.log(trainFrequency);


    // calculate when the next train will arrive using the difference between current time and scheduled train arrival time

    var firstTrainTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");
    var currentTime = moment();
    var diffTime = moment().diff(moment(firstTrainTimeConverted), "minutes");
    var tRemainder = diffTime % trainFrequency;
    var tMinutesTillTrain = trainFrequency - tRemainder;
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    var nextTrainFormat = moment(nextTrain).format("hh:mm");


    // display schedule in html

    $(".table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
      trainFrequency + "</td><td>" + nextTrainFormat + "</td><td>" + tMinutesTillTrain + "</td></tr>");




  })







});