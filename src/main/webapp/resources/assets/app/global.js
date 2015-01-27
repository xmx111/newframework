var Global = function () {
  var a;
  return {
    init: function () {
      $.fn.daterangepicker.defaults = {
        opens: (App.isRTL() ? 'left' : 'right'),
        startDate: moment() .subtract('days', 29),
        endDate: moment(),
        dateLimit: {
          days: 365
        },
        showDropdowns: true,
        showWeekNumbers: true,
        timePicker: false,
        timePickerIncrement: 1,
        timePicker12Hour: true,
        ranges: {
          '今天': [
            moment(),
            moment()
          ],
          '昨天': [
            moment() .subtract('days', 1),
            moment() .subtract('days', 1)
          ],
          '最近一周': [
            moment() .subtract('days', 6),
            moment()
          ],
          '最近一月': [
            moment() .subtract('days', 29),
            moment()
          ],
          '最近一季度': [
            moment() .subtract('days', 89),
            moment()
          ],
          '本月': [
            moment() .startOf('month'),
            moment() .endOf('month')
          ],
          '上月': [
            moment() .subtract('month', 1) .startOf('month'),
            moment() .subtract('month', 1) .endOf('month')
          ]
        },
        buttonClasses: [
          'btn'
        ],
        applyClass: 'green',
        cancelClass: 'default',
        format: 'YYYY-MM-DD',
        separator: ' ～ ',
        locale: {
          applyLabel: '确定',
          fromLabel: '从',
          toLabel: '到',
          customRangeLabel: '自由选取',
          daysOfWeek: [
            '日',
            '一',
            '二',
            '三',
            '四',
            '五',
            '六'
          ],
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
          ],
          firstDay: 1
        }
      };
      (function (g) {
        (jQuery.browser = jQuery.browser || {
        }) .mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(g) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(g.substr(0, 4))
      }) (navigator.userAgent || navigator.vendor || window.opera);
      if ($.fn.editable) {
        $.fn.editable.defaults.inputclass = 'form-control'
      }
      $(window) .resize(function () {
        if ($.fn.jqGrid) {
          Grid.refreshWidth()
        }
      });
      toastr.options = {
        tapToDismiss: false,
        closeButton: true,
        positionClass: 'toast-bottom-right',
        extendedTimeOut: 600000
      };
      $('#a-lock-screen') .click(function () {
        $.backstretch([WEB_ROOT+'/resources/assets/img/bg/1.jpg',
                       WEB_ROOT+'/resources/assets/img/bg/2.jpg',
                       WEB_ROOT+'/resources/assets/img/bg/3.jpg',
                       WEB_ROOT+'/resources/assets/img/bg/4.jpg'], {
          fade: 1000,
          duration: 8000
        });
        $('.page-container,.header,.footer') .hide();
        $('#form-unlock') .find(':text') .focus() .val('');
        $('#page-lock') .show();
        $('#form-unlock') .find('input') .first() .focus()
      });
      $('#form-unlock') .submit(function (g) {
        g.preventDefault();
          $(this).ajaxPostForm({
              success: function () {
                  $('body').data('backstretch').destroy();
                  $('#page-lock').hide();
                      $('.page-container,.header,.footer').fadeIn(2000);
                  $(this).find('input[name=\'password\']').val('');
                  $('#btn-dashboard').click()
              },
              confirmMsg: false
          });
          return false
      });
      $('#a-logout') .click(function () {
        bootbox.setDefaults({
          locale: 'zh_CN'
        });
        bootbox.confirm('确认注销登录吗？', function (g) {
          if (g) {
            window.location.href = ctx + '/logout'
          }
        })
      });
      $('#trigger_passwd') .click(function (g) {
        $(this) .popupDialog({
          size: 'auto'
        });
        g.preventDefault();
        return false
      });
      var e = $('.page-sidebar .menu-root li > a.ajaxify');
      $.each(e, function () {
        var g = $(this);
        g.attr('data-py', makePy(g.text()))
      });
      $('.sidebar-search input[name="search"]') .autocomplete({
        autoFocus: true,
        source: function (h, g) {
          return g(e.map(function () {
            var l = h.term.toLowerCase();
            var i = $(this);
            var k = i.text();
            var j = i.attr('data-py') .toLowerCase();
            if (j.indexOf(l) > - 1 || k.indexOf(l) > - 1) {
              return {
                label: $.trim(k),
                link: i,
                href: i.attr('href')
              }
            }
          }))
        },
        minLength: 1,
        select: function (h, i) {
          var g = i.item;
          $(this) .parent() .find('.submit') .data('link', g.link);
          g.link.click();
          return true
        }
      }) .focus(function () {
        $(this) .select()
      }) .val('') .focus();
      $('.sidebar-search input[name="search"]') .parent() .find('.submit') .click(function () {
        var g = $(this) .data('link');
        if (g) {
          g.click()
        }
        return false
      });
      var b = $('.page-sidebar .menu-root a[data-code="MMOBILE"]') .parent() .find('ul li > a.ajaxify');
      var d = $('#dropdown-menu-mobile');
      $.each(b, function () {
        var g = $(this);
        d.find('> .divider-menus') .after(g.closest('li') .clone(true))
      });
      $.address.change(function (g) {
        App.scrollTop();
        var h = $('.page-sidebar li > a.ajaxify[rel="address:' + g.value + '"]');
        if (h.size() > 0) {
          Global.addOrActivePanel(h);
          var k = $('.page-sidebar-menu') .find('li');
          k.removeClass('active');
          var n = h.parent('li');
          n.addClass('active');
          var i = n.closest('ul.sub-menu');
          while (i.size() > 0) {
            i.show();
            var o = i.parent('li');
            o.addClass('open');
            o.find(' > a > span.arrow') .addClass('open');
            i = o.closest('ul.sub-menu')
          }
        } else {
          if (g.value == '/' || g.value == WEB_ROOT+'/main/dashboard.htm') {
            var m = $('#layout-nav');
            var l = m.next('.tab-content');
            var j = $('#tab_content_dashboard');
            if (j.is(':empty')) {
              $('#tab_content_dashboard') .ajaxGetUrl(WEB_ROOT+'/main/dashboard.htm')
            }
            j.show();
            l.find('> div') .not(j) .hide();
            m.find('> li:not(.btn-group)') .remove();
            m.append('<li><i class="fa fa-home"></i> <a href="javascript:;">首页</a></li>')
          } else {
            var h = $('a[rel=\'address:' + g.value + '\']');
            h.attr('href', WEB_ROOT + g.value);
            Global.addOrActivePanel(h, WEB_ROOT + g.value)
          }
        }
      });
      $('div#portlet-layout > .portlet-title-layout > .tools > .reload') .click(function (k) {
        Util.debug(k.target + ':' + k.type);
        var g = $('div#portlet-layout') .find(' > .portlet-body > .portlet-tabs');
        var j = g.find('> .nav > li.active > a');
        var i = g.find(j.attr('href'));
        var h = j.attr('data-url');
        i.ajaxGetUrl(h)
      });
      jQuery('body') .on('dblclick', '.portlet-title', function (g) {
        $(this) .find('.tools .collapse,.tools .expand') .click()
      });
      jQuery('body') .on('click', '.btn-cancel', function (j) {
        var h = $(this) .closest('.tab-closable');
        if (h.length > 0) {
          h.parent('.tab-content') .parent() .find(' > .nav li.active .close') .click()
        } else {
          var i = $('#layout-nav');
          var g = i.find(' > .btn-group > ul.dropdown-menu');
          g.find('> li.active > a > .badge') .click()
        }
      });
      jQuery('body') .on('click', '#layout-nav >  li > .btn-close-active', function (j) {
        var i = $('#layout-nav');
        var h = i.next('.tab-content') .find('.panel-content:visible') .attr('data-url');
        var g = i.find(' > .btn-group > ul.dropdown-menu');
        g.find('a[href=\'' + h + '\']') .find('.badge') .click()
      });
      jQuery('body') .on('click', '#layout-nav >  li > .btn-dashboard', function (g) {
        $.address.value(WEB_ROOT+'/main/dashboard.htm')
        return false;
      });
      jQuery('body') .on('click', '#portlet-layout > .portlet-body > .portlet-tabs > .nav > li > a', function (k) {
        Util.debug(k.target + ':' + k.type);
        k.preventDefault();
        var i = $(this);
        var g = i.attr('data-url');
        var h = $('.page-sidebar-menu') .find('a[href=\'' + g + '\']');
        $('.page-sidebar-menu') .find('li') .removeClass('active');
        h.parent('li') .addClass('active');
        var j = i.text();
        if (h.length > 0) {
          var l = h.parent('li') .parent('.sub-menu');
          while (l.length > 0) {
            j = l.prev('a') .children('span.title') .text() + ' > ' + j;
            l = l.parent('li') .parent('.sub-menu')
          }
        }
        $('div#portlet-layout > .portlet-title > .caption') .html(j)
      });
      jQuery('body') .on('click', 'ul.nav > li.tools > .reload', function (k) {
        Util.debug(k.target + ':' + k.type);
        k.preventDefault();
        var g = $(this) .closest('.nav');
        var j = g.find('li.active > a');
        var i = g.closest('.tabbable') .find(j.attr('href'));
        if (j.attr('data-url')) {
          var h = j.attr('data-url');
          i.ajaxGetUrl(h, function () {
            i.find('.tabbable:first > .nav > li.active > a') .click()
          })
        } else {
          if (jQuery() .jqGrid) {
            i.find('table.ui-jqgrid-btable') .each(function () {
              var l = $(this);
              l.trigger('clearToolbar');
              var m = l.attr('data-url');
              l.jqGrid('setGridParam', {
                datatype: 'json',
                url: m
              }) .trigger('reloadGrid')
            })
          }
        }
      });
      jQuery('body') .on('click', '.portlet-title > .tools > .reload', function (i) {
        Util.debug(i.target + ':' + i.type);
        i.preventDefault();
        var h = $(this) .closest('.ajaxify');
        if (h.attr('data-url')) {
          var g = h.attr('data-url');
          h.ajaxGetUrl(g)
        }
      });
      $(document) .off('click.tab.data-api');
      $(document) .on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (l) {
//          $('div.tabbable > .tab-content > .active').removeClass('active');
        Util.debug(l.target + ':' + l.type);
        l.preventDefault();
        var k = $(this);
        if (k.hasClass('disabled') || k.attr('data-tab-disabled') == 'true') {
          return false
        }
        var g = k.attr('href');
        var j = new RegExp('^#');
        if (k.attr('data-url') == undefined && !j.test(g)) {
          k.attr('data-url', g);
          var m = 'tab_content_' + Util.hashCode(g);

            if ($('#' + m).length != 0) {
                $('#' + m).remove();
            }

          k.attr('href', '#' + m);
          var i = k.closest('div.tabbable,div.portlet-tabs') .find(' > div.tab-content');
          if (i.length == 0) {
            i = $('<div class="tab-content">') .appendTo(k.closest('div.tabbable'))
          }
          var h = i.find('div#' + m);
          if (h.length == 0) {
            h = $('<div id="' + m + '" class="tab-pane active">') .appendTo(i)
          }
          if (h.is(':empty')) {
            h.ajaxGetUrl(g, function () {
              h.append('<div style="clear:both"></div>');
              h.find('.tabbable:first > .nav > li.active > a') .click()
            })
          }
        }
        $(this) .tab('show');
        $(this) .attr('click-idx', new Date() .getTime());
        Grid.refreshWidth()
      });
      $('.page-sidebar, .header') .on('click', '.sidebar-toggler', function (g) {
        Grid.refreshWidth()
      });
      jQuery('body') .on('click', 'a[data-toggle="modal-ajaxify"]', function (g) {
        Util.debug(g.target + ':' + g.type);
        g.preventDefault();
        $(this) .popupDialog()
      });
      jQuery('body') .on('click', 'a[data-toggle="modal-ajaxnew"]', function (g) {
          Util.debug(g.target);
          g.preventDefault();
          $(this) .popupDialog()
        });
      $('#fileupload') .fileupload({
        autoUpload: false,
        dataType: 'json',
        url: WEB_ROOT + '/config/sys/attachmentfile/uploadMulti.json'
      });
      var f = $('#fileupload');
      var c = null;
      jQuery('body') .on('click', 'a.btn-fileinput-trigger', function (h) {
        c = $(this);
        var g = c.attr('data-category');
        if (g) {
          f.find('input[name=\'attachmentName\']') .val('_attachment_' + g)
        }
        f.find('tbody.files') .empty()
      });
      jQuery('#fileupload-dialog') .on('click', '.modal-footer .btn-add', function (i) {
        var h = c.parent() .find('table.table-filelist');
        if (h.size() == 0) {
          h = $('<table role="presentation" class="table table-striped table-filelist clearfix"><tbody class="files"></tbody></table>') .insertAfter(c)
        }
        var g = h.find('tbody.files');
        $('#fileupload') .find('tbody.files tr.template-download') .each(function () {
          g.append($(this) .clone(true))
        });
        $('#fileupload-dialog') .find('.modal-footer [data-dismiss="modal"]') .click()
      });
      jQuery('body') .on('click', 'a[data-toggle="panel"],button[data-toggle="panel"]', function (h) {
        Util.debug(h.target + ':' + h.type);
        h.preventDefault();
        var g = $(this);
        Global.addOrActivePanel(g)
      });
      jQuery('body') .on('click', 'a[data-toggle="dynamic-tab"]', function (i) {
          // 清理toastr
          toastr.clear();
        Util.debug(i.target + ':' + i.type);
        i.preventDefault();
        var h = $(this);
        var g = h.closest('.tabbable') .find(' > .nav');
        var j = h.attr('data-title');
        if (j == undefined) {
          j = h.text()
        }
        Global.addOrActiveTab(g, {
          title: j,
          url: h.attr('data-url')
        })
      });
      jQuery('body') .on('click', '.btn-post-url', function (i) {
        Util.debug(i.target + ':' + i.type);
        i.preventDefault();
        var h = $(this);
        var g = null;
        if (h.is('button')) {
          g = h.attr('data-url')
        } else {
          if (h.is('a')) {
            g = h.attr('href')
          }
        }
        var j = h.data('success');
        if (j == undefined) {
          j = function (k) {
            var m = h.attr('data-ajaxify-reload');
            if (m != 'false') {
              $(m) .each(function () {
                $(this) .ajaxGetUrl($(this) .attr('data-url'))
              })
            }
            var l = h.attr('data-close-container');
            if (l != 'false') {
              Global.autoCloseContainer(h, k)
            }
          }
        }
        h.ajaxPostURL(g, j, h.attr('data-confirm'))
      });
      jQuery('body') .on('click', '.select-table-checkbox', function (h) {
        var g = $(this) .find('.table-checkbox :checkbox');
        if (!(g.is(h.target) || g.find(h.target) .length)) {
          g.attr('checked', !g.is(':checked'))
        }
      });
      /**
      $('#') .ajaxJsonUrl(WEB_ROOT + '/profile/simple-param-val!params.json', function (g) {
        a = g
      })
      **/
    },
    findUserProfileParams: function (b) {
      return a[b]
    },
    setUserProfileParams: function (b, c) {
      a[b] = c
    },
    autoCloseContainer: function (i, g) {
      var d = $(i);
      if (d.attr('data-prevent-close') == undefined || d.attr('data-prevent-close') == 'false') {
        var e = d.closest('.tabbable-secondary');
        if (e.length == 0) {
          var j = d.closest('.modal');
          if (j.size() > 0) {
            j.modal('hide')
          } else {
            var l = d.closest('.tab-closable');
            if (l.length > 0) {
              l.parent('.tab-content') .parent() .find(' > .nav li.active .close') .click()
            } else {
              var k = d.closest('.panel-content');
              var b = k.attr('data-url');
              if (b.indexOf('bpm-task!show') > - 1) {
                $('#layout-nav .btn-close-active') .click()
              } else {
                k.ajaxGetUrl(b)
              }
            }
          }
        } else {
          if (e.find(' > ul.nav > li') .not('.tools') .size() < 2) {
            var l = d.closest('.tab-closable');
            if (l.length > 0) {
              l.parent('.tab-content') .parent() .find(' > .nav li.active .close') .click()
            } else {
              $('#layout-nav .btn-close-active') .click()
            }
          } else {
            var c = d.closest('form') .find('input[name=\'id\']') .val();
            if (c && c != '') {
              e.find(' > ul.nav > li.tools > .reload') .click()
            } else {
              var h = d.closest('.tabbable-primary');
              var f = h.find(' > ul.nav > li.active > a');
              var b = Util.AddOrReplaceUrlParameter(f.attr('data-url'), 'id', g.userdata.id);
              f.attr('data-url', b);
              h.find(' > ul.nav > li.tools > .reload') .click()
            }
          }
        }
      }
    },
    doSomeStuff: function () {
      myFunc()
    },
    notify: function (b, c, d) {
      toastr.options.timeOut = 2000;
      if (b == 'error') {
        toastr.options.timeOut = 2000;
        toastr.options.positionClass = 'toast-bottom-center'
      } else {
        toastr.options.positionClass = 'toast-bottom-right'
      }
      if (d == undefined) {
        d = ''
      }
      toastr[b](c, d)
    },
    addOrActivePanel: function (e, c) {
      var f = '欢迎访问';
      if (e.size() > 0) {
        c = e.attr('href');
        if (c == undefined) {
          c = e.attr('data-url')
        } else {
		  // 加参数传递
		  if (!!$('#indexMenuParams') && !!$('#indexMenuParams').val()){
	        c +=  '?' + $('#indexMenuParams').val();
			$('#indexMenuParams').val('');
			if (!!$('#indexMenuParams2') && !!$('#indexMenuParams2').val()){
	          c +=  '&' + $('#indexMenuParams2').val();
		      $('#indexMenuParams2').val('');
			}
          } else {
              $('#layout-nav').find(' > .btn-group > ul.dropdown-menu').find('a[href^=\'/member/member/call-index.htm?mobile=\']') .find('.badge') .click();
          }
        }
        f = e.text()
      }
      var h = $('#layout-nav');
      var g = h.next('.tab-content');
      var l = g.find('> div[data-url=\'' + c + '\']');
        //刷新
      if (l.length > 0){
          l.remove();
          // 删除刷新tab
          $('.tabbable').remove();
          l = g.find('> div[data-url=\'' + c + '\']');
      }
      if (l.length == 0) {
        l = $('<div data-url="' + c + '" class="panel-content"></div>') .appendTo(g);
        l.ajaxGetUrl(c)
      } else {
        l.show()
      }
      g.find('> div') .not(l) .hide();
      var d = h.find(' > .btn-group > ul.dropdown-menu');
      var i = d.find('> li > a[href=\'' + c + '\']');
      if (i.length == 0) {
        i = $('<a href="' + c + '">' + f + '<span class="badge badge-default">X</span></a>') .appendTo(d) .wrap('<li/>');
        i.find('.badge') .click(function (p) {
          p.preventDefault();
          var o = false;
          l.find('form[method=\'post\']:not(.form-track-disabled)[form-data-modified=\'true\']') .each(function () {
            var r = $(this);
            if (!confirm('当前表单有修改数据未保存，确认离开当前表单吗？')) {
              o = true;
              return false
            }
          });
          if (!o) {
            i.parent('li') .remove();
            l.remove();
            var n = 1;
            d.find('> li') .each(function () {
              var r = $(this) .attr('count');
              if (r) {
                if (Number(r) > n) {
                  n = Number(r)
                }
              }
            });
            var q = d.find('> li[count=\'' + n + '\'] > a');
            if (q.length > 0) {
              q.click()
            } else {
              $('#layout-nav >  li > .btn-dashboard') .click()
            }
          }
        });
        i.click(function (n) {
          n.preventDefault();
          e.click()
        });
        var b = $('.page-sidebar-menu') .find('a[href=\'' + c + '\']');
        var m = '<li><a href="' + c + '" title="刷新当前页面">' + f + '</a></li>';
        if (b.length > 0) {
          var k = b.parent('li') .parent('.sub-menu');
          while (k.length > 0) {
            var f = k.prev('a') .children('span.title') .text();
            m = '<li class="hidden-inline-xs"><a href="#" title="TODO">' + f + '</a> <i class="fa fa-angle-right"></i></li>' + m;
            k = k.parent('li') .parent('.sub-menu')
          }
        }
        m = '<li><a href="' + WEB_ROOT + '/main/dashboard.htm" class="btn-dashboard"><i class="fa fa-home"></i></a></li> ' + m;
        i.data('path', m)
      }
      var j = 1;
      d.find('> li') .each(function () {
        $(this) .removeClass('active');
        var n = $(this) .attr('count');
        if (n) {
          if (Number(n) > j) {
            j = Number(n)
          }
        }
      });
      i.parent('li') .addClass('active');
      i.parent('li') .attr('count', j + 1);
      h.find('> li:not(.btn-group)') .remove();
      h.append(i.data('path'));
      h.find('> li:not(.btn-group) > a[href=\'' + c + '\']') .click(function (n) {
        n.preventDefault();
        l.ajaxGetUrl(c)
      })
    },
    addOrActiveTab: function (c, f) {
        // 清理toastr
        toastr.clear();

      var b = c.parent('div');

        // 清理重复的url tab
        var newUrl = f.url.substring(0, f.url.indexOf('?'));
        $.each(b.find('.nav.nav-pills a:has(.close)'), function(){
            console.log('close' + $(this).attr('data-url'));
            var oldUrl = $(this).attr('data-url').substring(0, $(this).attr('data-url').indexOf('?'));
            if(newUrl == oldUrl){
                $(this).find('.close').trigger('click');
            }
        });

        var e = 'tab_' + Util.hashCode(f.url);
      var g = $('#' + e);
      $('#' + e).remove();
      if ($('#' + e) .length == 0) {
        var h = $('<li><a id="' + e + '" data-toggle="tab" href="' + f.url + '">' + f.title + ' <button class="close" type="button" style="margin-left:8px"></button></a></li>');
        c.append(h);
        $('#' + e) .click();
        var d = c.parent() .find(h.find('a') .attr('href'));
        d.addClass('tab-closable');
        h.find('.close') .click(function () {
          var j = false;
          d.find('form[method=\'post\']:not(.form-track-disabled)[form-data-modified=\'true\']') .each(function () {
            var l = $(this);
            if (!confirm('当前表单有修改数据未保存，确认离开当前表单吗？')) {
              j = true;
              return false
            }
          });
          if (!j) {
            d.remove();
            h.remove();
            var i = 0;
            var k = c.find('li:not(.tools) > a');
            k.each(function () {
              var l = $(this) .attr('click-idx');
              if (l && Number(l) > i) {
                i = Number(l)
              }
            });
            if (i == 0) {
              k.first() .click()
            } else {
              k.filter('[click-idx=\'' + i + '\']') .click()
            }
          }
        })
      } else {
        $('#' + e) .tab('show')
      }
    },
    fixCloneElements: function (b) {
      b.find('.date-picker') .each(function () {
        $(this) .attr('id', '') .removeData() .off();
        $(this) .find('button') .removeData() .off();
        $(this) .find('input') .removeData() .off();
        $(this) .datepicker({
          language: 'zh-CN',
          autoclose: true,
          format: $(this) .attr('data-date-format')
        })
      })
    }
  }
}();
