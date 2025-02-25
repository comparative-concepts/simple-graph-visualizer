
var DATA = {};

// The version is shown on the webpage, and is used to make sure that URLs point to the right database version
// You need to update the version whenever you add or remove nodes, or change their IDs
DATA.version = '0.001';

// This is a list of objects {id, name, type, info}, where:
//  - id is a unique identifier (used by edges below)
//  - name is the name that is shown to the user
//  - type is a node type
//  - link (optional) is an URL to more information
//  - info (optional) is extra information that is shown when hovering over a node
DATA.nodes = [
   // The hierarchy of entities
   {id: "entity",            name: "entity",           type: "entity",    link: "Entity",           info: "Entity (<em>Swedish: entitet</em>): something that exists as itself."},
   {id: "physical-object",   name: "physical object",  type: "entity",    link: "Physical_object",  info: "Physical object (<em>Swedish: objekt</em>), as opposed to abstract object and mental object."},
   {id: "artificial-object", name: "man-made object",  type: "entity",    link: "Artificiality",    info: "Man-made object (<em>Swedish: konstgjort föremål</em>), or artificial object."},
   {id: "natural-object",    name: "natural object",   type: "entity",    /* no link available */   info: "Natural object (<em>Swedish: naturligt föremål</em>): an object not man-made."},
   // Specific types of objects
   {id: "train",             name: "train",            type: "entity",    link: "Train",            info: "Train (<em>Swedish: tåg</em>). Speed: 300-350 km/h, size: 5500 m."},
   {id: "curling-stone",     name: "curling stone",    type: "entity",    link: "Curling_stone",    info: "Curling stone (<em>Swedish: curlingsten</em>). Speed: 10 km/h, size: 30 cm."},
   {id: "comb",              name: "comb",             type: "entity",    link: "Comb",             info: "Comb (<em>Swedish: kam</em>). Speed: N/A. Size: 10-20 cm."},
   {id: "asteroid",          name: "asteroid",         type: "entity",    link: "Asteroid",         info: "Asteroid (<em>Swedish: asteroid</em>). Speed: 65,000 km/h, size: 1-1,000 km."},
   {id: "sand-grain",        name: "grain of sand",    type: "entity",    link: "Sand",             info: "Grain of sand (<em>Swedish: sandkorn</em>). Speed: N/A. Size: 0.1-2 mm."},
   {id: "light",             name: "light",            type: "entity",    link: "Light",            info: "Light (<em>Swedish: ljus</em>). Speed: 1,000,000,000 km/h, size: N/A."},
   // The animal hierarchy
   {id: "animal",            name: "animal",           type: "animal",    link: "Animal",           info: "Animal (<em>Swedish: djur</em>)."},
   {id: "bird",              name: "bird",             type: "animal",    link: "Bird",             info: "Bird (<em>Swedish: fågel</em>)."},
   {id: "mammal",            name: "mammal",           type: "animal",    link: "Mammal",           info: "Mammal (<em>Swedish: däggdjur</em>)."},
   {id: "fish",              name: "fish",             type: "animal",    link: "Fish",             info: "Fish (<em>Swedish: fisk</em>)."},
   // Specific animal species
   {id: "peregrine-falcon",  name: "peregrine falcon", type: "animal",    link: "Peregrine_falcon", info: "Peregrine falcon (<em>Swedish: pilgrimsfalk</em>). Flying speed: 300-320 km/h, size: 40-60 cm long (75-120 cm wingspan)."},
   {id: "common-swift",      name: "swift",            type: "animal",    link: "Common_swift",     info: "Swift (<em>Swedish: tornseglare</em>). Flying speed: 150-160 km/h, size: 16-17 cm long (38-40 cm wingspan)."},
   {id: "common-ostrich",    name: "ostrich",          type: "animal",    link: "Common_ostrich",   info: "Ostrich (<em>Swedish: struts</em>). Running speed: 90-100 km/h, size: 1.7-2.7 m tall."},
   {id: "swordfish",         name: "swordfish",        type: "animal",    link: "Swordfish",        info: "Swordfish (<em>Swedish: svärdfisk</em>). Swimming speed: 35-50 km/h, size: 3-4 m long."},
   {id: "greenland-shark",   name: "greenland shark",  type: "animal",    link: "Greenland_shark",  info: "Greenland shark (<em>Swedish: håkäring</em>). Swimming speed: 3 km/h, size: 4-6 m long."},
   {id: "stickleback",       name: "stickleback",      type: "animal",    link: "Stickleback",      info: "Stickleback (<em>Swedish: spigg</em>). Swimming speed: (no data). Size: 5-10 cm long."},
   {id: "sloth",             name: "sloth",            type: "animal",    link: "Sloth",            info: "Sloth (<em>Swedish: sengångare</em>). Speed: 4 meters/min = 0.25 km/h, size: 60-80 cm."},
   {id: "human",             name: "human",            type: "animal",    link: "Human",            info: "Human (<em>Swedish: människa</em>). Running speed: 25-35 km/h, size: 160-180 cm."},
   {id: "cheetah",           name: "cheetah",          type: "animal",    link: "Cheetah",          info: "Cheetah (<em>Swedish: gepard</em>). Running speed: 90-110 km/h, size: 65-95 cm."},
   {id: "platypus",          name: "platypus",         type: "animal",    link: "Platypus",         info: "Platypus (<em>Swedish: näbbdjur</em>). Swimming speed: 3 km/h, size: 40-50 cm."},
   // Animal parts
   {id: "wing",              name: "wing",             type: "bodypart",  link: "Wing",             info: "Wing (<em>Swedish: vinge</em>)."},
   {id: "leg",               name: "leg",              type: "bodypart",  link: "Leg",              info: "Leg (<em>Swedish: ben</em>)."},
   {id: "arm",               name: "arm",              type: "bodypart",  link: "Arm",              info: "Arm (<em>Swedish: arm</em>)."},
   {id: "beak",              name: "beak",             type: "bodypart",  link: "Beak",             info: "Beak (<em>Swedish: näbb</em>)."},
   {id: "feather",           name: "feather",          type: "bodypart",  link: "Feather",          info: "Feather (<em>Swedish: fjäder</em>)."},
   {id: "fin",               name: "fin",              type: "bodypart",  link: "Fish_fin",         info: "Fin (<em>Swedish: fena</em>)."},
   {id: "sword",             name: "sword",            type: "bodypart",  link: "Sword",            info: "Svärd (<em>Swedish: sword</em>)."},
];

