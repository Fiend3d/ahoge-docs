# Quick Start

Get from an empty scene to rendered hair in about ten minutes.

## 1. Check the install

The **Ahoge** menu should be in the Maya window bar. If it is missing, restart Maya and tick **Loaded**
for the Ahoge plug-in in **Windows → Settings → Plug-in Manager** — see [Installation](/installation).

## 2. Make a source surface

Create a NURBS sphere, delete the bottom part, and reshape it into a patch over the crown. Any NURBS surface works — Ahoge grows from surfaces, not meshes.

If your head is a mesh: **Ahoge → Tools → Mesh to Surface** (run **Fix Topology** first on messy sculpts).

## 3. Check the growth direction

Hair grows along the surface **V-coordinate**. Create a test Ahoge with a low density first:

> **Ahoge → Ahoge** (with options: Segments 8, Number of Curves 200, Width 0.01)

If the strands grow from the wrong edge, set the root border with [Carousel](/documentation/tools/carousel). If they grow into the head instead of out of it: **Modeling → Surfaces → Reverse Direction → Swap**.

## 4. Set density and segments

In the Attribute Editor on the `ahogeShape` node:

| Attribute | Starting value |
|---|---|
| `numCurves` | 3 000 – 10 000 |
| `numSegments` | 12 – 24 |

See [Segments and Density](/documentation/segments-and-density).

## 5. Shape the strands

| Goal | Attribute |
|---|---|
| Wave / curl | `noise`, `frequency`, `octaves`, `persistence` — [Noise](/documentation/noise) |
| Taper | `widthRamp` — [Width](/documentation/width) |
| Color variation | `colorRamp`, `randomizeColor` — [Color](/documentation/color) |
| Volume | `multistrand` — [Multistrand](/documentation/multistrand) |
| Locks | `clump` — [Clump](/documentation/clump) |
| Untidy roots | `spray`, `randomPlacement` — [Spray](/documentation/spray) |

Keep **Preview Percent** low while iterating, raise it before judging the silhouette. See [Viewport](/documentation/viewport).

## 6. Restyle by hand

> **Ahoge → Curve Brush**

**Grab** to move strands, **Freeze Root** to keep roots planted, **Paint** to fill gaps. See [Curve Brush](/documentation/tools/curve-brush).

## 7. Render

Arnold: check `aiMinPixelWidth` if distant strands disappear. See [Arnold](/documentation/arnold).
3Delight and RenderMan for Maya are supported through separate plug-ins — see [Renderers](/documentation/renderers).

## 8. Export

> **Ahoge → Export → Export Alembic** — Mode `Unreal` for game engines, `Default` for other DCCs.

See [Alembic export](/documentation/alembic) and [Export to Unreal Engine](/documentation/unreal).

## Next

Watch the same flow on video: [Creating hair with Ahoge in Autodesk Maya](https://www.youtube.com/watch?v=n8byp1-GBnw), and see [Video tutorials](/tutorials/videos) for the rest.
