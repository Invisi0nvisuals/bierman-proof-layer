"""
Verbatim data alignment: sync schoolRelationships and visitLogistics
to exact production page strings for all 8 NJ location data files.

Source: biermanautism.com production pages — "Why Choose" section (May 2026)
Verified via direct browser scrape, May 11 2026.

schoolRelationships verbatim strings:
  Ramsey:           "Working relationships with Ramsey Community Schools and area districts"
  Piscataway:       "Working relationships with Piscataway Community Schools and area districts"
  West Orange:      "Working relationships with West Orange Community Schools and area districts"
  Princeton:        "Working relationships with Princeton Public Schools and area districts"
  Cranford:         "Working relationships with Cranford Public Schools and area districts"
  Berkeley Heights: "Working relationships with Berkeley Heights Public Schools and area districts"
  Eatontown:        "Working relationships with Eatontown Public Schools and area districts"
  Parsippany:       undefined (Coming Soon — not yet on production page)

visitLogistics verbatim strings (from "Accessible Location" bullet):
  All 7 open locations: "Free parking, wheelchair accessible, near major landmarks"
  Parsippany: "Directly off US-46 and minutes from I-80 and I-287" (no parking/accessibility listed)
"""

import re

BASE = "/home/ubuntu/bierman-proof-layer/client/src/locations/data"

