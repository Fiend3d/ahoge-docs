# Multistrand

**Multistrand** generates several strands from each hair root, so one placement point becomes a small bundle of hair.

- `multistrand` is a count: **2** turns every strand into three, **5** into six. It is the fastest way to add volume without multiplying the density of the Ahoge shape.
- `multistrandPercent` decides how many of the strands get the extras, `multistrandRandomize` varies the count per strand.
- The extra strands start at the same root and are pushed apart by `multistrandSpray`, wrapped around the parent strand by `multistrandTwist`, and spread at the ends by `multistrandRandomizeTip` — which is what keeps a bundle from reading as one copy.
- Multistrand multiplies the curve count, so it directly affects viewport performance and [Arnold](/documentation/arnold) render cost. Raise it in steps.

## Balancing cost

| Goal | Suggested approach |
|---|---|
| Close-up, hero character | Higher multistrand, lower base density |
| Mid shot | Medium multistrand, medium density |
| Crowd / long shot | Lower multistrand, rely on density and `aiMinPixelWidth` |

Multistrand is one of the attribute groups transferred by **Paste Attributes** — see [Misc tools](/documentation/misc). All nine Multistrand attributes, with defaults, are listed on the [ahogeShape attributes](/documentation/nodes/ahoge-shape#multistrand) page.
