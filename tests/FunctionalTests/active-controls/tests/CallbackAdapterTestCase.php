<?php

class CallbackAdapterTestCase extends SeleniumTestCase
{
	function test()
	{
		$this->skipBrowsers(self::INTERNET_EXPLORER);

		$this->open("active-controls/index.php?page=ControlAdapterTest");
		$this->assertTextPresent('Control Adapter - State Tracking Tests');

		$this->click('button2');
		$this->assertAlert('ok');

		$this->click('test6');
		$this->pause(800);
		$this->click('test7');
		$this->pause(800);
		$this->click('test8');
		$this->pause(800);
		$this->click('test9');
		$this->pause(800);

		$this->click('button1');
		$this->assertAlert('haha!');

		$this->click('button2');
		$this->assertAlert('ok');
		$this->assertAlert('baz!');

	}

	function testIE()
	{
		$this->targetBrowsers(self::INTERNET_EXPLORER);

		$this->open("active-controls/index.php?page=ControlAdapterTest");
		$this->assertTextPresent('Control Adapter - State Tracking Tests');

		$this->click('button2');
		$this->assertAlert('ok');

		$this->click('test6');
		$this->pause(800);
		$this->click('test7');
		$this->pause(800);
		$this->click('test8');
		$this->pause(800);
		$this->click('test9');
		$this->pause(800);

		$this->click('button1');
		$this->assertAlert('haha!');

		//IE alerts in diffrent order
		$this->click('button2');
		$this->assertAlert('baz!');
		$this->assertAlert('ok');
	}
}

?>