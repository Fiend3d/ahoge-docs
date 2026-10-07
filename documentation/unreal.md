# Export Alembic to Unreal Engine

Ahoge exports hair as an Alembic groom that Unreal Engine reads as a Groom asset. Use the **Unreal** preset in the export dialog.

## 1. Group the hair first

Split the hairstyle into logical groups before exporting — head hair, ponytail, fringe each as their own group. It makes the hair easier to set up and to assign dynamics to in Unreal.

Set the number on the Ahoge node, in the **Alembic** rollout at the bottom of the Attribute Editor (`groom_group_id`), or let Ahoge assign ids with **Auto groom_group_id**. The number shows up in the **GroupID** column of the [Ahoge Outliner](/documentation/select#outliner).

## 2. Export from Maya

> **Ahoge menu → Export → Export Alembic**

| Option | Value |
|---|---|
| **Mode** | `Unreal` |
| **Path** | your `.abc` file |
| **Time Range** | `Current Frame` for a static hair, `Time Slider` / `Start/End` for animated hair |
| **Export Color (groom_color)** | on, if you want the Ahoge colors in Unreal |
| **Export groom_group_id** | on, so the groups survive the export |
| **Export groom_root_uv** | on, if you need root UVs |

See [Alembic export](/documentation/alembic) for the full option list.

## 3. Import in Unreal

1. **Enable the groom plugins**: **Edit → Plugins**, enable the Alembic hair import plugins — **Alembic Importer** and **Alembic Hair Groom Importer** — and restart the editor when the plugin manager asks.
2. **Drag and drop the `.abc` file into the Unreal window**, or use **Content Browser → Import**. In the import dialog choose the **Alembic groom** import rather than the plain Alembic one; it lists the hair groups it found in the file.
3. The groom assets appear in the Content Drawer. Drag them into the level.
4. Double-click a groom asset to open it. Switch **LOD Mode** from **Default** to **Manual**, otherwise the hair starts disappearing as the camera moves away. Size and thickness are adjusted in the same place.
5. Assign a **groom material** for color and shading. `groom_color` from the export drives the strand color when **Export Color** was enabled.
6. To make the hair follow a character, bind the groom to the Skeletal Mesh with a **Groom Binding Asset**.

## Step-by-step video

The Ahoge YouTube channel has the export walkthrough: [https://www.youtube.com/@ahoge-plugin](https://www.youtube.com/@ahoge-plugin). See also the [Exporting to Unreal Engine tutorial](/tutorials/exporting-to-unreal).
