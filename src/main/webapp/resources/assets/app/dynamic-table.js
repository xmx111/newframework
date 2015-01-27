(function (a) {
  a.widget('ui.dynamictable', {
    options: {
      temp: '.dynamic-table-row-template',
      minRows: 1,
      maxRows: 50,
      initAdd: true,
      afterAdd: false
    },
    _create: function () {
      var c = this;
      var d = this.element;
      options = this.options;
      var g = d.find(options.temp);
      this.tempHtml = g.html();
      g.remove();
      var f = a('<th style="width: 70px; text-align:center;"/>') .prependTo(d.find(' thead tr '));
      var e = a('<span class="dynamic-table-num">序号</span>') .appendTo(f);
      var h = a('<a class="btn btn-sm yellow btn-table-add-line" href="javascript:;" style="display:none;margin-bottom: 4px"><i class="fa fa-plus"></i> 添加</a>') .appendTo(f);
      d.mouseover(function (i) {
        f.css('padding', '0px');
        e.hide();
        h.show()
      }) .mouseout(function (i) {
        f.css('padding', '8px');
        e.show();
        h.hide()
      });
      d.on('mouseover', ' tbody > tr', function (j) {
        var i = a(this);
        i.find('.span-row-seq') .hide();
        i.find('.fa-times') .parent('a') .show()
      }) .on('mouseout', ' tbody > tr', function (j) {
        var i = a(this);
        i.find('.span-row-seq') .show();
        i.find('.fa-times') .parent('a') .hide()
      });
      d.on('click', 'a.btn-table-add-line', function (i) {
        i.preventDefault();
        c.addLine(d.find(' tbody tr:first '), 'before')
      });
      d.on('click', 'a.btn-table-remove-line', function (k) {
        k.preventDefault();
        if (d.find('tbody tr:visible') .length == options.minRows) {
          alert('最少要有' + options.minRows + '行！');
          return false
        }
        var j = a(this) .closest('tr');
        var i = j.find('input[name$=\'.operation\']') .val();
        if (i == 'update') {
          j.find('input[name$=\'.operation\']') .val('remove');
          j.hide();
          j.find(':text,select') .not(':hidden') .each(function () {
            a(this) .attr('disabled', true)
          })
        } else {
          j.remove()
        }
        c.resetIndex()
      });
      var b = d.find('tbody > tr:not(.dynamic-table-row-template)');
      if (b.length > 0) {
        b.each(function (k) {
          var l = a(this);
          l.attr('row-index-fixed', k);
          l.find('input,select') .each(function () {
            a(this) .removeAttr('id')
          });
          var m = a('<td style="text-align: center;" class="row-seq"><span class="span-row-seq"></span></td>') .prependTo(l);
          var j = a('<a class="btn btn-sm default btn-table-remove-line" href="javascript:;" style="display:none"><i class="fa fa-times"></i></a>') .appendTo(m);
          if (a.isFunction(options.afterAdd)) {
            options.afterAdd.call(d, l)
          }
        });
        setTimeout(function () {
          c.resetIndex()
        }, 500)
      } else {
        if (options.initAdd) {
          c.addLine()
        }
      }
      return a(this)
    },
    addLine: function (b, d) {
      $con = this.element;
      if ($con.find('tbody tr:visible') .length == options.maxRows) {
        alert('最多只能添加' + options.maxRows + '行！');
        return false
      }
      var e = a('<tr>' + this.tempHtml + '</tr>');
      if (b) {
        if (d == 'before') {
          b.before(e)
        } else {
          b.after(e)
        }
      } else {
        $con.find('tbody') .append(e)
      }
      e.find('input,select,textarea') .each(function () {
        a(this) .removeAttr('id');
        if (a(this) .attr('class') == undefined) {
          a(this) .attr('class', 'form-control')
        }
      });
      var f = a('<td style="text-align: center;" class="row-seq"><span class="span-row-seq"></span></td>') .prependTo(e);
      var c = a('<a class="btn btn-sm default btn-table-remove-line" href="javascript:;" style="display:none"><i class="fa fa-times"></i></a>') .appendTo(f);
      this.resetIndex();
      if (a.isFunction(options.afterAdd)) {
        options.afterAdd.call($con, e)
      }
      Page.initAjaxBeforeShow(e)
    },
    resetIndex: function () {
      $con = this.element;
      idx = 0;
      $con.find('tbody tr[row-index-fixed]') .each(function () {
        idx++
      });
      $con.find('tbody tr') .not('[row-index-fixed]') .each(function () {
        a(this) .find('input,select') .each(function () {
          if (a(this) .attr('name')) {
            var b = a(this) .attr('name');
            if (b) {
              a(this) .attr('name', b.substring(0, b.indexOf('[') + 1) + idx + b.substring(b.indexOf(']'), b.length))
            }
          }
          a(this) .removeAttr('id')
        });
        idx++
      });
      idx = 0;
      $con.find('tbody tr:visible') .each(function () {
        a(this) .find('td.row-seq > .span-row-seq') .html(idx + 1);
        idx++
      });
      a(this) .closest('form') .attr('form-data-modified', 'true')
    },
    getVisiableRow: function () {
      return this.element.find('tr:visible')
    },
    destroy: function () {
    }
  })
}) (jQuery);
