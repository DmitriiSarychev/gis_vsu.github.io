var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'Карта OSM',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.vsu.ru/ru/university/structure/faculties/geogr.html">© ГГиТ ВГУ</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Google_1 = new ol.layer.Tile({
            'title': 'Космические снимки Google',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.vsu.ru/ru/university/structure/faculties/geogr.html">© ГГиТ ВГУ</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_S1lnN_2 = new ol.format.GeoJSON();
var features_S1lnN_2 = format_S1lnN_2.readFeatures(json_S1lnN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S1lnN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S1lnN_2.addFeatures(features_S1lnN_2);
var lyr_S1lnN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S1lnN_2, 
                style: style_S1lnN_2,
                popuplayertitle: "Индекс Маргалефа (S-1)/ln(N)",
                interactive: true,
    title: 'Индекс Маргалефа (S-1)/ln(N)<br />\
    <img src="styles/legend/S1lnN_2_0.png" /> <0.5<br />\
    <img src="styles/legend/S1lnN_2_1.png" /> 0.5 - 1<br />\
    <img src="styles/legend/S1lnN_2_2.png" /> 1 - 1.5<br />\
    <img src="styles/legend/S1lnN_2_3.png" /> 1.5 - 2<br />\
    <img src="styles/legend/S1lnN_2_4.png" /> >2<br />'
        });
var format_S_3 = new ol.format.GeoJSON();
var features_S_3 = format_S_3.readFeatures(json_S_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_3.addFeatures(features_S_3);
var lyr_S_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S_3, 
                style: style_S_3,
                popuplayertitle: "Количество видов (S)",
                interactive: true,
    title: 'Количество видов (S)<br />\
    <img src="styles/legend/S_3_0.png" /> 0<br />\
    <img src="styles/legend/S_3_1.png" /> 1 - 2<br />\
    <img src="styles/legend/S_3_2.png" /> 3 - 6<br />\
    <img src="styles/legend/S_3_3.png" /> 7 - 10<br />\
    <img src="styles/legend/S_3_4.png" /> >10<br />'
        });
var format_N_4 = new ol.format.GeoJSON();
var features_N_4 = format_N_4.readFeatures(json_N_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N_4.addFeatures(features_N_4);
var lyr_N_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N_4, 
                style: style_N_4,
                popuplayertitle: "Количество точек (N)",
                interactive: true,
    title: 'Количество точек (N)<br />\
    <img src="styles/legend/N_4_0.png" /> 0<br />\
    <img src="styles/legend/N_4_1.png" /> 1 - 3<br />\
    <img src="styles/legend/N_4_2.png" /> 4 - 6<br />\
    <img src="styles/legend/N_4_3.png" /> 7 - 10<br />\
    <img src="styles/legend/N_4_4.png" /> >10<br />'
        });
var format_50x50_5 = new ol.format.GeoJSON();
var features_50x50_5 = format_50x50_5.readFeatures(json_50x50_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_50x50_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_50x50_5.addFeatures(features_50x50_5);
var lyr_50x50_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_50x50_5, 
                style: style_50x50_5,
                popuplayertitle: "Сетка обследования (квадраты 50x50 м)",
                interactive: true,
                title: '<img src="styles/legend/50x50_5.png" /> Сетка обследования (квадраты 50x50 м)'
            });
var format_l_6 = new ol.format.GeoJSON();
var features_l_6 = format_l_6.readFeatures(json_l_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_l_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6.addFeatures(features_l_6);
var lyr_6 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_l_6, 
                radius: 8 * 2,
                gradient: ['#404040', '#ffff00', '#ffcc00', '#f44900', '#ea4207', '#8b0051'],
                blur: 15,
                shadow: 250,
                title: 'Очаги инвазий (динамическая плотность точек)'
            });
