<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<style>
<!--
.pre-tree-scrollable{
	max-height:540px;
	overflow-y:scroll
}
-->
</style>
<div class="row">
	<div class="contextMenu col-md-4 col-md-offset-1">
		<div class="form-group">
			<div class="controls">
				<button id="checkAll" type="button" class="btn btn-danger">全选</button>
				<button id="reverseCheck" type="button" class="btn btn-danger">取消</button>
				<button id="btnRoleSave" type="button" class="btn btn-primary">设置权限</button>
			</div>
		</div>
	</div>
	<div class="col-md-4 pre-tree-scrollable">
		<input id="roleId" type="hidden" value="${dto.id}">
		<div>
			<ul id="authorityTree" class="ztree">
			</ul>
		</div>
	</div>
</div>
<script type="text/javascript">
	treeNodes = ${tree};
</script>
<script src="${ctx}/resources/script/config/sys/role/role-authorize.js" />