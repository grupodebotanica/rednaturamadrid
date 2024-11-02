import React from 'react';
import ReactDOM from 'react-dom';
import ol from 'openlayers';
import {IntlProvider} from 'react-intl';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Button from '@boundlessgeo/sdk/components/Button';
import Header from '@boundlessgeo/sdk/components/Header';
import enMessages from '@boundlessgeo/sdk/locale/en';
import InfoPopup from '@boundlessgeo/sdk/components/InfoPopup';
import MapPanel from '@boundlessgeo/sdk/components/MapPanel';
import {ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';

import ZoomToLatLon from '@boundlessgeo/sdk/components/ZoomToLatLon';
import LayerList from '@boundlessgeo/sdk/components/LayerList';
import Measure from '@boundlessgeo/sdk/components/Measure';
import Navigation from '@boundlessgeo/sdk/components/Navigation';
import Rotate from '@boundlessgeo/sdk/components/Rotate';
import Zoom from '@boundlessgeo/sdk/components/Zoom';
import QGISLegend from '@boundlessgeo/sdk/components/QGISLegend';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

var defaultFill = new ol.style.Fill({
   color: 'rgba(255,255,255,0.4)'
 });
 var defaultStroke = new ol.style.Stroke({
   color: '#3399CC',
   width: 1.25
 });
 var defaultSelectionFill = new ol.style.Fill({
   color: 'rgba(255,255,0,0.4)'
 });
 var defaultSelectionStroke = new ol.style.Stroke({
   color: '#FFFF00',
   width: 1.25
 });



                    var textStyleCache_municipiosdemadrid={}
                    var clusterStyleCache_municipiosdemadrid={}
                    var style_municipiosdemadrid = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_municipiosdemadrid'
        };
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(220,115,146,0.0)"}),
zIndex: 0
                            })
                            ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_municipiosdemadrid = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_municipiosdemadrid'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_zecscomunidaddemadrid = function(){ return {"Cuenca del río Guadalix": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(92,233,142,1.0)"}),
zIndex: 0
                            })
                            ],
"Cuenca del río Guadarrama": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(200,92,82,1.0)"}),
zIndex: 0
                            })
                            ],
"Cuenca del río Lozoya y Sierra Norte": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(216,19,151,1.0)"}),
zIndex: 0
                            })
                            ],
"Cuenca del río Manzanares": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(43,69,215,1.0)"}),
zIndex: 0
                            })
                            ],
"Cuencas de los ríos Alberche y Cofio": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(146,48,211,1.0)"}),
zIndex: 0
                            })
                            ],
"Cuencas de los ríos Jarama y Henares": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(253,211,21,1.0)"}),
zIndex: 0
                            })
                            ],
"Vegas, Cuestas y Páramos del Sureste de Madrid": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(33,202,220,1.0)"}),
zIndex: 0
                            })
                            ]};};var categoriesSelected_zecscomunidaddemadrid = {"Cuenca del río Guadalix": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Cuenca del río Guadarrama": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Cuenca del río Lozoya y Sierra Norte": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Cuenca del río Manzanares": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Cuencas de los ríos Alberche y Cofio": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Cuencas de los ríos Jarama y Henares": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ],
"Vegas, Cuestas y Páramos del Sureste de Madrid": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.26)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ]};
                    var textStyleCache_zecscomunidaddemadrid={}
                    var clusterStyleCache_zecscomunidaddemadrid={}
                    var style_zecscomunidaddemadrid = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_zecscomunidaddemadrid'
        };
                        
                        var value = feature.get("DS_ZEC_NAM");
                        var style = categories_zecscomunidaddemadrid()[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_zecscomunidaddemadrid = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_zecscomunidaddemadrid'
        };
                        var value = feature.get("DS_ZEC_NAM");
                        var style = categoriesSelected_zecscomunidaddemadrid[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_zepascomunidaddemadrid = function(){ return {"Alto Lozoya": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(92,13,211,1.0)", lineDash: null, width: pixelsFromMm(0.36)}),
                            fill: new ol.style.Fill({color: "rgba(92,13,211,1.0)"}),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                
                            })
                            ],
"Carrizales y Sotos de Aranjuez": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(247,149,11,1.0)", lineDash: null, width: pixelsFromMm(0.36)}),
                            fill: new ol.style.Fill({color: "rgba(247,149,11,1.0)"}),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                
                            })
                            ],
