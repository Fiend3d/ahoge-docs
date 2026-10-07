# Connect / Disconnect

Ahoge hair is generated from NURBS surfaces connected to an `ahogeShape` node. Connecting and disconnecting surfaces is how you reorganize hair without rebuilding it.

## Connect

> **Ahoge menu → Connect**

Select NURBS surfaces **and** `ahogeShape` nodes, then run **Connect**. The selected surfaces are attached to the selected Ahoge shapes, and their strands are generated on top of the existing ones.

This is the fastest way to build hair from several patches — crown, fringe, sideburns — while keeping one Ahoge node and therefore one set of attributes.

## Disconnect

> **Ahoge menu → Disconnect**

Select NURBS surfaces and `ahogeShape` nodes, then run **Disconnect**. The selected surfaces are detached from the selected Ahoge shapes and their strands disappear.

## Disconnect Connected Surfaces

> **Ahoge menu → Miscellaneous → Disconnect Connected Surfaces**

Select an `ahogeShape` node only. Ahoge finds every NURBS surface currently connected to it and disconnects them.

## Select Connected Surfaces

> **Ahoge menu → Miscellaneous → Select Connected Surfaces**

Select an `ahogeShape` node and Ahoge selects the NURBS surfaces connected to it. Useful before disconnecting, moving or rigging the source surfaces.

## Connect and Duplicate in one step

> **Ahoge menu → Duplicate → Ahoge and Connect**

Duplicates the selected `ahogeShape` nodes, connects the selected surfaces to the duplicates, and gives each duplicate a random seed. See [Duplicate](/documentation/duplicate).

## Nurbopus and Swirl

The Extra submenu has its own Connect / Detach commands:

| Command | What it does |
|---|---|
| Extra → Nurbopus → Connect | Select surfaces that have Nurbopus, then curves: the curves are connected to that Nurbopus node |
| Extra → Nurbopus → Detach | Disconnects the selected surfaces from their Nurbopus node, duplicates the node and connects the duplicate to the curves of those surfaces |
| Extra → Swirl → Connect | Select surfaces that have Swirl, then surfaces: the surfaces are connected to the Swirl node |
| Extra → Swirl → Detach | Disconnects the selected surfaces from their Swirl node, duplicates the node and connects the duplicate to those surfaces |

**Detach** is the tool you use when one shared node must become several independent ones — for example when the left and right side of the hair need different settings. See [Nurbopus](/documentation/nurbopus) and [Swirl](/documentation/swirl).

::: warning
Detach works with a **single** Nurbopus or Swirl node at a time. Select one node, or you will get an error.
:::
