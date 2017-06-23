<template>
	<div id="table">
		<div class="title_nav" style="display: block;">
			<ul>
				<li><span>首页</span><i class="el-icon-close"></i></li>
				<li class="activeLi"><span>订单管理</span><i class="el-icon-close"></i></li>
				<li><span>猫的广场舞</span><i class="el-icon-close"></i></li>
			</ul>
		</div>		
		<el-row  class="toolbar">
		  <el-form  :inline="true" :model="formInline" class="demo-form-inline">	
			  <!--<el-col :xs="12" :sm="6" :md="6" :lg="6">-->
			  	 <el-form-item :span="6"  label="订单ID">
				    <el-input size="small" v-model="formInline.user" placeholder="订单ID"></el-input>
				  </el-form-item>
			  <!--</el-col>-->
			  <!--<el-col :xs="12" :sm="6" :md="6" :lg="6">-->
			  	 <el-form-item :span="6" label="订单Code">
			    <el-input size="small" v-model="formInline.code" placeholder="订单Code"></el-input>
			  </el-form-item>
			  <!--</el-col>-->
			  <!--<el-col :xs="12" :sm="6" :md="6" :lg="6">-->
			
			     <el-form-item :span="6" label="支付状态">
				    <el-select size="small" v-model="formInline.status" placeholder="支付状态">
				      <el-option label="支付状态" value="shangha1i"></el-option>
				      <el-option label="区域二" value="beijing2"></el-option>
				    </el-select>
				  </el-form-item>
			  <!--</el-col>-->
			  <!--<el-col :xs="12" :sm="6" :md="6" :lg="6">-->
				
				  <el-form-item label="审核状态">
				    <el-select size="small" v-model="formInline.status" placeholder="审核状态">
				      <el-option label="审核状态" value="shanghai"></el-option>
				      <el-option label="审核状态" value="beijing"></el-option>
				    </el-select>
			 	 </el-form-item>
			  <!--</el-col>-->
			   <!--<el-col :xs="12" :sm="6" :md="6" :lg="6">-->
			   	  <el-form-item :span="6"label="手机号">
				    <el-input size="small" v-model="formInline.phoneNumber" placeholder="手机号"></el-input>
				  </el-form-item>
			   <!--</el-col>-->
			   <!--<el-col :xs="24" :sm="12" :md="12" :lg="12">-->
		   		 <!--活动时间-->
				  <el-form-item :span="12" label="选择时间">
				    <el-col :span="10">
				      <el-form-item>
				        <el-date-picker size="small" type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
				      </el-form-item>
				    </el-col>
				    <el-col :span="2">-</el-col>
				    <el-col :span="10">
				      <el-form-item >
				        <el-date-picker size="small" type="date" placeholder="选择日期" v-model="formInline.date2" style="width: 100%;"></el-date-picker>
				      </el-form-item>
				    </el-col>
				  </el-form-item>
			   	<!--</el-col>-->
			   <!--<el-col :xs="12" :sm="6" :md="6" :lg="6">-->
			   	  <el-form-item label="订单类型">
				    <el-select size="small" v-model="formInline.order" placeholder="订单类型">
				      <el-option label="区域一" value="shanghai"></el-option>
				      <el-option label="区域二" value="beijing"></el-option>
				    </el-select>
			 	 </el-form-item>
			   <!--</el-col>-->			  
		 </el-form>
		  <!--<el-col :sm="2" :lg="2">-->
		  	<el-button type="primary"  size="small">查询<i class="el-icon-search el-icon--right"></i></el-button>
		  <!--</el-col>-->	
		   <!--<el-col  :sm="2" :lg="2">-->
		   	<el-button type="primary"  size="small">导出<i class="el-icon-upload el-icon--right"></i></el-button>
		   	<!--</el-col>-->
		   <!--<el-col :sm="2" :lg="2">-->
		   	<el-button type="primary"  size="small">清空<i class="el-icon-close el-icon--right"></i></el-button>
<!--		   </el-col>	-->
		</el-row>


		<div class="el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition" style="width: 100%;">		
			 <el-table
			    :data="tableData"
<<<<<<< HEAD
			    border	
			    @select="changed"
			    style="width: 100%"
			    >
			    <el-table-column fixed type="index" label=" "  width="40">
=======
			    border
			    style="width: 100%"  @select='selectSign' @select-all="selectAll" >
			    <el-table-column
			       fixed
			      type="index"
			      label=" "
			      width="40">
