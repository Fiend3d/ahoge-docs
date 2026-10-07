# ahogeShape attributes

The hair node. Every rollout and attribute below is listed **in the order `AEahogeShapeTemplate` puts it in the Attribute Editor**, sub-rollouts included. The first column is the label you see in the Attribute Editor, the second is the attribute name to use in scripts — with the short name Maya also accepts in brackets.

Ramps are added with `AEaddRampControl`, so in the Attribute Editor they appear under their attribute name. All ramps default to a straight 0 → 1 line.

## Seed

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| `seed` | `seed` | long | `0` | Starting value for every random choice in the node: placement, cut lengths, clump membership, colour jitter, multistrand counts. Same seed and same settings give the same hair. |

## Color

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| `colorRamp` | `colorRamp` | ramp | 0 → 1 | Colour of each strand, sampled along its length from root to tip. Ahoge writes the result into `outputColors`, so the viewport and renderers get per-point colour. |

**Mutant Color**

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Mutant Color | `mutantColor` | color | `0.9, 0.9, 0.9` | The colour mutant strands get. |
| Mutant Percent | `mutantPercent` | double | `0` | Share of strands that take Mutant Color instead of the colour ramp. At `1` every strand is mutant. |
| Mutant Fuzziness | `mutantFuzziness` | double | `0` | How cleanly the mutant colour is applied: `0` gives solid mutant colour, `1` blends it almost completely into the ramp. |

**Randomize Color**

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Randomize Color | `randomizeColor` | double | `0` | Random hue shift per strand. |
| Randomize Saturation | `randomizeSaturation` | double | `0` | Random saturation shift per strand. |
| Randomize Value | `randomizeValue` | double | `0.3` | Random brightness shift per strand. Non-zero by default, so strands already differ in brightness. |

**Absolute Length**

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Use Absolute Length | `useAbsoluteLength` | bool | `false` | Give strands a fixed length instead of a length that follows the source surface. |
| Absolute Length | `absoluteLength` | double | `10` | The length used when Use Absolute Length is on, in scene units. |

See [Color](/documentation/color).

## General

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Segments | `numSegments` (`nSeg`) | long | `16` | Number of points on each curve. More points give a smoother curve, finer thickness variation, and let noise waves actually show up. |
| Curves | `numCurves` (`nCurves`) | long | `10` | Number of curves per attached source surface. Attach more surfaces and the strand count multiplies. |

See [Segments and Density](/documentation/segments-and-density).

## Width

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Width | `width` | float | `0.01` | Hair thickness. Every point on the strand stores a width, which is what makes thickness changes along a strand possible. |
| Width Ramp | `widthRamp` | ramp | 0 → 1 | Scales thickness along the strand — thicker at the root and thinner at the tip is the usual setup. Needs enough Segments to show. |

See [Width](/documentation/width).

## Noise

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Random Placement | `randomPlacement` (`rndPlacement`) | bool | `false` | Roots are placed at equal distance on the surface by default. Turn this on and the placement becomes chaotic. |
| Random Placement Type | `randomPlacementType` (`rndPlacementType`) | enum | `0` White Noise Sampling | Which sampling the chaotic placement uses: **White Noise Sampling** or **Blue Noise Sampling**. |
| Noise | `noise` | double | `0` | Bends strands into waves — how much noise displacement is applied along the strand. Raise Segments so the wave shape is displayed correctly. |
| Frequency | `frequency` (`freq`) | double | `10` | Number of waves per unit of strand length. |
| Octaves | `octaves` (`octav`) | long | `1` | Additional small waves layered on top of the main ones. |
| Persistence | `persistence` (`pers`) | double | `0.5` | Weight balance between the frequency waves and the octave waves. |
| Noise Ramp | `noiseRamp` | ramp | 0 → 1 | Changes noise intensity along the length of the strand. |

