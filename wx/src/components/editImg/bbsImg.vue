<template>
	<div id="bbsImg">
		<mt-header title="宝宝书">
			<router-link to="" slot="left">
				<mt-button  icon="back">返回</mt-button>
			</router-link>
			<router-link to="" slot="right">
				<mt-button>下一步</mt-button>
			</router-link>
		</mt-header>
		<!-- 宝宝书list -->
		<div class="listBox">
			<ul>
				<!--空白-->
				<li>
					<div class="bs">
						<div class="bsLeft imgBox">
						</div>
					</div>
				</li>
				<!--封面-->
				<li>
					<div class="bs">
						<div class="bsLeft imgBox">
							<div class="bstp bstpfm">
								<div class="bbs03 bbsClass fmPage"></div>
							</div>
						</div>
						<div class="fmFont">封面</div>
					</div>
				</li>
				<!--扉页-->
				<li>
					<div class="bs">
						<div class="bsLeft imgBox">
							<div class="bstp bstpfm">
								<div class="bbs03 bbsClass fePage">
								</div>
							</div>
						</div>
					</div>
				</li>
				<li v-for="(item,index) in typeHtml">
					<div class="bs">
						<div class="bstp bstpfm"><div   v-tap="{methods : ActionsheetIn,index : index}"  v-html="item" class="bsLeft imgBox"></div></div>
						<div class="bbsBtn">
							<ul>
								<li><p>第<span>{{index+1}}</span>页</p></li>
								<li><a v-tap="{methods : switchBs,index : index}">更换板式</a></li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bsLeft imgBox">
							<div class="bstp bstpfm">
								<div class="bbs03 bbsClass fmPage">

								</div>
							</div>
						</div>
						<div class="fmFont">
							封底
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="cart_btn">
			<div class="price">
				合计<span><b>¥</b>88.00</span></div> <div class="crectOrder">
				保存作品
			</div>
		</div>		
		<!-- 弹出框选上传方式 -->
		<mt-popup class="fileUpload" style="position;relative;"  v-model="sheetVisible"  closeOnClickModal="false" position="bottom">
		  <ul>
		  	<li id="browseButton">从本地添加</li>
		  	<li v-tap="{methods : slectUpload}">从素材库里导入</li>
		  	<li @click="sheetVisible=false">取消</li>
		  </ul>		  
		</mt-popup> 
		
		<!-- 更换板式弹出框 -->
		<div v-if="selectBS" class="box_checkBS">
			<mt-header title="板式选择">
				<router-link to="/" slot="left">
					<mt-button icon="back">返回</mt-button>
				</router-link>
				<router-link to="/" slot="right">
					<mt-button   v-tap="{methods : nextBS}">下一步</mt-button>
				</router-link>
			</mt-header>
				<ul class="checkBS">
				 	<li v-tap="{methods : selectMoban ,index : index}" v-for="(moban,index) in mobanArr"><img v-bind:src="moban"/></li>
		 		</ul>
		</div>
		<!--弹出框-->
		<mt-popup v-model="textareaTexts"  popup-transition="popup-fade">
			<div class="textareaText">
				<p>请输入内容</p>
				<textarea name="" v-model="bbs.textTextarea" maxlength="40" placeholder="请输入内容(限制输入40字)" rows="" cols=""></textarea>
				<ol>
					<li><span   v-tap="{methods : cancel}" >取消</span></li>
					<li><span v-tap="{methods : confirmText}">确认</span></li>
				</ol>
			</div>
		</mt-popup>
		<!-- 弹出框图片素材库 -->
		<mt-popup style="position;relative;"
		  v-model="popupVisible"
		  position="bottom">
		  	<div class="img_div">
		  		<ul>
					<li class="activeLi">
						<img src="../../assets/img/user.jpg" >
					</li>
					<li>
						<img src="../../assets/img/user.jpg" >
					</li>					
				</ul>

				<div class="btn_button">
					<a class="Determine" href="">确认</a>
				</div>
		  		</div>

		</mt-popup>
	</div>

</template>