"Cortados y Cantiles de los ríos Jarama y Manzanares": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(25,74,115,1.0)", lineDash: null, width: pixelsFromMm(0.36)}),
                            fill: new ol.style.Fill({color: "rgba(25,74,115,1.0)"}),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                
                            })
                            ],
"Encinares del río Alberche y río Cofio": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(250,5,210,1.0)", lineDash: null, width: pixelsFromMm(0.36)}),
                            fill: new ol.style.Fill({color: "rgba(250,5,210,1.0)"}),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                
                            })
                            ],
"Estepas Cerealistas de los ríos Jarama y Henares": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(170,13,63,1.0)", lineDash: null, width: pixelsFromMm(0.326)}),
                            fill: new ol.style.Fill({color: "rgba(170,13,63,1.0)"}),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                
                            })
                            ],
"Monte de El Pardo": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(242,13,1,1.0)", lineDash: null, width: pixelsFromMm(0.36)}),
                            fill: new ol.style.Fill({color: "rgba(242,13,1,1.0)"}),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                
                            })
                            ],
"Soto de Viñuelas": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(213,244,71,1.0)", lineDash: null, width: pixelsFromMm(0.36)}),
                            fill: new ol.style.Fill({color: "rgba(213,244,71,1.0)"}),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                
                            })
                            ]};};var categoriesSelected_zepascomunidaddemadrid = {"Alto Lozoya": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.36)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                
                            })
                            ],
"Carrizales y Sotos de Aranjuez": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.36)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                
                            })
                            ],
"Cortados y Cantiles de los ríos Jarama y Manzanares": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.36)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                
                            })
                            ],
"Encinares del río Alberche y río Cofio": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.36)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                
                            })
                            ],
"Estepas Cerealistas de los ríos Jarama y Henares": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.326)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                
                            })
                            ],
"Monte de El Pardo": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.36)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                
                            })
                            ],
"Soto de Viñuelas": [ new ol.style.Style({
                                stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: pixelsFromMm(0.36)}),
                            fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}),
zIndex: 0
                            })
                            ,new ol.style.Style({
                                
                            })
                            ]};
                    var textStyleCache_zepascomunidaddemadrid={}
                    var clusterStyleCache_zepascomunidaddemadrid={}
                    var style_zepascomunidaddemadrid = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_zepascomunidaddemadrid'
        };
                        
                        var value = feature.get("DS_ZEPA");
                        var style = categories_zepascomunidaddemadrid()[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_zepascomunidaddemadrid = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_zepascomunidaddemadrid'
        };
                        var value = feature.get("DS_ZEPA");
                        var style = categoriesSelected_zepascomunidaddemadrid[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
    type: 'base',
    title: 'Stamen terrain',
    source: new ol.source.Stamen({
        crossOrigin: 'anonymous',
        layer: 'terrain'}),
    projection: 'EPSG:3857'
})
,new ol.layer.Tile({
    type: 'base',
    title: 'ESRI world street map',
    source: new ol.source.XYZ({
        crossOrigin: 'anonymous',
        attributions: [new ol.Attribution({ html: 'Tiles &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer">ArcGIS</a>'})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,
                    'isGroupExpanded': false, 'type': 'base-group',
                    'title': 'Base maps', layers: baseLayers});var overviewMapBaseLayer = baseLayersGroup;
var overlayLayers = [];var overlaysGroup = new ol.layer.Group({showContent: true,
                        'isGroupExpanded': false, 'title': 'Overlays', layers: overlayLayers});
var lyr_municipiosdemadrid = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_municipiosdemadrid.json'
                            }),
                     
                    style: style_municipiosdemadrid,
                    selectedStyle: selectionStyle_municipiosdemadrid,
                    title: "Municipios de Madrid",
                    id: "SOLO_MADRID20180321122542320",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<head> <style type='text/css'> .popup-table { 	font-size: 10px; } </style> </head>  <body><table width='328' border='1' class='popup-table'>   <tr bgcolor='#CCCCCC'>     <th colspan='2'>Municipios Comunidad de Madrid</th>   <tr bgcolor='#CCCCCC'><th width='86'>Parámetro</th>   <th width='229'>Valor</th>  <tr><td>Municipio</td><td style='text-align:left'>[NAME_4]</td></tr></table>",
                    attributes: ["ID_0", "ISO", "NAME_0", "ID_1", "NAME_1", "ID_2", "NAME_2", "ID_3", "NAME_3", "ID_4", "NAME_4", "VARNAME_4", "TYPE_4", "ENGTYPE_4"],
                    geometryType: "Polygon"
                });