// Nodes is a list of objects {start, end, rel}, where:
//  - start, end are node IDs
//  - rel is a name of a relation
DATA.edges = [
   // The taxonomy of abstract entities
   {start: "physical-object",   end: "entity",            rel: "SubtypeOf"},
   {start: "artificial-object", end: "physical-object",   rel: "SubtypeOf"},
   {start: "natural-object",    end: "physical-object",   rel: "SubtypeOf"},
   {start: "animal",            end: "physical-object",   rel: "SubtypeOf"},
   {start: "bird",              end: "animal",            rel: "SubtypeOf"},
   {start: "mammal",            end: "animal",            rel: "SubtypeOf"},
   {start: "fish",              end: "animal",            rel: "SubtypeOf"},
   // The taxonomy of specific entities
   {start: "train",             end: "artificial-object", rel: "SubtypeOf"},
   {start: "curling-stone",     end: "artificial-object", rel: "SubtypeOf"},
   {start: "comb",              end: "artificial-object", rel: "SubtypeOf"},
   {start: "asteroid",          end: "natural-object",    rel: "SubtypeOf"},
   {start: "sand-grain",        end: "natural-object",    rel: "SubtypeOf"},
   {start: "light",             end: "entity",            rel: "SubtypeOf"},
   // The taxonomy of animal species
   {start: "peregrine-falcon",  end: "bird",              rel: "SubtypeOf"},
   {start: "common-swift",      end: "bird",              rel: "SubtypeOf"},
   {start: "common-ostrich",    end: "bird",              rel: "SubtypeOf"},
   {start: "swordfish",         end: "fish",              rel: "SubtypeOf"},
   {start: "greenland-shark",   end: "fish",              rel: "SubtypeOf"},
   {start: "stickleback",       end: "fish",              rel: "SubtypeOf"},
   {start: "sloth",             end: "mammal",            rel: "SubtypeOf"},
   {start: "human",             end: "mammal",            rel: "SubtypeOf"},
   {start: "cheetah",           end: "mammal",            rel: "SubtypeOf"},
   {start: "platypus",           end: "mammal",            rel: "SubtypeOf"},
   // Body parts
   {start: "cheetah",           end: "leg",            rel: "HasBodyPart"},
   {start: "human",             end: "leg",            rel: "HasBodyPart"},
   {start: "human",             end: "arm",            rel: "HasBodyPart"},
   {start: "sloth",             end: "leg",            rel: "HasBodyPart"},
   {start: "sloth",             end: "arm",            rel: "HasBodyPart"},
   {start: "platypus",          end: "beak",           rel: "HasBodyPart"},
   {start: "platypus",          end: "leg",            rel: "HasBodyPart"},
   {start: "stickleback",       end: "fin",            rel: "HasBodyPart"},
   {start: "greenland-shark",   end: "fin",            rel: "HasBodyPart"},
   {start: "swordfish",         end: "fin",            rel: "HasBodyPart"},
   {start: "swordfish",         end: "sword",          rel: "HasBodyPart"},
   {start: "common-ostrich",    end: "feather",        rel: "HasBodyPart"},
   {start: "common-ostrich",    end: "leg",            rel: "HasBodyPart"},
   {start: "common-ostrich",    end: "beak",           rel: "HasBodyPart"},
   {start: "common-swift",      end: "feather",        rel: "HasBodyPart"},
   {start: "common-swift",      end: "leg",            rel: "HasBodyPart"},
   {start: "common-swift",      end: "beak",           rel: "HasBodyPart"},
   {start: "common-swift",      end: "wing",           rel: "HasBodyPart"},
   {start: "peregrine-falcon",  end: "feather",        rel: "HasBodyPart"},
   {start: "peregrine-falcon",  end: "leg",            rel: "HasBodyPart"},
   {start: "peregrine-falcon",  end: "beak",           rel: "HasBodyPart"},
   {start: "peregrine-falcon",  end: "wing",           rel: "HasBodyPart"},
   // Speed hierarchy
   {start: "light",             end: "asteroid",          rel: "FasterThan"},
   {start: "asteroid",          end: "train",             rel: "FasterThan"},
   {start: "asteroid",          end: "peregrine-falcon",  rel: "FasterThan"},
   {start: "train",             end: "common-swift",      rel: "FasterThan"},
   {start: "train",             end: "curling-stone",      rel: "FasterThan"},
   {start: "peregrine-falcon",  end: "common-swift",      rel: "FasterThan"},
   {start: "common-swift",      end: "common-ostrich",    rel: "FasterThan"},
   {start: "common-swift",      end: "cheetah",           rel: "FasterThan"},
   {start: "common-ostrich",    end: "swordfish",         rel: "FasterThan"},
   {start: "cheetah",           end: "swordfish",         rel: "FasterThan"},
   {start: "swordfish",         end: "human",             rel: "FasterThan"},
   {start: "human",             end: "curling-stone",     rel: "FasterThan"},
   {start: "human",             end: "greenland-shark",   rel: "FasterThan"},
   {start: "curling-stone",     end: "greenland-shark",   rel: "FasterThan"},
   {start: "human",             end: "platypus",          rel: "FasterThan"},
   {start: "curling-stone",     end: "platypus",          rel: "FasterThan"},
   {start: "greenland-shark",   end: "sloth",             rel: "FasterThan"},
   {start: "platypus",          end: "sloth",             rel: "FasterThan"},
   // Size hierarchy
   {start: "asteroid",          end: "train",             rel: "LargerThan"},
   {start: "train",             end: "greenland-shark",   rel: "LargerThan"},
   {start: "train",             end: "curling-stone",     rel: "LargerThan"},
   {start: "greenland-shark",   end: "swordfish",         rel: "LargerThan"},
   {start: "swordfish",         end: "common-ostrich",    rel: "LargerThan"},
   {start: "common-ostrich",    end: "human",             rel: "LargerThan"},
   {start: "human",             end: "cheetah",           rel: "LargerThan"},
   {start: "cheetah",           end: "sloth",             rel: "LargerThan"},
   {start: "sloth",             end: "peregrine-falcon",  rel: "LargerThan"},
   {start: "sloth",             end: "platypus",          rel: "LargerThan"},
   {start: "peregrine-falcon",  end: "curling-stone",     rel: "LargerThan"},
   {start: "peregrine-falcon",  end: "common-swift",      rel: "LargerThan"},
   {start: "platypus",          end: "curling-stone",     rel: "LargerThan"},
   {start: "platypus",          end: "common-swift",      rel: "LargerThan"},
   {start: "curling-stone",     end: "comb",              rel: "LargerThan"},
   {start: "curling-stone",     end: "common-swift",      rel: "LargerThan"},
   {start: "comb",              end: "stickleback",       rel: "LargerThan"},
   {start: "comb",              end: "sand-grain",        rel: "LargerThan"},
   {start: "common-swift",      end: "stickleback",       rel: "LargerThan"},
   {start: "stickleback",       end: "sand-grain",        rel: "LargerThan"},
];
