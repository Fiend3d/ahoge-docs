# Width

**Width** controls the thickness of the hair along its length.

- Width is stored per curve point, so the number of [segments](/documentation/segments-and-density) limits how much thickness variation a single strand can hold.
- Width is authored with a ramp along the strand: roots, mid-length and tips can each have their own thickness.
- Width affects both the viewport display and the rendered hair, so always confirm the final value in the [Arnold](/documentation/arnold) preview, not only in the viewport.

## Related Arnold attribute

`aiMinPixelWidth` — the minimum rendered width, in pixels. It prevents thin or distant strands from disappearing or aliasing in the render. Set it when hairs in long shots become too thin to see. See [Arnold](/documentation/arnold).

## Tips

- Keep the root slightly thicker than the tip for a natural taper.
- When you copy a look between hairs, width travels with the attribute copy — see [Duplicate](/documentation/duplicate) and the *Paste Attributes* dialog in [Misc tools](/documentation/misc).
- If thickness changes look stepped instead of smooth, increase segments rather than adding ramp points.

The full Width rollout, with attribute names, defaults and what each one does, is on the [ahogeShape attributes](/documentation/nodes/ahoge-shape#width) page.
