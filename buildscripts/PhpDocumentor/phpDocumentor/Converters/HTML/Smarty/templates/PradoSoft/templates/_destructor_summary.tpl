{if $methods}
    {section name=method loop=$methods}
        {if $methods[method].function_name == "__destruct"}
            <hr size="1" noshade="noshade"/>
            <a name="desructor-summary"></a>
            <table class="method-summary" cellspacing="1">
                <tr>
                    <th colspan="2">Destructor Summary</th>
                </tr>
                <tr>
                    <td class="type" nowrap="nowrap" width="1%">{strip}
                        {$methods[method].access}
                    {/strip}</td>
                    <td>
                        <div class="declaration">{strip}
                            <a href="{$methods[method].id}">{$methods[method].function_name}</a>
                            {$methods[method].ifunction_call.params}
                        {/strip}</div>
                        <div class="description">
                            {$methods[method].sdesc}
                        </div>
                    </td>
                </tr>
            </table>
        {/if}
    {/section}
{/if}
