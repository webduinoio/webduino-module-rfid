Blockly.JavaScript['rfid_new'] = function (block) {
    var dropdown_sda_ = block.getFieldValue('sda_');
    var dropdown_sck_ = block.getFieldValue('sck_');
    var dropdown_mosi_ = block.getFieldValue('mosi_');
    var dropdown_miso_ = block.getFieldValue('miso_');
    var code = 'getRFID(board)';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };
  
  
  Blockly.JavaScript['rfid_enter'] = function (block) {
    var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
    var statements_on_ = Blockly.JavaScript.statementToCode(block, 'on_');
    var code = variable_name_ + '.read();\n' +
      variable_name_ + '.on("enter",async function(_uid){\n' +
      '  ' + variable_name_ + '._uid = _uid;\n' +
      statements_on_ +
      '});\n';
    return code;
  };
  
  
  Blockly.JavaScript['rfid_uid'] = function (block) {
    var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
    var code = variable_name_ + '._uid';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
  
  Blockly.JavaScript['rfid_if'] = function (block) {
    var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
    var value_uid_ = Blockly.JavaScript.valueToCode(block, 'uid_', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
    var code = 'if(' + variable_name_ + '._uid == ' + value_uid_ + '){\n' +
      statements_do_ +
      '}\n';
    return code;
  };
  
  
  Blockly.JavaScript['rfid_leave'] = function (block) {
    var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
    var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
    var code = variable_name_ + '.on("leave",async function(_uid){\n' +
      statements_do_ +
      '});\n';
    return code;
  };
  
  
  Blockly.JavaScript['rfid_stopread'] = function (block) {
    var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
    var code = variable_name_ + '.stopRead();\n';
    return code;
  };