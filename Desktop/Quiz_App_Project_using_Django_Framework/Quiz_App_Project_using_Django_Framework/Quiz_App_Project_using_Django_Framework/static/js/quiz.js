function submitAnswers() {
    let total = questionIDs.length;
    let score = 0;
    let unanswered = 0;

    for (let i = 0; i < total; i++) {
        let qid = questionIDs[i];
        let options = document.getElementsByName('q' + qid);
        let answered = false;
        let selectedValue = '';

        for (let opt of options) {
            if (opt.checked) {
                answered = true;
                selectedValue = opt.value;
                break;
            }
        }

        if (!answered) {
            unanswered++;
        } else {
            if (selectedValue === answers[i]) {
                score++;
            }
        }
    }

    if (unanswered > 0) {
        alert(unanswered + " question(s) left unanswered!");
        return false;
    }

    let results = document.getElementById('results');
    results.innerHTML = "<h3>You scored <span>" + score + "</span> out of <span>" + total + "</span></h3>";

    alert("You scored " + score + " out of " + total);

    return false;  // Prevent form submission to keep user on the page
}