var format_703_7 = new ol.format.GeoJSON();
var features_703_7 = format_703_7.readFeatures(json_703_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_703_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_703_7.addFeatures(features_703_7);
var lyr_703_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_703_7, 
                style: style_703_7,
                popuplayertitle: "Инвазивные виды (703 точки)",
                interactive: true,
    title: 'Инвазивные виды (703 точки)<br />\
    <img src="styles/legend/703_7_0.png" /> Аморфа кустарниковая (2)<br />\
    <img src="styles/legend/703_7_1.png" /> Барвинок малый (13)<br />\
    <img src="styles/legend/703_7_2.png" /> Виноград амурский (31)<br />\
    <img src="styles/legend/703_7_3.png" /> Водосбор обыкновенный (18)<br />\
    <img src="styles/legend/703_7_4.png" /> Девичий виноград пятилисточковый (114)<br />\
    <img src="styles/legend/703_7_5.png" /> Дуб красный (2)<br />\
    <img src="styles/legend/703_7_6.png" /> Дурнишник береговой (16)<br />\
    <img src="styles/legend/703_7_7.png" /> Жимолость каприфоль (7)<br />\
    <img src="styles/legend/703_7_8.png" /> Жимолость татарская (2)<br />\
    <img src="styles/legend/703_7_9.png" /> Золотарник канадский (40)<br />\
    <img src="styles/legend/703_7_10.png" /> Ирга колосистая (48)<br />\
    <img src="styles/legend/703_7_11.png" /> Карагана древовидная (8)<br />\
    <img src="styles/legend/703_7_12.png" /> Кизильник блестящий (21)<br />\
    <img src="styles/legend/703_7_13.png" /> Клен американский (113)<br />\
    <img src="styles/legend/703_7_14.png" /> Лаконос съедобный (4)<br />\
    <img src="styles/legend/703_7_15.png" /> Лепидотека пахучая (30)<br />\
    <img src="styles/legend/703_7_16.png" /> Люпин многолистный (3)<br />\
    <img src="styles/legend/703_7_17.png" /> Магония падуболистная (15)<br />\
    <img src="styles/legend/703_7_18.png" /> Мелколепестник канадский (97)<br />\
    <img src="styles/legend/703_7_19.png" /> Ослинник двулетний (24)<br />\
    <img src="styles/legend/703_7_20.png" /> Подсолнечник клубненосный (10)<br />\
    <img src="styles/legend/703_7_21.png" /> Робиния ложноакация (7)<br />\
    <img src="styles/legend/703_7_22.png" /> Рябинник рябинолистный (10)<br />\
    <img src="styles/legend/703_7_23.png" /> Стенактис однолетний (30)<br />\
    <img src="styles/legend/703_7_24.png" /> Циклахена дурнишниколистная (20)<br />\
    <img src="styles/legend/703_7_25.png" /> Череда олиственная (1)<br />\
    <img src="styles/legend/703_7_26.png" /> Шток-роза розовая (9)<br />\
    <img src="styles/legend/703_7_27.png" /> Щирица запрокинутая (8)<br />'
        });

lyr_OSM_0.setVisible(true);lyr_Google_1.setVisible(false);lyr_S1lnN_2.setVisible(false);lyr_S_3.setVisible(false);lyr_N_4.setVisible(false);lyr_50x50_5.setVisible(false);lyr_6.setVisible(false);lyr_703_7.setVisible(true);
var layersList = [lyr_OSM_0,lyr_Google_1,lyr_S1lnN_2,lyr_S_3,lyr_N_4,lyr_50x50_5,lyr_6,lyr_703_7];
lyr_S1lnN_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Количество точек': 'Количество точек', 'Количество видов': 'Количество видов', 'Индекс Маргалефа': 'Индекс Маргалефа', });
lyr_S_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Количество точек': 'Количество точек', 'Количество видов': 'Количество видов', 'Индекс Маргалефа': 'Индекс Маргалефа', });
lyr_N_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Количество точек': 'Количество точек', 'Количество видов': 'Количество видов', 'Индекс Маргалефа': 'Индекс Маргалефа', });
lyr_50x50_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_703_7.set('fieldAliases', {'fid': 'fid', '№ точки:': '№ точки:', 'Вид:': 'Вид:', 'Фото': 'Фото', 'Примечания:': 'Примечания:', 'Широта:': 'Широта:', 'Долгота:': 'Долгота:', 'Дата:': 'Дата:', 'Авторы наблюдения:': 'Авторы наблюдения:', });
lyr_S1lnN_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Количество точек': 'TextEdit', 'Количество видов': 'TextEdit', 'Индекс Маргалефа': 'TextEdit', });
lyr_S_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Количество точек': 'TextEdit', 'Количество видов': 'TextEdit', 'Индекс Маргалефа': 'TextEdit', });
lyr_N_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Количество точек': 'TextEdit', 'Количество видов': 'TextEdit', 'Индекс Маргалефа': 'TextEdit', });
lyr_50x50_5.set('fieldImages', {'fid': '', 'Name': '', });
lyr_703_7.set('fieldImages', {'fid': 'TextEdit', '№ точки:': 'Range', 'Вид:': 'TextEdit', 'Фото': 'ExternalResource', 'Примечания:': 'TextEdit', 'Широта:': 'TextEdit', 'Долгота:': 'TextEdit', 'Дата:': 'TextEdit', 'Авторы наблюдения:': 'TextEdit', });
lyr_S1lnN_2.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Количество точек': 'inline label - always visible', 'Количество видов': 'inline label - always visible', 'Индекс Маргалефа': 'inline label - always visible', });
lyr_S_3.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Количество точек': 'inline label - always visible', 'Количество видов': 'inline label - always visible', 'Индекс Маргалефа': 'inline label - always visible', });
lyr_N_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Количество точек': 'inline label - always visible', 'Количество видов': 'inline label - always visible', 'Индекс Маргалефа': 'inline label - always visible', });
lyr_50x50_5.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', });
lyr_703_7.set('fieldLabels', {'fid': 'hidden field', '№ точки:': 'inline label - always visible', 'Вид:': 'inline label - always visible', 'Фото': 'no label', 'Примечания:': 'inline label - visible with data', 'Широта:': 'inline label - always visible', 'Долгота:': 'inline label - always visible', 'Дата:': 'inline label - always visible', 'Авторы наблюдения:': 'inline label - always visible', });
lyr_703_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});