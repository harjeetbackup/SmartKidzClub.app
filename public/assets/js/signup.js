const API_URL = 'https://us-central1-smartkidzclub-6f399.cloudfunctions.net/signup',
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

		function dCustomPopup(dPopupID,dCustomMessage){
			document.getElementById("dModalPopupLauncher").setAttribute("data-target", dPopupID);
			if (dCustomMessage != ""){
				document.getElementsByClassName("dCustomMessage")[0].innerHTML=dCustomMessage;
			}
			document.getElementsByClassName("btn btn-primary")[0].click();
		}
		
function validate(email, pwd, pwdCnf, code, terms) {
    const valEmail = email.trim(),
        valPwd = pwd.trim(),
        valPwdCnf = pwdCnf.trim(),
        valCode = String(code || '').trim();

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
        class_code: valCode.toUpperCase(),
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
                elSubmit.innerText = 'SIGN UP';
                console.dir(res);

                //alert(res.message);
								if(res.message == "Registered Successfully")
									dCustomPopup("#dPopup01","");
								else
									dCustomPopup("#dPopup02",res.message);
								
                if (res.success) {
                    elCode.value = null;
                    elPwd.value = null;
                    elEmail.value = null;
                    elPwdCnf.value = null;
                    elTerms.value = false;
                    elTerms.checked = false;
                }
            })
            .catch(err => {
                elSubmit.disabled = false;
                elSubmit.innerText = 'SIGN UP';
                console.error(res);
                alert(err.message);
            })
    }

})
