# Set Up For Dynamic nHair

Use Maya nHair (fur) curves as a simulation source, then bring the result back into Ahoge.

## 1. Convert Ahoge to curves

> **Ahoge → Convert Ahoge → Convert to Curves (Grouped)**

```mel
ahogeTools_convertToCurves(true)
```

Grouped conversion keeps a large hair manageable in the simulation setup. See [Convert](/documentation/convert).

## 2. Create the nHair system

1. Select the converted curves.
2. **nHair → Make Selected Curves Dynamic**.
3. Maya creates the `hairSystem` plus the active/follow curves.

## 3. Simulation setup

| Element | Recommendation |
|---|---|
| **Solver** | Add an nSolver; set frames long enough for the hair to settle |
| **Collisions** | Assign the head mesh as a collider to the `hairSystem` |
| **Start Curve** | Set the **root** as the start curve so roots stay planted — set pivots to the roots first with **Miscellaneous → Root Pivot** |
| **Stiffness / dampening** | High stiffness for short hair, low for flowing hair |
| **Motion drag / turbulence** | Add for wind; keep low for a controlled look |

## 4. Bake

Cache the simulation (Make Live / cache to disk), then freeze the Ahoge hair so the simulated shape survives without the procedural node regenerating it:

```mel
ahogeTools_convertToCurves(true);   // strands baked into curves
```

Or skip the freeze and export the animation directly: **Export → Export Alembic** with **Time Range → Time Slider** writes the moving roots into the groom.

## 5. Export the simulated hair

> **Ahoge → Export → Export Alembic**

- **Time Range** → **Time Slider** (or **Start/End**) to write the whole animation.
- Keep **Export groom_group_id** on so grouping survives.
- For Unreal, **Mode → `Unreal`**. See [Export to Unreal Engine](/documentation/unreal).

## 6. Notes and limits

- Simulation runs on the **converted curves**, not on the Ahoge node — attribute changes after conversion have no effect. Keep the original Ahoge node hidden as your look backup.
- Very dense hair is expensive to simulate. Simulate a reduced density and restore volume with [multistrand](/documentation/multistrand) on a second, non-simulated Ahoge layer.
- For cloth-like hair, cache the Alembic and let the engine (Unreal Groom with animation) play it back instead of simulating in-engine.

## Video

Watch the dynamic nHair setup on [https://www.youtube.com/@ahoge-plugin](https://www.youtube.com/@ahoge-plugin).
