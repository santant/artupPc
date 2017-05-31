<template>
	<div>
		<div class="toolbar el-col el-col-24" style="padding-top:20px;">
			<form class="el-form el-form--inline">
				<div class="el-form-item">
					<div class="el-form-item__content">
						<div class="el-input">
							<input type="text" placeholder="姓名" autocomplete="off" class="el-input__inner">
						</div>
					</div>
				</div>
				<div class="el-form-item">
					<div class="el-form-item__content">
						<button type="button" class="el-button el-button--primary"><span>查询</span></button>
					</div>
				</div>
				<div class="el-form-item">
					<div class="el-form-item__content"><button type="button" class="el-button el-button--primary">
						<span>新增</span></button>
					</div>
				</div>
			</form>
		</div>
		<div class="el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition" style="width: 100%;">
			<!--<div class="hidden-columns">
				<div ></div>
				<div ></div>
				<div ></div>
				<div ></div>
				<div ></div>
				<div ></div>
				<div ></div>
				<div ></div>
			</div>-->
			<div class="el-table__header-wrapper">
				<table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 100%;">
					<colgroup>
						<col name="el-table_1_column_1" width="55">
						<col name="el-table_1_column_2" width="60">
						<col name="el-table_1_column_3" width="120">
						<col name="el-table_1_column_4" width="100">
						<col name="el-table_1_column_5" width="100">
						<col name="el-table_1_column_6" width="120">
						<col name="el-table_1_column_7" width="334">
						<col name="el-table_1_column_8" width="150">
						<col name="gutter" width="">
					</colgroup>
					<thead>
						<tr>
							<th colspan="1" rowspan="1" class="el-table_1_column_1 el-table-column--selection is-leaf">
								<div class="cell"><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" class="el-checkbox__original" value=""></span><!----></label></div>
							</th>
							<th colspan="1" rowspan="1" class="el-table_1_column_2 is-leaf">
								<div class="cell">#</div>
							</th>
							<th colspan="1" rowspan="1" class="el-table_1_column_3 is-leaf">
								<div class="cell">姓名<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span></div>
							</th>
							<th colspan="1" rowspan="1" class="el-table_1_column_4 is-leaf">
								<div class="cell">性别<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span></div>
							</th>
							<th colspan="1" rowspan="1" class="el-table_1_column_5 is-leaf">
								<div class="cell">年龄<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span></div>
							</th>
							<th colspan="1" rowspan="1" class="el-table_1_column_6 is-leaf">
								<div class="cell">生日<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span></div>
							</th>
							<th colspan="1" rowspan="1" class="el-table_1_column_7 is-leaf">
								<div class="cell">地址<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span></div>
							</th>
							<th colspan="1" rowspan="1" class="el-table_1_column_8 is-leaf">
								<div class="cell">操作</div>
							</th>
							<th class="gutter" style="width: 0px;"></th>
						</tr>
					</thead>
				</table>
			</div>
			<div class="el-table__body-wrapper">
				<table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 100%;">
					<colgroup>
						<col name="el-table_1_column_1" width="55">
						<col name="el-table_1_column_2" width="60">
						<col name="el-table_1_column_3" width="120">
						<col name="el-table_1_column_4" width="100">
						<col name="el-table_1_column_5" width="100">
						<col name="el-table_1_column_6" width="120">
						<col name="el-table_1_column_7" width="334">
						<col name="el-table_1_column_8" width="150">
					</colgroup>
					<tbody>
						<tr class="">
							<td class="el-table_1_column_1 el-table-column--selection">
								<div class="cell"><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" class="el-checkbox__original" value=""></span><!----></label></div>
							</td>
							<td class="el-table_1_column_2">
								<div class="cell">
									<div>1</div>
								</div>
							</td>
							<td class="el-table_1_column_3">
								<div class="cell">韩秀兰</div>
							</td>
							<td class="el-table_1_column_4">
								<div class="cell">男</div>
							</td>
							<td class="el-table_1_column_5">
								<div class="cell">42</div>
							</td>
							<td class="el-table_1_column_6">
								<div class="cell">1989-05-20</div>
							</td>
							<td class="el-table_1_column_7">
								<div class="cell">河北省 张家口市 崇礼县</div>
							</td>
							<td class="el-table_1_column_8">
								<div class="cell"><button type="button" class="el-button el-button--default el-button--small"><!----><!----><span>编辑</span></button> <button type="button" class="el-button el-button--danger el-button--small"><!----><!----><span>删除</span></button></div>
							</td>
						</tr>
						<tr class="">
							<td class="el-table_1_column_1 el-table-column--selection">
								<div class="cell"><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" class="el-checkbox__original" value=""></span><!----></label></div>
							</td>
							<td class="el-table_1_column_2">
								<div class="cell">
									<div>2</div>
								</div>
							</td>
							<td class="el-table_1_column_3">
								<div class="cell">戴军</div>
							</td>
							<td class="el-table_1_column_4">
								<div class="cell">女</div>
							</td>
							<td class="el-table_1_column_5">
								<div class="cell">51</div>
							</td>
							<td class="el-table_1_column_6">
								<div class="cell">1993-08-27</div>
							</td>
							<td class="el-table_1_column_7">
								<div class="cell">台湾 台东县 达仁乡</div>
							</td>
							<td class="el-table_1_column_8">
								<div class="cell"><button type="button" class="el-button el-button--default el-button--small"><!----><!----><span>编辑</span></button> <button type="button" class="el-button el-button--danger el-button--small"><!----><!----><span>删除</span></button></div>
							</td>
						</tr>
						
					 
					</tbody>
				</table>
			</div>
			<div class="toolbar el-col el-col-24">
				<button disabled="disabled" type="button" class="el-button el-button--danger is-disabled"><span>批量删除</span></button>
				<!--页码-->
				<div class="el-pagination" style="float: right;">
					<div class="block">
					  <el-pagination
					    layout="prev, pager, next"
					    :total="100">
					  </el-pagination>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
</script>

<style>

</style>