var country = ee.FeatureCollection("FAO/GAUL/2015/level1")
var s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")

// Map.addLayer(country)
//ADM0_NAME: Switzerland
var aoi = country
  .filter(ee.Filter.eq('ADM0_NAME', 'Switzerland'))
  .filter(ee.Filter.eq('ADM1_NAME', 'Bern'));
Map.addLayer(aoi);

var image = s2
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',30))
  .filter(ee.Filter.bounds(aoi))
  .filter(ee.Filter.date('2020-06-01','2021-08-01'));
  
var composite = image.median().clip(aoi);

var visParams = {
  bands: ['B4','B3','B2'],
  min: 0,
  max:3000
};

Map.addLayer(composite, visParams)

Export.image.toDrive({
  image: composite,
  description: 'Bern_S2_Summer_2015',
  folder: 'GEE_Exports', 
  fileNamePrefix: 'Bern_Composite',
  region: aoi, 
  scale: 10,   
  maxPixels: 1e13
});
