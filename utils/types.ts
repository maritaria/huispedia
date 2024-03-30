
export type StrHint<Format extends string> = string;
export type NumHint<Examples extends number> = number;

export interface Property {
  type: "property";
  id: number;
  attributes: PropertyAttributes;
  links: {
    self: StrHint<"http://api.huispedia.nl/v2/properties/1017vv/47/a">;
    related: StrHint<"http://api.huispedia.nl/v2/properties/68244">;
  };
}

export interface PropertyAttributes {
  street: StrHint<"Keizersgracht">;
  houseNumber: NumHint<698>;
  houseNumberExt: StrHint<"H">;
  houseNumberFull: StrHint<"698-H">;
  postcode: StrHint<"1017EV">;
  city: StrHint<"Amsterdam">;
  municipality: StrHint<"Amsterdam">;
  province: StrHint<"Noord-Holland">;
  latitude: NumHint<52.363266>;
  longitude: NumHint<4.89482737>;
  cbsNeighbourhoodId: NumHint<363>;
  cbsDistrictId: NumHint<363>;
  useSurface: NumHint<215>;
  plotSize: NumHint<38> | null;
  volume: NumHint<753>;
  buildYear: NumHint<1690>;
  houseType: StrHint<"Appartement" | "Woonhuis">;
  houseSubType: StrHint<"Tussenwoning" | "Vrijstaande woning">;
  energyLabel: StrHint<"" | "APLUSPLUS" | "A" | "B" | "C" | "D" | "E" | "F" | "G">;
  huispediaProfileUrl: StrHint<"https://huispedia.nl/amsterdam/1017ev/keizersgracht/698-h">;
  kadasterData: {
    bagNumberDesignationId: StrHint<"0363200000480928">;
    bagBuildingId: StrHint<"0363100012167490" | "">;
    bagObjectId: StrHint<"0363010000996129">;
  },
  image: {
    href: StrHint<"https://img.huispedia.nl/public/1017/ev/698-h/id_61982_661690366390_thumb.jpg">;
  },
  offer: {
    status: StrHint<"TE KOOP EN TE HUUR" | "TE KOOP">;
    lastModifiedAt: StrHint<"2024-03-22 07:12:02">;
    salePrice: NumHint<1950000> | null;
    rentalPrice: null;
  }
}
