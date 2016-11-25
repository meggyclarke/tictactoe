$(function(){
   var turn = 0;
  $('td').on('click', function(){

      if( turn % 2 === 0) {
        $(this).html('X');
      } else {
        $ (this).html('O');
      }
    turn++;
  });
});














// $(document).on('ready', function () {
//     var apple = "apple"
//     $("appleimg").attr("src", apple+".png")
//     var orange = "orange"
//     $("orangeimg").attr("src", orange+".png")
//     var count = 0;
//     var o_win = 0;
//     var x_win = 0;
//
//     $(table tr).click(function(){
//     if ($("#TL").hasClass('orange') && $("#TM").hasClass('orange') && $("#TR").hasClass('orange') ||
//         $("#ML").hasClass('orange') && $("#MM").hasClass('orange') && $("#MR").hasClass('orange') ||
//         $("#BL").hasClass('orange') && $("#BM").hasClass('orange') && $("#BR").hasClass('orange') ||
//         $("#TL").hasClass('orange') && $("#MR").hasClass('orange') && $("#BR").hasClass('orange') ||
//         $("#TM").hasClass('orange') && $("#MM").hasClass('orange') && $("#BM").hasClass('orange') ||
//         $("#TR").hasClass('orange') && $("#ML").hasClass('orange') && $("#BL").hasClass('orange') ||
//         $("#TL").hasClass('orange') && $("#MM").hasClass('orange') && $("#BR").hasClass('orange') ||
//         $("#TR").hasClass('orange') && $("#MM").hasClass('orange') && $("#BL").hasClass('orange'))
//       {
//         alert('Orange has won the game. Start a new game');
//         $("#table tr").text("+");
//         $("#table tr").removeClass('disable')
//         $("#table tr").removeClass('orange')
//         $("#table tr").removeClass('apple')
//         $("#table tr").removeClass('btn-primary')
//         $("#table tr").removeClass('btn-info')
//        }
//      else if ($("#TL").hasClass('apple') &&
//          $("#TM").hasClass('apple') &&
//          $("#TR").hasClass('apple') ||
//          $("#ML").hasClass('apple') &&
//          $("#MM").hasClass('apple') &&
//          $("#MR").hasClass('apple') ||
//          $("#BL").hasClass('apple') &&
//          $("#BM").hasClass('apple') &&
//          $("#BR").hasClass('apple') ||
//          $("#TL").hasClass('apple') &&
//          $("#MR").hasClass('apple') &&
//          $("#BR").hasClass('apple') ||
//          $("#TM").hasClass('apple') &&
//          $("#MM").hasClass('apple') &&
//          $("#BM").hasClass('apple') ||
//          $("#TR").hasClass('apple') &&
//          $("#ML").hasClass('apple') &&
//          $("#BL").hasClass('apple') ||
//          $("#TL").hasClass('apple') &&
//          $("#MM").hasClass('apple') &&
//          $("#BR").hasClass('apple') ||
//          $("#TR").hasClass('apple') &&
//          $("#MM").hasClass('apple') &&
//          $("#BL").hasClass('apple'))
//        {
//       alert('Apple wins has won the game. Start a new game')
//
//        $("#table tr").text("+");
//        $("#table tr").removeClass('disable')
//        $("#table tr").removeClass('orange')
//        $("#table tr").removeClass('apple')
//        $("#table tr").removeClass('btn-primary')
//        $("#table tr").removeClass('btn-info')
//      }
//      else if (count == 9)
//      {
//        alert(src = "banana")
//        alert('Its a tie. It will restart.')
//        $("#table tr").text("+");
//        $("#table tr").removeClass('disable')
//        $("#table tr").removeClass('orange')
//        $("#table tr").removeClass('apple')
//        $("#table tr").removeClass('btn-primary')
//        $("#table tr").removeClass('btn-info')
//        count = 0
//      }
//      else if ($(this).hasClass('disable'))
//      {
//        alert($(src = "banana"))
//        alert('Already selected')
//      }
//      else if (count%2 == 0)
//      {
//          count++
//          $(this).text(o)
//          $(this).addClass('disable o btn-primary')
//            if ($("#TL").hasClass('orange') &&
//                $("#TM").hasClass('orange') &&
//                $("#TR").hasClass('orange') ||
//                $("#ML").hasClass('orange') &&
//                $("#MM").hasClass('orange') &&
//                $("#MR").hasClass('orange') ||
//                $("#BL").hasClass('orange') &&
//                $("#BM").hasClass('orange') &&
//                $("#BR").hasClass('orange') ||
//                $("#TL").hasClass('orange') &&
//                $("#MR").hasClass('orange') &&
//                $("#BR").hasClass('orange') ||
//                $("#TM").hasClass('orange') &&
//                $("#MM").hasClass('orange') &&
//                $("#BM").hasClass('orange') ||
//                $("#TR").hasClass('orange') &&
//                $("#ML").hasClass('orange') &&
//                $("#BL").hasClass('orange') ||
//                $("#TL").hasClass('orange') &&
//                $("#MM").hasClass('orange') &&
//                $("#BR").hasClass('orange') ||
//                $("#TR").hasClass('orange') &&
//                $("#MM").hasClass('orange') &&
//                $("#BL").hasClass('orange'))
//            {
//           alert('Orange wins')
//           count = 0
//           orange_win++
//           $('#orange_win').text(orange_win)
//            }
//      }
//       else
//      {
//          count++
//        $(this).text(x)
//        $(this).addClass('disable x btn-info')
//         if ($("#TL").hasClass('apple') &&
//               $("#TM").hasClass('apple') &&
//               $("#TR").hasClass('apple') ||
//               $("#ML").hasClass('apple') &&
//               $("#MM").hasClass('apple') &&
//               $("#MR").hasClass('apple') ||
//               $("#BL").hasClass('apple') &&
//               $("#BM").hasClass('apple') &&
//               $("#BR").hasClass('apple') ||
//               $("#TL").hasClass('apple') &&
//               $("#MR").hasClass('apple') &&
//               $("#BR").hasClass('apple') ||
//               $("#TM").hasClass('apple') &&
//               $("#MM").hasClass('apple') &&
//               $("#BM").hasClass('apple') ||
//               $("#TR").hasClass('apple') &&
//               $("#ML").hasClass('apple') &&
//               $("#BL").hasClass('apple') ||
//               $("#TL").hasClass('apple') &&
//               $("#MM").hasClass('apple') &&
//               $("#BR").hasClass('apple') ||
//               $("#TR").hasClass('apple') &&
//               $("#MM").hasClass('apple') &&
//               $("#BL").hasClass('apple'))
//         {
//         alert('Apple wins')
//         count = 0
//         apple_win++
//         $('#apple_win').text(apple_win)
//         }
//      }
//
//       });
//
//        $("#reset").click(function () {
//        $("#table tr").text("+");
//        $("#table tr").removeClass('disable')
//        $("#table tr").removeClass('orange')
//        $("#table tr").removeClass('apple')
//        $("#table tr").removeClass('btn-primary')
//        $("#table tr").removeClass('btn-info')
//        count = 0
//        }
//     });
// });