UPDATES = {
    "ramsey": {
        "school_old": 'schoolRelationships:\n    "Works with Ramsey Community Schools and surrounding area districts to support learner transitions.",',
        "school_new": '// schoolRelationships: Verbatim from biermanautism.com/location/ramsey/ — "Why Choose" section (May 2026)\n  schoolRelationships:\n    "Working relationships with Ramsey Community Schools and area districts",',
        "logistics_old": '  visitLogistics: {\n    parking: "Free parking",\n    accessibility: "Wheelchair accessible",\n    landmarks: "Located off N Franklin Turnpike",\n  },',
        "logistics_new": '  // visitLogistics: Verbatim from biermanautism.com/location/ramsey/ — "Accessible Location" bullet (May 2026)\n  visitLogistics: {\n    parking: "Free parking",\n    accessibility: "Wheelchair accessible",\n    landmarks: "Near major landmarks",\n  },',
    },
    "piscataway": {
        "school_old": 'schoolRelationships:\n    "Works with Piscataway Community Schools and surrounding area districts to support learner transitions.",',
        "school_new": '// schoolRelationships: Verbatim from biermanautism.com/location/piscataway/ — "Why Choose" section (May 2026)\n  schoolRelationships:\n    "Working relationships with Piscataway Community Schools and area districts",',
        "logistics_old": '  visitLogistics: {\n    parking: "Free parking",\n    accessibility: "Wheelchair accessible",\n    landmarks: "Located on Centennial Ave",\n  },',
        "logistics_new": '  // visitLogistics: Verbatim from biermanautism.com/location/piscataway/ — "Accessible Location" bullet (May 2026)\n  visitLogistics: {\n    parking: "Free parking",\n    accessibility: "Wheelchair accessible",\n    landmarks: "Near major landmarks",\n  },',
    },
    "west-orange": {
        "school_old": 'schoolRelationships:\n    "Works with West Orange Community Schools and surrounding area districts to support learner transitions.",',
        "school_new": '// schoolRelationships: Verbatim from biermanautism.com/location/west-orange-nj/ — "Why Choose" section (May 2026)\n  schoolRelationships:\n    "Working relationships with West Orange Community Schools and area districts",',
        "logistics_old": '  visitLogistics: {\n    parking: "Free parking",\n    accessibility: "Wheelchair accessible",\n    landmarks: "Located on Executive Drive",\n  },',
        "logistics_new": '  // visitLogistics: Verbatim from biermanautism.com/location/west-orange-nj/ — "Accessible Location" bullet (May 2026)\n  visitLogistics: {\n    parking: "Free parking",\n    accessibility: "Wheelchair accessible",\n    landmarks: "Near major landmarks",\n  },',
    },
    "princeton": {
        "school_old": 'schoolRelationships:\n    "Works with Princeton Community Schools and surrounding area districts to support learner transitions.",',
        "school_new": '// schoolRelationships: Verbatim from biermanautism.com/location/princeton-nj/ — "Why Choose" section (May 2026)\n  schoolRelationships:\n    "Working relationships with Princeton Public Schools and area districts",',
        "logistics_old": '  visitLogistics: {\n    parking: "Free parking",\n    accessibility: "Wheelchair accessible",\n    landmarks: "Located on Alexander Rd",\n  },',
        "logistics_new": '  // visitLogistics: Verbatim from biermanautism.com/location/princeton-nj/ — "Accessible Location" bullet (May 2026)\n  visitLogistics: {\n    parking: "Free parking",\n    accessibility: "Wheelchair accessible",\n    landmarks: "Near major landmarks",\n  },',
    },
    "cranford": {
        "school_old": 'schoolRelationships:\n    "Works with Cranford Public Schools, Westfield, Clark, Scotch Plains-Fanwood, and Union area districts to support continuity of services.",',
        "school_new": '// schoolRelationships: Verbatim from biermanautism.com/location/cranford-nj/ — "Why Choose" section (May 2026)\n  schoolRelationships:\n    "Working relationships with Cranford Public Schools and area districts",',
        "logistics_old": '  visitLogistics: {\n    parking: "On-site parking",\n    accessibility: "Wheelchair accessible",\n    landmarks: "Located on Jackson Drive, accessible from Garden State Parkway, Route 22, and I-78",\n  },',
        "logistics_new": '  // visitLogistics: Verbatim from biermanautism.com/location/cranford-nj/ — "Accessible Location" bullet (May 2026)\n  visitLogistics: {\n    parking: "Free parking",\n    accessibility: "Wheelchair accessible",\n    landmarks: "Near major landmarks",\n  },',
    },
    "berkeley-heights": {
        "school_old": 'schoolRelationships:\n    "Works with Berkeley Heights Community Schools and surrounding area districts to support learner transitions.",',
        "school_new": '// schoolRelationships: Verbatim from biermanautism.com/location/berkeley-heights-nj/ — "Why Choose" section (May 2026)\n  schoolRelationships:\n    "Working relationships with Berkeley Heights Public Schools and area districts",',
        "logistics_old": '  visitLogistics: {\n    parking: "Free parking",\n    accessibility: "Wheelchair accessible",\n    landmarks: "Located on Springfield Ave",\n  },',
        "logistics_new": '  // visitLogistics: Verbatim from biermanautism.com/location/berkeley-heights-nj/ — "Accessible Location" bullet (May 2026)\n  visitLogistics: {\n    parking: "Free parking",\n    accessibility: "Wheelchair accessible",\n    landmarks: "Near major landmarks",\n  },',
    },
    "eatontown": {
        "school_old": 'schoolRelationships:\n    "Works with Eatontown Community Schools and surrounding area districts to support learner transitions.",',
        "school_new": '// schoolRelationships: Verbatim from biermanautism.com/location/eatontown-nj/ — "Why Choose" section (May 2026)\n  schoolRelationships:\n    "Working relationships with Eatontown Public Schools and area districts",',
        "logistics_old": '  visitLogistics: {\n    parking: "Free parking",\n    accessibility: "Wheelchair accessible",\n    landmarks: "Located on Christopher Way",\n  },',
        "logistics_new": '  // visitLogistics: Verbatim from biermanautism.com/location/eatontown-nj/ — "Accessible Location" bullet (May 2026)\n  visitLogistics: {\n    parking: "Free parking",\n    accessibility: "Wheelchair accessible",\n    landmarks: "Near major landmarks",\n  },',
    },
    "parsippany": {
        "school_old": 'schoolRelationships:\n    "Plans to work with Parsippany-Troy Hills, Morris Plains, Hanover Township, East Hanover, Montville, Denville, and Morristown area districts to support continuity of services.",',
        "school_new": '// schoolRelationships: undefined — Coming Soon page does not yet have school district section (May 2026)\n  // schoolRelationships: undefined,',
        "logistics_old": '  visitLogistics: {\n    parking: "On-site parking",\n    accessibility: "Wheelchair accessible",\n    landmarks: "Located directly off US-46, minutes from I-80 and I-287",\n  },',
        "logistics_new": '  // visitLogistics: Verbatim from biermanautism.com/location/parsippany-nj/ — "Accessible Location" bullet (May 2026)\n  // Note: Coming Soon — no parking/accessibility listed yet; only highway access confirmed\n  visitLogistics: {\n    landmarks: "Directly off US-46 and minutes from I-80 and I-287",\n  },',
    },
}

for slug, changes in UPDATES.items():
    path = f"{BASE}/{slug}.ts"
    with open(path, "r") as f:
        content = f.read()

    updated = content

    # Update schoolRelationships
    if changes["school_old"] in updated:
        updated = updated.replace(changes["school_old"], changes["school_new"])
        school_status = "✓ school updated"
    else:
        school_status = "⚠ school string not found — check manually"

    # Update visitLogistics
    if changes["logistics_old"] in updated:
        updated = updated.replace(changes["logistics_old"], changes["logistics_new"])
        logistics_status = "✓ logistics updated"
    else:
        logistics_status = "⚠ logistics string not found — check manually"

    with open(path, "w") as f:
        f.write(updated)

    print(f"{slug}: {school_status} | {logistics_status}")

print("\nDone.")
