var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_kgarden_pt_1 = new ol.format.GeoJSON();
var features_kgarden_pt_1 = format_kgarden_pt_1.readFeatures(json_kgarden_pt_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kgarden_pt_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kgarden_pt_1.addFeatures(features_kgarden_pt_1);
var lyr_kgarden_pt_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kgarden_pt_1, 
                style: style_kgarden_pt_1,
                popuplayertitle: 'kgarden_pt',
                interactive: true,
                title: '<img src="styles/legend/kgarden_pt_1.png" /> kgarden_pt'
            });
var format_4horverpanogeocag3demo_2 = new ol.format.GeoJSON();
var features_4horverpanogeocag3demo_2 = format_4horverpanogeocag3demo_2.readFeatures(json_4horverpanogeocag3demo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4horverpanogeocag3demo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4horverpanogeocag3demo_2.addFeatures(features_4horverpanogeocag3demo_2);
var lyr_4horverpanogeocag3demo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4horverpanogeocag3demo_2, 
                style: style_4horverpanogeocag3demo_2,
                popuplayertitle: '4-hor-ver-pano-geocag-3(demo)',
                interactive: true,
                title: '<img src="styles/legend/4horverpanogeocag3demo_2.png" /> 4-hor-ver-pano-geocag-3(demo)'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_kgarden_pt_1.setVisible(true);lyr_4horverpanogeocag3demo_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_kgarden_pt_1,lyr_4horverpanogeocag3demo_2];
lyr_kgarden_pt_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'name': 'name', 'add1': 'add1', 'add2': 'add2', 'address': 'address', 'area': 'area', 'blt_year': 'blt_year', 'area_no': 'area_no', 'name_post': 'name_post', 'eng_name': 'eng_name', 'heritage': 'heritage', 'source_1': 'source_1', 'type': 'type', });
lyr_4horverpanogeocag3demo_2.set('fieldAliases', {'qc_id_1': 'qc_id_1', 'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'name_': 'name_', 'date': 'date', 'author': 'author', 'place_name': 'place_name', 'layer': 'layer', 'path': 'path', 'id': 'id', });
lyr_kgarden_pt_1.set('fieldImages', {'qc_id': '', 'id': 'TextEdit', 'name': 'TextEdit', 'add1': 'TextEdit', 'add2': 'TextEdit', 'address': 'TextEdit', 'area': 'TextEdit', 'blt_year': 'TextEdit', 'area_no': 'TextEdit', 'name_post': 'TextEdit', 'eng_name': 'TextEdit', 'heritage': 'TextEdit', 'source_1': 'TextEdit', 'type': 'TextEdit', });
lyr_4horverpanogeocag3demo_2.set('fieldImages', {'qc_id_1': 'TextEdit', 'qc_id_0': 'TextEdit', 'qc_id': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'TextEdit', 'name_': 'TextEdit', 'date': 'DateTime', 'author': 'TextEdit', 'place_name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'id': 'TextEdit', });
lyr_kgarden_pt_1.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'inline label - visible with data', 'name': 'hidden field', 'add1': 'inline label - visible with data', 'add2': 'inline label - visible with data', 'address': 'inline label - visible with data', 'area': 'inline label - visible with data', 'blt_year': 'inline label - visible with data', 'area_no': 'hidden field', 'name_post': 'hidden field', 'eng_name': 'inline label - visible with data', 'heritage': 'hidden field', 'source_1': 'hidden field', 'type': 'hidden field', });
lyr_4horverpanogeocag3demo_2.set('fieldLabels', {'qc_id_1': 'hidden field', 'qc_id_0': 'hidden field', 'qc_id': 'hidden field', 'photo': 'inline label - visible with data', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp': 'hidden field', 'name_': 'hidden field', 'date': 'inline label - visible with data', 'author': 'inline label - visible with data', 'place_name': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', 'id': 'inline label - visible with data', });
lyr_4horverpanogeocag3demo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});