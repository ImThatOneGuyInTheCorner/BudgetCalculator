document.addEventListener("DOMContentLoaded", function () {

    function updateFrame1(grossAnnual) {
        document.getElementById('grossSalary').innerText = `$${grossAnnual}`;
        document.getElementById('grossMonthly').innerText = `$${Math.round(grossAnnual / 12)}`;
        document.getElementById('fT').innerText = `$${Math.round(((grossAnnual / 12) * 0.12) * 100) / 100}`;
        document.getElementById('sT').innerText = `$${Math.round(((grossAnnual / 12) * 0.07) * 100) / 100}`;
        document.getElementById('sS').innerText = `$${Math.round(((grossAnnual / 12) * 0.062) * 100) / 100}`;
        document.getElementById('m').innerText = `$${Math.round(((grossAnnual / 12) * 0.0145) * 100) / 100}`;
        document.getElementById('sD').innerText = `$${Math.round(((grossAnnual / 12) * 0.0001) * 100) / 100}`;
        document.getElementById('rI').innerText = `$${Math.round(((grossAnnual / 12) * 0.0005) * 100) / 100}`;
        document.getElementById('mI').innerText = `$180`;
        document.getElementById('netMonthly').innerText = `$${Math.round((((grossAnnual / 12) / 3) * 2) * (Math.pow(10, 0))) / (Math.pow(10, 0))}`;
    }
    function updateFrame2(grossAnnual) {
        document.getElementById('grossSalaryF2').innerText = `$${grossAnnual}`;
        document.getElementById('grossMonthlyF2').innerText = `$${Math.round(grossAnnual / 12)}`;
        let monthly = Math.round((((grossAnnual / 12) / 3) * 2) * (Math.pow(10, 0))) / (Math.pow(10, 0));
        document.getElementById('monthlyF2').innerText = monthly;
        
        console.log(monthly);
        console.log(monthly * 0.1);


        document.getElementById('g').innerText = `$${Math.round(monthly * 0.1)}`;
        document.getElementById('f').innerText = `$${Math.round(monthly * 0.11)}`;
        document.getElementById('u').innerText = `$${Math.round(monthly * 0.04)}`;
        document.getElementById('h').innerText = `$${Math.round(monthly * 0.25)}`;
        document.getElementById('t').innerText = `$${Math.round(monthly * 0.02)}`;
        document.getElementById('i').innerText = `$${Math.round(monthly * 0.06)}`;
        document.getElementById('hI').innerText = `$${Math.round(monthly * 0.01)}`;
        document.getElementById('d').innerText = `$${Math.round(monthly * 0.12)}`;
        document.getElementById('sC').innerText = `$${Math.round(monthly * 0.1)}`;
        document.getElementById('o').innerText = `$${Math.round(monthly * 0.19)}`;
    }

    let navIndex = 0;



    let frame0 = document.getElementById('frame0');
    let frame1 = document.getElementById('frame1');
    let frame2 = document.getElementById('frame2');
    let progress = document.getElementById("progress");
    var style1 = document.querySelector('#progress').style;
    var style2 = document.querySelector('#progress').style;

    style1.setProperty('--background1', '#D9D9D9');
    style2.setProperty('--background2', '#D9D9D9');

    let frameArray = [frame0, frame1, frame2];
    // Runs when back button is clicked
    // doesnt work :( (zhlawg didnt link his js :skull:)
    document.getElementById('back').addEventListener('click', function() {
        console.log(navIndex);
        if (navIndex !== 0) {
            navIndex--;
            progress.children[navIndex+1].classList.toggle("progressed")
            // Hide other classes
            frameArray[navIndex].classList.toggle('hide');
            frameArray[navIndex + 1].classList.toggle('hide');
            frameUpdate();
            console.log("Back Clicked");
        }
        updateProgress();
    });

    document.getElementById('grossAnnualIncome').addEventListener('change', function (eventData) {
        let grossAnnual = eventData.target.value;
        console.log(grossAnnual);
        updateFrame1(grossAnnual);
        updateFrame2(grossAnnual);
    });


    // Runs when next button is clicked
    document.getElementById('next').addEventListener('click', function() {
        console.log(navIndex);
        if (navIndex !== 2) {
            navIndex++;
            progress.children[navIndex].classList.toggle("progressed")
            // Hide other classes
            frameArray[navIndex].classList.toggle('hide');
            frameArray[navIndex - 1].classList.toggle('hide');
            frameUpdate();
            console.log("Next Clicked");
        }
        updateProgress();
    });

    function frameUpdate() {
        frame0 = frameArray[0];
        frame1 = frameArray[1];
        frame2 = frameArray[2];
    }

    function updateProgress() {
        if (navIndex == 0) {
            style1.setProperty('--background1', '#D9D9D9');
            style2.setProperty('--background2', '#D9D9D9');
        }
        if (navIndex == 1) {
            style1.setProperty('--background1', '#60D0D0');
            style2.setProperty('--background2', '#D9D9D9');
        }
        if (navIndex == 2) {
            style1.setProperty('--background1', '#60D0D0');
            style2.setProperty('--background2', '#60D0D0');
        }
    };
});