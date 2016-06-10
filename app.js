//Assigns colors to boxes

$(document).ready(() => {

	var box =$('.box')

	$('.box').on('click', () => {
    $(this).addClass('white')
  })

  	$('.box').on('dblclick', () => {
    $(this).removeClass('white')

$(document).ready(function() {

	var box =$('.box');

	$('.box').on('click', function() {
    $(this).addClass('white');
  })

  	$('.box').on('dblclick', function() {
    $(this).removeClass('white');

  })

    $('#reset').on('click', function() {
    $('.box').removeClass('white green');
  })
//Assigns actions to buttons

let color = 'white';

$('#red').on('click', function() {
    color = 'red';
  })

  $('#blue').on('click', function() {
    color = 'blue';
  })

  $('#green').on('click', function() {
    color = 'green';
  })

  $('#yellow').on('click', function() {
    color = 'yellow';
  })

  $('#white').on('click', function() {
    color = 'white';
  })

   $('.box').on('click', function() {
    $(this).addClass(color);
  })

  $('.box').on('dblclick', function() {
    $(this).removeClass(color);
  })

  $('#reset').on('click', function() {
    $('.box').removeClass(color)
  })
})

//Changes color back to black on double click
 $('.box').removeClass('red blue green yellow white');

 var colors = 'white green red blue yellow';

  $('.box').on('dblclick', function() {
    $(this).removeClass(colors);
  })

  $('#reset').on('click', function() {
    $('.box').removeClass(colors)
  })
