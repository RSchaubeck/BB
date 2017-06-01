$(document).ready(function(){
  $("table").hide();
  $("p").hide();
  var node = $("input[type=image]");
    node.on('mouseover', function(){
     $("p").show().addClass('highlight');
  });
    node.on('mouseleave', function() {
      $("p").hide().removeClass('highlight');
    })
    node.on('click',function(){
        $("table").slideToggle(250);
    });
    $(".bombers").hide();
    
average();
slugging();
});

var hits = document.getElementById('h').innerHTML;
var bats = document.getElementById('ab').innerHTML;
var double = document.getElementById('2b').innerHTML;
var triple = document.getElementById('3b').innerHTML;
var homer = document.getElementById('hr').innerHTML;

function average() {
  var avg = (hits/bats).toFixed(3);
  document.getElementById('ba').innerHTML = avg;
}

function slugging() {
  var slug = (((hits-double-triple-homer) + (2*double) + (3*triple) + (4*homer))/bats).toFixed(3);
  document.getElementById('slg').innerHTML = slug;
}
