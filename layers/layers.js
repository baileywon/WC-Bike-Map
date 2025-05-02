var wms_layers = [];


        var lyr_LightGray_0 = new ol.layer.Tile({
            'title': 'Light Gray',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_WarnerCenter_1 = new ol.format.GeoJSON();
var features_WarnerCenter_1 = format_WarnerCenter_1.readFeatures(json_WarnerCenter_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WarnerCenter_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WarnerCenter_1.addFeatures(features_WarnerCenter_1);
var lyr_WarnerCenter_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WarnerCenter_1, 
                style: style_WarnerCenter_1,
                popuplayertitle: 'Warner Center',
                interactive: false,
                title: '<img src="styles/legend/WarnerCenter_1.png" /> Warner Center'
            });
var format_BikewaystoVictoryBlvdBikePath_2 = new ol.format.GeoJSON();
var features_BikewaystoVictoryBlvdBikePath_2 = format_BikewaystoVictoryBlvdBikePath_2.readFeatures(json_BikewaystoVictoryBlvdBikePath_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BikewaystoVictoryBlvdBikePath_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikewaystoVictoryBlvdBikePath_2.addFeatures(features_BikewaystoVictoryBlvdBikePath_2);
var lyr_BikewaystoVictoryBlvdBikePath_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BikewaystoVictoryBlvdBikePath_2, 
                style: style_BikewaystoVictoryBlvdBikePath_2,
                popuplayertitle: 'Bikeways to Victory Blvd. Bike Path',
                interactive: false,
    title: 'Bikeways to Victory Blvd. Bike Path<br />\
    <img src="styles/legend/BikewaystoVictoryBlvdBikePath_2_0.png" /> Bike Lane<br />\
    <img src="styles/legend/BikewaystoVictoryBlvdBikePath_2_1.png" /> Bike Route<br />\
    <img src="styles/legend/BikewaystoVictoryBlvdBikePath_2_2.png" /> Separated Bike Lane<br />' });
var format_BikewaysinWarnerCenter_3 = new ol.format.GeoJSON();
var features_BikewaysinWarnerCenter_3 = format_BikewaysinWarnerCenter_3.readFeatures(json_BikewaysinWarnerCenter_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BikewaysinWarnerCenter_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikewaysinWarnerCenter_3.addFeatures(features_BikewaysinWarnerCenter_3);
var lyr_BikewaysinWarnerCenter_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BikewaysinWarnerCenter_3, 
                style: style_BikewaysinWarnerCenter_3,
                popuplayertitle: 'Bikeways in Warner Center',
                interactive: false,
    title: 'Bikeways in Warner Center<br />\
    <img src="styles/legend/BikewaysinWarnerCenter_3_0.png" /> Victory Blvd. Bike Path<br />' });

