$(document).ready(function() {
    $("#contact-form").validate({
       rules: {
           Name: {
               required:true,
               minlength:10,
           },
           Email: {
             required:true,
           },
           Mobile: {
               required:true,
               minlength:10,
           },
           Subject:{
             required:true,
           }
       }
     })
   });
window.onload = function() {
      // Reset the form fields when the page loads
      document.getElementById("form").reset();
};