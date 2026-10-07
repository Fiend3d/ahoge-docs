# Export Alembic to Unreal Engine

Export Ahoge hair as an Alembic groom, then import it as a Groom asset in Unreal Engine. Use Ahoge's **Unreal** export preset.

## 1. Prepare the hair

- Finalize [density](/documentation/segments-and-density), [multistrand](/documentation/multistrand) and [width](/documentation/width) before export.
- Split the hairstyle into logical groups, such as head hair, fringe and ponytail. Give each Ahoge shape its own `groom_group_id` in the **Alembic** rollout, or use **Auto groom_group_id** during export. Check the IDs in the [Ahoge Outliner](/documentation/select#outliner).
- If you need root UVs, select the character mesh and Ahoge shapes, then choose **Ahoge → Export → Transfer UV**.

## 2. Export from Maya

Select the Ahoge shapes and open **Ahoge → Export → Export Alembic**.

| Option | Value |
|---|---|
| **Mode** | `Unreal` |
| **Path** | Your `.abc` output file |
| **Time Range** | `Current Frame` for a static groom |
| **Export Color (groom_color)** | On if the Unreal material needs exported color |
| **Export groom_group_id** | On to preserve the groups |
| **Auto groom_group_id** | On if you are not assigning IDs manually |
| **Export groom_root_uv** | On if you transferred root UVs |

For an animated Alembic export, use **Time Slider** or **Start/End**. Animated groom playback in Unreal uses a Groom Cache workflow; it is separate from importing a static groom or binding it to a character. See [Epic's Groom Cache documentation](https://dev.epicgames.com/documentation/en-us/unreal-engine/using-groom-caches-with-hair-in-unreal-engine).

See [Alembic export](/documentation/alembic) for the complete option list.

## 3. Import into Unreal

1. Open **Edit → Plugins**, enable **Groom** and **Alembic Groom Importer**, then restart the editor.
2. Import the `.abc` file through the Content Browser, or drag it into the Content Browser.
3. In **Groom Import Options**, check the file's validity, available attributes and hair groups. Adjust **Conversion → Rotation** or **Scale** if the axes or units differ from your Maya scene.
4. Import the Groom asset and place it in the level to inspect the result.

These steps follow [Epic's groom import guide](https://dev.epicgames.com/documentation/en-us/unreal-engine/importing-grooms-into-unreal-engine).

## 4. Set up the material and appearance

Assign a material using the **Hair** shading model, with **Used with Hair Strands** enabled. Use the **Hair Attributes** expression to access imported hair data when building the shader. Exporting color makes that data available; the material must use it. See [Epic's groom material reference](https://dev.epicgames.com/documentation/en-us/unreal-engine/groom-materials-in-unreal-engine).

Open the Groom Asset Editor to inspect strand width and LOD settings. If hair disappears at a distance, check the LOD visibility and geometry settings at that distance. Review the result with the intended camera rather than forcing a manual LOD for every groom. See [Groom Asset Editor](https://dev.epicgames.com/documentation/en-us/unreal-engine/groom-asset-editor-user-guide-in-unreal-engine).

## 5. Bind to a character

For hair that must deform with a character, right-click the Groom asset in the Content Browser and choose **Create Binding**. Set the binding type to **Skeletal Mesh** and choose the target mesh. Assign the Groom and binding assets to the character's Groom component. See [Epic's binding guide](https://dev.epicgames.com/documentation/en-us/unreal-engine/setting-up-bindings-for-grooms-in-unreal-engine).

## Videos

For Ahoge workflow videos, visit [Video tutorials](/tutorials/videos) or the [Ahoge YouTube channel](https://www.youtube.com/@ahoge-plugin).
