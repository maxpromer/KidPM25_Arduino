Blockly.Blocks['kidpm25_read'] = {
	init: function() {
		this.jsonInit({
			"message0": "KidPM25 read %1",
			"args0": [{
				"type": "field_dropdown",
				"name": "size",
				"options": [
					[ "PM2.5", "25" ],
					[ "PM1.0", "10" ],
					[ "PM10", "100" ]
				]
			}],
			"output": "Number",
			"colour": 135,
			"tooltip": "Read mass concentration of PM1.0/2.5/10",
			"helpUrl": "https://www.ioxhop.com/"
		});
	}
};
