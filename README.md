jquery-inline editable form plugin
==================================

This jquery plugin is written to provide inline editing capability for form.

Many times users need to submit the entire form instead of incrementally submitting independent inline edits at a time.

This plugin allows you turn text on web page into an editable field. The requirement is that the text be enclosed within a <form> tag.

Basic usage
-----------

&lt;form&gt;  
&lt;dl&gt;  
&lt;dt&gt;Name&lt;/dt&gt;  
&lt;dd&gt;&lt;span id=&quot;name&quot; class=&quot;ief&quot;&gt;Michael Jackson&lt;/span&gt;&lt;/dd&gt;  
&lt;dt&gt;Address&lt;/dt&gt;  
&lt;dd&gt;&lt;span id=&quot;address&quot; class=&quot;ief&quot; data-ief-edittype=&quot;textarea&quot;&gt;2 Needless Alley,&lt;br /&gt;Awesome Town, NY 10001&lt;/span&gt;&lt;/dd&gt;  
&lt;dt&gt;Gender&lt;/dt&gt;  
&lt;dd&gt;&lt;span id=&quot;gender&quot; class=&quot;ief&quot; data-ief-edittype=&quot;select&quot; data-ief-selectvalues='[{label:&quot;Male&quot;,value:&quot;male&quot;},{label:&quot;Female&quot;,value:&quot;female&quot;}]'&gt;Male&lt;/span&gt;&lt;/dd&gt;  
&lt;dd&gt;&lt;span id=&quot;awesome&quot; class=&quot;ief&quot; data-ief-edittype=&quot;input:checkbox&quot; data-ief-checked=&quot;true&quot;&gt;I am awesome!!&lt;/span&gt;&lt;/dd&gt;
&lt;/dl&gt;  
&lt;/form&gt;  

``

	$(document).ready(function() {  
		$('.ief').ief();  
	});  
	

``
Advanced usage
--------------
``
	$(document).ready(function() {  
		$('.ief').ief({  
			onstart:function(){},  
			oncommit:function(){},  
			oncancel:function(){}  
		});  
	});  
``
