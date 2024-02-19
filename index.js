$(document).ready(function () {
  $("#register").validate({
    rules: {
      fname: {
        required: true,
        minlength: 5,
      },
      lname: {
        required: true,
        minlength: 1,
      },
      uname: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 8,
      },
      cpassword: {
        required: true,
        minlength: 8,
        equalTo:"#Password",
      },
      mnumber: {
        minlength:10,
        maxlength:10,
        required: true,
      },
      age: {
        required: true,
        digits: true,
        range: [12, 99],
      },
      dob: {
        required: true,
      },
      gender: {
        required: true,
      },
      city: {
        required: true,
        minlength: 3,
      },
      pin: {
        required: true,
        minlength: 6,
      },
      agree:{
        required:true
      }
    },
    messages: {
      fname: {
        required: "please enter your first name",
        minlength: "please enter your atleast 5 character",
      },
      lname: {
        required: "please enter your last name",
      },
      uname: {
        required: "please enter your user name",
        minlength: "username must be atleast 3 character",
      },
      email: {
        required: "please enter your email",
        email: "please enter valid email",
      },
      mnumber: {
        maxlength: "Please enter a 10-digit mobile number",
        minlength: "Please enter a 10-digit mobile number",
        required: "please enter valid mobile number",
      },
      age: {
        required: "please enter your age",
        digits: "please enter a valid age",
        range: "Age must be between 12 and 99",
      },
      dob: {
        required: "please enter date of birth",
      },
      city: {
        required: "please enter your city",
        String: true,
      },
      pin: {
        required: "please enter pin code",
        minlength: "pin code length must be 6",
      },
      gender: {
        required: "please select a gender",
      },
      password: {
        minlength: "password length must be 8 character",
        required: "please enter your password",
      },
      cpassword: {
        required: "please confirm your password",
        minlength: "password length must be 8 character",
        equalTo: "password do not match",
      },
      agree:{
        required:"required"
      }
    },
    submitHandler: function(form){
      $("#button").hide()
      $("#result").show()
      setTimeout(function(){
        alert("Form submitted successfully!");
      form.submit();
      },1700)
    },
  });
});
