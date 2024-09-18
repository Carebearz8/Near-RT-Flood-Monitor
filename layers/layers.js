var wms_layers = [];


        var lyr_F4Map2D_0 = new ol.layer.Tile({
            'title': 'F4 Map - 2D',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile1.f4map.com/tiles/f4_2d/{z}/{x}/{y}.png'
            })
        });
var lyr_fulldisk_ch13_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mesonet.agron.iastate.edu/cgi-bin/wms/goes_east.cgi",
    attributions: ' ',
                              params: {
                                "LAYERS": "fulldisk_ch13",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "fulldisk_ch13",
                            opacity: 0.615000,
                            
                            
                          });
              wms_layers.push([lyr_fulldisk_ch13_1, 1]);
var format_OCT_18_FLOODS_2 = new ol.format.GeoJSON();
var features_OCT_18_FLOODS_2 = format_OCT_18_FLOODS_2.readFeatures(json_OCT_18_FLOODS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OCT_18_FLOODS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OCT_18_FLOODS_2.addFeatures(features_OCT_18_FLOODS_2);
var lyr_OCT_18_FLOODS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OCT_18_FLOODS_2, 
                style: style_OCT_18_FLOODS_2,
                popuplayertitle: "OCT_18_FLOODS",
                interactive: true,
                title: '<img src="styles/legend/OCT_18_FLOODS_2.png" /> OCT_18_FLOODS'
            });

lyr_F4Map2D_0.setVisible(true);lyr_fulldisk_ch13_1.setVisible(true);lyr_OCT_18_FLOODS_2.setVisible(true);
var layersList = [lyr_F4Map2D_0,lyr_fulldisk_ch13_1,lyr_OCT_18_FLOODS_2];
lyr_OCT_18_FLOODS_2.set('fieldAliases', {'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Description': 'Description', });
lyr_OCT_18_FLOODS_2.set('fieldImages', {'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Description': 'TextEdit', });
lyr_OCT_18_FLOODS_2.set('fieldLabels', {'Location': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Description': 'no label', });
lyr_OCT_18_FLOODS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});