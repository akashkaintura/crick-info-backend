const calculateRunRate = (scorecard) => {
    const runs = scorecard.total_runs;
    const overs = scorecard.total_overs;
    const runRate = runs / overs;
    return { runs, overs, runRate };
};

const calculatePartnerships = (scorecard) => {
    const partnerships = [];
    return partnerships;
};

module.exports = { calculateRunRate, calculatePartnerships };
