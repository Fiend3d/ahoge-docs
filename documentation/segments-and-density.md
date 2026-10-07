# Segments and Density

## Segments

The **segments** parameter is responsible for the number of points on the curve.

- The more points, the smoother the curve will be.
- It is an important parameter for the correct display of noise deformations.
- Each point on the curve stores information about thickness — the more points, the more thickness variations you can specify.

<figure class="ahoge-figure">
  <img src="/images/documentation/segments_density.gif" alt="Segments and density comparison" />
  <figcaption>Increasing segments makes curves smoother and lets thickness ramps show more detail.</figcaption>
</figure>

::: warning
Low segment counts hide noise detail. If your [Noise](/documentation/noise) waves look clipped or jagged, raise segments before touching frequency.
:::

## Curves (density)

**Curves** controls the number of hair curves generated in one NURBS surface.

<figure class="ahoge-figure">
  <img src="/images/documentation/segments_density_2.gif" alt="Density comparison" />
  <figcaption>Density controls how many strands grow per surface.</figcaption>
</figure>

If several surfaces are attached to the Ahoge node, the number of hairs in the scene increases proportionally.

## Practical values

| Use case | Segments | Notes |
|---|---|---|
| Brows, eyelashes | low–medium | short strands, few points needed |
| Stylized hair, close-ups | medium–high | thickness ramps need points to show variation |
| Noise-heavy / wavy hair | high | frequency needs enough points per wave |
| Long shots, crowds | medium | balance viewport and render cost |

Density is limited by your hardware and by the render cost of the [Arnold](/documentation/arnold) hair curves — raise it in steps and check the viewport [display mode](/documentation/viewport) first.

The full General rollout, with attribute names, defaults and what each one does, is on the [ahogeShape attributes](/documentation/nodes/ahoge-shape#general) page.
