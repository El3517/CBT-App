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
    // {
    //     question: "The sulphide used in coating electric fluorescent tubes is _____?",
    //     answers: [
    //         {Text: "Iron (II) sulphide", correct: false},
    //         {Text: "Sphalerite", correct: false},
    //         {Text: "Zinc sulphide", correct: true},
    //         {Text: "Sulphide mineral", correct: false}
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
// let selectedValue = parseInt(selectElement.value); 

let timerInterval;

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    // const shuffledQuestions = questions.sort(()=> Math.random() - 0.5);
    // const quizQuestions = shuffledQuestions.slice(0, questions);
    currentQuestionIndex = 0;
    score = 0;
    const timerMinutes = parseInt(document.getElementById("timer").value);
    nextButton.innerHTML = "Next";
    startTimer(timerMinutes);
    showQuestion();
    console.log(timerMinutes);
    //console.log(selectElement)
    //console.log(document.getElementById("question-count").value)
}

function startTimer(minutes) {
    const timerDisplay = document.getElementById("timerDisplay");
    timerDisplay.classList.remove("hidden");
    let val = parseInt(document.getElementById("question-count").value);

    let time = minutes * 60;
    clearInterval(timerInterval);

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

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
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
    //nextButton.style.display = "none";
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
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    // nextButton.style.display = "block"
}

// btw val represents the value from select, i pass it down as a function argument rather than use the global variable
function showScore(val) {
    resetState();
    questionElement.innerHTML = `You Scored ${score / val * 100}%`;
    resetButton.style.display = "block";
    previousButton.style.display = "none";

    document.getElementById("inquiries").style.display = "none";
    // nextButton.style.display = "block";
}


// This was supposed to be the function to reset the test
// function resetTest(){
//     clearInterval(timerInterval);
//     currentQuestionIndex = 0;
// }

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
//         showQuestion(currentQuestionIndex - 1);
//     }
// }

// previousButton.addEventListener("click", handlePreviousButton);

// resetButton.addEventListener("click", resetTest());

nextButton.addEventListener("click", () => {
    document.getElementById("inquiries").style.display = "block";
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
        document.getElementById("chemQues").style.display = "block";
    }
}, startQuiz());




