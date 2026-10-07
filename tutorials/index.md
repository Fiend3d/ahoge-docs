# Tutorials

Short written guides for the most common Ahoge workflows, plus the video tutorials on the official channel: [https://www.youtube.com/@ahoge-plugin](https://www.youtube.com/@ahoge-plugin).

## Tutorials

- [Quick Start](/tutorials/quick-start)
- [Video tutorials](/tutorials/videos)
- [Using XGen to place and shape guides for Nurbopus](/tutorials/xgen-guides)
- [Exporting Ahoge from Maya to Unreal Engine](/tutorials/exporting-to-unreal)
- [Set Up For Dynamic nHair](/tutorials/dynamic-nhair)

## F.A.Q.

**Where do I download Ahoge?**
From [Boosty](https://boosty.to/ahoge), which is also where news and updates are posted. Take the build for your Maya version and run `ahoge_installer.exe`. See [Installation](/installation).

**Which Maya versions are supported?**
Builds are published for Maya 2023, 2024, 2025, 2026 and 2027. Use the archive that matches your Maya version, and an Arnold/MtoA build for the same version. See [Installation](/installation).

**My hair grows in the wrong direction.**
Hair grows along the surface **V-coordinate**. Swap the surface direction: **Modeling → Surfaces → Reverse Direction → Swap**. See [Create Ahoge hair](/documentation/create).

**My noise looks clipped or jagged.**
Increase [segments](/documentation/segments-and-density) first — waves need enough points per wave. See [Noise](/documentation/noise).

**The viewport is slow.**
Lower **Preview Percent** and **Preview Sides**, reduce [multistrand](/documentation/multistrand) while working. See [Viewport](/documentation/viewport).

**My head is a mesh, not a NURBS surface.**
Use **Tools → Mesh to Surface** (and **Fix Topology** first if the mesh is messy). See [Convert](/documentation/convert#mesh-to-surface) and the video [Geometry to Hair with Ahoge](https://www.youtube.com/watch?v=SGBAhTa8tQ0).

**My old scene looks different in a newer Ahoge.**
Use **Debug → Migrate Old Scene** to resave it with complete ramp data, or open it with the legacy ramp defaults option. See [Misc tools](/documentation/misc#migrate-old-scene).

**How do I reuse a look on another character?**
**Miscellaneous → Copy Ahoge Attributes**, then **Paste Ahoge Attributes (options)** and pick the groups you want. See [ahogeShape attributes](/documentation/nodes/ahoge-shape).

**Where do I ask questions and see what others made?**
[Instagram @ahoge_hair](https://www.instagram.com/ahoge_hair), [ArtStation](https://www.artstation.com/ahoge_hair) and [Boosty](https://boosty.to/ahoge). The official wiki is [https://ahoge.wiki.gd/](https://ahoge.wiki.gd/).
