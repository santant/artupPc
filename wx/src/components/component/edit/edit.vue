<template>
    <div id="editImg">
        <div id="dropBox" class="resumable-drop">
		</div>
		<div id="image-cropper">
		  	<div class="cropit-preview"></div>
			<!--大小大滑拉杆儿-->
			<div class="div_range">
				<b>小</b><input type="range" class="cropit-image-zoom-input"><b>大</b>
			</div>
			<!--旋转90度-->
			<div class="rotate_90">
				<div class="rotate-ccw">左旋转<i>90°</i></div>
				<div class="rotate-cw">右旋转<i>90°</i></div>
			</div>		
		</div>
    </div>
</template>

<script>
    export default {
		data() {
			return {
				NavMenu: [], //左侧的菜单栏	
				number2: ''//test				
			}
		},
		methods: {},
		mounted() {
			console.log(document)
			console.log(this.$store.state.mutations)
			console.log(localStorage.getItem("editImg"))			
				var rotationalp = 90;
				var reg = 0;
				var angu = 0;
				//生成pdf时，需要post的数据
				var postData = {};
				var extraPostData = {"size" : "500*500", "type":"kuanghua"};
				
				$(function(){
					
					//图片裁切
					$('#image-cropper').cropit({
						freeMove : false,
						exportZoom : 1,
						imageBackground : true,
						imageBackgroundBorderWidth : 0,
						imageState : {
			//				src : '${ctx}/upload/bees-1.png',
							src : '../../../src/assets/img/bbs.png'
						}
					});
					
					//顺时针旋转图片		 
					$('.rotate-cw').click(function() {
						angu = reg += rotationalp;
						if (angu == 360) {
							angu = 0;
							reg = 0;
						}
						$('#image-cropper').cropit('rotateCW');
			
					});
			
					//逆时针旋转图片
					$('.rotate-ccw').click(function() {
						$('#image-cropper').cropit('rotateCCW');
						angu = reg -= rotationalp;
						if (angu == -360) {
							angu = 0;
							reg = 0;
						}
					});
					
					//获取最后结果
					$('.export').click(function() {			
						var cropitData = build();
						for(var cpData in cropitData){//遍历json对象的每个key/value对,p为key
							postData[cpData] = cropitData[cpData];
						}
						for(var extraData in extraPostData){//遍历json对象的每个key/value对,p为key
							postData[extraData] = extraPostData[extraData];
						}
						
						console.log('---------post datas --------------');
						console.log(postData);
						
						/*$.ajax({
							url : Mars.Utils.getContextPath() + '/service/pdf/creator.do?format=json',
							dataType:'json',
							type : "POST",
							data: postData,
							cache : false,
							success:function(d){
								alert(d.pdfFilePath);	
								console.log(d);
							}
						}); */
					}); 
					
					
					
				
				
				})
						
					}
    }
</script>

<style scoped>
    #editImg{
        font-size:40px;
        color:#f60;
        text-align:center;
    }
    
    .cropit-preview {
        background-color: #f8f8f8;
        background-size: cover;
        border: 5px solid #ccc;
        border-radius: 3px;
       
        width: 12.8125rem;
        height: 12.8125rem;
       
      }
      
      .cropit-preview-image-container {
        cursor: move;
      }

      .cropit-preview-background {
        opacity: .2;
        cursor: auto;
      }

      .image-size-label {
        margin-top: 10px;
      }

      input, .export {
        /* Use relative position to prevent from being covered by image background */
        position: relative;
        z-index: 10;
        display: block;
      }

      button {
        margin-top: 10px;
      }
      input[type="range"] {
	        -webkit-box-shadow: 0 1px 0 0px #424242, 0 1px 0 #060607 inset, 0px 2px 10px 0px black inset, 1px 0px 2px rgba(0, 0, 0, 0.4) inset, 0 0px 1px rgba(0, 0, 0, 0.6) inset;
	        margin-top: 2px;
	        background-color: #272728;
	        border-radius: 15px;
	        width: 13.625rem;
	        -webkit-appearance: none;
	        height:5px;
	    }
	  input[type="range"]::-webkit-slider-thumb {
	        -webkit-appearance: none;
	        cursor: default;
	        top: -2px;
	        height: 34px;
	        width: 20px;
	        transform: translateY(-1px);
	        background: none repeat scroll 0 0 #69277e;
	        border-radius: 15px;
	        -webkit-box-shadow: 0 -1px 1px black inset;
	    }
	    #image-cropper{
	    		height: 100%;
	    		
	    }
	    #image-cropper .div_range{
	    		width: 15.3125rem;
	    		margin: 0 auto;
	    		height: 1.1rem;
	    		line-height: 1.1rem;
	    }
	    #image-cropper .div_range >b{
	   	 	display: inline-block;
	   	 	font-size: 0.6875rem;
	    	}
	    #image-cropper .div_range >input{
	    		display: inline-block;
	    } 
	    #image-cropper .cropit-preview{
	    		display: block;
	    		margin: 0 auto;
	    		margin:  3.09375rem auto 4rem;
	    		overflow: hidden;
	    }
	    #image-cropper  .rotate_90 {
	    		width: 13.5625rem;
	    		height: 2.3125rem;
	    		line-height: 2.3125rem;
	    		text-align: center;
	    		margin:  3.25rem auto 0;
	    }
	    #image-cropper  .rotate_90  >div{
	   		width: 6.5rem;	 
	   		float: left;  	
	   		font-size: 0.68rem;	
	   		border: 1px solid #e0e0e0;
	    }
	     #image-cropper  .rotate_90  >div:last-child{
	     	float: right;
	     }
	     #image-cropper  .rotate_90  >div >i{
	     	color: #69277e;
	     
	     }
</style>