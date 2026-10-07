# Export Alembic to Marmoset Toolbag

Ahoge supports a **Marmoset** export preset for rendering hair in Marmoset Toolbag. Use **Toolbag 5 or later**: Alembic groom import was introduced in Toolbag 5. Importing a groom creates a **Groom** object and a material with **Reflection → Hair** already configured. See [Marmoset's Alembic documentation](https://docs.marmoset.co/docs/alembic/).

## 1. Export from Maya

1. Select the `ahogeShape` nodes you want to export.
2. Open **Ahoge → Export → Export Alembic**.
3. Set **Mode** to **Marmoset** and choose an `.abc` output path.
4. For a still hairstyle, choose **Time Range → Current Frame**.
5. Export the file.

The same export in MEL:

```mel
ahogeCmd -e "C:/work/character/hair.abc" -exportMode "marmoset" -timeRange "current_frame";
```

See [Alembic export](/documentation/alembic) for all export options.

## 2. Import the hair into Toolbag

In Toolbag, use **File → Import Model** (`Ctrl+I`) and select the `.abc` file, or drag it into the viewport. The import action and shortcut are listed in [Marmoset's keyboard shortcuts](https://docs.marmoset.co/docs/keyboard-shortcuts/).

Select the imported Groom object in the Scene hierarchy to access its hair settings. Import the character mesh separately if you want to render the hair on a character.

## 3. Match the scale

Select **Scene** in the hierarchy and check **Scene** and **Imported** units against your Maya scene. For a Maya scene authored in centimeters, use centimeters in Toolbag as well. **Use File Units** takes precedence over the Imported units setting when the file contains unit information. See [Scene Scale & Units](https://docs.marmoset.co/docs/scene-window/).

If the hair and character differ in size, check their import units before adjusting strand thickness.

## 4. Adjust the groom and material

Use **Strand Width**, **Hair Root Scale** and **Hair Tip Scale** in the Groom object's settings to adjust thickness and taper. Check the result at your intended camera distance. Marmoset demonstrates these controls in [Crafting Convincing Hair with Grooms](https://marmoset.co/posts/crafting-convincing-hair-with-grooms-in-marmoset-toolbag/).

Edit the generated hair material for color and reflections. For a procedural root-to-tip color transition, use **Albedo Gradient** with the Hair shading model. See [Marmoset's Hair shading reference](https://docs.marmoset.co/docs/hair/).
