//Assigns colors to boxes

$(document).ready(() => {

	var box =$('.box')

	$('.box').on('click', () => {
    $(this).addClass('white')
  })

  	$('.box').on('dblclick', () => {
    $(this).removeClass('white')

$(document).ready(() => {

	let box =$('.box')

	$('.box').on('click', () => {
    $(this).addClass('white')
  })

  	$('.box').on('dblclick', () => {
    $(this).removeClass('white')
  })

    $('#reset').on('click', () => {
    $('.box').removeClass('white green')
  })
//Assigns actions to buttons

let color = 'white'

$('#red').on('click', () => {
    color = 'red'
  })

  $('#blue').on('click', () => {
    color = 'blue'
  })

  $('#green').on('click', () => {
    color = 'green'
  })

  $('#yellow').on('click', () => {
    color = 'yellow'
  })

  $('#white').on('click', () => {
    color = 'white'
  })

   $('.box').on('click', () => {
    $(this).addClass(color)
  })

  $('.box').on('dblclick', () => {
    $(this).removeClass(color)
  })

  $('#reset').on('click', () => {
    $('.box').removeClass(color)
  })
})

//Changes color back to black on double click
 $('.box').removeClass('red blue green yellow white')

 let colors = 'white green red blue yellow'

  $('.box').on('dblclick', () => {
    $(this).removeClass(colors);
  })

  $('#reset').on('click', () => {
    $('.box').removeClass(colors)
  })
