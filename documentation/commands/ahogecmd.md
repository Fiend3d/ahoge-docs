# ahogeCmd

`ahogeCmd` handles geometry queries, conversion and export. Flags select the operation; depending on the operation, it uses the current selection or the objects you specify.

```mel
ahogeCmd [-mesh <string>] [-closestPoint <x> <y> <z>]
         [-convertToMesh] [-segments <int>] [-sides <int>]
         [-tuv <string> -ahoge <string>]
         [-legacy <bool>]
         [-export <path> [-exportMode <string>] [-timeRange <string>]
          [-startEnd <int> <int>] [-relativeSample <bool>] [-lowHigh <low> <high>]
          [-exportColor <bool>] [-exportGroupId <bool>] [-autoGroupId <bool>]
          [-exportUV <bool>]];
```

The plug-in must be loaded first — `loadPlugin "ahoge";` in MEL, or `cmds.loadPlugin("ahoge")` in Python after importing `maya.cmds`.

## Flags

| Flag | Short | Arguments | What it does |
|---|---|---|---|
| `-mesh` | `-m` | 1 · mesh name | Sets the mesh the command works on |
| `-closestPoint` | `-cp` | 3 · `x y z` | Returns the closest point on that mesh to the given position, as a vector |
| `-convertToMesh` | `-ctm` | none | Converts the selected Ahoge hair to polygons |
| `-segments` | `-seg` | 1 · int | Segments per strand when converting (default `16`) |
| `-sides` | `-s` | 1 · int | Sides around a strand when converting (default `4`) |
| `-tuv` | — | 1 · mesh name | Computes groom root UV coordinates for a mesh / Ahoge shape pair, returns them as a float array |
| `-ahoge` | — | 1 · ahogeShape name | The Ahoge shape to use with `-tuv` |
| `-legacy` | `-lg` | 1 · bool | Switches the plug-in to legacy ramp handling and **returns the previous value** |
| `-export` | `-e` | 1 · file path | Exports the Ahoge shapes as Alembic to this path |
| `-exportMode` | `-em` | 1 · string | `default`, `unreal` or `marmoset` |
| `-timeRange` | `-tr` | 1 · string | `current_frame`, `time_slider` or `start_end` |
| `-startEnd` | `-se` | 2 · int int | First and last frame when `-timeRange start_end` |
| `-relativeSample` | `-rs` | 1 · bool | Sample relative to each frame instead of absolute |
| `-lowHigh` | `-lh` | 2 · low high | The relative sampling window, e.g. `-0.2 0.2` |
| `-exportColor` | `-ec` | 1 · bool | Write per-strand color into the Alembic |
| `-exportGroupId` | `-egi` | 1 · bool | Write the group id (`groom_group_id`) into the Alembic |
| `-autoGroupId` | `-agi` | 1 · bool | Assign group ids automatically |
| `-exportUV` | — | 1 · bool | Write groom root UVs into the Alembic |

## Closest point on a mesh

Use this query to find a point on a mesh, for example when snapping a tool to its surface:

```mel
global proc exampleClosestPoint() {
    string $mesh[] = `ls -l -type mesh`;
    vector $p = `ahogeCmd -m $mesh[0] -cp 1.0 4.2 -3.7`;
    print(sprintf("%.3f %.3f %.3f", $p.x, $p.y, $p.z));
}
```

```python
import maya.cmds as cmds
p = cmds.ahogeCmd(mesh="headMesh", closestPoint=(1.0, 4.2, -3.7))
```

## Convert hair to mesh

Select one mesh and the Ahoge shapes, then:

```mel
ahogeCmd -convertToMesh -segments 16 -sides 4;
```

```python
cmds.ahogeCmd(convertToMesh=True, segments=16, sides=4)
```

See [Convert to Mesh](/documentation/convert).

## Groom root UVs

`-tuv` returns UVs for the roots of one Ahoge shape against one mesh; Ahoge stores them in a `floatArray` attribute on the shape so the export can carry them:

```python
uv = cmds.ahogeCmd(tuv=mesh[0], ahoge=ahogeShape)
cmds.addAttr(ahogeShape, longName="groomRootUV", dataType="floatArray")
cmds.setAttr(f"{ahogeShape}.groomRootUV", uv, type="floatArray")
```

This is what **Export → Export Ahoge Groom Root UV** and `-exportUV` in the Alembic export rely on. See [Export to Unreal Engine](/documentation/unreal).

## Legacy ramps

`-legacy` returns the value it replaced, which is how Ahoge's own migration tool turns legacy ramps on just long enough to open an old scene:

```python
previous = cmds.ahogeCmd(legacy=True)
try:
    cmds.file(scene, open=True, force=True)
finally:
    cmds.ahogeCmd(legacy=previous)
```

## Alembic export

The full export call, as Ahoge's **Export Ahoge to Alembic** button builds it:

```mel
ahogeCmd -e "C:/work/hair/hair.abc" -exportMode "unreal" -timeRange "start_end"
         -startEnd 1 24 -relativeSample true -lowHigh -0.2 0.2
         -exportColor true -exportGroupId true -autoGroupId false -exportUV true;
```

```python
cmds.ahogeCmd(
    e="C:/work/hair/hair.abc",
    exportMode="unreal",
    timeRange="start_end",
    startEnd=(1, 24),
    relativeSample=True,
    lowHigh=(-0.2, 0.2),
    exportColor=True,
    exportGroupId=True,
    autoGroupId=False,
    exportUV=True,
)
```

See [Alembic export](/documentation/alembic) and [Export Alembic to Unreal Engine](/documentation/unreal).
