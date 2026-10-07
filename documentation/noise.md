# Noise

## Random Placement

By default, hair is created on the surface with equal distance. If you enable **random placement**, the hair placement becomes chaotic.

| Placement off | Placement on |
|---|---|
| ![Random placement off](/images/documentation/random_placement_off.gif) | ![Random placement on](/images/documentation/random_placement_on.gif) |

## Noise

Noise is needed to curve the hair and give it a wavy look.

To correctly display the frequency and amplitude of the wave, you need to increase the number of [hair segments](/documentation/segments-and-density).

| 5 segments | 15 segments | 60 segments |
|---|---|---|
| ![Noise with 5 segments](/images/documentation/noise_5seg.gif) | ![Noise with 15 segments](/images/documentation/noise_15seg.gif) | ![Noise with 60 segments](/images/documentation/noise_60seg.gif) |

## Frequency

**Frequency** — number of waves per unit length.

<figure class="ahoge-figure">
  <img src="/images/documentation/noise.webp" alt="Noise frequency" />
  <figcaption>Frequency controls how many waves appear along the strand.</figcaption>
</figure>

## Octaves

Additional small waves superimposed on top of the main ones.

<figure class="ahoge-figure">
  <img src="/images/documentation/octaves.webp" alt="Noise octaves" />
  <figcaption>Octaves add finer waves on top of the main wave.</figcaption>
</figure>

## Persistence

Change of weight between frequency waves and octave waves.

<figure class="ahoge-figure">
  <img src="/images/documentation/persistance.webp" alt="Noise persistence" />
  <figcaption>Persistence balances the main wave against the octave waves.</figcaption>
</figure>

## Noise Ramp

The **noise ramp** changes the noise intensity along the length of the hair — for example, keep the roots straight and make the tips wavy.

<figure class="ahoge-figure">
  <img src="/images/documentation/noise_ramp.webp" alt="Noise ramp" />
  <figcaption>Noise ramp along the strand length.</figcaption>
</figure>

## Randomize Frequency

Creates a range around the main **Frequency** parameter: `Frequency + (-Min)` … `Frequency + Max`.

<figure class="ahoge-figure">
  <img src="/images/documentation/random_freq.webp" alt="Randomized frequency" />
  <figcaption>Randomized frequency keeps strands from looking identical.</figcaption>
</figure>

## Randomize Frequency Distribution

Control the amount of low-frequency hair versus high-frequency hair with a ramp.

<figure class="ahoge-figure">
  <img src="/images/documentation/random_freq_distrib.webp" alt="Randomize frequency distribution" />
  <figcaption>Frequency distribution ramp.</figcaption>
</figure>

## Randomize Noise

Vary the noise level between different hairs.

## Randomize Noise Distribution

Change the amount of hair with strong distortion versus low distortion.

<figure class="ahoge-figure">
  <img src="/images/documentation/random_noise_distrib.webp" alt="Randomize noise distribution" />
  <figcaption>Noise distribution ramp.</figcaption>
</figure>

## Seed

Every randomized attribute is driven by the **Seed** attribute on the Ahoge shape. Change the seed to get a different variation while keeping all other settings, or keep the seed fixed to make a look reproducible. See [ahogeShape attributes](/documentation/nodes/ahoge-shape).
