<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<form class="form-horizontal form-bordered form-label-stripped form-validation form-ucenter-supplier-supplier-inputBasic"
	action="${ctx}/ucenter/supplier/save.json" method="post" >
	<input type="hidden" name="id" value="${clone eq true ? '' : dto.id}" />
	<div class="form-actions">
		<button class="btn blue" type="submit" data-grid-reload=".grid-ucenter-supplier-supplier-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
	<div class="form-body">
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">供货商编号</label>
					<div class="controls">
		                <input class="form-control" startWith="G" ${dto.id ne null ? "readonly" : ""} name="code" value="${dto.code}" id="code" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">供货商名称</label>
					<div class="controls">
		                <input class="form-control" name="name" value="${dto.name}" id="name" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">供货商联系人</label>
					<div class="controls">
		                <input class="form-control" name="contacts" value="${dto.contacts}" id="contacts" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">供货商联系电话</label>
					<div class="controls">
		                <input class="form-control" name="tel" value="${dto.tel}" id="tel" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">所供产品名称</label>
					<div class="controls">
		                <input class="form-control" name="productName" value="${dto.productName}" id="productName" type="text">
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">供货商地址</label>
					<div class="controls">
		                <input class="form-control" name="address" value="${dto.address}" id="address" type="text">
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
	</div>
	<div class="form-actions right">
		<button class="btn blue" type="submit" data-grid-reload=".grid-ucenter-supplier-supplier-index">
			<i class="fa fa-check"></i> 保存
		</button>
		<button class="btn default btn-cancel" type="button">取消</button>
	</div>
</form>
<input class="hide" type="hidden" id="upload-input">
<script src="${ctx}/resources/script/ucenter/supplier/supplier-inputBasic.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>