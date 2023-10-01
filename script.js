var buttonAppearanceTime;  // Biến lưu thời điểm khi button xuất hiện
$(document).ready(function() {
    // Sự kiện click trên nút "Click"
    $(document).on("click", "#generateButton", function () {
        console.log("clicked"); //debug
        var clickTime = new Date();  // Lấy thời điểm khi button được click
        var elapsedTime = (clickTime - buttonAppearanceTime) / 1000;  // Tính thời gian giữa hai sự kiện (ms)
        console.log(elapsedTime);   //debug
        $('#time').text("Your time: " + elapsedTime.toFixed(2) + "s");
        createRandomButton();
    });
});
// Hàm tạo button và đặt vị trí ngẫu nhiên
function createRandomButton() {
    var buttonToDelete = document.getElementById("generateButton");
    if (buttonToDelete) {
        buttonToDelete.remove();
    }
    // Tạo một button mới
    var button = $('<button id="generateButton"></button>');
    // Đặt class cho button để áp dụng CSS
    var cssClass = ["random-button", "random1-button", "random2-button", "triangle-button",
     "circle-button", "circle1-button", "circle2-button"];
    console.log(cssClass[Math.floor(Math.random() * cssClass.length)]); //debug
    // Lấy một phần tử tương ứng với chỉ số ngẫu nhiên từ 0 đến độ dài của mảng
    button.addClass(cssClass[Math.floor(Math.random() * cssClass.length)]);
    // Đặt vị trí ngẫu nhiên trên màn hình
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    var randomX = Math.random() * (screenWidth - 150); // Độ rộng màn hình trừ đi kích thước button
    var randomY = Math.random() * (screenHeight - 150); // Chiều cao màn hình trừ đi kích thước button
    // Đặt vị trí cho button
    button.css({
        left: randomX + "px" ,
        top: randomY + "px"
    });
    // Lưu thời điểm khi button xuất hiện
    buttonAppearanceTime = new Date();
    // Thêm button vào buttonContainer
    $('#buttonContainer').append(button);
}
