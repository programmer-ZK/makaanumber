
$(document).ready(function() {
  $("#multipleSelect").show();
  $("#multipleSelect").select2({
    width:"100%",
    placeholder: " Emirates/Locations",
    allowClear: true
  });
   
  // $(document).click("#multiple-select", function(){
  //   console.log('clicked!');
  // });
  $(document).select("#multipleSelect", function(){
    if(e){
      console.log('option clicked');  
    }
    // var value = $(this).val();
    console.log('selected');
  })
  $(document).on('select2:select', "#multipleSelect", function (evt) {
    var selfVal = $(this).val();
    $("#hiddenLocationInput").val(selfVal);


    console.log(selfVal);
    console.log('selected');
    // Do something
  });
  
function returnPromises() {
  return new Promise((resolve) => {
    setTimeout(() => {
      $("#searchSpinner").hide();
      resolve("Sample Data");
    }, 3000);
  });
}

async function ExecuteFunction() {
  await returnPromises();
  $("#searchItems").fadeIn();
}

ExecuteFunction()
});
