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
var format_landuseresidential_2 = new ol.format.GeoJSON();
var features_landuseresidential_2 = format_landuseresidential_2.readFeatures(json_landuseresidential_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuseresidential_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuseresidential_2.addFeatures(features_landuseresidential_2);
var lyr_landuseresidential_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landuseresidential_2, 
                style: style_landuseresidential_2,
                popuplayertitle: 'landuse residential',
                interactive: true,
                title: '<img src="styles/legend/landuseresidential_2.png" /> landuse residential'
            });
var format_Embalse_Bollenar_3 = new ol.format.GeoJSON();
var features_Embalse_Bollenar_3 = format_Embalse_Bollenar_3.readFeatures(json_Embalse_Bollenar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Embalse_Bollenar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embalse_Bollenar_3.addFeatures(features_Embalse_Bollenar_3);
var lyr_Embalse_Bollenar_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embalse_Bollenar_3, 
                style: style_Embalse_Bollenar_3,
                popuplayertitle: 'Embalse_Bollenar',
                interactive: true,
    title: 'Embalse_Bollenar<br />\
    <img src="styles/legend/Embalse_Bollenar_3_0.png" /> Area de Inundación DOH<br />' });
var format_redhidrogrfica_4 = new ol.format.GeoJSON();
var features_redhidrogrfica_4 = format_redhidrogrfica_4.readFeatures(json_redhidrogrfica_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_redhidrogrfica_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_redhidrogrfica_4.addFeatures(features_redhidrogrfica_4);
var lyr_redhidrogrfica_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_redhidrogrfica_4, 
                style: style_redhidrogrfica_4,
                popuplayertitle: 'red hidrográfica',
                interactive: true,
    title: 'red hidrográfica<br />\
    <img src="styles/legend/redhidrogrfica_4_0.png" /> Estero<br />\
    <img src="styles/legend/redhidrogrfica_4_1.png" /> Quebrada<br />\
    <img src="styles/legend/redhidrogrfica_4_2.png" /> Río<br />' });
var format_TrackTerreno_5 = new ol.format.GeoJSON();
var features_TrackTerreno_5 = format_TrackTerreno_5.readFeatures(json_TrackTerreno_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrackTerreno_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrackTerreno_5.addFeatures(features_TrackTerreno_5);
var lyr_TrackTerreno_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrackTerreno_5, 
                style: style_TrackTerreno_5,
                popuplayertitle: 'Track Terreno',
                interactive: true,
                title: '<img src="styles/legend/TrackTerreno_5.png" /> Track Terreno'
            });
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
var group_25_jun_2026_13_25_20 = new ol.layer.Group({
                                layers: [lyr_TrackTerreno_5,lyr_Puntos_Calidad_Agua_6,],
                                fold: 'open',
                                title: '25_jun_2026_13_25_20'});
var group_Waypoints_24JUN26 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Waypoints_24-JUN-26'});
var group_Waypoints_25JUN26 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Waypoints_25-JUN-26'});
var group_RedHidro = new ol.layer.Group({
                                layers: [lyr_redhidrogrfica_4,],
                                fold: 'open',
                                title: 'Red Hidro'});
var group_SistemaElectricoNacional = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Sistema Electrico Nacional'});
var group_Sitiospoblados = new ol.layer.Group({
                                layers: [lyr_landuseresidential_2,],
                                fold: 'open',
                                title: 'Sitios poblados'});
var group_Humedales = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Humedales'});
var group_IPT = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'IPT'});
var group_UsosdeSuelo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Usos de Suelo'});
var group_CENSO = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CENSO'});
var group_Mapaubicacin = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Mapa ubicación'});

lyr_Googlesatellite2_0.setVisible(true);lyr_Rengocopiar_1.setVisible(true);lyr_landuseresidential_2.setVisible(true);lyr_Embalse_Bollenar_3.setVisible(true);lyr_redhidrogrfica_4.setVisible(true);lyr_TrackTerreno_5.setVisible(true);lyr_Puntos_Calidad_Agua_6.setVisible(true);
var layersList = [lyr_Googlesatellite2_0,lyr_Rengocopiar_1,group_Sitiospoblados,lyr_Embalse_Bollenar_3,group_RedHidro,group_25_jun_2026_13_25_20];
lyr_Rengocopiar_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_landuseresidential_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'name': 'name', 'type': 'type', 'residentia': 'residentia', });
lyr_Embalse_Bollenar_3.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'area_ha': 'area_ha', 'area_km2': 'area_km2', });
lyr_redhidrogrfica_4.set('fieldAliases', {'TIPO_DREN': 'TIPO_DREN', 'NOMBRE': 'NOMBRE', 'NOM_REG': 'NOM_REG', 'NOM_PROV': 'NOM_PROV', 'NOM_COM': 'NOM_COM', 'DIS_ELEC_1': 'DIS_ELEC_1', 'CIR_SENA_1': 'CIR_SENA_1', 'COD_COMUNA': 'COD_COMUNA', 'SHAPE_Leng': 'SHAPE_Leng', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'auxiliar_2': 'auxiliar_2', 'auxiliar_3': 'auxiliar_3', 'auxiliar_4': 'auxiliar_4', 'auxiliar_5': 'auxiliar_5', 'auxiliar_6': 'auxiliar_6', });
lyr_TrackTerreno_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Puntos_Calidad_Agua_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Rengocopiar_1.set('fieldImages', {'CUT_REG': '', 'CUT_PROV': '', 'CUT_COM': '', 'REGION': '', 'PROVINCIA': '', 'COMUNA': '', 'SUPERFICIE': '', });
lyr_landuseresidential_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'landuse': '', 'name': '', 'type': '', 'residentia': '', });
lyr_Embalse_Bollenar_3.set('fieldImages', {'id': '', 'Nombre': '', 'area_ha': '', 'area_km2': '', });
lyr_redhidrogrfica_4.set('fieldImages', {'TIPO_DREN': '', 'NOMBRE': '', 'NOM_REG': '', 'NOM_PROV': '', 'NOM_COM': '', 'DIS_ELEC_1': '', 'CIR_SENA_1': '', 'COD_COMUNA': '', 'SHAPE_Leng': '', 'auxiliary_': '', 'auxiliar_1': '', 'auxiliar_2': '', 'auxiliar_3': '', 'auxiliar_4': '', 'auxiliar_5': '', 'auxiliar_6': '', });
lyr_TrackTerreno_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Puntos_Calidad_Agua_6.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Rengocopiar_1.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_landuseresidential_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'name': 'no label', 'type': 'no label', 'residentia': 'no label', });
lyr_Embalse_Bollenar_3.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'area_ha': 'no label', 'area_km2': 'no label', });
lyr_redhidrogrfica_4.set('fieldLabels', {'TIPO_DREN': 'no label', 'NOMBRE': 'no label', 'NOM_REG': 'no label', 'NOM_PROV': 'no label', 'NOM_COM': 'no label', 'DIS_ELEC_1': 'no label', 'CIR_SENA_1': 'no label', 'COD_COMUNA': 'no label', 'SHAPE_Leng': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', 'auxiliar_2': 'no label', 'auxiliar_3': 'no label', 'auxiliar_4': 'no label', 'auxiliar_5': 'no label', 'auxiliar_6': 'no label', });
lyr_TrackTerreno_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Puntos_Calidad_Agua_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Puntos_Calidad_Agua_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});