lyr_LightGray_0.setVisible(true);lyr_WarnerCenter_1.setVisible(true);lyr_BikewaystoVictoryBlvdBikePath_2.setVisible(true);lyr_BikewaysinWarnerCenter_3.setVisible(true);
var layersList = [lyr_LightGray_0,lyr_WarnerCenter_1,lyr_BikewaystoVictoryBlvdBikePath_2,lyr_BikewaysinWarnerCenter_3];
lyr_WarnerCenter_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SPA_NM': 'SPA_NM', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_BikewaystoVictoryBlvdBikePath_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'SECT_ID': 'SECT_ID', 'InputDate': 'InputDate', 'Update_Dat': 'Update_Dat', 'Install_Da': 'Install_Da', 'FY': 'FY', 'Year_': 'Year_', 'Limits': 'Limits', 'STREET_DES': 'STREET_DES', 'ST_TYPE': 'ST_TYPE', 'OTHER': 'OTHER', 'CL_Miles': 'CL_Miles', 'Lane_Miles': 'Lane_Miles', 'CD': 'CD', 'Network': 'Network', 'Bikeway': 'Bikeway', 'Region': 'Region', 'One_Dir_BW': 'One_Dir_BW', 'Retire': 'Retire', 'Class': 'Class', 'Project_Na': 'Project_Na', 'Project_Ty': 'Project_Ty', 'RetireType': 'RetireType', 'CHECKED': 'CHECKED', 'flag': 'flag', 'Upgraded_F': 'Upgraded_F', 'Comments': 'Comments', 'Tag': 'Tag', 'MP2035_Net': 'MP2035_Net', 'INTERU_FLA': 'INTERU_FLA', 'ST_FROM': 'ST_FROM', 'ST_TO': 'ST_TO', 'ST_NAME': 'ST_NAME', 'ClassIV_Pr': 'ClassIV_Pr', 'ClassIV__1': 'ClassIV__1', 'ClassIV__2': 'ClassIV__2', 'ST_WIDTH': 'ST_WIDTH', 'Compare': 'Compare', 'ASSET_ID': 'ASSET_ID', 'Bikeway_ID': 'Bikeway_ID', 'GlobalID': 'GlobalID', 'Shape__Len': 'Shape__Len', });
lyr_BikewaysinWarnerCenter_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'SECT_ID': 'SECT_ID', 'InputDate': 'InputDate', 'Update_Dat': 'Update_Dat', 'Install_Da': 'Install_Da', 'FY': 'FY', 'Year_': 'Year_', 'Limits': 'Limits', 'STREET_DES': 'STREET_DES', 'ST_TYPE': 'ST_TYPE', 'OTHER': 'OTHER', 'CL_Miles': 'CL_Miles', 'Lane_Miles': 'Lane_Miles', 'CD': 'CD', 'Network': 'Network', 'Bikeway': 'Bikeway', 'Region': 'Region', 'One_Dir_BW': 'One_Dir_BW', 'Retire': 'Retire', 'Class': 'Class', 'Project_Na': 'Project_Na', 'Project_Ty': 'Project_Ty', 'RetireType': 'RetireType', 'CHECKED': 'CHECKED', 'flag': 'flag', 'Upgraded_F': 'Upgraded_F', 'Comments': 'Comments', 'Tag': 'Tag', 'MP2035_Net': 'MP2035_Net', 'INTERU_FLA': 'INTERU_FLA', 'ST_FROM': 'ST_FROM', 'ST_TO': 'ST_TO', 'ST_NAME': 'ST_NAME', 'ClassIV_Pr': 'ClassIV_Pr', 'ClassIV__1': 'ClassIV__1', 'ClassIV__2': 'ClassIV__2', 'ST_WIDTH': 'ST_WIDTH', 'Compare': 'Compare', 'ASSET_ID': 'ASSET_ID', 'Bikeway_ID': 'Bikeway_ID', 'GlobalID': 'GlobalID', 'Shape__Len': 'Shape__Len', });
lyr_WarnerCenter_1.set('fieldImages', {'OBJECTID': 'Range', 'SPA_NM': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_BikewaystoVictoryBlvdBikePath_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'Range', 'SECT_ID': 'TextEdit', 'InputDate': 'DateTime', 'Update_Dat': 'DateTime', 'Install_Da': 'DateTime', 'FY': 'TextEdit', 'Year_': 'Range', 'Limits': 'TextEdit', 'STREET_DES': 'TextEdit', 'ST_TYPE': 'TextEdit', 'OTHER': 'TextEdit', 'CL_Miles': 'TextEdit', 'Lane_Miles': 'TextEdit', 'CD': 'TextEdit', 'Network': 'TextEdit', 'Bikeway': 'TextEdit', 'Region': 'TextEdit', 'One_Dir_BW': 'TextEdit', 'Retire': 'TextEdit', 'Class': 'Range', 'Project_Na': 'TextEdit', 'Project_Ty': 'TextEdit', 'RetireType': 'TextEdit', 'CHECKED': 'Range', 'flag': 'Range', 'Upgraded_F': 'TextEdit', 'Comments': 'TextEdit', 'Tag': 'Range', 'MP2035_Net': 'TextEdit', 'INTERU_FLA': 'Range', 'ST_FROM': 'TextEdit', 'ST_TO': 'TextEdit', 'ST_NAME': 'TextEdit', 'ClassIV_Pr': 'Range', 'ClassIV__1': 'TextEdit', 'ClassIV__2': 'TextEdit', 'ST_WIDTH': 'Range', 'Compare': 'Range', 'ASSET_ID': 'Range', 'Bikeway_ID': 'Range', 'GlobalID': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_BikewaysinWarnerCenter_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'Range', 'SECT_ID': 'TextEdit', 'InputDate': 'DateTime', 'Update_Dat': 'DateTime', 'Install_Da': 'DateTime', 'FY': 'TextEdit', 'Year_': 'Range', 'Limits': 'TextEdit', 'STREET_DES': 'TextEdit', 'ST_TYPE': 'TextEdit', 'OTHER': 'TextEdit', 'CL_Miles': 'TextEdit', 'Lane_Miles': 'TextEdit', 'CD': 'TextEdit', 'Network': 'TextEdit', 'Bikeway': 'TextEdit', 'Region': 'TextEdit', 'One_Dir_BW': 'TextEdit', 'Retire': 'TextEdit', 'Class': 'Range', 'Project_Na': 'TextEdit', 'Project_Ty': 'TextEdit', 'RetireType': 'TextEdit', 'CHECKED': 'Range', 'flag': 'Range', 'Upgraded_F': 'TextEdit', 'Comments': 'TextEdit', 'Tag': 'Range', 'MP2035_Net': 'TextEdit', 'INTERU_FLA': 'Range', 'ST_FROM': 'TextEdit', 'ST_TO': 'TextEdit', 'ST_NAME': 'TextEdit', 'ClassIV_Pr': 'Range', 'ClassIV__1': 'TextEdit', 'ClassIV__2': 'TextEdit', 'ST_WIDTH': 'Range', 'Compare': 'Range', 'ASSET_ID': 'Range', 'Bikeway_ID': 'Range', 'GlobalID': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_WarnerCenter_1.set('fieldLabels', {'OBJECTID': 'no label', 'SPA_NM': 'no label', 'GlobalID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_BikewaystoVictoryBlvdBikePath_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'SECT_ID': 'no label', 'InputDate': 'no label', 'Update_Dat': 'no label', 'Install_Da': 'no label', 'FY': 'no label', 'Year_': 'no label', 'Limits': 'no label', 'STREET_DES': 'no label', 'ST_TYPE': 'no label', 'OTHER': 'no label', 'CL_Miles': 'no label', 'Lane_Miles': 'no label', 'CD': 'no label', 'Network': 'no label', 'Bikeway': 'no label', 'Region': 'no label', 'One_Dir_BW': 'no label', 'Retire': 'no label', 'Class': 'no label', 'Project_Na': 'no label', 'Project_Ty': 'no label', 'RetireType': 'no label', 'CHECKED': 'no label', 'flag': 'no label', 'Upgraded_F': 'no label', 'Comments': 'no label', 'Tag': 'no label', 'MP2035_Net': 'no label', 'INTERU_FLA': 'no label', 'ST_FROM': 'no label', 'ST_TO': 'no label', 'ST_NAME': 'no label', 'ClassIV_Pr': 'no label', 'ClassIV__1': 'no label', 'ClassIV__2': 'no label', 'ST_WIDTH': 'no label', 'Compare': 'no label', 'ASSET_ID': 'no label', 'Bikeway_ID': 'no label', 'GlobalID': 'no label', 'Shape__Len': 'no label', });
lyr_BikewaysinWarnerCenter_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'SECT_ID': 'no label', 'InputDate': 'no label', 'Update_Dat': 'no label', 'Install_Da': 'no label', 'FY': 'no label', 'Year_': 'no label', 'Limits': 'no label', 'STREET_DES': 'no label', 'ST_TYPE': 'no label', 'OTHER': 'no label', 'CL_Miles': 'no label', 'Lane_Miles': 'no label', 'CD': 'no label', 'Network': 'no label', 'Bikeway': 'no label', 'Region': 'no label', 'One_Dir_BW': 'no label', 'Retire': 'no label', 'Class': 'no label', 'Project_Na': 'no label', 'Project_Ty': 'no label', 'RetireType': 'no label', 'CHECKED': 'no label', 'flag': 'no label', 'Upgraded_F': 'no label', 'Comments': 'no label', 'Tag': 'no label', 'MP2035_Net': 'no label', 'INTERU_FLA': 'no label', 'ST_FROM': 'no label', 'ST_TO': 'no label', 'ST_NAME': 'no label', 'ClassIV_Pr': 'no label', 'ClassIV__1': 'no label', 'ClassIV__2': 'no label', 'ST_WIDTH': 'no label', 'Compare': 'no label', 'ASSET_ID': 'no label', 'Bikeway_ID': 'no label', 'GlobalID': 'no label', 'Shape__Len': 'no label', });
lyr_BikewaysinWarnerCenter_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});