var lyr_municipiosdemadrid_overview = new ol.layer.Vector({
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_municipiosdemadrid.json'
                            }),
                     
                    style: style_municipiosdemadrid});
var lyr_zecscomunidaddemadrid = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_zecscomunidaddemadrid.json'
                            }),
                     
                    style: style_zecscomunidaddemadrid,
                    selectedStyle: selectionStyle_zecscomunidaddemadrid,
                    title: "ZECs Comunidad de Madrid",
                    id: "ZECs_Comunidad_de_Madrid20180417095704738",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<head> <style type='text/css'> .popup-table { 	font-size: 10px; } </style> </head>  <body><table width='328' border='1' class='popup-table'>   <tr bgcolor='#CCCCCC'>     <th colspan='2'>ZECs Comunidad de Madrid</th>   <tr bgcolor='#CCCCCC'><th width='86'>Parámetro</th>   <th width='229'>Valor</th>  <tr><td>Código</td><td style='text-align:left'>[CD_ZEC_COD]</td></tr><tr><td>Nombre</td><td style='text-align:left'>[DS_ZEC_NAM]</td></tr><tr><td>Área (ha)</td><td style='text-align:left'>[NM_AREA_HA]</td></tr></table>",
                    attributes: ["CDID", "CD_ZEC_COD", "DS_ZEC_NAM", "CD_ZEC_CCA", "DS_ZEC_RG_", "CD_ZEC_NUT", "NM_AREA_HA"],
                    geometryType: "Polygon"
                });
var lyr_zecscomunidaddemadrid_overview = new ol.layer.Vector({
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_zecscomunidaddemadrid.json'
                            }),
                     
                    style: style_zecscomunidaddemadrid});
var lyr_zepascomunidaddemadrid = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_zepascomunidaddemadrid.json'
                            }),
                     
                    style: style_zepascomunidaddemadrid,
                    selectedStyle: selectionStyle_zepascomunidaddemadrid,
                    title: "ZEPAs Comunidad de Madrid",
                    id: "ZEPAs_Comunidad_de_Madrid20180417100805875",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<head> <style type='text/css'> .popup-table { 	font-size: 10px; } </style> </head>  <body><table width='328' border='1' class='popup-table'>   <tr bgcolor='#CCCCCC'>     <th colspan='2'>ZEPAs Comunidad de Madrid</th>   <tr bgcolor='#CCCCCC'><th width='86'>Parámetro</th>   <th width='229'>Valor</th>  <tr><td>Código</td><td style='text-align:left'>[CD_ZEPA]</td></tr><tr><td>Nombre</td><td style='text-align:left'>[DS_ZEPA]</td></tr><tr><td>Área (ha)</td><td style='text-align:left'>[NM_AREA_HA]</td></tr></table>",
                    attributes: ["CDID", "CD_ZEPA", "DS_ZEPA", "CD_ZEPA_CC", "CD_ZEPA_NU", "NM_AREA_HA"],
                    geometryType: "Polygon"
                });
var lyr_zepascomunidaddemadrid_overview = new ol.layer.Vector({
                    source: new ol.source.Vector({
                            format: new ol.format.GeoJSON(),
                            url: './data/lyr_zepascomunidaddemadrid.json'
                            }),
                     
                    style: style_zepascomunidaddemadrid});

