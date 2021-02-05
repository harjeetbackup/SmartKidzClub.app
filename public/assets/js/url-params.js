let refUser = new URL(location.href).searchParams.get("via");

function appendRefUser(){
    if (!refUser) return;
    const els = document.querySelectorAll('a.subscribe');

    for (let i = 0; i < els.length; i++) {
        const a = els[i];
        if (!a.href.includes('via')){
            let url = new URL(a.href);
            url.searchParams.append('via', refUser);
            a.href = url.toString();
        }
    }
}

appendRefUser();
