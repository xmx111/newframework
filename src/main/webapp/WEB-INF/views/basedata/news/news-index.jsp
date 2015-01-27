<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
<div class="tabbable tabbable-primary">
	<ul class="nav nav-pills">
		<li class="active"><a class="tab-default" data-toggle="tab" href="#tab-auto">列表查询</a></li>
		<li class="tools pull-right"><a class="btn default reload" href="javascript:;"><i class="fa fa-refresh"></i></a></li>
	</ul>
	<div class="tab-content">
		<div class="tab-pane fade active in">
			<div class="row search-form-default">
				<div class="col-md-12">
					<form action="#" method="get" class="form-inline form-validation form-search-init"
						data-grid-search=".grid-basedata-news-news-index">
                        <div class="form-group">
                            <%--<select name="search['CN_type']" class="form-control" id="search_type"></select>--%>
                            <select name="search['EQ_type']" style="width:169px;" class="form-control">
                                <option value="COMPANY">大事件纪实</option>
                                <option value="INDUSTRY">最新资讯</option>
                            </select>
                            <%--<input type="text" name="search['CN_type']" id="search_type" class="form-control" placeholder="标题">--%>
                        </div>
                        <div class="form-group">
                            <input type="text" name="search['CN_title']" class="form-control" placeholder="标题">
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
					<table class="grid-basedata-news-news-index"></table>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/resources/script/basedata/news/news-index.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>
