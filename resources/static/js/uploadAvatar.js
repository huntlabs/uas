$('#file_upload').uploadify({
	'uploader' : uWrite,
	'swf'           : '/static/lib/uploadify/uploadify.swf',
	'auto' : true,
	'debug' : false,
	'method' : 'post',
	'progressData' : 'percentage',
	'fileObjName' : 'file',
	'formData'      : {
		'filename' : 'adminSite',
		'appid'    :	uAppid,
		'uploadToken' : uUploadToken,
	},
	'onUploadSuccess' : function(file, data, response) {
		console.log('The file ' + file.name + ' was successfully uploaded with a response of ' + response + ':' + data);
		if(response)
		{
			var data = eval('(' + data + ')');
			$('#preview-img').attr('src',uRead  +data.hash + '_100x100.' + data.ext);
			$('#avatar').attr('value',data.hash + '.' + data.ext);
		}
		else
		{
			console.log('upload error');
		}
	}
});