>>>>>>> 56c5e0d3bee27cdc050f3f2e3c465159a4bb9fe9
			    </el-table-column>
			    <el-table-column
			       fixed
			     type="selection"
			      label=" "
			      width="40" >
			    </el-table-column>
			    
			    <el-table-column
			      fixed
			      prop="id"
			      label="订单ID"
			      width="100">
			    </el-table-column>
			    <el-table-column
			      prop="numbers"
			      label="订单编号"
			      width="200">
			    </el-table-column>
			    <el-table-column
			      prop="AuditState"
			      label="审核状态"
			      width="100">
			    </el-table-column>
			    <el-table-column
			      prop="OrderStatus"
			      label="订单状态"
			      width="100">
			    </el-table-column>
			    <el-table-column
			      prop="times"
			      label="下单时间"

			      width="200">

			    </el-table-column>
			    <el-table-column
			      prop="payTimes"
			      label="付款时间"
			      width="200">
			    </el-table-column>
			    <el-table-column
			      prop="Total"
			      label="应付总额"
			      width="100">
			    </el-table-column>
			    <el-table-column
			      prop="PaymentMethod"
			      label="支付方式"
			      width="100">
			    </el-table-column>
			    <el-table-column
			      prop="payStatus"
			      label="支付状态"
			      width="100">
			    </el-table-column>
			    <el-table-column
			      prop="productType"
			      label="产品类型"
			      width="100">
			    </el-table-column>
			    <el-table-column
			      fixed="right"
			      label="操作"
			      width="180">
			      <template scope="scope">
			        <!--<el-button  type="text" size="small">生成PDF备注</el-button>-->
			        <el-button type="text" size="small" >物流详情</el-button>
			        <el-button type="text" size="small">详情</el-button>
			        <el-button type="text" size="small">取消</el-button>
			        <el-button type="text" @click="delect(scope.$index)" size="small">删除</el-button>
			      </template>
			    </el-table-column>
			</el-table>
			
			<div class="toolbar el-col el-col-24">
<<<<<<< HEAD
				<button disabled="disabled" type="button" :class="datas"><span>批量删除</span></button>
=======

			<button  type="button" :class="checkDelect ? 'el-button el-button--danger' : 'el-button el-button--danger is-disabled' "><span>批量删除</span></button>
>>>>>>> 56c5e0d3bee27cdc050f3f2e3c465159a4bb9fe9
				<!--页码-->
				<div class="el-pagination" style="float: right;">

					  <el-pagination @current-change="currentPage"
					    layout="prev, pager, next"
					    :total="total" >
					  </el-pagination>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
		 export default {
		    data() {
			 return {
<<<<<<< HEAD
			 	 selects:'',
			 	 datas:{
			 	 	"el-button el-button--danger is-disabled" : true,
			 	 	"el-button el-button--danger" : false
			 	 },
=======
			 	//判断批量删除图标是否启用标记
			 	checkDelect:false,		 
>>>>>>> 56c5e0d3bee27cdc050f3f2e3c465159a4bb9fe9
		        formInline: {
		          user: '',
		          region: '',
		          code:'',
		          status:'',
		          payStatus:'',
		          phoneNumber:'',
		          date1:'',
		          date2:'',
		          order:'',
		        },
		        total:400, //总的分页数量
		        tableData: [
		        {
		          id: '201620',
		          numbers: '2016202016202016202',
		          AuditState: '待审核',
		          OrderStatus: '未处理',
		          times:"2017-06-05 14:02:01",
		          payTimes:"2017-06-05 14:02:01",
		          PaymentMethod:"微信支付",
		          payStatus:'已支付',
		          productType:"海报",
		          address: '上海市普陀区金沙江路 1518 弄',
		          Total: 203
		        },{
		          id: '201620',
		          numbers: '2016202016202016202',
		          AuditState: '待审核',
		          OrderStatus: '未处理',
		          times:"2017-06-05 14:02:01",
		          payTimes:"2017-06-05 14:02:01",
		          PaymentMethod:"微信支付",
		          payStatus:'已支付',
		          productType:"海报",
		          address: '上海市普陀区金沙江路 1518 弄',
		          Total: 203
		        },{
		          id: '201620',
		          numbers: '2016202016202016202',
		          AuditState: '待审核',
		          OrderStatus: '未处理',
		          times:"2017-06-05 14:02:01",
		          payTimes:"2017-06-05 14:02:01",
		          PaymentMethod:"微信支付",
		          payStatus:'已支付',
		          productType:"海报",
		          address: '上海市普陀区金沙江路 1518 弄',
		          Total: 203
		        },{
		          id: '201620',
		          numbers: '2016202016202016202',
		          AuditState: '待审核',
		          OrderStatus: '未处理',
		          times:"2017-06-05 14:02:01",
		          payTimes:"2017-06-05 14:02:01",
		          PaymentMethod:"微信支付",
		          payStatus:'已支付',
		          productType:"海报",
		          address: '上海市普陀区金沙江路 1518 弄',
		          Total: 203
		        }]
		        
		      }
		    },
		    methods: {
<<<<<<< HEAD
		      onSubmit() {
		        console.log('submit!');
		      },
		      test(row,column,cell,event){

		      },
		      changed(selection,row){
		      	this.selects = selection;
		      	console.log(this.selects )

		      },
		      delect(index){
			      if(this.selects == '' || this.selects == "" ){
			      	alert('请选择删除项')
			      }else{
			      		this.tableData.splice(index,1);
			      		
			      		
			      }
		      
		     	//this.items = this.items.filter(t => !this.selection.some(s => s.id === t.id))
		      }
		   
=======
		    	
		    	   //选择复选框的时候触发事件
				selectSign(selection){
					selection.length>0 ?this.checkDelect = true:this.checkDelect = false;
				},
				//全选的时候触发
				selectAll(selection){
					selection.length>0 ?this.checkDelect = true:this.checkDelect = false;
				},			
				//分页页面改变的时候触发
				currentPage(currentPage){
					console.log(currentPage)
				}
				

>>>>>>> 56c5e0d3bee27cdc050f3f2e3c465159a4bb9fe9
		    }
		  }
	
</script>

<style>

</style>