# Nodes

Ahoge adds three node types to Maya. Everything else in Ahoge — the menu, the tools, the shelf buttons — is a way of editing the attributes of these three nodes.

| Node | What it is | Created by |
|---|---|---|
| `ahogeShape` | The hair itself: strands grown from a source surface | **Modeling → Create Ahoge Hair**, `createNode ahogeShape` |
| `nurbopusNode` | Builds source surfaces from guide curves — a mesh only aims them | **Modeling → Nurbopus**, `createNode nurbopusNode` |
| `swirlNode` | Twists an existing source surface before hair grows from it | **Modeling → Swirl**, `createNode swirlNode` |

All three are dependency nodes: they take input, compute geometry, and pass it on. The chain in a scene looks like this:

```
source surface ──→ swirlNode ──────┐
                                   ├──→ ahogeShape ──→ hair
curves ──────────→ nurbopusNode ───┘
                        ↑
                   mesh (orientation only)
```

`inputSurfaces`, `inputCurves`, `inputMesh` and `outputSurfaces` are the message attributes that hold those links. They are not in the Attribute Editor rollouts, and you normally never touch them by hand — connecting and disconnecting in the Ahoge menu rewires them.

## Attribute Editor templates

Each node has its own Attribute Editor template, and the rollouts appear in this fixed order:

| Node | Template | Rollouts |
|---|---|---|
| `ahogeShape` | `AEahogeShapeTemplate` | Seed, Color, General, Width, Noise, Cut, Spray, Multistrand, Clump, Arnold, Viewport, Alembic |
| `nurbopusNode` | `AEnurbopusNodeTemplate` | General, Orientation, Randomize |
| `swirlNode` | `AEswirlNodeTemplate` | Seed, General, Twist, Curl |

The reference pages list every attribute **in exactly that order**, including the sub-rollouts inside a rollout, so what you read is what you see in the Attribute Editor:

- [ahogeShape attributes](/documentation/nodes/ahoge-shape)
- [nurbopusNode attributes](/documentation/nodes/nurbopus-node)
- [swirlNode attributes](/documentation/nodes/swirl-node)

## Long and short names

Every attribute has a long name and, usually, a short one. The Attribute Editor shows a label, scripting uses the names:

| Long name | Short name | Attribute Editor label |
|---|---|---|
| `numSegments` | `nSeg` | Segments |
| `numCurves` | `nCurves` | Curves |
| `randomizeFrequencyDistribution` | `randFreqDistr` | Randomize Frequency Distribution |
| `displaySelectionFrame` | `displaySelFrame` | Display Selection Frame |

Both work in MEL and Python; the reference pages list both.

## Attribute types

| Type in the tables | What it means in Maya |
|---|---|
| `long` | Whole number |
| `float`, `double` | Number with decimals (`double` is what the sliders write) |
| `bool` | 0 / 1 checkbox |
| `enum` | Menu of named options, stored as an index — the tables show both the index and the name |
| `color` | Three numbers, also addressable as `.attributeR` / `G` / `B` |
| `vector` | Three numbers, also addressable as `.attributeX` / `Y` / `Z` |
| `ramp` | A compound attribute wired to a Maya ramp node; the Attribute Editor shows the ramp under the attribute name |
| `data`, `message` | Connection attributes — the plumbing between nodes, not in the Attribute Editor |

```python
import maya.cmds as cmds

shape = cmds.ls(type="ahogeShape")[0]
cmds.setAttr(shape + ".numCurves", 12000)
cmds.setAttr(shape + ".noise", 0.35)
cmds.setAttr(shape + ".mutantColorR", 0.8)
```

