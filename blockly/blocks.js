Blockly.Blocks['rfid_new'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("RFID，SDA")
            .appendField(new Blockly.FieldDropdown([
                ["10", "10"],
                ["15", "15"]
            ]), "sda_")
            .appendField("  SCK")
            .appendField(new Blockly.FieldDropdown([
                ["13", "13"],
                ["14", "14"]
            ]), "sck_")
            .appendField("  MOSI")
            .appendField(new Blockly.FieldDropdown([
                ["11", "11"],
                ["13", "13"]
            ]), "mosi_")
            .appendField("  MISO")
            .appendField(new Blockly.FieldDropdown([
                ["12", "12"]
            ]), "miso_");
        this.setOutput(true);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl(mainUrl + 'basic/sensor/rfid.html' + utmUrl);
    }
};

Blockly.Blocks['rfid_enter'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("rfid"), "name_")
            .appendField(Blockly.Msg.WEBDUINO_RFID_ON, "開始偵測");
        this.appendStatementInput("on_")
            .appendField(Blockly.Msg.WEBDUINO_RFID_DO, "執行");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl(mainUrl + 'basic/sensor/rfid.html' + utmUrl);
    }
};

Blockly.Blocks['rfid_uid'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("rfid"), "name_")
            .appendField(Blockly.Msg.WEBDUINO_RFID_UID, "偵測到的代碼");
        this.setOutput(true);
        this.setTooltip('');
        this.setColour(35);
        this.setHelpUrl(mainUrl + 'basic/sensor/rfid.html' + utmUrl);
    }
};

Blockly.Blocks['rfid_if'] = {
    init: function () {
        this.appendValueInput("uid_")
            .appendField(Blockly.Msg.WEBDUINO_RFID_IF, "如果")
            .appendField(new Blockly.FieldVariable("rfid"), "name_")
            .appendField(Blockly.Msg.WEBDUINO_RFID_UIDIS, "偵測到的代碼為");
        this.appendStatementInput("do_")
            .appendField(Blockly.Msg.WEBDUINO_RFID_DO, "執行");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
        this.setColour(35);
        this.setHelpUrl(mainUrl + 'basic/sensor/rfid.html' + utmUrl);
    }
};

Blockly.Blocks['rfid_leave'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.WEBDUINO_RFID_IF, "如果")
            .appendField(new Blockly.FieldVariable("rfid"), "name_")
            .appendField(Blockly.Msg.WEBDUINO_RFID_OUT, "離開偵測範圍");
        this.appendStatementInput("do_")
            .appendField(Blockly.Msg.WEBDUINO_RFID_DO, "執行");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
        this.setColour(65);
        this.setHelpUrl(mainUrl + 'basic/sensor/rfid.html' + utmUrl);
    }
};

Blockly.Blocks['rfid_stopread'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("rfid"), "name_")
            .appendField(Blockly.Msg.WEBDUINO_RFID_OFF, "停止偵測");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl(mainUrl + 'basic/sensor/rfid.html' + utmUrl);
    }
};