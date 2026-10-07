# Arnold

Ahoge hair renders as Arnold hair. The plugin registers MtoA extensions (the module's `MTOA_EXTENSIONS_PATH`), so Ahoge shapes appear in Arnold as hair curves with proper width handling. Arnold is the renderer built into the module — for the separate 3Delight and RenderMan plug-ins see [Renderers](/documentation/renderers).

## Arnold attributes

| Attribute | UI name | Description |
|---|---|---|
| `aiMode` | Arnold Mode | How the Ahoge shape is exported to Arnold |
| `aiMinPixelWidth` | Minimum Pixel Width | Minimum rendered width in pixels, so thin or distant strands do not disappear or alias |

Both attributes are copied with **Paste Ahoge Attributes → Arnold** (off by default).

## Minimum pixel width

`aiMinPixelWidth` is the attribute to reach for when:

- hairs in long shots become invisible or flicker,
- dense hair produces render noise,
- strands alias at grazing angles.

Raise it until distant strands stay readable, then stop — every increase costs samples.

## Render checklist

1. Confirm the look in the viewport with a high [Preview Percent](/documentation/viewport), then judge the final silhouette in an Arnold preview.
2. Check [width](/documentation/width) against `aiMinPixelWidth` — the render shows the larger of the two.
3. Increase [segments](/documentation/segments-and-density) before increasing density; smooth curves alias less than dense curves.
4. Use [multistrand](/documentation/multistrand) for volume instead of multiplying curve counts where possible.
5. For hair shaders (transmission, cutout opacity, specular), assign the shader on the Ahoge shape's Arnold attributes as with any Arnold object.

## Export dependency

The Arnold/MtoA installation must match the Maya version you use. If Ahoge loads but Arnold does not show the hair, the MtoA version is the first thing to check — see [Requirements](/installation) and [Renderers](/documentation/renderers).
