var wms_layers = [];


        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Космоснимки Google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'Карта OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr__2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Береза: интерполяция площади листовой пластинки",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [4058176.444205, 6537141.831401, 4086482.038256, 6562826.267039]
                            })
                        });
var format_2_3 = new ol.format.GeoJSON();
var features_2_3 = format_2_3.readFeatures(json_2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_3.addFeatures(features_2_3);
var lyr_2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_3, 
                style: style_2_3,
                interactive: true,
                title: '<img src="styles/legend/2_3.png" /> Береза: изолинии площади листовой пластинки, см^2'
            });
var lyr__4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Береза: интерполяция флуктуирующей асимметрии листьев",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [4058184.582152, 6537149.965825, 4086473.949676, 6562818.131053]
                            })
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
                title: '<img src="styles/legend/5.png" /> Береза: изолинии флуктуирующей асимметрии'
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
                interactive: true,
                title: '<img src="styles/legend/6.png" /> Береза: точки отбора листьев'
            });
var lyr__7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Тополь: интерполяция площади листовой пластинки",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [4058184.582152, 6537149.965825, 4086473.949676, 6562818.131053]
                            })
                        });
var format_2_8 = new ol.format.GeoJSON();
var features_2_8 = format_2_8.readFeatures(json_2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_8.addFeatures(features_2_8);
var lyr_2_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_8, 
                style: style_2_8,
                interactive: true,
                title: '<img src="styles/legend/2_8.png" /> Тополь: изолинии площади листовой пластинки, см^2'
            });
var lyr__9 = new ol.layer.Image({
                            opacity: 1,
                            title: "Тополь: интерполяция флуктуирующей асимметрия листьев",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [4058184.582152, 6537149.965825, 4086473.949676, 6562818.131053]
                            })
                        });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__10, 
                style: style__10,
                interactive: true,
                title: '<img src="styles/legend/10.png" /> Тополь: изолинии флуктуирующей асимметрии'
            });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__11, 
                style: style__11,
                interactive: true,
                title: '<img src="styles/legend/11.png" /> Тополь: точки отбора листьев'
            });

lyr_Google_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr__2.setVisible(true);lyr_2_3.setVisible(true);lyr__4.setVisible(false);lyr__5.setVisible(false);lyr__6.setVisible(true);lyr__7.setVisible(false);lyr_2_8.setVisible(false);lyr__9.setVisible(false);lyr__10.setVisible(false);lyr__11.setVisible(false);
var layersList = [lyr_Google_0,lyr_OpenStreetMap_1,lyr__2,lyr_2_3,lyr__4,lyr__5,lyr__6,lyr__7,lyr_2_8,lyr__9,lyr__10,lyr__11];
lyr_2_3.set('fieldAliases', {'Площадь листовой пластинки': 'Площадь листовой пластинки', });
lyr__5.set('fieldAliases', {'FA': 'FA', });
lyr__6.set('fieldAliases', {'N': 'N', 'Location': 'Location', 'FA': 'FA', 'S': 'S', 'X': 'X', 'Y': 'Y', });
lyr_2_8.set('fieldAliases', {'Площадь': 'Площадь', });
lyr__10.set('fieldAliases', {'ID': 'ID', 'FA': 'FA', });
lyr__11.set('fieldAliases', {'N': 'N', 'Location': 'Location', 'FA': 'FA', 'S': 'S', 'X': 'X', 'Y': 'Y', });
lyr_2_3.set('fieldImages', {'Площадь листовой пластинки': '', });
lyr__5.set('fieldImages', {'FA': 'TextEdit', });
lyr__6.set('fieldImages', {'N': 'Range', 'Location': 'TextEdit', 'FA': 'TextEdit', 'S': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_2_8.set('fieldImages', {'Площадь': 'TextEdit', });
lyr__10.set('fieldImages', {'ID': 'Range', 'FA': 'TextEdit', });
lyr__11.set('fieldImages', {'N': 'Range', 'Location': 'TextEdit', 'FA': 'TextEdit', 'S': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_2_3.set('fieldLabels', {'Площадь листовой пластинки': 'inline label', });
lyr__5.set('fieldLabels', {'FA': 'no label', });
lyr__6.set('fieldLabels', {'N': 'inline label', 'Location': 'inline label', 'FA': 'inline label', 'S': 'inline label', 'X': 'inline label', 'Y': 'inline label', });
lyr_2_8.set('fieldLabels', {'Площадь': 'inline label', });
lyr__10.set('fieldLabels', {'ID': 'no label', 'FA': 'inline label', });
lyr__11.set('fieldLabels', {'N': 'inline label', 'Location': 'inline label', 'FA': 'inline label', 'S': 'inline label', 'X': 'inline label', 'Y': 'inline label', });
lyr__11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});