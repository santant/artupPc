(function () {
    var html = document.documentElement;

    function onWindowResize() {
        html.style.fontSize = html.getBoundingClientRect().width / 20 + 'px';
    }

    window.addEventListener('resize', onWindowResize);
    onWindowResize();
})();


/*定义八个板式模板*/
var htmlData={
	bbs01:'<div bsdata = "1" class="bbs01 bbsClass marginAuto"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img nm="1"  type="1" editCnfName="baobaoshu_170-235_24_single"  @click="ActionsheetIn"  src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg"  class="sucaiClass" alt="" /></div><div class="textarea"><p nm="1" type="1" editCnfName="baobaoshu_170-235_24_single"  class="classP"></p></div>',
	bbs02:'<div bsdata = "2" class="bbs02 bbsClass marginAuto"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img nm="1"  type="2" editCnfName="baobaoshu_170-235_24_single"  src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg"  class="sucaiClass" alt="" /></div><div class="textarea"><p nm="1" type="2" editCnfName="baobaoshu_170-235_24_single" class="classP"></p></div>',
	bbs03:'<div bsdata = "3" class="bbs03 bbsClass marginAuto"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img nm="1" type="3" editCnfName="baobaoshu_170-235_24_single"   src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg"  class="sucaiClass" alt="" /></div>',
	bbs04:'<div bsdata = "4" class="bbs04 bbsClass marginAuto"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img nm="1" type="4"  editCnfName="baobaoshu_170-235_24_single"  src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg"  class="sucaiClass" alt="" /></div><div class="textarea"><p nm="1"  type="4" editCnfName="baobaoshu_170-235_24_single"  class="classP"></p></div>',
	bbs05:'<div bsdata = "5" class="allBbsClass"><div class="bbs05 bbsClass"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img nm="1" type="5" editCnfName="baobaoshu_170-235_24_single"  src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg"  class="sucaiClass" alt="" /></div><div class="bbs05 bbsClass"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img nm="2" type="5" src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg" editCnfName="baobaoshu_170-235_24_single" class="sucaiClass" alt="" /></div></div>',
	bbs06:'<div bsdata = "6" class="allBbsClass"><div class="bbs06 bbsClass"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img nm="1"  type="6" editCnfName="baobaoshu_170-235_24_single"   src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg"  class="sucaiClass" alt="" /></div><div class="bbs06 bbsClass"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img nm="2"  type="6" editCnfName="baobaoshu_170-235_24_single" src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg"  class="sucaiClass" alt="" /></div></div><div class="textarea"><p nm="1" type="6" editCnfName="baobaoshu_170-235_24_single"  class="classP"></p></div>',
	bbs07:'<div bsdata = "7" class="allBbsClass"><div class="bbs07 bbsClass"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img nm="1"   type="7" editCnfName="baobaoshu_170-235_24_single"  src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg"  class="sucaiClass" alt="" /></div><div class="bbs07 bbsClass"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img nm="2" type="7" src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg"  class="sucaiClass" alt="" /></div><div class="bbs07 bbsClass"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img nm="3" type="7" editCnfName="baobaoshu_170-235_24_single" src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg"  class="sucaiClass" alt="" /></div><div class="bbs07 bbsClass"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img  nm="4"  type="8" editCnfName="baobaoshu_170-235_24_single" src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg"  class="sucaiClass" alt="" /></div></div>',
	bbs08:'<div bsdata = "8" class="allBbsClass"><div class="bbs08 bbsClass"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img nm="1"  type="8" editCnfName="baobaoshu_170-235_24_single"  src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg"  class="sucaiClass" alt="" /></div><div class="bbs08 bbsClass"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img nm="2" type="8" editCnfName="baobaoshu_170-235_24_single" src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg"  class="sucaiClass" alt="" /></div><div class="bbs08 bbsClass"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img nm="3" type="8" editCnfName="baobaoshu_170-235_24_single" src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg"  class="sucaiClass" alt="" /></div><div class="bbs08 bbsClass"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img nm="4" type="8" editCnfName="baobaoshu_170-235_24_single" src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg"  class="sucaiClass" alt="" /></div></div><div class="textarea"><p nm="1" type="8" editCnfName="baobaoshu_170-235_24_single" class="classP"></p></div>',
	bbs09:'<div class="bbs01 bbsClass marginAuto"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img nm="1"  type="1" editCnfName="baobaoshu_lomo" src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg"  class="sucaiClass" alt="" /></div>',
	bbs10:'<div class="bbs02 bbsClass marginAuto"><div class="myImgBox"><img src="" alt="" /><span class="editImg">编辑</span><a></a></div><img nm="1"  type="2" editCnfName="baobaoshu_lomo" src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg"  class="sucaiClass" alt="" /></div>',			
};

/*板式默认的格式*/
var typeHtmlLome = [htmlData.bbs09,htmlData.bbs10,htmlData.bbs10,htmlData.bbs10,htmlData.bbs10,htmlData.bbs10,htmlData.bbs10,htmlData.bbs10,htmlData.bbs10,htmlData.bbs10,htmlData.bbs10]
	
