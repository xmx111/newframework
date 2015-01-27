<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<div  class="form-horizontal form-bordered form-label-stripped div-order-view">
	<input type="hidden" id="id" value="${dto.id}" />
	<div class="form-body">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">工程编号</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.contract.engineeringCode}&nbsp;</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">工程名称</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.contract.engineeringName}&nbsp;</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">订单编号</label>
					<div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.code}&nbsp;</label>
					</div>
				</div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">订单名称</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.name}&nbsp;</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">订单时间</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.time}&nbsp;</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">订单说明</label>
					<div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.explains}&nbsp;</label>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">下单人</label>
					<div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.createOperator.name}&nbsp;</label>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
				<div class="form-group">
					<label class="control-label">订单状态</label>
					<div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.status}&nbsp;</label>
					</div>
				</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">供货商编号</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.supplier.code}&nbsp;</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">供货商名称</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.supplier.name}&nbsp;</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">供货商联系人</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.supplierContacts}&nbsp;</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">供货商联系电话</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.supplierTel}&nbsp;</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label class="control-label">订单种类</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.type}&nbsp;</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-primary">
            <div class="panel-heading">
                订单材料明细
            </div>
        </div>
        <div class="row search-form-default hide">
            <div class="col-md-12">
                <form action="#" method="get" class="form-inline form-validation form-search-init"
                      data-grid-search=".grid-order-material-details-view">
                    <button class="btn green" type="submmit">
                        <i class="m-icon-swapright m-icon-white"></i>&nbsp; 查&nbsp;询
                    </button>
                    <button class="btn default hidden-inline-xs" type="reset">
                        <i class="fa fa-undo"></i>&nbsp; 重&nbsp;置
                    </button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="grid-order-material-details-view"></table>
            </div>
        </div>
        <div class="panel panel-primary">
            <div class="panel-heading">
                物流信息
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">物流状态</label>
                    <div class="controls">
                        <input type="hidden" id="express_id" value="${dto.express.id}">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.express.status}&nbsp;</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">物流时间</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.express.time}&nbsp;</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">物流名称</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.express.name}&nbsp;</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">物流单号</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.express.no}&nbsp;</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">物流联系人</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.express.sender}&nbsp;</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">物流联系电话</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.express.phone}&nbsp;</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label class="control-label">物流跟踪记录</label>
                    <div class="controls">
                        <form action="#" method="get" class="form-inline form-validation form-search-init hide"
                              data-grid-search=".grid-order-express-details">
                        </form>
                        <table class="grid-order-express-details"></table>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-primary">
            <div class="panel-heading">
                收货验收信息
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">验收状态</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.acceptance.status}&nbsp;</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">验收时间</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.acceptance.time}&nbsp;</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">验收人</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.acceptance.checker}&nbsp;</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">验收人电话</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.acceptance.phone}&nbsp;</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label class="control-label">验收情况说明</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.acceptance.explains}&nbsp;</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-primary">
            <div class="panel-heading">
                产品安装信息
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">安装状态</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.installationInfo.status}&nbsp;</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">安装时间</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.installationInfo.time}&nbsp;</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">安装人</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.installationInfo.installer}&nbsp;</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">安装人电话</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.installationInfo.phone}&nbsp;</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label class="control-label">安装情况说明</label>
                    <div class="controls">
                        <label style="padding-top: 5px;font-size: 14px;">${dto.installationInfo.explains}&nbsp;</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label class="control-label">安装照片</label>
                    <div class="controls">
                        <c:forEach items="${dto.installationInfo.images}" var="image" varStatus="status">
                            <img src="${ctx}/${image.url}"><br/>
                        </c:forEach>
                    </div>
                </div>
            </div>
        </div>
	</div>
</div>
<script src="${ctx}/resources/script/engineering/order/order-inputView.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>