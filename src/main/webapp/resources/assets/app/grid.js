var Grid = function () {
  var a = false;
  return {
    initGridDefault: function () {
      $.extend($.ui.multiselect, {
        locale: {
          addAll: '全部添加',
          removeAll: '全部移除',
          itemsCount: '已选择项目列表'
        }
      });
      $.extend($.jgrid.ajaxOptions, {
        dataType: 'json'
      });
      $.extend($.jgrid.defaults, {
        datatype: 'json',
        loadui: false,
        loadonce: false,
        filterToolbar: {
        },
        ignoreCase: true,
        prmNames: {
          npage: 'npage'
        },
        jsonReader: {
          repeatitems: false,
          root: 'content',
          total: 'totalPages',
          records: 'totalElements'
        },
        treeReader: {
          level_field: 'extraAttributes.level',
          parent_id_field: 'extraAttributes.parent',
          leaf_field: 'extraAttributes.isLeaf',
          expanded_field: 'extraAttributes.expanded',
          loaded: 'extraAttributes.loaded',
          icon_field: 'extraAttributes.icon'
        },
        autowidth: true,
        rowNum: 15,
        page: 1,
        altclass: 'ui-jqgrid-evennumber',
        height: 'stretch',
        viewsortcols: [
          true,
          'vertical',
          true
        ],
        mtype: 'GET',
        viewrecords: true,
        rownumbers: true,
        toppager: true,
        recordpos: 'left',
        gridview: true,
        altRows: true,
        sortable: false,
        multiboxonly: true,
        multiselect: true,
        multiSort: false,
        forceFit: true,
        shrinkToFit: true,
        sortorder: 'desc',
        sortname: 'id',
        ajaxSelectOptions: {
          cache: true
        },
        loadError: function (d, e, b, c) {
          Global.notify('error', '表格数据加载处理失败,请尝试刷新或联系管理员!')
        },
        subGridOptions: {
          reloadOnExpand: false
        }
      });
      $.extend($.jgrid.search, {
        multipleSearch: true,
        multipleGroup: true,
        width: 700,
        jqModal: false,
        searchOperators: true,
        stringResult: true,
        searchOnEnter: true,
        defaultSearch: 'bw',
        operandTitle: '点击选择查询方式',
        odata: [
          {
            oper: 'eq',
            text: '等于　　'
          },
          {
            oper: 'ne',
            text: '不等　　'
          },
          {
            oper: 'lt',
            text: '小于　　'
          },
          {
            oper: 'le',
            text: '小于等于'
          },
          {
            oper: 'gt',
            text: '大于　　'
          },
          {
            oper: 'ge',
            text: '大于等于'
          },
          {
            oper: 'bw',
            text: '开始于'
          },
          {
            oper: 'bn',
            text: '不开始于'
          },
          {
            oper: 'in',
            text: '属于　　'
          },
          {
            oper: 'ni',
            text: '不属于'
          },
          {
            oper: 'ew',
            text: '结束于'
          },
          {
            oper: 'en',
            text: '不结束于'
          },
          {
            oper: 'cn',
            text: '包含　　'
          },
          {
            oper: 'nc',
            text: '不包含'
          },
          {
            oper: 'nu',
            text: '不存在'
          },
          {
            oper: 'nn',
            text: '存在'
          },
          {
            oper: 'bt',
            text: '介于'
          }
        ],
        operands: {
          eq: '=',
          ne: '!',
          lt: '<',
          le: '<=',
          gt: '>',
          ge: '>=',
          bw: '^',
          bn: '!^',
          'in': '=',
          ni: '!=',
          ew: '|',
          en: '!@',
          cn: '~',
          nc: '!~',
          nu: '#',
          nn: '!#',
          bt: '~~'
        }
      });
      $.extend($.jgrid.del, {
        serializeDelData: function (b) {
          b.ids = b.id;
          b.id = '';
          return b
        },
        errorTextFormat: function (c) {
          var b = jQuery.parseJSON(c.responseText);
          return b.message
        },
        afterComplete: function (d) {
          var c = new Array();
          var b = jQuery.parseJSON(d.responseText);
          if (b.type == 'success') {
            top.$.publishMessage(b.message);
            c[0] = true
          } else {
            top.$.publishError(b.message);
            c[0] = false
          }
          return c
        },
        ajaxDelOptions: {
          dataType: 'json'
        }
      });
      $.jgrid.extend({
        bindKeys: function (b) {
          var c = $.extend({
            upKey: true,
            downKey: true,
            onEnter: null,
            onSpace: null,
            onLeftKey: null,
            onRightKey: null,
            scrollingRows: true
          }, b || {
          });
          return this.each(function () {
            var d = this;
            if (!$('body') .is('[role]')) {
              $('body') .attr('role', 'application')
            }
            d.p.scrollrows = c.scrollingRows;
            $(d) .keydown(function (h) {
              var l = $(d) .find('tr[tabindex=0]') [0],
              n,
              g,
              m,
              f = d.p.treeReader.expanded_field;
              if (l) {
                m = d.p._index[$.jgrid.stripPref(d.p.idPrefix, l.id)];
                if (h.keyCode === 37 || h.keyCode === 38 || h.keyCode === 39 || h.keyCode === 40) {
                  if (h.keyCode === 38 && c.upKey) {
                    g = l.previousSibling;
                    n = '';
                    if (g) {
                      if ($(g) .is(':hidden')) {
                        while (g) {
                          g = g.previousSibling;
                          if (!$(g) .is(':hidden') && $(g) .hasClass('jqgrow')) {
                            n = g.id;
                            break
                          }
                        }
                      } else {
                        n = g.id
                      }
                    }
                    $(d) .jqGrid('setSelection', n, true, h);
                    h.preventDefault()
                  }
                  if (h.keyCode === 40 && c.downKey) {
                    g = l.nextSibling;
                    n = '';
                    if (g) {
                      if ($(g) .is(':hidden')) {
                        while (g) {
                          g = g.nextSibling;
                          if (!$(g) .is(':hidden') && $(g) .hasClass('jqgrow')) {
                            n = g.id;
                            break
                          }
                        }
                      } else {
                        n = g.id
                      }
                    }
                    $(d) .jqGrid('setSelection', n, true, h);
                    h.preventDefault()
                  }
                  if (h.keyCode === 37) {
                    if (d.p.treeGrid && d.p.data[m][f]) {
                      $(l) .find('div.treeclick') .trigger('click')
                    }
                    $(d) .triggerHandler('jqGridKeyLeft', [
                      d.p.selrow
                    ]);
                    if ($.isFunction(c.onLeftKey)) {
                      c.onLeftKey.call(d, d.p.selrow)
                    }
                  }
                  if (h.keyCode === 39) {
                    if (d.p.treeGrid && !d.p.data[m][f]) {
                      $(l) .find('div.treeclick') .trigger('click')
                    }
                    $(d) .triggerHandler('jqGridKeyRight', [
                      d.p.selrow
                    ]);
                    if ($.isFunction(c.onRightKey)) {
                      c.onRightKey.call(d, d.p.selrow)
                    }
                  }
                } else {
                  if (h.keyCode === 13) {
                    var e = h.target;
                    if (e.tagName === 'TEXTAREA') {
                      return true
                    }
                    h.stopPropagation();
                    $(d) .triggerHandler('jqGridKeyEnter', [
                      d.p.selrow
                    ]);
                    if ($.isFunction(c.onEnter)) {
                      c.onEnter.call(d, d.p.selrow)
                    }
                  } else {
                    if (h.keyCode === 32) {
                      h.stopPropagation();
                      $(d) .triggerHandler('jqGridKeySpace', [
                        d.p.selrow
                      ]);
                      if ($.isFunction(c.onSpace)) {
                        c.onSpace.call(d, d.p.selrow)
                      }
                    } else {
                      if (h.keyCode === 27) {
                        h.stopPropagation();
                        $(d) .jqGrid('restoreRow', d.p.selrow, c.afterrestorefunc);
                        $(d) .jqGrid('showAddEditButtons')
                      }
                    }
                  }
                }
              }
            })
          })
        },
        refresh: function () {
          this.each(function () {
            var b = this;
            if (!b.grid) {
              return
            }
            $(b) .jqGrid('setGridParam', {
              datatype: 'json'
            }) .trigger('reloadGrid')
          })
        },
        search: function (b) {
          this.each(function () {
            var e = this;
            if (!e.grid) {
              return
            }
            var c = $(e) .jqGrid('getGridParam', 'url');
            for (var d in b) {
              c = AddOrReplaceUrlParameter(c, d, b[d])
            }
            $(e) .jqGrid('setGridParam', {
              url: c,
              page: 1
            }) .trigger('reloadGrid')
          })
        },
        exportExcelLocal: function (b) {
          this.each(function () {
            var f = this;
            if (!f.grid) {
              return
            }
            if (!confirm('确认导出当前页面 ' + f.p.caption + ' 数据为Excel下载文件？')) {
              return
            }
            var e = new Array();
            e = $(f) .getDataIDs();
            var m = f.p.colModel;
            var p = f.p.colNames;
            var h = '';
            for (k = 0; k < p.length; k++) {
              var n = m[k];
              if (n.hidedlg || n.hidden || n.disableExport) {
                continue
              }
              h = h + p[k] + '\t'
            }
            h = h + '\n';
            for (i = 0; i < e.length; i++) {
              data = $(f) .getRowData(e[i]);
              for (j = 0; j < p.length; j++) {
                var n = m[j];
                if (n.hidedlg || n.hidden || n.disableExport) {
                  continue
                }
                var g = data[n.name];
                var l = null;
                if (n.searchoptions && n.searchoptions.value) {
                  l = n.searchoptions.value
                } else {
                  if (n.editoptions && n.editoptions.value) {
                    l = n.editoptions.value
                  }
                }
                if (l) {
                  g = l[g]
                }
                if (g.indexOf('<') > - 1 && g.indexOf('>') > - 1) {
                  g = $(g) .text()
                }
                if (g == '') {
                  g = data[n.name]
                }
                if (g == 'null' || g == null) {
                  g = ''
                }
                g = g.replace(/\&nbsp;/g, '');
                h = h + g + '\t'
              }
              h = h + '\n'
            }
            h = h + '\n';
            var c = $('<form method="post" target = "_blank" action="' + WEB_ROOT + '/pub/grid/export.exp"></form>') .appendTo($('body'));
            var o = $('<input type="hidden" name="exportDatas"/>') .appendTo(c);
            var d = $('<input type="hidden" name="fileName"/>') .appendTo(c);
            d.val('export-data.xls');
            o.val(h);
            c.submit();
            c.remove()
          })
        },
        refreshRowIndex: function () {
          var b = $(this);
          $.each($(b) .jqGrid('getDataIDs'), function (c, d) {
            $(b) .find('#' + d) .find('input,select') .each(function () {
              var e = $(this) .attr('name');
              $(this) .attr('name', e.substring(0, e.indexOf('[') + 1) + c + e.substring(e.indexOf(']'), e.length))
            })
          })
        },
        getAtLeastOneSelectedItem: function (g) {
          var f = $(this);
          var d = [
          ];
          var e = jQuery(f) .jqGrid('getGridParam', 'selarrrow');
          if (e.length > 0) {
            for (var b = 0; b < e.length; b++) {
              var c = $('#jqg_' + jQuery(f) .attr('id') + '_' + e[b]) .is(':disabled');
              if (!c) {
                d.push(e[b])
              }
            }
          } else {
            var h = jQuery(f) .jqGrid('getGridParam', 'selrow');
            if (h) {
              d.push(h)
            }
          }
          if (g) {
            jQuery(f) .find('table.jqsubgrid') .each(function () {
              var n = $(this) .jqGrid('getGridParam', 'selarrrow');
              for (var l = 0; l < n.length; l++) {
                var m = $('#jqg_' + jQuery(this) .attr('id') + '_' + e[l]) .is(':disabled');
                if (!m) {
                  d.push(n[l])
                }
              }
            })
          }
          if (d.length == 0) {
            Global.notify('error', '请至少选择一条行项目！');
            return false
          } else {
            return d
          }
        },
        getOnlyOneSelectedItem: function (g) {
          var f = $(this);
          var d = [
          ];
          var e = jQuery(f) .jqGrid('getGridParam', 'selarrrow');
          if (e.length > 0) {
            for (var b = 0; b < e.length; b++) {
              var c = $('#jqg_' + jQuery(f) .attr('id') + '_' + e[b]) .is(':disabled');
              if (!c) {
                d.push(e[b])
              }
            }
          } else {
            var h = jQuery(f) .jqGrid('getGridParam', 'selrow');
            if (h) {
              d.push(h)
            }
          }
          if (d.length == 0) {
            if (g) {
              toastr.error('请选取操作项目！')
            }
            return false
          } else {
            if (d.length > 1) {
              toastr.error('只能选择一条操作项目！');
              return false
            }
            return d[0]
          }
        },
        getSelectedItem: function () {
          var c = $(this);
          var b = jQuery(c) .jqGrid('getGridParam', 'selarrrow');
          return b.join()
        },
        getSelectedRowdatas: function () {
          var b = $(this);
          var c = [
          ];
          var e = b.jqGrid('getGridParam', 'selarrrow');
          if (e) {
            $.each(e, function (g, h) {
              var l = b.jqGrid('getRowData', h);
              l.id = h;
              c.push(l)
            })
          } else {
            var d = b.jqGrid('getGridParam', 'selrow');
            if (d) {
              var f = b.jqGrid('getRowData', d);
              f.id = d;
              c.push(f)
            }
          }
          return c
        },
        getSelectedRowdata: function () {
          var b = $(this);
          var c = b.jqGrid('getGridParam', 'selrow');
          if (c) {
            return b.jqGrid('getRowData', c)
          }
        },
        getDirtyRowdatas: function () {
          var l = $(this);
          var g = [
          ];
          var f = l.jqGrid('getGridParam', 'colModel');
          var d = [
          ];
          $.each(f, function (o, n) {
            if (n.editable) {
              d.push(n.name)
            }
          });
          var b = l.jqGrid('getDataIDs');
          var h = 0;
          $.each(b, function (n, o) {
            if (!Util.startWith(o, '-') && o != '') {
              h++
            }
          });
          var e = BooleanUtil.toBoolean(l.attr('data-clone'));
          $.each(b, function (n, q) {
            var p = l.jqGrid('getRowData', q);
            if (BooleanUtil.toBoolean(p['extraAttributes.dirtyRow'])) {
              if (Util.startWith(q, '-')) {
                q = ''
              }
              var o = {
                id: q
              };
              $.each(d, function (s, r) {
                o[r] = p[r]
              });
              o._arrayIndex = p._arrayIndex;
              if (p['extraAttributes.operation']) {
                o['extraAttributes.operation'] = p['extraAttributes.operation']
              }
              g.push(o)
            }
          });
          var m = l.jqGrid('getGridParam', 'batchEntitiesPrefix');
          if (m) {
            var c = {
            };
            $.each(g, function (n, p) {
              var o = p._arrayIndex;
              delete p._arrayIndex;
              if (o == undefined || o == '') {
                o = h;
                h++
              }
              $.each(p, function (r, q) {
                c[m + '[' + o + '].' + r] = q
              })
            });
            return c
          }
          return g
        },
        insertNewRowdata: function (f) {
          var b = $(this);
          var e = null;
          var d = b.jqGrid('getDataIDs');
          $.each(d, function (g, l) {
            var h = b.jqGrid('getRowData', l);
            if (!BooleanUtil.toBoolean(h['extraAttributes.dirtyRow'])) {
              e = l;
              return false
            }
          });
          var c = - Math.floor(new Date() .getTime() + Math.random() * 100 + 100);
          f['extraAttributes.dirtyRow'] = true;
          if (e) {
            b.jqGrid('addRowData', c, f, 'before', e)
          } else {
            b.jqGrid('addRowData', c, f, 'last')
          }
          return c
        },
        setEditingRowdata: function (l, c) {
          var b = $(this);
          var d = b.find('tbody');
          for (var f in l) {
            var g = 'input[name=\'' + f + '\'],select[name=\'' + f + '\'],textarea[name=\'' + f + '\']';
            var e = d.find(g);
            if (c == false) {
              if ($.trim(e.val()) != '') {
                continue
              }
            }
            var h = l[f];
            e.val(h) .attr('title', h);
            if (!!e && e.is('select')) {
              e.select2({
                openOnEnter: false,
                placeholder: '请选择...',
                matcher: function (n, q) {
                  var m = makePy(q) + '';
                  var p = m.toUpperCase() .indexOf(n.toUpperCase()) == 0;
                  var o = q.toUpperCase() .indexOf(n.toUpperCase()) == 0;
                  return (p || o)
                }
              })
            }
          }
        },
        getEditingRowdata: function () {
          var b = $(this);
          var d = b.find('tbody');
          var e = {
          };
          var c = 'input,select,textarea';
          d.find(c) .each(function () {
            var f = $(this);
            e[f.attr('name')] = f.val()
          });
          return e
        },
        isEditingMode: function (d) {
          var b = $(this);
          var c = b.find('tr[editable="1"]');
          if (c.size() > 0) {
            if (d == undefined) {
              return true
            }
            if (d === true) {
              alert('请先保存或取消正在编辑的表格数据行项后再操作')
            } else {
              alert(d)
            }
            return true
          }
          return false
        },
        sumColumn: function (d, f) {
          var b = $(this);
          if (f == undefined) {
            f = 2
          }
          var e = b.jqGrid('getCol', d, false, 'sum');
          var c = Math.pow(10, f);
          return Math.round(e * c) / c
        },
        getDataFromBindSeachForm: function (d) {
          var b = $(this);
          var c = b.jqGrid('getGridParam', 'bindSearchFormData');
          var e = c[d];
          return e
        },
        inlineNav: function (b, c) {
          c = $.extend(true, {
            edit: true,
            editicon: 'ui-icon-pencil',
            add: true,
            addicon: 'ui-icon-plus',
            save: false,
            saveicon: 'ui-icon-disk',
            cancel: false,
            cancelicon: 'ui-icon-cancel',
            del: true,
            delicon: 'ui-icon-trash',
            addParams: {
              addRowParams: {
                extraparam: {
                }
              }
            },
            editParams: {
            },
            restoreAfterSelect: true
          }, $.jgrid.nav, c || {
          });
          return this.each(function () {
            if (!this.grid) {
              return
            }
            var n = this,
            f,
            l = $.jgrid.jqID(n.p.id),
            e = $(n.p.toppager) .attr('id');
            n.p._inlinenav = true;
            if (c.addParams.useFormatter === true) {
              var d = n.p.colModel,
              h;
              for (h = 0; h < d.length; h++) {
                if (d[h].formatter && d[h].formatter === 'actions') {
                  if (d[h].formatoptions) {
                    var m = {
                      keys: false,
                      onEdit: null,
                      onSuccess: null,
                      afterSave: null,
                      onError: null,
                      afterRestore: null,
                      extraparam: {
                      },
                      url: null
                    },
                    g = $.extend(m, d[h].formatoptions);
                    c.addParams.addRowParams = {
                      keys: g.keys,
                      oneditfunc: g.onEdit,
                      successfunc: g.onSuccess,
                      url: g.url,
                      extraparam: g.extraparam,
                      aftersavefunc: g.afterSave,
                      errorfunc: g.onError,
                      afterrestorefunc: g.afterRestore
                    }
                  }
                  break
                }
              }
            }
            $(n) .jqGrid('navSeparatorAdd', b);
            if (n.p.toppager && (c.add || c.edit)) {
              $(n) .jqGrid('navSeparatorAdd', n.p.toppager)
            }
            if (c.add) {
              $(n) .jqGrid('navButtonAdd', b, {
                caption: c.addtext,
                title: c.addtitle,
                buttonicon: c.addicon,
                id: n.p.id + '_iladd',
                onClickButton: function () {
                  var q = $(n) .getOnlyOneSelectedItem(false);
                  if (q) {
                    var r = $(n) .getRowData(q);
                    c.addParams.initdata = r;
                    var o = n.p.colModel,
                    p;
                    for (p = 0; p < o.length; p++) {
                      if (o[p].editcopy == false) {
                        delete c.addParams.initdata[o[p].name]
                      } else {
                        if (o[p].editcopy == 'append') {
                          c.addParams.initdata[o[p].name] = r[o[p].name] + '_COPY'
                        }
                      }
                    }
                    $(n) .jqGrid('resetSelection')
                  } else {
                    c.addParams.initdata = {
                      id: ''
                    }
                  }
                  c.addParams.rowID = - (new Date() .getTime());
                  $(n) .jqGrid('addRow', c.addParams);
                  if (!c.addParams.useFormatter) {
                    $('#' + l + '_ilsave') .removeClass('ui-state-disabled');
                    $('#' + l + '_ilcancel') .removeClass('ui-state-disabled');
                    $('#' + l + '_iladd') .addClass('ui-state-disabled');
                    $('#' + l + '_iledit') .addClass('ui-state-disabled');
                    $('#' + l + '_toppager_ilsave') .removeClass('ui-state-disabled');
                    $('#' + l + '_toppager_ilcancel') .removeClass('ui-state-disabled');
                    $('#' + l + '_toppager_iladd') .addClass('ui-state-disabled');
                    $('#' + l + '_toppager_iledit') .addClass('ui-state-disabled')
                  }
                }
              });
              if (n.p.toppager) {
                $(n) .jqGrid('navButtonAdd', n.p.toppager, {
                  caption: c.addtext,
                  title: c.addtitle,
                  buttonicon: c.addicon,
                  id: e + '_iladd',
                  onClickButton: function () {
                    $('.ui-icon-plus', $(n.p.pager)) .click()
                  }
                })
              }
            }
            if (c.edit) {
              $(n) .jqGrid('navButtonAdd', b, {
                caption: c.edittext,
                title: c.edittitle,
                buttonicon: c.editicon,
                id: n.p.id + '_iledit',
                onClickButton: function () {
                  var o = $(n) .getOnlyOneSelectedItem();
                  if (o) {
                    if ($('#' + o, $(n)) .hasClass('not-editable-row')) {
                      if(!!c.notEditMsg){
                    	  alert(c.notEditMsg);
                      }else{
                    	  alert('提示：当前行项不可编辑');
                      }
                      return
                    }
                    $(n) .jqGrid('editRow', o, c.editParams);
                    $('#' + l + '_ilsave') .removeClass('ui-state-disabled');
                    $('#' + l + '_ilcancel') .removeClass('ui-state-disabled');
                    $('#' + l + '_iladd') .addClass('ui-state-disabled');
                    $('#' + l + '_iledit') .addClass('ui-state-disabled');
                    $('#' + l + '_toppager_ilsave') .removeClass('ui-state-disabled');
                    $('#' + l + '_toppager_ilcancel') .removeClass('ui-state-disabled');
                    $('#' + l + '_toppager_iladd') .addClass('ui-state-disabled');
                    $('#' + l + '_toppager_iledit') .addClass('ui-state-disabled')
                  }
                }
              });
              if (n.p.toppager) {
                $(n) .jqGrid('navButtonAdd', n.p.toppager, {
                  caption: c.edittext,
                  title: c.edittitle,
                  buttonicon: c.editicon,
                  id: e + '_iledit',
                  onClickButton: function () {
                    $('.ui-icon-pencil', $(n.p.pager)) .click()
                  }
                })
              }
            }
            if (c.save) {
              $(n) .jqGrid('navButtonAdd', b, {
                caption: c.savetext || '',
                title: c.savetitle || '保存编辑行项',
                buttonicon: c.saveicon,
                id: n.p.id + '_ilsave',
                onClickButton: function () {
                  var p = n.p.savedRow[0] ? n.p.savedRow[0].id : false;
                  if (p) {
                    var o = n.p.prmNames,
                    r = o.oper,
                    q = {
                    };
                    if ($('#' + $.jgrid.jqID(p), '#' + l) .hasClass('jqgrid-new-row')) {
                      c.addParams.addRowParams.extraparam[r] = o.addoper;
                      q = c.addParams.addRowParams;
                      q.extraparam.id = ''
                    } else {
                      if (!c.editParams.extraparam) {
                        c.editParams.extraparam = {
                        }
                      }
                      c.editParams.extraparam[r] = o.editoper;
                      q = c.editParams
                    }
                    q.extraparam['extraAttributes.dirtyRow'] = true;
                    if ($(n) .jqGrid('saveRow', p, q)) {
                      $(n) .jqGrid('showAddEditButtons')
                    }
                  }
                }
              });
              $('#' + l + '_ilsave') .addClass('ui-state-disabled');
              if (n.p.toppager) {
                $(n) .jqGrid('navButtonAdd', n.p.toppager, {
                  caption: c.savetext || '',
                  title: c.savetitle || '保存编辑行项',
                  buttonicon: c.saveicon,
                  id: e + '_ilsave',
                  onClickButton: function () {
                    $('.ui-icon-disk', $(n.p.pager)) .click()
                  }
                });
                $('#' + l + '_toppager_ilsave') .addClass('ui-state-disabled')
              }
            }
            if (c.cancel) {
              $(n) .jqGrid('navButtonAdd', b, {
                caption: c.canceltext || '',
                title: c.canceltitle || '放弃正在编辑行项',
                buttonicon: c.cancelicon,
                id: n.p.id + '_ilcancel',
                onClickButton: function () {
                  var p = n.p.savedRow[0] ? n.p.savedRow[0].id : false,
                  o = {
                  };
                  if (p) {
                    if ($('#' + $.jgrid.jqID(p), '#' + l) .hasClass('jqgrid-new-row')) {
                      o = c.addParams.addRowParams
                    } else {
                      o = c.editParams
                    }
                    $(n) .jqGrid('restoreRow', p, o)
                  }
                  $(n) .jqGrid('resetSelection');
                  $(n) .jqGrid('showAddEditButtons')
                }
              });
              if (n.p.toppager) {
                $(n) .jqGrid('navButtonAdd', n.p.toppager, {
                  caption: c.canceltext || '',
                  title: c.canceltitle || '放弃正在编辑行项',
                  buttonicon: c.cancelicon,
                  id: e + '_ilcancel',
                  onClickButton: function () {
                    $('.ui-icon-cancel', $(n.p.pager)) .click()
                  }
                })
              }
            }
            if (c.del) {
              $(n) .jqGrid('navSeparatorAdd', b);
              $(n) .jqGrid('navButtonAdd', b, {
                caption: c.deltext || '',
                title: c.deltitle || '删除所选行项',
                buttonicon: c.delicon,
                id: n.p.id + '_ildel',
                onClickButton: function () {
                  if (!$(this) .hasClass('ui-state-disabled')) {
                    var p = $(n) .getAtLeastOneSelectedItem();
                    if (p) {
                      $(n) .jqGrid('restoreRow', p);
                      if ($.isFunction(c.delfunc)) {
                        c.delfunc.call(n, p)
                      } else {
                        if (n.p.delurl == undefined || n.p.delurl == 'clientArray') {
                          $.each(p, function (r, u) {
                            if (Util.startWith(u, '-')) {
                              $(n) .jqGrid('delRowData', u)
                            } else {
                              var s = $(n) .find('#' + u);
                              var t = $(n) .jqGrid('getRowData', u);
                              for (var q in t) {
                                if (q == 'id' || Util.endWith(q, '.id') || q == '_arrayIndex') {
                                } else {
                                  if (q == 'extraAttributes.dirtyRow') {
                                    t[q] = true
                                  } else {
                                    if (q == 'extraAttributes.operation') {
                                      t[q] = 'remove'
                                    } else {
                                      t[q] = ''
                                    }
                                  }
                                }
                              }
                              $(n) .jqGrid('setRowData', u, t);
                              s.hide()
                            }
                            if (n.p.afterInlineDeleteRow) {
                              n.p.afterInlineDeleteRow.call($(n), u)
                            }
                          })
                        } else {
                          var p = $(n) .getAtLeastOneSelectedItem();
                          if (p) {
                            var o = Util.AddOrReplaceUrlParameter(n.p.delurl, 'ids', p.join(','));
                            $(n) .ajaxPostURL(o, function (q) {
                              $.each(p, function (r, t) {
                                var t = $.trim(t);
                                var s = $(n) .find('tr.jqgrow[id=\'' + t + '\']');
                                if (q.userdata && q.userdata[t]) {
                                  var u = q.userdata[t];
                                  s.pulsate({
                                    color: '#bf1c56',
                                    repeat: 3
                                  })
                                } else {
                                  $(n) .jqGrid('delRowData', t)
                                }
                              })
                            }, '确认批量删除所选记录吗？')
                          }
                        }
                      }
                      $(n) .jqGrid('showAddEditButtons')
                    } else {
                      $.jgrid.viewModal('#' + alertIDs.themodal, {
                        gbox: '#gbox_' + $.jgrid.jqID(n.p.id),
                        jqm: true
                      });
                      $('#jqg_alrt') .focus()
                    }
                  }
                  return false
                }
              });
              if (n.p.toppager) {
                $(n) .jqGrid('navSeparatorAdd', n.p.toppager);
                $(n) .jqGrid('navButtonAdd', n.p.toppager, {
                  caption: c.deltext || '',
                  title: c.deltitle || '删除所选行项',
                  buttonicon: c.delicon,
                  id: e + '_ildel',
                  onClickButton: function () {
                    $('.ui-icon-trash', $(n.p.pager)) .click()
                  }
                })
              }
            }
            if (c.restoreAfterSelect === true) {
              if ($.isFunction(n.p.beforeSelectRow)) {
                f = n.p.beforeSelectRow
              } else {
                f = false
              }
              n.p.beforeSelectRow = function (q, p) {
                var o = true;
                if (n.p.savedRow.length > 0 && n.p._inlinenav === true && (q !== n.p.selrow && n.p.selrow !== null)) {
                  if (n.p.selrow === c.addParams.rowID) {
                    $(n) .jqGrid('delRowData', n.p.selrow)
                  } else {
                    $(n) .jqGrid('restoreRow', n.p.selrow, c.editParams)
                  }
                  $(n) .jqGrid('showAddEditButtons')
                }
                if (f) {
                  o = f.call(n, q, p)
                }
                return o
              }
            }
            $(n) .jqGrid('showAddEditButtons')
          })
        },
        showAddEditButtons: function () {
          return this.each(function () {
            if (!this.grid) {
              return
            }
            var b = $.jgrid.jqID(this.p.id);
            $('#' + b + '_ilsave') .addClass('ui-state-disabled');
            $('#' + b + '_ilcancel') .addClass('ui-state-disabled');
            $('#' + b + '_iladd') .removeClass('ui-state-disabled');
            $('#' + b + '_iledit') .removeClass('ui-state-disabled');
            $('#' + b + '_toppager_ilsave') .addClass('ui-state-disabled');
            $('#' + b + '_toppager_ilcancel') .addClass('ui-state-disabled');
            $('#' + b + '_toppager_iladd') .removeClass('ui-state-disabled');
            $('#' + b + '_toppager_iledit') .removeClass('ui-state-disabled')
          })
        }
      });
      a = true
    },
    initAjax: function (b) {
      if (b == undefined) {
        b = $('body')
      }
      $('table[data-grid="table"],table[data-grid="items"]', b) .each(function () {
        Grid.initGrid($(this))
      })
    },
    initGrid: function (W, E) {
      if (!a) {
        Grid.initGridDefault()
      }
      var aj = $(W);
      if (aj.hasClass('ui-jqgrid-btable')) {
        return
      }
      if (aj.attr('id') == undefined) {
        aj.attr('id', 'grid_' + new Date() .getTime())
      }
      if (E == undefined && aj.data('gridOptions') == undefined) {
        alert('Grid options undefined');
        return
      }
      var x = $.extend(true, {
      }, aj.data('gridOptions'), E);
      var d = aj.attr('data-grid');
      var H = null;
      var ab = aj.attr('id') + '-context-menu-container';
      var X = null;
      var f = (d == 'items' ? false : true);
      var I = false; //(d == 'items' ? false : true);
      var L = $.extend(true, {
      }, $.jgrid.defaults, {
        formatter: {
          integer: {
            defaultValue: ''
          },
          number: {
            decimalSeparator: '.',
            thousandsSeparator: ',',
            decimalPlaces: 2,
            defaultValue: ''
          },
          currency: {
            decimalSeparator: '.',
            thousandsSeparator: ',',
            decimalPlaces: 2,
            defaultValue: ''
          }
        },
        cmTemplate: {
          sortable: d == 'items' ? false : true
        },
        viewsortcols: d == 'items' ? [
          true,
          'vertical',
          false
        ] : [
          true,
          'vertical',
          true
        ],
        altRows: d == 'items' ? false : true,
        hoverrows: d == 'items' ? false : true,
        pgbuttons: d == 'items' ? false : true,
        pginput: d == 'items' ? false : true,
        rowList: d == 'items' ? [
        ] : [
          10,
          15,
          20,
          50,
          100,
          200,
          500,
          1000,
          2000
        ],
        inlineNav: {
          add: (x.editurl && !!x.addable) || d == 'items' ? true : false,
          edit: (x.editurl && !!x.editable) || d == 'items' ? true : false,
          save: (x.editurl && !!x.saveable) || d == 'items' ? true : false,
          cancel: !!x.cancelable || d == 'items' ? true : false,
          del: x.delurl || d == 'items' ? true : false,
          search: !!x.searchable? true : false,
          restoreAfterSelect: d == 'items' ? false : true,
          notEditMsg: x.notEditMsg,
          addParams: {
            addRowParams: {
              extraparam: {
              },
              restoreAfterError: false,
              beforeSaveRow: function (c) {
                if (L.beforeInlineSaveRow) {
                  L.beforeInlineSaveRow.call(aj, c)
                }
              },
              aftersavefunc: function (av, aw) {
                if (L.editurl == 'clientArray') {
                  aj.jqGrid('resetSelection');
                  if (L.afterInlineSaveRow) {
                    L.afterInlineSaveRow.call(aj, av)
                  }
                  setTimeout(function () {
                    $('#' + H) .find('.ui-pg-div span.ui-icon-plus') .click()
                  }, 200);
                  return
                }
                var au = jQuery.parseJSON(aw.responseText);
                if (au.type == 'success' || au.type == 'warning') {
                  Global.notify(au.type, au.message);
                  var c = au.userdata.id;
                  aj.find('#' + av) .attr('id', c);
                  aj.jqGrid('resetSelection');
                  aj.jqGrid('setSelection', c);
                  if (L.afterInlineSaveRow) {
                    L.afterInlineSaveRow.call(aj, av)
                  }
                  setTimeout(function () {
                    $('#' + H) .find('.ui-pg-div span.ui-icon-plus') .click()
                  }, 200)
                } else {
                  if (au.type == 'failure' || au.type == 'error') {
                    Global.notify('error', au.message)
                  } else {
                    Global.notify('error', '数据处理异常，请联系管理员')
                  }
                }
              },
              errorfunc: function (au, av) {
                var c = jQuery.parseJSON(av.responseText);
                Global.notify('error', c.message)
              }
            }
          },
          editParams: {
            restoreAfterError: false,
            beforeSaveRow: function (c) {
              if (L.beforeInlineSaveRow) {
                L.beforeInlineSaveRow.call(aj, c)
              }
            },
            oneditfunc: function (ax) {
              var au = aj.jqGrid('getGridParam', 'iCol');
              var c = aj.jqGrid('getGridParam', 'colModel') [au];
              var aw = aj.find('tr#' + ax);
              var ay = aw.find('> td:eq(' + au + ')');
              var av = ay.find('input:visible:first');
              if (av.size() > 0 && av.attr('readonly') == undefined) {
                setTimeout(function () {
                  av.focus()
                }, 200)
              } else {
                aw.find('input:visible:enabled:first') .focus()
              }
            },
            aftersavefunc: function (au, ax) {
              var aw = true;
              if (L.editurl != 'clientArray') {
                var c = jQuery.parseJSON(ax.responseText);
                if (c.type == 'success' || c.type == 'warning') {
                  Global.notify(c.type, c.message)
                } else {
                  if (c.type == 'failure' || c.type == 'error') {
                    Global.notify('error', c.message);
                    aw = false
                  } else {
                    Global.notify('error', '数据处理异常，请联系管理员');
                    aw = false
                  }
                }
              }
              if (aw) {
                if (L.afterInlineSaveRow) {
                  L.afterInlineSaveRow.call(aj, au)
                }
                if (L.editurl != 'clientArray') {
                  var av = aj.find('tr.jqgrow[id=\'' + au + '\']') .next('tr');
                  if (av.size() > 0) {
                    var ay = av.attr('id');
                    aj.jqGrid('resetSelection');
                    aj.jqGrid('setSelection', ay);
                    setTimeout(function () {
                      $('#' + H) .find('.ui-pg-div span.ui-icon-pencil') .click()
                    }, 200)
                  }
                }
              }
            },
            errorfunc: function (au, av) {
              var c = jQuery.parseJSON(av.responseText);
              Global.notify('error', c.message)
            }
          }
        },
        filterToolbar: I,
        multiselect: f,
        contextMenu: false,
        columnChooser: false,
        exportExcelLocal: false,
        loadBeforeSend: function () {
          App.blockUI(aj.closest('.ui-jqgrid'))
        },
        subGridBeforeExpand: function () {
          var c = aj.closest('.ui-jqgrid-bdiv');
          c.css({
            height: 'auto'
          })
        },
        beforeProcessing: function (au) {
          if (au && au.content) {
            var c = 1000;
            $.each(au.content, function (av, aw) {
              if (aw.extraAttributes && aw.extraAttributes.dirtyRow) {
                aw.id = - (c++)
              }
            });
            if (au.totalElements >= (2147473647 - 10000)) {
              aj.jqGrid('setGridParam', {
                recordtext: '{0} - {1}　'
              })
            }
          }
        },
        loadComplete: function (av) {
          aj.jqGrid('showAddEditButtons');
          if (av.total == undefined && av.totalElements == undefined) {
            alert('表格数据格式不正确');
            return
          }
          if (av && av.content) {
            $.each(av.content, function (aw, ax) {
              aj.setRowData(ax.id, {
                _arrayIndex: aw
              })
            });
            if (av.totalElements >= (2147473647 - 10000)) {
              aj.closest('.ui-jqgrid') .find('.ui-pg-table td[id^=\'last_\']') .addClass('ui-state-disabled');
              aj.closest('.ui-jqgrid') .find('.ui-pg-table .ui-pg-input') .each(function () {
                $(this) .parent() .html($(this))
              })
            }
          }
          if (d == 'items' && L.inlineNav.add != false) {
            var _appendAddNullRow = 3;
            if (!!L.appendAddNullRow) {
              _appendAddNullRow = L.appendAddNullRow;
            }
            for (var au = 1; au <= _appendAddNullRow; au++) {
              aj.addRowData( - au, {
              })
            }
          }
          if (aa == 'enable' && L.contextMenu && X.find('li') .length > 0) {
            aj.find('tr.jqgrow') .each(function () {
              $(this) .contextmenu({
                target: '#' + ab,
                onItem: function (ay, ax) {
                  var aw = $(ax) .attr('role-idx');
                  X.find('a[role-idx="' + aw + '"]') .click();
                  return true
                }
              })
            })
          }
          if (L.footerLocalDataColumn) {
            $.each(L.footerLocalDataColumn, function (ax, az) {
              var ay = aj.jqGrid('sumColumn', az);
              var aw = [
              ];
              aw[az] = ay;
              aj.footerData('set', aw)
            })
          }
          if (aj.attr('data-selected')) {
            aj.jqGrid('setSelection', aj.attr('data-selected'), false)
          }
          var c = x.userLoadComplete;
          if (c) {
            c.call(aj, av)
          }
          $('[data-hover="dropdown"]', aj.closest('.ui-jqgrid')) .dropdownHover();
          App.unblockUI(aj.closest('.ui-jqgrid'))
        },
        beforeSelectRow: function (av) {
          if (L.inlineNav.restoreAfterSelect == false) {
            var au = aj.jqGrid('getGridParam', 'selrow');
            var c = aj.find('tr#' + au) .attr('editable');
            if (au && au != av && c == '1') {
              $('#' + H) .find('.ui-pg-div span.ui-icon-disk') .click();
              return false
            }
          }
          return true
        },
        onSelectRow: function (av, c, au) {
          aj.find('tr.jqgrow') .attr('tabindex', - 1);
          aj.find('tr.jqgrow[id=\'' + av + '\']') .attr('tabindex', 0);
          if (d == 'items') {
            $('#' + H) .find('.ui-pg-div span.ui-icon-pencil') .click()
          }
        },
        onCellSelect: function (au, c) {
          aj.jqGrid('setGridParam', {
            iCol: c
          })
        },
        ondblClickRow: function (aw, ay, au, ax) {
          var c = $('#' + H) .find('i.fa-edit') .parent('a');
          if (c.size() > 0) {
            c.click()
          } else {
            if (d != 'items') {
              var av = $('#' + H) .find('.ui-pg-div span.ui-icon-pencil');
              if (av.size() > 0) {
                av.click()
              } else {
                $('#' + H) .find('i.fa-credit-card') .parent('a') .click()
              }
            }
          }
          ax.stopPropagation()
        }
      }, x);
      if ($.isFunction(L.url)) {
        L.url = L.url.call(aj)
      }
      if (L.url == undefined) {
        L.url = aj.attr('data-url')
      }
      if (L.url == undefined) {
        L.datatype = 'local'
      }
      if (BooleanUtil.toBoolean(aj.attr('data-readonly'))) {
        L.inlineNav.add = false;
        L.inlineNav.edit = false;
        L.inlineNav.del = false
      }
      if (L.pager == undefined || L.pager) {
        H = aj.attr('id') + '_pager';
        $('<div id=\'' + H + '\'/>') .insertAfter(aj);
        L.pager = '#' + H
      } else {
        L.toppager = false
      }
      if (L.toppager) {
        L.toppager = '#' + aj.attr('id') + '_toppager'
      }
      if (L.treeGrid) {
        L.rownumbers = false
      }
      if (x.editurl == undefined && d == 'items') {
        L.editurl = 'clientArray'
      }
      if (x.delurl == undefined && d == 'items') {
        L.delurl = 'clientArray'
      }
      if (!!L.editurl && L.editurl == 'clientArray') {
        L.cellsubmit = L.editurl
      } else {
        L.cellurl = L.editurl
      }
      var T = 0;
      var S = false;
      var R = false;
      var U = [
      ];
      $.each(L.colModel, function (aw, c) {
        if (c.frozen) {
          S = true
        }
        c = $.extend(true, {
          editoptions: {
            rows: 1
          },
          searchoptions: {
            clearSearch: false,
            searchhidden: true,
            sopt: [
              'cn',
              'bw',
              'bn',
              'eq',
              'ne',
              'nc',
              'ew',
              'en'
            ],
            defaultValue: '',
            buildSelect: function (aD) {
              var aC = jQuery.parseJSON(aD);
              if (aC == null) {
                aC = aD
              }
              var aB = '<select>';
              aB += '<option value=\'\'></option>';
              for (var aA in aC) {
                aA = aA + '';
                aB += ('<option value=\'' + aA + '\'>' + aC[aA] + '</option>')
              }
              aB += '</select>';
              return aB
            }
          }
        }, c);
        if (c.name == 'id') {
          R = true
        }
        if (c.responsive) {
          if (c.hidden == undefined) {
            var av = $(window) .width();
            var az = c.responsive;
            if (az == 'sm') {
              if (av < 768) {
                c.hidden = true
              }
            } else {
              if (az == 'md') {
                if (av < 992) {
                  c.hidden = true
                }
              } else {
                if (az == 'lg') {
                  if (av < 1200) {
                    c.hidden = true
                  }
                }
              }
            }
          }
        }
        if (c.formatter == 'currency') {
          c = $.extend({
          }, {
            width: 80,
            align: 'right'
          }, c);
          c.formatoptions = $.extend({
          }, c.formatoptions, {
            decimalSeparator: '.',
            thousandsSeparator: ',',
            decimalPlaces: 2,
            prefix: '',
            defaultValue: ''
          });
          c.searchoptions = $.extend({
          }, c.searchoptions, {
            sopt: [
              'eq',
              'ne',
              'ge',
              'le',
              'gt',
              'lt'
            ]
          })
        }
        if (c.formatter == 'percentage') {
          c = $.extend(true, {
            width: 50,
            align: 'right'
          }, c);
          c.formatter = function (aC, aA, aD, aB) {
            if (aC) {
              return Math.round(aC * 10000) / 100 + '%'
            } else {
              return aC
            }
          }
        }
        if (c.stype == 'date' || c.sorttype == 'date' || c.formatter == 'date') {
          c = $.extend(true, {
            width: 150,
            fixed: true,
            align: 'center'
          }, c);
          c.searchoptions = $.extend({
          }, c.searchoptions, {
            sopt: [
              'bt',
              'eq',
              'ne',
              'ge',
              'le',
              'gt',
              'lt'
            ],
            dataInit: function (aB) {
              var aA = $(aB);
              $(aB) .daterangepicker($.extend(true, $.fn.daterangepicker.defaults, c.searchoptions.daterangepicker), function (aD, aC) {
                $(aB) .focus()
              });
              //$(aB) .off('focus')
            }
          });
          c.editoptions = $.extend(c.editoptions, {
            dataInit: function (aA) {
              if (c.editoptions.time) {
                $(aA) .datetimepicker({
                  language: 'zh-CN',
                  autoclose: true,
                  todayBtn: true,
                  minuteStep: 10
                })
              } else {
                $(aA) .datepicker({
                  language: 'zh-CN',
                  autoclose: true,
                  todayBtn: true,
                  format: 'yyyy-mm-dd'
                }).on('change', function (ev){
                    $(aA) .focus();
                });
              }
            }
          })
        }
        if (c.sorttype == 'number' || c.edittype == 'number' || c.formatter == 'number') {
          c = $.extend(true, {
            width: 60,
            align: 'right',
            formatoptions: {
              defaultValue: ''
            }
          }, c);
          c.searchoptions = $.extend({
          }, c.searchoptions, {
            sopt: [
              'eq',
              'ne',
              'ge',
              'le',
              'gt',
              'lt'
            ]
          })
        }
        if (c.name == 'id') {
          c = $.extend(true, {
            width: 80,
            align: 'center',
            title: false,
            formatter: function (aD, aB, aF, aC) {
              if (aD && aD.length > 5) {
                var aA = aD.length;
                var aE = aD.substring(aA - 5, aA);
                return '<span data=\'' + aD + '\' onclick=\'$(this).html($(this).attr("data"))\'>...' + aE + '</span>'
              } else {
                return '<span>' + aD + '</span>'
              }
            },
            frozen: true
          }, c);
          c.searchoptions = $.extend(true, c.searchoptions, {
            sopt: [
              'eq',
              'ne',
              'ge',
              'le',
              'gt',
              'lt'
            ]
          })
        }
        if (c.formatter == 'checkbox' && c.edittype == undefined) {
          c.edittype = 'checkbox'
        }
        if (c.edittype == 'checkbox' && c.formatter == undefined) {
          c.formatter = 'checkbox'
        }
        if (c.edittype == 'checkbox') {
          c = $.extend(true, {
            formatter: 'checkbox',
            stype: 'select'
          }, c);
          c.searchoptions.value = {
            '': '',
            'true': 'Y',
            'false': 'N'
          };
          c.editoptions.value = 'true:false'
        }
        if ((c.edittype == undefined || c.edittype == 'text' || c.edittype == 'select' || c.edittype == 'textarea') && (!c.stype || c.stype != 'selectAjax')) {
          var ay = c.editoptions.dataInit;
          c.editoptions = $.extend(c.editoptions, {
            dataInit: function (aB) {
              if (ay) {
                ay.call(this, aB)
              }
              var aA = $(aB);
              if (c.editoptions.updatable == false) {
                var aC = aj.jqGrid('getSelectedRowdata');
                if (aC && aC.id) {
                  aA.attr('disabled', true)
                } else {
                  if (!aA.attr('placeholder')) {
                    aA.attr('placeholder', '创建后不可修改');
                    aA.attr('title', '创建后不可修改')
                  }
                }
              }
              aA.removeClass('editable') .addClass('form-control') .attr('autocomplete', 'off') .css({
                width: '100%'
              });
              if (aA.is('input[type=\'text\']')) {
                aA.blur(function () {
                  aA.val($.trim(aA.val()))
                })
              }
              if (aA.is('select')) {
                aA.select2({
                  openOnEnter: false,
                  placeholder: '请选择...',
                  matcher: function (aE, aH) {
                    var aD = makePy(aH) + '';
                    var aG = aD.toUpperCase() .indexOf(aE.toUpperCase()) == 0;
                    var aF = aH.toUpperCase() .indexOf(aE.toUpperCase()) == 0;
                    return (aG || aF)
                  }
                })
              }
              if (c.editoptions.spellto) {
                aA.change(function () {
                  var aD = {
                  };
                  aD[c.editoptions.spellto] = Pinyin.getCamelChars($.trim(aA.val()));
                  aj.jqGrid('setEditingRowdata', aD)
                })
              }
            }
          })
        }
          if (c.stype == 'selectAjax') {
              var ay = c.editoptions.dataInit;
              c.editoptions = $.extend(c.editoptions, {
                  dataInit: function (aB) {
                      if (ay) {
                          ay.call(this, aB)
                      }
                      var aA = $(aB);
                      aA.removeClass('editable') .addClass('form-control') .attr('autocomplete', 'off') .css({
                          width: '100%'
                      });
                      if (aA.is('input[type=\'text\']')) {
                          aA.blur(function () {
                              aA.val($.trim(aA.val()))
                          })
                      }
                      aA.select2({
                          openOnEnter: false,
                          placeholder: '请选择...',
                          formatSearching: function(){
                              return '搜索中...';
                          },
                          ajax: {
                              url: c.searchoptions.optionsurl,
                              dataType: 'json',
                              quietMillis: 250,
                              results: function (data, page) {
                                  var results = $.map(data, function(n) {
                                      return {
                                          id : n.id,
                                          text : n.display
                                      };
                                  });
                                  return {
                                      results : results
                                  };
                              }
                          },
                          formatResult: function (item) { return item.text; }, // 选择结果中的显示
                          formatSelection: function (item) { return item.text; },  // 搜索列表中的显示
                          escapeMarkup: function (m) { return m; }
                      });
                      if (c.editoptions.spellto) {
                          aA.change(function () {
                              var aD = {
                              };
                              aD[c.editoptions.spellto] = aA.val(); //Pinyin.getCamelChars($.trim(aA.val()));
                              aj.jqGrid('setEditingRowdata', aD);
                          });
                      }
                  }
              })
          }
        if (c.formatter == 'checkbox') {
          c = $.extend(true, {
            width: 60,
            align: 'center',
            editoptions: {
              value: 'true:false'
            }
          }, c)
        }
        if (c.stype == 'select' || c.formatter == 'select') {
          c.searchoptions.sopt = [
            'eq',
            'ne'
          ];
          if (c.edittype == undefined) {
            c.edittype = 'select'
          }
          if (c.stype == undefined) {
            c.stype = 'select'
          }
          if (c.formatter == undefined) {
            c.formatter = 'select'
          }
          c.editoptions = $.extend(true, {
            optionsurl: c.searchoptions.optionsurl,
            value: c.searchoptions.value
          }, c.editoptions)
        }
        if (c.editoptions.optionsurl) {
          c.editoptions.value = Util.remoteSelectOptions(c.editoptions.optionsurl, aj.closest('.panel-content'))
        }
        if (typeof c.editoptions.value === 'function') {
          c.editoptions.value = c.editoptions.value.call(aj)
        }
        if (c.editoptions.value && c.searchoptions.value == undefined) {
          c.searchoptions.value = c.editoptions.value
        }
        if (!c.hidden) {
          if (c.width) {
            T += c.width
          } else {
            T += 300
          }
        }
        if (c.hasOwnProperty('searchoptions')) {
          var au = c.searchoptions;
          if (au.hasOwnProperty('defaultValue') && au.defaultValue != '') {
            var ax = c.index;
            if (ax == undefined) {
              ax = c.name
            }
            U[U.length++] = {
              field: ax,
              op: c.searchoptions.sopt[0],
              data: au.defaultValue
            }
          }
        }
        L.colModel[aw] = c
      });
      if (!R) {
        L.colModel.push({
          label: '流水号',
          name: 'id',
          hidden: true
        });
        if (L.colNames) {
          L.colNames.push('流水号')
        }
      }
      if (d == 'items') {
        L.colModel.push({
          name: 'extraAttributes.dirtyRow',
          hidden: true,
          hidedlg: true
        });
        if (L.colNames) {
          L.colNames.push('extraAttributes.dirtyRow')
        }
        L.colModel.push({
          name: '_arrayIndex',
          hidedlg: true,
          hidden: true
        });
        if (L.colNames) {
          L.colNames.push('_arrayIndex')
        }
        L.colModel.push({
          name: 'extraAttributes.operation',
          hidedlg: true,
          hidden: true
        });
        if (L.colNames) {
          L.colNames.push('extraAttributes.operation')
        }
      }
      var q = $('.theme-panel .grid-shrink-option') .val();
      if (q == 'true') {
        L.shrinkToFit = true
      } else {
        if (Number(T) > Number(aj.parent() .width())) {
          $.each(L.colModel, function (au, c) {
            if (!c.hidden) {
              if (c.width == undefined) {
                c.width = 300
              }
            }
          });
          L.shrinkToFit = false
        }
      }
      var ai = false;
      if (aj.closest('.ui-subgrid') .size() == 0 && d != 'items') {
        if (L.height == undefined || L.height == 'stretch') {
          ai = true;
          L.height = 0
        }
      }
      if (L.filterToolbar) {
        var C = L.postData || {
        };
        var A = {
        };
        if (C.hasOwnProperty('filters')) {
          A = JSON.parse(C.filters)
        }
        var n = [
        ];
        if (A.hasOwnProperty('rules')) {
          n = A.rules
        }
        $.each(U, function (au, c) {
          var av = false;
          $.each(n, function (aw, ax) {
            if (c.field == ax.field) {
              av = true;
              return
            }
          });
          if (av == false) {
            n.push(c)
          }
        });
        A.groupOp = 'AND';
        A.rules = n;
        C._search = true;
        C.filters = JSON.stringify(A)
      }
      if (L.jqPivot) {
        var Q = L.jqPivot;
        delete L.jqPivot;
        var m = L.url;
        L = {
          multiselect: false,
          pager: L.pager,
          shrinkToFit: false
        };
        aj.jqGrid('jqPivot', m, Q, L, {
          reader: 'content'
        });
        return
      } else {
        aj.jqGrid(L)
      }
      if (L.filterToolbar) {
        aj.jqGrid('filterToolbar', L.filterToolbar);
        var D = $('#jqgh_' + aj.attr('id') + '_rn');
        var P = '<a href="javascript:;" title="显示快速查询"><span class="ui-icon ui-icon-carat-1-s"></span></a>';
        var Y = '<a href="javascript:;" title="隐藏快速查询"><span class="ui-icon ui-icon-carat-1-n"></span></a>';
        if (L.subGrid || L.filterToolbar == 'hidden') {
          D.html(P);
          aj[0].toggleToolbar()
        } else {
          D.html(Y)
        }
        D.on('click', '.ui-icon-carat-1-s', function () {
          D.html(Y);
          aj[0].toggleToolbar()
        });
        D.on('click', '.ui-icon-carat-1-n', function () {
          D.html(P);
          aj[0].toggleToolbar()
        })
      }
      if (L.setGroupHeaders) {
        aj.jqGrid('setGroupHeaders', $.extend(true, {
          useColSpanStyle: true
        }, L.setGroupHeaders))
      }
      aj.bindKeys({
        upKey: false,
        downKey: false,
        onEnter: function (au) {
          if (au == undefined) {
            return
          }
          aj.find('tr.jqgrow') .attr('tabindex', - 1);
          var c = aj.find('tr.jqgrow[id=\'' + au + '\']');
          c.attr('tabindex', 0);
          if (L.editurl) {
            if (c.attr('editable') == '1') {
              M.find('.ui-pg-div span.ui-icon-disk') .click()
            } else {
              M.find('.ui-pg-div span.ui-icon-pencil') .click()
            }
            return false
          }
        }
      });
      if (L.pager) {
        var M = $(L.pager);
        var ar = Util.notSmallViewport();
        if (ar) {
          ar = (d == 'items' ? false : true)
        }
        var al = Util.notSmallViewport();
        if (al) {
          al = (d == 'items' ? false : true)
        }
        aj.jqGrid('navGrid', L.pager, {
          edit: false,
          add: false,
          del: false,
          refresh: ar && !!L.refreshable,
          search: ar && !!L.searchable,
          position: 'right',
          cloneToTop: true
        });
        if (L.columnChooser) {
          var e = {
            caption: '',
            buttonicon: 'ui-icon-battery-2',
            position: 'first',
            title: '设定显示列和顺序',
            onClickButton: function () {
              var c = aj.jqGrid('getGridParam', 'width');
              aj.jqGrid('columnChooser', {
                width: 470,
                done: function (au) {
                  if (au) {
                    this.jqGrid('remapColumns', au, true);
                    aj.jqGrid('setGridWidth', c, false)
                  } else {
                  }
                }
              })
            }
          };
          aj.jqGrid('navButtonAdd', L.pager, e);
          if (L.pager && L.toppager) {
            aj.jqGrid('navButtonAdd', L.toppager, e)
          }
        }
        if (Util.notSmallViewport() && L.exportExcelLocal && d != 'items') {
          var e = {
            caption: '',
            buttonicon: 'ui-icon-arrowthickstop-1-s',
            position: 'first',
            title: '导出当前显示数据',
            onClickButton: function () {
              aj.jqGrid('exportExcelLocal', L.exportExcelLocal)
            }
          };
          if (L.pager) {
            aj.jqGrid('navButtonAdd', L.pager, e);
            if (L.toppager) {
              aj.jqGrid('navButtonAdd', L.toppager, e)
            }
          }
        }
        if (L.pager && !!L.navButtonAddable) {
          var N = {
                caption: '',
                buttonicon: 'ui-icon-arrowstop-1-w',
                position: 'first',
                title: '收缩显示模式',
                onClickButton: function () {
                  var c = aj.jqGrid('getGridParam', 'width');
                  aj.jqGrid('destroyFrozenColumns');
                  aj.jqGrid('setGridWidth', c, true)
                }
              };
          aj.jqGrid('navButtonAdd', L.pager, N);
          if (L.toppager) {
            aj.jqGrid('navButtonAdd', L.toppager, N)
          }
        }
        if (L.gridDnD) {
          var am = $.extend(true, {
            dropbyname: true,
            beforedrop: function (c, av, au) {
              au.id = $(av.draggable) .attr('id');
              return au
            },
            autoid: function (c) {
              return c.id
            },
            drop_opts: {
              activeClass: 'ui-state-active',
              hoverClass: 'ui-state-hover',
              greedy: true
            },
            ondrop: function (c, ax, aA) {
              var aB = $('#' + this.id);
              var aC = aB.closest('.ui-subgrid');
              var aw = '';
              if (aC.size() > 0) {
                aw = aC.prev('.jqgrow') .attr('id')
              }
              var au = $(ax.draggable) .attr('id');
              var ay = {
              };
              var az = aB.jqGrid('getGridParam', 'parent');
              var av = aB.jqGrid('getGridParam', 'editurl');
              ay[az] = aw;
              ay.id = au;
              aB.ajaxPostURL(av, function () {
                return true
              }, false, {
                data: ay
              })
            }
          }, L.gridDnD);
          var u = {
            caption: '',
            buttonicon: 'ui-icon-arrow-4',
            position: 'first',
            title: '开启拖放移动模式',
            onClickButton: function () {
              var c = null;
              if (aj.closest('.ui-subgrid') .size() > 0) {
                $topGrid = aj.parent() .closest('.ui-jqgrid-btable:not(.ui-jqgrid-subgrid)');
                c = $topGrid.parent() .find('.ui-jqgrid-btable')
              } else {
                c = aj.parent() .find('.ui-jqgrid-btable')
              }
              var av = [
              ];
              c.each(function (aw, ax) {
                av.push('#' + $(this) .attr('id'))
              });
              var au = av.reverse();
              $.each(au, function (ax, aA) {
                var az = $.map(av, function (aB) {
                  return aB != aA ? aB : null
                });
                var aw = $(aA);
                if (az.length > 0) {
                  var ay = $.extend({
                    connectWith: az.join(',')
                  }, am);
                  aw.jqGrid('gridDnD', ay);
                }
                if (!aw.hasClass('ui-jqgrid-dndtable')) {
                  aw.addClass('ui-jqgrid-dndtable')
                }
              })
            }
          };
          if (L.pager) {
            aj.jqGrid('navButtonAdd', L.pager, u);
            if (L.toppager) {
              aj.jqGrid('navButtonAdd', L.toppager, u)
            }
          }
        }
        if (L.pager && (L.inlineNav.add || L.inlineNav.edit || L.inlineNav.del) && L.inlineNav != false) {
          aj.jqGrid('inlineNav', L.pager, L.inlineNav)
        }
        M.find('.navtable') .css('float', 'right');
        var w = M.find(' .navtable > tbody > tr');
        aj.jqGrid('navSeparatorAdd', L.pager, {
          position: 'first'
        });
        var h = $('<td></td>') .prependTo(w);
        var af = $('<div class="btn-group dropup btn-group-contexts"><button data-close-others="true" data-delay="1000" data-toggle="dropdown" class="btn btn-xs yellow dropdown-toggle" type="button"><i class="fa fa-cog"></i>  <i class="fa fa-angle-down"></i></button></div>');
        h.append(af);
        af.wrap('<div class="clearfix jqgrid-options"></div>');
        X = $('<ul role="menu" class="dropdown-menu"></ul>');
        X.appendTo(af);
        var O = [
        ];
        var G = [
        ];
        var z = [
        ];
        if (L.viewurl) {
          var s = $('<li><a href="javascript:;"><i class="fa fa-credit-card"></i> 查看详情</a></li>');
          s.children('a') .bind('click', function (ax) {
            Util.debug(ax.target + ':' + ax.type);
            ax.preventDefault();
            var az = aj.getOnlyOneSelectedItem();
            if (az) {
              var av = 'TBD';
              var ay = aj.jqGrid('getRowData', az);
              if (L.editcol) {
                av = ay[L.editcol];
                if (av.indexOf('<') > - 1 && av.indexOf('>') > - 1) {
                  av = $(av) .text()
                }
              } else {
                av = ay.id;
                if (av.indexOf('<span') > - 1) {
                  av = $(av) .text()
                }
              }
              var au = av.length;
              if (au > 8) {
                av = '...' + av.substring(au - 5, au)
              }
              var aw = Util.AddOrReplaceUrlParameter(L.viewurl, 'id', az);
              var c = aj.closest('.tabbable') .find(' > .nav');
              Global.addOrActiveTab(c, {
                title: '查看: ' + av,
                url: aw
              })
            }
          });
          G.push(s)
        }
        if (L.fullediturl || L.addurl) {
          var editUrl = L.fullediturl;
          if (L.addable == undefined || L.addable != false) {
            if (!!L.addurl)editUrl = L.addurl
            var ad = $('<li><a href="javascript:;" data-toggle="dynamic-tab" data-url="' + editUrl + '"><i class="fa fa-plus-square"></i> 新增数据</a></li>') .appendTo(X);
            O.push(ad);
            if (!!L.cloneable){
	            var at = $('<li><a href="javascript:;"><i class="fa fa-copy"></i> 克隆复制</a></li>');
	            at.children('a') .bind('click', function (aw) {
	              Util.debug(aw.target + ':' + aw.type);
	              aw.preventDefault();
	              if (id = aj.getOnlyOneSelectedItem()) {
	                var au = L.cloneurl ? L.cloneurl : editUrl;
	                var av = Util.AddOrReplaceUrlParameter(au, 'id', id);
	                av = av + ('&clone=true');
	                var c = aj.closest('.tabbable') .find(' > .nav');
	                Global.addOrActiveTab(c, {
	                  title: '克隆复制',
	                  url: av
	                })
	              }
	            });
	            G.push(at)
            }
          }
        }
        if (L.fullediturl) {
          if (L.editable == undefined || L.editable != false) {
              var r = $('<li><a href="javascript:;"><i class="fa fa-edit"></i> 编辑数据 <span class="badge badge-info">双击</span></a></li>');
              r.children('a') .bind('click', function (ax) {
                Util.debug(ax.target + ':' + ax.type);
                ax.preventDefault();
                var az = aj.getOnlyOneSelectedItem();
                if (az) {
                  var av;
                  var ay = aj.jqGrid('getRowData', az);
                  if (L.editcol) {
                    av = ay[L.editcol];
                    if (av && av.indexOf('<') > - 1 && av.indexOf('>') > - 1) {
                      av = $(av) .text()
                    }
                  } else {
                    av = ay.id;
                    if (av.indexOf('<span') > - 1) {
                      av = $(av) .text()
                    }
                  }
                  if (av == undefined) {
                    av = 'TBD'
                  }
                  var au = av.length;
                  if (au > 8) {
                    av = '...' + av.substring(au - 5, au)
                  }
                  var aw = Util.AddOrReplaceUrlParameter(L.fullediturl, 'id', az);
                  var c = aj.closest('.tabbable') .find(' > .nav');
                  Global.addOrActiveTab(c, {
    //                title: '编辑: ' + av,
                    title: '编辑',
                    url: aw
                  })
                }
              });
              G.push(r)
          }
        }
        if (L.operations) {
          var p = [
          ];
          L.operations.call(aj, p);
          $.each(p, function () {
            var c = $(this);
            var au = c.attr('data-position');
            if (au == 'multi') {
              z.push(c)
            } else {
              if (au == 'single') {
                G.push(c)
              } else {
                O.push(c)
              }
            }
          })
        }
        if (O.length > 0) {
          $.each(O, function () {
            var ax = $(this);
            var au = ax.children('a');
            ax.appendTo(X);
            if (Util.notSmallViewport()) {
              var aw = au.children('i') .attr('class');
              var c = '';
              if (ax.attr('data-text') == 'show') {
                c = au.text()
              }
              var av = $('<button type="button" class="btn btn-xs blue" style="margin-left:5px"><i class="' + aw + '"></i> ' + c + '</button>') .appendTo(af.parent());
              av.attr('title', ax.text());
              av.click(function () {
                au.click()
              })
            }
          })
        }
        if (G.length > 0) {
          if (X.find('li') .size() > 0) {
            X.append('<li class="divider"></li>')
          }
          $.each(G, function () {
            var av = $(this);
            var c = av.children('a');
            av.appendTo(X);
            if (Util.notSmallViewport() && av.attr('data-toolbar') == 'show') {
              var c = av.children('a');
              var au = c.clone();
              au.addClass('btn btn-xs blue');
              au.css({
                'margin-left': '5px'
              });
              au.appendTo(af.parent());
              au.click(function (aw) {
                c.click();
                aw.preventDefault();
                return false
              })
            }
          })
        }
        if (z.length > 0) {
          if (X.find('li') .size() > 0) {
            X.append('<li class="divider"></li>')
          }
          $.each(z, function () {
            var av = $(this);
            av.appendTo(X);
            if (Util.notSmallViewport() && av.attr('data-toolbar') == 'show') {
              var c = av.children('a');
              var au = c.clone();
              au.addClass('btn btn-xs blue');
              au.css({
                'margin-left': '5px'
              });
              au.appendTo(af.parent());
              au.click(function (aw) {
                c.click();
                aw.preventDefault();
                return false
              })
            }
          })
        }
        if (X.find('li') .length == 0) {
          af.hide()
        } else {
          X.find('li > a') .each(function (c) {
            $(this) .attr('role-idx', c)
          })
        }
        if (!Util.notSmallViewport()) {
          var o = M.find(' > .ui-pager-control > .ui-pg-table > tbody');
          var ak = o.find(' > tr > td') .eq(0);
          ak.attr('align', 'left');
          $('<tr/>') .appendTo(o) .append(ak);
          var ak = o.find(' > tr > td') .eq(0);
          ak.attr('align', 'left');
          $('<tr/>') .appendTo(o) .append(ak);
          var ak = o.find(' > tr > td') .eq(0);
          ak.find('> .ui-pg-table') .css('float', 'left');
          M.height('75px')
        } else {
          M.find('#' + M.attr('id') + '_left') .css({
            width: '150px'
          })
        }
        if (L.pager && L.toppager) {
          var t = aj.attr('id') + '_toppager';
          var K = $('#' + t);
          /**
          aj.jqGrid('navSeparatorAdd', '#' + t, {
            position: 'first'
          });
          **/
          var b = $('div#' + t + ' .ui-pg-table > tbody > tr');
          var F = b.find('#' + t + '_right');
          var aq = M.find('.jqgrid-options') .parent('td') .clone(true);
          aq.prependTo(F.find('> .ui-pg-table > tbody > tr'));
          aq.find('.btn-group') .removeClass('dropup');
          F.prependTo(F.parent());
          var g = b.find('#' + t + '_left');
          g.css({
            width: '150px'
          });
          g.appendTo(g.parent());
          var V = g.find('.ui-paging-info');
          V.css('float', 'right');
          K.width(M.width());
          if (!Util.notSmallViewport()) {
            K.hide()
          }
          if (aj.closest('.ui-subgrid') .size() > 0) {
            $(L.pager) .hide()
          }
        }
        var aa = $('.theme-panel .context-menu-option') .val();
        if (aa == 'enable' && L.contextMenu && X.find('li') .length > 0) {
          var ac = $('<div id="' + ab + '" class="context-menu"></div>');
          X.clone() .appendTo(ac);
          $('body') .append(ac);
          aj.unbind('contextmenu')
        }
      }
      var J = W.jqGrid('getGridParam', 'colModel');
      for (var ag = 0; ag < J.length; ag++) {
        var ap = J[ag];
        if (ap.tooltips) {
          var ah = $('<span class="glyphicon glyphicon-exclamation-sign tooltipster"  title="' + ap.tooltips + '"></span>');
          var v = ap.index ? ap.index : ap.name;
          var ae = $('.ui-jqgrid-sortable[id*=\'' + v + '\']', y);
          if (ae.size() > 0) {
            ae.prepend(ah);
            ah.tooltipster({
              contentAsHTML: true,
              offsetY: 5,
              theme: 'tooltipster-punk'
            })
          }
        }
      }
      var ao = L.editrulesurl;
      if (ao == undefined && L.editurl && L.editurl != 'clientArray') {
        ao = L.editurl.substring(0, L.editurl.lastIndexOf('/')) + '/buildValidateRules.json'
      }
      if (ao) {
        var y = $('#gbox_' + W.attr('id') + '  .ui-jqgrid-labels');
        y.ajaxJsonUrl(ao, function (ax) {
          var au = W.jqGrid('getGridParam', 'colModel');
          for (var aw in ax) {
            for (var av = 0; av < au.length; av++) {
              var aA = au[av];
              if ((aA.index && aA.index == aw) || (aA.name && aA.name == aw)) {
                au[av].editrules = ax[aw];
                if (au[av].editrules.required == undefined) {
                  au[av].editrules.required = false
                }
                delete aA.editrules.timestamp;
                if (aA.editrules.tooltips && aA.tooltips == undefined) {
                  var az = $('<span class="glyphicon glyphicon-exclamation-sign tooltipster"  title="' + aA.editrules.tooltips + '"></span>');
                  var ay = $('.ui-jqgrid-sortable[id*=\'' + aw + '\']', y);
                  if (ay.size() > 0) {
                    ay.prepend(az);
                    az.tooltipster({
                      contentAsHTML: true,
                      offsetY: 5,
                      theme: 'tooltipster-punk'
                    })
                  }
                  delete aA.editrules.tooltips
                }
                break
              }
            }
          }
        })
      }
      if (ai) {
        var B = $('#gbox_' + W.attr('id'));
        var an = 0;
        var Z = 'div.ui-jqgrid-titlebar,div.ui-jqgrid-hdiv,div.ui-jqgrid-pager,div.ui-jqgrid-toppager,div.ui-jqgrid-sdiv';
        B.find(Z) .filter(':visible') .each(function () {
          an += $(this) .outerHeight()
        });
        an = an + 4;
        var l = $(window) .height() - aj.closest('.ui-jqgrid') .offset() .top - an;
        if (l < 300) {
          l = 300
        }
        aj.setGridHeight(l, true)
      }
//      Grid.refreshWidth();

        // table.ui-jqgrid-btable:visible 失效
        if ($('table.ui-jqgrid-btable:visible').length == 0 && aj.closest('.modal-dialog').length!=0){
            setTimeout(function(){
                Grid.refreshWidth();
            }, 40);
        } else {
            Grid.refreshWidth();
        }
      if (S) {
        aj.jqGrid('setFrozenColumns')
      }
      aj.jqGrid('gridResize', {
        minWidth: 500,
        minHeight: 100
      });
      // 表格所有数据都加载完成而且其他的处理也都完成时触发此事件，排序，翻页同样也会触发此事件
      if (!!L.useGridComplete){
        setTimeout("Grid.useGridComplete('#" + $(aj).attr('id') + "')",200);
      } else {
        setTimeout("Grid.useGridComplete('#" + $(aj).attr('id') + "')",200);
      }
      aj.closest('.ui-jqgrid') .find('.ui-resizable-s') .dblclick(function () {
        var c = aj.jqGrid('getGridParam', 'height');
        aj.jqGrid('setGridHeight', aj.height() + 17)
      }) .attr('title', '鼠标双击可自动扩展显示区域')
    },
    // 刷新表格适应父级div，由于父级div自适应在表格自适应之后造成的
    useGridComplete: function(grid_id){
      var divWidth = $(grid_id).closest('[class|=\"col-md\"]').width();
      var gridWidth = $(grid_id).width();
      if (divWidth - gridWidth > 100 && !!$(grid_id).closest('.modal-content')){
        //Grid.refreshWidth();
        $(grid_id).closest('.modal-content').find('.btn-reload').trigger('click');
      }
    },
    refreshWidth: function (divWidth) {
      $('table.ui-jqgrid-btable:visible') .each(function () {
        var c = $(this);
        var d = c.jqGrid('getGridParam', 'width');
        var b = c.closest('div.ui-jqgrid') .parent('div') .width();
        if (d != b) {
          c.jqGrid('setGridWidth', b);
          var e = $(this) .jqGrid('getGridParam', 'groupHeader');
          if (e) {
            c.jqGrid('destroyGroupHeader');
            c.jqGrid('setGroupHeaders', e)
          }
        }
      });
    },
    initRecursiveSubGrid: function (f, c, e, h) {
      var b = $('<table data-grid=\'table\' class=\'ui-jqgrid-subgrid\'/>') .appendTo($('#' + f));
      var d = b.closest('table.ui-jqgrid-btable') .data('gridOptions');
      d.url = Util.AddOrReplaceUrlParameter(d.url, 'search[\'EQ_' + e + '\']', c);
      d.inlineNav = $.extend(true, {
        addParams: {
          addRowParams: {
            extraparam: {
            }
          }
        }
      }, d.inlineNav);
      d.inlineNav.addParams.addRowParams.extraparam[e] = c;
      d.parent = e;
      if (h) {
        d.postData = {
        }
      }
      b.data('gridOptions', d);
      Grid.initGrid(b);
      var g = $('#' + f) .parent() .closest('.ui-jqgrid-btable:not(.ui-jqgrid-subgrid)');
      if (d.gridDnD && g.hasClass('ui-jqgrid-dndtable')) {
        $('#' + f) .find('.ui-icon-arrow-4:first') .click()
      }
    },
    initSubGrid: function (e, d, c, d) {
        var b;
        if (!!d){
            b = $('<table data-grid=\'items\' class=\'ui-jqgrid-subgrid\'/>') .appendTo($('#' + e));
        } else {
            b = $('<table data-grid=\'table\' class=\'ui-jqgrid-subgrid\'/>') .appendTo($('#' + e));
        }
      b.data('gridOptions', c);
      Grid.initGrid(b)
    }
  }
}();
