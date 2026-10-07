# Tools

Ahoge's three interactive tools are ordinary **Maya context tools**, registered as run-time commands. They behave exactly like Maya's own modeling tools: their options live in Maya's Tool Settings window, they can sit on any shelf, and they can be bound to hotkeys.

| Tool | Run-time command | Context command | What it edits |
|---|---|---|---|
| [Curve Brush](/documentation/tools/curve-brush) | `AhogeCurveBrushTool` | `curveBrushContext` | The NURBS curves the hair is built from |
| [Surface Brush](/documentation/tools/surface-brush) | `AhogeSurfaceBrushTool` | `surfaceBrushContext` | The source surfaces the hair grows from |
| [Carousel](/documentation/tools/carousel) | `AhogeCarouselTool` | `carouselContext` | The root border and the seam of a source surface |

That means:

- **Tool Settings** (Windows → General Editors → Tool Settings) shows the tool's options, grouped in collapsible frames.
- **Double-clicking** the shelf button opens Tool Settings for that tool.
- Options are held per tool, so they stay set while you switch between tools and scenes; the ramp settings are bound to optionVars and outlive the tool itself.
- Every option maps to a flag on the tool's [context command](/documentation/commands/context-commands), so you can set them from a script.

## Activating a tool

In the **Ahoge** menu each tool is one item with an option box next to it:

| Menu item | Single click (and a shelf button dragged from it) | Double click (and the option box) |
|---|---|---|
| **Curve Brush** | `AhogeCurveBrushTool` | `AhogeCurveBrushToolOptions` |
| **Surface Brush** | `AhogeSurfaceBrushTool` | `AhogeSurfaceBrushToolOptions` |
| **Tools → Carousel** | `AhogeCarouselTool` | `AhogeCarouselToolOptions` |

The same commands work from the Script Editor:

```mel
AhogeCurveBrushTool;          // activate
AhogeSurfaceBrushToolOptions; // activate and open Tool Settings
```

## Tool Settings frames

The three tools share the same layout language, so once you know one you know the others:

| Frame | Curve Brush | Surface Brush | Carousel |
|---|---|---|---|
| **Brush** | Radius (px), Strength, Relax Strength, Falloff | Radius (px), Strength, Relax Strength, Falloff | — |
| **Mode** | Mode grid + rig and paint options | Mode grid + Rings Mode + Rig Mode | Mode (Root / Seam) |
| **Snap** | Snap to Geometry, Padding, Snap Roots | Snap to Geometry, Padding, Snap Roots | Snap to Isoparms |
| **Paint** | Smooth Curve, Root Pivot, Rebuild Curve, Curve Height, Project Method, Curve Shape | — | — |
| **Clone** | Clone Method | — | — |
| **Display** | Show CVs | Show CVs | — |
| **Help** | Built-in notes | Built-in notes | Built-in notes |

::: tip
Every control in Tool Settings has a tooltip. Hover it — the wording there is the wording Ahoge uses, and it is the fastest way to learn what an option does.
:::
