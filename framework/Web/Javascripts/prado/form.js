/*Prado.Focus = Class.create();

Prado.Focus.setFocus = function(id)
{
	var target = document.getElementById ? document.getElementById(id) : document.all[id];
	if(target && !Prado.Focus.canFocusOn(target))
	{
		target = Prado.Focus.findTarget(target);
	}
	if(target)
	{
        try
		{
            target.focus();
			target.scrollIntoView(false);
            if (window.__smartNav)
			{
				window.__smartNav.ae = target.id;
			}
		}
        catch (e)
		{
		}
	}
}

Prado.Focus.canFocusOn = function(element)
{
	if(!element || !(element.tagName))
		return false;
	var tagName = element.tagName.toLowerCase();
	return !element.disabled && (!element.type || element.type.toLowerCase() != "hidden") && Prado.Focus.isFocusableTag(tagName) && Prado.Focus.isVisible(element);
}

Prado.Focus.isFocusableTag = function(tagName)
{
	return (tagName == "input" || tagName == "textarea" || tagName == "select" || tagName == "button" || tagName == "a");
}


Prado.Focus.findTarget = function(element)
{
	if(!element || !(element.tagName))
	{
		return null;
	}
	var tagName = element.tagName.toLowerCase();
	if (tagName == "undefined")
	{
		return null;
	}
	var children = element.childNodes;
	if (children)
	{
		for(var i=0;i<children.length;i++)
		{
			try
			{
				if(Prado.Focus.canFocusOn(children[i]))
				{
					return children[i];
				}
				else
				{
					var target = Prado.Focus.findTarget(children[i]);
					if(target)
					{
						return target;
					}
				}
			}
			catch (e)
			{
			}
		}
	}
	return null;
}

Prado.Focus.isVisible = function(element)
{
	var current = element;
	while((typeof(current) != "undefined") && (current != null))
	{
		if(current.disabled || (typeof(current.style) != "undefined" && ((typeof(current.style.display) != "undefined" && current.style.display == "none") || (typeof(current.style.visibility) != "undefined" && current.style.visibility == "hidden") )))
		{
			return false;
		}
		if(typeof(current.parentNode) != "undefined" &&	current.parentNode != null && current.parentNode != current && current.parentNode.tagName.toLowerCase() != "body")
		{
			current = current.parentNode;
		}
		else
		{
			return true;
		}
	}
    return true;
}
*/


Prado.PostBack = function(event,options)
{
	var form = $(options['FormID']);
	var canSubmit = true;

	if(options['CausesValidation'] && typeof(Prado.Validation) != "undefined")
	{
		if(!Prado.Validation.validate(options['FormID'], options['ValidationGroup']))
			return Event.stop(event);
	}

	if(options['PostBackUrl'] && options['PostBackUrl'].length > 0)
		form.action = options['PostBackUrl'];

	if(options['TrackFocus'])
	{
		var lastFocus = $('PRADO_LASTFOCUS');
		if(lastFocus)
		{
			var active = document.activeElement; //where did this come from
			if(active)
				lastFocus.value = active.id;
			else
				lastFocus.value = options['EventTarget'];
		}
	}

	$('PRADO_POSTBACK_TARGET').value = options['EventTarget'];
	$('PRADO_POSTBACK_PARAMETER').value = options['EventParameter'];
	if(options['StopEvent']) 
		Event.stop(event);
	Event.fireEvent(form,"submit");
}

/*

Prado.doPostBack = function(formID, eventTarget, eventParameter, performValidation, validationGroup, actionUrl, trackFocus, clientSubmit)
{
	if (typeof(performValidation) == 'undefined')
	{
		var performValidation = false;
		var validationGroup = '';
		var actionUrl = null;
		var trackFocus = false;
		var clientSubmit = true;
	}
	var theForm = document.getElementById ? document.getElementById(formID) : document.forms[formID];
	var canSubmit = true;
    if (performValidation)
	{
		//canSubmit = Prado.Validation.validate(validationGroup);
	*	Prado.Validation.ActiveTarget = theForm;
		Prado.Validation.CurrentTargetGroup = null;
		Prado.Validation.IsGroupValidation = false;
		canSubmit = Prado.Validation.IsValid(theForm);
		Logger.debug(canSubmit);*
		canSubmit = Prado.Validation.IsValid(theForm);
	}
	if (canSubmit)
	{
		if (actionUrl != null && (actionUrl.length > 0))
		{
			theForm.action = actionUrl;
		}
		if (trackFocus)
		{
			var lastFocus = theForm.elements['PRADO_LASTFOCUS'];
			if ((typeof(lastFocus) != 'undefined') && (lastFocus != null))
			{
				var active = document.activeElement;
				if (typeof(active) == 'undefined')
				{
					lastFocus.value = eventTarget;
				}
				else
				{
					if ((active != null) && (typeof(active.id) != 'undefined'))
					{
						if (active.id.length > 0)
						{
							lastFocus.value = active.id;
						}
						else if (typeof(active.name) != 'undefined')
						{
							lastFocus.value = active.name;
						}
					}
				}
			}
		}
		if (!clientSubmit)
		{
			canSubmit = false;
		}
	}
	if (canSubmit && (!theForm.onsubmit || theForm.onsubmit()))
	{
		theForm.PRADO_POSTBACK_TARGET.value = eventTarget;
		theForm.PRADO_POSTBACK_PARAMETER.value = eventParameter;
		theForm.submit();
	}
}
*/