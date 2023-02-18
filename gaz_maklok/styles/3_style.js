var size = 0;
var placement = 'point';
function categories__3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'сосна (18-23 м)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,109,0,0.5686274509803921)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'сосна (8-20 м)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,162,0,0.5450980392156862)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'сосна, береза, тополь (3-6 м)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,196,95,0.5450980392156862)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'сосна (1-3 м)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,235,123,0.5137254901960784)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'сухостой (15 м)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(167,73,0,0.5882352941176471)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'клен, сосна (6 м)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(51,255,0,0.5411764705882353)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'клен, береза, тополь (3-6 м)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(1,255,225,0.5607843137254902)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'луг с кустами клена яблони, сосны':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(180,196,25,0.5176470588235295)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'камыш, клен, береза':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(231,94,142,0.5372549019607843)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style__3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Растительность");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories__3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
