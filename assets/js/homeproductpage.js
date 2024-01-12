document.addEventListener('DOMContentLoaded', function() {
    const categoryItems = document.querySelectorAll('.category-item');
    const mobileCategoryItems = document.querySelectorAll('.mobile-category__item');
    const productPages = document.querySelectorAll('.home-product');

    // Xử lý sự kiện click vào danh mục "Sơ mi"
    categoryItems[1].addEventListener('click', function() {
        hideAllProductPages();
        document.getElementById('home-product-page-2').style.display = 'block';
        toggleActiveClass(1);
        // Ngăn chặn hành vi mặc định của thẻ a
        event.preventDefault();
    });

    // Xử lý sự kiện click vào danh mục "Áo thun"
    categoryItems[2].addEventListener('click', function() {
        hideAllProductPages();
        document.getElementById('home-product-page-3').style.display = 'block';
        toggleActiveClass(2);
        // Ngăn chặn hành vi mặc định của thẻ a
        event.preventDefault();
    });

    // Xử lý sự kiện click vào danh mục "Áo khoác"
    categoryItems[0].addEventListener('click', function() {
        hideAllProductPages();
        document.getElementById('home-product-page-1').style.display = 'block';
        toggleActiveClass(0);
        // Ngăn chặn hành vi mặc định của thẻ a
        event.preventDefault();
    });

    // Hàm ẩn tất cả các trang sản phẩm
    function hideAllProductPages() {
        productPages.forEach(function(page) {
            page.style.display = 'none';
        });
    }


    // Xử lý sự kiện click vào danh mục trên di động
    mobileCategoryItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            // Ngăn chặn hành vi mặc định của thẻ a
            event.preventDefault();

            hideAllProductPages();
            
            // Hiển thị trang sản phẩm tương ứng với danh mục được chọn
            if (index === 0) {
                document.getElementById('home-product-page-1').style.display = 'block';
            } else if (index === 1) {
                document.getElementById('home-product-page-2').style.display = 'block';
            } else if (index === 2) {
                document.getElementById('home-product-page-3').style.display = 'block';
            }
        });
    });


    // // Xử lý sự kiện click vào danh mục "Sơ mi"
    // categoryItems[1].addEventListener('click', function() {
    //     toggleActiveClass(1);
    // });

    // // Xử lý sự kiện click vào danh mục "Áo thun"
    // categoryItems[2].addEventListener('click', function() {
    //     toggleActiveClass(2);
    // });

    // // Xử lý sự kiện click vào danh mục "Áo khoác"
    // categoryItems[0].addEventListener('click', function() {
    //     toggleActiveClass(0);
    // });

    // Hàm để thêm hoặc xóa lớp category-item--active và điều chỉnh màu sắc
    function toggleActiveClass(index) {
        categoryItems.forEach(function(item, idx) {
            if (idx === index) {
                item.classList.add('category-item--active');
            } else {
                item.classList.remove('category-item--active');
            }
        });
    }


    const emptyHeartIcons = document.querySelectorAll('.home-product-item__like-icon-empty');
    const filledHeartIcons = document.querySelectorAll('.home-product-item__like-icon-fill');

    // Xử lý sự kiện click vào biểu tượng trái tim trống
    emptyHeartIcons.forEach(function(icon, index) {
        icon.addEventListener('click', function(event) {
            // Ngăn chặn sự kiện click lan truyền lên các phần tử cha
            event.stopPropagation();

            // Ẩn biểu tượng trống, hiển thị biểu tượng điền tương ứng
            icon.style.display = 'none';
            filledHeartIcons[index].style.display = 'inline-block';
        });
    });

    // Xử lý sự kiện click vào biểu tượng trái tim điền
    filledHeartIcons.forEach(function(icon, index) {
        icon.addEventListener('click', function(event) {
            // Ngăn chặn sự kiện click lan truyền lên các phần tử cha
            event.stopPropagation();

            // Ẩn biểu tượng điền, hiển thị biểu tượng trống tương ứng
            icon.style.display = 'none';
            emptyHeartIcons[index].style.display = 'inline-block';
        });
    });

    // Lấy tất cả các thẻ sản phẩm và modal
    var productLinks = document.querySelectorAll(".home-product-item");
    var modals = document.querySelectorAll(".product-modal");
    var productDetail = document.querySelector(".product-detail");

    // Hàm hiển thị modal theo ID sản phẩm
    function showModal(productId) {
        // Tìm modal có ID tương ứng
        var modal = document.getElementById(productId);

        // Hiển thị modal
        modal.style.display = "flex"; // Hiển thị modal, có thể sử dụng "block" hoặc "flex" tùy vào CSS của bạn
    }

    // Thêm sự kiện click vào từng thẻ sản phẩm
    productLinks.forEach(function (productLink) {
        productLink.addEventListener("click", function (event) {
            // Ngăn chặn hành vi mặc định của thẻ a
            event.preventDefault();

            // Lấy ID sản phẩm từ thuộc tính data
            var productId = productLink.getAttribute("data-product-id");

            // Gọi hàm hiển thị modal
            showModal(productId);
        });
    });

    // Thêm sự kiện click vào nút đóng modal cho từng modal
    modals.forEach(function (modal) {
        var closeDetailIcon = modal.querySelector(".close-detail-icon");
        closeDetailIcon.addEventListener("click", function () {
            // Ẩn modal khi nhấp vào nút đóng
            modal.style.display = "none";
        });

        // Thêm sự kiện click vào overlay (nền) để ẩn modal
        var modalOverlay = modal.querySelector(".modal__overlay");
        modalOverlay.addEventListener("click", function () {
            // Ẩn modal khi nhấp vào overlay
            modal.style.display = "none";
        });
    });

    
    // Lấy danh sách các button
    var filterButtons = document.querySelectorAll('.home-filter__btn');

    // Thêm sự kiện click cho mỗi button
    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Loại bỏ class btn--primary từ tất cả các button
            filterButtons.forEach(function (btn) {
                btn.classList.remove('btn--primary');
            });

            // Thêm class btn--primary cho button được click
            button.classList.add('btn--primary');
        });
    });


    
});
