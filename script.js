
var timeNow =  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm"));

var saveButtons = $(".save");
var hoursArr = ["8 am","9 am","10 am","11 am", "12 pm","1 pm","2 pm", " 3 pm", "4 pm", "5 pm", "6 pm"];
var scheduleArr = [];

    for (let i =0; i < hoursArr.length; i++){
      var  newRowDiv = $("<div>");
        newRowDiv.attr("class", "row w-100");
        $("#body").append(newRowDiv);
        // console.log("In the for loop");



           var  newTimeDiv = $("<div>");
           var  newEventDiv = $("<div>");
            var newSaveDiv = $("<div>");
                newTimeDiv.attr("class", "col-1 time justify-center rounded-left pt-4");
                newTimeDiv.attr("data" , hoursArr[i])
                newEventDiv.attr("class", "col-10 event justify-center border-left border-right border-dark pt-4");
                newEventDiv.attr("data" , hoursArr[i])
                newEventDiv.attr("contenteditable", "true");
                newSaveDiv.attr("class", "col-1 save align-middle pt-4 pl-4 rounded-right")
                newSaveDiv.attr("data" , hoursArr[i])
            var    newIcon = $("<i>");
                newIcon.attr("class", "far fa-save fa-2x m-auto d-block")
                
                newTimeDiv.text(hoursArr[i]);
                newEventDiv.text("Placeholder");
            
              
                newRowDiv.append(newTimeDiv, newEventDiv, newSaveDiv);
                newSaveDiv.append(newIcon);

    }


   $(document).on("click", ".save", function(event){
    var newText = $(this).siblings(".text").text();
    console.log(newText);
      console.log("save button clicked in the Save event function");
   });


    // function saveEvent(event) {


    // var newText = $(this).siblings();
    // console.log(newText);
    //   console.log("save button clicked in the Save event function");

    // }
    
 


    