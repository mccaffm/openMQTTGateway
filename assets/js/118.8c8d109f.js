(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{507:function(e,t,o){"use strict";o.r(t);var a=o(14),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"displays"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#displays"}},[e._v("#")]),e._v(" Displays")]),e._v(" "),t("h2",{attrs:{id:"ssd1306-display-heltec-sx127x-and-lilygo®-lora32-boards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssd1306-display-heltec-sx127x-and-lilygo®-lora32-boards"}},[e._v("#")]),e._v(" SSD1306 Display (Heltec SX127X and LILYGO® LoRa32 boards)")]),e._v(" "),t("p",[e._v("Several options are available for the display of information on the SSD1306 display. Some options are exclusive to each other, and when a different option is enabled, the current option is disabled.")]),e._v(" "),t("p",[e._v("The current SSD1306 display states are being published to the "),t("code",[e._v("SSD1306toMQTT")]),e._v(" topic, e.g.")]),e._v(" "),t("p",[t("code",[e._v('{"onstate":true,"brightness":50,"display-flip":true,"idlelogo":true,"log-oled":false,"json-oled":true}')])]),e._v(" "),t("h3",{attrs:{id:"display-on-off"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#display-on-off"}},[e._v("#")]),e._v(" Display ON/OFF")]),e._v(" "),t("p",[e._v("To turn the SSD1306 display on or off.")]),e._v(" "),t("p",[e._v("This can be enabled with the compiler directive "),t("code",[e._v("-DDISPLAY_STATE=true")]),e._v(".")]),e._v(" "),t("p",[e._v("MQTT Display OFF command:")]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSSD1306/config -m {"onstate":false}')])]),e._v(" "),t("p",[e._v("MQTT Display ON command:")]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSSD1306/config -m {"onstate":true}')])]),e._v(" "),t("h3",{attrs:{id:"brightness"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#brightness"}},[e._v("#")]),e._v(" Brightness")]),e._v(" "),t("p",[e._v("The display brightness can be set between 0-100%.")]),e._v(" "),t("p",[e._v("It is recommended to set a value lower than 100 to extend the life of the OLED display. The default setting is 50.")]),e._v(" "),t("p",[e._v("This can be set with the compiler directive "),t("code",[e._v("-DDISPLAY_BRIGHTNESS=50")]),e._v(".")]),e._v(" "),t("p",[e._v("or with the runtime command")]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSSD1306/config -m {"brightness":50}')])]),e._v(" "),t("h3",{attrs:{id:"metric-or-imperial-property-units"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metric-or-imperial-property-units"}},[e._v("#")]),e._v(" Metric or Imperial property units")]),e._v(" "),t("p",[e._v("To have applicable device properties displayed in Imperial units, e.g. °F for temperature.")]),e._v(" "),t("p",[e._v("This can be set with the compiler directive "),t("code",[e._v("-DDISPLAY_METRIC=false")]),e._v(".")]),e._v(" "),t("p",[e._v("As the display Metric setting is being defined in the WebUI part of OpenMQTTGateway changes need to be sent there with the runtime command")]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoWebUI/config -m {"displayMetric":false}')])]),e._v(" "),t("h3",{attrs:{id:"rotating-the-display-by-180-degrees"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rotating-the-display-by-180-degrees"}},[e._v("#")]),e._v(" Rotating the display by 180 degrees")]),e._v(" "),t("p",[e._v("This can be set with the compiler directive "),t("code",[e._v("-DDISPLAY_FLIP=false")]),e._v(".")]),e._v(" "),t("p",[e._v("or with the runtime command")]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSSD1306/config -m {"display-flip":false}')])]),e._v(" "),t("h3",{attrs:{id:"display-idle-logo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#display-idle-logo"}},[e._v("#")]),e._v(" Display idle Logo")]),e._v(" "),t("p",[e._v("To display the OpenMQTTGateway logo during device display idle time. This reduces the likelihood of burn-in.")]),e._v(" "),t("p",[e._v("This can be set with the compiler directive "),t("code",[e._v("-DDISPLAY_IDLE_LOGO=true")]),e._v(".")]),e._v(" "),t("p",[e._v("or at runtime with")]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSSD1306/config -m {"idlelogo":true}')])]),e._v(" "),t("h3",{attrs:{id:"setting-the-log-output"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-log-output"}},[e._v("#")]),e._v(" Setting the log output")]),e._v(" "),t("p",[e._v("The display of serial log messages to the display can be enabled via compiler directive "),t("code",[e._v("-DLOG_TO_OLED=true")]),e._v(" or via MQTT commands.")]),e._v(" "),t("p",[e._v("For example if you want to set the serial log to OLED")]),e._v(" "),t("p",[t("code",[e._v("mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSSD1306/config -m '{\"log-oled\":true}'")])]),e._v(" "),t("p",[e._v("you can also revert it back with")]),e._v(" "),t("p",[t("code",[e._v("mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSSD1306/config -m '{\"log-oled\":false}'")])]),e._v(" "),t("p",[e._v("The log level of the messages displayed is Errors and Warnings, and this can only be changed via the compiler directive "),t("code",[e._v("-DLOG_LEVEL_OLED=LOG_LEVEL_NOTICE")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"displaying-module-json-messages-default"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#displaying-module-json-messages-default"}},[e._v("#")]),e._v(" Displaying Module json messages (default)")]),e._v(" "),t("p",[e._v("The display of messages from various modules is also supported. Currently supported modules include "),t("code",[e._v("ZgatewayRTL_433")]),e._v(", "),t("code",[e._v("ZgatewayBT")]),e._v(" and "),t("code",[e._v("ZsensorBME280")]),e._v(".")]),e._v(" "),t("p",[e._v("This can be enabled with the compiler directive "),t("code",[e._v("-DJSON_TO_OLED=true")]),e._v(".")]),e._v(" "),t("p",[e._v("You can also change it by MQTT. For example if you want to display module json messages:")]),e._v(" "),t("p",[t("code",[e._v("mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSSD1306/config -m '{\"json-oled\":true}'")])]),e._v(" "),t("p",[e._v("And to disable the display of module json messages:")]),e._v(" "),t("p",[t("code",[e._v("mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSSD1306/config -m '{\"display-json\":false}'")])]),e._v(" "),t("h3",{attrs:{id:"store-the-current-display-configuration-in-the-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#store-the-current-display-configuration-in-the-gateway"}},[e._v("#")]),e._v(" Store the current display configuration in the gateway")]),e._v(" "),t("p",[e._v("To store the running display configuration into non-volatile storage on the gateway use the following command. This assures persistence across restarts.")]),e._v(" "),t("p",[t("code",[e._v("mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSSD1306/config -m '{\"save\":true}'")])]),e._v(" "),t("p",[e._v("At any time, you can reload the stored configuration with the command:")]),e._v(" "),t("p",[t("code",[e._v("mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSSD1306/config -m '{\"load\":true}'")])]),e._v(" "),t("p",[e._v("If you want to erase the stored configuration, use the command:")]),e._v(" "),t("p",[t("code",[e._v("mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSSD1306/config -m '{\"erase\":true}'")])]),e._v(" "),t("p",[e._v("Note that this will not change the running configuration, it only ensures that the default configuration is used at next startup.")]),e._v(" "),t("p",[e._v("If you want to load the default configuration use the command:")]),e._v(" "),t("p",[t("code",[e._v("mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSSD1306/config -m '{\"init\":true}'")])]),e._v(" "),t("p",[e._v("Note that this will not change the stored configuration, "),t("code",[e._v("erase")]),e._v(" or "),t("code",[e._v("save")]),e._v(" is still needed to overwrite the saved configuration.")])])}),[],!1,null,null,null);t.default=s.exports}}]);