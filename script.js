const questions = [
    {
        question: "Which of the following elements will exhibit the most electronegative character?",
        answers: [
            { Text: "Al", correct: false },
            { Text: "Si", correct: false },
            { Text: "P", correct: false },
            { Text: "S", correct: true }
        ]
    },
    {
        question: "Acid hydrolysis of nitriles will yield?",
        answers: [
            { Text: "Alkanes", correct: false },
            { Text: "Aldehydes", correct: false },
            { Text: "Carboxylic acids", correct: true },
            { Text: "Alcohols", correct: false }
        ]
    },
    {
        question: "How many isomers of C4H9OH will be tertiary alkanol?",
        answers: [
            { Text: "1", correct: false },
            { Text: "2", correct: true },
            { Text: "3", correct: false },
            { Text: "4", correct: false }
        ]
    },
    {
        question: "Which of the following makes oils distinguished from fats?",
        answers: [
            { Text: "Oil contains a higher proportion of unsaturation", correct: true },
            { Text: "Fats contain a higher proportion of unsaturation", correct: false },
            { Text: "Oil and fats have the same proportion of unsaturation", correct: false },
            { Text: "Neither oil nor fats have unsaturation", correct: false }
        ]
    },
    {
        question: "The characteristic crystalline shape of solid water is due to _____",
        answers: [
            { Text: "Covalent bonds", correct: false },
            { Text: " Hydrogen bonds", correct: true },
            { Text: "Ionic bonds", correct: false },
            { Text: "Metallic bonds", correct: false }
        ]
    },
    {
        question: "The chemical formula for laughing gas is _____",
        answers: [
            { Text: "NO", correct: false },
            { Text: "NO2", correct: false },
            { Text: "N2O", correct: true },
            { Text: "N2O5", correct: false }
        ]
    },
    {
        question: "The sulphide used in coating electric fluorescent tubes is _____?",
        answers: [
            {Text: "Iron (II) sulphide", correct: false},
            {Text: "Sphalerite", correct: false},
            {Text: "Zinc sulphide", correct: true},
            {Text: "Sulphide mineral", correct: false}
        ]
    },
    // {
    //     question: "Calculate the volume in dm^3 of oxygen evolved at s.t.package. When a curent of 5A is passed throught acidified water for 772s (molar volume of gas at stp. = 22.4dm^3)",
    //     answers: [
    //         {Text: "0.056", correct: false},
    //         {Text: "0.224", correct: true},
    //         {Text: "224000", correct: false},
    //         {Text: "56000", correct: false}
    //     ]
    // },
    // {
    //     question: "Hydrogenation of Benzene to cyclohexane is called",
    //     answers: [
    //         {Text: "Cracking", correct: false},
    //         {Text: "Polymerisation", correct: false},
    //         {Text: "Reforming", correct: false},
    //         {Text: "Aromatization", correct: true}
    //     ]
    // },
    // {
    //     question: "The pollutant that contributes to the depletion of the ozone layer is _____?",
    //     answers: [
    //         {Text: "CF", correct: false},
    //         {Text: "CS", correct: false},
    //         {Text: "CCl", correct: false},
    //         {Text: "CFC", correct: true}
    //     ]
    // },
    // {
    //     question: "What changes sodium hydroxide pellets to liquid?",
    //     answers: [
    //         {Text: "Oxygen", correct: false},
    //         {Text: "Water vapour", correct: true},
    //         {Text: "Carbon (IV) oxide", correct: false},
    //         {Text: "Nitrogen", correct: false}
    //     ]
    // },
    // {
    //     question: "The compound used as 'antifreeze' in car radiators in cold regions of the world is _____",
    //     answers: [
    //         {Text: "Ethanol", correct: false},
    //         {Text: "Ethylene glycol", correct: true},
    //         {Text: "Ethanal", correct: false},
    //         {Text: "Propan-1,2-diol", correct: false}
    //     ]
    // },
    // {
    //     question: "What are the laws that form the general gas equation?",
    //     answers: [
    //         {Text: "Boyle's and Charles' laws", correct: false},
    //         {Text: "Boyle's Charles' and Graham's laws", correct: false},
    //         {Text: "Boyle's law, Charles's law, and Gay-Lussac's law", correct: true},
    //         {Text: "Gaps between the coils", correct: false}
    //     ]
    // },
    // {
    //     question: "Chlorine, bromine, and iodine resemble each other in that all",
    //     answers: [
    //         {Text: "Dissolve in alkalis", correct: true},
    //         {Text: "Displace each other from solutions of their salts", correct: false},
    //         {Text: "React violently with hydrogen on heating", correct: false},
    //         {Text: "Are electron donors", correct: false}
    //     ]
    // },
    // {
    //     question: " The method suitable for separating suspended particles in liquid is _____",
    //     answers: [
    //         {Text: "Decantation", correct: false},
    //         {Text: "Distillation", correct: false},
    //         {Text: "Centrifugation", correct: true},
    //         {Text: "Chromatography", correct: false}
    //     ]
    // },
    // {
    //     question: " A hydrocarbon X has a molar mass of 26 and a carbon atom percentage of 92.3%. What is its molecular formula?,
    //     answers: [
    //         {Text: "C2H2", correct: true},
    //         {Text: "C2H6", correct: false},
    //         {Text: "CH4", correct: false},
    //         {Text: "C3H8", correct: false}
    //     ]
    // },
    // {
    //     question: "Silica gel, when exposed to air, turns liquid. What kind of substance is it?",
    //     answers: [
    //         {Text: "Deliquescent", correct: true},
    //         {Text: "Hygroscopic", correct: false},
    //         {Text: "Efflorescent", correct: false},
    //         {Text: "Entropy", correct: false}
    //     ]
    // },
    // {
    //     question: "In an equilibrium reaction, which of the following conditions indicate that the maximum yield of the product will be obtained?",
    //     answers: [
    //         {Text: "Equilibrium constant is very large", correct: true},
    //         {Text: "△H=T△S, correct: false},
    //         {Text: "ΔH≥TΔS", correct: false},
    //         {Text: "Equilibrium constant is less than zero", correct: false}
    //     ]
    // },
    // {
    //     question: " Under high pressure, real gases do not obey laws because their molecules",
    //     answers: [
    //         {Text: "Have become more energetic", correct: false},
    //         {Text: "Have become less energetic", correct: true},
    //         {Text: "Have become smaller in size", correct: false},
    //         {Text: "Have become larger in size", correct: false}
    //     ]
    // },
    // {
    //     question: "The salt responsible for temporary hardness is _____",
    //     answers: [
    //         {Text: "Calcium sulphate", correct: false},
    //         {Text: "Magnesium chloride", correct: false},
    //         {Text: "Calcium bicarbonate", correct: true},
    //         {Text: "Magnesium sulphate", correct: false}
    //     ]
    // },
    // {
    //     question: " Common salt (Nacl) is used to preserve foods. Which of the following properties can be used to determine its purity before use?",
    //     answers: [
    //         {Text: "Solubility in water", correct: false},
    //         {Text: "Melting point", correct: true},
    //         {Text: "Relative density", correct: false},
    //         {Text: "Crystalline nature", correct: false}
    //     ]
    // },
    // {
    //     question: "The rate of a chemical reaction is NOT affected by one of these factors",
    //     answers: [
    //         {Text: "Color", correct: true},
    //         {Text: "Concentration", correct: false},
    //         {Text: "Presence of light", correct: false},
    //         {Text: "Surface area", correct: false}
    //     ]
    // },
    // {
    //     question: "The functional group CHO is?",
    //     answers: [
    //         {Text: " Alkanol", correct: false},
    //         {Text: "Alkanal", correct: true},
    //         {Text: "Alkanone", correct: false},
    //         {Text: "Alkanoate", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "On exposure to the atmosphere, a hydrated salt loses its water of crystallization to become anhydrous. This phenomenon is referred to as _____",
    //     answers: [
    //         {Text: "Efflorescence", correct: true},
    //         {Text: "Deliquescence", correct: false},
    //         {Text: "Hydroscopy", correct: false},
    //         {Text: "Hydrolysis", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following statements is true of the electrochemical series?",
    //     answers: [
    //         {Text: " Electropositivity of metals increases down the series", correct: false},
    //         {Text: "Electropositivity of non-metals decreases down the series", correct: false},
    //         {Text: "Electronegativity of non-metals decreases", correct: false},
    //         {Text: "Electropositivity of metals decreases down the series", correct: true}
    //     ]
    // },
    // {
    //     question: "Which of the following pairs are both substances deliquescent?",
    //     answers: [
    //         {Text: "CaCl2 and H2SO4, correct: true},
    //         {Text: "NaOH and MGSO4.7H20", correct: false},
    //         {Text: "CaCl2 and NaOH", correct: false},
    //         {Text: "CuO and NaCl", correct: false}
    //     ]
    // },
    // {
    //     question: "The bond formed between H20 and H+ to form the hydroxonium H3O+ is",
    //     answers: [
    //         {Text: "Dative", correct: true},
    //         {Text: "Covalent", correct: false},
    //         {Text: "Electrovalent", correct: false},
    //         {Text: "Ionic", correct: false}
    //     ]
    // },
    // {
    //     question: " Gas molecules are said to be perfectly elastic because",
    //     answers: [
    //         {Text: "They collide without loss of energy", correct: true},
    //         {Text: "They move about in straight lines", correct: false},
    //         {Text: "The distances between them are neglible", correct: false},
    //         {Text: "The volume occupied by them is negligible", correct: false}
    //     ]
    // },
    // {
    //     question: "A solid that absorbs water from the atmosphere and forms an aqueous solution is _____",
    //     answers: [
    //         {Text: "Hydrophilic", correct: false},
    //         {Text: "Efflorescent", correct: false},
    //         {Text: "Deliquescent", correct: true},
    //         {Text: "Hygroscopic", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following can undergo both addition reaction and substitution reaction?",
    //     answers: [
    //         {Text: "Benzene", correct: true},
    //         {Text: "Pentane", correct: false},
    //         {Text: "Propane", correct: false},
    //         {Text: "Hexane", correct: false}
    //     ]
    // },
    // {
    //     question: "Name the organic compound CH3(CH2)4CH2CH2NH2",
    //     answers: [
    //         {Text: "Pentaneamine", correct: false},
    //         {Text: "Heptanamine", correct: false},
    //         {Text: "Heptanamine", correct: true},
    //         {Text: "Octanamine", correct: false}
    //     ]
    // },
    // {
    //     question: "2Cl- = Cl2(g) + 2e-(eq), The half-cell reaction occuring at the anode during the electrolysis of dilute ZnCl2 solution is?",
    //     answers: [
    //         {Text: "Ionization", correct: false},
    //         {Text: "Oxidation", correct: true},
    //         {Text: "Reduction", correct: false},
    //         {Text: "Recombination", correct: false}
    //     ]
    // },
    // {
    //     question: "CHCl3 + Cl2 -> HCl + CCl4 The reaction is an example of?",
    //     answers: [
    //         {Text: "An addition reaction", correct: false},
    //         {Text: "A decomposition reaction", correct: false},
    //         {Text: "A substitution reaction", correct: true},
    //         {Text: "A condensation reaction", correct: false}
    //     ]
    // },
    // {
    //     question: "Cx Hy + 4O2 = 3CO2 + 2H2O. The hydrocarbon, CxHy in the reaction above is?",
    //     answers: [
    //         {Text: "Propyne", correct: true},
    //         {Text: "Propene", correct: false},
    //         {Text: "Butane", correct: false},
    //         {Text: "Butyne", correct: false}
    //     ]
    // },
    // {
    //     question: "One method of driving the position of equilibrium of an endohermic reaction forward is to?",
    //     answers: [
    //         {Text: "Increase temperature at constant pressure", correct: true},
    //         {Text: "Decrease pressure at constant temperature", correct: false},
    //         {Text: "Cool down the apparatus with water", correct: false},
    //         {Text: "Decreases temperature at constant pressure", correct: false}
    //     ]
    // },
    // {
    //     question: " 0.92 of ethanol when burned raised the temperature of 50g of water by 28.6K. Calculate the heat of combustion of ethanol. [C = 12, O = 16, H = 1, specific heat capacity of water = 4.2Jg−1K−1]",
    //     answers: [
    //         {Text: "+3000KJmol-1", correct: false},
    //         {Text: "+300KJmol-1", correct: true},
    //         {Text: "-300KJmol-1", correct: false},
    //         {Text: "-3000KJmol-1", correct: false}
    //     ]
    // },
    // {
    //     question: "The repeating unit in natural rubber is _____",
    //     answers: [
    //         {Text: "Alkyne", correct: false},
    //         {Text: "Isoprene", correct: true},
    //         {Text: "n-proprene", correct: false},
    //         {Text: "neoprene", correct: false}
    //     ]
    // },
    // {
    //     question: "What current in amperes will deposit 2.7g of aluminium in 2 hours? [Al = 27, F = 96500Cmol−1]",
    //     answers: [
    //         {Text: "32", correct: false},
    //         {Text: "8", correct: false},
    //         {Text: "4", correct: true},
    //         {Text: "16", correct: false}
    //     ]
    // },
    // {
    //     question: " Steam changes the colour of anhydrous cobalt (II) choride from",
    //     answers: [
    //         {Text: "Blue to pink", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
    // {
    //     question: "Which of the following makes oils distinguished from fats?",
    //     answers: [
    //         {Text: "Oil contains a higher proportion of unsaturation", correct: true},
    //         {Text: "Fats contain a higher proportion of unsaturation", correct: false},
    //         {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
    //         {Text: "Neither oil nor fats have unsaturation", correct: false}
    //     ]
    // },
];

