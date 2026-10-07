# Quick Start

Create your first Ahoge hair shape from one NURBS surface, then adjust its density and taper. Start in an empty Maya scene so you can see how the surface controls the strands.

## 1. Check the installation

The **Ahoge** menu should appear in Maya's menu bar. If it is missing, enable **Loaded** for Ahoge in **Windows → Settings/Preferences → Plug-in Manager**. See [Installation](/installation) if the plug-in is not listed.

## 2. Create hair from a surface

Create a **NURBS plane** and select it. Choose **Ahoge → Ahoge** to generate a hair shape.

Select the new `ahogeShape` node and open the Attribute Editor. For this small test, set **Number of Curves** (`numCurves`) to `200` and **Segments** (`numSegments`) to `8`. These are starting values for the exercise, not the plug-in defaults.

You should now see strands following the plane. Ahoge grows hair along the source surface's **V-coordinate**. See [Create Ahoge hair](/documentation/create) for an illustrated example.

## 3. Shape the source surface

Select the plane's control vertices and move them to bend the surface. The generated strands follow the surface as you edit it.

Check which edge the strands start from before adding detail. Use [Carousel](/documentation/tools/carousel) to change the root border, or **Surfaces → Reverse Direction → Swap** in Maya's Modeling menu set to swap the U and V directions.

## 4. Adjust the strands

Return to the `ahogeShape` Attribute Editor:

- Increase **Number of Curves** to add strands.
- Adjust **Width** until the strands are visible at your scene's scale, then use **Width Ramp** to taper the tips.
- Increase **Segments** if the strand bends look angular.

Change one setting at a time and compare the result. See [Segments and Density](/documentation/segments-and-density) and [Width](/documentation/width) for more detail.

You now have a procedural hair shape whose source surface and strand settings you can edit independently.

## Continue with a hairstyle

Watch [Creating hair with Ahoge in Autodesk Maya](https://www.youtube.com/watch?v=n8byp1-GBnw) to see the workflow, then [Double Bun hairstyle creation in Maya](https://www.youtube.com/watch?v=vZvSjksTXOM) for a hairstyle example.

When your groom is ready, follow [Arnold rendering](/documentation/arnold) or export it to [Unreal Engine](/documentation/unreal) or [Marmoset Toolbag](/documentation/marmoset).
