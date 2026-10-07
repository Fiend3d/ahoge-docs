# Using XGen guides for Nurbopus

XGen is good at placing and shaping **guides**. Ahoge's **Nurbopus** turns guide curves into hair. This workflow keeps the XGen placement work and gives you Ahoge's look development and export.

## 1. Create guides in XGen

1. Create an XGen description on the head mesh.
2. Model the guides you need — length, flow, clumping.
3. Keep guides as editable curves; you will export them, not render them.

## 2. Get the guides into Maya as NURBS curves

Convert or export the XGen guides to regular NURBS curves in the scene (XGen guides can be converted to curves; alternatively export the guide geometry and re-import it as curves).

Requirements for the next step:

- curves must be **NURBS curves** in the scene,
- select them together with an optional mesh that defines the guide cross-section,
- avoid duplicate or zero-length curves — run **Ahoge → Tools → Repair NURBS** on them if they came from an export.

## 3. Create Nurbopus

> **Ahoge → Extra → Nurbopus**

Select the curves (and optionally a mesh), then run it.

| Option | Recommendation |
|---|---|
| **Method** | `Untwist` for flowing guides, `Up Vector` for straight/combed hair |
| **Shape** | `circle` for normal strands, `line` for flat strands, brows and lashes |
| **U Segments** | 4 default; raise for rounder tubes |
| **V Segments** | 8 default; raise for more rings of hair along the guide |

Nurbopus outputs NURBS surfaces built on your guides. See [Nurbopus](/documentation/nurbopus).

## 4. Grow hair from the Nurbopus surfaces

> **Ahoge → Ahoge**

Select the Nurbopus output surfaces and create the Ahoge shape. Hair grows along the surface **V-coordinate**, i.e. along the guide.

Tune [noise](/documentation/noise), [width](/documentation/width), [color](/documentation/color), [multistrand](/documentation/multistrand) and [clump](/documentation/clump) as usual.

## 5. Manage the nodes

> **Ahoge → Miscellaneous → Ahoge Outliner**

The outliner shows `nurbopusNode` → surfaces → `ahogeShape` with curve counts and issues. Use:

- **Extra → Nurbopus → Connect** to add more curves to an existing Nurbopus node,
- **Extra → Nurbopus → Detach** to split one shared node into independent ones when regions need different settings.

## 6. Export

> **Ahoge → Export → Export Alembic**

Set **groom_group_id** (or **Auto groom_group_id**) so the guide groups survive the export. See [Alembic export](/documentation/alembic).

## Video

Watch the XGen/Nurbopus walkthrough on [https://www.youtube.com/@ahoge-plugin](https://www.youtube.com/@ahoge-plugin).
