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
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs01 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt="">
										<span>编辑</span>
									</div>
									 <img  @click='ActionsheetIn' src="../../assets/img/p_sucai_02.jpg" alt="">
									</div>
									<div  class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>1</span>页</p>
								</li>
								<li   >
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs02 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>2</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs01 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>3</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs03 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>4</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs01 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>5</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs01 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>6</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs03 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>7</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs03 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>8</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs04 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>9</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs04 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>10</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs02 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>11</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="allBbsClass">
									<div class="bbs05 bbsClass">
										<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>
									<div class="bbs05 bbsClass">
										<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>
								</div>

								<div class="textarea">
									
								</div>
								</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>12</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="allBbsClass">
									<div class="bbs06 bbsClass">
										<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>
									<div class="bbs06 bbsClass">
										<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>
								</div>

								<div class="textarea">
									
								</div>
								</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>13</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs02 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>14</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="allBbsClass">
									<div class="bbs07 bbsClass">
										<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>
									<div class="bbs07 bbsClass">
										<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>
									<div class="bbs07 bbsClass">
										<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>
									<div class="bbs07 bbsClass">
										<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>
								</div>

								<div class="textarea">
									
								</div>
								</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>15</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs04 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>16</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="allBbsClass">
									<div class="bbs08 bbsClass">
										<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>
									<div class="bbs08 bbsClass">
										<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>
									<div class="bbs08 bbsClass">
										<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>
									<div class="bbs08 bbsClass">
										<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>
								</div>

								<div class="textarea">
									
								</div>
								</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>17</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs02 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>18</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs02 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>19</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs01 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>
									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>20</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs02 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>21</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs02 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>22</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="allBbsClass">
									<div class="bbs06 bbsClass">
										<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>
									<div class="bbs06 bbsClass">
										<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>
								</div>

								<div class="textarea">
									
								</div>
								</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>23</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs03 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>24</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs01 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>25</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs02 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>26</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs03 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>27</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs01 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>28</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="bs">
						<div class="bstp bstpfm">
							<div class="bsLeft imgBox">
								<div class="bbs04 bbsClass marginAuto">
									<div class="myImgBox"><img src="" alt=""><span>编辑</span></div><img src="../../assets/img/p_sucai_02.jpg" alt=""></div>

									<div class="textarea">
										<p>文字</p>	
									</div>
									</div>
						</div>
						<div class="bbsBtn">
							<ul>
								<li>
									<p>第<span>29</span>页</p>
								</li>
								<li>
									<a>更换板式</a>
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
		<!-- 弹出框选上传方式 -->
	<!-- 	<mt-actionsheet
		  :actions="actions"
		  v-model="sheetVisible">
		</mt-actionsheet> -->
		<mt-popup class="fileUpload" style="position;relative;"
		  v-model="sheetVisible"
		  position="bottom">
		  <ul>
		  	<li id="browseButton">从本地添加</li>
		  	<li v-tap="{methods : slectUpload}">从素材库里导入</li>
		  	<li @click="sheetVisible=false">取消</li>
		  </ul>		  
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
import { Toast ,Actionsheet,Popup} from 'mint-ui';	
export default{
	data () {
	    return {
	      sheetVisible:false, //隐藏弹出框的值
	      popupVisible:false,   //素材库
	    }
  	},
  	methods:{
  		ActionsheetIn(){ //ActionsheetIn 弹出框显示，选择图片上传			
  			this.sheetVisible = true;
  		}
  		,
  		slectUpload(){ //素材库倒入的操作
  			this.sheetVisible = false;
  			this.popupVisible = true;
  		},
  		getImg(){
  			console.log(window)
  		}
  	}, 
  	mounted(){
  		
  		console.log(htmlData)
  		console.log(document.getElementById('browseButton'))
  		
  		


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