lyr_municipiosdemadrid.setVisible(true);
lyr_zecscomunidaddemadrid.setVisible(true);
lyr_zepascomunidaddemadrid.setVisible(true);
for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}
baseLayers[0].setVisible(true);
var layersList = [lyr_municipiosdemadrid,lyr_zecscomunidaddemadrid,lyr_zepascomunidaddemadrid];layersList.unshift(baseLayersGroup);
var layersMap  = {'lyr_municipiosdemadrid':lyr_municipiosdemadrid,'lyr_zecscomunidaddemadrid':lyr_zecscomunidaddemadrid,'lyr_zepascomunidaddemadrid':lyr_zepascomunidaddemadrid};
var legendData = {"ZECs_Comunidad_de_Madrid20180417095704738": [{"href": "1_0.png", "title": "Cuenca del r\u00edo Guadalix"}, {"href": "1_1.png", "title": "Cuenca del r\u00edo Guadarrama"}, {"href": "1_2.png", "title": "Cuenca del r\u00edo Lozoya y Sierra Norte"}, {"href": "1_3.png", "title": "Cuenca del r\u00edo Manzanares"}, {"href": "1_4.png", "title": "Cuencas de los r\u00edos Alberche y Cofio"}, {"href": "1_5.png", "title": "Cuencas de los r\u00edos Jarama y Henares"}, {"href": "1_6.png", "title": "Vegas, Cuestas y P\u00e1ramos del Sureste de Madrid"}], "ZEPAs_Comunidad_de_Madrid20180417100805875": [{"href": "2_0.png", "title": "Alto Lozoya"}, {"href": "2_1.png", "title": "Carrizales y Sotos de Aranjuez"}, {"href": "2_2.png", "title": "Cortados y Cantiles de los r\u00edos Jarama y Manzanares"}, {"href": "2_3.png", "title": "Encinares del r\u00edo Alberche y r\u00edo Cofio"}, {"href": "2_4.png", "title": "Estepas Cerealistas de los r\u00edos Jarama y Henares"}, {"href": "2_5.png", "title": "Monte de El Pardo"}, {"href": "2_6.png", "title": "Soto de Vi\u00f1uelas"}], "SOLO_MADRID20180321122542320": [{"href": "0_0.png", "title": ""}]};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [-536657.105601, 4839142.742117, -360016.196879, 5128536.532138];
var unitsConversion = 111325.0;

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: [new ol.control.ScaleLine({"minWidth": 64, "units": "metric"})]
});



class BasicApp extends React.Component {
  getChildContext() {
    return {
      muiTheme: getMuiTheme()
    };
  }
  componentDidMount() {
    map.addControl(new ol.control.OverviewMap({collapsed: true, layers: [overviewMapBaseLayer, lyr_municipiosdemadrid_overview,lyr_zecscomunidaddemadrid_overview,lyr_zepascomunidaddemadrid_overview]}));
  }
  _toggle(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  }
  _toggleTable() {
    this._toggle(document.getElementById('table-panel'));
    this.refs.table.getWrappedInstance().setDimensionsOnState();
  }
  _toggleWFST() {
    this._toggle(document.getElementById('wfst'));
  }
  _toggleQuery() {
    this._toggle(document.getElementById('query-panel'));
  }
  _toggleEdit() {
    this._toggle(document.getElementById('edit-tool-panel'));
  }
  _hideAboutPanel(evt) {
    evt.preventDefault();
    document.getElementById('about-panel').style.display = 'none';
  }
  _toggleChartPanel(evt) {
    evt.preventDefault();
    this._toggle(document.getElementById('chart-panel'));
  }
  render() {
    var toolbarOptions = {title:"Red Natura 2000 Comunidad de Madrid"};
    return React.createElement("article", null,
      React.createElement(Header, toolbarOptions ,
React.createElement(ZoomToLatLon, {map:map}),
React.createElement(Measure, {toggleGroup:'navigation', map:map, geodesic:true}),
React.createElement(Navigation, {toggleGroup: 'navigation', secondary: true})),
      React.createElement("div", {id: 'content'},
        React.createElement(MapPanel, {id: 'map', map: map, extent: originalExtent, useHistory: true}
          ,
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {toggleGroup: 'navigation', map: map, hover: false})
                                  )
        )
        ,
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:true, showDownload:false,
                                        showZoomTo:false, allowReordering:true,
                                        allowFiltering:false, tipLabel:'capas',
                                        downloadFormat:'GeoJSON', showUpload:false, map:map,
                                        includeLegend:true, allowStyling:false, showTable:false})),
React.createElement("div", {id:'rotate-button'},
                                    React.createElement(Rotate, {
                                    autoHide:false,
                                    duration:250,
                                    map: map,
                                    tooltipPosition: 'bottom-right'})
                                  ),
React.createElement("div", {id:'zoom-buttons'},
                                    React.createElement(Zoom, {
                                    duration:250,
                                    zoomInTipLabel: 'Zoom in',
                                    zoomOutTipLabel: 'Zoom out',
                                    delta: 1.2,
                                    map: map,
                                    tooltipPosition: 'bottom-right'})
                                  ),
React.createElement("div",{id: "legend"},
                                React.createElement(QGISLegend, {map:map, size:20, legendBasePath:'./resources/legend/',showExpandedOnStartup:false, legendData:legendData})
                            )
      )
    );
  }
}

BasicApp.childContextTypes = {
  muiTheme: React.PropTypes.object
};

ReactDOM.render(<IntlProvider locale='en' messages={enMessages}><BasicApp /></IntlProvider>, document.getElementById('main'));
