var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '구글 위성영상',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_VWorldSatellite_1 = new ol.layer.Tile({
            'title': 'VWorld Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://xdworld.vworld.kr/2d/Satellite/service/{z}/{x}/{y}.jpeg'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_kgarden_pt_3 = new ol.format.GeoJSON();
var features_kgarden_pt_3 = format_kgarden_pt_3.readFeatures(json_kgarden_pt_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kgarden_pt_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kgarden_pt_3.addFeatures(features_kgarden_pt_3);
var lyr_kgarden_pt_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kgarden_pt_3, 
                style: style_kgarden_pt_3,
                popuplayertitle: 'kgarden_pt',
                interactive: true,
                title: '<img src="styles/legend/kgarden_pt_3.png" /> kgarden_pt'
            });
var format_4horverpanogeocag3demo_4 = new ol.format.GeoJSON();
var features_4horverpanogeocag3demo_4 = format_4horverpanogeocag3demo_4.readFeatures(json_4horverpanogeocag3demo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4horverpanogeocag3demo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4horverpanogeocag3demo_4.addFeatures(features_4horverpanogeocag3demo_4);
var lyr_4horverpanogeocag3demo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4horverpanogeocag3demo_4, 
                style: style_4horverpanogeocag3demo_4,
                popuplayertitle: '4-hor-ver-pano-geocag-3(demo)',
                interactive: true,
                title: '<img src="styles/legend/4horverpanogeocag3demo_4.png" /> 4-hor-ver-pano-geocag-3(demo)'
            });

lyr__0.setVisible(true);lyr_VWorldSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_kgarden_pt_3.setVisible(true);lyr_4horverpanogeocag3demo_4.setVisible(true);
var layersList = [lyr__0,lyr_VWorldSatellite_1,lyr_OpenStreetMap_2,lyr_kgarden_pt_3,lyr_4horverpanogeocag3demo_4];
lyr_kgarden_pt_3.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'name': 'name', 'add1': 'add1', 'add2': 'add2', 'address': 'address', 'area': 'area', 'blt_year': 'blt_year', 'area_no': 'area_no', 'name_post': 'name_post', 'eng_name': 'eng_name', 'heritage': 'heritage', 'source_1': 'source_1', 'type': 'type', });
lyr_4horverpanogeocag3demo_4.set('fieldAliases', {'qc_id_1': 'qc_id_1', 'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'name_': 'name_', 'date': 'date', 'author': 'author', 'place_name': 'place_name', 'layer': 'layer', 'path': 'path', 'id': 'id', });
lyr_kgarden_pt_3.set('fieldImages', {'qc_id': '', 'id': 'TextEdit', 'name': 'TextEdit', 'add1': 'TextEdit', 'add2': 'TextEdit', 'address': 'TextEdit', 'area': 'TextEdit', 'blt_year': 'TextEdit', 'area_no': 'TextEdit', 'name_post': 'TextEdit', 'eng_name': 'TextEdit', 'heritage': 'TextEdit', 'source_1': 'TextEdit', 'type': 'TextEdit', });
lyr_4horverpanogeocag3demo_4.set('fieldImages', {'qc_id_1': 'Hidden', 'qc_id_0': 'Hidden', 'qc_id': 'Hidden', 'photo': 'ExternalResource', 'filename': 'Hidden', 'directory': 'Hidden', 'altitude': 'Hidden', 'direction': 'Hidden', 'rotation': 'Hidden', 'longitude': 'Hidden', 'latitude': 'Hidden', 'timestamp': 'TextEdit', 'name_': 'Hidden', 'date': 'DateTime', 'author': 'TextEdit', 'place_name': 'TextEdit', 'layer': 'Hidden', 'path': 'Hidden', 'id': 'TextEdit', });
lyr_kgarden_pt_3.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'inline label - visible with data', 'name': 'header label - always visible', 'add1': 'inline label - visible with data', 'add2': 'inline label - visible with data', 'address': 'inline label - visible with data', 'area': 'inline label - visible with data', 'blt_year': 'inline label - visible with data', 'area_no': 'hidden field', 'name_post': 'hidden field', 'eng_name': 'inline label - visible with data', 'heritage': 'hidden field', 'source_1': 'hidden field', 'type': 'hidden field', });
lyr_4horverpanogeocag3demo_4.set('fieldLabels', {'photo': 'inline label - visible with data', 'timestamp': 'hidden field', 'date': 'inline label - visible with data', 'author': 'inline label - visible with data', 'place_name': 'header label - always visible', 'id': 'inline label - visible with data', });
lyr_4horverpanogeocag3demo_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});