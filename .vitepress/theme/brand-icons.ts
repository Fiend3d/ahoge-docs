// Brand icons as inline SVG strings (same files the nav bar uses for socialLinks), so the
// link cards on /links and the chips on the front page render the exact same glyphs as the
// header instead of low-resolution favicons. `?raw` keeps them inline: no extra requests, no
// base-path juggling under GitHub Pages, and `fill="currentColor"` picks up the theme colour.
import ahoge from '../../public/icons/ahoge.svg?raw'
import artstation from '../../public/icons/artstation.svg?raw'
import boosty from '../../public/icons/boosty.svg?raw'
import instagram from '../../public/icons/instagram.svg?raw'
import youtube from '../../public/icons/youtube.svg?raw'

export const brandIcons = {
  ahoge,
  artstation,
  boosty,
  instagram,
  youtube
} as const

export type BrandIconName = keyof typeof brandIcons
