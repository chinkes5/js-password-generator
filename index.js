let twoLetter = ["AA", "AB", "AD", "AE", "AG", "AH", "AI", "AL", "AM", "AN", "AR", "AS", "AT", "AW", "AX", "AY", "BA", "BE", "BI", "BO", "BY", "DE", "DO", "ED", "EF", "EH", "EL", "EM", "EN", "ER", "ES", "ET", "EX", "FA", "FE", "FY", "GO", "HA", "HE", "HI", "HM", "HO", "ID", "IF", "IN", "IS", "IT", "JO", "KA", "KI", "LA", "LI", "LO", "MA", "ME", "MI", "MM", "MO", "MU", "MY", "NA", "NE", "NO", "NU", "OD", "OE", "OF", "OH", "OI", "OM", "ON", "OP", "OR", "OS", "OW", "OX", "OY", "PA", "PE", "PI", "PO", "QI", "RE", "SH", "SI", "SO", "TA", "TI", "TO", "UH", "UM", "UN", "UP", "US", "UT", "WE", "WO", "XI", "XU", "YA", "YE", "YO", "ZA", "ZO"];
let threeLetter = ["ace", "add", "aha", "aid", "ail", "aim", "air", "ale", "all", "and", "any", "are", "arm", "art", "awl", "aye", "bad", "bag", "bah", "bam", "ban", "bap", "bar", "bat", "bay", "bed", "bee", "bet", "bib", "bid", "big", "bin", "bit", "bod", "bog", "boo", "bop", "bot", "bow", "box", "boy", "brr", "bug", "bum", "bun", "but", "buy", "bye", "cab", "cam", "can", "cap", "car", "cat", "caw", "cay", "cod", "cog", "con", "coo", "cop", "cot", "cow", "coy", "cry", "cub", "cup", "cut", "dab", "dad", "dag", "dam", "day", "den", "dew", "did", "dig", "dim", "din", "dip", "doe", "dog", "dot", "dry", "dub", "dug", "dye", "ear", "eat", "eel", "egg", "ego", "ehh", "elf", "elm", "emu", "end", "era", "eve", "eye", "fab", "fad", "fam", "fan", "far", "fat", "fed", "fib", "fig", "fin", "fit", "foe", "fog", "for", "fun", "gag", "gah", "gay", "gee", "gem", "get", "gin", "git", "god", "got", "grr", "gum", "gun", "gut", "gym", "had", "hag", "hah", "ham", "has", "hat", "hay", "heh", "hem", "hen", "her", "hey", "him", "his", "hit", "hmm", "hoe", "hog", "hop", "hot", "how", "hug", "huh", "hum", "hut", "ice", "ilk", "ill", "ink", "inn", "ion", "ire", "ivy", "jab", "jam", "jar", "jaw", "jet", "jib", "jig", "jog", "jot", "jug", "kid", "kit", "lab", "lad", "lag", "lap", "law", "lax", "lay", "led", "lee", "leg", "let", "lid", "lie", "lip", "log", "lop", "lot", "lox", "lug", "lye", "mad", "mag", "man", "mar", "mat", "maw", "max", "med", "men", "met", "mew", "mmm", "mod", "moo", "mop", "mow", "mug", "nab", "nag", "nah", "nap", "naw", "nay", "net", "new", "nip", "nod", "nor", "not", "now", "nub", "nut", "oak", "oar", "oat", "odd", "off", "oil", "old", "oof", "oop", "ore", "our", "out", "owl", "pal", "pan", "pap", "pat", "paw", "pay", "pea", "peg", "pen", "pet", "pew", "pie", "pig", "pin", "pip", "pit", "pod", "poi", "pop", "pot", "pow", "pox", "pry", "pub", "pun", "pup", "pus", "rad", "rag", "ram", "ran", "rap", "rat", "raw", "ray", "red", "rib", "rig", "rip", "rod", "roe", "rot", "row", "rub", "rug", "rum", "run", "rut", "rye", "sag", "sap", "sat", "sax", "say", "sea", "see", "set", "sew", "she", "shy", "sib", "sin", "sip", "sit", "son", "sop", "sow", "soy", "sub", "sun", "sup", "tab", "tad", "tag", "tan", "tap", "tar", "tat", "tax", "tea", "tee", "ten", "the", "tie", "tin", "tip", "toe", "ton", "too", "top", "tot", "tow", "toy", "try", "tub", "tug", "tum", "ugh", "urn", "use", "vat", "vid", "wag", "war", "was", "way", "web", "wed", "wet", "why", "wig", "win", "wit", "won", "wow", "wry", "yap", "yay", "yea", "yen", "yep", "yet", "yin", "you", "yum", "yup", "zip", "zoo"];
let fourLetter = ["able", "ably", "afar", "ahem", "ahoy", "ajax", "alas", "amen", "amid", "anew", "anti", "apud", "area", "army", "atop", "away", "baby", "back", "ball", "band", "bang", "bank", "bare", "base", "bass", "bear", "beat", "bill", "blah", "blow", "blue", "body", "bold", "book", "both", "bout", "burn", "busy", "call", "calm", "card", "care", "case", "cash", "cast", "ciao", "city", "club", "cold", "come", "cook", "cool", "cope", "cost", "crud", "damn", "damp", "dare", "dark", "darn", "date", "dead", "deaf", "deal", "dear", "deep", "deny", "door", "down", "draw", "drop", "dual", "dull", "duly", "dumb", "duty", "earn", "east", "easy", "edge", "egad", "eina", "else", "enuf", "ergo", "even", "ever", "evil", "face", "fact", "fail", "fair", "fall", "farm", "fast", "fear", "feel", "file", "fill", "film", "find", "fine", "fire", "firm", "fish", "flat", "flip", "fond", "food", "foot", "fore", "form", "foul", "free", "from", "full", "fund", "gain", "game", "girl", "give", "glad", "goal", "gold", "good", "gosh", "grey", "grim", "grow", "hair", "half", "hall", "hand", "hang", "hard", "hate", "have", "head", "hear", "heck", "hell", "help", "here", "hern", "hers", "hide", "high", "hill", "hist", "hiya", "hold", "holy", "home", "honk", "hope", "hour", "huge", "hunh", "hurt", "idea", "idly", "into", "jack", "jeez", "jinx", "john", "join", "jump", "just", "keen", "keep", "kill", "kind", "king", "know", "lack", "lady", "land", "last", "late", "lazy", "lead", "lend", "lest", "life", "lift", "like", "line", "link", "list", "live", "lone", "long", "look", "lord", "lose", "loss", "loud", "love", "main", "make", "male", "mang", "many", "mark", "mary", "mass", "mean", "meet", "meow", "mere", "mild", "mind", "mine", "miss", "move", "much", "must", "nada", "name", "near", "neat", "need", "news", "next", "nice", "nigh", "nome", "none", "note", "nowt", "nyet", "okay", "once", "only", "onto", "oops", "open", "oral", "ouch", "ours", "outa", "over", "page", "pain", "pair", "pale", "park", "part", "pass", "past", "path", "paul", "phew", "pick", "pink", "plan", "play", "plus", "poof", "pooh", "poor", "post", "pray", "pugh", "pull", "pure", "push", "race", "rain", "rare", "rate", "read", "real", "rear", "rely", "rest", "rich", "ride", "ring", "rise", "risk", "road", "rock", "role", "roll", "room", "rude", "rule", "safe", "sale", "same", "save", "seat", "seek", "seem", "self", "sell", "send", "shed", "shoo", "shop", "show", "shut", "sick", "side", "sign", "sing", "site", "sith", "size", "skin", "slim", "slip", "slow", "snap", "soft", "sole", "solo", "some", "soon", "sore", "sort", "star", "stay", "step", "stop", "such", "suit", "sure", "take", "talk", "tall", "task", "team", "tell", "tend", "term", "test", "text", "than", "that", "thee", "them", "then", "they", "thin", "this", "thon", "thor", "thou", "thru", "thus", "tidy", "till", "time", "tiny", "tone", "tory", "tour", "town", "tree", "true", "turn", "type", "ugly", "unit", "unto", "upon", "urgh", "user", "vain", "vary", "vast", "very", "vice", "view", "vote", "wait", "wake", "walk", "wall", "waly", "want", "warm", "warn", "wary", "wash", "weak", "wear", "week", "west", "wham", "what", "when", "whiz", "whoa", "whom", "wide", "wife", "wild", "will", "wind", "wine", "wise", "wish", "with", "wood", "word", "work", "year", "yere", "your", "yuck", "zero"];
let fiveLetter = ["about", "above", "abuse", "actor", "acute", "admit", "adopt", "adult", "after", "again", "agent", "agree", "ahead", "alarm", "album", "alert", "alike", "alive", "allow", "alone", "along", "alter", "among", "anger", "Angle", "angry", "apart", "apple", "apply", "arena", "argue", "arise", "array", "aside", "asset", "audio", "audit", "avoid", "award", "aware", "badly", "baker", "bases", "basic", "basis", "beach", "began", "begin", "begun", "being", "below", "bench", "billy", "birth", "black", "blame", "blind", "block", "blood", "board", "boost", "booth", "bound", "brain", "brand", "bread", "break", "breed", "brief", "bring", "broad", "broke", "brown", "build", "built", "buyer", "cable", "calif", "carry", "catch", "cause", "chain", "chair", "chart", "chase", "cheap", "check", "chest", "chief", "child", "china", "chose", "civil", "claim", "class", "clean", "clear", "click", "clock", "close", "coach", "coast", "could", "count", "court", "cover", "craft", "crash", "cream", "crime", "cross", "crowd", "crown", "curve", "cycle", "daily", "dance", "dated", "dealt", "death", "debut", "delay", "depth", "doing", "doubt", "dozen", "draft", "drama", "drawn", "dream", "dress", "drill", "drink", "drive", "drove", "dying", "eager", "early", "earth", "eight", "elite", "empty", "enemy", "enjoy", "enter", "entry", "equal", "error", "event", "every", "exact", "exist", "extra", "faith", "false", "fault", "fiber", "field", "fifth", "fifty", "fight", "final", "first", "fixed", "flash", "fleet", "floor", "fluid", "focus", "force", "forth", "forty", "forum", "found", "frame", "frank", "fraud", "fresh", "front", "fruit", "fully", "funny", "giant", "given", "glass", "globe", "going", "grace", "grade", "grand", "grant", "grass", "great", "green", "gross", "group", "grown", "guard", "guess", "guest", "guide", "happy", "harry", "heart", "heavy", "hence", "henry", "horse", "hotel", "house", "human", "ideal", "image", "index", "inner", "input", "issue", "japan", "jimmy", "joint", "jones", "judge", "known", "label", "large", "laser", "later", "laugh", "layer", "learn", "lease", "least", "leave", "legal", "level", "lewis", "light", "limit", "links", "lives", "local", "logic", "loose", "lower", "lucky", "lunch", "lying", "magic", "major", "maker", "march", "maria", "match", "maybe", "mayor", "meant", "media", "metal", "might", "minor", "minus", "mixed", "model", "money", "month", "moral", "motor", "mount", "mouse", "mouth", "movie", "music", "needs", "never", "newly", "night", "noise", "north", "noted", "novel", "nurse", "occur", "ocean", "offer", "often", "order", "other", "ought", "paint", "panel", "paper", "party", "peace", "peter", "phase", "phone", "photo", "piece", "pilot", "pitch", "place", "plain", "plane", "plant", "plate", "point", "pound", "power", "press", "price", "pride", "prime", "print", "prior", "prize", "proof", "proud", "prove", "queen", "quick", "quiet", "quite", "radio", "raise", "range", "rapid", "ratio", "reach", "ready", "refer", "right", "rival", "river", "robin", "roger", "roman", "rough", "round", "route", "royal", "rural", "scale", "scene", "scope", "score", "sense", "serve", "seven", "shall", "shape", "share", "sharp", "sheet", "shelf", "shell", "shift", "shirt", "shock", "shoot", "short", "shown", "sight", "since", "sixth", "sixty", "sized", "skill", "sleep", "slide", "small", "smart", "smile", "smith", "smoke", "solid", "solve", "sorry", "sound", "south", "space", "spare", "speak", "speed", "spend", "spent", "split", "spoke", "sport", "staff", "stage", "stake", "stand", "start", "state", "steam", "steel", "stick", "still", "stock", "stone", "stood", "store", "storm", "story", "strip", "stuck", "study", "stuff", "style", "sugar", "suite", "super", "sweet", "table", "taken", "taste", "taxes", "teach", "teeth", "terry", "texas", "thank", "theft", "their", "theme", "there", "these", "thick", "thing", "think", "third", "those", "three", "threw", "throw", "tight", "times", "tired", "title", "today", "topic", "total", "touch", "tough", "tower", "track", "trade", "train", "treat", "trend", "trial", "tried", "tries", "truck", "truly", "trust", "truth", "twice", "under", "undue", "union", "unity", "until", "upper", "upset", "urban", "usage", "usual", "valid", "value", "video", "virus", "visit", "vital", "voice", "waste", "watch", "water", "wheel", "where", "which", "while", "white", "whole", "whose", "woman", "women", "world", "worry", "worse", "worst", "worth", "would", "wound", "write", "wrong", "wrote", "yield", "young", "youth"];
let sixLetter = ["abroad", "accept", "access", "across", "acting", "action", "active", "actual", "advice", "advise", "affect", "afford", "afraid", "agency", "agenda", "almost", "always", "amount", "animal", "annual", "answer", "anyone", "anyway", "appeal", "appear", "around", "arrive", "artist", "aspect", "assess", "assist", "assume", "attack", "attend", "august", "author", "avenue", "backed", "barely", "battle", "beauty", "became", "become", "before", "behalf", "behind", "belief", "belong", "berlin", "better", "beyond", "bishop", "border", "bottle", "bottom", "bought", "branch", "breath", "bridge", "bright", "broken", "budget", "burden", "bureau", "button", "camera", "cancer", "cannot", "carbon", "career", "castle", "casual", "caught", "center", "centre", "chance", "change", "charge", "choice", "choose", "chosen", "church", "circle", "client", "closed", "closer", "coffee", "column", "combat", "coming", "common", "comply", "copper", "corner", "costly", "county", "couple", "course", "covers", "create", "credit", "crisis", "custom", "damage", "danger", "dealer", "debate", "decade", "decide", "defeat", "defend", "define", "degree", "demand", "depend", "deputy", "desert", "design", "desire", "detail", "detect", "device", "differ", "dinner", "direct", "doctor", "dollar", "domain", "double", "driven", "driver", "during", "easily", "eating", "editor", "effect", "effort", "eighth", "either", "eleven", "emerge", "empire", "employ", "enable", "ending", "energy", "engage", "engine", "enough", "ensure", "entire", "entity", "equity", "escape", "estate", "ethnic", "exceed", "except", "excess", "expand", "expect", "expert", "export", "extend", "extent", "fabric", "facing", "factor", "failed", "fairly", "fallen", "family", "famous", "father", "fellow", "female", "figure", "filing", "finger", "finish", "fiscal", "flight", "flying", "follow", "forced", "forest", "forget", "formal", "format", "former", "foster", "fought", "fourth", "French", "friend", "future", "garden", "gather", "gender", "german", "global", "golden", "ground", "growth", "guilty", "handed", "handle", "happen", "hardly", "headed", "health", "height", "hidden", "holder", "honest", "impact", "import", "income", "indeed", "injury", "inside", "intend", "intent", "invest", "island", "itself", "jersey", "joseph", "junior", "killed", "labour", "latest", "latter", "launch", "lawyer", "leader", "league", "leaves", "legacy", "length", "lesson", "letter", "lights", "likely", "linked", "liquid", "listen", "little", "living", "losing", "lucent", "luxury", "mainly", "making", "manage", "manner", "manual", "margin", "marine", "marked", "market", "martin", "master", "matter", "mature", "medium", "member", "memory", "mental", "merely", "merger", "method", "middle", "miller", "mining", "minute", "mirror", "mobile", "modern", "modest", "module", "moment", "morris", "mostly", "mother", "motion", "moving", "murder", "museum", "mutual", "myself", "narrow", "nation", "native", "nature", "nearby", "nearly", "nights", "nobody", "normal", "notice", "notion", "number", "object", "obtain", "office", "offset", "online", "option", "orange", "origin", "output", "oxford", "packed", "palace", "parent", "partly", "patent", "people", "period", "permit", "person", "phrase", "picked", "planet", "player", "please", "plenty", "pocket", "police", "policy", "prefer", "pretty", "prince", "prison", "profit", "proper", "proven", "public", "pursue", "raised", "random", "rarely", "rather", "rating", "reader", "really", "reason", "recall", "recent", "record", "reduce", "reform", "regard", "regime", "region", "relate", "relief", "remain", "remote", "remove", "repair", "repeat", "replay", "report", "rescue", "resort", "result", "retail", "retain", "return", "reveal", "review", "reward", "riding", "rising", "robust", "ruling", "safety", "salary", "sample", "saving", "saying", "scheme", "school", "screen", "search", "season", "second", "secret", "sector", "secure", "seeing", "select", "seller", "senior", "series", "server", "settle", "severe", "sexual", "should", "signal", "signed", "silent", "silver", "simple", "simply", "single", "sister", "slight", "smooth", "social", "solely", "sought", "source", "soviet", "speech", "spirit", "spoken", "spread", "spring", "square", "stable", "status", "steady", "stolen", "strain", "stream", "street", "stress", "strict", "strike", "string", "strong", "struck", "studio", "submit", "sudden", "suffer", "summer", "summit", "supply", "surely", "survey", "switch", "symbol", "system", "taking", "talent", "target", "taught", "tenant", "tender", "tennis", "thanks", "theory", "thirty", "though", "threat", "thrown", "ticket", "timely", "timing", "tissue", "toward", "travel", "treaty", "trying", "twelve", "twenty", "unable", "unique", "united", "unless", "unlike", "update", "useful", "valley", "varied", "vendor", "versus", "victim", "vision", "visual", "volume", "walker", "wealth", "weekly", "weight", "wholly", "window", "winner", "winter", "within", "wonder", "worker", "wright", "writer", "yellow"];
let sevenLetter = ["Program", "Console", "Library", "Display", "Monitor", "Adapter", "Network", "Storage", "Battery", "Keyboard", "Firewall", "Browser", "Printer", "Scanner", "Hotkeys", "Traffic", "Desktop", "Startup", "Upgrade", "Drivers"];
let eightLetter = ["Internet", "Keyboard", "Password", "Firewall", "Terminal", "Bluetooth", "Dataflow", "Template", "Graphics", "Software", "Download", "Keyboard", "Security", "Firewire", "Wireless", "Homepage", "Database", "Backbone", "Feedback", "Terminal"];
let nineLetter = ["Directory", "Algorithm", "Processor", "Animation", "Interface", "Framework", "Analytics", "Detection", "Detection", "Animation", "Migration", "Execution", "Processor", "Detection", "Animation", "Interface", "Framework", "Analytics", "Detection", "Migration"];
let symbols = ["!", "@", "#", "$", "%", "^", "&", "(", ")"];

