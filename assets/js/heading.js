document.addEventListener('DOMContentLoaded', function() {
    var registerLink = document.getElementById('registerLink');
    var loginLink = document.getElementById('loginLink');
    var registerForm = document.getElementById('registerForm');
    var loginForm = document.getElementById('loginForm');
    var modalContainer = document.getElementById('modalContainer');

    registerLink.addEventListener('click', function (e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
        modalContainer.style.display = 'flex';
    });

    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        modalContainer.style.display = 'flex';
    });

    // Chuyển từ Đăng ký sang Đăng nhập
    document.getElementById('registerToLogin').addEventListener('click', function () {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    // Chuyển từ Đăng nhập sang Đăng ký
    document.getElementById('loginToRegister').addEventListener('click', function () {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    // Sự kiện click cho nút "Trở lại" của form Đăng ký
    document.getElementById('registerBackButton').addEventListener('click', function () {
        modalContainer.style.display = 'none';
    });

    // Sự kiện click cho nút "Trở lại" của form Đăng nhập
    document.getElementById('loginBackButton').addEventListener('click', function () {
        modalContainer.style.display = 'none';
    });
    
    overlay.addEventListener('click', function () {
        modalContainer.style.display = 'none';
    });


    // Đếm số lượng sản phẩm trong giỏ hàng và cập nhật số lượng hiển thị
    updateCartNotice();

    // (Chỉ là ví dụ, bạn cần thay thế sự kiện này bằng cách thêm/sửa/xóa sản phẩm trong ứng dụng của bạn)
    document.getElementById('addProductButton').addEventListener('click', function () {
        // Xử lý thêm sản phẩm vào giỏ hàng
        // ...

        // Sau khi thêm/sửa/xóa sản phẩm, cập nhật số lượng hiển thị
        updateCartNotice();
    });

    // Sự kiện khi click nút "Xoá"
    document.querySelectorAll('.header__cart-item-remove').forEach(function (removeButton) {
        removeButton.addEventListener('click', function () {
            // Lấy thẻ cha li và xoá nó khi nút "Xoá" được bấm
            var listItem = this.closest('.header__cart-item');
            listItem.remove();

            // Sau khi xoá sản phẩm, cập nhật số lượng hiển thị
            updateCartNotice();
        });
    });

    // Hàm cập nhật số lượng hiển thị
    function updateCartNotice() {
        var cartItems = document.querySelectorAll('.header__cart-list-item .header__cart-item');
        var cartNotice = document.querySelector('.header__cart-notice');

        // Cập nhật số lượng hiển thị bằng số lượng sản phẩm trong giỏ hàng
        cartNotice.textContent = cartItems.length;
    }
});