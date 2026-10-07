# Carousel

**Ahoge menu → Tools → Carousel** · run-time command `AhogeCarouselTool` · context command `carouselContext`

Maya's annotation for the tool: *Move and rotate NURBS surfaces*. Carousel sets the orientation of a source surface for hair: which border is the **root** and where the **seam** runs.

Ahoge hair grows along the surface **V-coordinate** (see [Create Ahoge hair](/documentation/create)), so the root border you pick here is where every strand starts.

## Mode

| Mode | What it does |
|---|---|
| **Root** | Move the root of the surface to the border under the cursor |
| **Seam** | Move the surface's seam to the isoparm under the cursor |

**Snap to Isoparms** — keep the seam on isoparms the surface already has. Off, the seam can run anywhere.

## When you need it

- Hair grows from the wrong edge of the surface.
- Hair wraps around the head in the wrong direction.
- A surface imported from another package has an unpredictable isoparm layout.
- You want the seam hidden along a specific line — usually the back of the head or under a hair region.

## Workflow

1. Activate the tool and click the surface.
2. **Root**: click the edge where hair should start.
3. **Seam**: click the isoparm where the surface should wrap.
4. Check the result. If the hair now grows inward instead of outward, reverse the surface with **Modeling → Surfaces → Reverse Direction → Swap**.

## Settings from a script

```mel
AhogeCarouselTool;
carouselContext -s -mode 0 -snapToIsoparm 1 "AhogeCarouselTool";
```

| Flag | Values |
|---|---|
| `-mode` | `0` Root · `1` Seam |
| `-snapToIsoparm` | `0` / `1` |

## Related

- [Create Ahoge hair](/documentation/create) — the V-coordinate rule
- [Repair NURBS](/documentation/misc#repair-nurbs) — even out isoparm spacing after re-orienting
- [Root Pivot](/documentation/select#root-pivot) — move pivots to the roots
- [Surface Brush](/documentation/tools/surface-brush) — sculpt the surface once its root is correct
