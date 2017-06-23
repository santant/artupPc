//拖拉图片进 div 时，触发ondragenter 事件
function ondragover(event) {
	// 变更div css 效果
	event.stopPropagation();
	event.preventDefault();

}

// 拖拉图片离开 div 时，触发ondragleave 事件
function ondragenter(event) {
	// 变更div css 效果
	event.stopPropagation();
	event.preventDefault();

	var $obj = event.data.obj;
	$obj.addClass('resumable-dragover');
}

// 拖拉图片在 div上结束时，触发事件
function ondragend(event) {
	event.stopPropagation();
	event.preventDefault();
	//console.log('remove');
	var $obj = event.data.obj;
	$obj.removeClass('resumable-dragover');
}

// 拖拉图片在 div上放开时，触发事件
function ondragdrop(event) {
	event.stopPropagation();
	event.preventDefault();
	this.dropBox.removeClass('resumable-dragover');
	var dt = event.dataTransfer;
	var files = dt.files;
   getFiles(event);
}

/**
 * 获取文件
 * @param event
 */
function getFiles(event) {
	var dt = event.dataTransfer;
	//console.log(dt);
	 
	var files = dt.files;
	var n = files.length;
	for (var i = 0; i < n; i++) {
		var file = files[i];
		var fileName = file.name;
		//console.log("fileName="+fileName+";type="+file.type+";isDirectory="+file.isDirectory);
//		var reader = new FileReader();
//		reader.readAsDataURL(file);
//		reader.onloadend = function(event) {
//			var filedata = event.target.result;
//			$(document.body).append("<img src='" + filedata + "' />")
//		}
	}
}
 
/**
 * 验证文件
 * 规则：	1、大小不能低于500k
 */
function validateUploadFiles($, array) {
	var ok = true;
	$.each(array, function(idx, file) {
		//console.log("upload : " + idx + "=" + file);
		var size = file.size;
		var str = file.fileName.substring(file.fileName.lastIndexOf('.')+1);
		if(str == 'JPG' || str == 'jpg'){
			if (size < 500 * 1024) {
			alert('文件大小不能小于500k');
			ok = false;
			return;
			}
			
		}else{
			alert('请上传jpg图片')
			ok = false;
		}	
		
	});
	return ok;
}

/**
 * 初始化文件上传控件
 */
function uploadInitializer($, uploadUrl, uploadEventHandler){
	//图片服务器
// 	var imageServerHost =localStorage.getItem("imageServerHost");
// 	if(imageServerHost == null){
// 		imageServerHost = '';
// 	}
// 	var uploadUrl = imageServerHost + '/builder/cors/picture/' + category + '/upload.do?format=json&sessionId=' + sessionId;

	console.log('uploadUrl=' + uploadUrl);

	var r = new Resumable({
		target:  uploadUrl,
        permanentErrors: [404, 500, 501],
        maxChunkRetries: 1,
        chunkRetryInterval: 5000,
        simultaneousUploads: 4,
        chunkSize: 1*1024*1024,
        fileParameterName:"file",
        testChunks: false,
        allowDuplicateUploads:false,
        generateUniqueIdentifier:true,
        query:[]
	});
	if(!r.support) {
          alert('NotSupport');
  	} else { 
  		//增加事件监听
  		var $dropBox = $('#dropBox');
  		$dropBox.bind("dragover", {obj : $dropBox},  ondragover);
  		$dropBox.bind("dragenter", {obj : $dropBox}, ondragenter);
  		$dropBox.bind("dragleave", {obj : $dropBox}, ondragleave);
  		$dropBox.bind("ondragend", {obj : $dropBox}, ondragend);
  		var eventHandler = function(event){
  			var obj = new Object();
  			obj.dropBox = $dropBox;
				ondragdrop.call(obj, event);
		};
  		//$dropBox.get(0).addEventListener("drop", eventHandler, false);
//  		//增加事件监听
//  		var $dropBox = $('#dropBox');
//  		$dropBox.bind("dragover", {obj : $dropBox},  ondragover);
//  		$dropBox.bind("dragenter", {obj : $dropBox}, ondragenter);
//  		$dropBox.bind("dragleave", {obj : $dropBox}, ondragleave);
//  		$dropBox.bind("ondragend", {obj : $dropBox}, ondragend);
//  		var eventHandler = function(event){
//  			var obj = new Object();
//  			obj.dropBox = $dropBox;
//				ondragdrop.call(obj, event);
//		};
//  		$dropBox.get(0).addEventListener("drop", eventHandler, false);
			
  		//绑定上传文件的事件处理
  		//artronFileUpload($, r, callback);
  		uploadEventHandler($, r);
  	}
} 
 
