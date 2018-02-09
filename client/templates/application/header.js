/*
* JS file for header.html
*/

Template.header.events({
     'click #signOut': function(e){
         Meteor.logout(function(){
             console.log("user logged out");
         });
     },
     'mouseenter .dropdown-wrapper': function(e) {
         document.querySelector('.dropdown-wrapper .fa-caret-down').classList.add('hide');
         document.querySelector('.dropdown-wrapper .fa-caret-up').classList.remove('hide');

         if (Meteor.userId()) {
             var loginLink = document.getElementById('login-name-link');
             loginLink.innerHTML = "";
             loginLink.classList.remove("login-link-text");
             loginLink.classList.add("login-link-text-sign-in");
         }
     },
     'mouseleave .dropdown-wrapper': function(e) {
         document.querySelector('.dropdown-wrapper .fa-caret-up').classList.add('hide');
         document.querySelector('.dropdown-wrapper .fa-caret-down').classList.remove('hide');
     },
     'click #login-buttons': function(e) {
         setTimeout(function(){
             var signInCloseBtn = document.querySelector('.login-close-text');
             if (signInCloseBtn) {
                 signInCloseBtn.innerHTML = "X";
             }
         }, 0);
     },
     'click #login-name-link': function(e) {
         setTimeout(function(){
             if (Meteor.userId()) {
                 var dropDownSignIn = document.getElementById('login-dropdown-list');
                 dropDownSignIn.classList.add("login-dropdown-list-sign-in");
             }
         },0)
     }
});

Template.header.rendered = function() {
    setTimeout(function(){
        var loginText = document.getElementById('login-name-link');
        if (loginText) {
            loginText.innerHTML = "";
        }
    },100)
}
