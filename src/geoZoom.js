import { select as d3Select, event as d3Event, mouse as d3Mouse } from 'd3-selection';
import { zoom as d3Zoom } from 'd3-zoom';
import versor from 'versor';
import Kapsule from 'kapsule';

export default Kapsule({
  props: {
    projection: {
      onChange(projection, state) {
        state.unityScale = projection ? projection.scale() : 1;
      }
    },
    scaleExtent: {
      default: [0.1, 1e3],
      onChange(extent, state) { state.zoom && state.zoom.scaleExtent(extent) }
    },
    northUp: { default: false },
    onMove: { defaultVal: () => {} }
  },
  init(nodeEl, state) {
    d3Select(nodeEl).call(state.zoom = d3Zoom()
      .scaleExtent(state.scaleExtent)
      .on('start', zoomStarted)
      .on('zoom', zoomed)
    );

    let v0, r0, q0;

    function zoomStarted() {
      if (!state.projection) return;

      v0 = versor.cartesian(state.projection.invert(d3Mouse(this)));
      r0 = state.projection.rotate();
      q0 = versor(r0);
    }

    function zoomed() {
      if (!state.projection) return;

      const scale = d3Event.transform.k * state.unityScale;
      state.projection.scale(scale);

      const v1 = versor.cartesian(state.projection.rotate(r0).invert(d3Mouse(this))),
        q1 = versor.multiply(q0, versor.delta(v0, v1)),
        rotation = versor.rotation(q1);

      if (state.northUp) {
        rotation[2] = 0; // Don't rotate on Z axis
      }

      state.projection.rotate(rotation);

      state.onMove({ scale, rotation });
    }
  }
});
