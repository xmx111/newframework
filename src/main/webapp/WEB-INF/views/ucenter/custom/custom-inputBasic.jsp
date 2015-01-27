<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<form class="form-horizontal form-bordered form-label-stripped form-validation form-ucenter-custom-custom-inputBasic"
	action="${ctx}/ucenter/custom/save.json" method="post" >
	<input type="hidden" name="id" value="${clone eq true ? '' : dto.id}" />
	<div class="form-actions">
		<button class="btn blue" type="submit" data-grid-reload=".grid-ucenter-custom-custom-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
	<div class="form-body">
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">客户编号</label>
					<div class="controls">
		                <input class="form-control" startWith="K" ${dto.id ne null ? "readonly" : ""} name="code" value="${dto.code}" id="code" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">客户姓名</label>
					<div class="controls">
		                <input class="form-control" name="name" value="${dto.name}" id="name" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">客户性别</label>
					<div class="controls">
                        <input type="hidden" id="sexKey" value="${dto.sex}">
                        <select name="sex" id="sex"></select>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">客户联系电话</label>
					<div class="controls">
		                <input class="form-control" name="phone" value="${dto.phone}" id="phone" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">客户邮箱</label>
					<div class="controls">
		                <input class="form-control" name="email" value="${dto.email}" id="email" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">客户QQ号</label>
					<div class="controls">
		                <input class="form-control" name="qq" value="${dto.qq}" id="qq" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">客户家庭住址</label>
					<div class="controls">
		                <input class="form-control" name="address" value="${dto.address}" id="address" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">配偶姓名</label>
					<div class="controls">
		                <input class="form-control" name="spouseName" value="${dto.spouseName}" id="spouseName" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">配偶联系电话</label>
					<div class="controls">
		                <input class="form-control" name="spousePhone" value="${dto.spousePhone}" id="spousePhone" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">配偶邮箱</label>
					<div class="controls">
		                <input class="form-control" name="spouseEmail" value="${dto.spouseEmail}" id="spouseEmail" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">配偶QQ号</label>
					<div class="controls">
		                <input class="form-control" name="spouseQq" value="${dto.spouseQq}" id="spouseQq" type="text">
					</div>
				</div>
            </div>
        </div>
	</div>
	<div class="row">
		<div class="col-md-6">
			<div class="form-group">
				<label class="control-label">所属区域</label>
				<div class="controls">
					<div class="input-icon right">
						<i class="fa fa-ellipsis-h region-select"></i>
						<input class="form-control region-select" required="required" value="${dto.region.name}" id="region_name" readonly="readonly" type="text"  placeholder="选择区域" />
						<input type="hidden" id="region_id" value="${dto.region.id}" name="region.id" />
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-6">
			<div class="form-group">
				<label class="control-label">头像</label>
				<div class="controls">
                    <c:if test="${dto.headUrl eq null || dto.headUrl eq ''}">
						<img style="cursor:pointer;" id="image_url" src="${ctx}/resources/images/head3.jpg" />
					</c:if>
                    <c:if test="${dto.headUrl ne null &&  dto.headUrl ne ''}">
						<img style="cursor:pointer;" id="image_url" src="${ctx}${dto.headUrl}" />
					</c:if>
					<input class="form-control" name="headUrl" value="${dto.headUrl}" id="headUrl" type="hidden">
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-6">
			<div class="form-group">
				<label class="control-label">昵称</label>
				<div class="controls">
					<input class="form-control" name="nickName" value="${dto.nickName}" id="nickName" type="text">
				</div>
			</div>
		</div>
	</div>
	<div class="form-actions right">
		<button class="btn blue" type="submit" data-grid-reload=".grid-ucenter-custom-custom-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
</form>
<input class="hide" type="hidden" id="upload-input">
<script src="${ctx}/resources/script/ucenter/custom/custom-inputBasic.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>