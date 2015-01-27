<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/common/tags.jsp"%>
    <ul class="nav nav-pills">
    </ul>
    <div class="tab-content">
        <div class="tab-pane fade active in">
            <div class="row search-form-default">
                <div class="col-md-12">
                    <form action="#" method="get" class="form-inline form-validation form-search-init"
                          data-grid-search=".grid-material-select-index">
                        <div class="form-group">
                            <input type="text" name="search['CN_code']" class="form-control" placeholder="材料编号">
                        </div>
                        <div class="form-group">
                            <input type="text" name="search['CN_name']" class="form-control" placeholder="材料名称">
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
                    <table class="grid-material-select-index"></table>
                </div>
            </div>
        </div>
    </div>
<script src="${ctx}/resources/script/basedata/material/material-select.js" />
<%@ include file="/WEB-INF/common/ajax-footer.jsp"%>
