var Util = function () {
  var b = {
  };
  var a = null;
  return {
    traverseTreeToKeyValue: function (d, c) {
      if (c == undefined) {
        c = {
        }
      }
      $.each(d, function (e, f) {
        c[f.id] = f.name;
        if (typeof (f.children) === 'object') {
          Util.traverseTreeToKeyValue(f.children, c)
        }
      });
      return c
    },
    remoteSelectOptions: function (c, e) {
      if (e == false) {
        var d;
        $.ajax({
          async: false,
          type: 'GET',
          url: c,
          dataType: 'json',
          success: function (f) {
            d = {
              '': ' '
            };
            $.each(f, function (g, h) {
              d[h.id] = h.display
            })
          }
        });
        return d
      } else {
        if (e == undefined || $(e) .size() == 0) {
          e = $('body')
        }
        if (e.data('CacheUrlDatas') == undefined || e.data('CacheUrlDatas') == null) {
          e.data('CacheUrlDatas', {
          })
        }
        var d = e.data('CacheUrlDatas') [c];
        if (d == undefined) {
          $.ajax({
            async: false,
            type: 'GET',
            url: c,
            dataType: 'json',
            success: function (f) {
              d = {
                '': ' '
              };
              $.each(f, function (g, h) {
                d[h.id] = h.display
              });
              e.data('CacheUrlDatas') [c] = d
            }
          })
        }
        return d
      }
    },
    getCacheDatas: function (c, e) {
      if (e == undefined) {
        e = $('body')
      }
      if (e.data('CacheUrlDatas') == undefined) {
        e.data('CacheUrlDatas', {
        })
      }
      var d = e.data('CacheUrlDatas') [c];
      if (d == undefined) {
        $.ajax({
          async: false,
          type: 'GET',
          url: c,
          dataType: 'json',
          success: function (f) {
            d = f;
            e.data('CacheUrlDatas') [c] = d
          }
        })
      }
      return d
    },
    getCacheSelectOptionDatas: function (c, e) {
      if (e == undefined) {
        e = $('body')
      }
      if (e.data('CacheSelectOptionDatas') == undefined) {
        e.data('CacheSelectOptionDatas', {
        })
      }
      var d = e.data('CacheSelectOptionDatas') [c];
      if (d == undefined) {
        $.ajax({
          async: false,
          type: 'GET',
          url: c,
          dataType: 'json',
          success: function (g) {
            var f = g;
            if (g.content) {
              f = g.content
            }
            d = {
            };
            $.each(f, function (h, j) {
              d[j.id] = j.display
            });
            e.data('CacheSelectOptionDatas') [c] = d
          }
        })
      }
      return d
    },
    getCacheEnumsByType: function (c, e) {
      if (e == undefined) {
        e = $('body')
      }
      if (e.data('CacheEnumDatas') == undefined) {
        $.ajax({
          async: false,
          type: 'GET',
          url: WEB_ROOT + '/pub/data/enums.json?name='+c,
          dataType: 'json',
          success: function (k) {
            for (var j in k) {
              var g = k[j];
              var f = {
                '': ''
              };
              for (var h in g) {
                f[h] = g[h]
              }
              k[j] = f
            }
            e.data('CacheEnumDatas', k)
          }
        })
      }
      var d = e.data('CacheEnumDatas') [c];
      if (d == undefined) {
        alert('错误的枚举数据类型：' + c);
        d = {
        }
      }
      return d
    },
    getCacheDictDatasByType: function (d, g) {
      if (g == undefined) {
        g = $('body')
      }
      var h = g.data('CacheDictDatas');
      if (h == undefined) {
        $.ajax({
          async: false,
          type: 'GET',
          url: WEB_ROOT + '/pub/data!dictDatas.json',
          dataType: 'json',
          success: function (j) {
            h = j;
            g.data('CacheDictDatas', h)
          }
        })
      }
      var e = g.data('CacheDictDatas') [d];
      if (e == undefined) {
        var c = {
        };
        var f = true;
        $.each(h, function (j, k) {
          if (k.parentPrimaryKey == d) {
            f = false;
            c[k.primaryKey] = k.primaryValue
          }
        });
        e = c;
        g.data('CacheDictDatas') [d] = e;
        if (f) {
          alert('错误的数据字典类型：' + d)
        }
      }
      return e
    },
    assert: function (d, c) {
      if (!d) {
        alert(c)
      }
    },
    assertNotBlank: function (d, c) {
      if (d == undefined || $.trim(d) == '') {
        Util.assert(false, c);
        return
      }
    },
    debug: function (c) {
      if (window.console) {
        console.log(c)
      } else {
        alert(c)
      }
    },
    hashCode: function (e) {
      var d = 0;
      if (e.length == 0) {
        return d
      }
      for (i = 0; i < e.length; i++) {
        var c = e.charCodeAt(i);
        d = ((d << 5) - d) + c;
        d = d & d
      }
      if (d < 0) {
        d = - d
      }
      return d
    },
    AddOrReplaceUrlParameter: function (h, c, g) {
      var f = h.indexOf('?');
      if (f == - 1) {
        h = h + '?' + c + '=' + g
      } else {
        var j = h.split('?');
        var k = j[1].split('&');
        var e = '';
        var d = false;
        for (i = 0; i < k.length; i++) {
          e = k[i].split('=') [0];
          if (e == c) {
            k[i] = c + '=' + g;
            d = true;
            break
          }
        }
        if (!d) {
          h = h + '&' + c + '=' + g
        } else {
          h = j[0] + '?';
          for (i = 0; i < k.length; i++) {
            if (i > 0) {
              h = h + '&'
            }
            h = h + k[i]
          }
        }
      }
      return h
    },
    subStringBetween: function (f, h, d) {
      var g = new RegExp(h + '.*?' + d, 'img');
      var e = new RegExp(h, 'g');
      var c = new RegExp(d, 'g');
      return f.match(g) .join('=') .replace(e, '') .replace(c, '') .split('=')
    },
    split: function (c) {
      return c.split(',')
    },
    isArrayContainElement: function (e, d) {
      var c = e.length;
      while (c--) {
        if (e[c] === d) {
          return true
        }
      }
      return false
    },
    getTextWithoutChildren: function (c) {
      return $(c) [0].childNodes[0].nodeValue.trim()
    },
    findClosestFormInputByName: function (d, c) {
      return $(d) .closest('form') .find('[name=\'' + c + '\']')
    },
    setInputValIfBlank: function (c, d) {
      if ($.trim($(c) .val()) == '') {
        $(c) .val(d)
      }
    },
    startWith: function (d, e) {
      var c = new RegExp('^' + e);
      return c.test(d)
    },
    endWith: function (e, c) {
      var d = new RegExp(c + '$');
      return d.test(e)
    },
    objectToString: function (c) {
      var d = '';
      $.each(c, function (f, e) {
        d += (f + ':' + e + ';\n')
      });
      return d
    },
    parseFloatValDefaultZero: function (d) {
      if ($.trim($(d) .val()) == '') {
        return 0
      } else {
        var c = parseFloat($.trim($(d) .val()));
        if (isNaN(c)) {
          return 0
        } else {
          return c
        }
      }
    },
    notSmallViewport: function () {
      var c = $(window) .width();
      return c >= 768
    },
    init: function () {
      $.fn.plot = function (g) {
        var f = $(this);
        if (f.attr('chart-plot-done')) {
          return
        }
        f.css('min-height', '100px');
        var c = $.extend(true, g || {
        }, f.data('plotOptions') || {
        });
        var d = c.data;
        var e = c.options;
        $.each(d, function (j, k) {
          if (typeof k.data === 'function') {
            k.data = k.data.call(f)
          }
        });
        e = $.extend(true, {
          pointhover: true,
          series: {
            lines: {
              show: true,
              lineWidth: 2,
              fill: true,
              fillColor: {
                colors: [
                  {
                    opacity: 0.05
                  },
                  {
                    opacity: 0.01
                  }
                ]
              }
            },
            points: {
              show: true
            },
            shadowSize: 2
          },
          grid: {
            hoverable: true,
            clickable: true,
            tickColor: '#eee',
            borderWidth: 0
          },
          colors: [
            '#d12610',
            '#37b7f3',
            '#52e136'
          ],
          xaxis: {
            timezone: 'browser',
            monthNames: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月'
            ]
          }
        }, e);
        $.plot(f, d, e);
        if (c.pointhover) {
          var h = $('#plothoverTooltip');
          if (h.size() == 0) {
            h = $('<div id=\'plothoverTooltip\'></div>') .css({
              position: 'absolute',
              display: 'none',
              border: '1px solid #333',
              padding: '4px',
              color: '#fff',
              'border-radius': '3px',
              'background-color': '#333',
              opacity: 0.8,
              'min-width': '50px',
              'text-align': 'center'
            }) .appendTo('body')
          }
          f.bind('plothover', function (k, m, j) {
            if (j) {
              var l = j.datapoint[1];
              h.html(l) .css({
                top: j.pageY,
                left: j.pageX + 15
              }) .fadeIn(200)
            } else {
              h.hide()
            }
          })
        }
        f.attr('chart-plot-done', true)
      },
      $.fn.barcodeScanSupport = function (d) {
        var c = $(this);
        var e = c.attr('id');
        if (e == undefined) {
          e = 'barcode_' + new Date() .getTime();
          c.attr('id', e)
        }
        if (c.attr('placeholder') == undefined) {
          c.attr('placeholder', '支持条码扫描输入')
        }
        c.closest('.controls') .append('<span class="help-block">提示：若无条码枪，可手工输入数据按回车键.</span>');
        c.focus(function (f) {
          c.select()
        }) .click(function (f) {
          if (window.wst) {
            window.wst.startupBarcodeScan(e)
          }
        }) .keydown(function (f) {
          if (d && d.onEnter) {
            if (f.keyCode === 13) {
              d.onEnter.call(c)
            }
          }
        }) .bind('barcode', function (f, g) {
          c.val(g);
          var h = jQuery.Event('keydown');
          h.keyCode = 13;
          c.trigger(h);
          c.select()
        })
      },
      $.fn.treeselect = function (d) {
        var h = $(this);
        if (h.attr('treeselect-done')) {
          return this
        }
        if (BooleanUtil.toBoolean(h.attr('readonly'))) {
          return this
        }
        d = $.extend({
          url: h.attr('data-url'),
          position: h.attr('data-position')
        }, h.data('treeOptions') || {
        }, d);
        var g = new Date() .getTime();
        h.attr('id', g);
        var f = h.closest('.panel-content');
        var e = $('<i class="fa fa-angle-double-down btn-toggle"></i>') .insertBefore(h);
        var c = h.parent() .children();
        c.wrapAll('<div class="input-icon right"></div>');
        var j = $('<div style="z-index: 990; display: none; position: absolute; background-color: #FFFFFF; border: 1px solid #DDDDDD"></div>');
        j.appendTo(f);
        var n = [
        ];
        n.push('<div role="navigation" class="navbar navbar-default" style="border: 0px; margin:0px">');
        n.push('<div class="collapse navbar-collapse navbar-ex1-collapse" style="padding: 0">');
        n.push('<form role="search" class="navbar-form navbar-left">');
        n.push('<div class="form-group" style="border-bottom: 0px">');
        n.push('<input type="text" name="keyword" class="form-control input-small">');
        n.push('</div>');
        n.push('<button class="btn blue" type="submit">查询</button>');
        n.push('</form>');
        n.push('<ul class="nav navbar-nav navbar-right">');
        n.push('<li><a href="javascript:;" class="btn-open-all" style="padding-left: 0">展开</li>');
        n.push('<li><a href="javascript:;" class="btn-close-all" style="padding-left: 0">收拢</a></li>');
        n.push('<li><a href="javascript:;" class="btn-clear" style="padding-left: 0;padding-right: 20px">清除</a></li>');
        n.push('</ul>');
        n.push('</div>');
        n.push('</div>');
        var k = $(n.join('')) .appendTo(j);
        var m = $('<div style="max-height: 300px;overflow: auto"></div>') .appendTo(j);
        var l = $('<ul class="ztree"></ul>') .appendTo(m);
        l.attr('id', 'ztree_' + g);
        l.attr('id-for', g);
        l.attr('data-url', d.url);
        $.fn.zTree.init(l, {
          callback: {
            onClick: function (p, r, q) {
              if (d.callback.onSingleClick) {
                var o = d.callback.onSingleClick.call(this, p, r, q);
                if (o == undefined || o == true) {
                  j.hide();
                  e.removeClass('fa-angle-double-up');
                  e.addClass('fa-angle-double-down')
                }
              }
              p.stopPropagation();
              p.preventDefault();
              return false
            }
          }
        }, Util.getCacheDatas(d.url));
        h.click(function () {
          var q = $.fn.zTree.getZTreeObj(l.attr('id'));
          q.cancelSelectedNode();
          if ($.trim(h.val()) != '') {
            var p = q.getNodesByParamFuzzy('name', h.val());
            for (var r = 0, o = p.length; r < o; r++) {
              var t = p[r];
              q.selectNode(t)
            }
          }
          j.children('.ztree') .hide();
          l.show();
          var s = h.outerWidth();
          if (s < 330) {
            s = 330
          }
          j.css({
            width: s + 'px'
          }) .slideDown('fast');
          j.position($.extend(true, {
            my: 'right top',
            at: 'right bottom',
            of: h.parent('div')
          }, d.position));
          e.removeClass('fa-angle-double-down');
          e.addClass('fa-angle-double-up')
        }) .keydown(function () {
          return false
        });
        e.click(function (o) {
          if ($(this) .hasClass('fa-angle-double-down')) {
            h.click()
          } else {
            e.removeClass('fa-angle-double-up');
            e.addClass('fa-angle-double-down');
            j.hide()
          }
          o.stopPropagation();
          o.preventDefault()
        });
        k.find('form') .submit(function (t) {
          var u = k.find('input[name=\'keyword\']') .val();
          var q = $.fn.zTree.getZTreeObj(l.attr('id'));
          q.cancelSelectedNode();
          var p = q.getNodesByParamFuzzy('name', u);
          for (var r = 0, o = p.length; r < o; r++) {
            var s = p[r];
            q.selectNode(s, true)
          }
          t.stopPropagation();
          t.preventDefault();
          return false
        });
        k.find('.btn-open-all') .click(function (p) {
          var o = $.fn.zTree.getZTreeObj(l.attr('id'));
          o.expandAll(true);
          p.stopPropagation();
          p.preventDefault();
          return false
        });
        k.find('.btn-close-all') .click(function (p) {
          var o = $.fn.zTree.getZTreeObj(l.attr('id'));
          o.expandAll(false);
          p.stopPropagation();
          p.preventDefault();
          return false
        });
        k.find('.btn-clear') .click(function (o) {
          if (d.callback.onClear) {
            d.callback.onClear.call(this, o)
          }
          j.hide();
          e.removeClass('fa-angle-double-up');
          e.addClass('fa-angle-double-down');
          o.stopPropagation();
          o.preventDefault();
          return false
        });
        $(document) .on('mousedown', function (q) {
          var r = j;
          var p = h;
          var o = q.target.tagName;
          if (o == 'HTML') {
            return
          }
          if (!(p.is(q.target) || p.find(q.target) .length || r.is(q.target) || r.find(q.target) .length)) {
            r.hide()
          }
        });
        h.attr('treeselect-done', true)
      },
      $.fn.ajaxGetUrl = function (d, f, e) {
        Util.assertNotBlank(d, 'URL参数不能为空');
        $('#btn-profile-param') .hide();
        var c = $(this);
        c.addClass('ajax-get-container');
        c.attr('data-url', d);
        c.css('min-height', '100px');
        App.blockUI(c);

        $.ajax({
          type: 'GET',
          cache: false,
          url: d,
          data: e,
          dataType: 'html',
          success: function (h) {
            c.empty();
            if (h=='{"statusCode":301,"message":"会话超时,请重新登陆!","callbackType":"refresh","type":"failure"}')
            	window.location.href=WEB_ROOT+'/login.htm?redirect='+window.location.href;
            var g = $('<div class=\'ajax-page-inner\'/>') .appendTo(c);
            g.hide();

            g.html(h);
            if (f) {
              f.call(c, h)
            }
            Page.initAjaxBeforeShow(g);
            g.show();
            g.trigger('afterAjaxPageShow');
            FormValidation.initAjax(g);
            Page.initAjaxAfterShow(g);
            Grid.initAjax(g);
            App.unblockUI(c);
          },
          error: function (j, g, h) {
            c.html('<h4>页面内容加载失败</h4>' + j.responseText);
            App.unblockUI(c)
          },
          statusCode: {
        	301: function () {
        		Global.notify('error', 'URL: ' + d, '会话超时，请重新登录')
        	},
            403: function () {
              Global.notify('error', 'URL: ' + d, '未授权访问')
            },
            404: function () {
              Global.notify('error', '页面未找到：' + d + '，请联系管理员', '请求资源未找到')
            }
          }
        });
        return c
      };
      $.fn.ajaxJsonUrl = function (d, f, e) {
        Util.assertNotBlank(d);
        var c = $(this);
        App.blockUI(c);
        $.ajax({
          traditional: true,
          type: 'GET',
          cache: false,
          url: d,
          dataType: 'json',
          data: e,
          success: function (g) {
            if (g.type == 'error' || g.type == 'warning' || g.type == 'failure') {
              Global.notify('error', g.message)
            } else {
              if (f) {
                f.call(c, g)
              }
              json = g
            }
            App.unblockUI(c)
          },
          error: function (j, g, h) {
            Global.notify('error', '数据请求异常，请联系管理员', '系统错误');
            App.unblockUI(c)
          },
          statusCode: {
            403: function () {
              Global.notify('error', 'URL: ' + d, '未授权访问')
            },
            404: function () {
              Global.notify('error', '请尝试刷新页面试试，如果问题依然请联系管理员', '请求资源未找到')
            }
          }
        })
      };
      $.fn.ajaxJsonSync = function (d, f, g) {
        Util.assertNotBlank(d);
        var c = $(this);
        App.blockUI(c);
        var e = null;
        $.ajax({
          traditional: true,
          type: 'GET',
          cache: false,
          async: false,
          url: d,
          data: f,
          contentType: 'application/json',
          dataType: 'json',
          success: function (h) {
            if (h.type == 'error' || h.type == 'warning' || h.type == 'failure') {
              Global.notify('error', h.message)
            } else {
              if (g) {
                g.call(c, h)
              }
              e = h
            }
            App.unblockUI(c)
          },
          error: function (k, h, j) {
            Global.notify('error', '数据请求异常，请联系管理员', '系统错误');
            App.unblockUI(c)
          },
          statusCode: {
            403: function () {
              Global.notify('error', 'URL: ' + d, '未授权访问')
            },
            404: function () {
              Global.notify('error', '请尝试刷新页面试试，如果问题依然请联系管理员', '请求资源未找到')
            }
          }
        });
        return e
      };
      $.fn.ajaxPostURL = function (d, g, f, c) {
        Util.assertNotBlank(d);
        if (f == undefined) {
          f = '确认提交数据？'
        }
        if (f) {
          if (!confirm(f)) {
            return false
          }
        }
        var c = $.extend({
          data: {
          }
        }, c);
        var e = $(this);
        App.blockUI(e);
        $.post(encodeURI(d), c.data, function (h, l) {
          App.unblockUI(e);
          if (!h.type) {
            Global.notify('error', h, '系统处理异常');
            return
          }
          if (h.type == 'success' || h.type == 'warning') {
            Global.notify(h.type, h.message);
            if (g) {
              g.call(e, h)
            }
          } else {
            if (h.userdata) {
              var k = [
              ];
              for (var j in h.userdata) {
                k.push(h.userdata[j])
              }
              Global.notify('error', k.join('<br>'), h.message)
            } else {
              Global.notify('error', h.message)
            }
            if (c.failure) {
              c.failure.call(e, h)
            }
          }
        }, 'json')
      };
//      $.fn.ajaxPostForm = function (g, f, d, c) {
//        if (f) {
//          if (!confirm(f)) {
//            return false
//          }
//        }
//        var c = $.extend({
//          data: {
//          }
//        }, c);
//        var e = $(this);
//        App.blockUI(e);
//        e.ajaxSubmit({
//          dataType: 'json',
//          method: 'post',
//          success: function (h) {
//            App.unblockUI(e);
//            if (h.type == 'success') {
//              if (g) {
//                g.call(e, h)
//              }
//            } else {
//              if (h.type == 'failure') {
//                bootbox.alert(h.message);
//                if (d) {
//                  d.call(e, h)
//                }
//              } else if (h.type == 'error') {
//                Global.notify(h.type, h.message);
//                if (d) {
//                    d.call(e, h)
//                }
//              } else {
//                bootbox.alert('表单处理异常，请联系管理员');
//                if (d) {
//                  d.call(e, h)
//                }
//              }
//            }
//          },
//          error: function (l, k, h) {
//            App.unblockUI(e);
//            var j = jQuery.parseJSON(l.responseText);
//            if (j.type == 'error') {
//              bootbox.alert(j.message)
//            } else {
//              bootbox.alert('表单处理异常，请联系管理员')
//            }
//            if (d) {
//              d.call(e, j)
//            }
//          }
//        })
//      };
        $.fn.ajaxPostForm = function (b) {
            var e = b.success;
            var a = b.failure;
            var d = b.confirmMsg;
            if (d) {
                if (!confirm(d)) {
                    return false
                }
            }
            var b = $.extend({
                data: {
                }
            }, b);
            var c = $(this);
            App.blockUI(c);
            c.ajaxSubmit({
                dataType: 'json',
                method: 'post',
                success: function (f) {
                    App.unblockUI(c);
                    if (f.type == 'success') {
                        if (e) {
                            e.call(c, f)
                        }
                    } else {
                        if (f.type == 'failure' || f.type == 'error') {
                            Global.notify(f.type, f.message);
                            if (a) {
                                a.call(c, f)
                            }
                        } else {
                            Global.notify('error', f, '表单处理异常，请联系管理员');
                            if (a) {
                                a.call(c, f)
                            }
                        }
                    }
                },
                error: function (j, h, f) {
                    App.unblockUI(c);
                    var g = jQuery.parseJSON(j.responseText);
                    if (g.type == 'error') {
                        bootbox.alert(g.message)
                    } else {
                        Global.notify('error', g, '表单处理异常，请联系管理员')
                    }
                    if (a) {
                        a.call(c, g)
                    }
                }
            })
        };
      $.fn.popupDialog = function (l) {

//          // 打开时删除所有隐藏的
//          $('.modal-dailog-cls:hidden').remove();

        var f = $(this);
        var c = f.attr('href');
        if (c == undefined) {
          c = f.attr('data-url')
        }
        var g = f.attr('title');
        if (g == undefined) {
          g = '对话框'
        }
        var k = f.attr('modal-size');
        if (k == undefined) {
          k = 'modal-full'
        } else {
          if (k == 'auto') {
            k = ''
          } else {
            k = 'modal-' + k
          }
        }
        var l = $.extend({
          url: c,
          postData: {
          },
          title: g,
          size: k
        }, l);
        Util.assertNotBlank(l.url);
//        var j = 'dialog_level_' + $('modal:visible') .size();
//        var d = $('#' + j);
//        if (d.length == 0) {
        var j = 'dialog_level_0';
        var hasModal = false;
        $.each($('.modal-dailog-cls'), function(e, f){
          if (hasModal == false){
              var testUrl = $('#modal-dialog-url', $(this)).val();
              var urlArray = !testUrl ? [] : testUrl.split('?');
              var lurlArray = l.url.split('?');
              if (urlArray[0] == lurlArray[0]){
                  j = f.id;
                  hasModal = true;
              } else {
                  j = 'dialog_level_'+(e+1);
              }
          }
        });
        var d = $('#' + j);
        // if (d.length == 0) {
        if (!hasModal) {
          var e = [
          ];
          e.push('<div id="' + j + '" class="modal fade modal-dailog-cls" tabindex="-1" role="basic" aria-hidden="true" >');
          e.push('<div class="modal-dialog ' + l.size + '">');
          e.push('<div class="modal-content">');
          e.push('<div class="modal-header">');
          e.push('<button type="button" class="close modal-dialog-close"  data-dismiss="modal" aria-hidden="true"></button>');
          e.push('<input type="hidden" id="modal-dialog-url" value="' + l.url + '"/>');
          e.push('<button type="button" class="close btn-reload" style="margin-left:10px;margin-right:10px;margin-top:-3px!important;height:16px;width:13px;background-image: url(\'' + WEB_ROOT + '/resources/assets/img/portlet-reload-icon.png\')!important;"></button>');
          e.push('<h4 class="modal-title">' + l.title + '</h4>');
          e.push('</div>');
          e.push('<div class="modal-body">');
          e.push('</div>');
          e.push('<div class="modal-footer hide">');
          e.push('<button type="button" class="btn default" data-dismiss="modal">关闭窗口</button>');
          e.push('</div>');
          e.push('</div>');
          e.push('</div>');
          e.push('</div>');
          var h = f.closest('.panel-content');
          if (h == undefined) {
            h = $('.page-container:first')
          }
          var d = $(e.join('')) .appendTo($('body'));
          d.find(' > .modal-dialog > .modal-content > .modal-body') .ajaxGetUrl(l.url, false, l.postData);
          d.modal();
          d.find(' > .modal-dialog > .modal-content > .modal-header > .btn-reload') .click(function () {
            d.find(' > .modal-dialog > .modal-content > .modal-body') .ajaxGetUrl(d.find(' > .modal-dialog > .modal-content > .modal-header > #modal-dialog-url').val(), false, l.postData)
          });

            d.find(' > .modal-dialog > .modal-content > .modal-header > .modal-dialog-close') .click(function () {
                d.modal('hide');
                $('#' + j).find('.ajax-page-inner').html('');
            });
        } else {
          d.find(' > .modal-dialog > .modal-content > .modal-header > .modal-title').html(l.title);
          if (f.attr('modal-size') != 'auto'){
              d.find(' > .modal-dialog').removeClass('auto');
              d.find(' > .modal-dialog').addClass('modal-full', true);
          } else {
              d.find(' > .modal-dialog').addClass('auto');
              d.find(' > .modal-dialog').removeClass('modal-full');
          }
          d.find(' > .modal-dialog > .modal-content > .modal-body') .ajaxGetUrl(l.url, false, l.postData);
          d.find(' > .modal-dialog > .modal-content > .modal-header > #modal-dialog-url').val(l.url);
          d.modal('show')
        }
        if (l.callback) {
          d.data('callback', l.callback)
        }


          // table.ui-jqgrid-btable:visible 失效
//          if ($('table.ui-jqgrid-btable:visible').length == 0){
//              console.log('reload-click');
//              d.find('.btn-reload').trigger('click');
//          }
      }
    }
  }
}();
var BooleanUtil = function () {
  return {
    toBoolean: function (b) {
      if (b) {
        var a = $.type(b);
        if (a === 'string' && (b == 'true' || b == '1' || b == 'y' || b == 'yes' || b == 'readonly' || b == 'checked' || b == 'enabled' || b == 'enable' || b == 'selected')) {
          return true
        } else {
          if (a === 'number' && (b == 1)) {
            return true
          }
        }
      }
      return false
    }
  }
}();
var MathUtil = function () {
  return {
    mul: function (arg1, arg2) {
      if (arg1 == undefined) {
        arg1 = 0
      }
      var m = 0,
      s1 = arg1.toString(),
      s2 = arg2.toString();
      try {
        m += s1.split('.') [1].length
      } catch (e) {
      }
      try {
        m += s2.split('.') [1].length
      } catch (e) {
      }
      return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
    },
    div: function (arg1, arg2, fix) {
      if (fix == undefined) {
        fix = 2
      }
      var t1 = 0,
      t2 = 0,
      r1,
      r2;
      try {
        t1 = arg1.toString() .split('.') [1].length
      } catch (e) {
      }
      try {
        t2 = arg2.toString() .split('.') [1].length
      } catch (e) {
      }
      with (Math) {
        r1 = Number(arg1.toString() .replace('.', ''));
        r2 = Number(arg2.toString() .replace('.', ''));
        return MathUtil.mul((r1 / r2), pow(10, t2 - t1)) .toFixed(fix)
      }
    },
    add: function (arg1, arg2) {
      if (arg1 == undefined) {
        arg1 = 0
      }
      if (arg2 == undefined) {
        arg2 = 0
      }
      var r1,
      r2,
      m,
      c;
      try {
        r1 = arg1.toString() .split('.') [1].length
      } catch (e) {
        r1 = 0
      }
      try {
        r2 = arg2.toString() .split('.') [1].length
      } catch (e) {
        r2 = 0
      }
      c = Math.abs(r1 - r2);
      m = Math.pow(10, Math.max(r1, r2));
      if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
          arg1 = Number(arg1.toString() .replace('.', ''));
          arg2 = Number(arg2.toString() .replace('.', '')) * cm
        } else {
          arg1 = Number(arg1.toString() .replace('.', '')) * cm;
          arg2 = Number(arg2.toString() .replace('.', ''))
        }
      } else {
        arg1 = Number(arg1.toString() .replace('.', ''));
        arg2 = Number(arg2.toString() .replace('.', ''))
      }
      return MathUtil.div((arg1 + arg2), m)
    },
    sub: function (arg1, arg2) {
      return MathUtil.add(arg1, - Number(arg2))
    }
  }
}();
function scanBarcodeCallback(b, a) {
  $('#' + b) .trigger('barcode', [
    a
  ])
};
