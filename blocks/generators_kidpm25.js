Blockly.JavaScript['kidpm25_read'] = function(block) {
	var dropdown_size = block.getFieldValue('size');

	var WIRE_OBJ = 'Wire';
	var SDA_PIN = 21, SCL_PIN = 22; 

	var board_name = Vue.prototype.$global.board.board_info.name;
	if (board_name == 'kidbright-arduino' || board_name == 'openkb') {
		WIRE_OBJ = 'Wire1';
		SDA_PIN = 4;
		SCL_PIN = 5;
	} else if (board_name == 'ipst-wifi') {

	}

	var code = '';
	code += '#EXTINC#include <KidPM25.h>#END\n';
	code += '#EXTINC#include <Wire.h>#END\n';
	code += '#VARIABLE KidPM25 kidpm25(&' + WIRE_OBJ + ');#END\n';
	code += '#SETUP ' + WIRE_OBJ + '.begin(' + SDA_PIN + ', ' + SCL_PIN + '); #END';
	code += 'kidpm25.read(' + dropdown_size + ')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
