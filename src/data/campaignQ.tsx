
type CampaignQuestions = {
    level:string,
    questions: {cat:string, words:string[]}[],
}[]

export const campaignQuestions: CampaignQuestions = [
    {
        level:"easy",
        questions: [
            {
                cat:"movies",
                words: [
                    "dark knight",
                    "matrix",
                    "shawshank redemption",
                ]
            },
            {
                cat:"series",
                words: [
                    "breaking bad",
                    "the office",
                    "spartacus"
                ]
            },
            {
                cat:"music bands",
                words: [
                    "nirvana",
                    "pink floyd",
                    "bon jovi"
                ]
            },
            {
                cat:"video games",
                words: [
                    "max payne",
                    "the last of us",
                    "god of war"
                ]
            }
        ]
    },
    {
        level:"medium",
        questions: [
            {
                cat:"movies",
                words: [
                    "frances ha",
                    "under the skin",
                    "no country for old men"
                ]
            },
            {
                cat:"series",
                words: [
                    "ted lasso",
                    "barry",
                    "the haunting of hill house"
                ]
            },
            {
                cat:"music bands",
                words: [
                    "placebo",
                    "led zeppelin",
                    "radiohead",
                ]
            },
            {
                cat:"video games",
                words: [
                    "uncharted among thieves",
                    "limbo",
                    "perfect dark",
                ]
            }
        ]
    },
    {
        level: "hard",
        questions: [
            {
                cat:"movies",
                words: [
                    "in the mood for love",
                    "chinatown",
                    "the diving bell and the butterfly"
                ]
            },
            {
                cat:"series",
                words: [
                    "seinfeld",
                    "the expanse",
                    "we are who we are"
                ]
            },
            {
                cat: "music bands",
                words: [
                    "roxette",
                    "the doors",
                    "alphaville"
                ]
            },
            {
                cat:"video games",
                words: [
                    "red alert",
                    "crazy taxi",
                    "cadillacs and dinosaurs"
                ]
            }
        ]
    }
]

export default campaignQuestions;