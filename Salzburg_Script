boundary = ee.FeatureCollection("FAO/GAUL/2015/level2")
s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")

//Map.addLayer(boundary)

var aoi = boundary.filter(ee.Filter.and(ee.Filter.eq('ADM2_NAME', 'Salzburg')));
Map.addLayer(aoi)

var filtered = s2
  .filter(ee.Filter.date('2023-01-01', '2024-01-01'))
  .filter(ee.Filter.bounds(aoi))
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',1));
  
var visParams = {
  bands: ['B8','B4','B3'],
  min: 0,
  max:3000
};
  
var composite = filtered.median().clip(aoi)

print(composite)
Map.addLayer(composite, visParams)
//print(filtered)  

image: composite,
  description: 'Salzburg',
  folder: 'GEE_Exports', 
  fileNamePrefix: 'Salzburg_Composite',
  region: aoi, 
  scale: 10,   
  maxPixels: 1e13
});