var typeHtml = [htmlData.bbs01,htmlData.bbs02,htmlData.bbs01,htmlData.bbs03,htmlData.bbs01,htmlData.bbs01,htmlData.bbs03,htmlData.bbs03,htmlData.bbs04,htmlData.bbs04,htmlData.bbs02,htmlData.bbs05,htmlData.bbs06,htmlData.bbs02,htmlData.bbs07,htmlData.bbs04,htmlData.bbs08,htmlData.bbs02,htmlData.bbs02,htmlData.bbs01,htmlData.bbs02,htmlData.bbs02,htmlData.bbs06,htmlData.bbs03,htmlData.bbs01,htmlData.bbs02,htmlData.bbs03,htmlData.bbs01,htmlData.bbs04,htmlData.bbs03,htmlData.bbs01,htmlData.bbs04]






//tap事件
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
//HashMap取值
function HashMap () {
    /**
    * map大小
    */
    var size = 0;
    /**
    * 对象
    */
    var entry = new Object();//存放信息
    
            /**
     * @description 往hashmap中添加键值对
     * @param key 键 页码
     * @param value 值 
     */
    this.putvalue=function(key,value){
        if(!this.containsKey(key)){//没有包含时map大小+1
            size++;
        }
        entry[key]=value;//赋值
    }
    /**
     * @description 从hashmap中根据键获取值
     * @param key 键 页码
     * @return value|null
     */
    this.getvalue=function (key){
        return this.containsKey(key)?entry[key]:null;
    }
    /**
     * @description 判断是否包含key
     * @param key 键
     * @return true|false
     */
    this.containsKey=function (key){
        if(!(key in entry)){
            return false;
        }else{
            return true;
        }
        //return (null==(key in entry))?false:true;
    }
    /**
     * @description 从map中移除键值
     * @param key 键
     */
    this.remove=function (key){
        if(this.containsKey(key) && (delete entry[key])){
            size--;
        }
    }
    /**
     * @description 是否包含value
     * @param value 值
     */
    this.containsValue=function (value){
        for(var temp in entry){
            if(entry[temp]==value){
                return true;
            }
        }
        return false;
    }
    /**
     * @description 返回所有值
     * 
     */
    this.values=function (){
        var values = new Array();
        for(var temp in entry){
            values.push(entry[temp]);
        }
        return values;
    }
    /**
     * @description 返回所有键
     */
    this.keys=function (){
        var keys=new Array();
        for(var temp in entry){
            keys.push(temp);
        }
        return keys;
    }
    /**
     * @description 返回map大小
     */
    this.size=function (){
        return size;
    }
    /**
     * @description 清除map
     */
    this.removeAll=function (){
        size=0;
        entry=new Object();
    }
}
/*计算图片的缩放*/
function dragThumb(cs_src, cs_divdom) { //cs_src图片的节点,框型（固定div）的节点
	 imgWidth = parseFloat(cs_src.width());//原图宽
	 imgHeight = parseFloat(cs_src.height());//原图高
	 boxWidth = parseFloat(cs_divdom.width());//框宽
	 boxHeight = parseFloat(cs_divdom.height());//框高
	console.log('11')
	//原图和框的比例（宽）
	var oProportionWidth = boxWidth/imgWidth;
	//原图和框的比例（高）
	var oProportionHeight =boxHeight/imgHeight;
	
	//得到换算的最终比例mul
	var mul;
	if (oProportionWidth>oProportionHeight) {
		 mul= oProportionWidth;
	}else{
		 mul = oProportionHeight;
	}
	//得到原图变小的比例大小
	imgWidth = imgWidth * mul;
		imgHeight = imgHeight * mul;
	//图片宽<盒子宽
	if (imgWidth < boxWidth) {
		imgWidth = boxWidth
	}else if(imgHeight< boxHeight){//图片高 > 盒子高
		imgHeight= boxHeight
	}
	//位移的距离盒子-图片缩小比例/2
	var dx = (boxWidth-imgWidth)/2;
	var dy = (boxHeight-imgHeight)/2;	
	//渲染定位
	cs_src.css({
		width:imgWidth+'px',
		height:imgHeight+'px',
		left:dx+'px',
		top:dy+'px'
		})
} 


//换取宝宝书皮的js
function checkColor(shupi,dom1,dom2,dom3){
	switch(shupi){
			case "健康绿":
				dom1.addClass('fmLv');
				dom2.addClass('fdLv');
				dom3.addClass('feLv');
			break;
			case "智慧蓝":
				dom1.addClass('fmLs');
				dom2.addClass('fdLs');
				dom3.addClass('feLs');
			break;
			case "活力橙":
				dom1.addClass('fmCs');
				dom2.addClass('fdCs');
				dom3.addClass('feCs');
			break;
			case "欢乐红":
				dom1.addClass('fmFs');
				dom2.addClass('fdFs');
				dom3.addClass('feFs');	
			break;				
		}
}
