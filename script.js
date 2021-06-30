$(document).ready(function(){
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

  $("#btn1").click(function(){
    const tablesVal = document.getElementsByClassName('table-div').length;
    $(".tables-container").append("<div draggable='true' class='table-div table-div-two-person' data-item='"+tablesVal+"'></div>");
    $(".table-div-two-person").append("<div id='item_0' class='table-seat table-seat-one'></div>"); 
    $(".table-div-two-person").append("<div id='item_0' class='table-seat table-seat-two'></div>");  
    tablesInit();
  });

  $("#btn2").click(function(){
    let tablesVal = document.getElementsByClassName('table-div').length;
    $(".tables-container").append("<div draggable='true' class='table-div table-div-four-person' data-item='"+tablesVal+"'></div>");
    $(".table-div-two-person").append("<div class='table-seat'></div>"); 
    tablesInit();
  });
});




