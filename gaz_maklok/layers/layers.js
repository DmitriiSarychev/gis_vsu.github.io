var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
    title: 'Растительность<br />\
    <img src="styles/legend/3_0.png" /> сосна (18-23 м)<br />\
    <img src="styles/legend/3_1.png" /> сосна (8-20 м)<br />\
    <img src="styles/legend/3_2.png" /> сосна, береза, тополь (3-6 м)<br />\
    <img src="styles/legend/3_3.png" /> сосна (1-3 м)<br />\
    <img src="styles/legend/3_4_.png" /> сухостой (15 м)<br />\
    <img src="styles/legend/3_5.png" /> клен, сосна (6 м)<br />\
    <img src="styles/legend/3_6.png" /> клен, береза, тополь (3-6 м)<br />\
    <img src="styles/legend/3_7.png" /> луг с кустами клена яблони, сосны<br />\
    <img src="styles/legend/3_8.png" /> камыш, клен, береза<br />'
        });
var format_3_4 = new ol.format.GeoJSON();
var features_3_4 = format_3_4.readFeatures(json_3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_4.addFeatures(features_3_4);
var lyr_3_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3_4, 
                style: style_3_4,
                interactive: false,
                title: '<img src="styles/legend/3_4.png" /> ТГИ3-Трасса газопровода'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/5.png" /> ПК'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: false,
                title: '<img src="styles/legend/6.png" /> Граница съемки'
            });

lyr_OpenTopoMap_0.setVisible(false);lyr_ESRISatellite_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr__3.setVisible(true);lyr_3_4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_ESRISatellite_1,lyr_GoogleSatellite_2,lyr__3,lyr_3_4,lyr__5,lyr__6];
lyr__3.set('fieldAliases', {'id': 'id', 'Растительность': 'Растительность', 'Площадь, га': 'Площадь, га', 'Площадь, %': 'Площадь, %', });
lyr_3_4.set('fieldAliases', {'layer': 'layer', });
lyr__5.set('fieldAliases', {'text': 'text', });
lyr__6.set('fieldAliases', {'id': 'id', });
lyr__3.set('fieldImages', {'id': 'Range', 'Растительность': 'TextEdit', 'Площадь, га': 'TextEdit', 'Площадь, %': 'Range', });
lyr_3_4.set('fieldImages', {'layer': 'TextEdit', });
lyr__5.set('fieldImages', {'text': 'TextEdit', });
lyr__6.set('fieldImages', {'id': 'Range', });
lyr__3.set('fieldLabels', {'id': 'inline label', 'Растительность': 'inline label', 'Площадь, га': 'inline label', 'Площадь, %': 'inline label', });
lyr_3_4.set('fieldLabels', {'layer': 'no label', });
lyr__5.set('fieldLabels', {'text': 'no label', });
lyr__6.set('fieldLabels', {'id': 'no label', });
lyr__6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});