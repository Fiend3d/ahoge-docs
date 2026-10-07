# Duplicate

> **Ahoge menu → Duplicate**

## Ahoge

Duplicates the selected `ahogeShape` nodes and sets a **random seed** on each duplicate.

```mel
ahogeTools_duplicateAhoge
```

Because the seed drives every randomized attribute — [noise](/documentation/noise), [color](/documentation/color#color), [spray](/documentation/spray), [multistrand](/documentation/multistrand), [clump](/documentation/clump) — a duplicated Ahoge looks similar but never identical. That is what makes layered hair read as one system instead of a copied array.

## Ahoge and Connect

Duplicates the selected `ahogeShape` nodes, **connects the selected surfaces to the duplicates**, and sets random seeds.

```mel
ahogeTools_duplicateAhoge_connect
```

Use it when you want the same look on a new surface: select the surface plus the Ahoge shape, run the command, and the duplicate takes over the new surface.

## Typical uses

| Goal | How |
|---|---|
| Add volume in layers | Duplicate the Ahoge shape several times, then move each duplicate slightly with the [Curve Brush](/documentation/tools/curve-brush) |
| Different regions, same look | Select a new surface + the Ahoge shape → **Ahoge and Connect** |
| Variation for crowds | Duplicate, then randomize seeds and density per copy |
| Backup of a look | Duplicate before destructive edits — attributes can also be moved with [Copy / Paste Attributes](/documentation/misc#copy--paste-attributes) |

## After duplicating

Open the [Ahoge Outliner](/documentation/select#outliner) to check the duplicates: it lists every Ahoge node with its **Seed**, **Curves** count, **GroupID** and any **Issues**.
