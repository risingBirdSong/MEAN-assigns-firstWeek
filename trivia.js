<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>

  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

</head>

<body>

  <h1 class="text-center"> trivia night</h1>

  <div class="scorebox text-center">
      <label for="scorebox" class="text-center">your score</label>
      <h3 class="numberscore">0</h3>
  </div>

  <h3 class="scorebox text-center"></h3>
  <div class="container align-content-center">
    <div class="row">
      <div class="col-sm-3">
        <h2>geography</h2>
        <button id="geography">click for geography</button>
        <h3 id="geoquestion" style="display:none;">question</h3>
        <p id="questioncontent"></p>
        <p id="correct_answer" class=" dont_look_at_me_its_cheating" style="display: none;"></p>
        <ul id="list_options"></ul>

        <form id="list_options">
          <fieldset>
            <label></label>
            <!-- <input type = "radio"
                       name = "radSize"
                       id = "sizeSmall"
                       value = "small"
                       checked = "checked" /> -->
                       <button id="answerclick" style="display: none;"> click me</button>
          </fieldset>
        </form>
      </div>
      <div class="col-sm-3">
        <h2>entertainment</h2>
      </div>
      <div class="col-sm-3">
        <h2>science</h2>
      </div>
    </div>
  </div>



  <script>



    // $("#geoquestion").css("display", "block");
    // $("#questioncontent").html(data.results[0].question);

    $("#geography").click(function () {
      let geoUrl = `https://opentdb.com/api.php?amount=1&category=22&difficulty=easy&type=multiple`;
      $.get(geoUrl, function (data) {
        $("#geoquestion").css("display", "block");
        $("#questioncontent").html(data.results[0].question);

        let correct = data.results[0].correct_answer.split(" ")[0];

        $("#correct_answer").html(correct);
        for (let opt of data.results[0].incorrect_answers) {
          $("#list_options").append(`
            <input type="radio" name="list" value=${opt} /> ${opt}<br>`)
        };
        $("#list_options").append(`
            <input type="radio" name="list" value=${data.results[0].correct_answer} /> ${data.results[0].correct_answer}<br>`);
        $("#answerclick").css("display", "block");
      })
    })

    $("#answerclick").click(function(e){
      let theirChoice = $('input[name=list]:checked', '#list_options').val();
      let correct = $("#correct_answer").html();

      if (theirChoice == correct) 
      {

        let thescoreasstring = $(".numberscore").html();
        let asNum = parseInt(thescoreasstring);
        asNum += 5;
        $(".numberscore").html(asNum);
        alert("you got it");
      }

      else {
        alert("no");
      }
      e.preventDefault();
      let stop = true;
    })

  </script>

</body>

</html>
