// on doc load
$(document).ready(function() {
  //firbase initialize
  var config = {
    apiKey: "AIzaSyCzV3uup5hMyfXqML9oOb81r_dLQcUHlNk",
    authDomain: "feed-dcfe4.firebaseapp.com",
    databaseURL: "https://feed-dcfe4.firebaseio.com",
    projectId: "feed-dcfe4",
    storageBucket: "",
    messagingSenderId: "284436246284"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //   global variables

  //===============================================================================================
  // firebase login stuff

  var signUp = $("#sign-up");
  var signIn = $("#sign-in");

  $("#sign-up").on("click", function(event) {
    event.preventDefault();
    // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    var email = $("#exampleInputEmail1")
      .val()
      .trim();
    var password = $("#exampleInputPassword1")
      .val()
      .trim();

    console.log(email);
    console.log(password);
    // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;

    $(".form-control").val("");

    database.ref().push({
      email: email,
      password: password
    });
  });
  // });

  // sign in existing users
  // firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
  //   $("#sign-in").on("click");
  // console.log($(this).text());

  // Handle Errors here.
  // var errorCode = error.code;
  // var errorMessage = error.message;

  // });

  // sidebar button clicks w/api calls
  $("#reddit").on("click", function() {
    console.log(this.id);
    var div1 = $("<div>");
        $(div1).addClass("carousel-item active");
        var div2 = $("<div>");
        $(div2).addClass("mb-4 card-div");
        var div3 = $("<div>");
        $(div3).addClass("card rounded shadow-lg");
        var div4 = $("<div>");
        $(div4).addClass("card-body disp-1");
        var title = $("<h5>");
        $(title).addClass("card-title text-center")
        $(title).text(this.id);
        
        $(div3).append(div4);
        $(div2).append(div3);
        $(div1).append(div2);
        $(".div0").append(div1);
    // Constructing a URL to search Giphy for the name of the person who said the quote
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=monkey&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing our AJAX GET request
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After the data comes back from the API
      .then(function(response) {
        // Storing an array of results in the results variable
        var results = response.data;
        console.log(results);
        // Looping over every result item
        for (var i = 0; i < results.length; i++) {
          // Creating a div for the gif
          var gifDiv = $("<div>");

          // Storing the result item's rating
          var rating = results[i].rating;

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + rating);

          // Creating an image tag
          var personImage = $("<img>");

          // Giving the image tag an src attribute of a proprty pulled off the
          // result item
          personImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and personImage we created to the "gifDiv" div we created
          gifDiv.append(p);
          gifDiv.append(personImage);

          // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
          $(".disp-1").prepend(gifDiv);
        }
        $(div4).prepend(title);
      });
      
  });
  // card creation

  // search functionality

  // sign up new users
});
