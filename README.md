d3.geoZoom
==============

[![NPM package][npm-img]][npm-url]
[![Build Size][build-size-img]][build-size-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]

Apply zoom and pan user interactions to D3 spherical map projections in the same fashion as [d3-zoom](https://github.com/d3/d3-zoom) for regular cartesian coordinates. Generally used with [Azimuthal projections](https://github.com/d3/d3-geo#azimuthal-projections), but also works for other projection types as long as scaling and rotation is supported.

Heavily based in previous work by Jason Davies' [Rotate the World](https://www.jasondavies.com/maps/rotate/) and Mike Bostock's [Versor Dragging](https://bl.ocks.org/mbostock/7ea1dde508cec6d2d95306f92642bc42). 
Makes use of Fil's [versors package](https://github.com/Fil/versor) for translating mouse coordinates to the sphere.

See the included examples ([canvas](https://vasturiano.github.io/d3-geo-zoom/example/canvas/) and [svg](https://vasturiano.github.io/d3-geo-zoom/example/svg/)).

## Quick start

```js
import d3GeoZoom from 'd3-geo-zoom';
```
or using a *script* tag
```html
<script src="//unpkg.com/d3-geo-zoom"></script>
```
then
```js
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
| <b>scaleExtent</b>([<i>array</i>]) | Getter/setter for the scale extent (`[min, max]`) to restrict the zoom interaction to. | `[0.1, 1000]` |
| <b>onMove</b>([<i>fn({ scale, rotation })</i>]) | Callback function for when the projection object is updated due to a user interaction. This is a convenient place to bind the render function that redraws the map component elements according to the current projection settings. The callback function includes a single object parameter that contains the new scale and rotation values. | - |


[npm-img]: https://img.shields.io/npm/v/d3-geo-zoom
[npm-url]: https://npmjs.org/package/d3-geo-zoom
[build-size-img]: https://img.shields.io/bundlephobia/minzip/d3-geo-zoom
[build-size-url]: https://bundlephobia.com/result?p=d3-geo-zoom
[npm-downloads-img]: https://img.shields.io/npm/dt/d3-geo-zoom
[npm-downloads-url]: https://www.npmtrends.com/d3-geo-zoom
