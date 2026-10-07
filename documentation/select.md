# Select

Selection tools for Ahoge hair and its source surfaces.

## Select Connected Surfaces

> **Ahoge menu → Miscellaneous → Select Connected Surfaces**

```mel
ahogeTools_selectConnectedSurfaces
```

Select an `ahogeShape` node, run the command, and Ahoge selects the NURBS surfaces connected to it. Use it before rigging, moving or disconnecting the source surfaces.

## Select Children (Outliner)

The **Ahoge Outliner** is the reliable way to find hair nodes in a busy scene.

> **Ahoge menu → Miscellaneous → Ahoge Outliner**

```python
import ahoge_outliner
ahoge_outliner.ahoge_outliner()
```

The outliner lists `ahogeShape`, `nurbopusNode` and `swirlNode` nodes with their children (surfaces, curves, meshes) and four columns:

| Column | Contents |
|---|---|
| **Node** | Node name and type |
| **Seed** | Seed value of the Ahoge node |
| **Curves** | Number of generated hair curves |
| **GroupID** | `groom_group_id` used for [Alembic / Unreal export](/documentation/alembic) |
| **Issues** | Problems detected on the node, e.g. an intermediate NURBS surface |

Right-click gives **Select Children**, **Select All**, **Collapse All** and **Expand All**. The **Display** menu toggles the columns.

## Root Pivot

> **Ahoge menu → Miscellaneous → Root Pivot**

```mel
ahogeTools_rootPivot
```

Moves the pivot of each selected curve and surface to its root: a curve's first CV, or the centre of a surface's first ring. Hair transforms then rotate around the roots instead of the object origin — essential for the [Curve Brush](/documentation/tools/curve-brush) and for posing with [Surface Rig](/documentation/surface-rig).

## Snap Roots

```mel
snapRoots -padding 0.5;
```

Maya's own command for snapping curve roots together. Ahoge's brush **Snap Roots** button runs it with the padding set in Tool Settings. Useful when several Ahoge shapes must share the same placement area.

## Practical selection recipes

| Task | Steps |
|---|---|
| Find the surface behind a hair look | Select the Ahoge node → *Select Connected Surfaces* |
| Audit a scene | Open the Ahoge Outliner, sort by **Curves** to find the heaviest hairs, check **Issues** |
| Clean the scene | Select intermediate objects → *Debug → Delete Intermediate Objects* |
| Fix a broken look | Outliner → **Issues** column → see which surface is intermediate or disconnected |
