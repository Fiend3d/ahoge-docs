# Swirl

**Swirl** twists hair around an axis. It is a dedicated node (`swirlNode`) that takes NURBS surfaces as input and outputs surfaces whose isoparms spiral — so the hair grown from them curls in a controlled, circular way instead of relying on noise alone.

> **Ahoge menu → Extra → Swirl**

Select NURBS surfaces and run it. The menu creates one `swirlNode`, connects every selected surface to its `inputSurfaces`, and creates a new `nurbsSurface` per input surface, fed from `outputSurfaces` and assigned the initial shading group.

The node itself is an ordinary Maya node, so it can be built without the menu:

```python
import maya.cmds as cmds

swirl = cmds.createNode("swirlNode")
cmds.connectAttr("nurbsSurface1.worldSpace[0]", swirl + ".inputSurfaces[0]")
out = cmds.createNode("nurbsSurface")
cmds.connectAttr(swirl + ".outputSurfaces[0]", out + ".create")
```

Attributes: [swirlNode](/documentation/nodes/swirl-node).

## Create Swirl options

| Option | Default | Range |
|---|---|---|
| **Swap UV** | on | — |
| **U Segments** | 6 | minimum 4 |
| **V Segments** | 10 | minimum 4 |

**Swap UV** reverses the U and V direction of an input surface before it is wired in, which flips the axis the spiral runs around.

Higher segment counts give a smoother spiral and let [noise](/documentation/noise) and [width](/documentation/width) ramps show more detail.

## Swirl commands

| Command | What it does |
|---|---|
| Extra → Swirl | Create a `swirlNode` from the selected NURBS surfaces |
| Extra → Swirl → Connect | Select surfaces that have Swirl, then surfaces: the surfaces are connected to the Swirl node |
| Extra → Swirl → Detach | Disconnect the selected surfaces from their Swirl node, duplicate the node, and connect the duplicate to those surfaces |

## Node structure

`swirlNode` reads `inputSurfaces` and produces `outputSurfaces`, which feed the `ahogeShape`. Both nodes appear in the [Ahoge Outliner](/documentation/select#outliner).

## When to use Swirl

| Goal | Use |
|---|---|
| Curls and ringlets | Swirl for the overall spiral + [noise](/documentation/noise) for irregularity |
| Braids, twists, buns | Swirl to define the twist direction of the whole region |
| General waves | [Noise](/documentation/noise) and the [Surface Brush](/documentation/tools/surface-brush) instead |
| Per-strand variation | [Multistrand](/documentation/multistrand) and [clump](/documentation/clump) |

::: tip
Swirl controls the *surface*, not the strands. Shape the surface first, then tune the hair attributes — the hair always follows the surface.
:::