**Randomize Frequency**

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Enable Randomize Frequency | `enableRandomizeFrequency` (`enRandFreq`) | bool | `false` | Gives each strand its own frequency, in the range Frequency + (−Min) … Frequency + Max. |
| Randomize Frequency Min | `randomizeFrequencyMin` (`randFreqMin`) | double | `-5` | How far below Frequency a strand may go. |
| Randomize Frequency Max | `randomizeFrequencyMax` (`randFreqMax`) | double | `5` | How far above Frequency a strand may go. |
| Randomize Frequency Distribution | `randomizeFrequencyDistribution` (`randFreqDistr`) | ramp | 0 → 1 | Biases the mix — how much of the hair ends up low frequency and how much high frequency. |

**Randomize Noise**

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Randomize Noise | `randomizeNoise` (`rndNoise`) | double | `0` | Varies the noise level between strands. |
| Randomize Noise Distribution | `randomizeNoiseDistribution` (`randeNoiseDistr`) | ramp | 0 → 1 | Biases the mix — how much hair gets strong distortion and how much stays straight. |

See [Noise](/documentation/noise).

## Cut

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Cut | `cut` | double | `0` | Randomly shortens strands by up to this fraction, so they do not all end at the same length. |
| Compress Noise Frequency | `compressNoiseFrequency` (`compressNoiseFreq`) | bool | `false` | When a strand is cut short, keep its wave count instead of squeezing the same waves into the shorter length. |
| Cut Distribution | `cutDistribution` (`cutDistr`) | ramp | 0 → 1 | Decides how much of the Cut value each strand gets. |

## Spray

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Fill | `fill` | double | `0` | Fills the surface with hair and moves the roots inward. |
| Shift | `shift` | double | `0` | Moves all roots evenly inward or outward. |
| Spray Along Normal | `sprayAlongNormal` | double | `0` | Moves roots inward and outward along the surface normals. |
| Spray | `spray` | double | `0` | Moves roots inward and outward and mixes them together. |
| Spray Ramp | `sprayRamp` | ramp | 0 → 1 | Adjusts the shear magnitude along the length of the strand. |
| Spray Distribution | `sprayDistribution` (`sprayDistr`) | ramp | 0 → 1 | Adjusts how much hair is moved inward and outward. |

See [Spray](/documentation/spray).

## Multistrand

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Multistrand | `multistrand` | long | `0` | Extra strands grown from each strand. `2` turns every strand into three. |
| Multistrand Percent | `multistrandPercent` | double | `1` | Share of strands that get the extra strands. |
| Multistrand Randomize | `multistrandRandomize` | double | `0` | Varies how many extra strands each strand actually gets. |
| Multistrand Randomize Tip | `multistrandRandomizeTip` | double | `0` | Spreads the tips of the extra strands so a group does not end in one point. |
| Multistrand Twist | `multistrandTwist` | double | `0` | Twists the extra strands around their parent strand. |
| Multistrand Twist Randomize | `multistrandTwistRandomize` | double | `0` | Varies that twist per strand. |
| Multistrand Spray | `multistrandSpray` | double | `0.1` | Offsets the extra strands from the parent root. |
| Multistrand Randomize Spray | `multistrandRandomizeSpray` | double | `0` | Varies that offset per strand. |
| Multistrand Spray Ramp | `multistrandSprayRamp` | ramp | 0 → 1 | Scales Multistrand Spray along the length of the strand. |

See [Multistrand](/documentation/multistrand).

## Clump

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Clump | `clump` | double | `0` | Pulls strands together into clumps. |
| Clump Fill | `clumpFill` | double | `0` | Share of strands that join clumps. |
| Clump Cut | `clumpCut` | double | `0` | Randomly shortens clumped strands, so clumps end at different lengths. |
| Clumps Min | `clumpsMin` | long | `3` | Smallest number of strands in a clump. |
| Clumps Max | `clumpsMax` | long | `5` | Largest number of strands in a clump. |
| Clump Fly Away | `clumpFlyAway` | double | `0` | Share of strands that leave their clump and grow on their own instead. |
| Clump Ramp | `clumpRamp` | ramp | 0 → 1 | Scales clumping along the length of the strand. |

