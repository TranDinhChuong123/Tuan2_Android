var f = function (relsolve, reject) {
    //relsolve();
    //reject();
}

var promise = new Promise(f);
promise.then(
    function () {
        console.log('Successful!');
    }
)
    .catch(
        function () {
            console.log('UnSuccessful!');
        }

    ).finally(
        function () {
            console.log('Finally!');
        }

    );
