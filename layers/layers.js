var wms_layers = [];


        var lyr_Googlesatellite2_0 = new ol.layer.Tile({
            'title': 'Google satellite 2',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Rengocopiar_1 = new ol.format.GeoJSON();
var features_Rengocopiar_1 = format_Rengocopiar_1.readFeatures(json_Rengocopiar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rengocopiar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rengocopiar_1.addFeatures(features_Rengocopiar_1);
var lyr_Rengocopiar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rengocopiar_1, 
                style: style_Rengocopiar_1,
                popuplayertitle: 'Rengo copiar',
                interactive: true,
                title: '<img src="styles/legend/Rengocopiar_1.png" /> Rengo copiar'
            });
var format_TrackTerreno_2 = new ol.format.GeoJSON();
var features_TrackTerreno_2 = format_TrackTerreno_2.readFeatures(json_TrackTerreno_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrackTerreno_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrackTerreno_2.addFeatures(features_TrackTerreno_2);
var lyr_TrackTerreno_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrackTerreno_2, 
                style: style_TrackTerreno_2,
                popuplayertitle: 'Track Terreno',
                interactive: true,
                title: '<img src="styles/legend/TrackTerreno_2.png" /> Track Terreno'
            });
var format_landuseresidential_3 = new ol.format.GeoJSON();
var features_landuseresidential_3 = format_landuseresidential_3.readFeatures(json_landuseresidential_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuseresidential_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuseresidential_3.addFeatures(features_landuseresidential_3);
var lyr_landuseresidential_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landuseresidential_3, 
                style: style_landuseresidential_3,
                popuplayertitle: 'landuse residential',
                interactive: true,
                title: '<img src="styles/legend/landuseresidential_3.png" /> landuse residential'
            });
var format_Embalse_Bollenar_4 = new ol.format.GeoJSON();
var features_Embalse_Bollenar_4 = format_Embalse_Bollenar_4.readFeatures(json_Embalse_Bollenar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Embalse_Bollenar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embalse_Bollenar_4.addFeatures(features_Embalse_Bollenar_4);
var lyr_Embalse_Bollenar_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embalse_Bollenar_4, 
                style: style_Embalse_Bollenar_4,
                popuplayertitle: 'Embalse_Bollenar',
                interactive: true,
    title: 'Embalse_Bollenar<br />\
    <img src="styles/legend/Embalse_Bollenar_4_0.png" /> Area de Inundación DOH<br />' });
var format_redhidrogrfica_5 = new ol.format.GeoJSON();
var features_redhidrogrfica_5 = format_redhidrogrfica_5.readFeatures(json_redhidrogrfica_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_redhidrogrfica_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_redhidrogrfica_5.addFeatures(features_redhidrogrfica_5);
var lyr_redhidrogrfica_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_redhidrogrfica_5, 
                style: style_redhidrogrfica_5,
                popuplayertitle: 'red hidrográfica',
                interactive: true,
    title: 'red hidrográfica<br />\
    <img src="styles/legend/redhidrogrfica_5_0.png" /> Estero<br />\
    <img src="styles/legend/redhidrogrfica_5_1.png" /> Quebrada<br />\
    <img src="styles/legend/redhidrogrfica_5_2.png" /> Río<br />' });
var format_Puntos_Calidad_Agua_6 = new ol.format.GeoJSON();
var features_Puntos_Calidad_Agua_6 = format_Puntos_Calidad_Agua_6.readFeatures(json_Puntos_Calidad_Agua_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_Calidad_Agua_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_Calidad_Agua_6.addFeatures(features_Puntos_Calidad_Agua_6);
var lyr_Puntos_Calidad_Agua_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntos_Calidad_Agua_6, 
                style: style_Puntos_Calidad_Agua_6,
                popuplayertitle: 'Puntos_Calidad_Agua',
                interactive: true,
                title: '<img src="styles/legend/Puntos_Calidad_Agua_6.png" /> Puntos_Calidad_Agua'
            });
