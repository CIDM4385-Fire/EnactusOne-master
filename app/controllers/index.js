
//var mainview = Alloy.createController("mainview").getView();
//var menuview = Alloy.createController("menuview").getView();

$.doLoginBtn.addEventListener('click', doLoginBtnClicked);
$.cancelLoginBtn.addEventListener('click', cancelLoginBtn);

function cancelLoginBtn() {
	$.index.close();
};

function doLoginBtnClicked() {

	// create instance of the user model
	var user = Alloy.createModel('User');

	// call the extended model’s function
	user.login($.email.value, $.password.value, userActionResponseHandler);
};//end doLoginBtnClicked ch7

function userActionResponseHandler(_resp) {
	if (_resp.success === true) {
		
		var mainview = Alloy.createController("mainview").getView();
		mainviewXML.open();
        var menuview = Alloy.createController("menuview").getView();		
		menuviewXML.open();

		// Do stuff after successful login.
		Alloy.Globals.loggedIn = true;
		Alloy.Globals.CURRENT_USER = _resp.model;
		
		// save the values as a string.


		$.parentController.loginSuccessAction(_resp);

	} else {
		// Show the error message and let the user try again.
		alert("loginFailed", _resp.error.message);

		Alloy.Globals.CURRENT_USER = null;
		Alloy.Globals.loggedIn = false;
	}
  };

function doClick(e) {
    alert($.label.text);
    //$.login.open();
}

$.index.open();
$.loginView.show();