function makePassword(letterCount = 12, noSymbol = false, noNumber = false) {
  //some checks on how many letters requested
  if (isNaN(letterCount)) {
    throw "No number passed for letter count!"
  }
  //keep the letter count in this range
  if (letterCount < 12) {
    letterCount = 12
    // less than this, do you even password, Bro?
  }
  if (letterCount > 40) {
    letterCount = 40
    // this is an arbitrary number but I don't want to be processing all day!
  }

  //had to make the array outside of conditions for some reason
  //starting with some words and then checking how much more to add
  const passArray = [fiveLetter[Math.floor(Math.random() * fiveLetter.length)]];

  if (noNumber == false) {
    //testing for false so I can add the number to the array
    passArray.push(Math.floor(Math.random() * 10));
  }

  if (noSymbol == false) {
    //testing for false so I can add a symbol to the array
    passArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }

  let passCount = letterCount - passArray.join('').length;
  do {
    //loop until we have enough letters to match letterCount
    switch (passCount) {
      case 1:
        // Add a check for noSymbol and noNumber
        if (noSymbol == false && noNumber == false) {
          // Add both a random symbol and a random single-digit number
          passArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
          passArray.push(Math.floor(Math.random() * 10));
        } else {
          // Add either a random symbol or a random single-digit number based on the conditions
          if (noSymbol == false) {
            passArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
          }
          else if (noNumber == false) {
            passArray.push(Math.floor(Math.random() * 10));
          } else {
            passArray.push(String.fromCodePoint(Math.floor(Math.random() * (90 - 65 + 1)) + 65));
          }
        }
        break;
      case 2:
        if (noNumber == false) {
          //make 2 digit numbers by swapping to string and forcing 2 digits adding leading zero if needed
          passArray.push(Math.floor(Math.random() * 100).toString().padStart(2, '0'));
        } else {
          passArray.push(twoLetter[Math.floor(Math.random() * twoLetter.length)]);
        }
        break
      case 3:
        passArray.push(threeLetter[Math.floor(Math.random() * threeLetter.length)]);
        break
      case 4:
        passArray.push(fourLetter[Math.floor(Math.random() * fourLetter.length)]);
        break
      case 5:
        passArray.push(fiveLetter[Math.floor(Math.random() * fiveLetter.length)]);
        break
      case 6:
        passArray.push(sixLetter[Math.floor(Math.random() * sixLetter.length)]);
        break;
      case 7:
        passArray.push(sevenLetter[Math.floor(Math.random() * sevenLetter.length)]);
        break;
      case 8:
        passArray.push(eightLetter[Math.floor(Math.random() * eightLetter.length)]);
        break;
      case 9:
        passArray.push(nineLetter[Math.floor(Math.random() * nineLetter.length)]);
        break; 
      default:
        // if anything over 9 is requested, add a random letter
        if (passCount > 9) {
          passArray.push(nineLetter[Math.floor(Math.random() * nineLetter.length)]);
        }
        break;
    }
    passCount = letterCount - passArray.join('').length;
    //loop around again and see how many are still missing from the desired length
  } while (passCount > 0);
  //mix up the array and return as one string
  return passArray.sort(function () { return 0.5 - Math.random() }).join('');
}