var format_Pozos_APR_7 = new ol.format.GeoJSON();
var features_Pozos_APR_7 = format_Pozos_APR_7.readFeatures(json_Pozos_APR_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pozos_APR_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pozos_APR_7.addFeatures(features_Pozos_APR_7);
var lyr_Pozos_APR_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pozos_APR_7, 
                style: style_Pozos_APR_7,
                popuplayertitle: 'Pozos_APR',
                interactive: true,
                title: '<img src="styles/legend/Pozos_APR_7.png" /> Pozos_APR'
            });
var format_Receptores_ruido_8 = new ol.format.GeoJSON();
var features_Receptores_ruido_8 = format_Receptores_ruido_8.readFeatures(json_Receptores_ruido_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Receptores_ruido_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Receptores_ruido_8.addFeatures(features_Receptores_ruido_8);
var lyr_Receptores_ruido_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Receptores_ruido_8, 
                style: style_Receptores_ruido_8,
                popuplayertitle: 'Receptores_ruido',
                interactive: true,
                title: '<img src="styles/legend/Receptores_ruido_8.png" /> Receptores_ruido'
            });
var group_Terreno25junio = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Terreno 25 junio'});
var group_Waypoints_24JUN26 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Waypoints_24-JUN-26'});
var group_Waypoints_25JUN26 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Waypoints_25-JUN-26'});
var group_SitioPrioritarios = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Sitio Prioritarios'});
var group_Factibilidad = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Factibilidad'});
var group_RedHidro = new ol.layer.Group({
                                layers: [lyr_redhidrogrfica_5,],
                                fold: 'close',
                                title: 'Red Hidro'});
var group_bocatomaycanales = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'bocatoma y canales'});
var group_UsosdeSuelo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Usos de Suelo'});
var group_SistemaElectricoNacional = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Sistema Electrico Nacional'});
var group_Sitiospoblados = new ol.layer.Group({
                                layers: [lyr_landuseresidential_3,],
                                fold: 'open',
                                title: 'Sitios poblados'});
var group_Humedales = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Humedales'});
var group_IPT = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'IPT'});
var group_CENSO = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CENSO'});
var group_Mapaubicacin = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mapa ubicación'});

