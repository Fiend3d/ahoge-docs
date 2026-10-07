# Misc tools

> **Ahoge menu → Tools** and **Ahoge menu → Miscellaneous**

## Mesh to Surface

> **Tools → Mesh to Surface**

Converts a mesh into a NURBS surface so Ahoge can grow hair from it.

```python
import ahoge_tools
ahoge_tools.mesh_to_surface()      # what Tools → Mesh to Surface runs
```

Options: **Degree**, **Replace Original**.

## Fix Topology

> **Tools → Fix Topology**

Rebuilds the selected meshes as clean quad grids that *Mesh to Surface* can convert.

```python
import ahoge_tools
ahoge_tools.fix_topology()          # what Tools → Fix Topology runs
```

Options: **Smooth**, **Fair Passes**, **Smooth Passes**, **Resolution U**, **Resolution V**, **Replace Original**.

Use it when a sculpt has triangles, holes or uneven density and the converted surface comes out twisted.

## Repair NURBS

> **Tools → Repair NURBS**

Evens out the parameterisation of the selected NURBS curves and surfaces so textures (and therefore hair placement) stop stretching.

```python
import ahoge_tools
ahoge_tools.repair_nurbs()          # what Tools → Repair NURBS runs
```

Options: **Direction**, **Iterations**, **Preserve Creases**.

## Carousel

> **Tools → Carousel**

```mel
AhogeCarouselTool
```

Click a NURBS surface to set **which border is its root** and **where its seam runs**. This decides where hair starts and how the surface's U/V layout is interpreted — the fix for hair that grows from the wrong edge or wraps in the wrong place.

Tool options include the two mode buttons and **Snap to Isoparm**.

## Rig Surfaces (Surface Rig)

> **Miscellaneous → Rig Surfaces**

Creates an automatic rig for the selected surfaces so the head and brow surfaces can be posed and the hair follows. See [Surface Rig](/documentation/surface-rig).

> **Miscellaneous → Delete Surface Rigs** — removes those rigs again.

## Copy / Paste Attributes

The fastest way to reuse a look.

> **Miscellaneous → Copy Ahoge Attributes** — store the attributes of a single selected `ahogeShape`
> **Miscellaneous → Paste Ahoge Attributes** — apply them to the selected `ahogeShape` nodes
> **Miscellaneous → Paste Ahoge Attributes (options)** — choose which groups to paste

```python
import ahoge_tools
ahoge_tools.copy_attributes()      # what Miscellaneous → Copy Ahoge Attributes runs
ahoge_tools.paste_attributes()      # what Miscellaneous → Paste Ahoge Attributes runs
ahoge_tools.paste_attributes_options()  # the same with the option window open
```

Paste groups and their defaults:

| Group | Pasted by default | Contents |
|---|---|---|
| Seed | no | `seed` |
| Color | yes | color ramp, mutant color, randomization |
| General | yes | segments, number of curves |
| Width | yes | width, width ramp |
| Noise | yes | random placement, noise, frequency, octaves, persistence, ramps |
| Cut | yes | cut, compress noise frequency, cut distribution |
| Spray | yes | fill, shift, spray along normal, spray, spray distribution |
| Multistrand | yes | multistrand count, percent, twist, spray and randomization |
| Clump | yes | clump, fill, cut, clump counts, fly away, ramp, clump noise |
| Arnold | no | `aiMode`, `aiMinPixelWidth` |
| Viewport | no | display mode, preview percent, preview sides, selection frame |
| Alembic | no | `groom_group_id` |

See [ahogeShape attributes](/documentation/nodes/ahoge-shape) for the full list.

## Root Pivot

> **Miscellaneous → Root Pivot**

Moves the pivot of each selected curve and surface to its root: a curve's first CV, the centre of a surface's first ring.

## Ahoge Outliner

> **Miscellaneous → Ahoge Outliner**

Scene browser for Ahoge nodes. See [Select](/documentation/select#outliner).

## Transfer UV / Delete UV

> **Export → Transfer UV** — select a mesh and `ahogeShape` nodes to transfer UVs onto the hair.
> **Export → Delete UV** — remove UVs from the selected `ahogeShape` nodes.

## Debug

> **Ahoge menu → Debug**

| Command | What it does |
|---|---|
| **Fix Surfaces** | Select NURBS surfaces and a mesh to fix the surfaces against the mesh |
| **Delete Intermediate Objects** | Deletes the selected intermediate objects (the nodes Ahoge creates between the source surface and the hair) |
| **Migrate Old Scene** | Opens a scene saved by an older Ahoge and resaves it with complete ramp data |

### Migrate Old Scene

> **Debug → Migrate Old Scene**

```python
import ahoge_tools
ahoge_tools.migrate_scene_window()   # what Debug → Migrate Old Scene runs
```

Older Ahoge scenes were saved with legacy ramp defaults. **Migrate Old Scene** reads the scene, rebuilds the ramp data completely and saves it as a new file (default destination: `new_<name>` next to the original). The migrated scene keeps its ramps without legacy mode.

The destination must differ from the scene being migrated.

::: tip
Migrate a copy, not the original — the original stays openable by older Ahoge builds.
:::
