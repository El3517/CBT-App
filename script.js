const questions = [
    {
        question: "Which of the following elements will exhibit the most electronegative character?",
        answers: [
            {Text: "Al", correct: false },
            {Text: "Si", correct: false },
            {Text: "P", correct: false },
            {Text: "S", correct: true }
        ]
    },
    {
        question: "Acid hydrolysis of nitriles will yield?",
        answers: [
            {Text: "Alkanes", correct: false },
            {Text: "Aldehydes", correct: false },
            {Text: "Carboxylic acids", correct: true },
            {Text: "Alcohols", correct: false }
        ]
    },
    {
        question: "How many isomers of C4H9OH will be tertiary alkanol?",
        answers: [
            {Text: "1", correct: false },
            {Text: "2", correct: true},
            {Text: "3", correct: false},
            {Text: "4", correct: false}
        ]
    },
    {
        question: "Which of the following makes oils distinguished from fats?",
        answers: [
            {Text: "Oil contains a higher proportion of unsaturation", correct: true},
            {Text: "Fats contain a higher proportion of unsaturation", correct: false},
            {Text: "Oil and fats have the same proportion of unsaturation", correct: false},
            {Text: "Neither oil nor fats have unsaturation", correct: false}
        ]
    },
    {
        question: "The characteristic crystalline shape of solid water is due to _____",
        answers: [
            {Text: "Covalent bonds", correct: false},
            {Text: " Hydrogen bonds", correct: true},
            {Text: "Ionic bonds", correct: false},
            {Text: "Metallic bonds", correct: false}
        ]
    },
    {
        question: "The chemical formula for laughing gas is _____",
        answers: [
            {Text: "NO", correct: false},
            {Text: "NO2", correct: false},
            {Text: "N2O", correct: true},
            {Text: "N2O5", correct: false}
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

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let selectElement = parseInt(document.getElementById("question-count").value);
// let selectedValue = parseInt(selectElement.value); 

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    // const shuffledQuestions = questions.sort(()=> Math.random() - 0.5);
    // const quizQuestions = shuffledQuestions.slice(0, questions);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    //console.log(selectElement)
    //console.log(document.getElementById("question-count").value)
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    //nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    // nextButton.style.display = "block"
}

// btw val represents the value from select, i pass it down as a function argument rather than use the global variable
function showScore(val){
    resetState();
    questionElement.innerHTML = `You Scored ${score/val * 100}%`;
    nextButton.innerHTML = "Go Again";
    // nextButton.style.display = "block";
}


function handleNextButton(val){
    currentQuestionIndex++
    if(currentQuestionIndex < val){
        showQuestion();
    }else{
        showScore(val);
    }
}


nextButton.addEventListener("click", ()=>{
    let sEL = parseInt(document.getElementById("question-count").value)
    if(currentQuestionIndex < sEL){
        handleNextButton(sEL);
    }else{
        startQuiz();
    }
})


document.getElementById("question-count").addEventListener("change", ()=>{
    let selectElement = parseInt(document.getElementById("question-count").value);
    //selectElement;
    document.getElementById("chemQues").style.display = "block";
    startQuiz();
});




