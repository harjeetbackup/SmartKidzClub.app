const API_URL = 'https://us-central1-smartkidzclub-6f399.cloudfunctions.net/addAccess',
    elForm = document.getElementById('addaccess'),
    elEmail = document.getElementById('email'),
    elCode = document.getElementById('code'),
    elSubmit = document.getElementById('submit'),

    ErrorMsg = {
        email: "Please fill Email",
        code: "Please fill Class Code",
    }

function validate(email, code) {
    const valEmail = email.trim(),
        valCode = String(code || '').trim();

    if (!valEmail)
        return [ErrorMsg.email, null];


    if (!valCode)
        return [ErrorMsg.code, null];

    return [null, {
        email: valEmail,
        redeem_code: valCode.toUpperCase(),
    }]
}

elForm.addEventListener('submit', e => {
    e.preventDefault();

    const [error, formValue] = validate(
        elEmail.value,
        elCode.value
    );

    if (error) {
        // Form has Errors
        return alert(error);
    } else {
        // Form is valid. Submission started
        elSubmit.disabled = true;
        elSubmit.innerText = 'PROCESSING...';
        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(formValue),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(async r => {
                const res = await r.json();
                elSubmit.disabled = false;
                elSubmit.innerText = 'ADD ACCESS';
                console.dir(res);
                alert(res.message);
                if (res.success) {
                    elCode.value = null;
                    elEmail.value = null;
                }
            })
            .catch(err => {
                elSubmit.disabled = false;
                elSubmit.innerText = 'ADD ACCESS';
                console.error(res);
                alert(err.message);
            })
    }

})
