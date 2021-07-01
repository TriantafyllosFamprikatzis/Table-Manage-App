$(document).ready(function(){

  //Init tables functionality
  function tablesInit(event) {
    function drag_start(event) {
      const style = window.getComputedStyle(event.target, null);
      event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + ',' + event.target.getAttribute('data-item'));
    }
    
    function drag_over(event) {
      event.preventDefault();
      return false;
    }
    
    function drop(event) {
      const offset = event.dataTransfer.getData("text/plain").split(',');
      const table = document.getElementsByClassName('table-div');
      table[parseInt(offset[2])].style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
      table[parseInt(offset[2])].style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
      
      event.preventDefault();
      return false;
    }

    const table = document.getElementsByClassName('table-div');
    for (let i = 0; i < table.length; i++) {
      table[i].addEventListener('dragstart', drag_start);
      document.body.addEventListener('dragover', drag_over);
      document.body.addEventListener('drop', drop);
    }
  }

  //Button to create a two person table
  $("#btn1").click(function(){
    const tablesVal = document.getElementsByClassName('table-div').length;

    function twoSeatInit() {
      let tableSeat = " ";

      for (let i = 0; i < 2; i++) {
        tableSeat += "<div class='table-seat'></div>";
      } return tableSeat;
    }

    $(".tables-container").append("<div draggable='true' class='table-div table-div-two-person' data-item='"+tablesVal+"'><span class='remove-btn remove'>X</span> "+twoSeatInit()+"</div>");

    tablesInit();
  });

  //Button to create a four person table
  $("#btn2").click(function(){
    const tablesVal = document.getElementsByClassName('table-div').length;

    function fourSeatInit() {
      let tableSeat = " ";

      for (let i = 0; i < 4; i++) {
        tableSeat += "<div class='table-seat'></div>";
      } return tableSeat;
    }

    $(".tables-container").append("<div draggable='true' class='table-div table-div-four-person' data-item='"+tablesVal+"'><span class='remove-btn remove'>X</span> "+fourSeatInit()+"</div>");

    tablesInit();
  });

  //Event to delete a table
  $("body").on("click", ".remove", function () {
    $(this).closest(".table-div").remove();
    tablesInit();
  });
});