lyr_Googlesatellite2_0.setVisible(true);lyr_Rengocopiar_1.setVisible(true);lyr_TrackTerreno_2.setVisible(true);lyr_landuseresidential_3.setVisible(true);lyr_Embalse_Bollenar_4.setVisible(true);lyr_redhidrogrfica_5.setVisible(true);lyr_Puntos_Calidad_Agua_6.setVisible(true);lyr_Pozos_APR_7.setVisible(true);lyr_Receptores_ruido_8.setVisible(true);
var layersList = [lyr_Googlesatellite2_0,lyr_Rengocopiar_1,lyr_TrackTerreno_2,group_Sitiospoblados,lyr_Embalse_Bollenar_4,group_RedHidro,lyr_Puntos_Calidad_Agua_6,lyr_Pozos_APR_7,lyr_Receptores_ruido_8];
lyr_Rengocopiar_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_TrackTerreno_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_landuseresidential_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'name': 'name', 'type': 'type', 'residentia': 'residentia', });
lyr_Embalse_Bollenar_4.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'area_ha': 'area_ha', 'area_km2': 'area_km2', });
lyr_redhidrogrfica_5.set('fieldAliases', {'TIPO_DREN': 'TIPO_DREN', 'NOMBRE': 'NOMBRE', 'NOM_REG': 'NOM_REG', 'NOM_PROV': 'NOM_PROV', 'NOM_COM': 'NOM_COM', 'DIS_ELEC_1': 'DIS_ELEC_1', 'CIR_SENA_1': 'CIR_SENA_1', 'COD_COMUNA': 'COD_COMUNA', 'SHAPE_Leng': 'SHAPE_Leng', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'auxiliar_2': 'auxiliar_2', 'auxiliar_3': 'auxiliar_3', 'auxiliar_4': 'auxiliar_4', 'auxiliar_5': 'auxiliar_5', 'auxiliar_6': 'auxiliar_6', });
lyr_Puntos_Calidad_Agua_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'ID': 'ID', 'Norte': 'Norte', 'Este': 'Este', });
lyr_Pozos_APR_7.set('fieldAliases', {'ID_IDE': 'ID_IDE', 'NOMBRE': 'NOMBRE', 'MXSITEID': 'MXSITEID', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'FUENTE': 'FUENTE', 'FECHA_ACTU': 'FECHA_ACTU', 'LEVANTAMIE': 'LEVANTAMIE', 'Este': 'Este', 'Norte': 'Norte', });
lyr_Receptores_ruido_8.set('fieldAliases', {'id': 'id', 'descrpcion': 'descrpcion', 'Este': 'Este', 'Norte': 'Norte', });
lyr_Rengocopiar_1.set('fieldImages', {'CUT_REG': '', 'CUT_PROV': '', 'CUT_COM': '', 'REGION': '', 'PROVINCIA': '', 'COMUNA': '', 'SUPERFICIE': '', });
lyr_TrackTerreno_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_landuseresidential_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'landuse': '', 'name': '', 'type': '', 'residentia': '', });
lyr_Embalse_Bollenar_4.set('fieldImages', {'id': '', 'Nombre': '', 'area_ha': '', 'area_km2': '', });
lyr_redhidrogrfica_5.set('fieldImages', {'TIPO_DREN': '', 'NOMBRE': '', 'NOM_REG': '', 'NOM_PROV': '', 'NOM_COM': '', 'DIS_ELEC_1': '', 'CIR_SENA_1': '', 'COD_COMUNA': '', 'SHAPE_Leng': '', 'auxiliary_': '', 'auxiliar_1': '', 'auxiliar_2': '', 'auxiliar_3': '', 'auxiliar_4': '', 'auxiliar_5': '', 'auxiliar_6': '', });
lyr_Puntos_Calidad_Agua_6.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'ID': '', 'Norte': '', 'Este': '', });
lyr_Pozos_APR_7.set('fieldImages', {'ID_IDE': '', 'NOMBRE': '', 'MXSITEID': '', 'REGION': '', 'PROVINCIA': '', 'COMUNA': '', 'FUENTE': '', 'FECHA_ACTU': '', 'LEVANTAMIE': '', 'Este': '', 'Norte': '', });
lyr_Receptores_ruido_8.set('fieldImages', {'id': 'TextEdit', 'descrpcion': 'TextEdit', 'Este': 'TextEdit', 'Norte': 'TextEdit', });
lyr_Rengocopiar_1.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_TrackTerreno_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_landuseresidential_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'name': 'no label', 'type': 'no label', 'residentia': 'no label', });
lyr_Embalse_Bollenar_4.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'area_ha': 'no label', 'area_km2': 'no label', });
lyr_redhidrogrfica_5.set('fieldLabels', {'TIPO_DREN': 'no label', 'NOMBRE': 'no label', 'NOM_REG': 'no label', 'NOM_PROV': 'no label', 'NOM_COM': 'no label', 'DIS_ELEC_1': 'no label', 'CIR_SENA_1': 'no label', 'COD_COMUNA': 'no label', 'SHAPE_Leng': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', 'auxiliar_2': 'no label', 'auxiliar_3': 'no label', 'auxiliar_4': 'no label', 'auxiliar_5': 'no label', 'auxiliar_6': 'no label', });
lyr_Puntos_Calidad_Agua_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'ID': 'no label', 'Norte': 'no label', 'Este': 'no label', });
lyr_Pozos_APR_7.set('fieldLabels', {'ID_IDE': 'no label', 'NOMBRE': 'no label', 'MXSITEID': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'FUENTE': 'no label', 'FECHA_ACTU': 'no label', 'LEVANTAMIE': 'no label', 'Este': 'no label', 'Norte': 'no label', });
lyr_Receptores_ruido_8.set('fieldLabels', {'id': 'no label', 'descrpcion': 'no label', 'Este': 'no label', 'Norte': 'no label', });
lyr_Receptores_ruido_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});