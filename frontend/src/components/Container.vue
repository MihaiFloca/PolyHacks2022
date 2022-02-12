<template>
  <div id="container">
    <div>
      <MapContainer :geojson="geojson"></MapContainer>
    </div>
    <div class="cell cell-edit" style="position: absolute; width: 400px; height: 100px;">
      <SearchBar :geojson="geojson" v-on:change="geojson = $event"></SearchBar>    
    </div>
  </div>
</template>

<script>
  import MapContainer from './MapContainer.vue'
  import SearchBar from './SearchBar.vue'
  
  export default {
    name: 'Container',
    components: {
      MapContainer,
      SearchBar,
    },
    data: () => ({
      geojson: {
        "type": "FeatureCollection",
        "name": "pistes_cyclables",
        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        "features": [
        { "type": "Feature", "properties": { "ID_TRC_GEO": 1230109.0, "TYPE_VOIE": 4, "TYPE_VOIE2": 0, "LONGUEUR": 90, "NBR_VOIE": 2, "SEPARATEUR": "M", "SAISONS4": "OUI", "PROTEGE_4S": "OUI", "Ville_MTL": "OUI", "NOM_ARR_VI": "Le Plateau-Mont-Royal", "ID2020": 1 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -73.590242039845165, 45.532589281013379 ], [ -73.591193490323079, 45.533044491686027 ] ] ] } },
        { "type": "Feature", "properties": { "ID_TRC_GEO": 0.0, "TYPE_VOIE": 5, "TYPE_VOIE2": 0, "LONGUEUR": 20, "NBR_VOIE": 2, "SEPARATEUR": null, "SAISONS4": "NON", "PROTEGE_4S": "NON", "Ville_MTL": "OUI", "NOM_ARR_VI": "Rivière-des-Prairies—Pointe-aux-Trembles", "ID2020": 2 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -73.49679478102351, 45.695741649100164 ], [ -73.496934741308934, 45.695892842231203 ] ] ] } },  
        ]
      }
    }),
  }
</script>

<style>
  #container {
    width: 100%;
    display: grid;
  }
</style>