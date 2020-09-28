const initialState = {
    all: [
        {
            name: "Hulk",
            category: "movie",
            language: "kannada",
            genre: "all",
            sort: "voting",
        },
        {
            name: "Thor",
            category: "movie2",
            language: "hindi",
            genre: "sufi",
            sort: "voting",
        },
        {
            name: "Spider",
            category: "movie3",
            language: "english",
            genre: "sufi",
            sort: "voting",
        },
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
export default reducer;
