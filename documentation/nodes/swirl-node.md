# swirlNode attributes

The node behind [Swirl](/documentation/swirl): it takes an existing source surface and twists or curls it, so the hair that grows from it follows a spiral instead of the surface's V direction.

Rollouts and attributes are listed **in the order `AEswirlNodeTemplate` puts them in the Attribute Editor**. The first column is the label you see in the Attribute Editor, the second is the attribute name for scripts, with the short name Maya also accepts in brackets. All ramps default to a straight 0 → 1 line.

## Seed

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Seed | `seed` | long | `0` | Starting value for every randomized curl value below. Same seed and same settings give the same curl pattern. |

## General

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| U Segments | `uSegments` (`uSegs`) | long | `6` | Resolution of the surface the node produces, around the cross-section. |
| V Segments | `vSegments` (`vSegs`) | long | `12` | Resolution of that surface along its length. More segments give a smoother curl. |

## Twist

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Twist | `twist` | double | `0` | A steady rotation of the surface along its length. |
| `rampTwist` | `rampTwist` | ramp | 0 → 1 | Scales Twist along the length of the surface. |

## Curl

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Curl | `curl` | double | `0` | Amplitude of the curl wave — how far the surface bends sideways. |
| Curl Frequency | `curlFreq` | double | `25` | How many curl waves there are along the surface. |
| Curl Orient | `curlOrient` | double | `0` | Which direction the curls bend in. |
| Curl Phase | `curlPhase` | double | `0` | Where along the surface a wave starts. |
| Randomize Direction | `curlDirRand` | bool | `false` | Let each strand curl in its own direction. |
| Curl Randomize | `curlRand` | double | `0` | Random variation of the curl amplitude. |
| Curl Frequency Randomize | `curlFreqRand` | double | `0` | Random variation of the curl frequency. |
| Curl Orient Randomize | `curlOrientRand` | double | `0` | Random variation of the curl direction. |
| Curl Phase Randomize | `curlPhaseRand` | double | `0` | Random variation of where each wave starts. |

**Curl Frequency Noise**

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Noise | `curlFreqNoise` | double | `0` | Turbulence added to the curl frequency, so the waves are not evenly spaced. |
| Noise Frequency | `curlFreqNoiseFreq` | double | `10` | Frequency of that turbulence. |
| Noise Octaves | `curlFreqNoiseOctaves` (`curlFreqNoiseOctav`) | long | `1` | Additional small turbulence layers on top of the main ones. |
| Noise Persistence | `curlFreqNoisePersistence` (`curlFreqNoisePers`) | double | `0.5` | Weight balance between the turbulence layers. |

**Random Distribution**

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| `curlRandDistribution` | `curlRandDistribution` (`curlRandDistr`) | ramp | 0 → 1 | Where along the surface the randomized amplitude is applied. |
| `curlFreqRandDistribution` | `curlFreqRandDistribution` (`curlFreqRandDistr`) | ramp | 0 → 1 | Where along the surface the randomized frequency is applied. |

**Curl ramps**

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| `rampCurl` | `rampCurl` | ramp | 0 → 1 | Scales Curl along the length of the surface. |
| `rampFreq` | `rampFreq` | ramp | 0 → 1 | Scales Curl Frequency along the length. |
| `rampOrient` | `rampOrient` | ramp | 0 → 1 | Scales Curl Orient along the length. |

## Attributes the Attribute Editor does not show

| Attribute | Short | Type | What it holds |
|---|---|---|---|
| `inputSurfaces` | `inSurfaces` | data array | The surfaces being twisted |
| `outputSurfaces` | `outSurfaces` | data array | One twisted surface per input, for `ahogeShape.inputSurfaces` |

## Scripting example

```python
import maya.cmds as cmds

swirl = cmds.createNode("swirlNode")
cmds.setAttr(swirl + ".uSegments", 6)
cmds.setAttr(swirl + ".vSegments", 12)
cmds.setAttr(swirl + ".curl", 0.4)
cmds.setAttr(swirl + ".curlFreq", 12.0)
cmds.setAttr(swirl + ".curlPhaseRand", 0.8)

cmds.connectAttr("sourceSurface.worldSpace[0]", swirl + ".inputSurfaces[0]")

# outputSurfaces feeds a new nurbsSurface, which is what the hair grows from
surf = cmds.createNode("nurbsSurface")
cmds.connectAttr(swirl + ".outputSurfaces[0]", surf + ".create")
cmds.connectAttr(surf + ".worldSpace[0]", "ahogeShape1.inputSurfaces[0]")
```

Ahoge's own **Extra → Swirl** does exactly this for every selected surface: the surface goes to `inputSurfaces[index]`, a new `nurbsSurface` is created and driven by `outputSurfaces[index]`, and the new surface gets the default shading group.
