
function renderSurveys(surveys) {
    // Setting up survey html for display
    // mapping over the array of surveys
    let surveyHtml = surveys.map(function(survey) {
        // Setting up html for the title
        let html = renderSurveyTitle(survey.title);
        // setting up html for the fields
        let fieldsHtml = renderSurveyFields(survey.fields);
        // Setting up HTML for submit button, need to create
        // a new function for submit button rendering
        let buttonHtml = renderSurveyButton(survey.submitButtonText);
        // combining the title and fields html and returning to 
        // new array that comes from .map()
        return html + fieldsHtml + buttonHtml;
    });
    // Returning our survey html array with join to turn it
    // into a string

    return `
        <div class="text-center mt-5">
            ${surveyHtml.join('')}
        </div>
    `
}

function renderSurveyTitle(title) {
    return `
        <div>${title}</div> 
    `
}

function renderSurveyButton(text) {
    return `
        <button type="submit">${text}</button>
    `
}

function renderSurveyFields(fields) {
    // Going to use this later to place HTML for our options
    let optionsHtml = '';

    let fieldsHtml = fields.map(function(field) {
        let fieldHtml = `
            <span>${field.label}</span>
        `
        
        if (field.options) {
            optionsHtml = renderFieldOptions(field.options);
        } 

        switch (field.type) {
            case 'text':
                optionsHtml = `<textarea></textarea>`
                break;
            case 'date':
                optionsHtml = `<input type="date">`
                break;
            case 'datetime':
                optionsHtml = `<input type='datetime'>`;
                break;
            case 'time':
                optionsHtml = `<input type="time">`
        }

        // nothing handling field.type === 'date'
        
        return fieldHtml + optionsHtml       
    })

    return fieldsHtml.join('');
}

function renderFieldOptions(options) {
    let optionsHtml = options.map(function(option) {
        return `
            <input type="radio">
            <label>${option}</label>
        `
    });

    return optionsHtml.join('');
}



function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "Whats the deal with airline peanuts?",
                    type: "text"
                },
                {
                    label: "choose a date",
                    type: "date"
                }

            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}