export type Area = {
  slug: string;
  name: string;
  region: "London";
  postcodes: string[];
  nearby: string[];
  /** Unique local copy. Placeholder until Batch 3 area copy is written. */
  intro: string[];
};

const placeholderIntro = (name: string): string[] => [
  `[Unique local paragraph for ${name}: the rental market, typical housing stock and what that means for gas and electrical checks.]`,
  `[Second paragraph: local proof, for example how many ${name} properties we certify, response times and the nearest engineer base.]`,
];

export const areas: Area[] = [
  {
    slug: "hackney",
    name: "Hackney",
    region: "London",
    postcodes: ["E2", "E5", "E8", "E9", "N16"],
    nearby: ["islington", "tower-hamlets", "waltham-forest"],
    intro: placeholderIntro("Hackney"),
  },
  {
    slug: "waltham-forest",
    name: "Waltham Forest",
    region: "London",
    postcodes: ["E4", "E10", "E11", "E17"],
    nearby: ["hackney", "redbridge", "newham"],
    intro: placeholderIntro("Waltham Forest"),
  },
  {
    slug: "newham",
    name: "Newham",
    region: "London",
    postcodes: ["E6", "E7", "E12", "E13", "E15", "E16"],
    nearby: ["tower-hamlets", "barking-and-dagenham", "redbridge"],
    intro: placeholderIntro("Newham"),
  },
  {
    slug: "tower-hamlets",
    name: "Tower Hamlets",
    region: "London",
    postcodes: ["E1", "E3", "E14"],
    nearby: ["hackney", "newham", "islington"],
    intro: placeholderIntro("Tower Hamlets"),
  },
  {
    slug: "redbridge",
    name: "Redbridge",
    region: "London",
    postcodes: ["IG1", "IG2", "IG4", "IG5", "IG6"],
    nearby: ["waltham-forest", "havering", "barking-and-dagenham"],
    intro: placeholderIntro("Redbridge"),
  },
  {
    slug: "havering",
    name: "Havering",
    region: "London",
    postcodes: ["RM1", "RM2", "RM3", "RM7", "RM11", "RM12", "RM14"],
    nearby: ["barking-and-dagenham", "redbridge"],
    intro: placeholderIntro("Havering"),
  },
  {
    slug: "barking-and-dagenham",
    name: "Barking and Dagenham",
    region: "London",
    postcodes: ["IG11", "RM8", "RM9", "RM10"],
    nearby: ["newham", "havering", "redbridge"],
    intro: placeholderIntro("Barking and Dagenham"),
  },
  {
    slug: "islington",
    name: "Islington",
    region: "London",
    postcodes: ["N1", "N4", "N5", "N7", "N19", "EC1"],
    nearby: ["hackney", "tower-hamlets"],
    intro: placeholderIntro("Islington"),
  },
];

export const getArea = (slug: string): Area | undefined => areas.find((a) => a.slug === slug);