<script>
import { Toast ,Actionsheet,Popup,Indicator} from 'mint-ui';	
export default{
		data () {
		    return {
		    	  mobanArr:['http://image2.artup.com/resources/static/img/bbs_bs1.jpg','http://image2.artup.com/resources/static/img/bbs_bs2.jpg','http://image2.artup.com/resources/static/img/bbs_bs3.jpg',
		    	  'http://image2.artup.com/resources/static/img/bbs_bs4.jpg','http://image2.artup.com/resources/static/img/bbs_bs5.jpg','http://image2.artup.com/resources/static/img/bbs_bs6.jpg',
		    	  'http://image2.artup.com/resources/static/img/bbs_bs7.jpg','http://image2.artup.com/resources/static/img/bbs_bs8.jpg'],//模版对应的图片
		      typeHtml:[],//html模版	
		      sheetVisible:false, //隐藏弹出框的值
		      popupVisible:false,   //素材库
		      checkBS:true,//更换板式
		      selectBS:false, //板式选择的模版页面
		      textareaTexts:false,//文本弹出框编辑
		      bbs:{
		      	index2:0,
		      	imgUploadNumber:0,
		      	textTextarea:'' //弹出框文本字段
		      },
		      editData:{}//后端需要的大对象
		    }
	  }, 	
  	methods:{
  		slectUpload(){ //素材库倒入的操作
  			this.sheetVisible = false;
  			this.popupVisible = true;
  		},
  		getImg(){
  			console.log(window)
  		},
  		goAnchor(selector) { //跳转锚点的函数
        	var anchor = this.$el.querySelector(selector)
            document.body.scrollTop = anchor.offsetTop
       },
  		switchBs(params){ //切换板式 			
  			//给当前添加1个锚点id
  			$("#offsetId").attr("id","");
  			$(params.event.target).parents(".bs").parent("li").attr("id","offsetId");
  			var oindex = params.index;
  			this.bbs.index1 = oindex;
			//默认选中第一条
  			this.selectBS = true;//板式选择模版
  			console.log(params.event.target) 			
  		},
  		selectMoban(params){ //选择板式
  			var oindex = params.index;
  			this.bbs.index2 = oindex;
  			//变化ui
  			$(".box_checkBS .checkBS > li").removeClass("liactive"); 			
  			$(".box_checkBS .checkBS > li").eq(oindex).addClass("liactive");
  		},
  		nextBS(){//板式选择完毕的下一步
  			this.selectBS = false;
  			var oIndexs = 'bbs0'+(this.bbs.index2+1)
  			//动态修改模版的板式
  			this.typeHtml[this.bbs.index1] = htmlData[oIndexs];	
  			this.goAnchor("#offsetId");//跳转锚点
  		},
  		ActionsheetIn(params){//ActionsheetIn 弹出框显示，选择图片上传		
  			console.log(params.event.target)
  			//图片上传功能
  			if ($(params.event.target).hasClass("sucaiClass")) { 
  				//给此节点动态给1个class,方便回显的时候调用,先清空下calss避免bug
  				$(".OnlyOne").removeClass("OnlyOne");
  				$(params.event.target).addClass("OnlyOne");
  				this.sheetVisible = true;
  				//组装必须字段
  				this.bbs.page = params.index+1; //第几页需要加1
  				this.bbs.num = $(params.event.target).attr("nm"); //图片顺序号
  				this.bbs.styleType = $(params.event.target).attr("type"); //板式
  				this.bbs.editCnfName = $(params.event.target).attr("editCnfName"); //是宝宝书还是lomok
  			}
  			//editImg 图片编辑功能
  			if ($(params.event.target).hasClass("editImg")) { 
  				//拿到编辑的图片地址
  				var editImgs = $(params.event.target).prev("img").attr("src");	
				//给地址存入vuex和浏览器
  				this.$store.state.mutations.editImg = editImgs;
  				localStorage.setItem("editImg",editImgs)
  				location.href="#/editImg"
  			}
  			//点击弹出文本输入框
  			if ($(params.event.target).hasClass("classP")) {
  				//重新定义文本框内容
				this.bbs.textTextarea = $(params.event.target).text();
  				//给文本框加个唯一标识符
  				$(".textErea").removeClass("textErea");
  				$(params.event.target).addClass("textErea");
				//打开弹出框
  				this.textareaTexts=true;
  				this.bbs.page = params.index+1; //第几页需要加1
  				this.bbs.num = $(params.event.target).attr("nm"); //文本的顺序
  				this.bbs.styleType = $(params.event.target).attr("type"); //板式
  				this.bbs.editCnfName = $(params.event.target).attr("editCnfName"); //是宝宝书还是lomok
  			}
  		},
  		confirmText(){//确认按钮弹出框
  			console.log(this.bbs.textTextarea)
  			this.textareaTexts=false;
  			$(".textErea").text(this.bbs.textTextarea)
  			//组装数据模版
		    var textMapVal = {"content":this.bbs.textTextarea,"page":this.bbs.page,"num":this.bbs.num,"editCnfIndex":this.bbs.styleType,"editCnfName" : this.bbs.editCnfName};
		    //放入文本textMap里面
		    this.editData.textMap.putvalue(this.bbs.page,textMapVal);
  		},
  		cancel(){ //弹窗取消操作
  			this.textareaTexts=false;
  			//重新定义文本框内容
			this.bbs.textTextarea = $(".textErea").text();
  		}
  	}, 
  	mounted(){		
  		var shupi = "欢乐红";
  		//动态切换书皮
  		checkColor(shupi,$('.fmPage'),$('.fdPage'),$('.fePage'))

  		console.log(this.$el)
  		var templateCode = "baobaoshu_170-235_24";//模版编码
  		var client = 'pc';   //手机，pc，app 设备等
  		var channel = '本站' //渠道   
  		
  		//图片操作的json值
		var cropitData = '{"x":"200.21","y":"400.32","width":"100","height":"300","rotate":"0","thumbnailScale":"1"}';
		
		//定义四个hashMap		
		this.editData.ImgHashMap = new HashMap(); //图片
		this.editData.lomHashMap =  new HashMap();//lom卡
		this.editData.textMap = new HashMap();// 文本框
		this.editData.imgSizeMap = new HashMap();// 板式图片个数;		
		
		//存入板式图片个数
		this.editData.imgSizeMap.putvalue('1',1);
		this.editData.imgSizeMap.putvalue('2',1);
		this.editData.imgSizeMap.putvalue('3',1);
		this.editData.imgSizeMap.putvalue('4',1);
		this.editData.imgSizeMap.putvalue('5',2);
		this.editData.imgSizeMap.putvalue('6',2);
		this.editData.imgSizeMap.putvalue('7',4);
		this.editData.imgSizeMap.putvalue('8',4);
		
  		//图片上传时提交的参数 templateCode
		var extraPostData = {};
  		console.log(document.getElementById('browseButton'))
  		this.typeHtml = typeHtml;
		var oThis = this;
  		/* 文件上传init */
		var uploadUrl = 'http://image2.artup.com/artup-build/builder/cors/picture/baobaoshu/upload.do?format=json&sessionId=2141731';
     	uploadInitializer($, uploadUrl, onUploadComplete);     	
		// //文件上传事件	
     	function onUploadComplete($, r){
     		var browBtn = document.getElementById('browseButton');
 			r.assignBrowse(browBtn, false);
     		r.on('filesAdded', function(array) {
				if(array.length > 1){alert('只能上传一张图片');return;}
				var ok = validateUploadFiles($, array);
						if (ok) {
							//触发uploadStart
						r.upload();} else {r.cancel();}
			});
			//开始上传
			r.on('uploadStart', function(){
				//组装后端需要的数据
				extraPostData  = {"templateCode" : templateCode, "userDbId" : "2141731", "client" : client, "channel" : channel,"picPage":oThis.bbs.page,"picNum":oThis.bbs.num,"styleType":oThis.bbs.styleType,"editCnfName":oThis.bbs.editCnfName}	
				r.opts.query = extraPostData;
				//打开进度框
				Indicator.open({text: '图片上传中...',spinnerType: 'fading-circle'});
				//关闭上弹块儿
				oThis.sheetVisible = false;				
			});
			//上传中
			 r.on('progress', function (e) {
			 	var progress = Number(r.progress());
			 	var progressWidth = progress.toFixed(2)*100;
				//进度条显示
			 	$(".mint-indicator-text").text("上传中..."+parseInt(progressWidth)+'%')
		    });
			//上传成功
			r.on('fileSuccess', function(file, message){
				var responseText = $.parseJSON(message);				
				$(".OnlyOne").prev(".myImgBox").show().find("img").attr("src",responseText.thumbnailUrl);
				//让图片剧中裁切隐藏	
				setTimeout(function(){
					dragThumb($(".OnlyOne").prev(".myImgBox").find("img"),$(".OnlyOne").prev(".myImgBox"));
					$(".OnlyOne").remove(); //清空触发弹出上传框的节点,防止vue事件委派兼容
				},30)
				console.log(responseText)
				//组装后端需要的数据
				var constName = responseText.picPage+'_'+responseText.picNum; //几页加第几张图
				var picObj = {"constName":constName,"picDbId" : responseText.pictureDbId, "page" : responseText.picPage, "editCnfIndex" : responseText.styleType, "num" : responseText.picNum, "actions" : cropitData,
				"thumbnailImageUrl":responseText.thumbnailUrl, "previewThumbnailImageUrl" :responseText.previewThumbnailImageUrl, "crop" : "false","editCnfName" : responseText.editCnfName};
				//存入图片ImgHashMap
				oThis.editData.ImgHashMap.putvalue(constName,picObj)	
				//关闭弹出框
				Indicator.close();
			});
        }
  	}
}
</script>

<style>

</style>