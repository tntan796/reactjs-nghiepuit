import CONNECT_API_CONSTANTS from '../constants/connect-api.constants';


let initial = [
    {
      "id": 1,
      "name": "Điện thoại OPPO A92",
      "url": "https://cdn.tgdd.vn/Products/Images/42/220654/oppo-a92-tim-400x460-400x460.png",
      "description": "OPPO A92 là mẫu smartphone tầm trung vừa mới được OPPO ra mắt đầu tháng 5/2020. Chiếc điện thoại gây ấn tượng với thiết kế màn hình khoét lỗ tràn viền, cụm 4 camera ấn tượng"
    },
    {
      "id": 2,
      "name": "Điện thoại OPPO Reno4",
      "url": "https://cdn.tgdd.vn/Products/Images/42/222596/oppo-reno4-201120-111135-400x460.png",
      "description": "OPPO Reno4 - Chiếc điện thoại có thiết kế thời thượng, hiệu năng mạnh mẽ cùng bộ ba camera siêu ấn tượng, tối ưu hóa cho chụp ảnh và quay phim siêu sắc nét, hứa hẹn sẽ"
    },
    {
      "id": 3,
      "name": "Điện thoại OPPO Reno3",
      "url": "https://cdn.tgdd.vn/Products/Images/42/213591/oppo-reno3-trang-400x460-400x460.png",
      "description": "OPPO Reno3 là một sản phẩm ở phân khúc tầm trung nhưng vẫn sở hữu cho mình ngoại hình bắt mắt, cụm camera chất lượng và cùng nhiều đột phá về màn hình cũng như hiệu năng."
    }
  ];

const productListReducer = (state = initial, action) => {
    switch (action.type) {
        case CONNECT_API_CONSTANTS.PRODUCT_LIST.GET:
            return state;
        default:
            return state;
    }
}

export default productListReducer;