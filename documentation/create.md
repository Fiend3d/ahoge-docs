# Create Ahoge hair

## How to create Ahoge hair

1. Select one or more NURBS surfaces.
2. Create the Ahoge shape using the **Ahoge menu**.

Hair grows along the **V-coordinate** of the NURBS surface.

<figure class="ahoge-figure">
  <img src="/images/documentation/v-coord.gif" alt="Hair growing along the V-coordinate of a NURBS surface" />
  <figcaption>Hair grows along the V-coordinate of the surface.</figcaption>
</figure>

If the hair grows in the wrong direction, just swap the surface direction:

> **Modeling menu → Surfaces → Reverse Direction → Swap**

## Multiple surfaces

You can attach several surfaces to one Ahoge node. The strand count multiplies with the number of attached surfaces — see [Segments and Density](/documentation/segments-and-density).

## Requirements for the source surface

- **NURBS surfaces only.** Ahoge grows from the surface geometry, not from a head model — if your head is a mesh, convert it first with [Mesh to Surface](/documentation/convert#mesh-to-surface).
- Clean, predictable isoparm layout. A single patch per hair region gives the most controllable result; use [Fix Topology](/documentation/misc#fix-topology) or [Repair NURBS](/documentation/misc#repair-nurbs) when imported surfaces are messy.
- Keep the surface history manageable — Ahoge reads the surface shape, so a rebuilt or frozen surface keeps hair stable.

## After creating the shape

The new `ahogeShape` node appears in the scene and in the [Outliner](/documentation/select#outliner). All strand settings live on that node:

- [Segments and Density](/documentation/segments-and-density)
- [Width](/documentation/width)
- [Color](/documentation/color)
- [Noise](/documentation/noise)
- [Spray](/documentation/spray)
- [Multistrand](/documentation/multistrand)
- [Clump](/documentation/clump)

To place hair from curves instead of a surface, use [Nurbopus](/documentation/nurbopus).
