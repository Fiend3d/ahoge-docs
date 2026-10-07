# Convert

Ahoge hair is a procedural node. Converting it freezes the result into ordinary Maya geometry — useful for hand-editing, for exporters that do not understand Ahoge, or for archiving a look.

> **Ahoge menu → Convert Ahoge**

## Convert to Curves

```mel
ahogeTools_convertToCurves(false)
```

Converts the selected `ahogeShape` nodes to NURBS curves — one curve per hair strand, with the current [width](/documentation/width) baked into the curve.

## Convert to Curves (Grouped)

```mel
ahogeTools_convertToCurves(true)
```

Same as above, but the resulting curves are grouped, which keeps large conversions organized.

## Convert to Mesh

> **Ahoge menu → Convert Ahoge → Convert to Mesh**

```python
import ahoge_tools
ahoge_tools.convert_to_mesh()   # what Convert Ahoge → Convert to Mesh runs
```

Options (right-click the menu item):

| Option | Default | Description |
|---|---|---|
| **Segments** | 16 | Number of segments along the strand mesh |
| **Sides** | 4 | Number of sides of the strand tube (minimum 3) |

Converts the selected `ahogeShape` nodes to mesh tubes.

::: warning
Conversion is destructive: the result is static geometry and no longer responds to Ahoge attributes. Keep the original Ahoge node hidden, or work on a duplicated Ahoge node (see [Duplicate](/documentation/duplicate)).
:::

## Mesh to Surface (the other direction)

> **Ahoge menu → Tools → Mesh to Surface**

```python
import ahoge_tools
ahoge_tools.mesh_to_surface()   # what Tools → Mesh to Surface runs
```

Converts a **mesh** into a NURBS surface so Ahoge can grow hair from it. Options: **Degree** and **Replace Original**.

If your head or brow is a sculpt (ZBrush, Maya modeling), this is the entry point: mesh → surface → Ahoge. See the videos [Geometry to Hair with Ahoge](https://www.youtube.com/watch?v=SGBAhTa8tQ0) and [How to paint hair in ZBrush](https://www.youtube.com/watch?v=6x89RhFYtKE).

Related tools in the same submenu:

- [Fix Topology](/documentation/misc#fix-topology) — rebuild meshes as clean quad grids that *Mesh to Surface* can convert
- [Repair NURBS](/documentation/misc#repair-nurbs) — even out the parameterisation of NURBS curves and surfaces so hair and textures stop stretching
