# Alembic export

> **Ahoge menu → Export → Export Alembic**

Exports the selected `ahogeShape` nodes to an `.abc` file with hair attributes baked into the groom data.

The dialog is a front-end for `ahogeCmd`'s export flags, so an export is scriptable without it:

```mel
ahogeCmd -e "C:/work/char01/hair.abc" -exportMode "unreal" -timeRange "time_slider";
```

Every flag is listed under [ahogeCmd](/documentation/commands/ahogecmd).

Supported export presets are **Default**, **Unreal** and **Marmoset**. For Toolbag, select **Marmoset** and follow [Export Alembic to Marmoset Toolbag](/documentation/marmoset).

## Export options

| Option | Default | Values / range | Description |
|---|---|---|---|
| **Path** | `test.abc` | `*.abc` | Output file |
| **Mode** | Default | `Default`, `Unreal`, `Marmoset` | Export preset for the target application |
| **Time Range** | Current Frame | `Current Frame`, `Time Slider`, `Start/End` | Frames to write |
| **Start Frame** | 1 | −1000000…1000000 | First frame when *Start/End* is selected |
| **End Frame** | 24 | −1000000…1000000 | Last frame when *Start/End* is selected |
| **Relative Sample** | off | bool | Sample relative to the current frame |
| **Low** | −0.2 | −1.0…0.0 | Lower bound of the exported attribute range |
| **High** | 0.2 | 0.0…1.0 | Upper bound of the exported attribute range |
| **Export Color (groom_color)** | off | bool | Write per-strand color as `groom_color` |
| **Export groom_group_id** | on | bool | Write the group id attribute |
| **Auto groom_group_id** | off | bool | Assign group ids automatically |
| **Export groom_root_uv** | off | bool | Write root UVs (see *Transfer UV*) |

The default output is `$MAYA_APP_DIR/projects/default/data/test.abc`. Choose a project-specific path and filename before exporting.

## groom_group_id

`groom_group_id` groups strands in the exported groom — it is how the target application knows which strands belong together. Set it manually on the Ahoge node, or let Ahoge assign it with **Auto groom_group_id**. The current value is shown in the **GroupID** column of the [Ahoge Outliner](/documentation/select#outliner).

It is copied with **Paste Ahoge Attributes → Alembic**.

## UVs

- **Export → Transfer UV** — select a mesh and `ahogeShape` nodes to transfer UVs onto the hair.
- **Export → Delete UV** — remove UVs from the selected `ahogeShape` nodes.
- **Export groom_root_uv** in the Alembic dialog writes root UVs into the file.

## Animating the export

Use **Time Range → Time Slider** (or *Start/End*) to write an animated groom. To freeze the current look instead, bake the generated strands into curves:

```mel
ahogeTools_convertToCurves(true);   // one curve per strand, grouped under a transform
```

The curves are static geometry: they keep the strand positions and [width](/documentation/width) as they were at the current frame, and no longer respond to Ahoge attributes.

See the [dynamic nHair tutorial](/tutorials/dynamic-nhair) for the Maya-side setup.

## Next step

[Export Alembic to Unreal Engine](/documentation/unreal) covers the Unreal side of the same export.

[Export Alembic to Marmoset Toolbag](/documentation/marmoset) covers groom import, scale, strand width and material setup in Toolbag.
