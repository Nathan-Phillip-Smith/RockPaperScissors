


let hand = ''
let ps = 0;
let cs = 0;

// Rock

$("#player-rock").on('click', function() {
  let hand = 'rock';

    let number = Math.floor(Math.random() * 3);
    let computer = number
    
    if (computer === 2 && hand === 'rock') {

      ps++
      $("#player-score").text(ps);
    
      $('.rock1').addClass("no-click")
      $('.paper1').addClass("gone");
      $('.scissors1').addClass("gone");
      $('.paper2').addClass("gone");
      $('.rock2').addClass("gone");
      $('#outcome').remove();
      $('#footer').append('<h2 class=test id=outcome>-YOU WIN-</h2>');
      $('#footer').append('<h2 id=outcome>Rock Beats Scissors</h2>');
      $('.reset').removeClass("gone");


      $('.reset').on('click', function() {
        $('.rock1').removeClass("no-click")
        $('.paper1').removeClass("gone");
        $('.scissors1').removeClass("gone");
        $('.rock2').removeClass("gone");
        $('.paper2').removeClass("gone");
        $('.reset').addClass("gone");
        $('#outcome').remove();
        $('#outcome').remove();
        $('#footer').prepend('<h2 id="outcome">Make Your Choice</h2>')
  })


  
  
    }
    else if (computer === 1 && hand === 'rock') {

      cs++
      $("#computer-score").text(cs);
     
      $('.rock1').addClass("no-click")
      $('.paper1').addClass("gone");
      $('.scissors1').addClass("gone");
      $('.scissors2').addClass("gone");
      $('.rock2').addClass("gone");
      $('#outcome').remove();
      $('#footer').append('<h2 id=outcome>-YOU LOSE-</h2>');
      $('#footer').append('<h2 id=outcome>Paper Beats Rock</h2>');
      $('.reset').removeClass("gone");


      $('.reset').on('click', function() {
        $('.rock1').removeClass("no-click")
        $('.paper1').removeClass("gone");
        $('.scissors1').removeClass("gone");
        $('.rock2').removeClass("gone");
        $('.scissors2').removeClass("gone");
        $('.reset').addClass("gone");
        $('#outcome').remove();
        $('#outcome').remove();
        $('#footer').prepend('<h2 id="outcome">Make Your Choice</h2>')
  })
  
    }
    else if (computer === 0 && hand === 'rock') {
   
      $('.rock1').addClass("no-click")
      $('.paper1').addClass("gone");
      $('.scissors1').addClass("gone");
      $('.paper2').addClass("gone");
      $('.scissors2').addClass("gone");
      $('#outcome').remove();
      $('#footer').append('<h2 id=outcome>-WE TIED-</h2>');
      $('#footer').append('<h2 id=outcome>We Both Chose Rock</h2>');
      $('.reset').removeClass("gone");


      $('.reset').on('click', function() {
        $('.rock1').removeClass("no-click")
        $('.paper1').removeClass("gone");
        $('.scissors1').removeClass("gone");
        $('.paper2').removeClass("gone");
        $('.scissors2').removeClass("gone");
        $('.reset').addClass("gone");
        $('#outcome').remove();
        $('#outcome').remove();
        $('#footer').prepend('<h2 id="outcome">Make Your Choice</h2>')
  })
  
    }
    else {
      return 'I do not understand. Try entering rock, paper, or scissors.'
    }

   
  
})
  

// Paper