// So the main problem now is that when you click the start button it doesn't take the timer value

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const previousButton = document.getElementById("previous-btn");
const resetButton = document.getElementById("reset-btn");
let selectElement = parseInt(document.getElementById("question-count").value);
const startTestBtn = document.getElementById("Start-Test")
const timerDisplay = document.getElementById("timerDisplay"); 

let timerInterval;

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    const shuffledQuestions = questions.sort(()=> Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    const timerMinutes = parseInt(document.getElementById("timer").value);
    nextButton.innerHTML = "Next";
    startTimer(timerMinutes);
    showQuestion();
}

function startTimer(minutes) {
    const timerDisplay = document.getElementById("timerDisplay");
    timerDisplay.classList.remove("hidden");
    let val = parseInt(document.getElementById("question-count").value);
    if(timerDisplay.style.display === "none"){
        timerDisplay.style.display = "block"
    }
    let time = minutes * 60;
    //first check if there was an existing timerInterval
    if(typeof timerInterval === "number"){
        clearInterval(timerInterval);
    }
    timerInterval = setInterval(() => {
        const minutesLeft = Math.floor(time / 60);
        const secondsLeft = time % 60;

        timerDisplay.textContent = `Time Left: ${String(minutesLeft).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;

        if (time <= 0) {
            clearInterval(timerInterval);
            showScore(val);
        }
        time--;
    }, 1000);
}

function showQuestion(index = currentQuestionIndex) {
    resetState();
    let currentQuestion = questions[index];
    let questionNo = index + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
     nextButton.style.display = "block"
}

function showScore(val) {
    resetState();
    const scorePercentage = ((score / val) * 100).toFixed(1);
    let message = '';
    if(scorePercentage >= 75){
        message = "Congratulations challenger, you're gonna ace Chemistry 🙂‍↕"
    }else if(scorePercentage >= 50){
        message = "Keep studying challenger you're almost there 😉 "
    }else{
        message = "I guess it's back to the books for you challenger, you're not ready 😝❌😆"
    }
    questionElement.innerHTML = `You Scored ${scorePercentage}%<br><br>${message}`;
    resetButton.style.display = "block";
    resetButton.className = nextButton.className
    previousButton.style.display = "none";
    nextButton.style.display = "none"
    timerDisplay.style.display = "none"
    document.getElementById("inquiries").style.display = "none";
    document.getElementById("usr").style.display = "none";
}


function resetTest(){
    window.location.reload()
}
resetButton.addEventListener("click", resetTest)
function handleNextButton(val) {
    currentQuestionIndex++
    if (currentQuestionIndex < val) {
        showQuestion();
    } else {
        showScore(val);
    }
}

// This was supposed to be the function for the previous button adjust as needed
// function handlePreviousButton(){
//     if(currentQuestionIndex > 0){
//         currentQuestionIndex--
//         showQuestion(currentQuestionIndex);
//     }
// }

// previousButton.addEventListener("click", handlePreviousButton);

// resetButton.addEventListener("click", resetTest());

nextButton.addEventListener("click", () => {
    let sEL = parseInt(document.getElementById("question-count").value)
    if (currentQuestionIndex < sEL) {
        handleNextButton(sEL);
    } else {
        startQuiz();
    }
})


startTestBtn.addEventListener("click", ()=>{
    let val = parseInt(document.getElementById("question-count").value);
    let timerMinutes = parseInt(document.getElementById("timer").value);
    if (isNaN(val) || isNaN(timerMinutes) || val <= 0 || timerMinutes <= 0) {
        document.getElementById("Error").style.display = "block";
        document.getElementById("chemQues").style.display = "none";
    } else {
        document.getElementById("Error").style.display = "none";
        document.getElementById("inquiries").style.display = "none";
        document.getElementById("chemQues").style.display = "block";
        startQuiz()
    }
});




