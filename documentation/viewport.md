# Viewport

Viewport settings control how much hair Maya displays while you work. They live on the `ahogeShape` node and are stored in the **Viewport** attribute group.

| Attribute | UI name | Description |
|---|---|---|
| `displayMode` | Display Mode | How the hair is drawn in the viewport |
| `previewPercent` | Preview Percent | Percentage of the generated strands actually displayed |
| `previewSides` | Preview Sides | Number of sides used for the viewport preview tubes |
| `displaySelectionFrame` | Display Selection Frame | Show the selection frame of the Ahoge node |

## Preview Percent

The most useful performance control: display a fraction of the strands while keeping the full density for rendering. A 100 000-curve hair can stay interactive at a low preview percent.

## Display Mode

Switch between lightweight representations (curves / thin preview) and a fuller preview when you need to judge the silhouette. The exact mode list is in the Attribute Editor on the `ahogeShape` node.

## Performance checklist

- Lower **Preview Percent** first — it is the cheapest win.
- Lower **Preview Sides** to 3 for very dense hair.
- Reduce [segments](/documentation/segments-and-density) while blocking out the shape; raise it again for the final look.
- Reduce [multistrand](/documentation/multistrand) during layout and restore it before rendering.
- Hide Ahoge nodes you are not editing — the [Ahoge Outliner](/documentation/select#outliner) makes this easy.
- If the viewport still crawls, convert finished regions to curves or mesh with [Convert](/documentation/convert) and hide the procedural nodes.

::: tip
Viewport settings are **not** render settings. They are copied and pasted as their own group (**Paste Ahoge Attributes → Viewport**) and never change the [Arnold](/documentation/arnold) output.
:::

The full Viewport rollout, with attribute names, defaults and what each one does, is on the [ahogeShape attributes](/documentation/nodes/ahoge-shape#viewport) page.
