var del_id;
var reps = [];
var videos = [];
var final_videos = [];
var video_name=[];
var final_video_name=[];
var description = [];
var final_description = [];
var index = [];
var final_index = [];
var difficulty = [];
var final_difficulty = [];
var sorting;
var abc;
var dict = {};
var yourArray = [];
dict["exercise1.mp4"]=1;
dict["exercise2.mp4"]=2;
dict["exercise3.mp4"]=3;
dict["exercise4.mp4"]=4;
dict["exercise5.mp4"]=5;
dict["exercise6.mp4"]=6;
dict["exercise7.mp4"]=7;
dict["exercise8.mp4"]=8;
dict["exercise9.mp4"]=9;
$(document).ready(function() {

  var iterations = 1;
  var id=0;
  var myVideo = document.querySelector('#video');
  var play = document.querySelector('#play');
  var pause = document.querySelector('#pause');
  var next = document.querySelector('#next');
  var plan = document.querySelector('#plan');
  var submit = document.querySelector('#submit');
  var submit1 = document.querySelector('#submit1');
  var restart = document.querySelector('#restart');
  var order = document.querySelector('#order');
  var add1 = document.querySelector('#add1');
  var add2 = document.querySelector('#add2');
  var planner = document.querySelector('#planner');
  var back1 = document.querySelector('#back1');
  var back2 = document.querySelector('#back2');
  document.getElementById('exercise').innerText = id+1;

  $(".start").show();
  $(".header").hide();
  $(".choose_video").hide();
  $(".video_order").hide();
  $(".video_player").hide();
  $(".video_editor").hide();
  $(".workout_list").hide();
  $(".summary").hide();
  $(".end").hide();

  plan.addEventListener('click', function(){
    $("body").removeClass("bg")
    $(".start").hide();
    $(".header").show();
    $(".choose_video").show();
    $(".video_order").hide();
    $(".video_player").hide();
    $(".video_editor").hide();
    $(".workout_list").hide();
    $(".summary").hide();
    $(".end").hide();
  },false); 

  planner.addEventListener('click', function(){
    abc="";
    $("#sortable").remove();
    videos = [];
    final_videos = [];
    video_name=[];
    final_video_name=[];
    description = [];
    final_description = [];
    index = [];
    final_index = [];
    yourArray = [];

    $("input:checkbox[name=add]:checked").each(function(){
    yourArray.push($(this).val());
    });

    for (var k = 0; k < yourArray.length; k++) {
      if(yourArray[k]=='add1')
      {
        index.push(1);
        final_index.push(1);
        videos.push("exercise1.mp4");
        final_videos.push("exercise1.mp4");
        video_name.push("Flutter-Kicks");
        final_video_name.push("Flutter-Kicks");
        description.push("Flutter Kicks are the perfect leg/abs exercise. Performed slowly it is great as a warm-up exercise and performed flat-out it can push your legs and abs to a pretty critical fatigue state.");
        final_description.push("Flutter Kicks are the perfect leg/abs exercise. Performed slowly it is great as a warm-up exercise and performed flat-out it can push your legs and abs to a pretty critical fatigue state.");
        difficulty.push("Easy");
        final_difficulty.push("Easy");
      }
      else if(yourArray[k]=='add2')
      {
        index.push(2);
        final_index.push(2);
        videos.push("exercise2.mp4");
        final_videos.push("exercise2.mp4");
        video_name.push("Reaching Oblique Crunch");
        final_video_name.push("Reaching Oblique Crunch");
        description.push("Oblique crunches, also known as twisting crunches, are a commonly used abdominal exercise in which you do a basic crunch while twisting the upper portion of your body and bringing each elbow to meet an opposite knee, each time changing the direction in which you twist your body.");
        final_description.push("Oblique crunches, also known as twisting crunches, are a commonly used abdominal exercise in which you do a basic crunch while twisting the upper portion of your body and bringing each elbow to meet an opposite knee, each time changing the direction in which you twist your body.");
        difficulty.push("Medium");
        final_difficulty.push("Medium");
      }
      else if(yourArray[k]=='add3')
      {
        index.push(3);
        final_index.push(3);
        videos.push("exercise3.mp4");
        final_videos.push("exercise3.mp4");
        video_name.push("Pilates Side Hip Raises");
        final_video_name.push("Pilates Side Hip Raises");
        description.push("Pilates Side Hip Raises done on the floor mainly aim to affect your side ab muscles. You have to put all yor body weight on one side and then raise your body. You should ideally do this for both sides.");
        final_description.push("Pilates Side Hip Raises done on the floor mainly aim to affect your side ab muscles. You have to put all yor body weight on one side and then raise your body. You should ideally do this for both sides.");
        difficulty.push("Hard");
        final_difficulty.push("Hard");
      }
      else if(yourArray[k]=='add4')
      {
        index.push(4);
        final_index.push(4);
        videos.push("exercise4.mp4");
        final_videos.push("exercise4.mp4");
        video_name.push("Russian Twists");
        final_video_name.push("Russian Twists");
        description.push("Lie down on the floor placing your feet either under something that will not move or by having a partner hold them. Your legs should be bent at the knees. Elevate your upper body so that it creates an imaginary V-shape with your thighs.");
        final_description.push("Lie down on the floor placing your feet either under something that will not move or by having a partner hold them. Your legs should be bent at the knees. Elevate your upper body so that it creates an imaginary V-shape with your thighs.");
        difficulty.push("Easy");
        final_difficulty.push("Easy");
      }
      else if(yourArray[k]=='add5')
      {
        index.push(5);
        final_index.push(5);
        videos.push("exercise5.mp4");
        final_videos.push("exercise5.mp4");
        video_name.push("Toe Touch Crunches");
        final_video_name.push("Toe Touch Crunches");
        description.push("Toe-touch crunches are a core exercise that targets the rectus abdominis and obliques. The toe touch works your abdominal muscles through spinal flexion, which is bending your spine forward as you reach to touch your toes.");
        final_description.push("Toe-touch crunches are a core exercise that targets the rectus abdominis and obliques. The toe touch works your abdominal muscles through spinal flexion, which is bending your spine forward as you reach to touch your toes.");
        difficulty.push("Medium");
        final_difficulty.push("Medium");
      }
      else if(yourArray[k]=='add6')
      {
        index.push(6);
        final_index.push(6);
        videos.push("exercise6.mp4");
        final_videos.push("exercise6.mp4");
        video_name.push("Pilates Leg Pulls (Down)");
        final_video_name.push("Pilates Leg Pulls (Down)");
        description.push("Stretch out into a plank position with your navel buttoned to your spine and a tight seat.Without allowing your hips to move, kick one leg up off the mat with a pulse at the top (like a double beat).");
        final_description.push("Stretch out into a plank position with your navel buttoned to your spine and a tight seat.Without allowing your hips to move, kick one leg up off the mat with a pulse at the top (like a double beat).");
        difficulty.push("Hard");
        final_difficulty.push("Hard");
      }
      else if(yourArray[k]=='add7')
      {
        index.push(7);
        final_index.push(7);
        videos.push("exercise7.mp4");
        final_videos.push("exercise7.mp4");
        video_name.push("Pilates Leg Pulls (Up)");
        final_video_name.push("Pilates Leg Pulls (Up)");
        description.push("Relax your shoulders. Keep your chest open and your shoulders rotating back and down. Place your hands on the ground. Then slowly raise alternate legs.");
        final_description.push("Relax your shoulders. Keep your chest open and your shoulders rotating back and down. Place your hands on the ground. Then slowly raise alternate legs.");
        difficulty.push("Easy");
        final_difficulty.push("Easy");
      }
      else if(yourArray[k]=='add8')
      {
        index.push(8);
        final_index.push(8);
        videos.push("exercise8.mp4");
        final_videos.push("exercise8.mp4");
        video_name.push("Pilates Toe Taps");
        final_video_name.push("Pilates Toe Taps");
        description.push("Toe Taps are a great addition to original Pilates exercises because the exercise helps practitioners learn to keep their abs flat and stabilize their low backs against the weight of the legs.");
        final_description.push("Toe Taps are a great addition to original Pilates exercises because the exercise helps practitioners learn to keep their abs flat and stabilize their low backs against the weight of the legs.");
        difficulty.push("Medium");
        final_difficulty.push("Medium");
      }
      else if(yourArray[k]=='add9')
      {
        index.push(9);
        final_index.push(9);
        videos.push("exercise9.mp4");
        final_videos.push("exercise9.mp4");
        video_name.push("Knee Tuck Crunches");
        final_video_name.push("Knee Tuck Crunches");
        description.push("When doing seated knee tucks keep your back straight and your upper body stable. Breate out as you bring your knees towards your chest, squeeze your abs in and use your core strangth to stabilize your body.");
        final_description.push("When doing seated knee tucks keep your back straight and your upper body stable. Breate out as you bring your knees towards your chest, squeeze your abs in and use your core strangth to stabilize your body.");
        difficulty.push("Hard");
        final_difficulty.push("Hard");
      }
    }

    if(videos.length<1)
    {
      alert("Need to add videos in order to proceed to planner!");
      window.location('home.html');
    }
    $("#sortable").remove();
    $(".start").hide();
    $(".header").show();
    $('.video_order').animate({ top: 0 }, 400);
    $(".choose_video").hide();
    $(".video_order").show();
    $(".video_player").hide();
    $(".video_editor").hide();
    $(".workout_list").hide();
    $(".summary").hide();
    $(".end").hide();
    abc = "<ul id=sortable>";
    for (var i = 0; i < videos.length; i++) {
        abc+="<li id="+i+">";
        abc+="<video width=300 height=190>";
        abc+="<source src=test"+index[i]+".mp4 type=video/mp4>";
        abc+="</video>";
        abc+="<p>"+video_name[i]+"</p>";
        abc+="<p>"+difficulty[i]+"</p>";
        abc+="</li>";
    }
    abc+="</ul>";
    $("#video_list").append(abc);
    $("#sortable").sortable({
        stop : function(event, ui){
          sorting= $(this).sortable('toArray',{attribute: 'id'});
          final_videos = [];
          final_video_name=[];
          final_description = [];
          final_index = [];
          final_difficulty = [];
          for(var i=0;i<sorting.length;i++)
          {
            final_index.push(dict[videos[sorting[i]]])
            final_videos.push(videos[sorting[i]])
            final_video_name.push(video_name[sorting[i]])
            final_description.push(description[sorting[i]])
            final_difficulty.push(difficulty[sorting[i]])
          }
        }
    });
    $("#sortable").disableSelection();
    var el = document.getElementById('order_id');
    el.scrollIntoView(true);
  },false);

  $("#video_list").hover(function() {
    $(this).css('cursor','pointer');
    }, function() {
    $(this).css('cursor','auto');
  });

  back1.addEventListener('click', function(){
    abc="";
    $("#sortable").remove();
    videos = [];
    final_videos = [];
    video_name=[];
    final_video_name=[];
    description = [];
    final_description = [];
    index = [];
    final_index = [];
    difficulty = [];
    final_difficulty = [];
    $(".start").hide();
    $(".header").show();
    $(".choose_video").show();
    $(".video_order").hide();
    $(".video_player").hide();
    $(".video_editor").hide();
    $(".workout_list").hide();
    $(".summary").hide();
    $(".end").hide();
  },false);

  order.addEventListener('click', function(){
    $("#exercise_list").remove();
    $("body").scrollTop(0);
    $(".start").hide();
    $(".header").show();
    $(".choose_video").hide();
    $(".video_order").hide();
    $(".video_player").hide();
    $(".video_editor").show();
    $(".workout_list").hide();
    $(".summary").hide();
    $(".end").hide();
    var html = "<form align=center id=exercise_list>";
    for (var i = 0; i < final_videos.length; i++) {
        html+="<br>"
        html+="<video width=300 height=190 controls>";
        html+="<source src=test"+final_index[i]+".mp4 type=video/mp4>";
        html+="</video>";
        html+="<br>"
        html+="<p><b>Exercise Name:</b>"+final_video_name[i]+"</p>";
        html+="<p><b>Description:</b>"+final_description[i]+"</p>";
        html+="<p><b>Difficulty:</b>"+final_difficulty[i]+"</p>";
        html+="<p><b>Enter No. of times you want to do this exercise:</b> <input type=text id=rep"+(i+1)+" placeholder=#sets name=rep"+(i+1)+"></p>";
        html+="<br>"
    }
    $(".forms").append(html);
    document.getElementById('exercise_name').innerText = final_video_name[id];
    var el1 = document.getElementById('editor_id');
    el1.scrollIntoView(true);
  },false);

  back2.addEventListener('click', function(){
    $(".start").hide();
    $(".header").show();
    $(".choose_video").hide();
    $(".video_order").show();
    $(".video_player").hide();
    $(".video_editor").hide();
    $(".workout_list").hide();
    $(".summary").hide();
    $(".end").hide();
  },false);

  submit1.addEventListener('click',function(){
      $("#tester").remove();
      var queryString = $('#exercise_list').serializeArray();
      jQuery.each(queryString, function(i,field){
        reps.push(field.value);
      });
      for (var t = 0; t < reps.length; t++) {
        if(reps[t]=='')
          {
            reps[t]=1;
          }
      }
      test1 = "<table align=center id=tester>";
      test1+="<th><b>Video</b></th>";
      test1+="<th><b>Exercise Name</b></th>";
      test1+="<th><b>Difficulty</b></th>";
      test1+="<th><b>Sets Planned</b></th>";
      for (var i = 0; i < final_videos.length; i++) {
          test1+="<tr>";
          test1+="<td><video width=150 height=80 controls>";
          test1+="<source src=test"+final_index[i]+".mp4 type=video/mp4>";
          test1+="</video></td>";
          test1+="<td>"+final_video_name[i]+"</td>";
          test1+="<td>"+final_difficulty[i]+"</td>";
          test1+="<td>"+reps[i]+"</td>";
          test1+="</tr>";
      }
      test1+="</table>";
      $(".final_summary").append(test1);

      $(".start").hide();
      $(".header").show();
      $(".choose_video").hide();
      $(".video_order").hide();
      $(".video_player").hide();
      $(".video_editor").hide();
      $(".workout_list").hide();
      $(".summary").show();
      $(".end").hide();
  },false);

  back3.addEventListener('click', function(){
    $("#tester").remove();
    test1="";
    queryString = [];
    reps = [];
    $(".start").hide();
    $(".header").show();
    $(".choose_video").hide();
    $(".video_order").hide();
    $(".video_player").hide();
    $(".video_editor").show();
    $(".workout_list").hide();
    $(".summary").hide();
    $(".end").hide();
  },false);

  submit.addEventListener('click',function(){
      $("#workout1").remove();
      document.getElementById('iteration1').innerText = reps[id]-iterations;
      myVideo.src = final_videos[id];
      myVideo.load();
      $(".start").hide();
      $(".header").show();
      $(".choose_video").hide();
      $(".video_order").hide();
      $(".video_player").show();
      $(".video_editor").hide();
      $(".workout_list").show();
      $(".summary").hide();
      $(".end").hide();
      workout = "<ul id=workout1>";
      for (var i = 0; i < final_videos.length; i++) {
          workout+="<li>";
          workout+="<video width=150 height=80>";
          workout+="<source src=test"+final_index[i]+".mp4 type=video/mp4>";
          workout+="</video>";
          workout+="<p>"+final_video_name[i]+"</p>";
          workout+="</li>";
      }
      workout+="</ul>";
      $(".workout_list").append(workout);
      var el2 = document.getElementById('player_id');
      el2.scrollIntoView(true);
  },false);

  back4.addEventListener('click', function(){
    id=0;
    $(".start").hide();
    $(".header").show();
    $(".choose_video").hide();
    $(".video_order").hide();
    $(".video_player").hide();
    $(".video_editor").hide();
    $(".workout_list").hide();
    $(".summary").show();
    $(".end").hide();
  },false);

  play.addEventListener('click',function(){
      $(".start").hide();
      $(".header").show();
      $(".choose_video").hide();
      $(".video_order").hide();
      $(".video_player").show();
      $(".video_editor").hide();
      $(".workout_list").show();
      $(".summary").hide();
      $(".end").hide();
      if (myVideo.paused)
          myVideo.play();
  },false);  

  document.getElementById('iteration').innerText = iterations;

  myVideo.addEventListener('ended', function () {
    $(".start").hide();
    $(".header").show();
    $(".choose_video").hide();
    $(".video_order").hide();
    $(".video_player").show();
    $(".video_editor").hide();
    $(".workout_list").show();
    $(".summary").hide();
    $(".end").hide(); 

    if (iterations < reps[id]) {
        myVideo.currentTime = 0;
        myVideo.play();
        iterations ++; 
        document.getElementById('iteration').innerText = iterations;
        document.getElementById('iteration1').innerText = reps[id]-iterations;         
    }
    else
    {
      alert("Click on NEXT to move to next exercise in the workout!");
    }   

  }, false);

  pause.addEventListener('click',function(){
      $(".start").hide();
      $(".header").show();
      $(".choose_video").hide();
      $(".video_order").hide();
      $(".video_player").show();
      $(".video_editor").hide();
      $(".workout_list").show();
      $(".summary").hide();
      $(".end").hide();
      if (myVideo.play)
        myVideo.pause();
  },false);

  next.addEventListener('click',function(){
      $(".start").hide();
      $(".header").show();
      $(".choose_video").hide();
      $(".video_order").hide();
      $(".video_player").show();
      $(".video_editor").hide();
      $(".workout_list").show();
      $(".summary").hide();
      $(".end").hide();
      myVideo.pause();
      myVideo.currentTime=0;
      id = id+1;
      if(id==final_videos.length)
        ender();
      myVideo.src = final_videos[id];
      iterations = 1;
      myVideo.load();
      document.getElementById('iteration').innerText = iterations;
      document.getElementById('exercise').innerText = id+1;
      document.getElementById('exercise_name').innerText = final_video_name[id];
      document.getElementById('iteration1').innerText = reps[id]-iterations;
  },false);

  function ender(){
    $("body").addClass("bg1")
    $(".start").hide();
    $(".header").hide();
    $(".choose_video").hide();
    $(".video_order").hide();
    $(".video_player").hide();
    $(".video_editor").hide();
    $(".workout_list").hide();
    $(".summary").hide();
    $(".end").show();
  }

  restart.addEventListener('click', function(){
    location.reload();
  },false); 

});