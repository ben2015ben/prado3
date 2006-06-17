<?php
/**
 * TCallbackOptions component class file.
 *
 * @author Wei Zhuo <weizhuo[at]gamil[dot]com>
 * @link http://www.pradosoft.com/
 * @copyright Copyright &copy; 2006 PradoSoft
 * @license http://www.pradosoft.com/license/
 * @version $Revision: $  : $
 * @package System.Web.UI.ActiveControls
 */

/**
 * TCallbackOptions class.
 * 
 * TCallbackOptions allows common set of callback client-side options
 * to be attached to other active controls.
 *
 * @author Wei Zhuo <weizhuo[at]gmail[dot]com>
 * @version $Revision: $  Sun Jun 18 08:10:50 EST 2006 $
 * @package System.Web.UI.ActiveControls
 * @since 3.0
 */
class TCallbackOptions extends TControl
{ 
	/**
	 * @var TCallbackClientSideOptions client side callback options.
	 */
	private $_clientSide;
	
	/**
	 * Callback client-side options can be set by setting the properties of
	 * the ClientSide property. E.g. <com:TCallbackOptions ClientSide.OnSuccess="..." />
	 * See {@link TCallbackClientSideOptions} for details on the properties of
	 * ClientSide.
	 * @return TCallbackClientSideOptions client-side callback options.
	 */
	public function getClientSide()
	{
		if(is_null($this->_clientSide))
			$this->_clientSide = $this->createClientSideOptions();
		return $this->_clientSide;
	}
	
	/**
	 * @return TCallbackClientSideOptions callback client-side options.
	 */
	protected function createClientSideOptions()
	{
		return new TCallbackClientSideOptions;
	}
}

?>