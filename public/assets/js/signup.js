const API_URL = null,
    elForm = document.getElementById('signup'),
    elEmail = document.getElementById('email'),
    elPwd = document.getElementById('pwd'),
    elPwdCnf = document.getElementById('pwdCnf'),
    elCode = document.getElementById('code'),
    elTerms = document.getElementById('terms'),
    elSubmit = document.getElementById('submit'),

    ErrorMsg = {
        email: "Please fill Email",
        pwd: "Please fill Password",
        pwdPattern: "Password must have atleast 6 characters",
        pwdCnf: "Please fill Confirm Password",
        pwdCnfMatch: "Confirm Password must match Password",
        code: "Please fill Class Code",
        terms: "Please accept Terms & Policies",
    }

function validate(email, pwd, pwdCnf, code, terms) {
    const valEmail = email.trim(),
        valPwd = pwd.trim(),
        valPwdCnf = pwdCnf.trim(),
        valCode = code.trim();

    if (!valEmail)
        return [ErrorMsg.email, null];

    if (!valPwd)
        return [ErrorMsg.pwd, null];
    else {
        const passed = pwd.length >= 6;
        if (!passed)
            return [ErrorMsg.pwdPattern, null];
    }

    if (!valPwdCnf)
        return [ErrorMsg.pwdCnf, null];
    else {
        if (valPwd !== valPwdCnf)
            return [ErrorMsg.pwdCnfMatch, null];
    }

    if (!valCode)
        return [ErrorMsg.code, null];

    if (!terms)
        return [ErrorMsg.terms, null];

    return [null, {
        email: valEmail,
        password: valPwd,
        code: valCode,
    }]
}

elForm.addEventListener('submit', e => {
    e.preventDefault();

    const [error, formValue] = validate(
        elEmail.value,
        elPwd.value,
        elPwdCnf.value,
        elCode.value,
        elTerms.checked,
    );

    if (error) {
        return alert(error);
    } else {
        if (!API_URL) {
            return alert(JSON.stringify({
                errors: [
                    "API_URL not found.",
                    "'data' given below is the POST payload"
                ],
                data: formValue
            }, null, 2))
        }

        elSubmit.disabled = true;
        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(formValue)
        })
            .then(res => res.json())
            .then(res => {
                elSubmit.disabled = false;
                alert(JSON.stringify(res, null, 2));
            })
            .catch(err => {
                elSubmit.disabled = false;
                alert(JSON.stringify(err, null, 2));
            })
    }

})
