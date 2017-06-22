<template>
	<div id="bbsImg">
		<mt-header title="宝宝书">
			<router-link to="/" slot="left">
				<mt-button>返回</mt-button>
			</router-link>
			<router-link to="/" slot="right">
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
								<div class="bbs03 bbsClass fmPage">
								</div>
							</div>
						</div>
						<div class="fmFont">
							封面
						</div>
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
						<div class="bstp bstpfm">
							<div v-html="item" class="bsLeft imgBox">
							</div>
							  </div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>{{index+1}}</span>页</p>
								</li>
								<li>
									<a v-tap="{methods : switchBs,index : index}">更换板式</a>
								</li>
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
		<mt-popup class="fileUpload" style="position;relative;"
		  v-model="sheetVisible"
		  position="bottom">
		  <ul>
		  	<li id="browseButton">从本地添加</li>
		  	<li v-tap="{methods : slectUpload}">从素材库里导入</li>
		  	<li @click="sheetVis">取消</li>
		  </ul>		  
		</mt-popup> 
		
		<!-- 更换板式弹出框 -->
			<div v-if="selectBS" class="box_checkBS">
				<mt-header title="板式选择">
					<router-link to="/" slot="left">
						<mt-button>返回</mt-button>
					</router-link>
					<router-link to="" slot="right">
						<mt-button  @click="nextBS">下一步</mt-button>
					</router-link>
				</mt-header>
					<ul class="checkBS">
					 	<li v-tap="{methods : selectMoban ,index : index}" v-for="(moban,index) in mobanArr">
					 		<img v-bind:src="moban"/>
					 	</li>
			 		</ul>
			</div>
			
		
		
		
		
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
import { Toast ,Actionsheet,Popup} from 'mint-ui';	
export default{
	data () {
	    return {
	    	  mobanArr:['../../src/assets/img/bbs_bs1.jpg','../../src/assets/img/bbs_bs2.jpg','../../src/assets/img/bbs_bs3.jpg',
	    	  '../../src/assets/img/bbs_bs4.jpg','../../src/assets/img/bbs_bs5.jpg','../../src/assets/img/bbs_bs6.jpg',
	    	  '../../src/assets/img/bbs_bs7.jpg','../../src/assets/img/bbs_bs8.jpg'],//模版对应的图片
	      typeHtml:[],//html模版	
	      sheetVisible:false, //隐藏弹出框的值
	      popupVisible:false,   //素材库
	      checkBS:true,//更换板式
	      selectBS:false, //板式选择的模版页面
	      bbs:{
	      	index2:0
	      } //index
	    }
  	},
  	methods:{
//		ActionsheetIn(){ //ActionsheetIn 弹出框显示，选择图片上传			
//			this.sheetVisible = true;
//		},
  		slectUpload(){ //素材库倒入的操作
  			this.sheetVisible = false;
  			this.popupVisible = true;
  		},
  		getImg(){
  			console.log(window)
  		},
  		switchBs(params){ //切换板式
  			var oindex = params.index;
  			this.bbs.index1 = oindex;
			//默认选中第一条

  			this.selectBS = true;//板式选择模版
  		},
  		sheetVis(){
  			this.sheetVisible = false;
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
  		}
  	}, 
  	mounted(){
  		
  		console.log(htmlData)
  		console.log(document.getElementById('browseButton'))
  		this.typeHtml = typeHtml;

		console.log(this)
		var othis = this;
//		function fns(){}
		
		setTimeout(
			aa,200)
		
		function aa(){
			
			
//			var box=$$("#bbsImg .listBox ul li .bs .bstp .imgBox .bbsClass img");   
//			console.log(box)
//			box.ons("tap",function(){    
//			    console.log("你已经长按了");  
//			    othis.sheetVisible = true;
//			},box)
			$(document).on('click',$("#bbsImg .listBox ul li .bs .bstp .imgBox .bbsClass img"),function(){
				othis.sheetVisible = true;
			})
//			$("#bbsImg .listBox ul li .bs .bstp .imgBox .bbsClass img").on('click',function(){
//				
//			})
		}
  		/* 文件上传init */
		var uploadUrl = 'http://image2.artup.com/artup-build/builder/cors/picture/baobaoshu/upload.do?format=json&sessionId=2141731';
     	uploadInitializer($, uploadUrl, onUploadComplete);
     	
		// //文件上传事件	
     	function onUploadComplete($, r){
     		var browBtn = document.getElementById('browseButton');
 			r.assignBrowse(browBtn, false);
     		r.on('filesAdded', function(array) {
				if(array.length > 1){
					alert('只能上传一张图片');
					return;
				}
				var ok = validateUploadFiles($, array);
				if (ok) {
					//触发uploadStart
					r.upload();
				} else {

					r.cancel();
				}
				alert('123')
			});
			//开始上传
			r.on('uploadStart', function() {
				// r.opts.query = extraPostData;
				console.log(r.opts.query)
				console.log('开始上传')
			});
			//上传中
			 r.on('progress', function (e) {
				//console.log('----------上传中------------------');
			 	var progress = Number(r.progress());
			 	var progressWidth = progress.toFixed(2)*100;
			 	console.log(progressWidth);
			 	// $(".loadingMoudel .spinner >span").text('')
			 	// $(".loadingMoudel .spinner >span").text(parseInt(progressWidth)+"%");
			 	// //进度条上传显示..
			 	// if(r.progress() > 0){
			 	// 	$(".loadingMoudel").css({"display":"block"});
			 	// }
			 	// if(r.progress() >= 1){
			 	// 	$(".loadingMoudel").css({"display":"none"});
			 	// }
		    });

     	}

 	
 	// 		//开始上传
		// 	r.on('uploadStart', function() {
		// 		r.opts.query = extraPostData;
				
		// 		$(".loadingMoudel").css({"display":"block"});
		// 	});
		// 	r.on('filesAdded', function(array) {
		// 		if(array.length > 1){
		// 			alert('只能上传一张图片');
		// 			return;
		// 		}
		// 		var ok = validateUploadFiles($, array);
		// 		if (ok) {
		// 			r.upload();
		// 		} else {
		// 			r.cancel();
		// 		}
		// 	});
		// 	//上传的进度
		// 	 r.on('progress', function (e) {
		// 		//console.log('----------上传中------------------');
		// 	 	var progress = Number(r.progress());
		// 	 	var progressWidth = progress.toFixed(2)*100;
		// 	 	//console.log(progressWidth);
		// 	 	$(".loadingMoudel .spinner >span").text('')
		// 	 	$(".loadingMoudel .spinner >span").text(parseInt(progressWidth)+"%");
		// 	 	//进度条上传显示..
		// 	 	if(r.progress() > 0){
		// 	 		$(".loadingMoudel").css({"display":"block"});
		// 	 	}
		// 	 	if(r.progress() >= 1){
		// 	 		$(".loadingMoudel").css({"display":"none"});
		// 	 	}
		//     });
			


  	}
}
</script>

<style>

</style>