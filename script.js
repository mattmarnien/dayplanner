
var timeNow =  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm"));

var saveButtons = $(".save");
var hoursArr = ["8 am","9 am","10 am","11 am", "12 pm","1 pm","2 pm", " 3pm", "4 pm", "5 pm", "6 pm"];

    for (let i =0; i < hoursArr.length; i++){
      var  newRowDiv = $("<div>");
        newRowDiv.attr("class", "row");
        $("#body").append(newRowDiv);
        // console.log("In the for loop");

           var  newTimeDiv = $("<div>");
           var  newEventDiv = $("<div>");
            var newSaveDiv = $("<div>");
                newTimeDiv.attr("class", "col-1 time justify-center rounded-left");
                newEventDiv.attr("class", "col-10 event justify-center border-left border-right border-dark")
                newSaveDiv.attr("class", "col-1 save align-middle pt-4 pl-4 rounded-right")
            var    newIcon = $("<i>");
                newIcon.attr("class", "far fa-save fa-2x m-auto d-block")
                
                newTimeDiv.text(hoursArr[i]);
                newEventDiv.text("Placeholder");
            
              
                newRowDiv.append(newTimeDiv, newEventDiv, newSaveDiv);
                newSaveDiv.append(newIcon);

    }

    function saveEvent() {

    }
    
 


    