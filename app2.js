(function(){
    var questionContainers = Array.from(document.getElementsByClassName("question_container"));
    console.log(questionContainers);

    var closeAll = function(){
        var textQuestions = Array.from(document.getElementsByClassName("text_question"));
        var arrows= Array.from(document.getElementsByClassName("arrow_logo"));
        var responses= Array.from(document.getElementsByClassName("response"));

        textQuestions.forEach(function (textQuestion){
            textQuestion.classList.remove("question_active");
        });
        arrows.forEach(function(arrow){
            arrow.classList.remove("arrow_up");
        });
        responses.forEach(function(response){
            response.classList.add("hidden");
        });
    }

    questionContainers.forEach(function (questionContainer){
        questionContainer.addEventListener("click", function(event){
            var textQuestion = questionContainer.querySelector (".text_question");
            var arrow = questionContainer.querySelector(".arrow_logo");
            var response = questionContainer.querySelector(".response");
            closeAll(textQuestion.value);

            textQuestion.classList.toggle ("question_active");
            arrow.classList.toggle("arrow_up");
            response.classList.toggle("hidden");
        })
    })
})()