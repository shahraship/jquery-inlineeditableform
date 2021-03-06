jquery-inline editable form plugin
==================================

This jquery plugin is written to provide inline editing capability for form.

Many times users need to submit the entire form instead of incrementally submitting independent inline edits at a time.

This plugin allows you turn text on web page into an editable field. The requirement is that the text be enclosed within a &lt;form&gt; tag.

## How to get it

### Manual download
Use **https://github.com/shahraship/jquery-inlineeditableform** main page.

### Bower
````
bower install jquery-ief
````

### Basic usage

````html
<form>
	<dl>
		<dt>Name</dt>
		<dd>
			<span id="name" class="ief">Michael Jackson</span>
		</dd>
		<dt>Address</dt>
		<dd>
			<span id="address" class="ief" data-ief-edittype="textarea">2
				Needless Alley,<br />Awesome Town, NY 10001
			</span>
		</dd>
		<dt>Gender</dt>
		<dd>
			<span id="gender" class="ief" data-ief-edittype="select"
				data-ief-selectvalues='[{"label":"Male","value":"male","selected":true},{"label":"Female","value":"female"}]'>Male</span>
		</dd>
		<dd>
			<span id="awesome" class="ief" data-ief-edittype="input:checkbox"
				data-ief-checked="true">I am awesome!!</span>
		</dd>
	</dl>
</form>
````

JQuery

````html

	$(document).ready(function() {  
		$('.ief').ief();  
	});  
	
````


### Advanced usage

````html
	$(document).ready(function() {  
		$('.ief').ief({
			onstart:function(){},
			oncommit:function(){},
			oncancel:function(){}
		});
	});
````
