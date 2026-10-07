# Exporting Ahoge to Unreal Engine

Move Ahoge hair from Maya to Unreal as a Groom asset.

## 1. Prepare the hair

- Split the hairstyle into logical groups — head hair, ponytail, fringe — and give each Ahoge node its own `groom_group_id`, or plan to use **Auto groom_group_id**. Groups are what you set up and animate separately in Unreal.
- Finalize [density](/documentation/segments-and-density) and [multistrand](/documentation/multistrand) — the export is static.
- Finalize [width](/documentation/width): Unreal has no `aiMinPixelWidth` safety net, so strand width must already be correct in Ahoge.
- Transfer UVs if the groom material needs them: **Ahoge → Export → Transfer UV** (select a mesh and the Ahoge shapes).

## 2. Export

> **Ahoge → Export → Export Alembic**

| Option | Value |
|---|---|
| **Mode** | `Unreal` |
| **Path** | `MyHair.abc` |
| **Time Range** | `Current Frame` (static) or `Time Slider` (animated) |
| **Export Color (groom_color)** | on |
| **Export groom_group_id** | on |
| **Auto groom_group_id** | on if you do not manage ids manually |
| **Export groom_root_uv** | on if you transferred root UVs |

See [Alembic export](/documentation/alembic) for the full option list.

## 3. Import into Unreal

1. **Edit → Plugins** → enable **Alembic Importer** and **Alembic Hair Groom Importer**, then restart the editor.
2. Drag and drop `MyHair.abc` into the Unreal window. In the import dialog pick the **Alembic groom** import, not the plain Alembic one — it shows the hair groups found in the file.
3. Drag the groom assets from the Content Drawer into the level.
4. Double-click a groom asset and switch **LOD Mode** to **Manual**, or the hair disappears when the camera moves away. Fix size and thickness in the same asset.
5. Assign a **groom material** — `groom_color` carries the Ahoge colors. For a character, bind the groom to the Skeletal Mesh with a **Groom Binding Asset**.

## Video

The full walkthrough is on the Ahoge channel: [https://www.youtube.com/@ahoge-plugin](https://www.youtube.com/@ahoge-plugin).
