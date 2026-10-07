# Surface Rig

**Rig Surfaces** builds an automatic rig on the selected NURBS surfaces, so the head, brow or eyelid surfaces can be posed and the Ahoge hair follows the deformation.

> **Ahoge menu → Miscellaneous → Rig Surfaces**
> **Ahoge menu → Miscellaneous → Delete Surface Rigs**

```python
import ahoge_tools
ahoge_tools.create_surface_rig()   # what Miscellaneous → Rig Surfaces runs
ahoge_tools.delete_surface_rigs()  # what Miscellaneous → Delete Surface Rigs runs
```

## Options

| Option | Default | Values |
|---|---|---|
| **Mode** | Forward Kinematics | `Forward Kinematics`, `Inverse Kinematics`, `Spline IK` |
| **Rig Segments** | 3 | 1…1000000 — number of joint segments along the surface |
| **Keep Length** | off | keep segment lengths while posing |
| **Maximum Influences** | 3 | 1…10 — how many joints influence a point |

## Choosing a mode

| Mode | Use it when |
|---|---|
| **Forward Kinematics** | Simple posing, predictable chain, head regions |
| **Inverse Kinematics** | You want to move the tip and let the chain follow |
| **Spline IK** | Long flowing regions, smooth continuous bends (ponytails, long brows) |

## Workflow

1. Select the source NURBS surfaces (use **Miscellaneous → Select Connected Surfaces** from the Ahoge node).
2. Run **Rig Surfaces** with the desired mode.
3. Pose the rig — the hair follows because the Ahoge node reads the deformed surfaces.
4. Use **Grab Rig** in the [Curve Brush](/documentation/tools/curve-brush) to pose whole curves off the rig handles.
5. Run **Delete Surface Rigs** to remove the rig. Running *Rig Surfaces* again also deletes the previous rig first.

::: warning
Rigging changes the surface, which regenerates the hair. If a look was carefully tuned, duplicate the Ahoge node first (see [Duplicate](/documentation/duplicate)) or convert the hair to curves/mesh before heavy deformation work (see [Convert](/documentation/convert)).
:::
