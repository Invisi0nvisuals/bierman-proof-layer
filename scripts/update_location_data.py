"""
Batch update script: expands areaServed and adds verified local trust fields
for 6 NJ location data files.

All data sourced from biermanautism.com production pages — "Counties Served" section (May 2026).
"""

import re

LOCATIONS = {
    "west-orange": {
        "old_area": """    areaServed: [
      { type: "AdministrativeArea", name: "Essex County, NJ" },
      { type: "AdministrativeArea", name: "Morris County, NJ" },
      { type: "AdministrativeArea", name: "Union County, NJ" },
      { type: "City", name: "West Orange, NJ" },
      { type: "City", name: "Livingston, NJ" },
      { type: "City", name: "Millburn, NJ" },
      { type: "City", name: "Morristown, NJ" },
      { type: "City", name: "Summit, NJ" },
    ],
  },
};""",
        "new_area": """    // areaServed: Verified from biermanautism.com/location/west-orange-nj/ — "Counties Served" section (May 2026)
    areaServed: [
      { type: "AdministrativeArea", name: "Essex County, NJ" },
      { type: "AdministrativeArea", name: "Morris County, NJ" },
      { type: "AdministrativeArea", name: "Union County, NJ" },
      { type: "AdministrativeArea", name: "Passaic County, NJ" },
      { type: "City", name: "West Orange, NJ" },
      { type: "City", name: "Orange, NJ" },
      { type: "City", name: "East Orange, NJ" },
      { type: "City", name: "South Orange, NJ" },
      { type: "City", name: "Maplewood, NJ" },
      { type: "City", name: "Millburn, NJ" },
      { type: "City", name: "Livingston, NJ" },
      { type: "City", name: "Roseland, NJ" },
      { type: "City", name: "Morristown, NJ" },
      { type: "City", name: "Madison, NJ" },
      { type: "City", name: "Chatham, NJ" },
      { type: "City", name: "Florham Park, NJ" },
      { type: "City", name: "Morris Plains, NJ" },
      { type: "City", name: "Summit, NJ" },
      { type: "City", name: "New Providence, NJ" },
      { type: "City", name: "Berkeley Heights, NJ" },
      { type: "City", name: "Mountainside, NJ" },
      { type: "City", name: "Springfield, NJ" },
      { type: "City", name: "Montclair, NJ" },
      { type: "City", name: "Clifton, NJ" },
      { type: "City", name: "Passaic, NJ" },
      { type: "City", name: "Paterson, NJ" },
      { type: "City", name: "Wayne, NJ" },
    ],
  },

  // ── Verified Local Trust Fields ──────────────────────────────────────────────
  // Source: biermanautism.com/location/west-orange-nj/ (May 2026)

  serviceArea: [
    "West Orange", "Orange", "East Orange", "South Orange", "Maplewood",
    "Millburn", "Livingston", "Roseland",
    "Morristown", "Madison", "Chatham", "Florham Park", "Morris Plains",
    "Summit", "New Providence", "Berkeley Heights", "Mountainside", "Springfield",
    "Montclair", "Clifton", "Passaic", "Paterson", "Wayne",
  ],

  visitLogistics: {
    parking: "Free parking",
    accessibility: "Wheelchair accessible",
    landmarks: "Located on Executive Drive",
  },

  schoolRelationships:
    "Works with West Orange Community Schools and surrounding area districts to support learner transitions.",

  communityLinks: {
    facebookGroup: "https://www.facebook.com/groups/1428401534785409/",
    eventsUrl: "https://www.biermanautism.com/resources/sensory-friendly-events/",
  },
};""",
    },
    "princeton": {
        "old_area": """    areaServed: [
      { type: "AdministrativeArea", name: "Mercer County, NJ" },
      { type: "AdministrativeArea", name: "Somerset County, NJ" },
      { type: "City", name: "Princeton, NJ" },
      { type: "City", name: "Trenton, NJ" },
      { type: "City", name: "Hamilton, NJ" },
      { type: "City", name: "Lawrence Township, NJ" },
    ],
  },
};""",
        "new_area": """    // areaServed: Verified from biermanautism.com/location/princeton-nj/ — "Counties Served" section (May 2026)
    areaServed: [
      { type: "AdministrativeArea", name: "Mercer County, NJ" },
      { type: "AdministrativeArea", name: "Middlesex County, NJ" },
      { type: "AdministrativeArea", name: "Somerset County, NJ" },
      { type: "AdministrativeArea", name: "Hunterdon County, NJ" },
      { type: "City", name: "Princeton, NJ" },
      { type: "City", name: "West Windsor, NJ" },
      { type: "City", name: "Plainsboro, NJ" },
      { type: "City", name: "East Windsor, NJ" },
      { type: "City", name: "Hamilton, NJ" },
      { type: "City", name: "Trenton, NJ" },
      { type: "City", name: "Lawrence, NJ" },
      { type: "City", name: "Hopewell, NJ" },
      { type: "City", name: "South Brunswick, NJ" },
      { type: "City", name: "North Brunswick, NJ" },
      { type: "City", name: "Franklin, NJ" },
      { type: "City", name: "New Brunswick, NJ" },
      { type: "City", name: "Edison, NJ" },
      { type: "City", name: "Montgomery, NJ" },
      { type: "City", name: "Hillsborough, NJ" },
      { type: "City", name: "Manville, NJ" },
      { type: "City", name: "Somerville, NJ" },
      { type: "City", name: "Bridgewater, NJ" },
      { type: "City", name: "Pennington, NJ" },
      { type: "City", name: "Lambertville, NJ" },
      { type: "City", name: "Flemington, NJ" },
    ],
  },

  // ── Verified Local Trust Fields ──────────────────────────────────────────────
  // Source: biermanautism.com/location/princeton-nj/ (May 2026)

  serviceArea: [
    "Princeton", "West Windsor", "Plainsboro", "East Windsor", "Hamilton",
    "Trenton", "Lawrence", "Hopewell",
    "South Brunswick", "North Brunswick", "Franklin", "New Brunswick", "Edison",
    "Montgomery", "Hillsborough", "Manville", "Somerville", "Bridgewater",
    "Pennington", "Lambertville", "Flemington",
  ],

  visitLogistics: {
    parking: "Free parking",
    accessibility: "Wheelchair accessible",
    landmarks: "Located on Alexander Rd",
  },

  schoolRelationships:
    "Works with Princeton Community Schools and surrounding area districts to support learner transitions.",

  communityLinks: {
    facebookGroup: "https://www.facebook.com/groups/1428401534785409/",
    eventsUrl: "https://www.biermanautism.com/resources/sensory-friendly-events/",
  },
};""",
    },
    "cranford": {
        "old_area": """    areaServed: [
      { type: "AdministrativeArea", name: "Union County, NJ" },
      { type: "AdministrativeArea", name: "Essex County, NJ" },
      { type: "City", name: "Cranford, NJ" },
      { type: "City", name: "Westfield, NJ" },
      { type: "City", name: "Clark, NJ" },
      { type: "City", name: "Scotch Plains, NJ" },
    ],
  },
};""",
        "new_area": """    // areaServed: Verified from biermanautism.com/location/cranford-nj/ — "Counties Served" section (May 2026)
    areaServed: [
      { type: "AdministrativeArea", name: "Union County, NJ" },
      { type: "AdministrativeArea", name: "Essex County, NJ" },
      { type: "AdministrativeArea", name: "Middlesex County, NJ" },
      { type: "AdministrativeArea", name: "Somerset County, NJ" },
      { type: "AdministrativeArea", name: "Morris County, NJ" },
      { type: "City", name: "Cranford, NJ" },
      { type: "City", name: "Westfield, NJ" },
      { type: "City", name: "Clark, NJ" },
      { type: "City", name: "Scotch Plains, NJ" },
      { type: "City", name: "Fanwood, NJ" },
      { type: "City", name: "Garwood, NJ" },
      { type: "City", name: "Kenilworth, NJ" },
      { type: "City", name: "Springfield, NJ" },
      { type: "City", name: "Mountainside, NJ" },
      { type: "City", name: "Union, NJ" },
      { type: "City", name: "Roselle Park, NJ" },
      { type: "City", name: "Linden, NJ" },
      { type: "City", name: "Elizabeth, NJ" },
      { type: "City", name: "Maplewood, NJ" },
      { type: "City", name: "South Orange, NJ" },
      { type: "City", name: "Millburn, NJ" },
      { type: "City", name: "Newark, NJ" },
      { type: "City", name: "Irvington, NJ" },
      { type: "City", name: "Livingston, NJ" },
      { type: "City", name: "Woodbridge, NJ" },
      { type: "City", name: "Iselin, NJ" },
      { type: "City", name: "Colonia, NJ" },
      { type: "City", name: "Edison, NJ" },
      { type: "City", name: "Metuchen, NJ" },
      { type: "City", name: "Carteret, NJ" },
      { type: "City", name: "Watchung, NJ" },
      { type: "City", name: "Warren, NJ" },
      { type: "City", name: "Green Brook, NJ" },
      { type: "City", name: "Bridgewater, NJ" },
      { type: "City", name: "Basking Ridge, NJ" },
      { type: "City", name: "Chatham, NJ" },
      { type: "City", name: "Madison, NJ" },
      { type: "City", name: "Florham Park, NJ" },
    ],
  },

  // ── Verified Local Trust Fields ──────────────────────────────────────────────
  // Source: biermanautism.com/location/cranford-nj/ (May 2026)

  serviceArea: [
    "Cranford", "Westfield", "Clark", "Scotch Plains", "Fanwood",
    "Garwood", "Kenilworth", "Springfield", "Mountainside", "Union",
    "Roselle Park", "Linden", "Elizabeth",
    "Maplewood", "South Orange", "Millburn", "Newark", "Irvington", "Livingston",
    "Woodbridge", "Iselin", "Colonia", "Edison", "Metuchen", "Carteret",
    "Watchung", "Warren", "Green Brook", "Bridgewater", "Basking Ridge",
    "Chatham", "Madison", "Florham Park",
  ],

  visitLogistics: {
    parking: "On-site parking",
    accessibility: "Wheelchair accessible",
    landmarks: "Located on Jackson Drive, accessible from Garden State Parkway, Route 22, and I-78",
  },

  schoolRelationships:
    "Works with Cranford Public Schools, Westfield, Clark, Scotch Plains-Fanwood, and Union area districts to support continuity of services.",

  communityLinks: {
    facebookGroup: "https://www.facebook.com/groups/1428401534785409/",
    eventsUrl: "https://www.biermanautism.com/resources/sensory-friendly-events/",
  },
};""",
    },
    "berkeley-heights": {
        "old_area": """    areaServed: [
      { type: "AdministrativeArea", name: "Union County, NJ" },
      { type: "AdministrativeArea", name: "Somerset County, NJ" },
      { type: "City", name: "Berkeley Heights, NJ" },
      { type: "City", name: "Summit, NJ" },
      { type: "City", name: "New Providence, NJ" },
      { type: "City", name: "Westfield, NJ" },
    ],
  },
};""",
        "new_area": """    // areaServed: Verified from biermanautism.com/location/berkeley-heights-nj/ — "Counties Served" section (May 2026)
    areaServed: [
      { type: "AdministrativeArea", name: "Union County, NJ" },
      { type: "AdministrativeArea", name: "Somerset County, NJ" },
      { type: "AdministrativeArea", name: "Morris County, NJ" },
      { type: "AdministrativeArea", name: "Essex County, NJ" },
      { type: "City", name: "Berkeley Heights, NJ" },
      { type: "City", name: "Summit, NJ" },
      { type: "City", name: "New Providence, NJ" },
      { type: "City", name: "Mountainside, NJ" },
      { type: "City", name: "Scotch Plains, NJ" },
      { type: "City", name: "Fanwood, NJ" },
      { type: "City", name: "Westfield, NJ" },
      { type: "City", name: "Watchung, NJ" },
      { type: "City", name: "Warren, NJ" },
      { type: "City", name: "Bridgewater, NJ" },
      { type: "City", name: "Bound Brook, NJ" },
      { type: "City", name: "Somerville, NJ" },
      { type: "City", name: "Florham Park, NJ" },
      { type: "City", name: "Morris Plains, NJ" },
      { type: "City", name: "Morristown, NJ" },
      { type: "City", name: "Millburn, NJ" },
      { type: "City", name: "Maplewood, NJ" },
      { type: "City", name: "South Orange, NJ" },
      { type: "City", name: "West Orange, NJ" },
    ],
  },

  // ── Verified Local Trust Fields ──────────────────────────────────────────────
  // Source: biermanautism.com/location/berkeley-heights-nj/ (May 2026)

  serviceArea: [
    "Berkeley Heights", "Summit", "New Providence", "Mountainside",
    "Scotch Plains", "Fanwood", "Westfield",
    "Watchung", "Warren", "Bridgewater", "Bound Brook", "Somerville",
    "Florham Park", "Morris Plains", "Morristown",
    "Millburn", "Maplewood", "South Orange", "West Orange",
  ],

  visitLogistics: {
    parking: "Free parking",
    accessibility: "Wheelchair accessible",
    landmarks: "Located on Springfield Ave",
  },

  schoolRelationships:
    "Works with Berkeley Heights Community Schools and surrounding area districts to support learner transitions.",

  communityLinks: {
    facebookGroup: "https://www.facebook.com/groups/1428401534785409/",
    eventsUrl: "https://www.biermanautism.com/resources/sensory-friendly-events/",
  },
};""",
    },
    "eatontown": {
        "old_area": """    areaServed: [
      { type: "AdministrativeArea", name: "Monmouth County, NJ" },
      { type: "AdministrativeArea", name: "Ocean County, NJ" },
      { type: "City", name: "Eatontown, NJ" },
      { type: "City", name: "Red Bank, NJ" },
      { type: "City", name: "Long Branch, NJ" },
      { type: "City", name: "Tinton Falls, NJ" },
    ],
  },
};""",
        "new_area": """    // areaServed: Verified from biermanautism.com/location/eatontown-nj/ — "Counties Served" section (May 2026)
    areaServed: [
      { type: "AdministrativeArea", name: "Monmouth County, NJ" },
      { type: "AdministrativeArea", name: "Middlesex County, NJ" },
      { type: "AdministrativeArea", name: "Ocean County, NJ" },
      { type: "AdministrativeArea", name: "Mercer County, NJ" },
      { type: "City", name: "Eatontown, NJ" },
      { type: "City", name: "Red Bank, NJ" },
      { type: "City", name: "Shrewsbury, NJ" },
      { type: "City", name: "Tinton Falls, NJ" },
      { type: "City", name: "Long Branch, NJ" },
      { type: "City", name: "Asbury Park, NJ" },
      { type: "City", name: "Neptune, NJ" },
      { type: "City", name: "Old Bridge, NJ" },
      { type: "City", name: "Sayreville, NJ" },
      { type: "City", name: "South Amboy, NJ" },
      { type: "City", name: "Perth Amboy, NJ" },
      { type: "City", name: "Edison, NJ" },
      { type: "City", name: "Lakewood, NJ" },
      { type: "City", name: "Toms River, NJ" },
      { type: "City", name: "Brick, NJ" },
      { type: "City", name: "Point Pleasant, NJ" },
      { type: "City", name: "Manasquan, NJ" },
      { type: "City", name: "Hamilton, NJ" },
      { type: "City", name: "Trenton, NJ" },
      { type: "City", name: "Princeton, NJ" },
      { type: "City", name: "Lawrence, NJ" },
      { type: "City", name: "Hopewell, NJ" },
    ],
  },

  // ── Verified Local Trust Fields ──────────────────────────────────────────────
  // Source: biermanautism.com/location/eatontown-nj/ (May 2026)

  serviceArea: [
    "Eatontown", "Red Bank", "Shrewsbury", "Tinton Falls", "Long Branch",
    "Asbury Park", "Neptune",
    "Old Bridge", "Sayreville", "South Amboy", "Perth Amboy", "Edison",
    "Lakewood", "Toms River", "Brick", "Point Pleasant", "Manasquan",
    "Hamilton", "Trenton", "Princeton", "Lawrence", "Hopewell",
  ],

  visitLogistics: {
    parking: "Free parking",
    accessibility: "Wheelchair accessible",
    landmarks: "Located on Christopher Way",
  },

  schoolRelationships:
    "Works with Eatontown Community Schools and surrounding area districts to support learner transitions.",

  communityLinks: {
    facebookGroup: "https://www.facebook.com/groups/1428401534785409/",
    eventsUrl: "https://www.biermanautism.com/resources/sensory-friendly-events/",
  },
};""",
    },
    "parsippany": {
        "old_area": """    areaServed: [
      { type: "AdministrativeArea", name: "Morris County, NJ" },
      { type: "AdministrativeArea", name: "Essex County, NJ" },
      { type: "City", name: "Parsippany, NJ" },
      { type: "City", name: "Morristown, NJ" },
      { type: "City", name: "Denville, NJ" },
      { type: "City", name: "Montville, NJ" },
    ],
  },
};""",
        "new_area": """    // areaServed: Verified from biermanautism.com/location/parsippany-nj/ — "Counties Served" section (May 2026)
    areaServed: [
      { type: "AdministrativeArea", name: "Morris County, NJ" },
      { type: "AdministrativeArea", name: "Essex County, NJ" },
      { type: "AdministrativeArea", name: "Passaic County, NJ" },
      { type: "AdministrativeArea", name: "Somerset County, NJ" },
      { type: "AdministrativeArea", name: "Union County, NJ" },
      { type: "City", name: "Parsippany, NJ" },
      { type: "City", name: "Morris Plains, NJ" },
      { type: "City", name: "Morristown, NJ" },
      { type: "City", name: "Hanover Township, NJ" },
      { type: "City", name: "East Hanover, NJ" },
      { type: "City", name: "Denville, NJ" },
      { type: "City", name: "Mountain Lakes, NJ" },
      { type: "City", name: "Boonton, NJ" },
      { type: "City", name: "Montville, NJ" },
      { type: "City", name: "Randolph, NJ" },
      { type: "City", name: "Roxbury, NJ" },
      { type: "City", name: "Florham Park, NJ" },
      { type: "City", name: "Madison, NJ" },
      { type: "City", name: "Chatham, NJ" },
      { type: "City", name: "Pequannock, NJ" },
      { type: "City", name: "Lincoln Park, NJ" },
      { type: "City", name: "Kinnelon, NJ" },
      { type: "City", name: "Livingston, NJ" },
      { type: "City", name: "West Orange, NJ" },
      { type: "City", name: "Roseland, NJ" },
      { type: "City", name: "Fairfield, NJ" },
      { type: "City", name: "Millburn, NJ" },
      { type: "City", name: "Caldwell, NJ" },
      { type: "City", name: "Verona, NJ" },
      { type: "City", name: "Wayne, NJ" },
      { type: "City", name: "Totowa, NJ" },
      { type: "City", name: "Little Falls, NJ" },
      { type: "City", name: "Clifton, NJ" },
      { type: "City", name: "Pompton Lakes, NJ" },
      { type: "City", name: "Basking Ridge, NJ" },
      { type: "City", name: "Bernardsville, NJ" },
      { type: "City", name: "Bridgewater, NJ" },
      { type: "City", name: "Summit, NJ" },
      { type: "City", name: "New Providence, NJ" },
      { type: "City", name: "Berkeley Heights, NJ" },
    ],
  },

  // ── Verified Local Trust Fields ──────────────────────────────────────────────
  // Source: biermanautism.com/location/parsippany-nj/ (May 2026)
  // Note: comingSoon = true — serviceArea populated for schema readiness only

  serviceArea: [
    "Parsippany", "Morris Plains", "Morristown", "Hanover Township",
    "East Hanover", "Denville", "Mountain Lakes", "Boonton", "Montville",
    "Randolph", "Roxbury", "Florham Park", "Madison", "Chatham",
    "Pequannock", "Lincoln Park", "Kinnelon",
    "Livingston", "West Orange", "Roseland", "Fairfield", "Millburn",
    "Caldwell", "Verona",
    "Wayne", "Totowa", "Little Falls", "Clifton", "Pompton Lakes",
    "Basking Ridge", "Bernardsville", "Bridgewater",
    "Summit", "New Providence", "Berkeley Heights",
  ],

  visitLogistics: {
    parking: "On-site parking",
    accessibility: "Wheelchair accessible",
    landmarks: "Located directly off US-46, minutes from I-80 and I-287",
  },

  schoolRelationships:
    "Plans to work with Parsippany-Troy Hills, Morris Plains, Hanover Township, East Hanover, Montville, Denville, and Morristown area districts to support continuity of services.",

  communityLinks: {
    facebookGroup: "https://www.facebook.com/groups/1428401534785409/",
    eventsUrl: "https://www.biermanautism.com/resources/sensory-friendly-events/",
  },
};""",
    },
}

BASE = "/home/ubuntu/bierman-proof-layer/client/src/locations/data"

for slug, data in LOCATIONS.items():
    path = f"{BASE}/{slug}.ts"
    with open(path, "r") as f:
        content = f.read()
    
    if data["old_area"] not in content:
        print(f"WARNING: Could not find expected areaServed block in {slug}.ts — skipping")
        continue
    
    new_content = content.replace(data["old_area"], data["new_area"])
    with open(path, "w") as f:
        f.write(new_content)
    print(f"✓ Updated {slug}.ts")

print("\nDone.")
