/**
 * You can also import Cesium Object like this
 *
 * import * as Cesium from 'cesium';
 * const viewer = new Cesium.Viewer('cesiumContainer');
 */
import { Viewer, Cesium3DTileStyle, Cesium3DTileset } from "cesium";
import "./css/main.css";

var viewer = new Viewer('cesiumContainer');
var tileset = viewer.scene.primitives.add(new Cesium3DTileset({
    // url: "../3dtile_nyc/tileset.json",
    // url: "http://193.196.37.89:8092/AssetsHFT/3DTile_Niedernhalle/tileset.json",
    url: "https://kartta.hel.fi/3d/datasource-data/2bcc0c80-51b8-412b-af72-b3ecc7007a18/tileset.json",
}))

//cesium.when(tileset.readyPromise).then(function (tileset) {viewer.flyTo(tileset)})
// chroma.scale(['#fafa6e','#2A4858']).mode('lch').colors(6)


function color_kiasma() {
    /*
    Set Kiasma to blue and all the rest of Helsinki in green
    */
    C.tileset.style = new C.Cesium3DTileStyle({
        color: {
            conditions: [
                ['${id} === "BID_4cdd8999-e30d-4275-9c73-72fede8fc174"', 'color("blue")'],
                ['${classId} === 26', 'color("green")'],
                ['true', 'rgb(127, 59, 8)']
            ]
        }
    });
}

color_kiasma();

// Publish Cesium tools and objects into global scope for in-browser dev
window.C = { Viewer, Cesium3DTileStyle, Cesium3DTileset, tileset, viewer };

console.log("done with the configs")
