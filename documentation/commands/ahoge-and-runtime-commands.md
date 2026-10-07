# ahoge, ahogeTools and run-time commands

These are MEL procedures and run-time commands, not plug-in commands. They are what the shelf buttons and hotkeys call.

## `ahoge`

Installs the Ahoge menu and opens the interface:

```mel
ahoge;
```

It registers the post-Open / post-New / post-Save scene filters that keep Ahoge nodes behaving correctly, then calls `ahogeTools`.

## `ahogeTools`

Builds the **Ahoge** menu in the Maya main menu bar. Call it again if the menu disappears after a script error:

```mel
ahogeTools;
```

## Run-time commands

Ahoge registers its tools as Maya run-time commands, in the command category **Menu items.Ahoge**. They are registered with `-default -plugin "ahoge"`, so they exist as soon as the plug-in loads.

| Run-time command | What it does | Annotation shown in Maya |
|---|---|---|
| `AhogeCurveBrushTool` | Activates the Curve Brush | Sculpt and paint NURBS curves |
| `AhogeCurveBrushToolOptions` | Opens Curve Brush Tool Settings | Sculpt and paint NURBS curves options |
| `AhogeSurfaceBrushTool` | Activates the Surface Brush | Sculpt NURBS surfaces |
| `AhogeSurfaceBrushToolOptions` | Opens Surface Brush Tool Settings | Sculpt NURBS surfaces options |
| `AhogeCarouselTool` | Activates the Carousel | Move and rotate NURBS surfaces |
| `AhogeCarouselToolOptions` | Opens Carousel Tool Settings | Move and rotate NURBS surfaces options |

Each tool command is a pair: the plain name activates the tool, the `-Options` variant activates it **and** opens its Tool Settings window — which is what double-clicking the shelf button does.

```mel
AhogeCurveBrushTool;          // activate
AhogeSurfaceBrushToolOptions; // activate + Tool Settings
```

## Shelf buttons

The Ahoge shelf holds one button per tool plus the menu actions. The tool buttons run the run-time commands above; their icons are the `ahoge_*.png` files in the plug-in's `icons` folder. To add a tool to any shelf:

**Windows → General Editors → Shelf Editor** → *Commands* tab → category **Menu items.Ahoge** → drag onto a shelf.

## Hotkeys

**Windows → Settings/H preferences → Hotkey Editor** → search `Ahoge`. Bind `AhogeCurveBrushTool`, `AhogeSurfaceBrushTool` or `AhogeCarouselTool` to whatever you prefer.

## Opening a tool's settings from a script

Double-clicking a shelf button, or pressing the tool button twice, runs the `-Options` command. From a script you can also query and set the settings directly through the context commands — see [Context commands](/documentation/commands/context-commands).
