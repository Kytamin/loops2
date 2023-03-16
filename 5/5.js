function final() {
    let begin = +document.getElementById("money").value
    let time = +document.getElementById("time").value
    let rate = +document.getElementById("lai").value


    for (let i = 1; i <= time; i++) {
        begin = begin +  ((begin * rate)/100)

    }
    document.getElementById("result").innerHTML = `Tổng số tiền phải trả ${begin.toLocaleString()} VND`

}