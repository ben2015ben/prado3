{if $methods || $imethods}
    <hr size="1" noshade="noshade"/>
    <a name="method-summary"></a>
    <table class="method-summary" cellspacing="1">
        <tr>
            <th colspan="2">Method Summary</th>
        </tr>
        {section name=method loop=$methods}
            {if $methods[method].function_name != "__construct" &&
                $methods[method].function_name != "__destruct"}
                {*
		{if trim(substr($methods[method].function_call, 0, 1)) == "&"}
                    {assign var="ref" value="true"}
                    {assign var="css" value=" class=\"reference\""}
                {else}
                    {assign var="ref" value="false"}
                    {assign var="css" value=""}
                {/if}
		*}
                <tr>
                    <td class="type" nowrap="nowrap" width="1%">
                        {if $methods[method].access == "protected"}
                            protected&nbsp;
                        {/if}

                        {if $methods[method].abstract == 1}
                            abstract&nbsp;
                        {/if}

                        {if $methods[method].static == 1}
                            static&nbsp;
                        {/if}

                        {$methods[method].function_return}
{*
                        {if $ref == "true"}
                            &nbsp;&amp;
                        {/if}
*}
                    </td>
                    <td>
                        <div class="declaration">
                            <a href="{$methods[method].id}">{$methods[method].function_name}</a>
						({strip}
						{if $methods[method].ifunction_call.params}
							{foreach item=param name="method" from=$methods[method].ifunction_call.params}	
								{$param.type} {$param.name}{if !$smarty.foreach.method.last}, {/if}
							{/foreach}
                        	    
						{/if}
						{/strip})
						</div>
                        <div class="description">
                            {$methods[method].sdesc}
                        </div>
                    </td>
                </tr>
            {/if}
        {/section}
    </table>
{/if}
