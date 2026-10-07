# nurbopusNode attributes

The node behind [Nurbopus](/documentation/nurbopus). It builds one NURBS surface **from each guide curve** — and those surfaces are what an `ahogeShape` grows hair from.

A mesh can be given to Nurbopus as well, but it is an **orientation reference**: it aims the surfaces. Hair never grows from the mesh.

Rollouts and attributes are listed **in the order `AEnurbopusNodeTemplate` puts them in the Attribute Editor**. The first column is the label you see in the Attribute Editor, the second is the attribute name for scripts, with the short name Maya also accepts in brackets.

## General

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Up Vector | `upVector` (`upVec`) | vector | `0, 1, 0` | The direction used to aim the cross-section when Method is **Up Vector**. |
| Method | `method` | enum | `1` Untwist | How the surface is aimed along the curve: **Up Vector** uses the Up Vector attribute, **Untwist** follows the curve's own frames. |
| Shape | `shape` | enum | `0` circle | Cross-section of the surface: **circle** makes a tube, **line** makes a flat ribbon. |
| U Segments | `uSegments` (`useg`) | long | `4` | Resolution around the cross-section. |
| V Segments | `vSegments` (`vseg`) | long | `8` | Resolution along the curve. |
| Segments Power | `segmentsPower` (`segmentsPow`) | double | `1` | Biases how those segments are distributed along the surface. |
| Radius | `radius` (`r`) | double | `1` | Size of the cross-section. |
| Scale Y | `scaleY` (`sy`) | double | `1` | Flattens the cross-section in Y, turning the tube into an ellipse. |
| Rotate | `rotate` | double | `0` | Turns the cross-section around the curve. |
| twist | `twist` | double | `0` | Rotates the cross-section progressively along the length. |
| `ramp` | `ramp` | ramp | 0 → 1 | Scales Radius along the length of the surface. |

## Orientation

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Use Mesh Normal | `useMeshNormal` | bool | `false` | Take the aim from the input mesh's normals instead of from the curve frames. |
| Orient Method | `orientMethod` | enum | `0` mesh | Where the aim comes from: **mesh** uses the input mesh, **point** uses Orient Point. |
| Orient | `orient` | bool | `false` | Turn orientation on. |
| Orient Point | `orientPoint` | vector | `0, 0, 0` | The point the surfaces aim at when Orient Method is **point**. |
| Orient Segment | `orientSegment` | long | `2` | Which segment along the surface the orientation is read from. |

## Randomize

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Seed | `seed` | long | `0` | Starting value for the randomisation below. |
| Randomize Radius | `randomizeRadius` (`rndRadius`) | double | `0` | Varies Radius randomly along the surface. |

## Attributes the Attribute Editor does not show

| Attribute | Short | Type | What it holds |
|---|---|---|---|
| `inputCurves` | `inCurves` | data array | The guide curves the surfaces are built from |
| `inputMesh` | `inMesh` | mesh | The orientation mesh — not a growth source |
| `outputSurfaces` | `outSurfaces` | data array | One surface per input curve, for `ahogeShape.inputSurfaces` |

## Scripting example

```python
import maya.cmds as cmds

node = cmds.createNode("nurbopusNode")
cmds.setAttr(node + ".uSegments", 8)
cmds.setAttr(node + ".vSegments", 16)
cmds.setAttr(node + ".radius", 0.05)
cmds.setAttr(node + ".method", 1)          # Untwist

cmds.connectAttr("curve1.worldSpace[0]", node + ".inputCurves[0]")
cmds.connectAttr("headMesh.worldMesh[0]", node + ".inputMesh")   # orientation only
cmds.connectAttr(node + ".outputSurfaces[0]", "ahogeShape1.inputSurfaces[0]")
```

Ahoge's own **Extra → Nurbopus** does the same wiring: every selected curve goes to `inputCurves[index]`, a `nurbsSurface` is created per curve and attached to `outputSurfaces[index]`, and the first selected mesh — if any — goes to `inputMesh`.
