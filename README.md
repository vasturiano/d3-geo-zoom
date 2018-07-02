# d3.geoZoom

[![NPM](https://nodei.co/npm/d3-geo-zoom.png?compact=true)](https://nodei.co/npm/d3-geo-zoom/)

Apply zoom and pan user interactions to D3 spherical map projections in the same fashion as [d3-zoom](https://github.com/d3/d3-zoom) for regular cartesian coordinates. Generally used with [Azimuthal projections](https://github.com/d3/d3-geo#azimuthal-projections), but also works for other projection types as long as scaling and rotation is supported.

Heavily based in previous work by Jason Davies' [Rotate the World](https://www.jasondavies.com/maps/rotate/) and Mike Bostock's [Versor Dragging](https://bl.ocks.org/mbostock/7ea1dde508cec6d2d95306f92642bc42). 
Makes use of Fil's [versors package](https://github.com/Fil/versor) for translating mouse coordinates to the sphere.

See the included examples ([canvas](https://vasturiano.github.io/d3-geo-zoom/example/canvas/) and [svg](https://vasturiano.github.io/d3-geo-zoom/example/svg/)).

## Quick start

```
import d3GeoZoom from 'd3-geo-zoom';
```
or
```
d3.geoZoom = require('d3-geo-zoom');
```
or even
```
<script src="//unpkg.com/d3-geo-zoom"></script>
```
then
```
d3.geoZoom()
    .projection(<mapProjection>)
    .onMove(<callbackFn>)
    (<mapDomNode>);
```

## API reference

| Method | Description | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |:-------------:|
| <b>projection</b>([<i>object</i>]) | Getter/setter for the [D3 projection object](https://github.com/d3/d3-geo#projections) whose position settings are modified according to the zoom/pan user interactions. The projection should support the `scale` and `rotate` methods. | - |
| <b>northUp</b>([<i>boolean</i>]) | Getter/setter for whether to maintain a north pointing upwards orientation or allow free rotation in all directions. | false |
| <b>scaleExtent</b>([<i>array</i>]) | Getter/setter for whether to restraint the zoom extent [min, max] | [0.1, 1e3] |
| <b>onMove</b>([<i>fn</i>]) | Callback function for when the projection object is updated due to a user interaction. This is a convenient place to bind the render function that redraws the map component elements according to the current projection settings. | - |
