export interface Faq { q: string; a: string }
export interface Step { title: string; text: string }
export interface Scenario { title: string; intro: string; items: string[]; outro: string }
export interface City {
  slug: string;
  name: string;
  state: string;
  stateName: string;
  county: string;
  formName: string;
  title: string;
  description: string;
  h1Bottom: string;
  hero: string;
  localNoteTitle: string;
  localNote: string;
  whyHeading: string;
  why: string[];
  steps: Step[];
  faqs: Faq[];
  nearby: string[];
  summaryFees?: boolean;
  summarySteps?: boolean;
  scenario?: Scenario;
  blurb: string;
}

export const brand = "Miami Wholesale Double Close";
export const domain = "miami.wholesaledoubleclose.click";
export const trustBar = ["Published funding fees", "Purchase and resale review", "Serving South Florida wholesalers"];
export const cities: City[] = [
  {
    "slug": "miami",
    "name": "Miami",
    "state": "FL",
    "stateName": "Florida",
    "county": "Miami-Dade County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Miami, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Miami wholesalers. Little Havana and Coconut Grove. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Miami, Florida",
    "hero": "Little Havana and Coconut Grove give Miami two very different local settings. A deal near Calle Ocho should be compared with its own neighborhood rather than with waterfront property across the city. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Miami deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Miami closing file",
    "localNote": "Keep your end buyer's comparable sales tied to the property's actual block. Ask the closing office to confirm the parcel and ownership record before the two contracts are coordinated.",
    "whyHeading": "A funding review built around your Miami deal",
    "why": [
      "Little Havana and Coconut Grove give Miami two very different local settings. A deal near Calle Ocho should be compared with its own neighborhood rather than with waterfront property across the city. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Miami property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "Keep your end buyer's comparable sales tied to the property's actual block. Ask the closing office to confirm the parcel and ownership record before the two contracts are coordinated."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Miami double closing?",
        "a": "Yes, our service area includes Miami, Miami-Dade County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Miami?",
        "a": "Keep your end buyer's comparable sales tied to the property's actual block. Ask the closing office to confirm the parcel and ownership record before the two contracts are coordinated."
      },
      {
        "q": "Can I use Little Havana and Coconut Grove as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "miami-beach",
      "coral-gables",
      "hialeah"
    ],
    "blurb": "Little Havana and Coconut Grove. Keep your end buyer's comparable sales tied to the property's actual block.",
    "summaryFees": true,
    "summarySteps": false,
    "scenario": {
      "title": "Illustrative Miami deal review",
      "intro": "This is a hypothetical checklist, not a completed deal or a promise of results. It shows what a coordinated file would need.",
      "items": [
        "Identify a property in Miami and document its actual condition.",
        "Submit signed purchase and resale contracts with the end buyer details.",
        "Keep your end buyer's comparable sales tied to the property's actual block. Ask the closing office to confirm the parcel and ownership record before the two contracts are coordinated.",
        "Estimate our published funding fee alongside closing costs, taxes and any association charges."
      ],
      "outro": "The reviewed contracts and closing office determine the final sequence. Approval and completed resale are not assumed."
    }
  },
  {
    "slug": "miami-beach",
    "name": "Miami Beach",
    "state": "FL",
    "stateName": "Florida",
    "county": "Miami-Dade County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Miami Beach, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Miami Beach wholesalers. South Beach, Mid Beach and North Beach. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Miami Beach, Florida",
    "hero": "Miami Beach includes South Beach, Mid Beach and North Beach. The district label matters when you explain a property to your end buyer, particularly when the contract covers a condominium rather than an entire building. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Miami Beach deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Miami Beach closing file",
    "localNote": "If an association is involved, identify the unit, building and requested association documents on both contracts. A building name is not a substitute for the legal description.",
    "whyHeading": "A funding review built around your Miami Beach deal",
    "why": [
      "Miami Beach includes South Beach, Mid Beach and North Beach. The district label matters when you explain a property to your end buyer, particularly when the contract covers a condominium rather than an entire building. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Miami Beach property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "If an association is involved, identify the unit, building and requested association documents on both contracts. A building name is not a substitute for the legal description."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Miami Beach double closing?",
        "a": "Yes, our service area includes Miami Beach, Miami-Dade County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Miami Beach?",
        "a": "If an association is involved, identify the unit, building and requested association documents on both contracts. A building name is not a substitute for the legal description."
      },
      {
        "q": "Can I use South Beach, Mid Beach and North Beach as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "miami",
      "coral-gables",
      "hialeah"
    ],
    "blurb": "South Beach, Mid Beach and North Beach. If an association is involved, identify the unit, building and requested association documents on both contracts.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "coral-gables",
    "name": "Coral Gables",
    "state": "FL",
    "stateName": "Florida",
    "county": "Miami-Dade County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Coral Gables, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Coral Gables wholesalers. Miracle Mile and Mediterranean Revival architecture. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Coral Gables, Florida",
    "hero": "Coral Gables was planned in the 1920s and is known for Mediterranean Revival architecture and tree-lined avenues. A property near Miracle Mile deserves a file that separates its existing condition from a proposed renovation. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Coral Gables deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Coral Gables closing file",
    "localNote": "Do not treat a historic architectural style as proof that every alteration is permitted. Share the buyer's intended work with the appropriate local office and keep the funding review focused on the signed transactions.",
    "whyHeading": "A funding review built around your Coral Gables deal",
    "why": [
      "Coral Gables was planned in the 1920s and is known for Mediterranean Revival architecture and tree-lined avenues. A property near Miracle Mile deserves a file that separates its existing condition from a proposed renovation. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Coral Gables property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "Do not treat a historic architectural style as proof that every alteration is permitted. Share the buyer's intended work with the appropriate local office and keep the funding review focused on the signed transactions."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Coral Gables double closing?",
        "a": "Yes, our service area includes Coral Gables, Miami-Dade County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Coral Gables?",
        "a": "Do not treat a historic architectural style as proof that every alteration is permitted. Share the buyer's intended work with the appropriate local office and keep the funding review focused on the signed transactions."
      },
      {
        "q": "Can I use Miracle Mile and Mediterranean Revival architecture as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "miami",
      "miami-beach",
      "hialeah"
    ],
    "blurb": "Miracle Mile and Mediterranean Revival architecture. Do not treat a historic architectural style as proof that every alteration is permitted.",
    "summaryFees": true,
    "summarySteps": false,
    "scenario": {
      "title": "Illustrative Coral Gables deal review",
      "intro": "This is a hypothetical checklist, not a completed deal or a promise of results. It shows what a coordinated file would need.",
      "items": [
        "Identify a property in Coral Gables and document its actual condition.",
        "Submit signed purchase and resale contracts with the end buyer details.",
        "Do not treat a historic architectural style as proof that every alteration is permitted. Share the buyer's intended work with the appropriate local office and keep the funding review focused on the signed transactions.",
        "Estimate our published funding fee alongside closing costs, taxes and any association charges."
      ],
      "outro": "The reviewed contracts and closing office determine the final sequence. Approval and completed resale are not assumed."
    }
  },
  {
    "slug": "hialeah",
    "name": "Hialeah",
    "state": "FL",
    "stateName": "Florida",
    "county": "Miami-Dade County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Hialeah, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Hialeah wholesalers. Amelia Earhart Park and the Leah Arts District. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Hialeah, Florida",
    "hero": "Hialeah has local anchors at Amelia Earhart Park and the Leah Arts District. Use the property address to distinguish its neighborhood from the larger Hialeah name when presenting the resale to an end buyer. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Hialeah deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Hialeah closing file",
    "localNote": "Provide the purchase contract, resale contract and buyer information together. That gives the closing office a clear sequence without relying on a broad neighborhood description.",
    "whyHeading": "A funding review built around your Hialeah deal",
    "why": [
      "Hialeah has local anchors at Amelia Earhart Park and the Leah Arts District. Use the property address to distinguish its neighborhood from the larger Hialeah name when presenting the resale to an end buyer. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Hialeah property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "Provide the purchase contract, resale contract and buyer information together. That gives the closing office a clear sequence without relying on a broad neighborhood description."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Hialeah double closing?",
        "a": "Yes, our service area includes Hialeah, Miami-Dade County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Hialeah?",
        "a": "Provide the purchase contract, resale contract and buyer information together. That gives the closing office a clear sequence without relying on a broad neighborhood description."
      },
      {
        "q": "Can I use Amelia Earhart Park and the Leah Arts District as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "miami",
      "miami-beach",
      "coral-gables"
    ],
    "blurb": "Amelia Earhart Park and the Leah Arts District. Provide the purchase contract, resale contract and buyer information together.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "doral",
    "name": "Doral",
    "state": "FL",
    "stateName": "Florida",
    "county": "Miami-Dade County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Doral, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Doral wholesalers. Doral in western Miami-Dade. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Doral, Florida",
    "hero": "Doral is a separate community in western Miami-Dade, not a Downtown Miami neighborhood. Be precise about the address and any association when preparing a purchase and resale in the same file. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Doral deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Doral closing file",
    "localNote": "For a townhouse or condominium, ask which association documents and balances the closing office needs. Funding cost and association costs are separate items in your deal calculation.",
    "whyHeading": "A funding review built around your Doral deal",
    "why": [
      "Doral is a separate community in western Miami-Dade, not a Downtown Miami neighborhood. Be precise about the address and any association when preparing a purchase and resale in the same file. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Doral property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "For a townhouse or condominium, ask which association documents and balances the closing office needs. Funding cost and association costs are separate items in your deal calculation."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Doral double closing?",
        "a": "Yes, our service area includes Doral, Miami-Dade County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Doral?",
        "a": "For a townhouse or condominium, ask which association documents and balances the closing office needs. Funding cost and association costs are separate items in your deal calculation."
      },
      {
        "q": "Can I use Doral in western Miami-Dade as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "miami",
      "miami-beach",
      "coral-gables"
    ],
    "blurb": "Doral in western Miami-Dade. For a townhouse or condominium, ask which association documents and balances the closing office needs.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "homestead",
    "name": "Homestead",
    "state": "FL",
    "stateName": "Florida",
    "county": "Miami-Dade County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Homestead, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Homestead wholesalers. Homestead and South Dade. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Homestead, Florida",
    "hero": "Homestead sits in South Dade, away from the central Miami neighborhoods. Use nearby comparable properties instead of importing a resale assumption from the coast or the urban core. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Homestead deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Homestead closing file",
    "localNote": "Send the parcel information with the street address if the deal involves more than one lot. The closing office can confirm exactly what each contract conveys.",
    "whyHeading": "A funding review built around your Homestead deal",
    "why": [
      "Homestead sits in South Dade, away from the central Miami neighborhoods. Use nearby comparable properties instead of importing a resale assumption from the coast or the urban core. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Homestead property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "Send the parcel information with the street address if the deal involves more than one lot. The closing office can confirm exactly what each contract conveys."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Homestead double closing?",
        "a": "Yes, our service area includes Homestead, Miami-Dade County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Homestead?",
        "a": "Send the parcel information with the street address if the deal involves more than one lot. The closing office can confirm exactly what each contract conveys."
      },
      {
        "q": "Can I use Homestead and South Dade as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "miami",
      "miami-beach",
      "coral-gables"
    ],
    "blurb": "Homestead and South Dade. Send the parcel information with the street address if the deal involves more than one lot.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "miami-gardens",
    "name": "Miami Gardens",
    "state": "FL",
    "stateName": "Florida",
    "county": "Miami-Dade County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Miami Gardens, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Miami Gardens wholesalers. Hard Rock Stadium and Miami Gardens. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Miami Gardens, Florida",
    "hero": "Miami Gardens is home to Hard Rock Stadium and has its own community identity. A stadium reference can locate a property, but it does not establish the condition, rent or resale value of the house. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Miami Gardens deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Miami Gardens closing file",
    "localNote": "State whether your end buyer plans to renovate or hold the property. Their exit plan should be supported by the actual property information rather than by a nearby landmark.",
    "whyHeading": "A funding review built around your Miami Gardens deal",
    "why": [
      "Miami Gardens is home to Hard Rock Stadium and has its own community identity. A stadium reference can locate a property, but it does not establish the condition, rent or resale value of the house. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Miami Gardens property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "State whether your end buyer plans to renovate or hold the property. Their exit plan should be supported by the actual property information rather than by a nearby landmark."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Miami Gardens double closing?",
        "a": "Yes, our service area includes Miami Gardens, Miami-Dade County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Miami Gardens?",
        "a": "State whether your end buyer plans to renovate or hold the property. Their exit plan should be supported by the actual property information rather than by a nearby landmark."
      },
      {
        "q": "Can I use Hard Rock Stadium and Miami Gardens as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "miami",
      "miami-beach",
      "coral-gables"
    ],
    "blurb": "Hard Rock Stadium and Miami Gardens. State whether your end buyer plans to renovate or hold the property.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "north-miami",
    "name": "North Miami",
    "state": "FL",
    "stateName": "Florida",
    "county": "Miami-Dade County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in North Miami, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for North Miami wholesalers. North Miami in Miami-Dade. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in North Miami, Florida",
    "hero": "North Miami is distinct from North Miami Beach and from the City of Miami. Correct city and parcel details make a difference when a buyer or closing office is matching the property across two contracts. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your North Miami deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a North Miami closing file",
    "localNote": "Use the same legal description on the purchase and resale paperwork. If a mailing address and municipal location differ, ask the closing team to explain which identifiers belong in the file.",
    "whyHeading": "A funding review built around your North Miami deal",
    "why": [
      "North Miami is distinct from North Miami Beach and from the City of Miami. Correct city and parcel details make a difference when a buyer or closing office is matching the property across two contracts. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the North Miami property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "Use the same legal description on the purchase and resale paperwork. If a mailing address and municipal location differ, ask the closing team to explain which identifiers belong in the file."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a North Miami double closing?",
        "a": "Yes, our service area includes North Miami, Miami-Dade County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for North Miami?",
        "a": "Use the same legal description on the purchase and resale paperwork. If a mailing address and municipal location differ, ask the closing team to explain which identifiers belong in the file."
      },
      {
        "q": "Can I use North Miami in Miami-Dade as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "miami",
      "miami-beach",
      "coral-gables"
    ],
    "blurb": "North Miami in Miami-Dade. Use the same legal description on the purchase and resale paperwork.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "fort-lauderdale",
    "name": "Fort Lauderdale",
    "state": "FL",
    "stateName": "Florida",
    "county": "Broward County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Fort Lauderdale, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Fort Lauderdale wholesalers. Fort Lauderdale beach and inland waterways. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Fort Lauderdale, Florida",
    "hero": "Fort Lauderdale combines an Atlantic beachfront with inland neighborhoods and navigable waterways. A canal-side property and a non-waterfront property should not share an unexplained resale assumption. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Fort Lauderdale deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Fort Lauderdale closing file",
    "localNote": "Tell your end buyer whether waterfront access is included in the sale. The closing office can confirm which recorded rights and property boundaries need review.",
    "whyHeading": "A funding review built around your Fort Lauderdale deal",
    "why": [
      "Fort Lauderdale combines an Atlantic beachfront with inland neighborhoods and navigable waterways. A canal-side property and a non-waterfront property should not share an unexplained resale assumption. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Fort Lauderdale property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "Tell your end buyer whether waterfront access is included in the sale. The closing office can confirm which recorded rights and property boundaries need review."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Fort Lauderdale double closing?",
        "a": "Yes, our service area includes Fort Lauderdale, Broward County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Fort Lauderdale?",
        "a": "Tell your end buyer whether waterfront access is included in the sale. The closing office can confirm which recorded rights and property boundaries need review."
      },
      {
        "q": "Can I use Fort Lauderdale beach and inland waterways as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "hollywood",
      "pompano-beach",
      "deerfield-beach"
    ],
    "blurb": "Fort Lauderdale beach and inland waterways. Tell your end buyer whether waterfront access is included in the sale.",
    "summaryFees": true,
    "summarySteps": false,
    "scenario": {
      "title": "Illustrative Fort Lauderdale deal review",
      "intro": "This is a hypothetical checklist, not a completed deal or a promise of results. It shows what a coordinated file would need.",
      "items": [
        "Identify a property in Fort Lauderdale and document its actual condition.",
        "Submit signed purchase and resale contracts with the end buyer details.",
        "Tell your end buyer whether waterfront access is included in the sale. The closing office can confirm which recorded rights and property boundaries need review.",
        "Estimate our published funding fee alongside closing costs, taxes and any association charges."
      ],
      "outro": "The reviewed contracts and closing office determine the final sequence. Approval and completed resale are not assumed."
    }
  },
  {
    "slug": "hollywood",
    "name": "Hollywood",
    "state": "FL",
    "stateName": "Florida",
    "county": "Broward County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Hollywood, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Hollywood wholesalers. Hollywood Beach Broadwalk. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Hollywood, Florida",
    "hero": "Hollywood is known for its oceanfront Broadwalk, while its inland addresses sit in a different setting. Identify the exact neighborhood rather than treating every Hollywood deal as a beach property. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Hollywood deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Hollywood closing file",
    "localNote": "If the resale depends on a particular property use, verify that separately before relying on it. The funding request should describe the current property and signed contract terms.",
    "whyHeading": "A funding review built around your Hollywood deal",
    "why": [
      "Hollywood is known for its oceanfront Broadwalk, while its inland addresses sit in a different setting. Identify the exact neighborhood rather than treating every Hollywood deal as a beach property. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Hollywood property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "If the resale depends on a particular property use, verify that separately before relying on it. The funding request should describe the current property and signed contract terms."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Hollywood double closing?",
        "a": "Yes, our service area includes Hollywood, Broward County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Hollywood?",
        "a": "If the resale depends on a particular property use, verify that separately before relying on it. The funding request should describe the current property and signed contract terms."
      },
      {
        "q": "Can I use Hollywood Beach Broadwalk as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "fort-lauderdale",
      "pompano-beach",
      "deerfield-beach"
    ],
    "blurb": "Hollywood Beach Broadwalk. If the resale depends on a particular property use, verify that separately before relying on it.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "pompano-beach",
    "name": "Pompano Beach",
    "state": "FL",
    "stateName": "Florida",
    "county": "Broward County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Pompano Beach, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Pompano Beach wholesalers. Pompano Beach on the Atlantic coast. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Pompano Beach, Florida",
    "hero": "Pompano Beach is one of Broward's Atlantic beach communities. The coastal label alone does not tell an end buyer whether a particular property is waterfront, in an association or inland. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Pompano Beach deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Pompano Beach closing file",
    "localNote": "Keep insurance assumptions outside the funding fee calculation and obtain property-specific estimates. Your closing office can identify which amounts must be accounted for at settlement.",
    "whyHeading": "A funding review built around your Pompano Beach deal",
    "why": [
      "Pompano Beach is one of Broward's Atlantic beach communities. The coastal label alone does not tell an end buyer whether a particular property is waterfront, in an association or inland. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Pompano Beach property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "Keep insurance assumptions outside the funding fee calculation and obtain property-specific estimates. Your closing office can identify which amounts must be accounted for at settlement."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Pompano Beach double closing?",
        "a": "Yes, our service area includes Pompano Beach, Broward County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Pompano Beach?",
        "a": "Keep insurance assumptions outside the funding fee calculation and obtain property-specific estimates. Your closing office can identify which amounts must be accounted for at settlement."
      },
      {
        "q": "Can I use Pompano Beach on the Atlantic coast as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "fort-lauderdale",
      "hollywood",
      "deerfield-beach"
    ],
    "blurb": "Pompano Beach on the Atlantic coast. Keep insurance assumptions outside the funding fee calculation and obtain property-specific estimates.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "deerfield-beach",
    "name": "Deerfield Beach",
    "state": "FL",
    "stateName": "Florida",
    "county": "Broward County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Deerfield Beach, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Deerfield Beach wholesalers. Deerfield Beach and its fishing pier. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Deerfield Beach, Florida",
    "hero": "Deerfield Beach has a beachfront and a fishing pier, but a citywide deal can be well away from either. Explain the subject property's position instead of relying on the city's beach identity. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Deerfield Beach deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Deerfield Beach closing file",
    "localNote": "Compare the property with the end buyer's intended resale area. For the closing file, make sure both contracts identify the same property and the same included interests.",
    "whyHeading": "A funding review built around your Deerfield Beach deal",
    "why": [
      "Deerfield Beach has a beachfront and a fishing pier, but a citywide deal can be well away from either. Explain the subject property's position instead of relying on the city's beach identity. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Deerfield Beach property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "Compare the property with the end buyer's intended resale area. For the closing file, make sure both contracts identify the same property and the same included interests."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Deerfield Beach double closing?",
        "a": "Yes, our service area includes Deerfield Beach, Broward County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Deerfield Beach?",
        "a": "Compare the property with the end buyer's intended resale area. For the closing file, make sure both contracts identify the same property and the same included interests."
      },
      {
        "q": "Can I use Deerfield Beach and its fishing pier as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "fort-lauderdale",
      "hollywood",
      "pompano-beach"
    ],
    "blurb": "Deerfield Beach and its fishing pier. Compare the property with the end buyer's intended resale area.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "dania-beach",
    "name": "Dania Beach",
    "state": "FL",
    "stateName": "Florida",
    "county": "Broward County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Dania Beach, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Dania Beach wholesalers. Dania Beach and its coastal park setting. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Dania Beach, Florida",
    "hero": "Dania Beach is a Broward coastal community near Dr. Von D. Mizell-Eula Johnson State Park. Local landmarks help orient a buyer, but property condition and contract terms still drive the review. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Dania Beach deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Dania Beach closing file",
    "localNote": "If your seller is an entity, send the relevant signing information to the closing office early. Authority to sign is a file question, not something a funding quote establishes.",
    "whyHeading": "A funding review built around your Dania Beach deal",
    "why": [
      "Dania Beach is a Broward coastal community near Dr. Von D. Mizell-Eula Johnson State Park. Local landmarks help orient a buyer, but property condition and contract terms still drive the review. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Dania Beach property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "If your seller is an entity, send the relevant signing information to the closing office early. Authority to sign is a file question, not something a funding quote establishes."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Dania Beach double closing?",
        "a": "Yes, our service area includes Dania Beach, Broward County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Dania Beach?",
        "a": "If your seller is an entity, send the relevant signing information to the closing office early. Authority to sign is a file question, not something a funding quote establishes."
      },
      {
        "q": "Can I use Dania Beach and its coastal park setting as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "fort-lauderdale",
      "hollywood",
      "pompano-beach"
    ],
    "blurb": "Dania Beach and its coastal park setting. If your seller is an entity, send the relevant signing information to the closing office early.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "sunrise",
    "name": "Sunrise",
    "state": "FL",
    "stateName": "Florida",
    "county": "Broward County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Sunrise, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Sunrise wholesalers. Sawgrass Mills and inland Broward. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Sunrise, Florida",
    "hero": "Sunrise is an inland Broward community known for Sawgrass Mills. Its location west of the coastal cities calls for property-specific comparisons rather than a beachfront description. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Sunrise deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Sunrise closing file",
    "localNote": "Confirm the address and any association requirements before scheduling the resale. A shopping-area landmark can locate a house but does not replace the buyer's due diligence.",
    "whyHeading": "A funding review built around your Sunrise deal",
    "why": [
      "Sunrise is an inland Broward community known for Sawgrass Mills. Its location west of the coastal cities calls for property-specific comparisons rather than a beachfront description. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Sunrise property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "Confirm the address and any association requirements before scheduling the resale. A shopping-area landmark can locate a house but does not replace the buyer's due diligence."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Sunrise double closing?",
        "a": "Yes, our service area includes Sunrise, Broward County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Sunrise?",
        "a": "Confirm the address and any association requirements before scheduling the resale. A shopping-area landmark can locate a house but does not replace the buyer's due diligence."
      },
      {
        "q": "Can I use Sawgrass Mills and inland Broward as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "fort-lauderdale",
      "hollywood",
      "pompano-beach"
    ],
    "blurb": "Sawgrass Mills and inland Broward. Confirm the address and any association requirements before scheduling the resale.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "davie",
    "name": "Davie",
    "state": "FL",
    "stateName": "Florida",
    "county": "Broward County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Davie, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Davie wholesalers. Davie's western-style community and rodeo grounds. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Davie, Florida",
    "hero": "Davie is known for its western-style community identity and rodeo grounds. If a deal includes land or a nonstandard residential layout, describe that explicitly rather than calling it a typical suburban house. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Davie deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Davie closing file",
    "localNote": "Include the parcel and any additional structures in your submission. Ask the closing office to confirm that the purchase and resale cover the same land and interests.",
    "whyHeading": "A funding review built around your Davie deal",
    "why": [
      "Davie is known for its western-style community identity and rodeo grounds. If a deal includes land or a nonstandard residential layout, describe that explicitly rather than calling it a typical suburban house. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Davie property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "Include the parcel and any additional structures in your submission. Ask the closing office to confirm that the purchase and resale cover the same land and interests."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Davie double closing?",
        "a": "Yes, our service area includes Davie, Broward County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Davie?",
        "a": "Include the parcel and any additional structures in your submission. Ask the closing office to confirm that the purchase and resale cover the same land and interests."
      },
      {
        "q": "Can I use Davie's western-style community and rodeo grounds as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "fort-lauderdale",
      "hollywood",
      "pompano-beach"
    ],
    "blurb": "Davie's western-style community and rodeo grounds. Include the parcel and any additional structures in your submission.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "pembroke-pines",
    "name": "Pembroke Pines",
    "state": "FL",
    "stateName": "Florida",
    "county": "Broward County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Pembroke Pines, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Pembroke Pines wholesalers. Pembroke Pines in inland Broward. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Pembroke Pines, Florida",
    "hero": "Pembroke Pines is one of Broward's inland cities, separate from neighboring Pembroke Park. Accurate municipal and parcel details prevent similar names from creating confusion in the purchase and resale file. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Pembroke Pines deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Pembroke Pines closing file",
    "localNote": "Use the complete address and identify any association. Your closing team can explain the paperwork required for that specific property rather than relying on the metro label.",
    "whyHeading": "A funding review built around your Pembroke Pines deal",
    "why": [
      "Pembroke Pines is one of Broward's inland cities, separate from neighboring Pembroke Park. Accurate municipal and parcel details prevent similar names from creating confusion in the purchase and resale file. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Pembroke Pines property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "Use the complete address and identify any association. Your closing team can explain the paperwork required for that specific property rather than relying on the metro label."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Pembroke Pines double closing?",
        "a": "Yes, our service area includes Pembroke Pines, Broward County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Pembroke Pines?",
        "a": "Use the complete address and identify any association. Your closing team can explain the paperwork required for that specific property rather than relying on the metro label."
      },
      {
        "q": "Can I use Pembroke Pines in inland Broward as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "fort-lauderdale",
      "hollywood",
      "pompano-beach"
    ],
    "blurb": "Pembroke Pines in inland Broward. Use the complete address and identify any association.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "west-palm-beach",
    "name": "West Palm Beach",
    "state": "FL",
    "stateName": "Florida",
    "county": "Palm Beach County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in West Palm Beach, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for West Palm Beach wholesalers. Clematis Street and Downtown West Palm Beach. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in West Palm Beach, Florida",
    "hero": "Clematis Street anchors Downtown West Palm Beach, while other addresses sit beyond the downtown waterfront. Explain which part of the city the property occupies before using a downtown comparison for your resale. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your West Palm Beach deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a West Palm Beach closing file",
    "localNote": "Separate property improvements already completed from work your buyer intends to undertake. The reviewed funding file should use actual contract prices and supported property details.",
    "whyHeading": "A funding review built around your West Palm Beach deal",
    "why": [
      "Clematis Street anchors Downtown West Palm Beach, while other addresses sit beyond the downtown waterfront. Explain which part of the city the property occupies before using a downtown comparison for your resale. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the West Palm Beach property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "Separate property improvements already completed from work your buyer intends to undertake. The reviewed funding file should use actual contract prices and supported property details."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a West Palm Beach double closing?",
        "a": "Yes, our service area includes West Palm Beach, Palm Beach County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for West Palm Beach?",
        "a": "Separate property improvements already completed from work your buyer intends to undertake. The reviewed funding file should use actual contract prices and supported property details."
      },
      {
        "q": "Can I use Clematis Street and Downtown West Palm Beach as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "boca-raton",
      "delray-beach",
      "lake-worth-beach"
    ],
    "blurb": "Clematis Street and Downtown West Palm Beach. Separate property improvements already completed from work your buyer intends to undertake.",
    "summaryFees": true,
    "summarySteps": false,
    "scenario": {
      "title": "Illustrative West Palm Beach deal review",
      "intro": "This is a hypothetical checklist, not a completed deal or a promise of results. It shows what a coordinated file would need.",
      "items": [
        "Identify a property in West Palm Beach and document its actual condition.",
        "Submit signed purchase and resale contracts with the end buyer details.",
        "Separate property improvements already completed from work your buyer intends to undertake. The reviewed funding file should use actual contract prices and supported property details.",
        "Estimate our published funding fee alongside closing costs, taxes and any association charges."
      ],
      "outro": "The reviewed contracts and closing office determine the final sequence. Approval and completed resale are not assumed."
    }
  },
  {
    "slug": "boca-raton",
    "name": "Boca Raton",
    "state": "FL",
    "stateName": "Florida",
    "county": "Palm Beach County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Boca Raton, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Boca Raton wholesalers. Mizner Park and Mediterranean Revival architecture. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Boca Raton, Florida",
    "hero": "Boca Raton is known for Mediterranean Revival architecture and Mizner Park. Architectural character is a useful local reference, but it does not establish the condition or permitted use of a particular property. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Boca Raton deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Boca Raton closing file",
    "localNote": "Ask the closing office about association documents when the property is in a managed community. Do not assume that a citywide description resolves a building-specific requirement.",
    "whyHeading": "A funding review built around your Boca Raton deal",
    "why": [
      "Boca Raton is known for Mediterranean Revival architecture and Mizner Park. Architectural character is a useful local reference, but it does not establish the condition or permitted use of a particular property. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Boca Raton property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "Ask the closing office about association documents when the property is in a managed community. Do not assume that a citywide description resolves a building-specific requirement."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Boca Raton double closing?",
        "a": "Yes, our service area includes Boca Raton, Palm Beach County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Boca Raton?",
        "a": "Ask the closing office about association documents when the property is in a managed community. Do not assume that a citywide description resolves a building-specific requirement."
      },
      {
        "q": "Can I use Mizner Park and Mediterranean Revival architecture as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "west-palm-beach",
      "delray-beach",
      "lake-worth-beach"
    ],
    "blurb": "Mizner Park and Mediterranean Revival architecture. Ask the closing office about association documents when the property is in a managed community.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "delray-beach",
    "name": "Delray Beach",
    "state": "FL",
    "stateName": "Florida",
    "county": "Palm Beach County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Delray Beach, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Delray Beach wholesalers. Delray Beach's seaside and arts setting. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Delray Beach, Florida",
    "hero": "Delray Beach has a seaside setting and a distinct arts and cultural identity. When presenting a wholesale deal, show how the exact address relates to that setting without implying every property is a coastal premium property. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Delray Beach deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Delray Beach closing file",
    "localNote": "Identify whether the end buyer is purchasing an entire parcel or a unit with shared interests. Both contracts and the settlement paperwork should describe the same interests.",
    "whyHeading": "A funding review built around your Delray Beach deal",
    "why": [
      "Delray Beach has a seaside setting and a distinct arts and cultural identity. When presenting a wholesale deal, show how the exact address relates to that setting without implying every property is a coastal premium property. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Delray Beach property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "Identify whether the end buyer is purchasing an entire parcel or a unit with shared interests. Both contracts and the settlement paperwork should describe the same interests."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Delray Beach double closing?",
        "a": "Yes, our service area includes Delray Beach, Palm Beach County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Delray Beach?",
        "a": "Identify whether the end buyer is purchasing an entire parcel or a unit with shared interests. Both contracts and the settlement paperwork should describe the same interests."
      },
      {
        "q": "Can I use Delray Beach's seaside and arts setting as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "west-palm-beach",
      "boca-raton",
      "lake-worth-beach"
    ],
    "blurb": "Delray Beach's seaside and arts setting. Identify whether the end buyer is purchasing an entire parcel or a unit with shared interests.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "lake-worth-beach",
    "name": "Lake Worth Beach",
    "state": "FL",
    "stateName": "Florida",
    "county": "Palm Beach County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Lake Worth Beach, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Lake Worth Beach wholesalers. Lake Worth Beach's arts community. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Lake Worth Beach, Florida",
    "hero": "Lake Worth Beach is known for its creative community and Street Painting Festival. A neighborhood description can introduce a deal, but the house's condition and the buyer's plan need their own evidence. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Lake Worth Beach deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Lake Worth Beach closing file",
    "localNote": "If the transaction involves inherited ownership, ask the closing office which ownership and signing documents are needed. A funding request does not settle probate or title questions.",
    "whyHeading": "A funding review built around your Lake Worth Beach deal",
    "why": [
      "Lake Worth Beach is known for its creative community and Street Painting Festival. A neighborhood description can introduce a deal, but the house's condition and the buyer's plan need their own evidence. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Lake Worth Beach property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "If the transaction involves inherited ownership, ask the closing office which ownership and signing documents are needed. A funding request does not settle probate or title questions."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Lake Worth Beach double closing?",
        "a": "Yes, our service area includes Lake Worth Beach, Palm Beach County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Lake Worth Beach?",
        "a": "If the transaction involves inherited ownership, ask the closing office which ownership and signing documents are needed. A funding request does not settle probate or title questions."
      },
      {
        "q": "Can I use Lake Worth Beach's arts community as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "west-palm-beach",
      "boca-raton",
      "delray-beach"
    ],
    "blurb": "Lake Worth Beach's arts community. If the transaction involves inherited ownership, ask the closing office which ownership and signing documents are needed.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "wellington",
    "name": "Wellington",
    "state": "FL",
    "stateName": "Florida",
    "county": "Palm Beach County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Wellington, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Wellington wholesalers. Wellington's equestrian setting. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Wellington, Florida",
    "hero": "Wellington has a strong equestrian identity and hosts the Winter Equestrian Festival. A property associated with that setting may need a more detailed description of the land and included improvements than a standard city label provides. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Wellington deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Wellington closing file",
    "localNote": "List included structures and parcel details when submitting the deal. The closing office can verify what passes with the sale and whether both contracts match.",
    "whyHeading": "A funding review built around your Wellington deal",
    "why": [
      "Wellington has a strong equestrian identity and hosts the Winter Equestrian Festival. A property associated with that setting may need a more detailed description of the land and included improvements than a standard city label provides. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Wellington property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "List included structures and parcel details when submitting the deal. The closing office can verify what passes with the sale and whether both contracts match."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Wellington double closing?",
        "a": "Yes, our service area includes Wellington, Palm Beach County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Wellington?",
        "a": "List included structures and parcel details when submitting the deal. The closing office can verify what passes with the sale and whether both contracts match."
      },
      {
        "q": "Can I use Wellington's equestrian setting as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "west-palm-beach",
      "boca-raton",
      "delray-beach"
    ],
    "blurb": "Wellington's equestrian setting. List included structures and parcel details when submitting the deal.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "jupiter",
    "name": "Jupiter",
    "state": "FL",
    "stateName": "Florida",
    "county": "Palm Beach County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Jupiter, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests for Jupiter wholesalers. Jupiter in the northern Palm Beaches. Published fees and a coordinated purchase and resale review.",
    "h1Bottom": "in Jupiter, Florida",
    "hero": "Jupiter is part of the northern Palm Beaches and is known for its coastal natural setting. Do not carry a central West Palm Beach comparison into a Jupiter deal without checking the subject property's own location. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. The purchase and resale are separate transactions, with availability subject to review of the contracts, property and end buyer. Share your Jupiter deal and the closing office handling it. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Jupiter closing file",
    "localNote": "Provide your buyer's contract and planned closing arrangements with the purchase information. Property-specific review is more useful than a broad coastal market assumption.",
    "whyHeading": "A funding review built around your Jupiter deal",
    "why": [
      "Jupiter is part of the northern Palm Beaches and is known for its coastal natural setting. Do not carry a central West Palm Beach comparison into a Jupiter deal without checking the subject property's own location. Your purchase and resale should be evaluated as one coordinated file, without treating the city name as a substitute for the property details.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Jupiter property address, your contract price and expected resale price. Add the end buyer and closing office information so the file can be reviewed."
      },
      {
        "title": "Confirm the file",
        "text": "Provide your buyer's contract and planned closing arrangements with the purchase information. Property-specific review is more useful than a broad coastal market assumption."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Jupiter double closing?",
        "a": "Yes, our service area includes Jupiter, Palm Beach County. Submit the actual contracts and property information; a service-area listing is not a funding approval."
      },
      {
        "q": "What local details should I include for Jupiter?",
        "a": "Provide your buyer's contract and planned closing arrangements with the purchase information. Property-specific review is more useful than a broad coastal market assumption."
      },
      {
        "q": "Can I use Jupiter in the northern Palm Beaches as my resale comparison?",
        "a": "A local landmark helps explain the address, not the price. Use comparable properties that match the subject and have your end buyer review the condition and intended use."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "west-palm-beach",
      "boca-raton",
      "delray-beach"
    ],
    "blurb": "Jupiter in the northern Palm Beaches. Provide your buyer's contract and planned closing arrangements with the purchase information.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "aventura",
    "name": "Aventura",
    "state": "FL",
    "stateName": "Florida",
    "county": "Miami-Dade County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Aventura, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests in Aventura. Aventura Mall and the Intracoastal Waterway. Published fees and property-specific purchase and resale review.",
    "h1Bottom": "in Aventura, Florida",
    "hero": "Aventura Mall and the Intracoastal Waterway are local anchors, and the city includes condominium buildings as well as residential neighborhoods. A request for a unit should identify the building and association, not simply the Aventura mailing address. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. Send both contract prices, the property details and end buyer information for review. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Aventura closing file",
    "localNote": "Ask the closing office which condominium documents and association balances affect both sides of the sale. Keep those costs separate from the transactional funding fee.",
    "whyHeading": "How your Aventura request is reviewed",
    "why": [
      "Aventura Mall and the Intracoastal Waterway are local anchors, and the city includes condominium buildings as well as residential neighborhoods. A request for a unit should identify the building and association, not simply the Aventura mailing address. The file should reflect that local setting without substituting a citywide assumption for property facts.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Aventura property address, purchase and resale contract prices. Identify your end buyer and closing office."
      },
      {
        "title": "Confirm the file",
        "text": "Ask the closing office which condominium documents and association balances affect both sides of the sale. Keep those costs separate from the transactional funding fee."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Aventura double closing?",
        "a": "Yes, our service area includes Aventura, Miami-Dade County. Requests require review of the actual contracts and property, not just the city name."
      },
      {
        "q": "What local details matter in a Aventura file?",
        "a": "Ask the closing office which condominium documents and association balances affect both sides of the sale. Keep those costs separate from the transactional funding fee."
      },
      {
        "q": "Does Aventura Mall and the Intracoastal Waterway establish my resale value?",
        "a": "No. A local landmark explains the setting, not the value or condition of the property. Have your end buyer support their price with property-specific information."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "miami",
      "miami-beach",
      "coral-gables"
    ],
    "blurb": "Aventura Mall and the Intracoastal Waterway. Ask the closing office which condominium documents and association balances affect both sides of the sale.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "miami-lakes",
    "name": "Miami Lakes",
    "state": "FL",
    "stateName": "Florida",
    "county": "Miami-Dade County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Miami Lakes, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests in Miami Lakes. Main Street and the lakes of Miami Lakes. Published fees and property-specific purchase and resale review.",
    "h1Bottom": "in Miami Lakes, Florida",
    "hero": "Miami Lakes has a traditional Main Street, curving residential streets and lakefront settings. A lake view in a property description should be distinguished from recorded access or land included in the sale. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. Send both contract prices, the property details and end buyer information for review. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Miami Lakes closing file",
    "localNote": "Send the parcel and legal description together with the address. Ask the closing team to confirm any recorded rights your buyer is relying on.",
    "whyHeading": "How your Miami Lakes request is reviewed",
    "why": [
      "Miami Lakes has a traditional Main Street, curving residential streets and lakefront settings. A lake view in a property description should be distinguished from recorded access or land included in the sale. The file should reflect that local setting without substituting a citywide assumption for property facts.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Miami Lakes property address, purchase and resale contract prices. Identify your end buyer and closing office."
      },
      {
        "title": "Confirm the file",
        "text": "Send the parcel and legal description together with the address. Ask the closing team to confirm any recorded rights your buyer is relying on."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Miami Lakes double closing?",
        "a": "Yes, our service area includes Miami Lakes, Miami-Dade County. Requests require review of the actual contracts and property, not just the city name."
      },
      {
        "q": "What local details matter in a Miami Lakes file?",
        "a": "Send the parcel and legal description together with the address. Ask the closing team to confirm any recorded rights your buyer is relying on."
      },
      {
        "q": "Does Main Street and the lakes of Miami Lakes establish my resale value?",
        "a": "No. A local landmark explains the setting, not the value or condition of the property. Have your end buyer support their price with property-specific information."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "miami",
      "miami-beach",
      "coral-gables"
    ],
    "blurb": "Main Street and the lakes of Miami Lakes. Send the parcel and legal description together with the address.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "pinecrest",
    "name": "Pinecrest",
    "state": "FL",
    "stateName": "Florida",
    "county": "Miami-Dade County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Pinecrest, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests in Pinecrest. Pinecrest Gardens and the village setting. Published fees and property-specific purchase and resale review.",
    "h1Bottom": "in Pinecrest, Florida",
    "hero": "Pinecrest is a suburban village whose community park, Pinecrest Gardens, occupies the former Parrot Jungle site. A village landmark can orient a buyer, but the house and parcel still need their own condition review. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. Send both contract prices, the property details and end buyer information for review. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Pinecrest closing file",
    "localNote": "If your buyer plans additions or a major renovation, confirm the local requirements independently of funding. Describe existing improvements and intended work separately in the deal request.",
    "whyHeading": "How your Pinecrest request is reviewed",
    "why": [
      "Pinecrest is a suburban village whose community park, Pinecrest Gardens, occupies the former Parrot Jungle site. A village landmark can orient a buyer, but the house and parcel still need their own condition review. The file should reflect that local setting without substituting a citywide assumption for property facts.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Pinecrest property address, purchase and resale contract prices. Identify your end buyer and closing office."
      },
      {
        "title": "Confirm the file",
        "text": "If your buyer plans additions or a major renovation, confirm the local requirements independently of funding. Describe existing improvements and intended work separately in the deal request."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Pinecrest double closing?",
        "a": "Yes, our service area includes Pinecrest, Miami-Dade County. Requests require review of the actual contracts and property, not just the city name."
      },
      {
        "q": "What local details matter in a Pinecrest file?",
        "a": "If your buyer plans additions or a major renovation, confirm the local requirements independently of funding. Describe existing improvements and intended work separately in the deal request."
      },
      {
        "q": "Does Pinecrest Gardens and the village setting establish my resale value?",
        "a": "No. A local landmark explains the setting, not the value or condition of the property. Have your end buyer support their price with property-specific information."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "miami",
      "miami-beach",
      "coral-gables"
    ],
    "blurb": "Pinecrest Gardens and the village setting. If your buyer plans additions or a major renovation, confirm the local requirements independently of funding.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "palmetto-bay",
    "name": "Palmetto Bay",
    "state": "FL",
    "stateName": "Florida",
    "county": "Miami-Dade County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Palmetto Bay, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests in Palmetto Bay. Coral Reef Park and Bill Sadowski Park. Published fees and property-specific purchase and resale review.",
    "h1Bottom": "in Palmetto Bay, Florida",
    "hero": "Palmetto Bay has local parks including Coral Reef Park and Bill Sadowski Park. A property near one of these green spaces should be compared with its actual neighborhood rather than with a general Miami resale figure. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. Send both contract prices, the property details and end buyer information for review. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Palmetto Bay closing file",
    "localNote": "Give your end buyer the current property details and identify any additional lot included in the contract. The settlement file needs matching property descriptions on both sides.",
    "whyHeading": "How your Palmetto Bay request is reviewed",
    "why": [
      "Palmetto Bay has local parks including Coral Reef Park and Bill Sadowski Park. A property near one of these green spaces should be compared with its actual neighborhood rather than with a general Miami resale figure. The file should reflect that local setting without substituting a citywide assumption for property facts.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Palmetto Bay property address, purchase and resale contract prices. Identify your end buyer and closing office."
      },
      {
        "title": "Confirm the file",
        "text": "Give your end buyer the current property details and identify any additional lot included in the contract. The settlement file needs matching property descriptions on both sides."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Palmetto Bay double closing?",
        "a": "Yes, our service area includes Palmetto Bay, Miami-Dade County. Requests require review of the actual contracts and property, not just the city name."
      },
      {
        "q": "What local details matter in a Palmetto Bay file?",
        "a": "Give your end buyer the current property details and identify any additional lot included in the contract. The settlement file needs matching property descriptions on both sides."
      },
      {
        "q": "Does Coral Reef Park and Bill Sadowski Park establish my resale value?",
        "a": "No. A local landmark explains the setting, not the value or condition of the property. Have your end buyer support their price with property-specific information."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "miami",
      "miami-beach",
      "coral-gables"
    ],
    "blurb": "Coral Reef Park and Bill Sadowski Park. Give your end buyer the current property details and identify any additional lot included in the contract.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "coral-springs",
    "name": "Coral Springs",
    "state": "FL",
    "stateName": "Florida",
    "county": "Broward County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Coral Springs, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests in Coral Springs. Coral Springs Museum of Art and inland Broward. Published fees and property-specific purchase and resale review.",
    "h1Bottom": "in Coral Springs, Florida",
    "hero": "Coral Springs has its own cultural setting, including the Coral Springs Museum of Art. It is an inland Broward city, so a wholesale file should not borrow the coastal assumptions used for a beach property. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. Send both contract prices, the property details and end buyer information for review. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Coral Springs closing file",
    "localNote": "Send your buyer's intended use alongside the resale contract. Association requirements, condition and closing costs should be reviewed for the actual property.",
    "whyHeading": "How your Coral Springs request is reviewed",
    "why": [
      "Coral Springs has its own cultural setting, including the Coral Springs Museum of Art. It is an inland Broward city, so a wholesale file should not borrow the coastal assumptions used for a beach property. The file should reflect that local setting without substituting a citywide assumption for property facts.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Coral Springs property address, purchase and resale contract prices. Identify your end buyer and closing office."
      },
      {
        "title": "Confirm the file",
        "text": "Send your buyer's intended use alongside the resale contract. Association requirements, condition and closing costs should be reviewed for the actual property."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Coral Springs double closing?",
        "a": "Yes, our service area includes Coral Springs, Broward County. Requests require review of the actual contracts and property, not just the city name."
      },
      {
        "q": "What local details matter in a Coral Springs file?",
        "a": "Send your buyer's intended use alongside the resale contract. Association requirements, condition and closing costs should be reviewed for the actual property."
      },
      {
        "q": "Does Coral Springs Museum of Art and inland Broward establish my resale value?",
        "a": "No. A local landmark explains the setting, not the value or condition of the property. Have your end buyer support their price with property-specific information."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "fort-lauderdale",
      "hollywood",
      "pompano-beach"
    ],
    "blurb": "Coral Springs Museum of Art and inland Broward. Send your buyer's intended use alongside the resale contract.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "miramar",
    "name": "Miramar",
    "state": "FL",
    "stateName": "Florida",
    "county": "Broward County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Miramar, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests in Miramar. Miramar Town Center and Regional Park. Published fees and property-specific purchase and resale review.",
    "h1Bottom": "in Miramar, Florida",
    "hero": "Miramar Town Center includes the Miramar Cultural Center and City Hall, while Miramar Regional Park is another local anchor. These landmarks help describe a location without establishing the resale price of a particular home. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. Send both contract prices, the property details and end buyer information for review. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Miramar closing file",
    "localNote": "Be clear whether your contract covers a detached house or a unit in an association. Identify the closing office and any association paperwork still outstanding.",
    "whyHeading": "How your Miramar request is reviewed",
    "why": [
      "Miramar Town Center includes the Miramar Cultural Center and City Hall, while Miramar Regional Park is another local anchor. These landmarks help describe a location without establishing the resale price of a particular home. The file should reflect that local setting without substituting a citywide assumption for property facts.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Miramar property address, purchase and resale contract prices. Identify your end buyer and closing office."
      },
      {
        "title": "Confirm the file",
        "text": "Be clear whether your contract covers a detached house or a unit in an association. Identify the closing office and any association paperwork still outstanding."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Miramar double closing?",
        "a": "Yes, our service area includes Miramar, Broward County. Requests require review of the actual contracts and property, not just the city name."
      },
      {
        "q": "What local details matter in a Miramar file?",
        "a": "Be clear whether your contract covers a detached house or a unit in an association. Identify the closing office and any association paperwork still outstanding."
      },
      {
        "q": "Does Miramar Town Center and Regional Park establish my resale value?",
        "a": "No. A local landmark explains the setting, not the value or condition of the property. Have your end buyer support their price with property-specific information."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "fort-lauderdale",
      "hollywood",
      "pompano-beach"
    ],
    "blurb": "Miramar Town Center and Regional Park. Be clear whether your contract covers a detached house or a unit in an association.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "plantation",
    "name": "Plantation",
    "state": "FL",
    "stateName": "Florida",
    "county": "Broward County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Plantation, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests in Plantation. Plantation Historical Museum. Published fees and property-specific purchase and resale review.",
    "h1Bottom": "in Plantation, Florida",
    "hero": "Plantation has its own Historical Museum and park setting, distinct from nearby Sunrise and its shopping destinations. A resale description should identify the property's actual community rather than folding the two cities into one neighborhood. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. Send both contract prices, the property details and end buyer information for review. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Plantation closing file",
    "localNote": "Compare the address with the municipality and parcel record before sending both contracts. The closing office can resolve any difference between the mailing address and the recorded property.",
    "whyHeading": "How your Plantation request is reviewed",
    "why": [
      "Plantation has its own Historical Museum and park setting, distinct from nearby Sunrise and its shopping destinations. A resale description should identify the property's actual community rather than folding the two cities into one neighborhood. The file should reflect that local setting without substituting a citywide assumption for property facts.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Plantation property address, purchase and resale contract prices. Identify your end buyer and closing office."
      },
      {
        "title": "Confirm the file",
        "text": "Compare the address with the municipality and parcel record before sending both contracts. The closing office can resolve any difference between the mailing address and the recorded property."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Plantation double closing?",
        "a": "Yes, our service area includes Plantation, Broward County. Requests require review of the actual contracts and property, not just the city name."
      },
      {
        "q": "What local details matter in a Plantation file?",
        "a": "Compare the address with the municipality and parcel record before sending both contracts. The closing office can resolve any difference between the mailing address and the recorded property."
      },
      {
        "q": "Does Plantation Historical Museum establish my resale value?",
        "a": "No. A local landmark explains the setting, not the value or condition of the property. Have your end buyer support their price with property-specific information."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "fort-lauderdale",
      "hollywood",
      "pompano-beach"
    ],
    "blurb": "Plantation Historical Museum. Compare the address with the municipality and parcel record before sending both contracts.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "weston",
    "name": "Weston",
    "state": "FL",
    "stateName": "Florida",
    "county": "Broward County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Weston, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests in Weston. Weston and the western Everglades setting. Published fees and property-specific purchase and resale review.",
    "h1Bottom": "in Weston, Florida",
    "hero": "Weston sits at the western end of Greater Fort Lauderdale near the Everglades. Its western location and residential communities call for a different local description from a coastal Broward deal. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. Send both contract prices, the property details and end buyer information for review. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Weston closing file",
    "localNote": "Ask about association documents and restrictions if the property is in a managed community. The funding review does not replace the buyer's checks on their planned use.",
    "whyHeading": "How your Weston request is reviewed",
    "why": [
      "Weston sits at the western end of Greater Fort Lauderdale near the Everglades. Its western location and residential communities call for a different local description from a coastal Broward deal. The file should reflect that local setting without substituting a citywide assumption for property facts.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Weston property address, purchase and resale contract prices. Identify your end buyer and closing office."
      },
      {
        "title": "Confirm the file",
        "text": "Ask about association documents and restrictions if the property is in a managed community. The funding review does not replace the buyer's checks on their planned use."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Weston double closing?",
        "a": "Yes, our service area includes Weston, Broward County. Requests require review of the actual contracts and property, not just the city name."
      },
      {
        "q": "What local details matter in a Weston file?",
        "a": "Ask about association documents and restrictions if the property is in a managed community. The funding review does not replace the buyer's checks on their planned use."
      },
      {
        "q": "Does Weston and the western Everglades setting establish my resale value?",
        "a": "No. A local landmark explains the setting, not the value or condition of the property. Have your end buyer support their price with property-specific information."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "fort-lauderdale",
      "hollywood",
      "pompano-beach"
    ],
    "blurb": "Weston and the western Everglades setting. Ask about association documents and restrictions if the property is in a managed community.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "oakland-park",
    "name": "Oakland Park",
    "state": "FL",
    "stateName": "Florida",
    "county": "Broward County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Oakland Park, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests in Oakland Park. Oakland Park and the Middle River. Published fees and property-specific purchase and resale review.",
    "h1Bottom": "in Oakland Park, Florida",
    "hero": "Oakland Park sits on the North Fork of the Middle River and has a downtown dining and shopping setting. A river-area address needs clear property boundaries and a condition description before a buyer relies on a resale comparison. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. Send both contract prices, the property details and end buyer information for review. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Oakland Park closing file",
    "localNote": "If a listing mentions water access, identify the rights actually conveyed. Both contracts should match on those interests, and the closing office can review the recorded documents.",
    "whyHeading": "How your Oakland Park request is reviewed",
    "why": [
      "Oakland Park sits on the North Fork of the Middle River and has a downtown dining and shopping setting. A river-area address needs clear property boundaries and a condition description before a buyer relies on a resale comparison. The file should reflect that local setting without substituting a citywide assumption for property facts.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Oakland Park property address, purchase and resale contract prices. Identify your end buyer and closing office."
      },
      {
        "title": "Confirm the file",
        "text": "If a listing mentions water access, identify the rights actually conveyed. Both contracts should match on those interests, and the closing office can review the recorded documents."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Oakland Park double closing?",
        "a": "Yes, our service area includes Oakland Park, Broward County. Requests require review of the actual contracts and property, not just the city name."
      },
      {
        "q": "What local details matter in a Oakland Park file?",
        "a": "If a listing mentions water access, identify the rights actually conveyed. Both contracts should match on those interests, and the closing office can review the recorded documents."
      },
      {
        "q": "Does Oakland Park and the Middle River establish my resale value?",
        "a": "No. A local landmark explains the setting, not the value or condition of the property. Have your end buyer support their price with property-specific information."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "fort-lauderdale",
      "hollywood",
      "pompano-beach"
    ],
    "blurb": "Oakland Park and the Middle River. If a listing mentions water access, identify the rights actually conveyed.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "boynton-beach",
    "name": "Boynton Beach",
    "state": "FL",
    "stateName": "Florida",
    "county": "Palm Beach County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Boynton Beach, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests in Boynton Beach. Boynton Beach in Palm Beach County. Published fees and property-specific purchase and resale review.",
    "h1Bottom": "in Boynton Beach, Florida",
    "hero": "Boynton Beach is a separate Palm Beach County community between the county's better-known city anchors. Use the exact address and property type to distinguish your deal from a general West Palm Beach or Delray Beach comparison. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. Send both contract prices, the property details and end buyer information for review. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Boynton Beach closing file",
    "localNote": "State the ownership and property type clearly if your deal involves a condominium or association. The closing office can confirm which documents apply to that building.",
    "whyHeading": "How your Boynton Beach request is reviewed",
    "why": [
      "Boynton Beach is a separate Palm Beach County community between the county's better-known city anchors. Use the exact address and property type to distinguish your deal from a general West Palm Beach or Delray Beach comparison. The file should reflect that local setting without substituting a citywide assumption for property facts.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Boynton Beach property address, purchase and resale contract prices. Identify your end buyer and closing office."
      },
      {
        "title": "Confirm the file",
        "text": "State the ownership and property type clearly if your deal involves a condominium or association. The closing office can confirm which documents apply to that building."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Boynton Beach double closing?",
        "a": "Yes, our service area includes Boynton Beach, Palm Beach County. Requests require review of the actual contracts and property, not just the city name."
      },
      {
        "q": "What local details matter in a Boynton Beach file?",
        "a": "State the ownership and property type clearly if your deal involves a condominium or association. The closing office can confirm which documents apply to that building."
      },
      {
        "q": "Does Boynton Beach in Palm Beach County establish my resale value?",
        "a": "No. A local landmark explains the setting, not the value or condition of the property. Have your end buyer support their price with property-specific information."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "west-palm-beach",
      "boca-raton",
      "delray-beach"
    ],
    "blurb": "Boynton Beach in Palm Beach County. State the ownership and property type clearly if your deal involves a condominium or association.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "palm-beach-gardens",
    "name": "Palm Beach Gardens",
    "state": "FL",
    "stateName": "Florida",
    "county": "Palm Beach County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Palm Beach Gardens, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests in Palm Beach Gardens. Palm Beach Gardens and its golf setting. Published fees and property-specific purchase and resale review.",
    "h1Bottom": "in Palm Beach Gardens, Florida",
    "hero": "Palm Beach Gardens has a golf-oriented community identity within the northern Palm Beaches. A golf-community description should be checked against the actual parcel and any membership or association arrangements. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. Send both contract prices, the property details and end buyer information for review. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Palm Beach Gardens closing file",
    "localNote": "Do not assume amenities or memberships transfer with the sale. Ask the closing office which interests and documents are included before coordinating the purchase and resale.",
    "whyHeading": "How your Palm Beach Gardens request is reviewed",
    "why": [
      "Palm Beach Gardens has a golf-oriented community identity within the northern Palm Beaches. A golf-community description should be checked against the actual parcel and any membership or association arrangements. The file should reflect that local setting without substituting a citywide assumption for property facts.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Palm Beach Gardens property address, purchase and resale contract prices. Identify your end buyer and closing office."
      },
      {
        "title": "Confirm the file",
        "text": "Do not assume amenities or memberships transfer with the sale. Ask the closing office which interests and documents are included before coordinating the purchase and resale."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Palm Beach Gardens double closing?",
        "a": "Yes, our service area includes Palm Beach Gardens, Palm Beach County. Requests require review of the actual contracts and property, not just the city name."
      },
      {
        "q": "What local details matter in a Palm Beach Gardens file?",
        "a": "Do not assume amenities or memberships transfer with the sale. Ask the closing office which interests and documents are included before coordinating the purchase and resale."
      },
      {
        "q": "Does Palm Beach Gardens and its golf setting establish my resale value?",
        "a": "No. A local landmark explains the setting, not the value or condition of the property. Have your end buyer support their price with property-specific information."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "west-palm-beach",
      "boca-raton",
      "delray-beach"
    ],
    "blurb": "Palm Beach Gardens and its golf setting. Do not assume amenities or memberships transfer with the sale.",
    "summaryFees": true,
    "summarySteps": false
  },
  {
    "slug": "riviera-beach",
    "name": "Riviera Beach",
    "state": "FL",
    "stateName": "Florida",
    "county": "Palm Beach County",
    "formName": "Miami-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Riviera Beach, FL | Miami Wholesale Double Close",
    "description": "Transactional funding requests in Riviera Beach. Riviera Beach in Palm Beach County. Published fees and property-specific purchase and resale review.",
    "h1Bottom": "in Riviera Beach, Florida",
    "hero": "Riviera Beach is part of the Palm Beaches, separate from West Palm Beach and the Town of Palm Beach. Accurate city and parcel identifiers keep that geography clear when two contracts describe the same property. Miami Wholesale Double Close connects wholesalers with transactional funding for the purchase side of a double closing. Send both contract prices, the property details and end buyer information for review. Funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Riviera Beach closing file",
    "localNote": "Submit the complete property address and both contract prices. If your end buyer relies on a specific use or waterfront feature, verify it separately from the funding request.",
    "whyHeading": "How your Riviera Beach request is reviewed",
    "why": [
      "Riviera Beach is part of the Palm Beaches, separate from West Palm Beach and the Town of Palm Beach. Accurate city and parcel identifiers keep that geography clear when two contracts describe the same property. The file should reflect that local setting without substituting a citywide assumption for property facts.",
      "Our transactional funding process starts with the purchase price, resale price and end buyer. A double closing uses separate purchase and resale documents; it does not remove your disclosure obligations or guarantee a buyer will complete the resale.",
      "Use our published fee schedule when checking the deal numbers. Closing costs, taxes and any property-specific charges are separate, and the closing office can confirm the amounts for your file."
    ],
    "steps": [
      {
        "title": "Submit both sides",
        "text": "Include the Riviera Beach property address, purchase and resale contract prices. Identify your end buyer and closing office."
      },
      {
        "title": "Confirm the file",
        "text": "Submit the complete property address and both contract prices. If your end buyer relies on a specific use or waterfront feature, verify it separately from the funding request."
      },
      {
        "title": "Coordinate the closings",
        "text": "If funding is approved, the closing office coordinates the purchase and resale under the reviewed terms. Do not treat a submitted request as a commitment to fund."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a Riviera Beach double closing?",
        "a": "Yes, our service area includes Riviera Beach, Palm Beach County. Requests require review of the actual contracts and property, not just the city name."
      },
      {
        "q": "What local details matter in a Riviera Beach file?",
        "a": "Submit the complete property address and both contract prices. If your end buyer relies on a specific use or waterfront feature, verify it separately from the funding request."
      },
      {
        "q": "Does Riviera Beach in Palm Beach County establish my resale value?",
        "a": "No. A local landmark explains the setting, not the value or condition of the property. Have your end buyer support their price with property-specific information."
      },
      {
        "q": "What is a double closing?",
        "a": "It is a purchase followed by a separate resale of the same property. The closing office must coordinate the contracts, funds and settlement paperwork; completion depends on the actual file."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements have separate fees; review the full fee schedule and your written terms."
      },
      {
        "q": "Does submitting a request guarantee funding?",
        "a": "No. Funding depends on the reviewed transaction and required documents. The closing office should confirm the sequence before either side relies on a closing date."
      }
    ],
    "nearby": [
      "west-palm-beach",
      "boca-raton",
      "delray-beach"
    ],
    "blurb": "Riviera Beach in Palm Beach County. Submit the complete property address and both contract prices.",
    "summaryFees": true,
    "summarySteps": false
  }
];
