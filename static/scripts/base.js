console.log("Hello Everyone!!");

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/serviceworker.js", {
            scope: ".",
        })
        .then(
            (registration) => {
                console.log(
                    "ServiceWorker registration successful with scope: ",
                    registration.scope
                );
            },
            (err) => {
                console.log("ServiceWorker registration failed: ", err);
            }
        );
}
