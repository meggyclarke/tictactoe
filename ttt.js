$(function(){
   var turn = 0;
  $('td').on('click', function(){

      if( turn % 2 === 0) {
            if (!$(this).hasClass("apple" || "orange")){
            $(this).addClass("apple");
            turn++;
            }
      } else {
            if (!$(this).hasClass("apple" || "orange")){
                $ (this).addClass("orange");
                turn++;
            }
      }
  });
});














$(document).on('ready', function () {
    var apple = "apple"
    $("appleimg").attr("src", apple+".png")
    var orange = "orange"
    $("orangeimg").attr("src", orange+".png")
    var count = 0;
    var o_win = 0;
    var x_win = 0;

    $("table tr").click(function(){
        if ($("#TL").hasClass('orange') && $("#TM").hasClass('orange') && $("#TR").hasClass('orange') ||
            $("#ML").hasClass('orange') && $("#MM").hasClass('orange') && $("#MR").hasClass('orange') ||
            $("#BL").hasClass('orange') && $("#BM").hasClass('orange') && $("#BR").hasClass('orange') ||
            $("#TL").hasClass('orange') && $("#MR").hasClass('orange') && $("#BR").hasClass('orange') ||
            $("#TM").hasClass('orange') && $("#MM").hasClass('orange') && $("#BM").hasClass('orange') ||
            $("#TR").hasClass('orange') && $("#ML").hasClass('orange') && $("#BL").hasClass('orange') ||
            $("#TL").hasClass('orange') && $("#MM").hasClass('orange') && $("#BR").hasClass('orange') ||
            $("#TR").hasClass('orange') && $("#MM").hasClass('orange') && $("#BL").hasClass('orange'))
          {
            alert('Orange has won the game. Start a new game');
            window.location.reload();
            $("#table tr").removeClass('orange')
            $("#table tr").removeClass('apple')

           }
         else if ($("#TL").hasClass('apple') &&
             $("#TM").hasClass('apple') &&
             $("#TR").hasClass('apple') ||
             $("#ML").hasClass('apple') &&
             $("#MM").hasClass('apple') &&
             $("#MR").hasClass('apple') ||
             $("#BL").hasClass('apple') &&
             $("#BM").hasClass('apple') &&
             $("#BR").hasClass('apple') ||
             $("#TR").hasClass('apple') &&
             $("#MR").hasClass('apple') &&
             $("#BR").hasClass('apple') ||
             $("#TM").hasClass('apple') &&
             $("#MM").hasClass('apple') &&
             $("#BM").hasClass('apple') ||
             $("#TL").hasClass('apple') &&
             $("#ML").hasClass('apple') &&
             $("#BL").hasClass('apple') ||
             $("#TL").hasClass('apple') &&
             $("#MM").hasClass('apple') &&
             $("#BR").hasClass('apple') ||
             $("#TR").hasClass('apple') &&
             $("#MM").hasClass('apple') &&
             $("#BL").hasClass('apple'))
           {
          alert('Apple wins has won the game. Start a new game')
          window.location.reload();


           $("#table tr").removeClass('orange')
           $("#table tr").removeClass('apple')

         }
         else if (count == 9)
         {
        //    alert(src = "banana")
           alert('Its a tie. It will restart.')

           $("#table tr").removeClass('orange')
           $("#table tr").removeClass('apple')

           count = 0
         }

    });
       //
       $("#reset").click(function () {

           $("#table tr").removeClass('orange')
           $("#table tr").removeClass('apple')
           window.location.reload();

           count = 0
        })

});
