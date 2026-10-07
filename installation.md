# Installation

Ahoge ships as a Maya module for Windows. Everything is published on
[Boosty](https://boosty.to/ahoge) — subscribe there and download the build made for your Maya version.

## Requirements

| Requirement | Details |
|---|---|
| Operating system | Windows |
| Host | Autodesk Maya 2023, 2024, 2025, 2026 or 2027 — choose the build for your Maya version |
| Renderer | Arnold for Maya (MtoA) for the same Maya version. 3Delight and RenderMan plug-ins are published separately, see [Renderers](/documentation/renderers) |

::: warning
Linux and macOS are not supported at the moment.
:::

## Install

1. Download the archive for your Maya version from [Boosty](https://boosty.to/ahoge).
2. Unpack it to a permanent folder, for example `C:\ahoge\maya_2026`.
3. Run **`ahoge_installer.exe`** from the unpacked folder.
4. The installer detects the Maya versions on your machine — select the version to install for. Run it
   again for every Maya version you work with.
5. Restart Maya, open **Windows → Settings/Preferences → Plug-in Manager** and tick **Loaded** and **Auto load**
   for the Ahoge entry, so it loads on every start.
6. The **Ahoge** menu appears in the Maya menu bar.

The installer writes the module path into your `Maya.env` for you, so there is nothing else to
configure.

## Install without the installer

If you cannot run the installer, the archive also supports two manual installation methods.

### `install.mel`

1. Unpack the archive to a permanent folder.
2. Drag and drop **`install.mel`** onto Maya's viewport and confirm the dialog.
3. Restart Maya and tick **Loaded** for the Ahoge plug-in in **Windows → Settings/Preferences → Plug-in Manager**.

<figure class="ahoge-figure">
  <img loading="lazy" src="/images/ahoge_installation.gif" alt="Dragging install.mel onto Maya's viewport" />
  <figcaption>Drag and drop <code>install.mel</code> onto the viewport.</figcaption>
</figure>

`install.mel` edits the `Maya.env` of the running Maya version, for example
`C:\Users\<username>\Documents\maya\2026\Maya.env`. If an older Ahoge line is already there, answer
*Replace* so two versions do not conflict.

### `Maya.env` by hand

`ahoge.mod` is the module description file, so `MAYA_MODULE_PATH` must include the folder that
**contains** `ahoge.mod`:

```ini
MAYA_MODULE_PATH=%MAYA_MODULE_PATH%;C:/ahoge/maya_2026/ahoge_module
```

Restart Maya afterwards and tick **Loaded** for the Ahoge plug-in in **Windows → Settings/Preferences → Plug-in Manager**.

## Next step

Go to [Create Ahoge hair](/documentation/create) to grow your first strands.
