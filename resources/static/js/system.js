var User = {
	register: function () {
		var arr = {
			'username': $('#username').val(),
			'password': $('#password').val(),
			'repassword': $('#repassword').val(),
			'service': $('#service').val(),
		};
		if (!arr.username.length) {
			swal("wrong!", '用户名不能为空!', "error");
			return false;
		}
		if (!arr.password.length || !arr.repassword.length) {
			swal("wrong!", '密码不能为空!', "error");
			return false;
		}
		if (arr.password != arr.repassword) {
			swal("wrong!", '两次密码不一样!', "error");
			return false;
		}
		$.post('/register', arr, function (result) {
			if (result.error_code == 0) {
				//swal("updated!", "注册完成!", "success");
				location.href = result.msg;
			} else {
				swal("wrong!", result.msg, "error");
			}
		}, 'json');
	},
	login: function () {
		var arr = {
			'username': $('#username').val(),
			'password': $('#password').val(),
			'service': $('#service').val(),
		};
		console.log(arr);
		if (!arr.username.length) {
			swal("wrong!", '用户名不能为空!', "error");
			return false;
		}
		if (!arr.password.length) {
			swal("wrong!", '密码不能为空!', "error");
			return false;
		}
		$.post('/login', arr, function (result) {
			if (result.error_code == 0) {
				location.href = result.msg;
			} else {
				swal("wrong!", result.msg, "error");
			}
		}, 'json');
	},
};
