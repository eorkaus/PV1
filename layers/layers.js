var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '브이월드 일반도',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://xdworld.vworld.kr:8080/2d/Base/201710/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
    title: '용도건물공간정보<br />\
    <img src="styles/legend/_1_0.png" /> 가설건축물<br />\
    <img src="styles/legend/_1_1.png" /> 공공용시설<br />\
    <img src="styles/legend/_1_2.png" /> 공동주택<br />\
    <img src="styles/legend/_1_3.png" /> 공장<br />\
    <img src="styles/legend/_1_4.png" /> 교육연구및복지시설<br />\
    <img src="styles/legend/_1_5.png" /> 교육연구시설<br />\
    <img src="styles/legend/_1_6.png" /> 근린생활시설<br />\
    <img src="styles/legend/_1_7.png" /> 노유자시설<br />\
    <img src="styles/legend/_1_8.png" /> 단독주택<br />\
    <img src="styles/legend/_1_9.png" /> 동.식물 관련시설<br />\
    <img src="styles/legend/_1_10.png" /> 묘지관련시설<br />\
    <img src="styles/legend/_1_11.png" /> 문화및집회시설<br />\
    <img src="styles/legend/_1_12.png" /> 발전시설<br />\
    <img src="styles/legend/_1_13.png" /> 방송통신시설<br />\
    <img src="styles/legend/_1_14.png" /> 분뇨.쓰레기처리시설<br />\
    <img src="styles/legend/_1_15.png" /> 수련시설<br />\
    <img src="styles/legend/_1_16.png" /> 숙박시설<br />\
    <img src="styles/legend/_1_17.png" /> 업무시설<br />\
    <img src="styles/legend/_1_18.png" /> 운동시설<br />\
    <img src="styles/legend/_1_19.png" /> 운수시설<br />\
    <img src="styles/legend/_1_20.png" /> 위락시설<br />\
    <img src="styles/legend/_1_21.png" /> 위험물저장및처리시설<br />\
    <img src="styles/legend/_1_22.png" /> 의료시설<br />\
    <img src="styles/legend/_1_23.png" /> 자동차관련시설<br />\
    <img src="styles/legend/_1_24.png" /> 장례식장<br />\
    <img src="styles/legend/_1_25.png" /> 제1종근린생활시설<br />\
    <img src="styles/legend/_1_26.png" /> 제2종근린생활시설<br />\
    <img src="styles/legend/_1_27.png" /> 종교시설<br />\
    <img src="styles/legend/_1_28.png" /> 창고시설<br />\
    <img src="styles/legend/_1_29.png" /> 판매시설<br />\
    <img src="styles/legend/_1_30.png" /> <br />'
        });
var format_2_2 = new ol.format.GeoJSON();
var features_2_2 = format_2_2.readFeatures(json_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_2.addFeatures(features_2_2);
var lyr_2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_2, 
                style: style_2_2,
                interactive: true,
                title: '<img src="styles/legend/2_2.png" /> 영광2차'
            });
var format_Routefromsubstation_3 = new ol.format.GeoJSON();
var features_Routefromsubstation_3 = format_Routefromsubstation_3.readFeatures(json_Routefromsubstation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routefromsubstation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routefromsubstation_3.addFeatures(features_Routefromsubstation_3);
var lyr_Routefromsubstation_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Routefromsubstation_3, 
                style: style_Routefromsubstation_3,
                interactive: true,
                title: '<img src="styles/legend/Routefromsubstation_3.png" /> Route from substation'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr_2_2.setVisible(true);lyr_Routefromsubstation_3.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr_2_2,lyr_Routefromsubstation_3];
lyr__1.set('fieldAliases', {'A0': 'A0', 'A1': 'A1', 'A2': 'A2', 'A3': 'A3', 'A4': 'A4', 'A5': 'A5', 'A6': 'A6', 'A7': 'A7', 'A8': 'A8', 'A9': 'A9', 'A10': 'A10', 'A11': 'A11', 'A12': 'A12', 'A13': 'A13', 'A14': 'A14', 'A15': 'A15', 'A16': 'A16', 'A17': 'A17', 'A18': 'A18', 'A19': 'A19', 'A20': 'A20', 'A21': 'A21', 'A22': 'A22', 'A23': 'A23', 'A24': 'A24', 'A25': 'A25', 'A26': 'A26', 'A27': 'A27', 'A28': 'A28', 'A29': 'A29', 'A30': 'A30', 'A31': 'A31', 'A32': 'A32', 'A33': 'A33', 'A34': 'A34', 'A35': 'A35', });
lyr_2_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Routefromsubstation_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__1.set('fieldImages', {'A0': 'Range', 'A1': 'TextEdit', 'A2': 'TextEdit', 'A3': 'TextEdit', 'A4': 'TextEdit', 'A5': 'TextEdit', 'A6': 'TextEdit', 'A7': 'TextEdit', 'A8': 'TextEdit', 'A9': 'TextEdit', 'A10': 'TextEdit', 'A11': 'TextEdit', 'A12': 'TextEdit', 'A13': 'TextEdit', 'A14': 'TextEdit', 'A15': 'TextEdit', 'A16': 'TextEdit', 'A17': 'TextEdit', 'A18': 'TextEdit', 'A19': 'TextEdit', 'A20': 'Range', 'A21': 'Range', 'A22': 'TextEdit', 'A23': 'TextEdit', 'A24': 'TextEdit', 'A25': 'TextEdit', 'A26': 'TextEdit', 'A27': 'TextEdit', 'A28': 'TextEdit', 'A29': 'TextEdit', 'A30': 'TextEdit', 'A31': 'Range', 'A32': 'Range', 'A33': 'TextEdit', 'A34': 'TextEdit', 'A35': 'TextEdit', });
lyr_2_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Routefromsubstation_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr__1.set('fieldLabels', {'A0': 'no label', 'A1': 'no label', 'A2': 'no label', 'A3': 'no label', 'A4': 'no label', 'A5': 'no label', 'A6': 'no label', 'A7': 'no label', 'A8': 'no label', 'A9': 'no label', 'A10': 'no label', 'A11': 'no label', 'A12': 'no label', 'A13': 'no label', 'A14': 'no label', 'A15': 'no label', 'A16': 'no label', 'A17': 'no label', 'A18': 'no label', 'A19': 'no label', 'A20': 'no label', 'A21': 'no label', 'A22': 'no label', 'A23': 'no label', 'A24': 'no label', 'A25': 'no label', 'A26': 'no label', 'A27': 'no label', 'A28': 'no label', 'A29': 'no label', 'A30': 'no label', 'A31': 'no label', 'A32': 'no label', 'A33': 'no label', 'A34': 'no label', 'A35': 'no label', });
lyr_2_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Routefromsubstation_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'header label', 'drawOrder': 'header label', 'icon': 'inline label', });
lyr_Routefromsubstation_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});