$("#player-paper").on('click', function() {
  let hand = 'paper';

    let number = Math.floor(Math.random() * 3);
    let computer = number
    
    if (computer === 2 && hand === 'paper') {

      cs++
      $("#computer-score").text(cs);


      $('.paper1').addClass("no-click")
      $('.rock1').addClass("gone");
      $('.scissors1').addClass("gone");
      $('.paper2').addClass("gone");
      $('.rock2').addClass("gone");
      $('#outcome').remove();
      $('#footer').append('<h2 id=outcome>-YOU LOSE-</h2>');
      $('#footer').append('<h2 id=outcome>Scissors Beats Paper</h2>');
      $('.reset').removeClass("gone");


      $('.reset').on('click', function() {
        $('.paper1').removeClass("no-click")
        $('.rock1').removeClass("gone");
        $('.scissors1').removeClass("gone");
        $('.rock2').removeClass("gone");
        $('.paper2').removeClass("gone");
        $('.reset').addClass("gone");
        $('#outcome').remove();
        $('#outcome').remove();
        $('#footer').prepend('<h2 id="outcome">Make Your Choice</h2>')
  })
  
    }
    else if (computer === 1 && hand === 'paper') {

      $('.paper1').addClass("no-click")
      $('.rock1').addClass("gone");
      $('.scissors1').addClass("gone");
      $('.scissors2').addClass("gone");
      $('.rock2').addClass("gone");
      $('#outcome').remove();
      $('#footer').append('<h2 id=outcome>-WE TIED-</h2>');
      $('#footer').append('<h2 id=outcome>We Both Chose Paper</h2>');
      $('.reset').removeClass("gone");


      $('.reset').on('click', function() {
        $('.paper1').removeClass("no-click")
        $('.rock1').removeClass("gone");
        $('.scissors1').removeClass("gone");
        $('.rock2').removeClass("gone");
        $('.scissors2').removeClass("gone");
        $('.reset').addClass("gone");
        $('#outcome').remove();
        $('#outcome').remove();
        $('#footer').prepend('<h2 id="outcome">Make Your Choice</h2>')
  })

    }
    else if (computer === 0 && hand === 'paper') {

      ps++
      $("#player-score").text(ps);

      $('.paper1').addClass("no-click")
      $('.rock1').addClass("gone");
      $('.scissors1').addClass("gone");
      $('.paper2').addClass("gone");
      $('.scissors2').addClass("gone");
      $('#outcome').remove();
      $('#footer').append('<h2 id=outcome>-YOU WIN-</h2>');
      $('#footer').append('<h2 id=outcome>Paper Beats Rock</h2>');
      $('.reset').removeClass("gone");


      $('.reset').on('click', function() {
        $('.paper1').removeClass("no-click")
        $('.rock1').removeClass("gone");
        $('.scissors1').removeClass("gone");
        $('.scissors2').removeClass("gone");
        $('.paper2').removeClass("gone");
        $('.reset').addClass("gone");
        $('#outcome').remove();
        $('#outcome').remove();
        $('#footer').prepend('<h2 id="outcome">Make Your Choice</h2>')
  })

    }
    else {
      return 'I do not understand. Try entering rock, paper, or scissors.'
    }
  
})

// scissors

$("#player-scissors").on('click', function() {
  let hand = 'scissors';

    let number = Math.floor(Math.random() * 3);
    let computer = number
    
    if (computer === 2 && hand === 'scissors') {
      $('.scissors1').addClass("no-click")
      $('.rock1').addClass("gone");
      $('.paper1').addClass("gone");
      $('.paper2').addClass("gone");
      $('.rock2').addClass("gone");
      $('#outcome').remove();
      $('#footer').append('<h2 id=outcome>-WE TIED-</h2>');
      $('#footer').append('<h2 id=outcome>We Both Chose Scissors</h2>');
      $('.reset').removeClass("gone");


      $('.reset').on('click', function() {
        $('.scissors1').removeClass("no-click")
        $('.paper1').removeClass("gone");
        $('.rock1').removeClass("gone");
        $('.rock2').removeClass("gone");
        $('.paper2').removeClass("gone");
        $('.reset').addClass("gone");
        $('#outcome').remove();
        $('#outcome').remove();
        $('#footer').prepend('<h2 id="outcome">Make Your Choice</h2>')
  })

    }
    else if (computer === 1 && hand === 'scissors') {

      ps++
      $("#player-score").text(ps);


      $('.scissors1').addClass("no-click")
      $('.rock1').addClass("gone");
      $('.paper1').addClass("gone");
      $('.scissors2').addClass("gone");
      $('.rock2').addClass("gone");
      $('#outcome').remove();
      $('#footer').append('<h2 id=outcome>-YOU WIN-</h2>');
      $('#footer').append('<h2 id=outcome>Scissors Beats Paper</h2>');
      $('.reset').removeClass("gone");


      $('.reset').on('click', function() {
        $('.scissors1').removeClass("no-click")
        $('.paper1').removeClass("gone");
        $('.rock1').removeClass("gone");
        $('.rock2').removeClass("gone");
        $('.scissors2').removeClass("gone");
        $('.reset').addClass("gone");
        $('#outcome').remove();
        $('#outcome').remove();
        $('#footer').prepend('<h2 id="outcome">Make Your Choice</h2>')
  })

    }
    else if (computer === 0 && hand === 'scissors') {

      cs++
      $("#computer-score").text(cs);


      $('.scissors1').addClass("no-click")
      $('.rock1').addClass("gone");
      $('.paper1').addClass("gone");
      $('.paper2').addClass("gone");
      $('.scissors2').addClass("gone");
      $('#outcome').remove();
      $('#footer').append('<h2 id=outcome>-YOU LOSE-</h2>');
      $('#footer').append('<h2 id=outcome>Rock Beats Scissors</h2>');
      $('.reset').removeClass("gone");


      $('.reset').on('click', function() {
        $('.scissors1').removeClass("no-click")
        $('.paper1').removeClass("gone");
        $('.rock1').removeClass("gone");
        $('.scissors2').removeClass("gone");
        $('.paper2').removeClass("gone");
        $('.reset').addClass("gone");
        $('#outcome').remove();
        $('#outcome').remove();
        $('#footer').prepend('<h2 id="outcome">Make Your Choice</h2>')
  })

    }
    else {
      return 'I do not understand. Try entering rock, paper, or scissors.'
    }
  
})


