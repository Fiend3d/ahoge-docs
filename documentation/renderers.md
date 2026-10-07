# Renderers

Ahoge hair is rendered as **native curve hair**, not as converted geometry. Arnold is the primary
path and ships inside the module; 3Delight and RenderMan are supported through separate plugins
published on [Boosty](https://boosty.to/ahoge).

| Renderer | Delivered as | Maya versions | Where to get it |
|---|---|---|---|
| **Arnold (MtoA)** | part of the Ahoge module (`mtoa/` extensions) | every supported Maya version | [Arnold](/documentation/arnold) |
| **3Delight for Maya** | `ahoge3dl.mll` plug-in | 2024, 2025, 2026 | [Ahoge for 3Delight 0.2](https://boosty.to/ahoge/posts/18868a82-ebeb-4ec7-b204-b5514b937a8c) |
| **RenderMan for Maya** | `ahogeRenderman_install.py` installer | 2024 – 2026 (RenderMan for Maya 27.3) | [Ahoge for RenderMan](https://boosty.to/ahoge/posts/aaef5c04-2358-4e0c-8ffe-6ddffe547f63) |

## Arnold

The Ahoge module registers MtoA extensions at startup (`MTOA_EXTENSIONS_PATH`), so `ahogeShape`
appears in Arnold as hair curves with proper width handling — `aiMode` and `aiMinPixelWidth` live on
the shape. See [Arnold](/documentation/arnold) for the attributes, shaders and troubleshooting.

## 3Delight for Maya

Renders Ahoge grooms in 3Delight for Maya. Install by copying the plug-in for your Maya version into
the Maya plug-ins folder, for example:

```
maya_2025\ahoge3dl.mll  ->  %USERPROFILE%\Documents\maya\2025\plug-ins\
```

Then open **Windows → Settings → Plug-in Manager** and tick **Loaded** and **Auto load** for `ahoge3dl`.

## RenderMan for Maya

A plug-in for RenderMan for Maya 27.3 (Maya 2024 – 2026). Install by dragging the installer onto the
viewport:

> drag and drop `ahogeRenderman_install.py` onto Maya's viewport

## Export is renderer independent

Delivery does not depend on which renderer you use: **Ahoge → Export → Export Alembic** writes the
groom for other DCCs and game engines. See [Alembic export](/documentation/alembic) and
[Export to Unreal Engine](/documentation/unreal). The **Marmoset** preset exports hair for
[Marmoset Toolbag 5 or later](/documentation/marmoset), where the Alembic file is imported as a groom.

::: tip
The 3Delight and RenderMan integrations are newer than the Arnold path and are published as
feedback-driven releases on Boosty — check the post for the current version before a production run.
:::
