(function (){
    var questionBoxMembers = document.getElementById("boxquestionmembers");
    var questionTextMembers = document.getElementById("textquestionmembers");
    var arrowMembers = document.getElementById("arrowmembers");
    var responseTextMembers = document.getElementById("responsetextmembers");

    var questionBoxFileSize = document.getElementById("boxquestionfilesize");
    var questionTextFileSize = document.getElementById("textquestionfilesize");
    var arrowFileSize = document.getElementById("arrowfilesize");
    var responseTextFileSize = document.getElementById("responsetextfilesize");

    var questionBoxPassword = document.getElementById("boxquestionpassword");
    var questionTextPassword = document.getElementById("textquestionpassword");
    var arrowPassword = document.getElementById("arrowpassword");
    var responseTextPassword = document.getElementById("responsetextpassword");

    var questionBoxSubscription = document.getElementById("boxquestionsubscription");
    var questionTextSubscription = document.getElementById("textquestionsubscription");
    var arrowSubscription = document.getElementById("arrowsubscription");
    var responseTextSubscription = document.getElementById("responsetextsubscription");

    var questionBoxAdditionalSupport = document.getElementById("boxquestionadditionalsupport");
    var questionTextAdditionalSupport = document.getElementById("textquestionadditionalsupport");
    var arrowAdditionalSupport = document.getElementById("arrowadditionalsupport");
    var responseTextAdditionalSupport = document.getElementById("responsetextadditionalsupport");

    questionBoxMembers.addEventListener("click", function (){
        responseTextFileSize.classList.add("hidden");
        responseTextPassword.classList.add("hidden");
        responseTextSubscription.classList.add("hidden");
        responseTextAdditionalSupport.classList.add("hidden");
        arrowFileSize.classList.remove("arrow_up");
        arrowPassword.classList.remove("arrow_up");
        arrowSubscription.classList.remove("arrow_up");
        arrowAdditionalSupport.classList.remove("arrow_up");
        questionTextFileSize.classList.remove("question_active");
        questionTextPassword.classList.remove("question_active");
        questionTextSubscription.classList.remove("question_active");
        questionTextAdditionalSupport.classList.remove("question_active");

        questionTextMembers.classList.toggle("question_active");
        arrowMembers.classList.toggle("arrow_up");
        responseTextMembers.classList.toggle("hidden");
    })

    questionBoxFileSize.addEventListener("click", function (){
        responseTextMembers.classList.add("hidden");
        responseTextPassword.classList.add("hidden");
        responseTextSubscription.classList.add("hidden");
        responseTextAdditionalSupport.classList.add("hidden");
        arrowMembers.classList.remove("arrow_up");
        arrowPassword.classList.remove("arrow_up");
        arrowSubscription.classList.remove("arrow_up");
        arrowAdditionalSupport.classList.remove("arrow_up");
        questionTextMembers.classList.remove("question_active");
        questionTextPassword.classList.remove("question_active");
        questionTextSubscription.classList.remove("question_active");
        questionTextAdditionalSupport.classList.remove("question_active");

        questionTextFileSize.classList.toggle("question_active");
        arrowFileSize.classList.toggle("arrow_up");
        responseTextFileSize.classList.toggle("hidden");
    })

    questionBoxPassword.addEventListener("click", function (){
        responseTextMembers.classList.add("hidden");
        responseTextFileSize.classList.add("hidden");
        responseTextSubscription.classList.add("hidden");
        responseTextAdditionalSupport.classList.add("hidden");
        arrowMembers.classList.remove("arrow_up");
        arrowFileSize.classList.remove("arrow_up");
        arrowSubscription.classList.remove("arrow_up");
        arrowAdditionalSupport.classList.remove("arrow_up");
        questionTextMembers.classList.remove("question_active");
        questionTextFileSize.classList.remove("question_active");
        questionTextSubscription.classList.remove("question_active");
        questionTextAdditionalSupport.classList.remove("question_active");

        questionTextPassword.classList.toggle("question_active");
        arrowPassword.classList.toggle("arrow_up");
        responseTextPassword.classList.toggle("hidden");
    })

    questionBoxSubscription.addEventListener("click", function (){
        responseTextMembers.classList.add("hidden");
        responseTextFileSize.classList.add("hidden");
        responseTextPassword.classList.add("hidden");
        responseTextAdditionalSupport.classList.add("hidden");
        arrowMembers.classList.remove("arrow_up");
        arrowFileSize.classList.remove("arrow_up");
        arrowPassword.classList.remove("arrow_up");
        arrowAdditionalSupport.classList.remove("arrow_up");
        questionTextMembers.classList.remove("question_active");
        questionTextFileSize.classList.remove("question_active");
        questionTextPassword.classList.remove("question_active");
        questionTextAdditionalSupport.classList.remove("question_active");

        questionTextSubscription.classList.toggle("question_active");
        arrowSubscription.classList.toggle("arrow_up");
        responseTextSubscription.classList.toggle("hidden");
    })

    questionBoxAdditionalSupport.addEventListener("click", function (){
        responseTextMembers.classList.add("hidden");
        responseTextFileSize.classList.add("hidden");
        responseTextPassword.classList.add("hidden");
        responseTextSubscription.classList.add("hidden");
        arrowMembers.classList.remove("arrow_up");
        arrowFileSize.classList.remove("arrow_up");
        arrowPassword.classList.remove("arrow_up");
        arrowSubscription.classList.remove("arrow_up");
        questionTextMembers.classList.remove("question_active");
        questionTextFileSize.classList.remove("question_active");
        questionTextPassword.classList.remove("question_active");
        questionTextSubscription.classList.remove("question_active");

        questionTextAdditionalSupport.classList.toggle("question_active");
        arrowAdditionalSupport.classList.toggle("arrow_up");
        responseTextAdditionalSupport.classList.toggle("hidden");
    })


})();