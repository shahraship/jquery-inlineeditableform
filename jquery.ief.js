/**
 * Name:			Inline Editable Form
 * File:			jquery.ief.js
 * Version:			0.1 (Last Modified: 03/20/2013)
 * Author:			Raship Shah (shahraship@gmail.com)
 * Description:		This jquery plugin is written to provide inline editable for a form.
 * ------------------------------------------------------------------------------------
 * Date			Author		Changes
 * ------------------------------------------------------------------------------------
 * Mar 20 2013	RDS			Created.
 * ===================================================================================
 * USAGE:
 * ------------------------------------------------------------------------------------
 * $('.ief').ief();
 * ===================================================================================
 */
(function($){
	$.fn.ief = function(options) {
		var settings = {
			'on':'click',
			onstart: function(){},
			oncommit: function(){},
			oncancel: function(){}
		};
		if (options) {
			$.extend(settings,options);
		}
		return this.each(function(ndx) {
			var $this=$(this),$container,$obj,$ok,$cancel;
			$container=$('<span />');
			$container.width($this.width()).height($this.height()).hide();
			$container.css('padding',0).css('margin',0);
			$ok=$('<input type="button" value="ok" />');
			$cancel=$('<input type="button" value="cancel" />');
			if ($this.data('ief-edittype')=='textarea') {
				$obj=$('<textarea />');
				$obj.css('width',$this.width()+10).css('height',$this.height());
			} else if ($this.data('ief-edittype')=='select') {
				$obj=$('<select />');
				if ($this.data('ief-selectvalues')) {
					$.each($this.data('ief-selectvalues'), function(i, item) {
						var $opt=$('<option />')
						$opt.attr('value',item.value).text(item.label);
						if (item.selected) {
							$opt.attr('selected','selected');
						}
						$obj.append($opt);
					});
				}
			} else if ($this.data('ief-edittype') && $this.data('ief-edittype').substring(0,5)=='input' && $this.data('ief-edittype').indexOf(':')>-1) {
				$obj=$('<input type="'+$this.data('ief-edittype').split(':')[1]+'" />');
				if ($this.attr('data-ief-checked')) {
					$obj.attr('checked','checked');
				}
			} else {
				$obj=$('<input type="text" />');
				$obj.css('width',$this.width()+20).css('height',$this.height());
			}
			$obj.attr('name',$this.attr('id')).val($this.text());
			if ($this.data('ief-attr')) {
				$.each($this.data('ief-attr'), function(i, item) {
					$obj.attr(item.key,item.value);
				});
			}
			$ok.on('click',function(e){
				e.preventDefault();
				$container.hide();
				$this.html($obj.val()).show();
				settings.oncommit.call($this);
			});
			$cancel.on('click',function(e){
				e.preventDefault();
				$container.hide();
				$this.show();
				settings.oncancel.call($this);
			});
			$container.append($obj);
			$container.append($ok);
			$container.append($cancel);
			$container.insertAfter($this);
			$this.on(settings.on,function(e){
				settings.onstart.call($this);
				$this.hide();
				$container.show();
				$obj.val($this.text()).focus();
			});
		});
	};
})(jQuery);