**Clump Noise**

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Clump Noise | `clumpNoise` | double | `0` | Noise applied to the clump shape itself. |
| Clump Frequency | `clumpFrequency` (`clumpFreq`) | double | `10` | Waves per unit length of the clump noise. |
| Clump Octaves | `clumpOctaves` (`clumpOctav`) | long | `1` | Additional small waves layered on the clump noise. |
| Clump Persistence | `clumpPersistence` (`clumpPers`) | double | `0.5` | Weight balance between the clump noise waves and its octaves. |

**Randomize Clump Noise**

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Randomize Clump Noise | `clumpRandomizeNoise` (`clumpRndNoise`) | double | `0` | Varies the clump noise between clumps. |
| Randomize Clump Noise Distribution | `clumpRandomizeNoiseDistribution` (`clumpRandNoiseDistr`) | ramp | 0 → 1 | Biases how many clumps get strong noise and how many stay tidy. |

See [Clump](/documentation/clump).

## Arnold

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Mode | `aiMode` | enum | `0` ribbon | How Arnold renders the strands: **ribbon**, **thick**, or **oriented**. |
| Min Pixel Width | `aiMinPixelWidth` | float | `0` | Lower limit for the rendered width in pixels, so thin strands stay visible at distance. |

**Primvars**

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Export Color | `aiExportColor` | bool | `true` | Write per-strand colour into the exported hair. |
| Export Random Float | `aiExportRandomFloat` (`aiExportRndFloat`) | bool | `false` | Write a random float per strand, for shading variation downstream. |
| Export Index | `aiExportIndex` | bool | `false` | Write the strand index, so a renderer or shader can pick strands out. |

See [Arnold](/documentation/arnold) and [3Delight and RenderMan](/documentation/renderers).

## Viewport

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| Display Mode | `displayMode` | enum | `1` Geometry | **Wireframe** draws strands as curves, **Geometry** draws them as tubes. |
| Preview Percent | `previewPercent` | double | `100` | Show only this percentage of the strands in the viewport, to keep heavy scenes responsive. |
| Preview Sides | `previewSides` | long | `2` | Number of sides on the viewport tube. `2` is a flat ribbon. |
| Display Selection Frame | `displaySelectionFrame` (`displaySelFrame`) | bool | `true` | Draw the selection frame around Ahoge hair. |

See [Viewport](/documentation/viewport).

## Alembic

| Attribute Editor | Attribute | Type | Default | What it does |
|---|---|---|---|---|
| `groom_group_id` | `groom_group_id` | long | `1` | Group id written into the exported groom. Strands with the same id land in the same groom group. |

See [Alembic export](/documentation/alembic).

## After the Ahoge rollouts

The template then adds Maya's standard shape attributes (`AEsurfaceShapeTemplate`) and `addExtraControls`, so anything you add by hand with `addAttr` shows up at the bottom of the Attribute Editor.

## Attributes the Attribute Editor does not show

| Attribute | Short | Type | What it holds |
|---|---|---|---|
| `inputSurfaces` | `inSurfaces` | message array | The source surfaces the hair grows from |
| `outputPoints` | `oPoints` | data | Strand points, written by the plug-in |
| `outputWidths` | `oWidths` | data | Per-point widths, written by the plug-in |
| `outputColors` | `oColors` | data | Per-point colours, written by the plug-in |

These are the plumbing between nodes and renderers. Connect and disconnect in the Ahoge menu instead of editing them.

## Copying attributes between shapes

**Miscellaneous → Copy Ahoge Attributes**, then **Paste Ahoge Attributes** (options) picks which rollouts to copy — Seed, Color, General, Width, Noise, Cut, Spray, Multistrand, Clump, Arnold, Viewport, Alembic. The same list as above, one-to-one with the Attribute Editor rollouts.
