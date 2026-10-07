# Nurbopus

**Nurbopus** builds hair from **curves** instead of from a source surface. It turns your guide curves into NURBS surfaces, and those surfaces become the source for Ahoge hair.

> **Ahoge menu → Extra → Nurbopus**

Select guide curves — and optionally a mesh — then run it. The menu creates one `nurbopusNode`, connects every selected curve to its `inputCurves`, and creates a new `nurbsSurface` per curve fed from `outputSurfaces`. A selected mesh goes to `inputMesh`, where it is used to **aim** the surfaces: hair still grows from the surfaces, never from the mesh.

The node is an ordinary Maya node:

```python
import maya.cmds as cmds

node = cmds.createNode("nurbopusNode")
cmds.connectAttr("curve1.worldSpace[0]", node + ".inputCurves[0]")
cmds.connectAttr("headMesh.worldMesh[0]", node + ".inputMesh")   # orientation only
out = cmds.createNode("nurbsSurface")
cmds.connectAttr(node + ".outputSurfaces[0]", out + ".create")
```

Attributes: [nurbopusNode](/documentation/nodes/nurbopus-node).

## Create Nurbopus options

| Option | Default | Values |
|---|---|---|
| **Method** | Untwist | `Up Vector`, `Untwist` |
| **Shape** | circle | `circle`, `line` |
| **U Segments** | 4 | 1…1000000 |
| **V Segments** | 8 | 1…1000000 |

- **Up Vector** — the surface is built with a fixed up direction; predictable for straight, combed hair.
- **Untwist** — the surface follows the curve with minimal twist; better for curved or flowing guides.
- **circle** — a round tube around the curve (classic hair guide).
- **line** — a flat ribbon, useful for flat strands, brows and lashes.
- **U Segments** — cross-section resolution of the tube.
- **V Segments** — resolution along the curve, i.e. how many rings of hair along the guide.

## Nurbopus commands

| Command | What it does |
|---|---|
| Extra → Nurbopus | Create a `nurbopusNode` from the selected curves (a selected mesh is wired to `inputMesh` for orientation) |
| Extra → Nurbopus → Connect | Select surfaces that have Nurbopus, then curves: the curves are connected to that Nurbopus node |
| Extra → Nurbopus → Detach | Disconnect the selected surfaces from their Nurbopus node, duplicate the node, and connect the duplicate to the curves of those surfaces |

## Node structure

`nurbopusNode` builds one surface per curve in `inputCurves`; `inputMesh` only feeds the orientation controls. `outputSurfaces` is what `ahogeShape` reads. The chain is visible in the [Ahoge Outliner](/documentation/select#outliner).

## Workflow tips

- Nurbopus is the natural bridge from **XGen guides** or sculpted curves to Ahoge — see the [XGen guides tutorial](/tutorials/xgen-guides).
- Model guides slightly longer than the final hair: hair grows along the surface V-coordinate, so the guide length sets the hair length.
- Use **Detach** to split one shared Nurbopus node into independent ones when regions need different settings. See [Connect / Disconnect](/documentation/connect-disconnect).
- If the generated surfaces are messy, run [Repair NURBS](/documentation/misc#repair-nurbs) on them before creating hair.
