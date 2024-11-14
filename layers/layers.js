var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HT_HEX_LEON_1 = new ol.format.GeoJSON();
var features_HT_HEX_LEON_1 = format_HT_HEX_LEON_1.readFeatures(json_HT_HEX_LEON_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HT_HEX_LEON_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HT_HEX_LEON_1.addFeatures(features_HT_HEX_LEON_1);
var lyr_HT_HEX_LEON_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HT_HEX_LEON_1, 
                style: style_HT_HEX_LEON_1,
                popuplayertitle: "HT_HEX_LEON",
                interactive: true,
                title: 'HT_HEX_LEON'
            });
var format_HechosVialesLen2024_2 = new ol.format.GeoJSON();
var features_HechosVialesLen2024_2 = format_HechosVialesLen2024_2.readFeatures(json_HechosVialesLen2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HechosVialesLen2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HechosVialesLen2024_2.addFeatures(features_HechosVialesLen2024_2);
var lyr_HechosVialesLen2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HechosVialesLen2024_2,
maxResolution:5.600893230452393,
 
                style: style_HechosVialesLen2024_2,
                popuplayertitle: "Hechos Viales León- 2024",
                interactive: true,
                title: 'Hechos Viales León- 2024'
            });
var format_HechosVialesINEGI20192022_3 = new ol.format.GeoJSON();
var features_HechosVialesINEGI20192022_3 = format_HechosVialesINEGI20192022_3.readFeatures(json_HechosVialesINEGI20192022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HechosVialesINEGI20192022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HechosVialesINEGI20192022_3.addFeatures(features_HechosVialesINEGI20192022_3);
var lyr_HechosVialesINEGI20192022_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HechosVialesINEGI20192022_3,
maxResolution:5.600893230452393,
 
                style: style_HechosVialesINEGI20192022_3,
                popuplayertitle: "HechosViales INEGI 2019-2022",
                interactive: true,
    title: 'HechosViales INEGI 2019-2022<br />\
    <img src="styles/legend/HechosVialesINEGI20192022_3_0.png" /> Fatal<br />\
    <img src="styles/legend/HechosVialesINEGI20192022_3_1.png" /> No fatal<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_HT_HEX_LEON_1.setVisible(true);lyr_HechosVialesLen2024_2.setVisible(true);lyr_HechosVialesINEGI20192022_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_HT_HEX_LEON_1,lyr_HechosVialesLen2024_2,lyr_HechosVialesINEGI20192022_3];
lyr_HT_HEX_LEON_1.set('fieldAliases', {'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'GRID_ID': 'GRID_ID', 'Shape_Leng': 'Shape_Leng', 'Año_AXXA': 'Año_AXXA', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_HechosVialesLen2024_2.set('fieldAliases', {'Fecha': 'Fecha', 'año': 'año', 'mes': 'mes', 'fatalidad/lesionados': 'fatalidad/lesionados', 'en colision con': 'en colision con', 'muertes': 'muertes', 'lesionados': 'lesionados', 'Guardia Nacional': 'Guardia Nacional', 'Nota': 'Nota', });
lyr_HechosVialesINEGI20192022_3.set('fieldAliases', {'Clase de accidentes': 'Clase de accidentes', 'Entidad': 'Entidad', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_HT_HEX_LEON_1.set('fieldImages', {'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'GRID_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Año_AXXA': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HechosVialesLen2024_2.set('fieldImages', {'Fecha': 'TextEdit', 'año': 'Range', 'mes': 'Range', 'fatalidad/lesionados': 'TextEdit', 'en colision con': 'TextEdit', 'muertes': 'Range', 'lesionados': 'Range', 'Guardia Nacional': 'CheckBox', 'Nota': 'TextEdit', });
lyr_HechosVialesINEGI20192022_3.set('fieldImages', {'Clase de accidentes': 'TextEdit', 'Entidad': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_HT_HEX_LEON_1.set('fieldLabels', {'Join_Count': 'no label', 'TARGET_FID': 'no label', 'GRID_ID': 'no label', 'Shape_Leng': 'no label', 'Año_AXXA': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_HechosVialesLen2024_2.set('fieldLabels', {'Fecha': 'no label', 'año': 'no label', 'mes': 'no label', 'fatalidad/lesionados': 'no label', 'en colision con': 'no label', 'muertes': 'no label', 'lesionados': 'no label', 'Guardia Nacional': 'no label', 'Nota': 'no label', });
lyr_HechosVialesINEGI20192022_3.set('fieldLabels', {'Clase de accidentes': 'no label', 'Entidad': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_HechosVialesINEGI20192022_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});