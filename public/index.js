
import cesium from 'https://cdn.skypack.dev/cesium';

var viewer = new cesium.Viewer('cesiumbox');
var tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    // url: "../3dtile_nyc/tileset.json",
    // url: "http://193.196.37.89:8092/AssetsHFT/3DTile_Niedernhalle/tileset.json",
    url: "https://kartta.hel.fi/3d/datasource-data/2bcc0c80-51b8-412b-af72-b3ecc7007a18/tileset.json",
}))
cesium.when(tileset.readyPromise).then(function (tileset) {viewer.flyTo(tileset)})
// chroma.scale(['#fafa6e','#2A4858']).mode('lch').colors(6)
function colorByHeight () {
    tileset.style = new cesium.Cesium3DTileStyle({
        color: {
            conditions: [
                ['${Height} >= 300', 'color("#FF442E")'],
                ['${Height} >= 200', 'color("#FF8000")'],
                ['${Height} >= 100', 'color("#E7A700")'],
                ['${Height} >= 50', 'color("#CFC600")'],
                ['${Height} >= 25', 'color("#A4B600")'],
                ['${Height} >= 10', 'color("#6A9E00")'],
                ['true', 'rgb(127, 59, 8)']
            ]
        }
    });
}
