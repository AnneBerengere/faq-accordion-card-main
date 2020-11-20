(function(){
    var questionContainers = Array.from(document.getElementsByClassName("question_container"));

    questionContainers.forEach(function (questionContainer){
        questionContainer.addEventListener("click", function(event){
            var textQuestion = questionContainer.querySelector (".text_question");
            var arrow = questionContainer.querySelector(".arrow_logo");
            var response = questionContainer.querySelector(".response");

            textQuestion.classList.toggle ("question_active");
            arrow.classList.toggle("arrow_up");
            response.classList.toggle("hidden");

            questionContainers.forEach(function(questionContainerActive){
                var textQuestionActive = questionContainerActive.querySelector (".text_question")
                if (textQuestionActive.innerHTML!==textQuestion.innerHTML){
                    questionContainerActive.querySelector(".arrow_logo").classList.remove("arrow_up");
                    questionContainerActive.querySelector(".response").classList.add("hidden");
                    questionContainerActive.querySelector(".text_question").classList.remove("question_active");
                }

            })
        })
    })
})()