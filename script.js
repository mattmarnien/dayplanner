var timeNow = $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm"));
var saveButtons = $(".save");
var hoursArr = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6"];
var scheduleArr = [];
var currentHour = moment().hour();

for (let i = 0; i < hoursArr.length; i++) {
  var newRowDiv = $("<div>");
  newRowDiv.attr("class", "row w-100");
  $("#body").append(newRowDiv);  
  var newTimeDiv = $("<div>");
  var newEventSection = $("<section>");
  var newSaveDiv = $("<div>");
  var newIcon = $("<i>");
  newTimeDiv.attr("class", "col-1 time justify-center rounded-left pt-4");
  newEventSection.attr("class", "col-10 event justify-center border-left border-right border-dark pt-4");
  newEventSection.attr("dataId", hoursArr[i])
  newEventSection.attr("contenteditable", "true");
  newSaveDiv.attr("class", "col-1 save align-middle pt-4 pl-4 rounded-right");
  newSaveDiv.attr("dataId", hoursArr[i]); 
  newIcon.attr("class", "far fa-save fa-2x m-auto d-block");
  newTimeDiv.text(hoursArr[i]);
  newEventSection.text("");
  newRowDiv.append(newTimeDiv, newEventSection, newSaveDiv);
  newSaveDiv.append(newIcon);

  var oldInfo = JSON.parse(localStorage.getItem("events"));
  if (oldInfo !== null){
  for (let j = 0; j < oldInfo.length; j++) {
    if (oldInfo[j].dataId === hoursArr[i]) {
      newEventSection.text(oldInfo[j].text);
    }
  }
}
  var timeTest;
  if (hoursArr[i] < 8) {
    timeTest = (parseInt(hoursArr[i]) + 12);
  }
  else {
    timeTest = hoursArr[i];
  }
  if (currentHour > timeTest) {
    newEventSection.addClass("past");
  }
  else if (currentHour === timeTest) {
    newEventSection.addClass("present")
  }
  else {
    newEventSection.addClass("future")
  }
}

$(document).on("click", ".save", function (event) {
  var newText = $(this).siblings("section").text();
  newEvent = {
    dataId: $(this).attr("dataId"),
    text: newText
  }
  let newEvents = [];
  let oldEvents = JSON.parse(localStorage.getItem("events"));
  if (oldEvents !== null) {
    newEvents = oldEvents;
  }
  newEvents.push(newEvent);
  storageArr = JSON.stringify(newEvents);
  localStorage.setItem("events", storageArr);
});





