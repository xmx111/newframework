var Page = function () {
  var initMultiimage = function () {
    $('[data-multiimage]') .each(function () {
      var $el = $(this);
      if ($el.attr('multiimage-done')) {
        return
      }
      if ($el.attr('id') == undefined) {
        $el.attr('id', 'multiimage_id_' + new Date() .getTime())
      }
      var name = $el.attr('name');
      var options = {
        width: '150',
        height: '150'
      };
      if ($el.attr('data-multiimage-width')) {
        options.width = $el.attr('data-multiimage-width')
      }
      if ($el.attr('data-multiimage-height')) {
        options.height = $el.attr('data-multiimage-height')
      }
      var indexProp = $el.attr('data-index-prop');
      Util.assertNotBlank(indexProp, '缺少顺序属性设定');
      var control = $el.closest('div.controls');
      var thumbnail = $('<div class="thumbnail thumbnail-' + $el.attr('data-multiimage') + '" style="float:left; margin-right: 5px; width: ' + options.width + 'px"/>') .appendTo(control);
      thumbnail.append($el);
      var pkValue = $el.attr('data-pk');
      if (pkValue) {
        var $pk = $('<input type="hidden" name="' + name.substring(0, name.indexOf(']')) + '].id" />');
        $pk.val(pkValue);
        thumbnail.append($pk);
        var $op = $('<input type="hidden" name="' + name.substring(0, name.indexOf(']')) + '].extraAttributes.operation" />');
        $op.val('update');
        thumbnail.append($op);
        var $idx = $('<input type="hidden" name="' + name.substring(0, name.indexOf(']')) + '].' + indexProp + '" />');
        var index = Number($el.attr('data-index-val'));
        $idx.val(index);
        var minIndex = control.attr('min-index');
        if (minIndex == undefined) {
          minIndex = 1000
        }
        minIndex = Number(minIndex);
        if (index < minIndex) {
          control.attr('min-index', index)
        }
        var pkCount = control.attr('pk-count');
        if (pkCount == undefined) {
          pkCount = 0
        }
        control.attr('pk-count', Number(pkCount) + 1);
        thumbnail.append($idx)
      } else {
        var $idx = $('<input type="hidden" name="' + name.substring(0, name.indexOf(']')) + '].' + indexProp + '" />');
        var minIndex = control.attr('min-index');
        if (minIndex == undefined) {
          minIndex = 1000
        }
        minIndex = Number(minIndex) - 100;
        control.attr('min-index', minIndex);
        $idx.val(minIndex);
        thumbnail.append($idx)
      }
      var resetArrayIndex = function () {
        var pkCount = control.attr('pk-count');
        if (pkCount == undefined) {
          pkCount = 0
        }
        control.find('> .thumbnail-edit') .each(function () {
          var $thumbnailedit = $(this);
          if ($thumbnailedit.find('input[name$=\'.id\']') .size() == 0) {
            $thumbnailedit.find('input') .each(function () {
              var $input = $(this);
              var oldName = $input.attr('name');
              if (oldName) {
                $input.attr('name', oldName.substring(0, oldName.indexOf('[') + 1) + pkCount + oldName.substring(oldName.indexOf(']'), oldName.length))
              }
            });
            pkCount++
          }
        })
      };
      var addDiv = $('<div class="div-add-img" style="line-height: ' + options.height + 'px; background-color: #EEEEEE; text-align: center;"/>');
      addDiv.append('<p style="margin:0px"><button class="btn btn-large" type="button">点击上传图片</button></p>');
      var caption = $('<div class="caption" style="height: 15px;padding-top:0px;cursor: crosshair">');
      var addLi = $('<a class="btn-add pull-right" style="cursor: pointer;" title="点击上传图片"><i class="fa fa-plus"></i></a>');
      var shareLi = $('<a class="btn-view" style="cursor: pointer;"  title="查看原始图片"><i class="fa fa-picture-o"></i></a>');
      var minusLi = $('<a class="btn-remove pull-right"  style="cursor: pointer;" title="点击移除图片"><i class="fa fa-minus"></i></a>');
      var imageSrc = $el.val();
      if (imageSrc == undefined || imageSrc == '') {
        addDiv.appendTo(thumbnail);
        caption.appendTo(thumbnail);
        caption.append(addLi)
      } else {
        if (IMAGE_URL_PREFIX) {
          thumbnail.append('<img src="' + IMAGE_URL_PREFIX + imageSrc + '" style="cursor: pointer; width: ' + options.width + 'px; height: ' + options.height + 'px;" />')
        } else {
          thumbnail.append('<img src="' + imageSrc + '" style="cursor: pointer; width: ' + options.width + 'px; height: ' + options.height + 'px;" />')
        }
        caption.appendTo(thumbnail);
        caption.append(shareLi);
        caption.append(minusLi)
      }
      control.css('min-height', (Number(options.height) + 50) + 'px');
      control.append(control.find('.thumbnail-btn'));
      var picsEditor = KindEditor.editor({
        allowFileManager: false
      });
      control.sortable({
        items: '.thumbnail',
        stop: function (event, ui) {
          var index = 1000;
          var $ui = $(ui.item);
          $ui.parent() .find('input[name$=\'' + indexProp + '\']') .each(function (idx, item) {
            $(this) .val(index);
            index -= 100
          })
        }
      });
      thumbnail.delegate('div.div-add-img, a.btn-add', 'click', function () {
        picsEditor.loadPlugin('multiimage', function () {
          picsEditor.plugin.multiImageDialog({
            clickFn: function (urlList) {
              KindEditor.each(urlList, function (i, data) {
                var $new = $('<input type="hidden" name="' + name + '" data-multiimage="edit"  data-index-prop="' + indexProp + '" />');
                $new.val(data.md5);
                thumbnail.before($new);
                initMultiimage()
              });
              resetArrayIndex();
              picsEditor.hideDialog()
            }
          })
        })
      });
      thumbnail.delegate('img', 'click', function () {
        picsEditor.loadPlugin('image', function () {
          picsEditor.plugin.imageDialog({
            clickFn: function (url, title, width, height, border, align) {
              var imageSrc = url;
              if (IMAGE_URL_PREFIX) {
                imageSrc = url.split(IMAGE_URL_PREFIX) [1]
              }
              $el.val(imageSrc);
              if (thumbnail.find('img') .length == 0) {
                addDiv.hide();
                thumbnail.prepend('<img src="' + url + '" style="cursor: pointer; width: ' + options.width + '; height: ' + options.height + ';" />');
                caption.empty();
                caption.append(shareLi);
                caption.append(minusLi)
              } else {
                thumbnail.find('img') .attr({
                  src: url
                })
              }
              picsEditor.hideDialog()
            }
          })
        })
      });
      thumbnail.delegate('a.btn-remove', 'click', function () {
        var thumbnail = $(this) .closest('.thumbnail');
        if (thumbnail.find('input[name$=\'.id\']') .size() > 0) {
          thumbnail.find('input[name$=\'.extraAttributes.operation\']') .val('remove');
          thumbnail.hide()
        } else {
          thumbnail.remove();
          resetArrayIndex()
        }
      });
      thumbnail.delegate('a.btn-view', 'click', function () {
        window.open(thumbnail.find('img') .attr('src'), '_blank')
      });
      $el.attr('multiimage-done', true)
    })
  };
  return {
    initAjaxBeforeShow: function ($container) {
      if ($container == undefined) {
        $container = $('body')
      }
      $('#btn-profile-param') .hide();
      initMultiimage();
      $('.make-switch:not(.has-switch)') ['bootstrapSwitch']();
      if (jQuery() .select2) {
        $('select[class!="calendar-select"]', $container) .each(function () {
          var $select2 = $(this);
          if ($select2.find(' > option[value=""]') .size() == 0) {
            var $empty = $('<option value=""></option>');
            $select2.prepend($empty)
          }
          if ($select2.find(' > option[selected]') .size() == 0) {
            $select2.find('> option[value=\'\']') .attr('selected', true)
          }
          var allowClear = true;
          if ($select2.attr('data-allowClear')) {
            if ($select2.attr('data-allowClear') == 'false') {
              allowClear = false
            }
          }
          var placeholder = $select2.attr('placeholder');
          if (placeholder == undefined) {
            placeholder = '请选择...'
          }
          var options = {
            placeholder: placeholder,
            allowClear: allowClear,
            matcher: function (term, text) {
              var mod = Pinyin.getCamelChars(text) + '';
              var tf1 = mod.toUpperCase() .indexOf(term.toUpperCase()) == 0;
              var tf2 = text.toUpperCase() .indexOf(term.toUpperCase()) == 0;
              return (tf1 || tf2)
            }
          };
          if ($select2.attr('data-select2-type') == 'combobox') {
            var $input = $('<input type="text" name="' + $(this) .attr('name') + '"/>') .insertAfter($select2);
            if ($select2.attr('class') != undefined) {
              $input.attr('class', $select2.attr('class'))
            }
            var selected = $select2.find('option:selected') .val();
            options = $.extend({
            }, options, {
              placeholder: '请选择或输入...',
              allowClear: true,
              query: function (query) {
                var data = {
                  results: [
                  ]
                };
                $select2.find('option') .each(function () {
                  data.results.push({
                    id: $(this) .val(),
                    text: $(this) .text()
                  })
                });
                query.callback(data)
              },
              initSelection: function (element, callback) {
                if (selected != undefined) {
                  var data = {
                    id: selected,
                    text: selected
                  };
                  callback(data)
                }
              },
              createSearchChoice: function (term, data) {
                if ($(data) .filter(function () {
                  return this.text.localeCompare(term) === 0
                }) .length === 0) {
                  return {
                    id: term,
                    text: term
                  }
                }
              }
            });
            $input.select2(options);
            if (selected != undefined) {
              $input.select2('val', [
                selected
              ])
            }
            $select2.remove()
          } else {
            var dataCache = $select2.attr('data-cache');
            if (dataCache) {
              var dataCache = eval(dataCache);
              for (var i in dataCache) {
                $select2.append('<option value=\'' + i + '\'>' + dataCache[i] + '</option>')
              }
            }
            var dataUrl = $select2.attr('data-url');
            if (dataUrl) {
              var val = $select2.val();
              var dataCache = Util.getCacheSelectOptionDatas(WEB_ROOT + dataUrl);
              for (var i in dataCache) {
                if (val && val == i) {
                  continue
                }
                $select2.append('<option value=\'' + i + '\'>' + dataCache[i] + '</option>')
              }
            }
            $select2.select2(options)
          }
          var $container = $select2.parent('.controls') .children('.select2-container');
          if (!$container.hasClass('form-control')) {
            $container.addClass('form-control')
          }
        })
      }
      $('input.select2tags', $container) .each(function () {
        var $select2tags = $(this);
        $select2tags.select2({
          tags: $select2tags.attr('data-tags')
        })
      });
      $('[data-profile-param]:not([data-profile-param-done])', $container) .each(function () {
        var $el = $(this);
        $el.attr('data-profile-param-done', true);
        var code = $el.attr('data-profile-param');
        var $controls = $el.closest('.controls');
        var controlDoneFlag = 'data-profile-param-done' + code;
        if ($controls.attr(controlDoneFlag)) {
          return
        }
        $controls.attr(controlDoneFlag, true);
        var id = $el.closest('form') .find('input[name=\'id\']') .val();
        var orgVal = $el.val();
        if (id.length == 0 && (orgVal == undefined || orgVal == '')) {
          var initVal = Global.findUserProfileParams(code);
          if (initVal) {
            if ($el.is('[type="radio"]')) {
              $controls.find('[type="radio"][value="' + initVal + '"]') .attr('checked', true)
            } else {
              $el.val(initVal);
              if ($el.is('select')) {
                $el.select2()
              }
            }
          }
        }
        var $btn = $('#btn-profile-param');
        $controls.add($el) .mouseenter(function () {
          $btn.toggle();
          $btn.position({
            my: 'right center',
            at: 'left center',
            of: $controls
          });
          $btn.off();
          $btn.click(function () {
            var codes = [
            ];
            var postData = {
            };
            $controls.find('[data-profile-param]') .each(function () {
              var val;
              var $this = $(this);
              if ($this.is('[type="radio"]')) {
                val = $controls.find(':checked') .val()
              } else {
                val = $this.val()
              }
              var thisCode = $this.attr('data-profile-param');
              codes.push(thisCode);
              postData[thisCode] = val
            });
            postData.codes = codes.join(',');
            var url = WEB_ROOT + '/profile/simple-param-val!doSave';
            $btn.ajaxPostURL(url, function () {
              $.each(codes, function (i, c) {
                Global.setUserProfileParams(c, postData[c])
              });
              $btn.hide()
            }, false, {
              data: postData
            })
          })
        })
      });
      $('.date-picker', $container) .each(function () {
        var $datapicker = $(this);
        var $el = $datapicker.find(' > .form-control');
        if ($el.attr('readonly') || $el.attr('disabled')) {
          return
        }
        var timeInput = $el.attr('data-timepicker');
        if (BooleanUtil.toBoolean(timeInput)) {
          $el.datetimepicker({
            autoclose: true,
            format: 'yyyy-mm-dd hh:ii:ss',
            todayBtn: true,
            language: 'zh-CN',
            minuteStep: 10
          })
        } else {
          $datapicker.datepicker({
            language: 'zh-CN',
            autoclose: true
          })
        }
        $('body') .removeClass('modal-open')
      });
      $('input.input-daterangepicker', $container) .each(function () {
        var $daterangepicker = $(this);
        var options = $.extend(true, $.fn.daterangepicker.defaults, $daterangepicker.attr('data-daterangepicker'));
        $daterangepicker.daterangepicker(options, function (start, end) {
          $daterangepicker.focus()
        });
        $daterangepicker.off('focus')
      });
      $('table[data-dynamic-table]', $container) .each(function () {
        var $dynamicTable = $(this);
        var options = $dynamicTable.data('dynamicTableOptions');
        $(this) .dynamictable(options)
      });
      $('.control-label[data-tooltips]', $container) .each(function () {
        var $el = $(this);
        var $tips = $('<span class="glyphicon glyphicon-exclamation-sign tooltipster" title="' + $el.attr('data-tooltips') + '"></span>') .appendTo($el);
        var position = 'top';
        if ($el.find('[data-rule-date]') .length > 0) {
          position = 'right'
        }
        if ($el.attr('data-tooltipster-position')) {
          position = $el.attr('data-tooltipster-position')
        }
        $tips.tooltipster({
          contentAsHTML: true,
          offsetY: 15,
          theme: 'tooltipster-punk',
          position: position
        })
      });
      $('textarea[maxlength]', $container) .maxlength({
        limitReachedClass: 'label label-danger',
        alwaysShow: true
      });
      $('[data-toggle="dropdownselect"]', $container) .each(function () {
        var $dropdown = $(this);
        var $clear = $('<i class="fa fa-times"></i>') .insertBefore($dropdown);
        var $toggle = $('<i class="fa fa-angle-double-down btn-toggle"></i>') .insertBefore($dropdown);
        var $elems = $dropdown.parent() .children();
        $elems.wrapAll('<div class="input-icon right"></div>');
        $clear.click(function () {
          $elems.val('')
        });
        $dropdown.attr('autocomplete', 'off');
        var $parent = $dropdown.closest('.panel-content');
        var $container = $('<div class="container-dropdownselect container-callback" style="display : none;background-color: white;border: 1px solid #CCCCCC;"></div>');
        if ($parent.size() > 0) {
          $container.appendTo($parent)
        } else {
          $container.appendTo($('body'))
        }
        if ($dropdown.attr('data-minWidth')) {
          $container.css('min-width', $dropdown.attr('data-minWidth'))
        }
        $dropdown.add($dropdown.parent() .find('i.btn-toggle')) .click(function () {
          var parentOffsetLeft = 0;
          var parentOffsetTop = 0;
          if ($parent.size() > 0) {
            parentOffsetLeft = $parent.offset() .left;
            parentOffsetTop = $parent.offset() .top
          }
          var offset = $dropdown.offset();
          $container.css({
            width: $dropdown.outerWidth(),
            position: 'absolute',
            left: (offset.left - parentOffsetLeft) + 'px',
            top: (offset.top - parentOffsetTop) + $dropdown.outerHeight() + 'px'
          });
          $container.data('callback', $dropdown.data('data-dropdownselect-callback'));
          $container.slideToggle('fast');
          var $btnToggle = $dropdown.parent() .find('i.btn-toggle');
          if ($btnToggle.hasClass('fa-angle-double-down')) {
            $btnToggle.removeClass('fa-angle-double-down');
            $btnToggle.addClass('fa-angle-double-up')
          } else {
            $btnToggle.addClass('fa-angle-double-down');
            $btnToggle.removeClass('fa-angle-double-up')
          }
          if ($container.is(':empty')) {
            var url = $dropdown.attr('data-url');
            if ($dropdown.attr('data-selected')) {
              if (url.indexOf('?') > - 1) {
                url = url + '&selected=' + $dropdown.attr('data-selected')
              } else {
                url = url + '?selected=' + $dropdown.attr('data-selected')
              }
            }
            $container.ajaxGetUrl(url)
          }
        });
        $(document) .on('mousedown', function (e) {
          var $el = $dropdown.parent('div');
          if (!($el.is(e.target) || $el.find(e.target) .length || $container.is(e.target) || $container.find(e.target) .length)) {
            $container.hide()
          }
        })
      });
      $('[data-htmleditor=\'kindeditor\']') .each(function () {
        var $kindeditor = $(this);
        var height = $kindeditor.attr('data-height');
        if (height == undefined) {
          height = '500px'
        }
        KindEditor.create($kindeditor, {
          allowFileManager: false,
          width: '100%',
          height: height,
          minWidth: '200px',
          minHeight: '60px',
          afterBlur: function () {
            this.sync()
          }
        })
      });
      $('.tabbable > .nav > li > a[href="#tab-auto"]') .each(function () {
        var $link = $(this);
        var $tabbable = $link.closest('.tabbable');
        var idx = $tabbable.children('.nav') .find('li:not(.tools)') .index($link.parent('li'));
        var $tabPane = $tabbable.children('.tab-content') .find('div.tab-pane') .eq(idx);
        var tabid = 'tab-' + new Date() .getTime() + idx;
        $tabPane.attr('id', tabid);
        $link.attr('href', '#' + tabid)
      });
      $('a.x-editable') .each(function () {
        var $edit = $(this);
        var url = $edit.attr('data-url');
        if (url == undefined) {
          url = $edit.closest('form') .attr('action')
        }
        var pk = $edit.attr('data-pk');
        if (pk == undefined) {
          pk = $edit.closest('form') .find('input[name=\'id\']') .val()
        }
        var title = $edit.attr('data-original-title');
        if (title == undefined) {
          title = '数据修改'
        }
        var placement = $edit.attr('data-placement');
        if (placement == undefined) {
          placement = 'top'
        }
        Util.assertNotBlank(url);
        Util.assertNotBlank(pk);
        $edit.editable({
          url: url,
          pk: pk,
          title: title,
          placement: placement,
          params: function (params) {
            params.id = pk;
            params[params.name] = params.value;
            return params
          },
          validate: function (value) {
            var required = $edit.attr('data-required');
            if (required == 'true') {
              if ($.trim(value) == '') {
                return '数据不能为空'
              }
            }
          },
          success: function () {
            if ($edit.hasClass('editable-bpm-task-transfer')) {
              $('#layout-nav .btn-close-active') .click();
              $('.ajaxify-tasks') .ajaxGetUrl($('.ajaxify-tasks') .attr('data-url'))
            }
          }
        })
      });
      $('[data-sigleimage]') .each(function () {
        var $el = $(this);
        if ($el.attr('sigleimage-done')) {
          return
        }
        if ($el.attr('id') == undefined) {
          $el.attr('id', 'sigleimage_id_' + new Date() .getTime())
        }
        var options = {
          width: '150px',
          height: '150px'
        };
        if ($el.attr('data-sigleimage-width')) {
          options.width = $el.attr('data-sigleimage-width')
        }
        if ($el.attr('data-sigleimage-height')) {
          options.height = $el.attr('data-sigleimage-height')
        }
        var control = $el.closest('div.form-group') .children('div');
        var thumbnail = $('<div class="thumbnail" style=" width: ' + options.width + '"/>') .appendTo(control);
        var addDiv = $('<div class="div-add-img" style="line-height: ' + options.height + '; background-color: #EEEEEE; text-align: center;"/>');
        addDiv.append('<p><button class="btn btn-large" type="button">点击上传图片</button></p>');
        var caption = $('<div class="caption" style="height: 15px;padding-top:0px">');
        var addLi = $('<a class="btn-add pull-right" style="cursor: pointer;" title="点击上传图片"><i class="fa fa-plus"></i></a>');
        var shareLi = $('<a class="btn-view" style="cursor: pointer;"  title="查看原始图片"><i class="fa fa-picture-o"></i></a>');
        var minusLi = $('<a class="btn-remove pull-right"  style="cursor: pointer;" title="点击移除图片"><i class="fa fa-minus"></i></a>');
        var imageSrc = $el.val();
        if (imageSrc == undefined || imageSrc == '') {
          addDiv.appendTo(thumbnail);
          caption.appendTo(thumbnail);
          caption.append(addLi)
        } else {
          if (IMAGE_URL_PREFIX) {
            thumbnail.append('<img src="' + IMAGE_URL_PREFIX + imageSrc + '" style="cursor: pointer; width: ' + options.width + '; height: ' + options.height + ';" />')
          } else {
            thumbnail.append('<img src="' + imageSrc + '" style="cursor: pointer; width: ' + options.width + '; height: ' + options.height + ';" />')
          }
          caption.appendTo(thumbnail);
          caption.append(shareLi);
          caption.append(minusLi)
        }
        var picsEditor = KindEditor.editor({
          allowFileManager: false
        });
        thumbnail.delegate('div.div-add-img, a.btn-add , img', 'click', function () {
          picsEditor.loadPlugin('image', function () {
            picsEditor.plugin.imageDialog({
              clickFn: function (url, title, width, height, border, align) {
                var imageSrc = url;
                if (IMAGE_URL_PREFIX) {
                  imageSrc = url.split(IMAGE_URL_PREFIX) [1]
                }
                $el.val(imageSrc);
                if (thumbnail.find('img') .length == 0) {
                  addDiv.hide();
                  thumbnail.prepend('<img src="' + url + '" style="cursor: pointer; width: ' + options.width + '; height: ' + options.height + ';" />');
                  caption.empty();
                  caption.append(shareLi);
                  caption.append(minusLi)
                } else {
                  thumbnail.find('img') .attr({
                    src: url
                  })
                }
                picsEditor.hideDialog()
              }
            })
          })
        });
        thumbnail.delegate('a.btn-remove', 'click', function () {
          $el.val('');
          thumbnail.find('img') .remove();
          if (thumbnail.find('div.div-add-img') .length == 0) {
            thumbnail.prepend(addDiv)
          } else {
            addDiv.show()
          }
          caption.empty();
          caption.append(addLi)
        });
        thumbnail.delegate('a.btn-view', 'click', function () {
          window.open(thumbnail.find('img') .attr('src'), '_blank')
        });
        $el.attr('sigleimage-done', true)
      });
      $('a.btn-fileinput-trigger', $container) .each(function () {
        var $btn = $(this);
        var pk = $btn.attr('data-pk');
        var category = $btn.attr('data-category');
        var readonly = $btn.attr('data-readonly');
        if (pk && pk.trim() != '') {
          var url = $btn.attr('data-url');
          $btn.ajaxJsonUrl(Util.AddOrReplaceUrlParameter(url, 'id', pk), function (response) {
            var $table = $('<table role="presentation" class="table table-striped table-filelist clearfix"><tbody class="files"></tbody></table>') .insertAfter($btn);
            var $tbody = $table.find('tbody.files');
            $tbody.append(tmpl('template-download', response));
            if (BooleanUtil.toBoolean(readonly)) {
              $tbody.find('td.td-op') .remove();
              $btn.remove()
            }
          })
        }
        if (!BooleanUtil.toBoolean(readonly)) {
          var $hidden = $('<input type="hidden" name="_attachment_' + category + '"  value="" />') .insertBefore($btn)
        }
      });
      $('.scroller', $container) .each(function () {
        var height;
        if ($(this) .attr('data-height')) {
          height = $(this) .attr('data-height')
        } else {
          height = $(this) .css('height')
        }
        $(this) .slimScroll({
          size: '7px',
          color: ($(this) .attr('data-handle-color') ? $(this) .attr('data-handle-color')  : '#a1b2bd'),
          railColor: ($(this) .attr('data-rail-color') ? $(this) .attr('data-rail-color')  : '#333'),
          position: 'right',
          height: height,
          alwaysVisible: ($(this) .attr('data-always-visible') == '1' ? true : false),
          railVisible: ($(this) .attr('data-rail-visible') == '1' ? true : false),
          wheelStep: 5,
          disableFadeOut: true
        })
      });
      $('[data-hover="dropdown"]', $container) .dropdownHover();
      $('div.ajaxify', $container) .each(function () {
        $(this) .ajaxGetUrl($(this) .attr('data-url'), $(this) .data('success'))
      })
    },
    initAjaxAfterShow: function ($container) {
      if ($container == undefined) {
        $container = $('body')
      }
      $('button:not([type])', $container) .each(function () {
        $(this) .attr('type', 'button')
      });
      $('.form-body .row', $container) .each(function () {
        var maxHeight = 0;
        var $rowcols = $(this) .find(' > div > .form-group > div, > .form-group > div');
        $rowcols.each(function () {
          var height = $(this) .innerHeight();
          if (height > maxHeight) {
            maxHeight = height
          }
        });
        $rowcols.css('min-height', maxHeight)
      });
      $('.chart-plot', $container) .each(function () {
        $(this) .plot()
      });
      $('.full-calendar', $container) .each(function () {
        $(this) .fullCalendar($(this) .data('fullCalendarOptions'))
      });
      $('.gmaps-baidu', $container) .each(function () {
        var $el = $(this);
        var id = $el.attr('id');
        if (id == undefined) {
          id = 'map_baidu_id_' + new Date() .getTime();
          $el.attr('id', id)
        }
        var map = new BMap.Map(id);
        map.centerAndZoom('北京市', 12);
        map.enableScrollWheelZoom();
        map.enableContinuousZoom();
        map.addControl(new BMap.NavigationControl());
        var myGeo = new BMap.Geocoder();
        $el.bind('mapLocate', function (event, location) {
          myGeo.getPoint(location, function (point) {
            if (point) {
              map.clearOverlays();
              map.panTo(point);
              var marker = new BMap.Marker(point);
              map.addOverlay(marker);
              marker.setAnimation(BMAP_ANIMATION_BOUNCE);
              return point
            }
          }, '北京市')
        });
        var initLocation = $el.attr('data-init-location');
        if (initLocation && initLocation != '') {
          setTimeout(function () {
            $el.trigger('mapLocate', initLocation)
          }, 2000)
        }
        map.addEventListener('click', function (e) {
          var point = e.point;
          myGeo.getLocation(point, function (rs) {
            var addComp = rs.addressComponents;
            rs.fullAddress = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
            $el.trigger('mapClick', rs)
          })
        })
      })
    },
    doSomeStuff: function () {
      myFunc()
    }
  }
}();
