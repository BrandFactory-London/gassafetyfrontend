/**
 * Image slots. Drop a file into /public/images and set its path here,
 * e.g. hero: '/images/hero-engineer.jpg'. Leave as null to show a labelled placeholder.
 */
export type ImageSlot = { src: string | null; alt: string; brief: string };

export const images = {
  hero: {
    src: null,
    alt: 'Engineer testing a consumer unit in a rented flat',
    brief: 'Named engineer testing a consumer unit in a rental flat. Natural light, no posing.',
  },
  eicr: {
    src: null,
    alt: 'Electrician carrying out an EICR at a rented property',
    brief: 'Electrician testing circuits at a consumer unit.',
  },
  gas: {
    src: null,
    alt: 'Gas Safe engineer checking a boiler in a rented home',
    brief: 'Gas Safe engineer checking a combi boiler with an analyser.',
  },
  engineer: {
    src: null,
    alt: 'Lead engineer portrait',
    brief: 'Head and shoulders portrait of the lead engineer in workwear.',
  },
  team: {
    src: null,
    alt: 'The team outside a client property',
    brief: 'The team with van outside a London or Essex property.',
  },
  area: {
    src: null,
    alt: 'Local street of rented homes',
    brief: 'Street of terraced or flat-block rental homes in the area, or a coverage map.',
  },
} satisfies Record<string, ImageSlot>;
