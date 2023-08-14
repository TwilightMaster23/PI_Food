const regexName = /^[a-zA-Z0-9]*$/;
const regexHealthScore = /^(?:[1-9][0-9]?|100)$/;
const regexSummary = /^.{5,500}$/;
const regexImage = /^(https?|ftp):\/\/.*\.(jpeg|jpg|png|gif|bmp)$/;


export default function validation (data) {
    const errors = {}

    if(!regexName.test(data.name)) errors.name = "Do not include special characters";
    if(!data.name) errors.name = "Name is required";
    if(!regexHealthScore.test(data.healthScore)) errors.healthScore = "The healthscore must be a number between 1 and 100";
    if(!data.healthScore) errors.healthScore = "HealthScore is required";
    if(!regexSummary.test(data.summary)) errors.summary = "The summary must contain between 5 and 500 characters"
    if(!data.summary) errors.summary = "Summary is required";
    if(!data.steps) errors.steps = "At least one step required";
    if(!data.diets) errors.diets = "At least one diet required";
    if(!regexImage.test(data.image)) errors.image = "Invalid URL";

    return errors;
} 

