//INDEX.JS STARTS HERE

//function for track and trace 



//function for input space in the index.html
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('.footer3 .in');
    const signUpBtn = document.querySelector('.footer3 .whithy');
    if (emailInput && signUpBtn) {
        signUpBtn.addEventListener('click', function() {
            const email = emailInput.value.trim();
            // Check for non-empty, contains '@', and ends with 'gmail.com'
            if (email && email.includes('@') && email.toLowerCase().endsWith('gmail.com')) {
                alert('Signed in!, latest news and updates will be sent to you.');
            } else {
                alert('Please enter a valid Gmail address (e.g., yourname@gmail.com)');
            }
        });
    }
    // Order Now button logic for price.html
    var orderBtns = document.querySelectorAll('.thing');
    orderBtns.forEach(function(button) {
        button.addEventListener('mouseover', function() {
            button.style.background = '#003498';
            button.style.color = '#fff';
            button.style.transform = 'scale(1.08)';
            button.style.transition = 'all 0.2s';
        });
        button.addEventListener('mouseout', function() {
            button.style.background = '';
            button.style.color = '';
            button.style.transform = '';
        });
        button.addEventListener('click', function() {
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            var id = '';
            for (var i = 0; i < 6; i++) {
                id += chars[Math.floor(Math.random() * chars.length)];
            }
            alert('Ordered successfully! Your tracking ID is: ' + id + '\nUse this ID in Track & Trace on the homepage.');
            var showId = button.nextElementSibling;
            if (!showId || !showId.classList.contains('tracking-id')) {
                showId = document.createElement('div');
                showId.className = 'tracking-id';
                showId.style.marginTop = '10px';
                showId.style.fontWeight = 'bold';
                button.parentNode.insertBefore(showId, button.nextSibling);
            }
            showId.textContent = 'Tracking ID: ' + id;
            showId.onclick = function() {
                var trackInput = document.querySelector('.input-area1 .input');
                if (trackInput) {
                    trackInput.value = id;
                    showId.remove();
                }
            };
        });
    });

    // Track & Trace for homepage
    var trackBtn = document.querySelector('.trk-btn');
    var trackInput = document.querySelector('.input-area1 .input');
    if (trackBtn && trackInput) {
        trackBtn.addEventListener('click', function() {
            if (trackInput.value.trim().length === 6) {
                alert('Tracking Successful.');
            }
        });
    }
});

function sub() {
    
    var email = document.getElementById("in").value
    console.log(email)

    document.getElementById("in").value   = ''

    if (email == ''){
        document.getElementById("response").innerHTML = 'you must input a valid email address'
    }else{
        document.getElementById("response").innerHTML = 'We have recieved your email address and will frequently send you newsletters. Thank you for subscribing!';
    }
}


function track() {
    var track_id = document.getElementById("tkinput").value
    // console.log(track_id)

    document.getElementById('tkinput').value = ''

    document.getElementById("tkresponse").innerHTML = 'We will send you the current location of your package to your email shortly. Thank you for Using JAPA Delivery Services'


    if (track_id == ''){
        document.getElementById('tkresponse').innerHTML = 'Sorry, but a valid Track id must be entered'
    }
}
//INDEX.JS STOPS HERE





