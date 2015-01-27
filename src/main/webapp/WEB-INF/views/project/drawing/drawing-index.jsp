<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<div class="tabbable tabbable-primary">
	<ul class="nav nav-pills">
		<li class="active"><a class="tab-default" data-toggle="tab" href="#tab-auto">列表查询</a></li>
		<li class="tools pull-right"><a class="btn default reload" href="javascript:;"><i class="fa fa-refresh"></i></a></li>
	</ul>
	<div class="tab-content">
		<div class="tab-pane fade active in">
			<div class="row search-form-default drawing-search-div">
				<div class="col-md-12">
					<form action="#" method="get" class="form-inline form-validation form-search-init"
						data-grid-search=".grid-project-drawing-drawing-index">
						<div class="form-group">
                            <input type="hidden" id="init_engineeringId" value="${contract.id}">
                            <input type="hidden" id="init_engineeringName" value="${contract.engineeringName}">
							<input type="text" id="search_engineeringName" name="search['EQ_contract.id']" class="form-control">
						</div>
                        <div class="form-group">
                            <select name="search['EQ_type']" id="search_type" required="required" style="width:169px;" class="form-control">
                                <option selected value="PLAN">平面方案图</option>
                                <option value="RENDERING">效果图</option>
                                <option value="WORK">施工图</option>
                                <option value="DEEPEN">产品深化图</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="text" id="search_version" name="search['EQ_version']" class="form-control" placeholder="版本号">
                        </div>
						<div class="form-group">
							<input type="text" name="search['CN_name']" class="form-control" placeholder="图纸名称">
						</div>
						<div class="form-group">
							<input type="text" name="search['CN_describes']" class="form-control" placeholder="图纸描述">
						</div>
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
					<table class="grid-project-drawing-drawing-index"></table>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/resources/script/project/drawing/drawing-index.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>
