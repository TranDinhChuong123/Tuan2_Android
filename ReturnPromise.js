var f = function (resolve, reject) {
    // Giả lập một tác vụ bất đồng bộ đơn giản
    setTimeout(function () {
        // Khi tác vụ hoàn thành thành công, gọi resolve
        resolve("Tác vụ đã hoàn thành thành công");
        
        // Khi tác vụ thất bại, gọi reject
        // reject("Tác vụ đã thất bại");
    }, 2000); // Đợi 2 giây trước khi hoàn thành tác vụ
}

var promise = new Promise(f);
promise.then(
    function () {
        return new Promise(function(resolve){
            setTimeout(resolve, 3000);
        });
    }
)
.then(
    function (data) {
        console.log(data);
        return 2;
    }
)
.then(
    function (data) {
        console.log(data);
    }
)


